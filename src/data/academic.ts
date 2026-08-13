import type { TimelineEntry } from '../types'

/** Academic projects built at Insper for real partner organizations. Newest first. */
export const academic: TimelineEntry[] = [
  {
    organization: 'Child and Youth Protection Network (UNAS)',
    title: 'Project PO & Developer',
    period: 'Sep 2025 — Oct 2025',
    location: 'São Paulo, Brazil',
    bullets: [
      'Led a team of 5 to build a communication platform for Conselho Tutelar de Heliópolis.',
      'Replaced manual, spreadsheet-based case-reporting workflows, saving ~3 hours of manual work per day and accelerating support for at-risk children and adolescents.',
    ],
    tech: ['FastAPI', 'React', 'Vite', 'Supabase', 'Redis'],
  },
  {
    organization: 'Instituto Na Prática',
    title: 'Project PO — Na Prática Project',
    period: 'Aug 2025 — Oct 2025',
    location: 'São Paulo, Brazil',
    bullets: [
      "Coordinated a team of 4 to build an unofficial Tally SDK after the official Tally API proved too limited for the institute's complex forms and integrations.",
      "Adopted by Instituto Na Prática's internal team to streamline candidate screening for job applications, accelerating the hiring pipeline.",
    ],
    tech: ['Python', 'REST APIs', 'Automation'],
  },
  {
    organization: 'Fundação Lemann',
    title: 'Developer',
    period: 'Nov 2024 — Dec 2024',
    location: 'São Paulo, Brazil',
    bullets: [
      'Built the React/Vite frontend from scratch and developed the SQL-based data pipeline for a platform transforming 10,000+ scattered WhatsApp messages into an interactive, social-network-style web application.',
      'Resolved a multi-day data-processing bottleneck to structure and surface historical message data at scale, as part of a team using Scrum and Design Thinking.',
    ],
    tech: ['React', 'Vite', 'SQL', 'Scrum', 'Design Thinking'],
  },
]
