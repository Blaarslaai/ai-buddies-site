import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://iqppghcmtnenpcmsespb.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlxcHBnaGNtdG5lbnBjbXNlc3BiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzkyOTE2NTcsImV4cCI6MjA1NDg2NzY1N30.sRJNvOLMJSBVhOYhIpOpVK97BqH0LiNR4dsLnk9u1SQ"
);

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { token } = req.query;
  if (!token) {
    return res.status(400).json({ error: "Invalid token" });
  }

  const { error } = await supabase
    .from("emailSubscriptions")
    .update({ subscribed: true })
    .eq("token", token);

  if (error) {
    return res.status(500).json({ error: error.message });
  }

  // Redirect the user to a thank-you page
  res.writeHead(302, { Location: "https://astralcomputers.net/thankYou" });
  res.end();
}
