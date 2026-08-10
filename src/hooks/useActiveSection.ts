import { useEffect, useState } from 'react'

/**
 * Scroll-spy: returns the id of the section currently closest to the top of the
 * viewport. Uses IntersectionObserver so it costs nothing on idle scroll.
 */
export function useActiveSection(ids: string[]): string {
  const [active, setActive] = useState(ids[0] ?? '')

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    if (elements.length === 0) return

    // Track ratios ourselves: picking "the topmost intersecting section" is more
    // stable than reacting to whichever entry happened to fire.
    const visible = new Map<string, number>()

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            visible.set(entry.target.id, entry.intersectionRatio)
          } else {
            visible.delete(entry.target.id)
          }
        }

        const topmost = ids.find((id) => visible.has(id))
        if (topmost) setActive(topmost)
      },
      {
        // Bias the "active" band towards the upper third of the viewport.
        rootMargin: '-15% 0px -70% 0px',
        threshold: [0, 0.25, 0.5, 1],
      },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [ids])

  return active
}
