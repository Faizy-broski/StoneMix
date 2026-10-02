"use client"

import { useEffect, useRef } from "react"

import { cn } from "@/lib/utils"

/*
 * A background layer that drifts against the scroll: it is offset by
 * `speed` × the distance between its parent's centre and the viewport's, so
 * it sits at rest when the section is centred on screen. Give it enough
 * overscan (negative inset) to cover that drift. Still for reduced motion.
 */
export function ParallaxLayer({
  speed = 0.2,
  className,
  children,
}: {
  speed?: number
  className?: string
  children: React.ReactNode
}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const layer = ref.current
    const section = layer?.parentElement
    if (!layer || !section) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    let frame = 0
    const update = () => {
      frame = 0
      const rect = section.getBoundingClientRect()
      if (rect.bottom < 0 || rect.top > window.innerHeight) return
      const offset = rect.top + rect.height / 2 - window.innerHeight / 2
      layer.style.transform = `translate3d(0, ${(-offset * speed).toFixed(1)}px, 0)`
    }
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener("scroll", schedule, { passive: true })
    window.addEventListener("resize", schedule)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener("scroll", schedule)
      window.removeEventListener("resize", schedule)
    }
  }, [speed])

  return (
    <div
      ref={ref}
      aria-hidden
      className={cn("pointer-events-none absolute -z-10 will-change-transform", className)}
    >
      {children}
    </div>
  )
}
