import { profile } from '../data/profile'
import { Icon } from './Icon'

function initials(name: string) {
  return name
    .split(' ')
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase()
}

export function Hero() {
  return (
    <section id="about" className="scroll-mt-24 pb-10 pt-4 lg:scroll-mt-12 lg:pt-12">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
        {profile.photo ? (
          <img
            src={profile.photo}
            alt={profile.name}
            className="h-28 w-28 shrink-0 rounded-full object-cover ring-1 ring-ink-200 dark:ring-ink-800"
          />
        ) : (
          <div
            aria-hidden="true"
            className="flex h-28 w-28 shrink-0 items-center justify-center rounded-full bg-ink-100 text-3xl font-semibold text-ink-400 ring-1 ring-ink-200 dark:bg-ink-900 dark:text-ink-600 dark:ring-ink-800"
          >
            {initials(profile.name)}
          </div>
        )}

        <div>
          <h1 className="text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl dark:text-ink-50">
            {profile.name}
          </h1>
          <p className="mt-1 text-lg text-accent-500 dark:text-accent-400">
            {profile.title}
          </p>
          <p className="mt-2 text-sm text-ink-500 dark:text-ink-400">
            {profile.location} ·{' '}
            <a
              href={`mailto:${profile.email}`}
              className="hover:text-accent-500 hover:underline dark:hover:text-accent-400"
            >
              {profile.email}
            </a>
          </p>

          <ul className="mt-4 flex flex-wrap items-center gap-2 lg:hidden">
            {profile.socials.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  className="flex items-center gap-1.5 rounded-md border border-ink-200 px-2.5 py-1 text-xs text-ink-600 transition-colors hover:border-ink-300 hover:text-ink-900 dark:border-ink-800 dark:text-ink-300 dark:hover:border-ink-700 dark:hover:text-ink-50"
                >
                  <Icon name={social.icon} className="h-3.5 w-3.5" />
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="mt-6 text-lg leading-relaxed text-ink-700 dark:text-ink-200">
        {profile.tagline}
      </p>

      {profile.bio.map((paragraph) => (
        <p
          key={paragraph}
          className="mt-4 leading-relaxed text-ink-600 dark:text-ink-300"
        >
          {paragraph}
        </p>
      ))}
    </section>
  )
}
