// components/HeroStats.tsx
'use client'

import { motion, useInView } from "motion/react"
import { Award, Users, Trophy, UserCheck } from "lucide-react"
import { useRef, useEffect, useState } from "react"

// ── AnimatedCounter (inline so no separate file needed) ──────────────────────
function AnimatedCounter({
  end,
  suffix = "",
  valueClassName,
}: {
  end: number
  suffix?: string
  valueClassName?: string
}) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    let start = 0
    const duration = 1500
    const step = 16
    const increment = end / (duration / step)

    const timer = setInterval(() => {
      start += increment
      if (start >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, step)

    return () => clearInterval(timer)
  }, [inView, end])

  return (
    <span ref={ref} className={valueClassName}>
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}

// ── Stats data ────────────────────────────────────────────────────────────────
const heroStats = [
  { icon: Award,     value: 39,    suffix: "+", label: "Years",                   color: "#FFD700" },
  { icon: Users,     value: 30000, suffix: "+", label: "Students trained",        color: "#eb0339" },
  { icon: Trophy,    value: 9,     suffix: "",  label: "Locations in Abu Dhabi",  color: "#FFD700" },
  { icon: Users,     value: 1500,  suffix: "+", label: "Active Students",         color: "#34d399" },
  { icon: UserCheck, value: 35,    suffix: "+", label: "Professional Instructors",color: "#34d399" },
]

// ── Main component ────────────────────────────────────────────────────────────
export default function HeroStats() {
  return (
    <div className="relative z-10 shrink-0 border-t border-white/15 bg-black/45 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 py-2.5 sm:px-6 sm:py-3 lg:px-8">
        <p className="mb-2 text-center text-[10px] font-bold uppercase tracking-[0.22em] text-white/55 sm:text-[11px]">
          Our Results in Numbers
        </p>
        <div className="grid grid-cols-2 gap-2 sm:gap-3 lg:grid-cols-5">
          {heroStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 + i * 0.05 }}
              className="rounded-lg border border-white/10 bg-white/5 px-2 py-2 text-center sm:px-3 sm:py-2.5"
            >
              <div
                className="mx-auto mb-1 flex h-8 w-8 items-center justify-center rounded-md sm:h-9 sm:w-9"
                style={{ backgroundColor: `${stat.color}22` }}
              >
                <stat.icon
                  className="h-4 w-4 sm:h-[18px] sm:w-[18px]"
                  style={{ color: stat.color }}
                />
              </div>
              <AnimatedCounter
                end={stat.value}
                suffix={stat.suffix}
                valueClassName="text-lg font-bold text-white sm:text-xl"
              />
              <p className="mt-0.5 text-[10px] font-medium text-white/65 sm:text-[11px]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}