interface SectionProps {
  id: string
  title: string
  children: React.ReactNode
}

/** Shared wrapper: consistent heading, spacing and anchor scroll offset. */
export function Section({ id, title, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-24 py-10 lg:scroll-mt-12">
      <h2 className="mb-6 border-b border-ink-200 pb-2 text-xs font-semibold uppercase tracking-[0.18em] text-ink-500 dark:border-ink-800 dark:text-ink-400">
        {title}
      </h2>
      {children}
    </section>
  )
}
