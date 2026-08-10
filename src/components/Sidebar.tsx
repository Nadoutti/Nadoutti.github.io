import { profile } from '../data/profile'
import type { SectionMeta } from '../types'
import { Icon } from './Icon'
import { NavLinks } from './NavLinks'
import { ThemeToggle } from './ThemeToggle'

interface SidebarProps {
  sections: SectionMeta[]
  activeId: string
}

/** Desktop-only sticky rail: identity, nav, socials. */
export function Sidebar({ sections, activeId }: SidebarProps) {
  return (
    <aside className="hidden lg:sticky lg:top-0 lg:flex lg:h-screen lg:flex-col lg:justify-between lg:border-r lg:border-ink-200 lg:py-10 lg:pr-5 xl:py-12 xl:pr-6 dark:lg:border-ink-800">
      <div>
        <a href="#about" className="block">
          <p className="text-lg font-semibold text-ink-900 dark:text-ink-50">
            {profile.name}
          </p>
          <p className="mt-0.5 text-sm text-ink-500 dark:text-ink-400">{profile.title}</p>
        </a>

        <nav aria-label="Sections" className="mt-8">
          <NavLinks sections={sections} activeId={activeId} />
        </nav>
      </div>

      {/* -mx-2 pulls the icons' own padding back so they optically line up
          with the nav labels above and the sidebar's right edge. */}
      <div className="-mx-2 flex items-center justify-between gap-2">
        <ul className="flex flex-wrap items-center">
          {profile.socials.map((social) => (
            <li key={social.label}>
              <a
                href={social.href}
                target={social.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                aria-label={social.label}
                title={social.label}
                className="flex h-9 w-9 items-center justify-center rounded-md text-ink-500 transition-colors hover:bg-ink-100 hover:text-ink-900 dark:text-ink-400 dark:hover:bg-ink-800 dark:hover:text-ink-100"
              >
                <Icon name={social.icon} />
              </a>
            </li>
          ))}
        </ul>
        <ThemeToggle />
      </div>
    </aside>
  )
}
