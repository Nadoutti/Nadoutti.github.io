import type { TimelineEntry } from '../types'
import { TagList } from './TagList'

/** One dated entry — reused by Experience, Academic and Education. */
export function TimelineItem({ entry }: { entry: TimelineEntry }) {
  const organization = entry.href ? (
    <a
      href={entry.href}
      target="_blank"
      rel="noreferrer"
      className="text-accent-500 hover:underline dark:text-accent-400"
    >
      {entry.organization}
    </a>
  ) : (
    entry.organization
  )

  return (
    <li className="relative border-l border-ink-200 pb-8 pl-6 last:pb-0 dark:border-ink-800">
      <span
        aria-hidden="true"
        className="absolute -left-[4.5px] top-1.5 h-2 w-2 rounded-full bg-ink-300 dark:bg-ink-700"
      />

      <div className="flex flex-col gap-x-4 gap-y-0.5 sm:flex-row sm:items-baseline sm:justify-between">
        <h3 className="font-semibold text-ink-900 dark:text-ink-100">{entry.title}</h3>
        <span className="shrink-0 font-mono text-xs text-ink-500 dark:text-ink-400">
          {entry.period}
        </span>
      </div>

      <p className="mt-0.5 text-sm text-ink-600 dark:text-ink-300">
        {organization}
        {entry.location && (
          <span className="text-ink-400 dark:text-ink-500"> · {entry.location}</span>
        )}
      </p>

      {entry.description && (
        <p className="mt-2 text-sm leading-relaxed text-ink-600 dark:text-ink-300">
          {entry.description}
        </p>
      )}

      {entry.bullets && entry.bullets.length > 0 && (
        <ul className="mt-2 list-disc space-y-1 pl-4 text-sm leading-relaxed text-ink-600 marker:text-ink-300 dark:text-ink-300 dark:marker:text-ink-700">
          {entry.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      )}

      {entry.tech && <TagList items={entry.tech} className="mt-3" />}
    </li>
  )
}

/** Vertical rail wrapper so the three chronological sections stay identical. */
export function Timeline({ entries }: { entries: TimelineEntry[] }) {
  return (
    <ul>
      {entries.map((entry) => (
        <TimelineItem key={`${entry.organization}-${entry.title}`} entry={entry} />
      ))}
    </ul>
  )
}
