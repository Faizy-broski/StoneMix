import Image from "next/image"

import { ASSETS } from "@/lib/site"
import { cn } from "@/lib/utils"

/*
 * The truck with its ground shadow, laid out in the Figma export's
 * 1034 × 758 frame: `truck.svg` (728 × 560) sits at x = 122 and the shadow
 * is the export's blurred shape.
 */
export function TruckFigure({ className }: { className?: string }) {
  return (
    <div className={cn("relative aspect-[1034/758]", className)}>
      <svg
        aria-hidden
        viewBox="0 0 1034 758"
        fill="none"
        className="absolute inset-0 size-full"
      >
        <defs>
          <filter
            id="truck-shadow"
            x="137"
            y="377"
            width="793"
            height="179"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feGaussianBlur stdDeviation="26" />
          </filter>
        </defs>
        <path
          d="M586.183 429L189 487.594L578.378 504L878 487.594L586.183 429Z"
          fill="black"
          opacity="0.61"
          filter="url(#truck-shadow)"
        />
      </svg>

      <Image
        src={ASSETS.truck}
        alt="Concrete mixer truck"
        width={728}
        height={560}
        unoptimized
        className="absolute top-0 left-[11.799%] w-[70.406%]"
      />
    </div>
  )
}
