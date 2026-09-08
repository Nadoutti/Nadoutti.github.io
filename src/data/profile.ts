import type { Profile } from '../types'

export const profile: Profile = {
  name: 'Pedro Nadotti',
  title: 'Full-Stack Developer | 3rd-year CS Student at Insper',
  location: 'São Paulo, Brazil',
  email: 'nadottipedro5@gmail.com',
  phone: '+55 (19) 99845-8900',
  // TODO: drop a photo in `public/` (e.g. public/photo.jpg) and set it here.
  // Leave `null` to render initials instead.
  photo: '/my-img.jpg',
  tagline:
    'Full-stack developer building backends in Python and Node.js, frontends in React, and shipping them end to end.',
  bio: [
    'Computer Science student at Insper (GPA 9.0/10) working across the stack — FastAPI, NestJS and Go on the backend, React and Next.js on the frontend, with PostgreSQL, Supabase and Redis underneath.',
    'Most of what I build starts as somebody else\'s manual process: spreadsheet case reports at a Conselho Tutelar, candidate screening at an institute, 10,000+ scattered WhatsApp messages. I like leading small teams through that kind of messy problem and leaving behind a system they can maintain.',
  ],
  socials: [
    { label: 'GitHub', href: 'https://github.com/Nadoutti', icon: 'github' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/pedro-nadotti/', icon: 'linkedin' },
    { label: 'Email', href: 'mailto:nadottipedro5@gmail.com', icon: 'mail' },
    { label: 'CV', href: '/Pedro_Nadotti_Resume.pdf', icon: 'file' },
  ],
}
