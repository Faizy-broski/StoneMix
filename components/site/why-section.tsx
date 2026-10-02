import Image from "next/image"

import { Reveal, RevealLines, RevealText } from "@/components/motion/reveal"
import { ASSETS, REASONS } from "@/lib/site"
import { VideoCard } from "./video-card"

/*
 * Desktop (lg) positions are the coordinates of the 1440 × 867 design frame
 * (text is placed by where its glyphs land, not by its line box).
 * `--spacing: var(--u)` makes every spacing utility one design px (see hero).
 */
export function WhySection() {
  return (
    <section
      id="about"
      aria-labelledby="why-title"
      className="relative isolate overflow-hidden bg-white text-graphite lg:[--spacing:var(--u)]"
    >
      <div className="flex flex-col gap-10 px-4 py-16 sm:px-8 lg:relative lg:mx-auto lg:block lg:h-867 lg:max-w-1440 lg:p-0 lg:*:absolute">
        {/* The truck, mirrored and faded to a grey watermark behind the copy. */}
        <Image
          src={ASSETS.truck}
          alt=""
          width={728}
          height={560}
          unoptimized
          className="pointer-events-none -z-10 hidden -scale-x-100 opacity-5 grayscale lg:top-82 lg:left-601 lg:block lg:h-auto lg:w-1307.5 lg:max-w-none"
        />

        <Reveal from="left" zoom duration={1.1} className="lg:top-73 lg:left-80 lg:w-531.5">
          <VideoCard
            src={ASSETS.chooseVideo}
            label="Concrete pouring into rebar formwork"
            className="aspect-[531.5/617] rounded-3xl lg:rounded-[calc(var(--u)*28)]"
          />
        </Reveal>

        <div className="lg:top-101 lg:left-654.5 lg:w-760">
          <Reveal as="p" from="right" className="text-[13px] leading-none tracking-[0.092em] uppercase lg:text-[length:max(12px,calc(var(--u)*14))]">
            05 - Why choose Stonemix
          </Reveal>

          <RevealLines
            id="why-title"
            className="mt-4 text-[12vw] leading-[0.96] font-semibold tracking-[-0.055em] uppercase lg:mt-[calc(var(--u)*8.5)] lg:-ml-6 lg:text-[length:calc(var(--u)*100)] lg:whitespace-nowrap"
          >
            <span className="block">Precision</span>
            <span className="block text-stone">Isn&rsquo;t extra.</span>
            <span className="block">It&rsquo;s standard.</span>
          </RevealLines>

          <RevealText from="right" className="mt-8 max-w-[44em] text-base leading-[1.65] lg:mt-[calc(var(--u)*32)] lg:-ml-5.5 lg:text-[length:max(14px,calc(var(--u)*18))] lg:leading-[calc(var(--u)*28)]">
            We provide quality concrete and screed with flexible quantities,
            practical advice and <br className="hidden lg:inline" />
            dependable service for projects across London.
          </RevealText>

          <ol className="mt-8 flex flex-col gap-3 text-base leading-[1.7] lg:mt-[calc(var(--u)*36)] lg:gap-[calc(var(--u)*11.5)] lg:text-[length:max(14px,calc(var(--u)*18))] lg:leading-[calc(var(--u)*28.4)]">
            {REASONS.map((reason, i) => (
              <li key={reason.title} className="grid grid-cols-[1.45em_1fr]">
                <Reveal as="span" from="right" delay={i * 0.15} className="font-semibold lg:text-[length:max(15px,calc(var(--u)*20))]">
                  {i + 1}.
                </Reveal>
                <RevealText from="right" delay={i * 0.15}>
                  <strong className="font-semibold lg:text-[length:max(15px,calc(var(--u)*20))]">
                    {reason.title} :
                  </strong>{" "}
                  {reason.body[0]} <br className="hidden lg:inline" />
                  {reason.body[1]}
                </RevealText>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
