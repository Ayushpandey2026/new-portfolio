import { useState } from 'react'
import Reveal from './Reveal.jsx'
import Eyebrow from './Eyebrow.jsx'
import ProjectCard from './ProjectCard.jsx'
import ProjectModal from './ProjectModal.jsx'
import { PROJECTS } from '../data/content.js'

const Projects = () => {
  const [active, setActive] = useState(null)

  const openProject = (project, mode = 'overview') => {
    setActive({ project, mode })
  }

  return (
    <section id="projects" className="relative py-28 px-5">
      <div className="mx-auto max-w-[1050px]">
        <Reveal>
          <Eyebrow>03 / Work</Eyebrow>
          <h2 className="font-display font-bold text-3xl sm:text-4xl mb-3">Featured projects.</h2>
          <p className="text-[color:var(--text-dim)] mb-12 max-w-xl">
            A selection of systems built around real problems, thoughtful engineering, and measurable impact.
          </p>
        </Reveal>

        <div className="project-showcase">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.id} delay={Math.min(i, 3) * 80} className="project-showcase-item">
              <ProjectCard project={p} number={i + 1} onExpand={openProject} />
            </Reveal>
          ))}
        </div>
      </div>

      {active && <ProjectModal project={active.project} initialMode={active.mode} onClose={() => setActive(null)} />}
    </section>
  )
}

export default Projects
