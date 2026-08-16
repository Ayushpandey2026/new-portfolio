import { useEffect, useRef, useState } from 'react'

let sharedObserver = null
const revealCallbacks = new WeakMap()

export function useReveal() {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    if (!sharedObserver) {
      sharedObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return
            const callback = revealCallbacks.get(entry.target)
            if (callback) callback()
          })
        },
        { threshold: 0.15 }
      )
    }

    const callback = () => {
      setInView(true)
      sharedObserver.unobserve(node)
      revealCallbacks.delete(node)
    }

    revealCallbacks.set(node, callback)
    sharedObserver.observe(node)

    return () => {
      sharedObserver.unobserve(node)
      revealCallbacks.delete(node)
    }
  }, [])

  return [ref, inView]
}
