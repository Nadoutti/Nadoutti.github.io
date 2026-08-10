import type { Profile } from '../types'

export const profile: Profile = {
  name: 'Pedro Nadotti',
  title: 'Software Engineer', // TODO: adjust to your actual title
  tagline: 'Building web applications, backend services and developer tooling.', // TODO
  location: 'Brazil', // TODO: city, state
  email: 'nadottipedro5@gmail.com',
  // TODO: drop a photo in `public/` (e.g. public/photo.jpg) and set it here.
  // Leave `null` to render initials instead.
  photo: null,
  bio: [
    // TODO: replace with your real bio — 2 short paragraphs works well.
    'Software engineer focused on full-stack web development. I enjoy turning messy problems into small, well-shaped systems that other people can actually maintain.',
    'Currently working with TypeScript, React and Node.js, with a growing interest in distributed systems and developer experience.',
  ],
  socials: [
    { label: 'GitHub', href: 'https://github.com/Nadoutti', icon: 'github' },
    // TODO: replace with your LinkedIn URL
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/', icon: 'linkedin' },
    { label: 'Email', href: 'mailto:nadottipedro5@gmail.com', icon: 'mail' },
    // TODO: put a CV PDF in `public/` and point here, or delete this entry.
    // { label: 'CV', href: '/cv.pdf', icon: 'file' },
  ],
}
