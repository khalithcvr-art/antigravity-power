// Receives contact-form submissions from expediaservices.ae.
//
// verify_jwt is FALSE on purpose: a website visitor has no Supabase session.
// That makes this endpoint public, so everything below assumes hostile input.
//
// It only ever INSERTs. It never reads enquiries back out, so even a total
// endpoint returns no lead records. Its service credential must remain private.

import { createClient } from "jsr:@supabase/supabase-js@2";

const ALLOWED_ORIGINS = [
  "https://expediaservices.ae",
  "https://www.expediaservices.ae",
];

function corsHeaders(origin: string | null) {
  const allow = origin && ALLOWED_ORIGINS.includes(origin) ? origin : ALLOWED_ORIGINS[0];
  return {
    "Access-Control-Allow-Origin": allow,
    "Access-Control-Allow-Headers": "content-type, apikey, authorization",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Content-Type": "application/json",
  };
}

import { prepareEnquiry } from "./policy.js";

Deno.serve(async (req: Request) => {
  const origin = req.headers.get("origin");
  const headers = corsHeaders(origin);

  if (req.method === "OPTIONS") return new Response("ok", { headers });
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "method_not_allowed" }), { status: 405, headers });
  }

  let body: Record<string, unknown>;
  try {
    body = await req.json();
  } catch {
    return new Response(JSON.stringify({ error: "invalid_json" }), { status: 400, headers });
  }

  const prepared = prepareEnquiry(body);
  if (prepared.ignored) return new Response(JSON.stringify({ ok: true }), { status: 200, headers });
  if (prepared.error) return new Response(JSON.stringify({ error: prepared.error }), { status: 400, headers });
  const raw = prepared.identity;
  const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(raw));
  const dedupe_key = Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, "0")).join("");

  const supabase = createClient(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
  );

  const { error } = await supabase.from("website_enquiries").insert({
    ...prepared.fields,
    dedupe_key,
  });

  if (error) {
    // 23505 = unique_violation = the duplicate we WANT to swallow. The visitor
    // sees success because their enquiry is already safely recorded.
    if ((error as { code?: string }).code === "23505") {
      return new Response(JSON.stringify({ ok: true, duplicate: true }), { status: 200, headers });
    }
    console.error("website-enquiry insert failed:", error.message);
    return new Response(JSON.stringify({ error: "could_not_save" }), { status: 500, headers });
  }

  return new Response(JSON.stringify({ ok: true }), { status: 200, headers });
});

