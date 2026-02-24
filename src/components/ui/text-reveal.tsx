"use client"

import { useEffect, useRef } from "react"
import gsap from "gsap"
import SplitType from "split-type"
import { useHeroTimeline } from "../global/hero/components/hero-timeline-context"

interface Props {
  text: string
}

export const TextReveal = ({ text }: Props) => {
  const textRef = useRef<HTMLHeadingElement>(null)
  const timeline = useHeroTimeline()

  useEffect(() => {
    if (!textRef.current || !timeline) return

    const split = new SplitType(textRef.current, {
      types: "chars",
    })

    gsap.set(split.chars, {
      opacity: 0,
      y: 40,
    })

    timeline.to(
        split.chars,
        {
          opacity: 1,
          y: 0,
          stagger: 0.02,
          duration: 0.5, // 👈 esto controla el tramo interno
          ease: "none",
        },
        "-=0.2"
      )

    return () => {
      split.revert()
    }
  }, [timeline])

  return (
    <h2
      ref={textRef}
      className="text-4xl md:text-6xl font-semibold text-white"
    >
      {text}
    </h2>
  )
}