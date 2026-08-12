import { useEffect, useRef } from 'react'

// Subtle, cheap scroll-linked parallax — translates an element a
// fraction of the scroll distance. Kept small so it reads as
// atmosphere rather than a gimmick.
export function useParallax(speed = 0.15) {
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let ticking = false

    const update = () => {
      const rect = node.getBoundingClientRect()
      const viewportCenter = window.innerHeight / 2
      const distanceFromCenter = rect.top + rect.height / 2 - viewportCenter
      node.style.transform = `translate3d(0, ${distanceFromCenter * -speed}px, 0)`
      ticking = false
    }

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update)
        ticking = true
      }
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [speed])

  return ref
}
