import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/SEO";
import { toast } from "sonner";

type Submission = {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  whatsapp: string | null;
  location: string | null;
  country: string | null;
  investor_type: string | null;
  message: string | null;
  created_at: string;
};

const Admin = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [authorized, setAuthorized] = useState(false);
  const [rows, setRows] = useState<Submission[]>([]);

  useEffect(() => {
    let mounted = true;
    const init = async () => {
      const { data: userRes } = await supabase.auth.getUser();
      if (!userRes.user) {
        navigate("/auth", { replace: true });
        return;
      }
      const { data: roleData } = await supabase
        .from("user_roles")
        .select("role")
        .eq("user_id", userRes.user.id)
        .eq("role", "admin")
        .maybeSingle();
      if (!roleData) {
        if (mounted) {
          setAuthorized(false);
          setLoading(false);
        }
        return;
      }
      const { data, error } = await supabase
        .from("contact_submissions")
        .select("*")
        .order("created_at", { ascending: false });
      if (error) toast.error(error.message);
      if (mounted) {
        setRows((data as Submission[]) ?? []);
        setAuthorized(true);
        setLoading(false);
      }
    };
    init();
    return () => {
      mounted = false;
    };
  }, [navigate]);

  const signOut = async () => {
    await supabase.auth.signOut();
    navigate("/auth", { replace: true });
  };

  return (
    <>
      <SEO title="Admin — Contact Submissions" description="Admin view of contact submissions." canonical="https://giftcityfunds.in/admin" />
      <div className="min-h-[70vh] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-8">
          <h1 className="font-heading text-3xl font-bold text-primary">Contact Submissions</h1>
          <Button variant="outline" onClick={signOut}>Sign Out</Button>
        </div>

        {loading && <p className="text-foreground-muted">Loading…</p>}

        {!loading && !authorized && (
          <div className="bg-surface border border-border rounded-lg p-6">
            <p className="text-foreground">
              You're signed in but don't have admin access. Share your account email with the site owner to be granted access.
            </p>
          </div>
        )}

        {!loading && authorized && (
          <>
            <p className="text-sm text-foreground-muted mb-4">{rows.length} total submission{rows.length === 1 ? "" : "s"}</p>
            <div className="overflow-x-auto border border-border rounded-lg bg-background">
              <table className="w-full text-sm">
                <thead className="bg-surface">
                  <tr className="text-left">
                    <th className="p-3">Received</th>
                    <th className="p-3">Name</th>
                    <th className="p-3">Email</th>
                    <th className="p-3">Phone</th>
                    <th className="p-3">Country</th>
                    <th className="p-3">Investor</th>
                    <th className="p-3">Message</th>
                  </tr>
                </thead>
                <tbody>
                  {rows.map((r) => (
                    <tr key={r.id} className="border-t border-border align-top">
                      <td className="p-3 whitespace-nowrap">{new Date(r.created_at).toLocaleString()}</td>
                      <td className="p-3">{r.name}</td>
                      <td className="p-3"><a className="text-secondary hover:underline" href={`mailto:${r.email}`}>{r.email}</a></td>
                      <td className="p-3 whitespace-nowrap">{r.phone ?? r.whatsapp ?? "—"}</td>
                      <td className="p-3">{r.country ?? r.location ?? "—"}</td>
                      <td className="p-3">{r.investor_type ?? "—"}</td>
                      <td className="p-3 max-w-md whitespace-pre-wrap">{r.message ?? "—"}</td>
                    </tr>
                  ))}
                  {rows.length === 0 && (
                    <tr><td colSpan={7} className="p-6 text-center text-foreground-muted">No submissions yet.</td></tr>
                  )}
                </tbody>
              </table>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Admin;