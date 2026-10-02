"use client"

import { motion, MotionConfig, type Variants } from "framer-motion"
import {
  Children,
  cloneElement,
  isValidElement,
  useLayoutEffect,
  useRef,
  useState,
  type ElementType,
  type ReactElement,
  type ReactNode,
} from "react"

import { cn } from "@/lib/utils"

/*
 * Scroll-triggered entrances built on Framer Motion. Every component renders
 * the element it replaces (`as`), keeping its classes, so absolutely
 * positioned children of the `lg:*:absolute` frames keep their placement.
 * Each plays once, when a fifth of it has scrolled into view.
 */

export type From = "left" | "right" | "up" | "down"

type Custom = {
  from: From
  delay: number
  duration: number
  distance?: number
  zoom?: boolean
}

const DISTANCE = 80
const EASE = [0.22, 1, 0.36, 1] as const
const VIEWPORT = { once: true, amount: 0.2 } as const

const offset = (from: From, d = DISTANCE) =>
  from === "left"
    ? { x: -d }
    : from === "right"
      ? { x: d }
      : { y: from === "up" ? d * 0.6 : -d * 0.6 }

const variants: Variants = {
  hidden: ({ from, distance, zoom }: Custom) => ({
    opacity: 0,
    ...offset(from, distance),
    ...(zoom && { scale: 0.94 }),
  }),
  show: ({ delay, duration, zoom }: Custom) => ({
    opacity: 1,
    x: 0,
    y: 0,
    ...(zoom && { scale: 1 }),
    transition: { delay, duration, ease: EASE },
  }),
}

// The elements these components can render as, created once.
const TAGS = {
  blockquote: motion.blockquote,
  div: motion.div,
  figure: motion.figure,
  h1: motion.h1,
  h2: motion.h2,
  h3: motion.h3,
  li: motion.li,
  nav: motion.nav,
  ol: motion.ol,
  p: motion.p,
  span: motion.span,
  ul: motion.ul,
} as Record<string, ElementType>

type BaseProps = React.HTMLAttributes<HTMLElement> & {
  as?: "blockquote" | "div" | "figure" | "h1" | "h2" | "h3" | "li" | "nav" | "ol" | "p" | "span" | "ul"
  delay?: number
  duration?: number
  children?: ReactNode
}

/** Slides and fades one element in from a side. `zoom` adds a slight scale-up (for images). */
export function Reveal({
  as = "div",
  from = "up",
  delay = 0,
  duration = 0.9,
  distance,
  zoom,
  children,
  ...props
}: BaseProps & { from?: From; distance?: number; zoom?: boolean }) {
  const Component = TAGS[as]

  return (
    <Component
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
      inherit={false}
      variants={variants}
      custom={{ from, delay, duration, distance, zoom } satisfies Custom}
      {...props}
    >
      {children}
    </Component>
  )
}

type InnerProps = { className?: string; children?: ReactNode }

/*
 * A heading whose children are its lines (usually `<span className="block">`),
 * each sliding in after the last. "alternate" brings them from the left and
 * right in turn. Inline spans become inline-block so they can move; plain
 * whitespace between them is kept as is.
 */
export function RevealLines({
  as = "h2",
  from = "alternate",
  delay = 0,
  stagger = 0.14,
  duration = 1,
  children,
  ...props
}: BaseProps & { from?: From | "alternate"; stagger?: number }) {
  const Component = TAGS[as]
  let index = 0

  const lines = Children.map(children, (child) => {
    if (typeof child === "string" && !child.trim()) return child

    const i = index++
    const custom: Custom = {
      from: from === "alternate" ? (i % 2 ? "right" : "left") : from,
      delay: delay + i * stagger,
      duration,
    }

    if (isValidElement<InnerProps>(child) && child.type === "span") {
      const { className, children: inner, ...rest } = child.props
      return (
        <motion.span
          {...rest}
          variants={variants}
          custom={custom}
          className={cn(!/\bblock\b/.test(className ?? "") && "inline-block", className)}
        >
          {inner}
        </motion.span>
      )
    }

    return (
      <motion.span variants={variants} custom={custom} className="inline-block">
        {child}
      </motion.span>
    )
  })

  return (
    <Component initial="hidden" whileInView="show" viewport={VIEWPORT} inherit={false} {...props}>
      {lines}
    </Component>
  )
}

/*
 * Body copy revealed line by line as it actually wraps. The text is split
 * into words; after layout each word is assigned the line it landed on, and
 * lines then slide in one after another. `<br>`s are kept, and inline
 * elements with plain-text children (e.g. <strong>) are split too.
 */
export function RevealText({
  as = "p",
  from = "left",
  delay = 0,
  stagger = 0.1,
  duration = 0.9,
  children,
  ...props
}: BaseProps & { from?: From; stagger?: number }) {
  const Component = TAGS[as]
  const ref = useRef<HTMLElement>(null)
  const [lineOf, setLineOf] = useState<number[]>([])

  useLayoutEffect(() => {
    const words = ref.current?.querySelectorAll<HTMLElement>("[data-word]")
    if (!words) return
    const tops: number[] = []
    setLineOf(
      Array.from(words, (word) => {
        let line = tops.findIndex((top) => Math.abs(top - word.offsetTop) < 4)
        if (line < 0) line = tops.push(word.offsetTop) - 1
        return line
      })
    )
  }, [])

  let count = 0
  const word = (node: ReactNode) => {
    const i = count++
    return (
      <motion.span
        key={`w${i}`}
        data-word=""
        className="inline-block"
        variants={variants}
        custom={{ from, delay: delay + (lineOf[i] ?? 0) * stagger, duration } satisfies Custom}
      >
        {node}
      </motion.span>
    )
  }
  const words = (text: string, wrap: (part: string) => ReactNode = (part) => part) =>
    text.split(/(\s+)/).map((part) => (part.trim() ? word(wrap(part)) : part))

  const content = Children.toArray(children).flatMap((node): ReactNode[] => {
    if (typeof node === "string" || typeof node === "number") return words(String(node))
    if (!isValidElement<InnerProps>(node) || node.type === "br") return [node]
    const inner = node.props.children
    if (typeof inner !== "string") return [word(node)]
    let part = 0
    return words(inner, (text) =>
      cloneElement(node as ReactElement<InnerProps>, { key: `${node.key}-${part++}` }, text)
    )
  })

  return (
    <Component
      ref={ref}
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
      inherit={false}
      {...props}
    >
      {content}
    </Component>
  )
}

/** Honours the OS "reduce motion" setting: entrances fade without moving. */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>
}
