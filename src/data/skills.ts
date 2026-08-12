import type { SkillGroup } from '../types'

// TODO: trim and reorder these to match what you actually use.
export const skills: SkillGroup[] = [
  {
    name: 'Languages',
    items: ['TypeScript', 'JavaScript', 'Python', 'Java', 'SQL', 'Go'],
  },
  {
    name: 'Frontend',
    items: ['React', 'Vite', 'Tailwind CSS', 'HTML', 'CSS'],
  },
  {
    name: 'Backend',
    items: ['Node.js', 'Express', 'REST APIs', 'Spring Boot', 'FastAPI', 'NestJS'],
  },
  {
    name: 'Data',
    items: ['PostgreSQL', 'MongoDB', 'Redis', 'Prisma'],
  },
  {
    name: 'Tools & Infra',
    items: ['Git', 'GitHub Actions', 'Docker', 'Linux', 'Railway', 'Auth0'],
  },
]
