import { projects } from '../data/projects'
import { Icon } from './Icon'
import { TagList } from './TagList'

// Featured projects first, original order preserved within each group.
const ordered = [...projects].sort(
  (a, b) => Number(Boolean(b.highlight)) - Number(Boolean(a.highlight)),
)

export function Projects() {
  return (
    <ul className="grid gap-4 sm:grid-cols-2">
      {ordered.map((project) => (
        <li
          key={project.name}
          className={`flex flex-col rounded-lg border p-4 transition-colors ${
            project.highlight
              ? 'border-accent-400/60 bg-accent-400/[0.04] dark:border-accent-400/40'
              : 'border-ink-200 hover:border-ink-300 dark:border-ink-800 dark:hover:border-ink-700'
          }`}
        >
          <h3 className="font-semibold text-ink-900 dark:text-ink-100">{project.name}</h3>

          <p className="mt-1.5 flex-1 text-sm leading-relaxed text-ink-600 dark:text-ink-300">
            {project.description}
          </p>

          <TagList items={project.tech} className="mt-3" />

          {(project.repoUrl || project.liveUrl) && (
            <div className="mt-3 flex items-center gap-4 text-sm">
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-ink-500 transition-colors hover:text-accent-500 dark:text-ink-400 dark:hover:text-accent-400"
                >
                  <Icon name="github" className="h-4 w-4" />
                  Code
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 text-ink-500 transition-colors hover:text-accent-500 dark:text-ink-400 dark:hover:text-accent-400"
                >
                  <Icon name="link" className="h-4 w-4" />
                  Live
                </a>
              )}
            </div>
          )}
        </li>
      ))}
    </ul>
  )
}
