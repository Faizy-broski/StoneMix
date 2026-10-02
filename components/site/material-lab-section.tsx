import { ArrowDownRight } from "lucide-react"

import { Reveal, RevealLines } from "@/components/motion/reveal"
import { MATERIALS, TRUCK_PARTS } from "@/lib/site"
import { TruckFigure } from "./truck-figure"

// Rings drawn behind the truck, in design px. Only their upper halves show.
const RINGS = [
  { cx: 727.2, cy: 615.9, r: 230.3, className: "stroke-graphite/10" },
  { cx: 727.1, cy: 607.8, r: 186.2, className: "stroke-accent-red/35" },
  { cx: 727.2, cy: 608.3, r: 143.2, className: "stroke-graphite/10" },
]

/*
 * Desktop (lg) positions are the coordinates of the 1440 × 1000 design frame
 * (text is placed by where its glyphs land, not by its line box).
 * `--spacing: var(--u)` makes every spacing utility one design px (see hero).
 * The SVG layers share the frame's coordinates through their viewBox.
 */
export function MaterialLabSection() {
  return (
    <section
      id="material-lab"
      aria-labelledby="material-lab-title"
      className="relative isolate overflow-hidden bg-white text-graphite lg:[--spacing:var(--u)]"
    >
      <div className="flex flex-col px-4 py-16 sm:px-8 lg:relative lg:mx-auto lg:block lg:h-1000 lg:max-w-1440 lg:p-0 lg:*:absolute">
        <Reveal as="p" from="left" className="text-[13px] leading-none tracking-[0.092em] uppercase lg:top-36.75 lg:left-93.5 lg:text-[length:max(12px,calc(var(--u)*14))]">
          03 - Material lab
        </Reveal>

        <RevealLines
          id="material-lab-title"
          className="mt-6 text-[10vw] leading-[1.05] font-semibold tracking-[-0.052em] uppercase lg:top-75.5 lg:left-80 lg:mt-0 lg:text-[length:calc(var(--u)*100)] lg:whitespace-nowrap"
        >
          <span className="block">Concrete,</span>
          <span className="block text-stone">Deconstructed.</span>
        </RevealLines>

        <svg
          aria-hidden
          viewBox="0 0 1440 1000"
          fill="none"
          className="hidden lg:inset-0 lg:block lg:size-full"
        >
          <defs>
            {RINGS.map((ring, i) => (
              <clipPath key={i} id={`lab-ring-${i}`}>
                <rect x="0" y="0" width="1440" height={ring.cy + 10} />
              </clipPath>
            ))}
          </defs>
          {RINGS.map((ring, i) => (
            <circle
              key={i}
              cx={ring.cx}
              cy={ring.cy}
              r={ring.r}
              clipPath={`url(#lab-ring-${i})`}
              className={ring.className}
            />
          ))}
        </svg>

        <Reveal
          from="right"
          zoom
          duration={1.2}
          className="-mx-[12%] mt-6 w-[124%] lg:top-360 lg:left-234.5 lg:mx-0 lg:mt-0 lg:w-1034"
        >
          <TruckFigure />
        </Reveal>

        <svg
          aria-hidden
          viewBox="0 0 1440 1000"
          fill="none"
          className="hidden lg:inset-0 lg:block lg:size-full"
        >
          {TRUCK_PARTS.map(({ line, dot }) => (
            <g key={dot.join()}>
              <polyline
                points={`${line[0]},${line[2]} ${line[1]},${line[2]} ${dot[0]},${dot[1]}`}
                className="stroke-graphite/35"
              />
              <rect
                x={dot[0] - 1.65}
                y={dot[1] - 1.65}
                width="3.3"
                height="3.3"
                className="fill-graphite/45"
              />
            </g>
          ))}
        </svg>

        <ul className="grid grid-cols-2 gap-x-4 gap-y-6 lg:contents">
          {TRUCK_PARTS.map((part, i) => (
            <li
              key={part.name}
              className="border-t border-graphite/20 pt-3 lg:contents"
              style={{ "--x": part.label[0], "--y": part.label[1] } as React.CSSProperties}
            >
              <Reveal
                as="span"
                from={part.label[0] < 720 ? "left" : "right"}
                delay={0.3 + i * 0.1}
                className="block text-[9px] leading-none tracking-[0.06em] text-graphite/50 lg:absolute lg:top-[calc(var(--u)*var(--y))] lg:left-[calc(var(--u)*var(--x))] lg:text-[length:calc(var(--u)*9)]">
                / {String(i + 1).padStart(2, "0")}
              </Reveal>
              <Reveal
                as="span"
                from={part.label[0] < 720 ? "left" : "right"}
                delay={0.35 + i * 0.1}
                className="mt-2 block text-lg leading-none font-semibold tracking-[0.035em] whitespace-nowrap text-graphite/70 uppercase lg:absolute lg:top-[calc(var(--u)*(var(--y)+21.4))] lg:left-[calc(var(--u)*(var(--x)-1.5))] lg:mt-0 lg:text-[length:calc(var(--u)*29)]">
                {part.name}
              </Reveal>
            </li>
          ))}
        </ul>

        <Reveal from="up" className="mt-10 flex items-start justify-between gap-6 border-t border-graphite/12 pt-4 text-[8px] leading-none tracking-[0.07em] uppercase lg:top-929.5 lg:left-105.25 lg:mt-0 lg:w-1229.5 lg:px-3.5 lg:pt-14.75 lg:text-[length:max(7px,calc(var(--u)*7.5))]">
          <p>{[...MATERIALS.map((m) => m.label), "Mix", "Final concrete"].join(" / ")}</p>
          <p className="flex shrink-0 items-center gap-[2.15em]">
            Scroll to converge
            <ArrowDownRight aria-hidden strokeWidth={2} className="-my-[0.35em] -mr-[0.5em] size-[1.7em]" />
          </p>
        </Reveal>
      </div>
    </section>
  )
}
