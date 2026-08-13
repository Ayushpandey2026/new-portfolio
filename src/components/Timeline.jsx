import Reveal from './Reveal.jsx'
import Eyebrow from './Eyebrow.jsx'
import { useReveal } from '../hooks/useReveal.js'
import { TIMELINE } from '../data/content.js'

const TimelineItem = ({ item, index }) => {
  const [ref, inView] = useReveal()
  const isLeft = index % 2 === 0
  return (
    <div ref={ref} className={`relative flex items-start md:items-center md:justify-center reveal ${inView ? 'in' : ''}`}>
      <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full accent-bg timeline-dot z-10"></div>
      <div
        className={`md:w-1/2 ${isLeft ? 'md:pr-12 md:text-right md:ml-0' : 'md:pl-12 md:ml-auto'} pl-10 md:pl-0 relative`}
      >
        <div className="md:hidden absolute left-0 top-1.5 w-3 h-3 rounded-full accent-bg timeline-dot"></div>
        <div className="glass glow-border rounded-xl p-5 inline-block w-full md:w-auto md:min-w-[320px]">
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
      <div className="relative">
        <div className="absolute left-1.5 md:left-1/2 top-0 bottom-0 w-px timeline-line md:-translate-x-1/2"></div>
        <div className="space-y-10">
          {TIMELINE.map((item, i) => (
            <TimelineItem key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </div>
  </section>
)

export default Timeline
