import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { SEO } from "@/components/SEO";
import { CheckCircle2, AlertCircle } from "lucide-react";

const Auth = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error"; message: string } | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) navigate("/admin", { replace: true });
    });
    const { data: sub } = supabase.auth.onAuthStateChange((_e, session) => {
      if (session) navigate("/admin", { replace: true });
    });
    return () => sub.subscription.unsubscribe();
  }, [navigate]);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);
    try {
      if (mode === "signup") {
        const { error, data } = await supabase.auth.signUp({
          email,
          password,
          options: { emailRedirectTo: `${window.location.origin}/admin` },
        });
        if (error) throw error;
        if (data.user?.identities?.length === 0) {
          setStatus({
            type: "error",
            message: "This email is already registered. Please sign in instead.",
          });
        } else if (data.session) {
          toast.success("Account created. Redirecting…");
        } else {
          setStatus({
            type: "success",
            message: `Account created for ${email}. Please check your inbox (and spam folder) and click the confirmation link before signing in. After confirming, reply here with "done" so I can grant admin access.`,
          });
        }
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
      }
    } catch (err: any) {
      setStatus({ type: "error", message: err.message ?? "Authentication failed" });
      toast.error(err.message ?? "Authentication failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SEO title="Admin Sign In — GIFT City Funds" description="Administrator sign in." canonical="https://giftcityfunds.in/auth" />
      <div className="min-h-[70vh] flex items-center justify-center px-4 py-16 bg-surface">
        <form onSubmit={submit} className="w-full max-w-md bg-background border border-border rounded-lg p-8 space-y-5">
          <h1 className="font-heading text-2xl font-bold text-primary">
            {mode === "signin" ? "Admin Sign In" : "Create Admin Account"}
          </h1>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required minLength={8} />
          </div>
          <Button type="submit" disabled={loading} className="w-full">
            {loading ? "Please wait…" : mode === "signin" ? "Sign In" : "Sign Up"}
          </Button>
          <button
            type="button"
            className="text-sm text-secondary hover:underline w-full text-center"
            onClick={() => setMode(mode === "signin" ? "signup" : "signin")}
          >
            {mode === "signin" ? "Need to create an account?" : "Already have an account? Sign in"}
          </button>
        </form>
      </div>
    </>
  );
};

export default Auth;