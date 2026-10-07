"use server"

import nodemailer from "nodemailer"
import { z } from "zod"

import { customerEmail, ownerEmail } from "@/lib/email"
import { SERVICES } from "@/lib/site"

export type BookingState = {
  status: "idle" | "success" | "error"
  message?: string
  fieldErrors?: Partial<Record<"name" | "email" | "phone" | "service" | "message", string>>
  values?: Record<string, string>
}

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(200),
  phone: z
    .string()
    .trim()
    .max(30)
    .regex(/^[+\d\s()-]*$/, "Please enter a valid phone number"),
  service: z.string().refine((v) => SERVICES.some((s) => s.title === v), "Please select a service"),
  message: z.string().trim().max(2000),
})

function createTransport() {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASSWORD, SMTP_SECURE } = process.env
  if (!SMTP_HOST || !SMTP_USER || !SMTP_PASSWORD) return null
  const port = Number(SMTP_PORT) || 587
  return nodemailer.createTransport({
    host: SMTP_HOST,
    port,
    secure: SMTP_SECURE ? SMTP_SECURE === "true" : port === 465,
    // Gmail app passwords are shown with spaces; they must be removed.
    auth: { user: SMTP_USER, pass: SMTP_PASSWORD.replace(/\s+/g, "") },
  })
}

export async function submitBooking(_prev: BookingState, formData: FormData): Promise<BookingState> {
  const raw = Object.fromEntries(
    ["name", "email", "phone", "service", "message"].map((k) => [k, String(formData.get(k) ?? "")])
  )

  // Honeypot: bots fill the hidden field. Pretend success and drop the request.
  if (String(formData.get("website") ?? "")) return { status: "success" }

  const parsed = schema.safeParse(raw)
  if (!parsed.success) {
    const fieldErrors: NonNullable<BookingState["fieldErrors"]> = {}
    for (const issue of parsed.error.issues) {
      const key = issue.path[0] as keyof typeof fieldErrors
      fieldErrors[key] ??= issue.message
    }
    return { status: "error", fieldErrors, values: raw }
  }

  const transport = createTransport()
  if (!transport) {
    console.error("[booking] SMTP is not configured (SMTP_HOST / SMTP_USER / SMTP_PASSWORD).")
    return { status: "error", message: "We couldn't send your request right now. Please call us instead.", values: raw }
  }

  const { name, email, service } = parsed.data
  const from = process.env.SMTP_FROM || process.env.SMTP_USER!
  const to = process.env.SMTP_TO || process.env.SMTP_USER!

  try {
    await transport.sendMail({
      from,
      to,
      replyTo: { name, address: email },
      subject: `New quote request: ${service} — ${name}`,
      ...ownerEmail(parsed.data),
    })

    // Confirmation to the customer; a failure here must not fail the request.
    await transport
      .sendMail({
        from,
        to: email,
        replyTo: to,
        subject: "We've received your request — StoneMix",
        ...customerEmail(parsed.data),
      })
      .catch((err) => console.error("[booking] confirmation email failed:", err))

    return { status: "success" }
  } catch (err) {
    console.error("[booking] sending failed:", err)
    return { status: "error", message: "Something went wrong sending your request. Please try again.", values: raw }
  }
}
