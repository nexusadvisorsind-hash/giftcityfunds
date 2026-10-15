import { NextResponse } from "next/server";
import { ensureContactTable, getPool } from "@/lib/db";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    if (!body?.name || !body?.email || !body?.phone) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const pool = getPool();
    if (pool) {
      try {
        await ensureContactTable();
        await pool.query(
          `INSERT INTO contact_submissions (name, email, phone, vertical, message)
           VALUES ($1, $2, $3, $4, $5)`,
          [body.name, body.email, body.phone, body.vertical ?? "General", body.message ?? null]
        );
      } catch (dbError) {
        // Don't fail the user's submission just because the DB write failed —
        // log it so it's visible in Vercel's function logs, and fall through.
        console.error("Failed to save contact submission to database:", dbError);
      }
    } else {
      // No database connected yet (POSTGRES_URL / DATABASE_URL not set).
      // Falls back to a log line so nothing throws, but the lead is not
      // persisted anywhere until a Postgres database is added in Vercel.
      console.warn(
        "No database configured — contact submission was NOT persisted:",
        body
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
