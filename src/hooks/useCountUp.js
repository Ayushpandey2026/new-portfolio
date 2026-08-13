import { useEffect, useState } from 'react'

export function useCountUp(target, inView, duration = 1400) {
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!inView) return
    let start = null
    const step = (ts) => {
      if (!start) start = ts
      const progress = Math.min((ts - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setVal(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(step)
      else setVal(target)
    }
    requestAnimationFrame(step)
  }, [inView, target, duration])
  return val
}
