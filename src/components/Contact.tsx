import { profile } from '../data/profile'
import { Icon } from './Icon'

export function Contact() {
  return (
    <div>
      <p className="leading-relaxed text-ink-600 dark:text-ink-300">
        Open to internships, junior roles and collaboration on interesting projects. The
        fastest way to reach me is email.
      </p>

      <ul className="mt-5 flex flex-wrap gap-2">
        {profile.socials.map((social) => (
          <li key={social.label}>
            <a
              href={social.href}
              target={social.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              className="flex items-center gap-2 rounded-md border border-ink-200 px-3 py-2 text-sm text-ink-700 transition-colors hover:border-accent-400 hover:text-accent-500 dark:border-ink-800 dark:text-ink-200 dark:hover:border-accent-400 dark:hover:text-accent-400"
            >
              <Icon name={social.icon} className="h-4 w-4" />
              {social.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
