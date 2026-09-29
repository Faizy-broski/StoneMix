import { ASSETS, STATS } from "@/lib/site"

/*
 * Desktop (lg) positions are the coordinates of the 1440 × 742 design frame;
 * the card sits at (100, 95) and its children are placed relative to it
 * (text is placed by where its glyphs land, not by its line box).
 * `--spacing: var(--u)` makes every spacing utility one design px (see hero).
 */
export function StatsSection() {
  return (
    <section
      aria-labelledby="stats-title"
      className="w-full bg-white px-4 py-10 sm:px-8 lg:mx-auto lg:h-742 lg:max-w-1440 lg:px-100 lg:py-95 lg:[--spacing:var(--u)]"
    >
      <div className="relative isolate flex flex-col overflow-hidden rounded-2xl bg-graphite px-5 py-14 text-white lg:block lg:h-552 lg:rounded-[calc(var(--u)*30)] lg:p-0 lg:*:absolute">
        <video
          aria-hidden
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 -z-20 size-full object-cover"
        >
          <source src={ASSETS.statsVideo} type="video/mp4" />
        </video>
        <div aria-hidden className="absolute inset-0 -z-10 bg-black/45" />

        <h2
          id="stats-title"
          className="text-center text-[9vw] leading-[0.92] font-semibold tracking-[0.006em] uppercase lg:inset-x-0 lg:top-71.75 lg:translate-x-0.5 lg:text-[length:calc(var(--u)*100)]"
        >
          {/* Figma centers this line with its trailing space, nudging it left. */}
          <span className="block lg:-translate-x-13">From one pour</span>
          <span className="block">to the whole</span>
          <span className="block">structure.</span>
        </h2>

        <ul className="mt-12 grid grid-cols-2 gap-y-8 border-t border-white/45 pt-8 lg:top-415.5 lg:left-108.5 lg:mt-0 lg:flex lg:w-1040 lg:justify-between lg:pt-19.5 lg:pr-36 lg:pl-29">
          {STATS.map((stat) => (
            <li key={stat.label} className="flex flex-col items-center">
              <span className="text-5xl leading-none font-bold tracking-[0.03em] tabular-nums lg:text-[length:calc(var(--u)*47)]">
                {stat.value}
              </span>
              <span className="mt-3 text-xs leading-none uppercase lg:mt-18.5 lg:text-[length:max(10px,calc(var(--u)*12))]">
                {stat.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
