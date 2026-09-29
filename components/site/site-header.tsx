import Image from "next/image"
import Link from "next/link"

import { ASSETS, NAV_LINKS } from "@/lib/site"
import { CtaLink } from "./cta-link"
import { MobileMenu } from "./mobile-menu"

// Desktop sizes are in design px (1440 frame): `--spacing: var(--u)` at lg.
export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-5 z-40 px-4 lg:top-21 lg:px-0 lg:[--spacing:var(--u)]">
      <nav
        aria-label="Main"
        className="relative mx-auto flex h-16 items-center justify-between rounded-lg bg-white pr-3 pl-4 lg:h-70 lg:max-w-1309 lg:rounded-[calc(var(--u)*8)] lg:pr-16.5 lg:pl-30.5"
      >
        <ul className="hidden lg:flex lg:items-center lg:gap-32">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-[length:max(11px,calc(var(--u)*12))] leading-none font-medium tracking-[0.01em] text-ink uppercase transition-colors hover:text-navy"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link
          href="/"
          aria-label="Stonemix home"
          className="block lg:absolute lg:top-4 lg:left-1/2 lg:-translate-x-1/2"
        >
          <Image
            src={ASSETS.logo}
            alt="Stonemix — From stone to strength"
            width={134}
            height={63}
            className="block h-auto w-26 lg:w-134"
            unoptimized={ASSETS.logo.endsWith(".svg")}
            loading="eager"
          />
        </Link>

        <CtaLink href="#contact" className="hidden lg:inline-flex">
          Get a quote
        </CtaLink>

        <MobileMenu className="inline-flex size-10 items-center justify-center rounded-sm text-navy lg:hidden" />
      </nav>
    </header>
  )
}
