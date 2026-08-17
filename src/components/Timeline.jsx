import Reveal from './Reveal.jsx'
import Eyebrow from './Eyebrow.jsx'
import { useReveal } from '../hooks/useReveal.js'
import { TIMELINE } from '../data/content.js'

const TimelineItem = ({ item, index }) => {
  const [ref, inView] = useReveal()
  const isLeft = index % 2 === 0

  return (
    <div ref={ref} className={`timeline-item reveal ${inView ? 'in' : ''}`}>
      <div className="timeline-marker" aria-hidden="true"></div>
      <div className={`timeline-card ${isLeft ? 'timeline-card--left' : 'timeline-card--right'}`}>
        <div className="glass glow-border rounded-xl p-5 w-full">
          <div className="flex items-center gap-2 mb-1.5 font-mono text-[11px] uppercase tracking-widest">
            <span className="accent-text">{item.date}</span>
            <span className="text-[color:var(--text-dimmer)]">·</span>
            <span className="text-[color:var(--text-dimmer)]">{item.type}</span>
          </div>
          <h4 className="font-display font-semibold text-base sm:text-lg mb-1">{item.title}</h4>
          <p className="text-[color:var(--text-dim)] text-sm">{item.org}</p>
        </div>
      </div>
    </div>
  )
}

const Timeline = () => (
  <section id="timeline" className="relative py-28 px-5">
    <div className="mx-auto max-w-4xl">
      <Reveal>
        <Eyebrow>04 / Journey</Eyebrow>
        <h2 className="font-display font-bold text-3xl sm:text-4xl mb-14">Education, certifications & milestones.</h2>
      </Reveal>
      <div className="timeline">
        <div className="timeline-line" aria-hidden="true"></div>
        <div className="timeline-list">
          {TIMELINE.map((item, i) => (
            <TimelineItem key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </div>
  </section>
)

export default Timeline
