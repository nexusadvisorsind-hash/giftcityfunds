"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { createHash, timingSafeEqual } from "crypto";

const COOKIE = "av_admin";

function expectedUser() {
  return (process.env.ADMIN_LEADS_USER || "admin").trim().toLowerCase();
}
function expectedPassword() {
  return (process.env.ADMIN_LEADS_KEY || "").trim();
}
/** Value stored in the cookie: a hash, never the password itself. */
export async function sessionToken() {
  return createHash("sha256").update(`${expectedUser()}::${expectedPassword()}::av`).digest("hex");
}

function same(a: string, b: string) {
  const x = createHash("sha256").update(a).digest();
  const y = createHash("sha256").update(b).digest();
  return timingSafeEqual(x, y);
}

export async function login(_prev: { error?: string; username?: string } | undefined, form: FormData) {
  if (!expectedPassword()) {
    return { error: "No password is set on the server yet. Add ADMIN_LEADS_KEY in Vercel and redeploy." };
  }
  const typedUser = String(form.get("username") ?? "");
  const user = typedUser.trim().toLowerCase();
  const pass = String(form.get("password") ?? "").trim();
  // Small delay slows down guessing.
  await new Promise((r) => setTimeout(r, 800));
  if (!same(user, expectedUser()) || !same(pass, expectedPassword())) {
    return { error: "Username or password is not correct.", username: typedUser };
  }
  const jar = await cookies();
  jar.set(COOKIE, await sessionToken(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/admin",
    maxAge: 60 * 60 * 8,
  });
  redirect("/admin/leads");
}

export async function logout() {
  const jar = await cookies();
  jar.delete({ name: COOKIE, path: "/admin" });
  redirect("/admin/leads");
}

export async function isLoggedIn() {
  const jar = await cookies();
  if (!expectedPassword()) return false;
  const c = jar.get(COOKIE)?.value;
  return !!c && same(c, await sessionToken());
}
