import Icon from './Icon.jsx'
import Reveal from './Reveal.jsx'
import Eyebrow from './Eyebrow.jsx'
import { useReveal } from '../hooks/useReveal.js'
import { SKILL_GROUPS } from '../data/content.js'

const SkillGroupCard = ({ group, index }) => {
  const [ref, inView] = useReveal()
  return (
    <div
      ref={ref}
      className={`glass glow-border rounded-2xl p-6 reveal ${inView ? 'in' : ''}`}
      style={{ transitionDelay: `${index * 70}ms` }}
    >
      <div className="flex items-center gap-3 mb-5">
        <span
          className="w-9 h-9 rounded-lg flex items-center justify-center accent-text border"
          style={{ borderColor: 'var(--accent)', background: 'var(--accent-soft)' }}
        >
          <Icon name={group.icon} className="w-4.5 h-4.5" />
        </span>
        <h3 className="font-display font-semibold text-lg">{group.title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {group.items.map((item) => (
          <span
            key={item}
            className="skill-chip rounded-full px-3 py-1.5 font-mono text-xs text-[color:var(--text-dim)] hover:text-white"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

const Skills = () => (
  <section id="skills" className="relative py-28 px-5">
    <div className="mx-auto max-w-6xl">
      <Reveal>
        <Eyebrow>02 / Stack</Eyebrow>
        <h2 className="font-display font-bold text-3xl sm:text-4xl mb-12">Technical skills & core competencies.</h2>
      </Reveal>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {SKILL_GROUPS.map((g, i) => (
          <SkillGroupCard key={g.title} group={g} index={i} />
        ))}
      </div>
    </div>
  </section>
)

export default Skills
