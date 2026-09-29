"use client"

import { useState } from "react"
import { ArrowUpRight } from "lucide-react"

import { SERVICES } from "@/lib/site"
import { cn } from "@/lib/utils"

// Desktop sizes are in design px: the parent sets `--spacing: var(--u)` at lg.
const FIELD =
  "w-full rounded-lg border border-[#e3e9ee] bg-[#f5f8fa] px-4 text-[15px] text-ink outline-none transition-colors placeholder:text-[#8b97a3] focus:border-navy/50 focus:bg-white lg:rounded-[calc(var(--u)*10)] lg:px-15 lg:text-[length:max(13px,calc(var(--u)*15))]"

export function BookingForm({ className }: { className?: string }) {
  const [sent, setSent] = useState(false)

  return (
    <div
      id="contact"
      className={cn(
        "rounded-xl bg-white p-6 text-ink shadow-[0_24px_60px_-20px_rgb(0_0_0/0.45)] lg:rounded-[calc(var(--u)*14)] lg:p-31",
        className
      )}
    >
      <h2 className="text-[28px] leading-tight font-bold tracking-[-0.02em] text-navy lg:text-[length:calc(var(--u)*32)]">
        Book a Service
      </h2>
      <p className="mt-2 text-[15px] text-ink/80 lg:mt-8 lg:text-[length:max(13px,calc(var(--u)*15))]">
        Tell us what service you&apos;re experiencing.
      </p>

      {sent ? (
        <p role="status" className="mt-8 rounded-lg bg-[#f5f8fa] p-5 text-[15px] text-navy lg:mt-28">
          Thanks — we&apos;ve got your request and will be in touch shortly.
        </p>
      ) : (
        <form
          className="mt-6 grid grid-cols-2 gap-3 lg:mt-28 lg:gap-x-17 lg:gap-y-15"
          onSubmit={(e) => {
            e.preventDefault()
            setSent(true)
          }}
        >
          <input
            name="name"
            required
            autoComplete="name"
            placeholder="Your Name"
            aria-label="Your name"
            className={cn(FIELD, "col-span-2 h-12 lg:h-47")}
          />
          <input
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="Your Email"
            aria-label="Your email"
            className={cn(FIELD, "col-span-2 h-12 sm:col-span-1 lg:h-47")}
          />
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="Your Phone"
            aria-label="Your phone"
            className={cn(FIELD, "col-span-2 h-12 sm:col-span-1 lg:h-47")}
          />
          <select
            name="service"
            required
            defaultValue=""
            aria-label="Service"
            className={cn(
              FIELD,
              "col-span-2 h-12 appearance-none invalid:text-[#8b97a3] lg:h-47"
            )}
          >
            <option value="" disabled>
              Select Service
            </option>
            {SERVICES.map(({ title }) => (
              <option key={title} value={title} className="text-ink">
                {title}
              </option>
            ))}
          </select>
          <textarea
            name="message"
            rows={4}
            placeholder="Message"
            aria-label="Message"
            className={cn(FIELD, "col-span-2 h-28 resize-none py-3 lg:h-108 lg:py-13")}
          />

          <button
            type="submit"
            className="group col-span-2 mt-3 inline-flex h-12 items-center justify-center gap-4 rounded-sm bg-navy text-[11px] leading-none font-semibold text-white uppercase transition-colors hover:bg-navy-hover lg:mt-10 lg:h-51 lg:rounded-[calc(var(--u)*4)] lg:text-[length:max(10px,calc(var(--u)*11))]"
          >
            Get a quote
            <ArrowUpRight
              aria-hidden
              strokeWidth={2}
              className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 lg:size-[max(14px,calc(var(--u)*16))]"
            />
          </button>
        </form>
      )}
    </div>
  )
}
