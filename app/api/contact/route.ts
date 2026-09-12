import { NextResponse } from "next/server";

const escapeHtml = (value: string) =>
  value.replace(/[&<>"]/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
  }[character] ?? character));

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const name = String(body.name ?? "").trim().slice(0, 120);
    const email = String(body.email ?? "").trim().slice(0, 254);
    const need = String(body.need ?? "").trim().slice(0, 160);
    const timeline = String(body.timeline ?? "").trim().slice(0, 300);
    const message = String(body.message ?? "").trim().slice(0, 5000);
    const honeypot = String(body.companyWebsite ?? "").trim();
    const turnstileToken = String(body.turnstileToken ?? "");
    const elapsed = Date.now() - Number(body.startedAt ?? 0);

    if (honeypot || elapsed < 2500 || elapsed > 7_200_000) {
      return NextResponse.json({ ok: true });
    }

    if (!name || !email || !email.includes("@") || !turnstileToken) {
      return NextResponse.json({ ok: false }, { status: 400 });
    }

    const secret = process.env.TURNSTILE_SECRET_KEY;
    const resendApiKey = process.env.RESEND_API_KEY;

    if (!secret || !resendApiKey) {
      return NextResponse.json({ ok: false }, { status: 500 });
    }

    const forwardedFor = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
    const verificationResponse = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          secret,
          response: turnstileToken,
          remoteip: forwardedFor,
        }),
      }
    );

    const verification = await verificationResponse.json();
    const allowedHostnames = (process.env.TURNSTILE_ALLOWED_HOSTNAMES ?? "")
      .split(",")
      .map((hostname) => hostname.trim())
      .filter(Boolean);

    if (
      !verification.success ||
      (allowedHostnames.length > 0 && !allowedHostnames.includes(verification.hostname))
    ) {
      return NextResponse.json({ ok: false }, { status: 400 });
    }

    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM_EMAIL ?? "SOWS Website <website@straightouttawallstreet.com>",
        to: [process.env.CONTACT_TO_EMAIL ?? "joe@straightouttawallstreet.com"],
        reply_to: email,
        subject: `New SOWS inquiry: ${need || "General inquiry"}`,
        html: `
          <h2>New website inquiry</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Need:</strong> ${escapeHtml(need || "Not specified")}</p>
          <p><strong>Timeline:</strong> ${escapeHtml(timeline || "Not specified")}</p>
          <p><strong>Message:</strong><br>${escapeHtml(message || "Not provided").replace(/\n/g, "<br>")}</p>
        `,
      }),
    });

    if (!emailResponse.ok) {
      return NextResponse.json({ ok: false }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
