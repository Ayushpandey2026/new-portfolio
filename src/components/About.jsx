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
          Engineering with intent: solving operational friction, not just shipping interfaces.
        </h2>
      </Reveal>

      <div className="grid md:grid-cols-[1fr_1fr] gap-12 items-start">
        <Reveal variant="reveal-l">
          <p className="text-[color:var(--text-dim)] text-base sm:text-lg leading-relaxed mb-5">
            I am a Software Development Engineer who builds production-grade web systems focused on
            solving tangible business problems. While a clean user interface matters, I prioritize
            the layer beneath it: low-latency query execution, reliable data contracts, clean state
            boundaries, and scalable backend logic that handles real edge cases.
          </p>
        </Reveal>

        <Reveal variant="reveal-r" delay={100}>
          <div className="glass glow-border rounded-2xl p-6">
            <div className="font-mono text-xs uppercase tracking-widest accent-text mb-4 flex items-center gap-2">
              <Icon name="terminal" className="w-4 h-4" /> Engineering Philosophy
            </div>
            <ul className="space-y-3 font-mono text-sm text-[color:var(--text-dim)]">
              <li className="flex gap-3">
                <span className="accent-text">01.</span> Problem-first architecture: validate the data model, constraints, and edge cases before UI code.
              </li>
              <li className="flex gap-3">
                <span className="accent-text">02.</span> Geospatial and query efficiency: indexed radius lookups over expensive client-side filtering.
              </li>
              <li className="flex gap-3">
                <span className="accent-text">03.</span> Predictable state and modular logic: separate concerns to keep systems resilient as requirements scale.
              </li>
              <li className="flex gap-3">
                <span className="accent-text">04.</span> Reliable API contracts: clear REST endpoints, defensive schema validation, and stateless access control.
              </li>
            </ul>
          </div>
        </Reveal>
      </div>

      <Reveal delay={120}>
        <article className="glass glow-border rounded-2xl p-6 sm:p-8 mt-12 relative overflow-hidden">
          <div className="absolute inset-y-0 left-0 w-1 bg-[color:var(--accent)]" aria-hidden="true" />
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <div>
              <div className="font-mono text-xs uppercase tracking-widest accent-text mb-2">
                Currently Engineering
              </div>
              <h3 className="font-display font-bold text-2xl sm:text-3xl">
                Hyperlocal B2B Inventory Exchange
              </h3>
            </div>
            <div className="inline-flex items-center gap-2 self-start rounded-full border border-[color:var(--accent)]/30 bg-[color:var(--accent-soft)] px-4 py-2 font-mono text-sm accent-text">
              <Icon name="map-pin" className="w-4 h-4" />
              5–10 km radial geofence
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-mono text-xs uppercase tracking-widest accent-text mb-2">The Problem</h4>
              <p className="text-[color:var(--text-dim)] leading-relaxed">
                Neighborhood shopkeepers lose revenue to sudden stockouts and dead inventory, even
                when a nearby store has the surplus they need. Traditional B2B procurement takes
                24–48 hours, leaving local merchants stranded during intraday demand spikes.
              </p>
            </div>
            <div>
              <h4 className="font-mono text-xs uppercase tracking-widest accent-text mb-2">The Engineering Solution</h4>
              <p className="text-[color:var(--text-dim)] leading-relaxed">
                A peer-to-peer inventory clearing platform uses geospatial coordinate filtering to
                help nearby shopkeepers discover, buy, and sell surplus inventory for instant local
                fulfillment. Trade requests beyond the 10 km radius are filtered at query level to
                avoid fulfillment delays and logistics overhead.
              </p>
            </div>
          </div>
        </article>
      </Reveal>

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
