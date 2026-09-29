"use client"

import { useState } from "react"
import Link from "next/link"
import { MenuIcon } from "lucide-react"

import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { NAV_LINKS } from "@/lib/site"
import { CtaLink } from "./cta-link"

export function MobileMenu({ className }: { className?: string }) {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className={className} aria-label="Open menu">
        <MenuIcon className="size-6" />
      </SheetTrigger>
      <SheetContent side="right" className="gap-0 bg-white p-6 pt-16">
        <SheetTitle className="sr-only">Menu</SheetTitle>
        <ul className="flex flex-col">
          {NAV_LINKS.map((link) => (
            <li key={link.href} className="border-b border-black/10">
              <Link
                href={link.href}
                onClick={() => setOpen(false)}
                className="block py-4 text-sm font-medium tracking-[0.01em] text-ink uppercase"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <CtaLink href="#contact" className="mt-8 w-full">
          Get a quote
        </CtaLink>
      </SheetContent>
    </Sheet>
  )
}
