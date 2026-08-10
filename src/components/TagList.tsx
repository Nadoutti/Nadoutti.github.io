interface TagListProps {
  items: string[]
  className?: string
}

/** Small pill list used for tech stacks on entries and project cards. */
export function TagList({ items, className = '' }: TagListProps) {
  if (items.length === 0) return null

  return (
    <ul className={`flex flex-wrap gap-1.5 ${className}`}>
      {items.map((item) => (
        <li
          key={item}
          className="rounded-full border border-ink-200 px-2.5 py-0.5 font-mono text-[11px] text-ink-600 dark:border-ink-800 dark:text-ink-400"
        >
          {item}
        </li>
      ))}
    </ul>
  )
}
