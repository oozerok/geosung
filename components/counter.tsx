"use client"

import { useEffect, useRef, useState } from "react"

interface CounterProps {
  target: number
  duration?: number
  suffix?: string
}

export default function Counter({ target, duration = 2000, suffix = "" }: CounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const [hasStarted, setHasStarted] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [hasStarted])

  useEffect(() => {
    if (!hasStarted) return

    let startTime: number | null = null
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      
      // Easing function (easeOutExpo)
      const easeOutExpo = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
      const currentCount = Math.round(easeOutExpo * target)
      setCount(currentCount)

      if (progress < 1) {
        window.requestAnimationFrame(step)
      } else {
        setCount(target) // Ensure exact target value at the end
      }
    }

    window.requestAnimationFrame(step)
  }, [hasStarted, target, duration])

  return (
    <div ref={ref} className="inline-block">
      {count.toLocaleString()}
      {suffix && <span className="text-blue-600 ml-1">{suffix}</span>}
    </div>
  )
}
