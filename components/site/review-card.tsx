"use client"

import { Star } from "lucide-react"
import { useState } from "react"

import type { REVIEWS } from "@/lib/site"
import { cn } from "@/lib/utils"

type Review = (typeof REVIEWS)[number]

const initials = (name: string) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("")

export function ReviewCard({ review }: { review: Review }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <figure className="flex h-full flex-col rounded-2xl bg-white p-5 shadow-[0_2px_16px_rgb(0_0_0/0.06)] lg:rounded-[calc(var(--u)*16)] lg:p-[calc(var(--u)*22)]">
      <div
        role="img"
        aria-label="Rated 5 out of 5"
        className="flex gap-0.5 text-[#f5a524]"
      >
        {Array.from({ length: 5 }, (_, i) => (
          <Star
            key={i}
            aria-hidden
            className="size-3.5 fill-current stroke-none lg:size-[max(12px,calc(var(--u)*14))]"
          />
        ))}
      </div>

      <blockquote className="mt-3 lg:mt-[calc(var(--u)*12)]">
        <p
          className={cn(
            "text-sm leading-[1.6] text-graphite lg:text-[length:max(13px,calc(var(--u)*15))]",
            !expanded && "line-clamp-4"
          )}
        >
          {review.body}
        </p>
      </blockquote>

      <button
        type="button"
        aria-expanded={expanded}
        onClick={() => setExpanded((v) => !v)}
        className="mt-3 self-start text-xs text-graphite/70 transition-colors hover:text-graphite lg:mt-[calc(var(--u)*12)] lg:text-[length:max(11px,calc(var(--u)*12))]"
      >
        {expanded ? "Read Less" : "Read More"}
      </button>

      <figcaption className="mt-auto flex items-center gap-3 pt-6 lg:pt-[calc(var(--u)*28)]">
        <span
          aria-hidden
          className="grid size-9 shrink-0 place-items-center rounded-full bg-stone/30 text-xs font-semibold text-graphite lg:size-[calc(var(--u)*36)] lg:text-[length:max(11px,calc(var(--u)*12))]"
        >
          {initials(review.name)}
        </span>
        <span className="flex flex-col gap-1">
          <span className="text-sm leading-none font-semibold text-graphite lg:text-[length:max(12px,calc(var(--u)*13))]">
            {review.name}
          </span>
          <span className="text-[9px] leading-none tracking-[0.12em] text-graphite/60 uppercase lg:text-[length:max(8px,calc(var(--u)*9))]">
            {review.role}
          </span>
        </span>
      </figcaption>
    </figure>
  )
}
