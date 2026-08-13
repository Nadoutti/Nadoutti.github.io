export interface SectionMeta {
  id: string
  label: string
}

export interface SocialLink {
  label: string
  href: string
  /** Key into the icon map in `components/Icon.tsx`. */
  icon: 'github' | 'linkedin' | 'mail' | 'file'
}

export interface Profile {
  name: string
  title: string
  location: string
  email: string
  phone: string
  /** One-line pitch rendered above the bio in the hero. */
  tagline: string
  /** Path to a photo in `public/`, or `null` to render initials instead. */
  photo: string | null
  bio: string[]
  socials: SocialLink[]
}

export interface SkillGroup {
  name: string
  items: string[]
}

/** One dated entry — shared by professional, academic and education sections. */
export interface TimelineEntry {
  /** Company, institution or lab. */
  organization: string
  /** Role, position or degree. */
  title: string
  /** Human-readable period, e.g. "Jan 2024 — Present". */
  period: string
  location?: string
  description?: string
  bullets?: string[]
  tech?: string[]
  href?: string
}

export interface Project {
  name: string
  description: string
  tech: string[]
  repoUrl?: string
  liveUrl?: string
  /** Featured projects render first, with an accent border. */
  highlight?: boolean
}

export interface LanguageSkill {
  language: string
  level: string
}
