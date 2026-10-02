"use client"

import { Accordion } from "@base-ui/react/accordion"
import { Plus } from "lucide-react"
import Image from "next/image"

import { ASSETS, FAQS } from "@/lib/site"
import { Reveal, RevealLines } from "@/components/motion/reveal"
import { ParallaxLayer } from "./parallax-layer"

/*
 * Desktop (lg) sizes are design px of the 1440 frame.
 * `--spacing: var(--u)` makes every spacing utility one design px (see hero).
 */
export function FaqSection() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative isolate overflow-hidden bg-white text-graphite lg:[--spacing:var(--u)]"
    >
      {/* Scattered stones (already faded to 10% in the file), drifting slower than the page. */}
      <ParallaxLayer speed={0.25} className="inset-x-0 inset-y-[-30%]">
        <Image
          src={ASSETS.faqBackdrop}
          alt=""
          width={1440}
          height={1430}
          unoptimized
          className="size-full object-cover object-right"
        />
      </ParallaxLayer>

      <div className="px-4 py-16 sm:px-8 lg:mx-auto lg:max-w-1440 lg:px-0 lg:pt-100 lg:pb-160">
        <Reveal as="p" from="up" className="text-center text-[13px] leading-none tracking-[0.092em] uppercase lg:text-[length:max(12px,calc(var(--u)*14))]">
          07 - Frequently asked questions
        </Reveal>

        <RevealLines
          id="faq-title"
          className="mt-4 text-center text-[11vw] leading-none font-semibold tracking-[-0.04em] uppercase lg:mt-14 lg:text-[length:calc(var(--u)*100)]"
        >
          <span>Have</span>{" "}
          <span className="text-stone">questions?</span>
        </RevealLines>

        <Accordion.Root
          defaultValue={[0]}
          className="mx-auto mt-12 max-w-[44rem] border-b border-black/10 lg:mt-80 lg:max-w-1000"
        >
          {FAQS.map((faq, i) => (
            <Reveal key={faq.question} from={i % 2 ? "right" : "left"} delay={i * 0.08}>
            <Accordion.Item value={i} className="border-t border-black/10">
              <Accordion.Header>
                <Accordion.Trigger className="group flex w-full items-center justify-between gap-4 py-5 text-left text-[15px] font-semibold outline-none focus-visible:ring-2 focus-visible:ring-navy/40 lg:py-[calc(var(--u)*30)] lg:text-[length:max(14px,calc(var(--u)*18))]">
                  {faq.question}
                  <span
                    aria-hidden
                    className="grid size-7 shrink-0 place-items-center rounded-[4px] bg-black/6 transition-transform duration-300 group-hover:bg-black/10 group-data-panel-open:rotate-45 lg:size-[calc(var(--u)*34)]"
                  >
                    <Plus className="size-3.5 stroke-[2.5] lg:size-[max(12px,calc(var(--u)*14))]" />
                  </span>
                </Accordion.Trigger>
              </Accordion.Header>
              <Accordion.Panel className="h-(--accordion-panel-height) overflow-hidden transition-[height] duration-300 ease-out data-ending-style:h-0 data-starting-style:h-0">
                <p className="max-w-[46em] pb-6 text-sm leading-[1.65] text-graphite/80 lg:pb-[calc(var(--u)*32)] lg:text-[length:max(13px,calc(var(--u)*16))]">
                  {faq.answer}
                </p>
              </Accordion.Panel>
            </Accordion.Item>
            </Reveal>
          ))}
        </Accordion.Root>
      </div>
    </section>
  )
}
