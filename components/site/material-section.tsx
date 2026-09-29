import Image from "next/image"

import { ASSETS, MATERIALS } from "@/lib/site"
import { cn } from "@/lib/utils"
import { FixedBackdrop } from "./fixed-backdrop"

// Red registration mark drawn over the photo.
function Crosshair({ className }: { className: string }) {
  return (
    <span
      aria-hidden
      className={cn(
        "absolute size-[7px] lg:size-7 before:absolute before:inset-x-0 before:top-1/2 before:h-px before:-translate-y-1/2 before:bg-accent-red after:absolute after:inset-y-0 after:left-1/2 after:w-px after:-translate-x-1/2 after:bg-accent-red",
        className
      )}
    />
  )
}

/*
 * Desktop (lg) positions are the coordinates of the 1440 × 843 design frame
 * (text is placed by where its glyphs land, not by its line box).
 * `--spacing: var(--u)` makes every spacing utility one design px (see hero).
 */
export function MaterialSection() {
  return (
    <section
      id="material"
      aria-labelledby="material-title"
      className="relative isolate overflow-hidden bg-white text-graphite lg:[--spacing:var(--u)]"
    >
      <FixedBackdrop>
        <Image
          src={ASSETS.materialBackdrop}
          alt=""
          width={908}
          height={977}
          unoptimized
          className="absolute -top-1 left-[42%] h-auto w-[120%] max-w-none lg:left-611 lg:w-908"
        />
      </FixedBackdrop>

      <div className="flex flex-col gap-10 px-4 py-16 sm:px-8 lg:relative lg:mx-auto lg:block lg:h-843 lg:max-w-1440 lg:p-0 lg:*:absolute">
        <p className="text-[13px] leading-none tracking-[0.092em] uppercase lg:top-67.5 lg:left-92 lg:text-[length:max(12px,calc(var(--u)*14))]">
          01 - The material
        </p>

        <div className="relative aspect-[630.4/548] overflow-hidden rounded-[10px] bg-graphite lg:top-127 lg:left-90 lg:w-630.5 lg:rounded-[calc(var(--u)*10)]">
          <video
            aria-label="Wet concrete and aggregate pouring from a mixer chute"
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            poster={ASSETS.material}
            className="absolute inset-0 size-full object-cover"
          >
            <source src={ASSETS.materialVideo} type="video/mp4" />
          </video>
          <Crosshair className="top-[21.5%] left-[21.1%]" />
          <Crosshair className="top-[69.7%] left-[80.9%]" />
        </div>

        <div className="lg:top-151 lg:left-821 lg:w-489.5">
          <p className="text-[8px] leading-none tracking-[0.2em] uppercase lg:text-[length:max(7px,calc(var(--u)*7.5))]">
            Raw material / Macro study
          </p>

          <ul className="mt-10 border-b border-graphite/20 lg:mt-43">
            {MATERIALS.map((m, i) => (
              <li
                key={m.name}
                className="relative flex h-17 items-end justify-between border-t border-graphite/20 pb-3 lg:h-69.25 lg:pb-12"
              >
                <span className="text-[6px] leading-none tracking-[0.04em] text-graphite/40 uppercase lg:text-[length:calc(var(--u)*5.3)]">
                  Material / {String(i + 1).padStart(2, "0")}
                </span>
                <span className="absolute top-1/2 left-[18%] -translate-y-1/2 text-2xl leading-none font-semibold tracking-[-0.01em] uppercase lg:top-16.5 lg:left-86.25 lg:translate-y-0 lg:text-[length:calc(var(--u)*32)]">
                  {m.name}
                </span>
                <span className="text-[7px] leading-none text-graphite/70 lg:text-[length:calc(var(--u)*6.5)]">
                  {m.share}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <h2
          id="material-title"
          className="text-[22vw] leading-none font-semibold tracking-[-0.06em] uppercase lg:top-488 lg:left-820 lg:text-[length:calc(var(--u)*123)]"
        >
          The <span className="text-stone">mix.</span>
        </h2>

        <p className="max-w-md text-base leading-relaxed lg:top-617.5 lg:left-821 lg:w-500 lg:max-w-none lg:text-[length:max(15px,calc(var(--u)*18))] lg:leading-27.5">
          Every structure begins with a material decision. We bring control,
          movement and intent to the mix.
        </p>

        <ol className="grid grid-cols-2 gap-x-4 gap-y-3 border-t border-graphite/30 pt-5 text-[11px] leading-none tracking-[0.02em] uppercase lg:top-726 lg:left-89.5 lg:flex lg:w-1232.5 lg:justify-between lg:pt-21 lg:text-[length:max(11px,calc(var(--u)*13))]">
          {MATERIALS.map((m, i) => (
            <li key={m.name}>
              Material / {String(i + 1).padStart(2, "0")} {m.label}
            </li>
          ))}
          <li className="text-accent-red">The mix / 04</li>
        </ol>
      </div>
    </section>
  )
}
