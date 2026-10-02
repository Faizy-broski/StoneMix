import { Reveal, RevealLines } from "@/components/motion/reveal"
import { REVIEWS } from "@/lib/site"
import { ReviewCard } from "./review-card"

/*
 * Desktop (lg) sizes are design px of the 1440 frame.
 * `--spacing: var(--u)` makes every spacing utility one design px (see hero).
 * On small screens the cards become a horizontal scroll-snap row.
 */
export function ReviewsSection() {
  return (
    <section
      id="reviews"
      aria-labelledby="reviews-title"
      className="overflow-hidden bg-[#f6f5f2] text-graphite lg:[--spacing:var(--u)]"
    >
      <div className="px-4 py-16 sm:px-8 lg:mx-auto lg:max-w-1440 lg:px-110 lg:pt-100 lg:pb-140">
        <Reveal as="p" from="up" className="text-center text-[13px] leading-none tracking-[0.092em] uppercase lg:text-[length:max(12px,calc(var(--u)*14))]">
          06 - Reviews
        </Reveal>

        <RevealLines
          id="reviews-title"
          className="mt-4 text-center text-[11vw] leading-none font-semibold tracking-[-0.04em] uppercase lg:mt-14 lg:text-[length:calc(var(--u)*100)]"
        >
          <span>What client&rsquo;s</span>{" "}
          <span className="text-stone">says.</span>
        </RevealLines>

        <ul className="-mx-4 mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 sm:-mx-8 sm:px-8 md:mx-0 md:grid md:grid-cols-3 md:overflow-visible md:px-0 lg:mt-90 lg:gap-28 lg:pb-0">
          {REVIEWS.map((review, i) => (
            <Reveal
              as="li"
              key={i}
              from={(["left", "up", "right"] as const)[i % 3]}
              delay={i * 0.12}
              className="w-[80%] shrink-0 snap-center sm:w-[60%] md:w-auto"
            >
              <ReviewCard review={review} />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
