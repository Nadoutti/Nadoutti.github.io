import type { SectionMeta } from '../types'

/**
 * Single source of truth for section order and nav labels.
 * `App.tsx` renders sections in this order and both navs are generated from it.
 */
export const sections: SectionMeta[] = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills & Stack' },
  { id: 'experience', label: 'Professional Experience' },
  { id: 'academic', label: 'Academic Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'education', label: 'Education' },
  { id: 'languages', label: 'Languages' },
  { id: 'contact', label: 'Contact' },
]
