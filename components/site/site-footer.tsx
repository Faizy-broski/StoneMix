import Image from "next/image"
import Link from "next/link"

import { ASSETS, CONTACT, QUICK_LINKS, SERVICES } from "@/lib/site"
import { Reveal, RevealLines, RevealText } from "@/components/motion/reveal"
import { CtaLink } from "./cta-link"
import { FacebookIcon, InstagramIcon, TwitterIcon, YoutubeIcon } from "./social-icons"

const SOCIALS = [
  { label: "Twitter", href: "#", Icon: TwitterIcon },
  { label: "Facebook", href: "#", Icon: FacebookIcon },
  { label: "Instagram", href: "#", Icon: InstagramIcon },
  { label: "YouTube", href: "#", Icon: YoutubeIcon },
]

const heading =
  "text-base font-semibold lg:text-[length:max(15px,calc(var(--u)*18))]"
const list =
  "mt-5 flex flex-col gap-3 text-sm text-white/85 lg:mt-30 lg:gap-20 lg:text-[length:max(12px,calc(var(--u)*14))]"
const link = "transition-colors hover:text-white"

/*
 * Desktop (lg) sizes are design px of the 1440 frame.
 * `--spacing: var(--u)` makes every spacing utility one design px (see hero).
 * The card's top corners are rounded and it runs to the bottom of the page,
 * where the oversized wordmark is cut off by the card's edge.
 */
export function SiteFooter() {
  return (
    <footer
      aria-labelledby="footer-title"
      className="bg-white pt-2  lg:pt-15 lg:[--spacing:var(--u)]"
    >
      <div className="relative isolate overflow-hidden rounded-t-3xl bg-[#1a3a5e] text-white lg:rounded-t-[calc(var(--u)*48)]">
        <Image
          src={ASSETS.footerBackdrop}
          alt=""
          fill
          unoptimized
          sizes="100vw"
          className="-z-20 object-cover object-[70%_top]"
        />
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,transparent_55%,rgb(0_0_0/0.55))]"
        />

        <div className="px-5 pt-16 sm:px-8 lg:mx-auto lg:max-w-1440 lg:px-82 lg:pt-120">
          <Reveal as="p" from="left" className="text-[11px] leading-none tracking-[0.1em] uppercase lg:text-[length:max(11px,calc(var(--u)*13))]">
            Start a project / Contact
          </Reveal>

          <RevealLines
            id="footer-title"
            className="mt-4 text-[13vw] leading-[0.95] font-extrabold tracking-[0.01em] uppercase lg:mt-24 lg:text-[length:calc(var(--u)*124)]"
          >
            <span className="block">Let&rsquo;s build</span>
            <span className="block text-transparent [-webkit-text-stroke:1.5px_white] lg:[-webkit-text-stroke:calc(var(--u)*2)_white]">
              Something.
            </span>
          </RevealLines>

          <RevealText delay={0.2} className="mt-6 max-w-[26rem] text-base leading-[1.4] lg:mt-36 lg:max-w-500 lg:text-[length:max(14px,calc(var(--u)*18))]">
            Tell us what you&rsquo;re building. We&rsquo;ll help you move the
            concrete there.
          </RevealText>

          <Reveal from="left" delay={0.3} className="mt-7 flex flex-wrap gap-2.5 lg:mt-36 lg:gap-12">
            <CtaLink href="#contact">Get a quote</CtaLink>
            <CtaLink
              href="#services"
              variant="outline"
              arrow="down"
              className="bg-white/10 backdrop-blur-sm"
            >
              Explore Stonemix
            </CtaLink>
          </Reveal>

          <div className="mt-16 grid grid-cols-2 gap-x-6 gap-y-10 lg:mt-120 lg:grid-cols-[1.5fr_1fr_1fr_1fr] lg:gap-40">
            <Reveal from="left" className="col-span-2 lg:col-span-1">
              <Link href="/" aria-label="Stonemix home" className="inline-block">
                <Image
                  src={ASSETS.logo}
                  alt="Stonemix — From stone to strength"
                  width={134}
                  height={63}
                  unoptimized
                  className="h-auto w-36 brightness-0 invert lg:w-200"
                />
              </Link>
              <ul className="mt-6 flex gap-3 lg:mt-36 lg:gap-14">
                {SOCIALS.map(({ label, href, Icon }) => (
                  <li key={label}>
                    <a
                      href={href}
                      aria-label={label}
                      className="grid size-9 place-items-center rounded-full border border-white/30 bg-white/5 transition-colors hover:border-white hover:bg-white/15 lg:size-40"
                    >
                      <Icon className="size-4 lg:size-[max(14px,calc(var(--u)*16))]" />
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal as="nav" from="up" delay={0.1} aria-label="Quick links">
              <h3 className={heading}>Quick Links</h3>
              <ul className={list}>
                {QUICK_LINKS.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className={link}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal from="up" delay={0.2}>
              <h3 className={heading}>Services</h3>
              <ul className={list}>
                {SERVICES.map((service) => (
                  <li key={service.title}>
                    <Link href="#services" className={link}>
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal from="right" delay={0.3} className="col-span-2 sm:col-span-1">
              <h3 className={heading}>Contact Us</h3>
              <dl className={list}>
                <div>
                  <dt className="font-semibold text-white">Address:</dt>
                  <dd className="mt-1">{CONTACT.address}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-white">Email:</dt>
                  <dd className="mt-1">
                    <a href={`mailto:${CONTACT.email}`} className={link}>
                      {CONTACT.email}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-white">Phone:</dt>
                  <dd className="mt-1">
                    <a href={CONTACT.phoneHref} className={link}>
                      {CONTACT.phone}
                    </a>
                  </dd>
                </div>
              </dl>
            </Reveal>
          </div>

          <Reveal from="up" className="mt-14 flex flex-col gap-2 border-t border-white/20 pt-5 text-[10px] tracking-[0.08em] uppercase sm:flex-row sm:justify-between lg:mt-90 lg:pt-22 lg:text-[length:max(9px,calc(var(--u)*11))]">
            <p>Concrete supply &amp; pumping</p>
            <p>Built from the ground up</p>
            <p>&copy; {new Date().getFullYear()} Stonemix</p>
          </Reveal>
        </div>

        {/* The wordmark is clipped by the card's edges; flex centring lets it overflow both sides evenly. */}
        <Reveal
          as="p"
          aria-hidden
          from="up"
          distance={200}
          duration={1.4}
          className="mt-6 -mb-[0.28em] flex justify-center text-[22vw] leading-[0.9] font-extrabold tracking-[-0.02em] whitespace-nowrap text-cream uppercase lg:mt-20 lg:text-[length:calc(var(--u)*300)]"
        >
          Stonemix
        </Reveal>
      </div>
    </footer>
  )
}
