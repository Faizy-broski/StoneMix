import Image from "next/image"

import { Reveal } from "@/components/motion/reveal"
import { GALLERY } from "@/lib/site"

/*
 * Desktop (lg) sizes are design px of the 1440 frame.
 * `--spacing: var(--u)` makes every spacing utility one design px (see hero).
 * The photos run in an endless strip: the track holds the list twice and
 * slides by one copy (the trailing padding matches the gap, so both halves
 * are exactly equal and the loop is seamless). Hover pauses it; reduced
 * motion stops it and lets the strip scroll by hand instead.
 */
export function GallerySection() {
  return (
    <section
      id="gallery"
      aria-labelledby="gallery-title"
      className="overflow-hidden bg-white text-graphite lg:[--spacing:var(--u)]"
    >
      <div className="px-4 pt-16 sm:px-8 lg:pt-100">
        <Reveal as="p" from="up" className="text-center text-[13px] leading-none tracking-[0.092em] uppercase lg:text-[length:max(12px,calc(var(--u)*14))]">
          09 - Trust builder
        </Reveal>
        <Reveal
          as="h2"
          from="left"
          id="gallery-title"
          className="mt-4 text-center text-[16vw] leading-none font-semibold tracking-[-0.04em] uppercase lg:mt-14 lg:text-[length:calc(var(--u)*110)]"
        >
          Gallery
        </Reveal>
      </div>

      <Reveal from="right" distance={240} duration={1.3} className="mt-10 pb-16 motion-reduce:overflow-x-auto lg:mt-110 lg:pb-140">
        <ul className="flex w-max animate-marquee gap-3 pr-3 hover:[animation-play-state:paused] motion-reduce:animate-none lg:gap-21 lg:pr-21">
          {[...GALLERY, ...GALLERY].map((item, i) => (
            <li
              key={i}
              aria-hidden={i >= GALLERY.length}
              className="relative aspect-[380/305] w-[70vw] shrink-0 overflow-hidden rounded-xl sm:w-[42vw] lg:w-380 lg:rounded-[calc(var(--u)*14)]"
            >
              <Image
                src={item.image}
                alt={i >= GALLERY.length ? "" : item.alt}
                fill
                unoptimized
                sizes="(min-width: 1024px) 380px, 70vw"
                className="object-cover"
              />
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  )
}
