export function Footer() {
  return (
    <footer className="border-t border-ink-200 py-8 text-xs text-ink-400 dark:border-ink-800 dark:text-ink-500">
      <p>
        Built with React, TypeScript and Tailwind CSS. Deployed to GitHub Pages via
        GitHub Actions. © {new Date().getFullYear()} Pedro Nadotti.
      </p>
    </footer>
  )
}
