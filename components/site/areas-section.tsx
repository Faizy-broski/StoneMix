import { MapPin } from "lucide-react"

import { Reveal, RevealLines, RevealText } from "@/components/motion/reveal"
import { AREAS } from "@/lib/site"

// OpenStreetMap's keyless embed, framed on the UK and the near continent.
const MAP_SRC =
  "https://www.openstreetmap.org/export/embed.html?bbox=-12%2C47%2C22%2C62&layer=mapnik"

/*
 * Desktop (lg) sizes are design px of the 1440 frame.
 * `--spacing: var(--u)` makes every spacing utility one design px (see hero).
 */
export function AreasSection() {
  return (
    <section
      id="areas"
      aria-labelledby="areas-title"
      className="bg-[#f6f5f2] text-graphite lg:[--spacing:var(--u)]"
    >
      <div className="flex flex-col gap-12 px-4 py-16 sm:px-8 lg:mx-auto lg:grid lg:max-w-1440 lg:grid-cols-[1fr_calc(var(--u)*590)] lg:items-center lg:gap-80 lg:px-100 lg:py-100">
        <div>
          <Reveal as="p" from="left" className="text-[13px] leading-none tracking-[0.092em] uppercase lg:text-[length:max(12px,calc(var(--u)*14))]">
            08 - Get in touch
          </Reveal>

          <RevealLines
            id="areas-title"
            className="mt-4 text-[13vw] leading-[0.92] font-semibold tracking-[-0.05em] uppercase lg:mt-14 lg:text-[length:calc(var(--u)*100)]"
          >
            <span className="block">Areas we</span>
            <span className="block text-stone">cover.</span>
          </RevealLines>

          <RevealText className="mt-6 text-sm leading-[1.6] text-graphite/80 lg:mt-36 lg:text-[length:max(13px,calc(var(--u)*16))]">
            Stonemix provide support across the local area.
          </RevealText>

          <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:mt-28 lg:max-w-560 lg:gap-x-12 lg:gap-y-14">
            {AREAS.map((area, i) => (
              <Reveal
                as="li"
                key={area}
                from="left"
                delay={0.2 + i * 0.1}
                className="flex items-center gap-2.5 rounded-lg border-l-2 border-graphite/70 bg-white px-4 py-3 text-xs font-semibold shadow-[0_6px_18px_rgb(0_0_0/0.06)] lg:gap-14 lg:rounded-[calc(var(--u)*8)] lg:px-20 lg:py-16 lg:text-[length:max(11px,calc(var(--u)*13))]"
              >
                <MapPin
                  aria-hidden
                  className="size-3.5 shrink-0 stroke-[2.25] lg:size-[max(12px,calc(var(--u)*15))]"
                />
                {area}
              </Reveal>
            ))}
          </ul>
        </div>

        <Reveal from="right" zoom duration={1.1} className="relative isolate aspect-[590/440] overflow-hidden rounded-2xl bg-[#aad3df] lg:rounded-[calc(var(--u)*20)]">
          {/* Decorative: blurred, non-interactive and skipped by keyboard and screen readers. */}
          <iframe
            src={MAP_SRC}
            title="Map of the area Stonemix covers"
            aria-hidden
            tabIndex={-1}
            loading="lazy"
            className="pointer-events-none absolute -inset-8 -z-20 size-[calc(100%+4rem)] scale-110 blur-[6px]"
          />
          <div aria-hidden className="absolute inset-0 -z-10 bg-[#2f6f7a]/25" />

          <div className="flex h-full flex-col items-center justify-center px-6 text-center text-white">
            <span className="grid size-12 place-items-center rounded-full bg-navy shadow-lg lg:size-[calc(var(--u)*62)]">
              <MapPin aria-hidden className="size-5 lg:size-[calc(var(--u)*24)]" />
            </span>
            <h3 className="mt-4 text-2xl font-semibold tracking-[-0.01em] drop-shadow-sm lg:mt-20 lg:text-[length:calc(var(--u)*30)]">
              Local Coverage
            </h3>
            <p className="mt-1 max-w-[18rem] text-sm leading-[1.35] drop-shadow-sm lg:mt-6 lg:max-w-[calc(var(--u)*230)] lg:text-[length:max(12px,calc(var(--u)*15))]">
              Homes and businesses across the surrounding area
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
