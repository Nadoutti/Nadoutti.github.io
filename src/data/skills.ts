import type { SkillGroup } from '../types'

export const skills: SkillGroup[] = [
  {
    name: 'Backend',
    items: ['Python', 'FastAPI', 'Flask', 'Celery', 'Node.js', 'NestJS', 'Go (Gin)', 'REST APIs', 'SQL'],
  },
  {
    name: 'Frontend',
    items: ['React', 'Next.js', 'Vite', 'TypeScript', 'Tailwind CSS'],
  },
  {
    name: 'ML & Data',
    items: ['PyTorch', 'Ultralytics', 'Computer Vision'],
  },
  {
    name: 'Databases & Caching',
    items: ['PostgreSQL', 'Supabase', 'MongoDB', 'Redis', 'Prisma'],
  },
  {
    name: 'DevOps & Cloud',
    items: ['Docker', 'AWS (S3, SQS)', 'GitHub Actions', 'Git', 'Linux'],
  },
  {
    name: 'Methodologies',
    items: ['Agile', 'Scrum', 'Software architecture planning', 'Team leadership'],
  },
]
