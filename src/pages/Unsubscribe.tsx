import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

const Unsubscribe = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const [status, setStatus] = useState<"loading" | "valid" | "used" | "invalid" | "done" | "error">("loading");
  const [processing, setProcessing] = useState(false);

  useEffect(() => {
    if (!token) { setStatus("invalid"); return; }
    const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
    const anonKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;
    fetch(`${supabaseUrl}/functions/v1/handle-email-unsubscribe?token=${token}`, {
      headers: { apikey: anonKey },
    })
      .then((r) => r.json())
      .then((data) => {
        if (data.valid === false && data.reason === "already_unsubscribed") setStatus("used");
        else if (data.valid) setStatus("valid");
        else setStatus("invalid");
      })
      .catch(() => setStatus("error"));
  }, [token]);

  const handleUnsubscribe = async () => {
    setProcessing(true);
    try {
      const { data } = await supabase.functions.invoke("handle-email-unsubscribe", { body: { token } });
      if (data?.success) setStatus("done");
      else if (data?.reason === "already_unsubscribed") setStatus("used");
      else setStatus("error");
    } catch { setStatus("error"); }
    setProcessing(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="max-w-md w-full text-center space-y-6">
        <h1 className="text-2xl font-bold text-foreground font-heading">Email Preferences</h1>
        {status === "loading" && <p className="text-muted-foreground">Verifying…</p>}
        {status === "valid" && (
          <>
            <p className="text-muted-foreground">Click below to unsubscribe from future emails.</p>
            <button onClick={handleUnsubscribe} disabled={processing}
              className="px-6 py-2 bg-primary text-primary-foreground rounded-lg font-medium disabled:opacity-50">
              {processing ? "Processing…" : "Confirm Unsubscribe"}
            </button>
          </>
        )}
        {status === "done" && <p className="text-primary">You have been successfully unsubscribed.</p>}
        {status === "used" && <p className="text-muted-foreground">You are already unsubscribed.</p>}
        {status === "invalid" && <p className="text-destructive">Invalid or expired unsubscribe link.</p>}
        {status === "error" && <p className="text-destructive">Something went wrong. Please try again later.</p>}
      </div>
    </div>
  );
};

export default Unsubscribe;
