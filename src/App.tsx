import { useMemo } from 'react'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Languages } from './components/Languages'
import { MobileNav } from './components/MobileNav'
import { Projects } from './components/Projects'
import { Section } from './components/Section'
import { Sidebar } from './components/Sidebar'
import { Skills } from './components/Skills'
import { Timeline } from './components/TimelineItem'
import { academic } from './data/academic'
import { education } from './data/education'
import { experience } from './data/experience'
import { sections } from './data/sections'
import { useActiveSection } from './hooks/useActiveSection'

/** Section body by id — keeps `sections.ts` the only place that defines order. */
const bodies: Record<string, React.ReactNode> = {
  skills: <Skills />,
  experience: <Timeline entries={experience} />,
  academic: <Timeline entries={academic} />,
  projects: <Projects />,
  education: <Timeline entries={education} />,
  languages: <Languages />,
  contact: <Contact />,
}

export default function App() {
  const ids = useMemo(() => sections.map((section) => section.id), [])
  const activeId = useActiveSection(ids)

  return (
    <div className="mx-auto max-w-6xl px-5 lg:grid lg:grid-cols-[240px_1fr] lg:gap-12 lg:px-8">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-3 focus:py-2 focus:text-sm dark:focus:bg-ink-900"
      >
        Skip to content
      </a>

      <MobileNav sections={sections} activeId={activeId} />
      <Sidebar sections={sections} activeId={activeId} />

      <main id="main" className="min-w-0 max-w-3xl">
        <Hero />

        {/* `about` is the Hero itself, so it has no entry in `bodies`. */}
        {sections
          .filter((section) => section.id in bodies)
          .map((section) => (
            <Section key={section.id} id={section.id} title={section.label}>
              {bodies[section.id]}
            </Section>
          ))}

        <Footer />
      </main>
    </div>
  )
}
