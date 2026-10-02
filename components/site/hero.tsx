import { Reveal, RevealLines, RevealText } from "@/components/motion/reveal"
import { ASSETS } from "@/lib/site"
import { BookingForm } from "./booking-form"
import { CtaLink } from "./cta-link"

/*
 * Desktop (lg) positions are the coordinates of the 1440 × 800 design frame.
 * `--spacing: var(--u)` makes every spacing utility one design px, so
 * `lg:left-102` is 102px at 1440 and scales down with the viewport to 1024.
 * The stage is pinned to the bottom, so taller screens only reveal more sky.
 */
export function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-svh flex-col justify-end overflow-hidden bg-[#3b3a39] text-cream lg:min-h-[max(100svh,calc(var(--u)*800))] lg:[--spacing:var(--u)]"
    >
      <video
        aria-hidden
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster={ASSETS.hero}
        className="absolute inset-0 -z-20 size-full object-cover object-[62%_50%]"
      >
        <source src={ASSETS.heroVideo} type="video/mp4" />
      </video>
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_top,rgb(0_0_0/0.5)_0%,rgb(0_0_0/0.1)_40%,transparent_60%),linear-gradient(to_right,rgb(0_0_0/0.35),transparent_55%)]"
      />

      <div className="flex flex-col px-4 pt-32 pb-8 sm:px-8 lg:relative lg:mx-auto lg:block lg:h-800 lg:w-full lg:max-w-1440 lg:p-0 lg:*:absolute lg:*:m-0">
        <Reveal
          as="p"
          from="left"
          className="flex gap-3 text-[11px] leading-4 font-medium uppercase lg:top-248 lg:left-102 lg:gap-10 lg:text-[length:max(9px,calc(var(--u)*10))] lg:leading-12"
        >
          <span>Est. 2011</span>
          <span>Concrete / Supply / Pumping</span>
        </Reveal>

        <RevealLines
          as="h1"
          id="hero-title"
          delay={0.1}
          className="mt-2 text-[13vw] leading-[0.88] font-extrabold tracking-[-0.02em] text-white uppercase lg:top-268 lg:left-95 lg:text-[length:calc(var(--u)*103)] lg:leading-[0.87]"
        >
          <span className="block whitespace-nowrap">Built</span>
          <span className="block whitespace-nowrap">From the</span>
          <span className="block whitespace-nowrap">Ground up.</span>
        </RevealLines>

        <RevealText
          delay={0.5}
          className="mt-5 text-base leading-[1.3] font-medium text-white lg:top-560 lg:left-102 lg:text-[length:max(14px,calc(var(--u)*18))] lg:leading-24"
        >
          Concrete engineered for the way you build.
        </RevealText>

        <Reveal
          from="left"
          delay={0.65}
          className="mt-7 flex flex-wrap gap-2.5 lg:top-614 lg:left-102 lg:gap-12"
        >
          <CtaLink href="#contact" className="lg:h-49 lg:min-w-157 lg:px-18">
            Get a quote
          </CtaLink>
          <CtaLink
            href="#services"
            variant="outline"
            arrow="down"
            className="bg-white/10 backdrop-blur-sm lg:h-49 lg:min-w-186 lg:px-18"
          >
            Explore Stonemix
          </CtaLink>
        </Reveal>

        <Reveal from="right" delay={0.3} className="mt-10 lg:top-193 lg:left-859 lg:w-491">
          <BookingForm />
        </Reveal>

        <p
          aria-hidden
          className="hidden text-[length:max(6px,calc(var(--u)*7))] leading-none font-medium text-white/85 before:h-px before:w-6.5 before:bg-current lg:top-431 lg:left-1379 lg:flex lg:flex-col lg:gap-5"
        >
          01
        </p>
      </div>
    </section>
  )
}
