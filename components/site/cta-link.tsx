import Link from "next/link"
import { ArrowDownRight, ArrowUpRight } from "lucide-react"
import { cn } from "@/lib/utils"

const VARIANTS = {
  solid: "bg-navy text-white hover:bg-navy-hover",
  outline: "border-white/40 text-white hover:border-white hover:bg-white/8",
}

type CtaLinkProps = {
  href: string
  children: React.ReactNode
  variant?: keyof typeof VARIANTS
  arrow?: "up" | "down"
  className?: string
}

// Desktop sizes are in design px: the parent sets `--spacing: var(--u)` at lg.
export function CtaLink({
  href,
  children,
  variant = "solid",
  arrow = "up",
  className,
}: CtaLinkProps) {
  const Icon = arrow === "up" ? ArrowUpRight : ArrowDownRight

  return (
    <Link
      href={href}
      className={cn(
        "group inline-flex h-11 items-center justify-between gap-4 rounded-sm border border-transparent px-4 text-[11px] leading-none font-semibold whitespace-nowrap uppercase transition-colors duration-200",
        "lg:h-43 lg:min-w-137 lg:gap-4 lg:rounded-[calc(var(--u)*4)] lg:px-15 lg:text-[length:max(10px,calc(var(--u)*11))]",
        VARIANTS[variant],
        className
      )}
    >
      {children}
      <Icon
        aria-hidden
        strokeWidth={2}
        className={cn(
          "size-4 shrink-0 transition-transform duration-200 lg:size-[max(14px,calc(var(--u)*16))]",
          arrow === "up"
            ? "group-hover:translate-x-0.5 group-hover:-translate-y-0.5 lg:group-hover:translate-x-2 lg:group-hover:-translate-y-2"
            : "group-hover:translate-0.5 lg:group-hover:translate-2"
        )}
      />
    </Link>
  )
}
