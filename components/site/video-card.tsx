"use client"

import { useRef, useState } from "react"

import { cn } from "@/lib/utils"

/*
 * A video that shows its first frame with a play button until clicked, then
 * plays with native controls. Desktop sizes are in design px (see hero).
 */
export function VideoCard({
  src,
  label,
  className,
}: {
  src: string
  label: string
  className?: string
}) {
  const ref = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)

  return (
    <div className={cn("relative overflow-hidden bg-graphite", className)}>
      <video
        ref={ref}
        // `#t=0.1` makes browsers paint the first frame as the poster.
        src={`${src}#t=0.1`}
        aria-label={label}
        playsInline
        autoPlay
        muted
        loop
        preload="metadata"
        controls={playing}
        className="absolute inset-0 size-full object-cover"
      />
      {/* {!playing && (
        <button
          type="button"
          aria-label={`Play video: ${label}`}
          onClick={() => {
            setPlaying(true)
            void ref.current?.play()
          }}
          className="group absolute top-1/2 left-1/2 flex size-20 -translate-1/2 items-center justify-center rounded-full bg-white transition-transform duration-200 hover:scale-105 lg:size-100"
        >
          <svg
            aria-hidden
            viewBox="0 0 19.6 23.1"
            className="ml-[8%] h-[23%] fill-navy"
          >
            <path d="M0 0 19.6 11.55 0 23.1Z" />
          </svg>
        </button>
      )} */}
    </div>
  )
}
