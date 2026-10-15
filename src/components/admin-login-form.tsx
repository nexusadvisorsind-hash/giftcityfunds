"use client";

import { useActionState } from "react";
import { login } from "@/app/admin/leads/actions";

export function AdminLoginForm() {
  const [state, action, pending] = useActionState(login, undefined);
  return (
    <form action={action} className="bg-surface border border-border rounded-2xl p-6 md:p-8 space-y-5 max-w-sm">
      <div>
        <label htmlFor="username" className="font-body text-sm font-semibold text-primary block mb-1.5">Username</label>
        <input id="username" name="username" defaultValue={state?.username ?? ""} autoComplete="username" required
          className="w-full rounded-md border border-border bg-background px-4 py-2.5 font-body text-sm focus:outline-none focus:ring-2 focus:ring-secondary" />
      </div>
      <div>
        <label htmlFor="password" className="font-body text-sm font-semibold text-primary block mb-1.5">Password</label>
        <input id="password" name="password" type="password" autoComplete="current-password" required
          className="w-full rounded-md border border-border bg-background px-4 py-2.5 font-body text-sm focus:outline-none focus:ring-2 focus:ring-secondary" />
      </div>
      {state?.error && <p role="alert" className="text-sm text-red-600">{state.error}</p>}
      <button type="submit" disabled={pending}
        className="rounded-md bg-primary px-5 py-2.5 font-body text-sm font-semibold text-primary-foreground disabled:opacity-60">
        {pending ? "Checking..." : "Sign in"}
      </button>
    </form>
  );
}
