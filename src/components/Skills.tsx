import { skills } from '../data/skills'
import { TagList } from './TagList'

export function Skills() {
  return (
    <dl className="space-y-4">
      {skills.map((group) => (
        <div key={group.name} className="sm:grid sm:grid-cols-[140px_1fr] sm:gap-4">
          <dt className="text-sm font-medium text-ink-900 dark:text-ink-100">
            {group.name}
          </dt>
          <dd className="mt-1.5 sm:mt-0">
            <TagList items={group.items} />
          </dd>
        </div>
      ))}
    </dl>
  )
}
