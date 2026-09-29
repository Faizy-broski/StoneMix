import { cn } from "@/lib/utils"

/*
 * A background that stays still in the viewport while its section's content
 * scrolls over it. The layer is `position: fixed`; the wrapper's clip-path
 * keeps it visible only behind this section. Children are placed in a
 * 1440 frame centred like the section's own, so design coordinates carry
 * over: they match the mockup when the section's top meets the viewport's.
 * Must not sit inside a transformed ancestor (that would re-anchor `fixed`).
 */
export function FixedBackdrop({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 [clip-path:inset(0)]">
      <div className="fixed inset-0">
        <div className={cn("relative mx-auto h-full max-w-1440", className)}>{children}</div>
      </div>
    </div>
  )
}
