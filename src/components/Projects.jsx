import { useRef, useState } from 'react'
import Reveal from './Reveal.jsx'
import Eyebrow from './Eyebrow.jsx'
import ProjectCard from './ProjectCard.jsx'
import ProjectModal from './ProjectModal.jsx'
import { PROJECTS } from '../data/content.js'

const Projects = () => {
  const [active, setActive] = useState(null)
  const [slide, setSlide] = useState(0)
  const trackRef = useRef(null)

  const goTo = (i) => {
    setSlide(i)
    const track = trackRef.current
    if (track) {
      const card = track.children[i]
      if (card) track.scrollTo({ left: card.offsetLeft - 20, behavior: 'smooth' })
    }
  }

  return (
    <section id="projects" className="relative py-28 px-5">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <Eyebrow>03 / Work</Eyebrow>
          <h2 className="font-display font-bold text-3xl sm:text-4xl mb-3">Featured projects.</h2>
          <p className="text-[color:var(--text-dim)] mb-12 max-w-xl">
            Problem &rarr; Engineering Solution &rarr; Impact. Tap "Architecture" on any project for a system
            breakdown.
          </p>
        </Reveal>

        {/* mobile carousel */}
        <div className="md:hidden">
          <div
            ref={trackRef}
            className="flex gap-5 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-2"
            style={{ scrollPadding: '0 20px' }}
          >
            {PROJECTS.map((p) => (
              <div key={p.id} className="snap-start shrink-0 w-[86%]">
                <ProjectCard project={p} onExpand={setActive} />
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-2 mt-6">
            {PROJECTS.map((p, i) => (
              <button
                key={p.id}
                onClick={() => goTo(i)}
                className="h-1.5 rounded-full transition-all"
                style={{
                  width: slide === i ? '22px' : '8px',
                  background: slide === i ? 'var(--accent)' : 'rgba(255,255,255,0.2)',
                }}
                aria-label={`Go to project ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* desktop grid */}
        <div className="hidden md:grid grid-cols-3 gap-6 items-start">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.id} delay={i * 100}>
              <ProjectCard project={p} onExpand={setActive} />
            </Reveal>
          ))}
        </div>
      </div>

      {active && <ProjectModal project={active} onClose={() => setActive(null)} />}
    </section>
  )
}

export default Projects
