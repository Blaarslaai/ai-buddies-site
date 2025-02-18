import { Buffer } from "buffer";
import { createClient } from "@supabase/supabase-js";
import { v4 as uuidv4 } from "uuid";

const supabase = createClient(
  "https://iqppghcmtnenpcmsespb.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlxcHBnaGNtdG5lbnBjbXNlc3BiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzkyOTE2NTcsImV4cCI6MjA1NDg2NzY1N30.sRJNvOLMJSBVhOYhIpOpVK97BqH0LiNR4dsLnk9u1SQ"
);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { type, name, email, from_name, message } = req.body;

  const API_KEY = process.env.MAILGUN_API_KEY;
  const DOMAIN = process.env.MAILGUN_DOMAIN;

  if (!API_KEY || !DOMAIN) {
    return res.status(500).json({ error: "Missing Mailgun credentials" });
  }

  const url = `https://api.eu.mailgun.net/v3/${DOMAIN}/messages`;

  const token = uuidv4();
  const confirmUrl = `https://astralcomputers.net/api/confirm?token=${token}`;

  let formData = undefined;

  if (type === "sub") {
    formData = new URLSearchParams();
    formData.append("from", `AI Buddies <no-reply@${DOMAIN}>`);
    formData.append("to", email);
    formData.append("subject", "Subscription Confirmation");
    formData.append(
      "html",
      `<h1>Welcome, ${name}!</h1><p>Thanks for joining us.</p><br /><a href="${confirmUrl}">Confirm Subscription</a>`
    );
  } else if (type === "con") {
    formData = new URLSearchParams();
    formData.append("from", `AI Buddies <no-reply@${DOMAIN}>`);
    formData.append("to", "valdez.pretorius@gmail.com");
    formData.append("subject", "Contact Us Submission");
    formData.append(
      "html",
      `<h1>Message from ${from_name}.<br />${email}</h1><p>${message}</p>`
    );
  }

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Basic ${Buffer.from(`api:${API_KEY}`).toString(
          "base64"
        )}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formData.toString(), // Ensure proper encoding
    });

    const responseText = await response.text();
    let data;
    try {
      data = JSON.parse(responseText); // Try to parse JSON
    } catch {
      data = { message: responseText }; // Return raw text if not JSON
    }

    if (!response.ok) {
      return res
        .status(response.status)
        .json({ error: data.message || "Mailgun error" });
    } else {
      const { error } = await supabase
        .from("emailSubscriptions")
        .insert([{ email: email, token: token, name: name }]);

      if (error) {
        console.error("Error inserting data:", error);
      }
    }

    return res
      .status(200)
      .json({ success: true, message: "Email sent successfully!", data });
  } catch (error) {
    console.error("Mailgun Error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
