import Icon from './Icon.jsx'
import Reveal from './Reveal.jsx'
import Eyebrow from './Eyebrow.jsx'
import { useReveal } from '../hooks/useReveal.js'
import { useCountUp } from '../hooks/useCountUp.js'
import { STATS } from '../data/content.js'

const StatCard = ({ stat }) => {
  const [ref, inView] = useReveal()
  const count = useCountUp(stat.value, inView)
  return (
    <div ref={ref} className="glass glow-border rounded-2xl p-5 text-center">
      <div className="font-display font-bold text-3xl sm:text-4xl accent-text num-badge">
        {count}
        {stat.suffix}+
      </div>
      <div className="font-mono text-[11px] uppercase tracking-wider text-[color:var(--text-dim)] mt-2">
        {stat.label}
      </div>
    </div>
  )
}

const About = () => (
  <section id="about" className="relative py-28 px-5">
    <div className="mx-auto max-w-6xl">
      <Reveal>
        <Eyebrow>01 / About</Eyebrow>
        <h2 className="font-display font-bold text-3xl sm:text-4xl mb-6">
          Engineering with intent, not just interface.
        </h2>
      </Reveal>

      <div className="grid md:grid-cols-[1fr_1fr] gap-12 items-start">
        <Reveal variant="reveal-l">
          <p className="text-[color:var(--text-dim)] text-base sm:text-lg leading-relaxed mb-5">
            I'm a Software Developer Engineer, graduated in 2026, building
            production-grade full-stack applications rather than tutorials-and-toys. My work spans
            AI-assisted hiring platforms, e-commerce systems, and secure cloud file management —
            each one shipped with real APIs, real databases, and real edge cases handled.
          </p>
          <p className="text-[color:var(--text-dim)] text-base sm:text-lg leading-relaxed">
            I care about the layer beneath the UI: query performance, access control, clean state
            management, and architecture that doesn't collapse the moment requirements change.
          </p>
        </Reveal>

        <Reveal variant="reveal-r" delay={100}>
          <div className="glass glow-border rounded-2xl p-6">
            <div className="font-mono text-xs uppercase tracking-widest accent-text mb-4 flex items-center gap-2">
              <Icon name="terminal" className="w-4 h-4" /> Engineering Philosophy
            </div>
            <ul className="space-y-3 font-mono text-sm text-[color:var(--text-dim)]">
              <li className="flex gap-3">
                <span className="accent-text">01.</span> Data structures & algorithms before UI polish.
              </li>
              <li className="flex gap-3">
                <span className="accent-text">02.</span> REST APIs designed for clarity, not cleverness.
              </li>
              <li className="flex gap-3">
                <span className="accent-text">03.</span> State management that stays predictable at scale.
              </li>
              <li className="flex gap-3">
                <span className="accent-text">04.</span> Clean, modular code — separation of concerns by default.
              </li>
              <li className="flex gap-3">
                <span className="accent-text">05.</span> Security and access control treated as core features.
              </li>
            </ul>
          </div>
        </Reveal>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-14">
        {STATS.map((s, i) => (
          <Reveal key={s.label} delay={i * 80}>
            <StatCard stat={s} />
          </Reveal>
        ))}
      </div>
    </div>
  </section>
)

export default About
