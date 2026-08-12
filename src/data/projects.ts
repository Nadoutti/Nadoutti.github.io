import type { Project } from '../types'

// TODO: replace with your real projects. `highlight: true` pins a project to the
// top of the grid with an accent border.
export const projects: Project[] = [
  {
    name: 'Personal Portfolio',
    description:
      'This site. React + TypeScript + Tailwind, statically built with Vite and deployed to GitHub Pages by a GitHub Actions workflow on every push to main.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'GitHub Actions'],
    repoUrl: 'https://github.com/Nadoutti/Nadoutti.github.io',
    liveUrl: 'https://nadoutti.github.io/',
  },
  {
    name: 'Project Name',
    description:
      'One or two sentences: what problem it solves and the one technical decision you would defend in an interview.',
    tech: ['Node.js', 'PostgreSQL'],
    repoUrl: 'https://github.com/Nadoutti',
  },
  {
    name: 'Another Project',
    description: 'What it does and why it was interesting to build.',
    tech: ['Python'],
    repoUrl: 'https://github.com/Nadoutti',
  },
]
