import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'

interface StatCounterProps {
  target: number
  label: string
  suffix?: string
}

function StatCounter({ target, label, suffix = '' }: StatCounterProps) {
  const [count, setCount] = useState(0)
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 })

  useEffect(() => {
    if (!inView) return

    const duration = 1500
    const steps = 40
    const increment = target / steps
    let current = 0

    const interval = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(interval)
      } else {
        setCount(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(interval)
  }, [inView, target])

  return (
    <div ref={ref} className="text-center">
      <p className="text-4xl font-bold text-accent sm:text-5xl">
        {count}
        {suffix}
      </p>
      <p className="mt-2 text-sm text-muted">{label}</p>
    </div>
  )
}

export default StatCounter