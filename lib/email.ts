import { CONTACT } from "@/lib/site"

// Email clients ignore external CSS and most modern layout, so these templates
// use table layout with inline styles, mirroring the site's palette.
const C = {
  navy: "#0f3050",
  ink: "#0d1013",
  red: "#e43d2f",
  bg: "#f5f8fa",
  border: "#e3e9ee",
  muted: "#8b97a3",
}
const FONT = "Inter,'Segoe UI',Helvetica,Arial,sans-serif"

export const escapeHtml = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!)

function layout({ preheader, title, body }: { preheader: string; title: string; body: string }) {
  return `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${escapeHtml(title)}</title></head>
<body style="margin:0;padding:0;background:${C.bg};font-family:${FONT};color:${C.ink};">
<div style="display:none;max-height:0;overflow:hidden;opacity:0;">${escapeHtml(preheader)}</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${C.bg};padding:32px 12px;">
<tr><td align="center">
  <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:100%;max-width:600px;background:#ffffff;border-radius:14px;overflow:hidden;border:1px solid ${C.border};">
    <tr><td style="background:${C.navy};padding:28px 32px;">
      <div style="font-size:24px;font-weight:800;letter-spacing:0.14em;color:#ffffff;">STONE<span style="color:${C.red};">MIX</span></div>
      <div style="margin-top:4px;font-size:12px;letter-spacing:0.08em;text-transform:uppercase;color:#a9bccd;">From stone to strength</div>
    </td></tr>
    <tr><td style="height:4px;background:${C.red};font-size:0;line-height:0;">&nbsp;</td></tr>
    <tr><td style="padding:32px;">${body}</td></tr>
    <tr><td style="background:${C.bg};border-top:1px solid ${C.border};padding:20px 32px;font-size:12px;line-height:1.6;color:${C.muted};">
      ${escapeHtml(CONTACT.address)} &nbsp;·&nbsp; <a href="mailto:${CONTACT.email}" style="color:${C.muted};">${CONTACT.email}</a> &nbsp;·&nbsp; <a href="${CONTACT.phoneHref}" style="color:${C.muted};text-decoration:none;">${CONTACT.phone}</a>
    </td></tr>
  </table>
</td></tr></table>
</body></html>`
}

const heading = (text: string) =>
  `<h1 style="margin:0 0 8px;font-size:26px;line-height:1.25;font-weight:700;letter-spacing:-0.02em;color:${C.navy};">${text}</h1>`

const row = (label: string, value: string) =>
  `<tr>
    <td style="padding:12px 0;border-bottom:1px solid ${C.border};width:110px;font-size:11px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:${C.muted};vertical-align:top;">${label}</td>
    <td style="padding:12px 0;border-bottom:1px solid ${C.border};font-size:15px;color:${C.ink};">${value}</td>
  </tr>`

type Booking = { name: string; email: string; phone: string; service: string; message: string }

export function ownerEmail(b: Booking) {
  const body = `
    <div style="display:inline-block;background:${C.red};color:#fff;font-size:11px;font-weight:700;letter-spacing:0.08em;text-transform:uppercase;padding:5px 10px;border-radius:4px;margin-bottom:14px;">New quote request</div>
    ${heading(escapeHtml(b.service))}
    <p style="margin:0 0 24px;font-size:15px;color:#4a5560;">${escapeHtml(b.name)} has asked for a quote through the website.</p>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-top:1px solid ${C.border};">
      ${row("Name", escapeHtml(b.name))}
      ${row("Email", `<a href="mailto:${escapeHtml(b.email)}" style="color:${C.navy};">${escapeHtml(b.email)}</a>`)}
      ${row("Phone", b.phone ? `<a href="tel:${escapeHtml(b.phone.replace(/[^\d+]/g, ""))}" style="color:${C.navy};text-decoration:none;">${escapeHtml(b.phone)}</a>` : "—")}
      ${row("Service", escapeHtml(b.service))}
    </table>
    <div style="margin-top:24px;background:${C.bg};border:1px solid ${C.border};border-radius:10px;padding:18px 20px;">
      <div style="font-size:11px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:${C.muted};margin-bottom:8px;">Message</div>
      <div style="font-size:15px;line-height:1.6;color:${C.ink};">${escapeHtml(b.message || "No message provided.").replace(/\n/g, "<br>")}</div>
    </div>
    <table role="presentation" cellpadding="0" cellspacing="0" style="margin-top:28px;"><tr><td style="background:${C.navy};border-radius:4px;">
      <a href="mailto:${escapeHtml(b.email)}?subject=${encodeURIComponent("Re: your StoneMix quote request")}" style="display:inline-block;padding:14px 26px;font-size:12px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:#ffffff;text-decoration:none;">Reply to ${escapeHtml(b.name.split(" ")[0])}</a>
    </td></tr></table>`
  return {
    html: layout({ preheader: `${b.name} — ${b.service}`, title: "New quote request", body }),
    text: `New quote request\n\nName: ${b.name}\nEmail: ${b.email}\nPhone: ${b.phone || "—"}\nService: ${b.service}\n\n${b.message || "(no message)"}`,
  }
}

export function customerEmail(b: Booking) {
  const body = `
    ${heading(`Thanks, ${escapeHtml(b.name.split(" ")[0])}.`)}
    <p style="margin:0 0 24px;font-size:16px;line-height:1.6;color:#4a5560;">We&rsquo;ve received your request and a member of the team will be in touch shortly.</p>
    <div style="background:${C.bg};border:1px solid ${C.border};border-left:4px solid ${C.red};border-radius:10px;padding:18px 20px;">
      <div style="font-size:11px;font-weight:600;letter-spacing:0.08em;text-transform:uppercase;color:${C.muted};">Your request</div>
      <div style="margin-top:6px;font-size:18px;font-weight:700;color:${C.navy};">${escapeHtml(b.service)}</div>
      ${b.message ? `<div style="margin-top:10px;font-size:14px;line-height:1.6;color:#4a5560;">${escapeHtml(b.message).replace(/\n/g, "<br>")}</div>` : ""}
    </div>
    <p style="margin:24px 0 0;font-size:15px;line-height:1.6;color:#4a5560;">Need us sooner? Call <a href="${CONTACT.phoneHref}" style="color:${C.navy};font-weight:600;text-decoration:none;">${CONTACT.phone}</a>.</p>`
  return {
    html: layout({ preheader: "We've received your request and will be in touch shortly.", title: "We've received your request", body }),
    text: `Hi ${b.name},\n\nThanks for getting in touch about ${b.service}. We've received your request and will be in touch shortly.\n\nNeed us sooner? Call ${CONTACT.phone}.\n\nStoneMix`,
  }
}
