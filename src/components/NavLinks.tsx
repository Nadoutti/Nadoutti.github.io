import type { SectionMeta } from '../types'

interface NavLinksProps {
  sections: SectionMeta[]
  activeId: string
  onNavigate?: () => void
}

/** Anchor list shared by the desktop sidebar and the mobile drawer. */
export function NavLinks({ sections, activeId, onNavigate }: NavLinksProps) {
  return (
    <ul className="space-y-0.5">
      {sections.map(({ id, label }) => {
        const active = id === activeId
        return (
          <li key={id}>
            <a
              href={`#${id}`}
              onClick={onNavigate}
              aria-current={active ? 'true' : undefined}
              className={`block border-l-2 py-1.5 pl-3 text-sm transition-colors ${
                active
                  ? 'border-accent-500 font-medium text-ink-900 dark:border-accent-400 dark:text-ink-50'
                  : 'border-transparent text-ink-500 hover:border-ink-300 hover:text-ink-800 dark:text-ink-400 dark:hover:border-ink-700 dark:hover:text-ink-100'
              }`}
            >
              {label}
            </a>
          </li>
        )
      })}
    </ul>
  )
}
