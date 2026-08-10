import { languages } from '../data/languages'

export function Languages() {
  return (
    <dl className="space-y-2">
      {languages.map(({ language, level }) => (
        <div key={language} className="flex items-baseline gap-3">
          <dt className="w-32 shrink-0 text-sm font-medium text-ink-900 dark:text-ink-100">
            {language}
          </dt>
          <dd className="text-sm text-ink-600 dark:text-ink-300">{level}</dd>
        </div>
      ))}
    </dl>
  )
}
