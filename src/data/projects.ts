import type { Project } from '../types'

// `highlight: true` pins a project to the top of the grid with an accent border.
export const projects: Project[] = [
  {
    name: 'RaspiBus',
    description:
      'Accessibility project co-founded with a hardware-focused peer to help blind residents of São Paulo identify and board public buses, informed by field research with ~30 visually impaired participants. Trained Ultralytics/PyTorch computer vision models to ~78% accuracy on an augmented dataset (400 base images expanded via rotation and transformation), sized to run on a Raspberry Pi — accuracy traded for latency, since the model predicts continuously in low-stakes real time. Secured ~R$1,000 in prototype funding and interest in a pilot with São Paulo public transit.',
    tech: ['Python', 'PyTorch', 'Ultralytics', 'Computer Vision', 'Raspberry Pi'],
  },
  {
    name: 'Unofficial Tally SDK',
    description:
      "SDK built for Instituto Na Prática after the official Tally API proved too limited for the institute's complex forms and integrations. Used internally to streamline candidate screening for job applications.",
    tech: ['Python', 'REST APIs', 'Automation'],
  },

  {
    name: 'Hash Identifier',
    description:
      "Hash Identifier built with the objective to learn more about hash exploiting, hash implementations and cyber security. The project can serve as tool to identify several types of hashes to exploit them later on.",
    tech: ['Python', 'Automation', 'CyberSecurity'],
  },
]
