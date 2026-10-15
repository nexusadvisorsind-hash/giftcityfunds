import { getPool } from "@/lib/db";
import { isLoggedIn, logout } from "./actions";
import { AdminLoginForm } from "@/components/admin-login-form";

export const metadata = { robots: { index: false, follow: false } };
// Always check the sign-in cookie on every visit; never serve a saved copy.
export const dynamic = "force-dynamic";

type Submission = {
  id: number;
  name: string;
  email: string;
  phone: string;
  vertical: string;
  message: string | null;
  created_at: string;
};

async function getSubmissions(): Promise<{ rows: Submission[]; error?: string }> {
  const pool = getPool();
  if (!pool) {
    return { rows: [], error: "No database is connected yet (POSTGRES_URL / DATABASE_URL is not set)." };
  }
  try {
    const result = await pool.query<Submission>(
      "SELECT id, name, email, phone, vertical, message, created_at FROM contact_submissions ORDER BY created_at DESC LIMIT 200"
    );
    return { rows: result.rows };
  } catch {
    return { rows: [], error: "Could not read from the database. Has the contact_submissions table been created yet? (It's created automatically the first time someone submits the form.)" };
  }
}

export default async function AdminLeads() {
  if (!(await isLoggedIn())) {
    return (
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="font-heading font-bold text-2xl md:text-3xl text-primary mb-2">Leads</h1>
        <p className="font-body text-sm text-foreground-muted mb-8">Sign in to see contact form enquiries.</p>
        <AdminLoginForm />
      </div>
    );
  }

  const { rows, error } = await getSubmissions();

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex items-start justify-between gap-4">
        <h1 className="font-heading font-bold text-2xl md:text-3xl text-primary mb-2">Contact Form Leads</h1>
        <form action={logout}><button className="font-body text-sm font-semibold text-secondary hover:underline">Sign out</button></form>
      </div>
      <p className="font-body text-sm text-foreground-muted mb-8">
        {rows.length} submission{rows.length === 1 ? "" : "s"} — most recent first.
      </p>

      {error && (
        <div className="bg-accent/10 border border-accent/30 rounded-xl p-4 mb-8">
          <p className="font-body text-sm text-foreground">{error}</p>
        </div>
      )}

      {rows.length === 0 && !error && (
        <p className="font-body text-sm text-foreground-muted">No submissions yet.</p>
      )}

      {rows.length > 0 && (
        <div className="overflow-x-auto bg-surface border border-border rounded-2xl">
          <table className="w-full text-left font-body text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="px-4 py-3 font-heading font-semibold text-primary">Date</th>
                <th className="px-4 py-3 font-heading font-semibold text-primary">Name</th>
                <th className="px-4 py-3 font-heading font-semibold text-primary">Email</th>
                <th className="px-4 py-3 font-heading font-semibold text-primary">Phone</th>
                <th className="px-4 py-3 font-heading font-semibold text-primary">Interested In</th>
                <th className="px-4 py-3 font-heading font-semibold text-primary">Message</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.id} className="border-b border-border last:border-0">
                  <td className="px-4 py-3 text-foreground-muted whitespace-nowrap">
                    {new Date(r.created_at).toLocaleString("en-IN", { dateStyle: "medium", timeStyle: "short" })}
                  </td>
                  <td className="px-4 py-3 text-foreground">{r.name}</td>
                  <td className="px-4 py-3 text-foreground-muted">
                    <a href={`mailto:${r.email}`} className="hover:text-secondary">{r.email}</a>
                  </td>
                  <td className="px-4 py-3 text-foreground-muted">
                    <a href={`tel:${r.phone}`} className="hover:text-secondary">{r.phone}</a>
                  </td>
                  <td className="px-4 py-3 text-foreground-muted">{r.vertical}</td>
                  <td className="px-4 py-3 text-foreground-muted max-w-xs truncate" title={r.message ?? ""}>
                    {r.message || "—"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
