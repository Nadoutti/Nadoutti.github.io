import type { TimelineEntry } from '../types'

/** Research, teaching assistantships, labs, student groups, competitions. */
// TODO: replace with your real academic involvement, or delete the section
// from `sections.ts` and `App.tsx` if you have none yet.
export const academic: TimelineEntry[] = [
  {
    organization: 'University Name',
    title: 'Undergraduate Research Assistant',
    period: '2025 — Present',
    location: 'São Paulo, Brazil',
    description:
      'One or two sentences on the research topic, the advisor, and what you built or measured.',
    tech: ['Python', 'PyTorch'],
  },
  {
    organization: 'University Name',
    title: 'Teaching Assistant — Data Structures',
    period: '2024',
    description:
      'Ran lab sessions, reviewed assignments and held office hours for ~60 students.',
  },
]
