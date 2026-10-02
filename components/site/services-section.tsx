import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import { Reveal, RevealLines } from "@/components/motion/reveal"
import { ASSETS, SERVICES } from "@/lib/site"

/*
 * Desktop (lg) positions are the coordinates of the 1440 × 1014 design frame
 * (text is placed by where its glyphs land, not by its line box).
 * `--spacing: var(--u)` makes every spacing utility one design px (see hero).
 * Row children are placed relative to the row, which starts at x = 90.5.
 */
export function ServicesSection() {
  return (
    <section
      id="services"
      aria-labelledby="services-title"
      className="relative isolate overflow-hidden bg-[#0d2840] text-white lg:[--spacing:var(--u)]"
    >
      <Image
        src={ASSETS.servicesBackdrop}
        alt=""
        fill
        sizes="100vw"
        unoptimized
        className="pointer-events-none -z-10 object-cover"
      />

      <div className="flex flex-col px-4 py-16 sm:px-8 lg:relative lg:mx-auto lg:block lg:h-1014 lg:max-w-1440 lg:p-0 lg:*:absolute">
        <Reveal as="p" from="left" className="text-[13px] leading-none tracking-[0.092em] uppercase lg:top-92 lg:left-105 lg:text-[length:max(12px,calc(var(--u)*14))]">
          02 - Services
        </Reveal>

        <RevealLines
          id="services-title"
          className="mt-6 text-[10vw] leading-[1.09] font-medium tracking-[-0.06em] uppercase lg:top-132 lg:left-96.5 lg:mt-0 lg:text-[length:calc(var(--u)*100)] lg:whitespace-nowrap"
        >
          <span className="block">One material.</span>
          <span className="block text-[#8694a0]">Four ways to move it.</span>
        </RevealLines>

        <ul className="mt-10 lg:top-391 lg:left-90.5 lg:mt-0 lg:w-1255.5">
          {SERVICES.map((service, i) => (
            <Reveal
              as="li"
              key={service.title}
              from={i % 2 ? "right" : "left"}
              delay={i * 0.1}
              className="border-b border-white/15 last:border-b-0 lg:h-131.5"
            >
              <Link
                href="#contact"
                className="group relative grid grid-cols-[minmax(0,1fr)_auto] items-center gap-x-4 gap-y-4 py-6 lg:block lg:size-full lg:p-0 lg:*:absolute"
              >
                <span
                  aria-hidden
                  className="hidden text-[length:calc(var(--u)*104)] leading-none font-semibold text-white/10 lg:top-23 lg:left-0 lg:block"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                <Image
                  src={service.image}
                  alt=""
                  width={441}
                  height={86}
                  unoptimized
                  className="col-span-2 h-auto w-full lg:top-31.5 lg:left-107.5 lg:w-440.25"
                />

                <span className="flex flex-col gap-2 lg:top-48 lg:left-586.5 lg:gap-0">
                  <span className="text-xl leading-none font-medium tracking-[-0.01em] uppercase lg:text-[length:calc(var(--u)*28)]">
                    {service.title}
                  </span>
                  <span className="text-[13px] leading-none tracking-[-0.006em] text-[#8694a0] uppercase lg:mt-[calc(var(--u)*15.2)] lg:text-[length:max(12px,calc(var(--u)*16))]">
                    {service.tags.join(" / ")}
                  </span>
                </span>

                <ArrowUpRight
                  aria-hidden
                  strokeWidth={2}
                  className="size-6 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1 lg:top-58 lg:left-1217.5 lg:size-33"
                />
              </Link>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
