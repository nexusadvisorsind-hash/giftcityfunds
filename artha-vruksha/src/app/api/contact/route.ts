import { NextResponse } from "next/server";
import { ensureContactTable, getPool } from "@/lib/db";
import { PRIVACY_NOTICE_VERSION } from "@/lib/privacy";
import { notifyNewLead } from "@/lib/notify";

const VERTICALS = ["Mutual Funds", "Real Estate", "Insurance", "Loans", "General"];

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Hidden field that real visitors never fill in; bots often do.
    if (body?.website) return NextResponse.json({ success: true });

    const name = String(body?.name ?? "").trim();
    const email = String(body?.email ?? "").trim();
    const phone = String(body?.phone ?? "").trim();
    const vertical = VERTICALS.includes(body?.vertical) ? body.vertical : "General";
    const message = body?.message ? String(body.message).trim().slice(0, 1000) : null;

    if (name.length < 2 || name.length > 120 || !/^\S+@\S+\.\S+$/.test(email) || email.length > 200 || !/^[6-9]\d{9}$/.test(phone)) {
      return NextResponse.json({ error: "Please check the details entered" }, { status: 400 });
    }
    // DPDP Act 2023: personal data is processed only with the person's consent.
    if (body?.consent !== true) {
      return NextResponse.json({ error: "Consent is required" }, { status: 400 });
    }

    const pool = getPool();
    if (pool) {
      try {
        await ensureContactTable();
        await pool.query(
          `INSERT INTO contact_submissions
             (name, email, phone, vertical, message, consent_given, consent_at, consent_notice_version)
           VALUES ($1, $2, $3, $4, $5, true, now(), $6)`,
          [name, email, phone, vertical, message, PRIVACY_NOTICE_VERSION]
        );
      } catch (dbError) {
        // Log the failure (never the person's details) so it shows in Vercel's function logs.
        console.error("Failed to save contact submission to database:", dbError instanceof Error ? dbError.message : "unknown error");
      }
    } else {
      console.warn("No database configured: a contact submission was received but not stored.");
    }

    // Alert the team (email / WhatsApp, if configured). Never blocks the visitor.
    await notifyNewLead({ name, email, phone, vertical, message });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
