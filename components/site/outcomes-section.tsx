import Image from "next/image"

import { ASSETS, OUTCOMES } from "@/lib/site"
import { cn } from "@/lib/utils"
import { FixedBackdrop } from "./fixed-backdrop"

type Outcome = (typeof OUTCOMES)[number]

// A project photo whose outer edge runs off the page.
function OutcomeCard({
  outcome,
  index,
  className,
  labelClassName,
  children,
}: {
  outcome: Outcome
  index: number
  className?: string
  labelClassName?: string
  children: React.ReactNode
}) {
  const bleedsRight = index === 0

  return (
    <figure
      className={cn(
        "relative isolate flex flex-col justify-end overflow-hidden p-5 text-white lg:block lg:p-0",
        className
      )}
    >
      <Image
        src={outcome.image}
        alt=""
        width={outcome.width}
        height={outcome.height}
        unoptimized
        className={cn(
          "absolute inset-0 -z-10 size-full object-cover",
          bleedsRight ? "object-left" : "object-right"
        )}
      />
      <p
        className={cn(
          "text-[10px] leading-none tracking-[0.1em] uppercase lg:absolute lg:text-[length:max(9px,calc(var(--u)*11))]",
          labelClassName
        )}
      >
        Project {String(index + 1).padStart(2, "0")}
      </p>
      {children}
    </figure>
  )
}

/*
 * Desktop (lg) positions are the coordinates of the 1440 × 2242 design frame
 * (text is placed by where its glyphs land, not by its line box).
 * `--spacing: var(--u)` makes every spacing utility one design px (see hero).
 * The background truck is fixed to the viewport (see FixedBackdrop), so the
 * content scrolls over it.
 */
export function OutcomesSection() {
  const [coastal, civic] = OUTCOMES

  return (
    <section
      id="projects"
      aria-labelledby="outcomes-title"
      className="relative isolate overflow-hidden bg-[#0d2841] text-white lg:[--spacing:var(--u)]"
    >
      {/*
       * The truck stretched edge to edge and centred vertically in the
       * viewport. Its artwork spans x 76–693, y 25–427 of the 728 × 560 file,
       * so the file is 728/617 = 118% wide and the translate centres the
       * artwork rather than the file; the height follows the width.
       */}
      <FixedBackdrop>
        <Image
          src={ASSETS.truck}
          alt=""
          width={728}
          height={560}
          unoptimized
          className="absolute top-1/2 left-1/2 h-auto w-[118vw] max-w-none translate-x-[-52.8%] translate-y-[-40.4%] opacity-5"
        />
      </FixedBackdrop>

      <div className="flex flex-col gap-10 px-4 py-16 sm:px-8 lg:relative lg:mx-auto lg:block lg:h-2242 lg:max-w-1440 lg:p-0 lg:*:absolute">
        <p className="text-[13px] leading-none tracking-[0.092em] uppercase lg:top-112.5 lg:left-110.5 lg:text-[length:max(12px,calc(var(--u)*14))]">
          04 - Outcomes
        </p>

        <h2
          id="outcomes-title"
          className="text-[12vw] leading-[1.07] font-semibold tracking-[-0.03em] uppercase lg:top-113 lg:right-91 lg:text-right lg:text-[length:calc(var(--u)*96)] lg:whitespace-nowrap"
        >
          <span className="block">What the mix</span>
          <span className="block text-[#8694a0]">becomes.</span>
        </h2>

        <OutcomeCard
          outcome={coastal}
          index={0}
          className="-mr-4 aspect-[1268/828] rounded-l-3xl sm:-mr-8 lg:top-396.5 lg:left-172 lg:mr-0 lg:aspect-auto lg:h-828 lg:w-[calc(var(--u)*1268+var(--bleed))] lg:rounded-l-[calc(var(--u)*50)] lg:[--bleed:max(0px,(100vw-1440px)/2)]"
          labelClassName="lg:top-707.5 lg:left-71"
        >
          <h3 className="mt-2 text-3xl leading-none font-bold tracking-[-0.02em] uppercase lg:absolute lg:top-727 lg:left-59.5 lg:mt-0 lg:text-[length:calc(var(--u)*70)]">
            {coastal.name}
          </h3>
          <p className="mt-2 text-[10px] leading-none tracking-[0.06em] uppercase lg:absolute lg:top-781 lg:left-1089.5 lg:mt-0 lg:text-[length:max(9px,calc(var(--u)*11))]">
            {coastal.tags}
          </p>
        </OutcomeCard>

        <OutcomeCard
          outcome={civic}
          index={1}
          className="-ml-4 aspect-[807/810] rounded-r-3xl sm:-ml-8 lg:top-1328 lg:left-[calc(-1*var(--bleed))] lg:ml-0 lg:aspect-auto lg:h-810 lg:w-[calc(var(--u)*807+var(--bleed))] lg:rounded-r-[calc(var(--u)*50)] lg:[--bleed:max(0px,(100vw-1440px)/2)]"
          labelClassName="lg:top-710 lg:left-[calc(var(--u)*38.25+var(--bleed))]"
        >
          <h3 className="mt-2 text-3xl leading-none font-bold tracking-[-0.028em] uppercase lg:absolute lg:top-730.5 lg:left-[calc(var(--u)*33.25+var(--bleed))] lg:mt-0 lg:text-[length:calc(var(--u)*56)]">
            {civic.name}
          </h3>
          <p className="mt-2 text-[10px] leading-none tracking-[0.06em] uppercase lg:absolute lg:top-763 lg:left-[calc(var(--u)*651.5+var(--bleed))] lg:mt-0 lg:text-[length:max(9px,calc(var(--u)*11))]">
            {civic.tags}
          </p>
        </OutcomeCard>

        <div className="lg:top-1503 lg:left-889 lg:w-460">
          <p className="text-[8px] leading-none tracking-[0.18em] uppercase lg:text-[length:max(7px,calc(var(--u)*7.5))]">
            Material record / 02
          </p>
          <blockquote className="mt-4 text-[10vw] leading-[1.032] font-medium tracking-[0.015em] uppercase lg:-ml-1.5 lg:mt-[calc(var(--u)*19.3)] lg:text-[length:calc(var(--u)*68)]">
            <p>
              <span className="block">&ldquo;Structure</span>
              <span className="block">begins</span>
              <span className="block">long</span>
              <span className="block">before the</span>
              <span className="block">concrete</span>
              <span className="block">sets.&rdquo;</span>
            </p>
          </blockquote>
          <p className="mt-6 text-base leading-none lg:mt-[calc(var(--u)*41.9)] lg:text-[length:max(14px,calc(var(--u)*20))]">
            Form begins with flow.
          </p>
        </div>
      </div>
    </section>
  )
}
