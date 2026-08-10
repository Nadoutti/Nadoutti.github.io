import { useTheme } from '../hooks/useTheme'
import { Icon } from './Icon'

export function ThemeToggle({ className = '' }: { className?: string }) {
  const { theme, toggle } = useTheme()

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-md text-ink-500 transition-colors hover:bg-ink-100 hover:text-ink-900 dark:text-ink-400 dark:hover:bg-ink-800 dark:hover:text-ink-100 ${className}`}
    >
      <Icon name={theme === 'dark' ? 'sun' : 'moon'} />
    </button>
  )
}
