"use client"

import type React from "react"

import { MarqueeProps } from '@typings/marquee'

export function Marquee({ children, className, pauseOnHover = true, reverse = false, speed = "normal" }: MarqueeProps) {
  const speedMap = {
    slow: "40s",
    normal: "25s",
    fast: "15s",
  }

  return (
    <div className={`relative py-2 overflow-hidden ${className || ""}`}>
      <div
        className={`flex w-max gap-6 ${pauseOnHover ? "hover:[animation-play-state:paused]" : ""}`}
        style={{
          animation: `marquee ${speedMap[speed]} linear infinite`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {children}
        {children}
      </div>
    </div>
  )
}
