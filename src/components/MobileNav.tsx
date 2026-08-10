import { useEffect, useState } from 'react'
import { profile } from '../data/profile'
import type { SectionMeta } from '../types'
import { Icon } from './Icon'
import { NavLinks } from './NavLinks'
import { ThemeToggle } from './ThemeToggle'

interface MobileNavProps {
  sections: SectionMeta[]
  activeId: string
}

/** Sticky header + drawer, shown below the `lg` breakpoint. */
export function MobileNav({ sections, activeId }: MobileNavProps) {
  const [open, setOpen] = useState(false)

  // Don't let the page scroll behind the open drawer.
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  return (
    // -mx-5 cancels the page container's padding so the bar and its border
    // span the full viewport width.
    <header className="sticky top-0 z-30 -mx-5 border-b border-ink-200 bg-white/85 backdrop-blur lg:hidden dark:border-ink-800 dark:bg-ink-950/85">
      <div className="flex items-center justify-between px-5 py-3">
        <a href="#about" className="font-semibold text-ink-900 dark:text-ink-50">
          {profile.name}
        </a>
        <div className="flex items-center gap-1">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="rounded-md p-2 text-ink-500 transition-colors hover:bg-ink-100 hover:text-ink-900 dark:text-ink-400 dark:hover:bg-ink-800 dark:hover:text-ink-100"
          >
            <Icon name={open ? 'close' : 'menu'} />
          </button>
        </div>
      </div>

      {open && (
        <nav
          aria-label="Sections"
          className="max-h-[calc(100vh-3.5rem)] overflow-y-auto border-t border-ink-200 bg-white px-5 py-4 dark:border-ink-800 dark:bg-ink-950"
        >
          <NavLinks
            sections={sections}
            activeId={activeId}
            onNavigate={() => setOpen(false)}
          />
        </nav>
      )}
    </header>
  )
}
