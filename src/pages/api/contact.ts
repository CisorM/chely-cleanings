import type { APIRoute } from 'astro';
import { Resend } from 'resend';
import { site } from '../../config/site';

// Runs on-demand (Vercel function) — never prerendered.
export const prerender = false;

const env = (key: string): string | undefined =>
  import.meta.env[key] ?? process.env[key];

const RESEND_API_KEY = env('RESEND_API_KEY');
// "from" must be an address on a domain verified in Resend. resend.dev works
// only for testing and can email the account owner exclusively.
const FROM = env('CONTACT_FROM_EMAIL') ?? 'Chely Cleaning <onboarding@resend.dev>';
const TO = env('CONTACT_TO_EMAIL') ?? site.contact.email;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const json = (status: number, body: Record<string, unknown>) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'content-type': 'application/json' },
  });

const clean = (v: unknown, max = 2000) =>
  typeof v === 'string' ? v.trim().slice(0, max) : '';

const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!,
  );

export const POST: APIRoute = async ({ request }) => {
  let data: Record<string, unknown>;
  try {
    data = await request.json();
  } catch {
    return json(400, { error: 'invalid-body' });
  }

  // Honeypot — bots fill hidden fields; humans never see it.
  if (clean(data.company)) return json(200, { ok: true });

  const firstName = clean(data.firstName, 100);
  const lastName = clean(data.lastName, 100);
  const email = clean(data.email, 200);
  const address = clean(data.address, 300);
  const phone = clean(data.phone, 50);
  const message = clean(data.message, 4000);

  if (!firstName || !lastName || !email || !address || !phone || !message) {
    return json(422, { error: 'missing-fields' });
  }
  if (!EMAIL_RE.test(email)) {
    return json(422, { error: 'invalid-email' });
  }

  if (!RESEND_API_KEY) {
    console.error('[contact] RESEND_API_KEY is not set');
    return json(500, { error: 'not-configured' });
  }

  const name = `${firstName} ${lastName}`;
  const rows: [string, string][] = [
    ['Name', name],
    ['Email', email],
    ['Phone', phone],
    ['Address', address],
  ];

  try {
    const resend = new Resend(RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: FROM,
      to: TO,
      replyTo: email,
      subject: `New website inquiry — ${name}`,
      text:
        rows.map(([k, v]) => `${k}: ${v}`).join('\n') +
        `\n\nMessage:\n${message}`,
      html: `
        <h2 style="margin:0 0 12px;font-family:sans-serif">New website inquiry</h2>
        <table style="border-collapse:collapse;font-family:sans-serif;font-size:14px">
          ${rows
            .map(
              ([k, v]) =>
                `<tr><td style="padding:4px 12px 4px 0;color:#666">${k}</td><td style="padding:4px 0"><strong>${esc(v)}</strong></td></tr>`,
            )
            .join('')}
        </table>
        <p style="font-family:sans-serif;font-size:14px;white-space:pre-wrap;margin-top:16px">${esc(message)}</p>
      `,
    });

    if (error) {
      console.error('[contact] resend error', error);
      return json(502, { error: 'send-failed' });
    }
  } catch (err) {
    console.error('[contact] unexpected error', err);
    return json(500, { error: 'send-failed' });
  }

  return json(200, { ok: true });
};
