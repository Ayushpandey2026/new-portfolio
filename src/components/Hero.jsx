import { useEffect, useState } from 'react'
import Icon from './Icon.jsx'
import { useTypewriter } from '../hooks/useTypewriter.js'
import { ROLES, PROFILE } from '../data/content.js'

const Hero = ({ theme }) => {
  const typed = useTypewriter(ROLES)
  const [bootDone, setBootDone] = useState(false)
  useEffect(() => {
    const t = setTimeout(() => setBootDone(true), 900)
    return () => clearTimeout(t)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32 pb-20 px-5">
      <div className="mx-auto max-w-6xl w-full grid md:grid-cols-[1.15fr_0.85fr] gap-14 items-center">
        {/* left */}
        <div>
          <div className="font-mono text-xs sm:text-sm accent-text mb-5 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full accent-bg pulse-dot"></span>
            STATUS: OPEN TO OPPORTUNITIES
          </div>

          <div className="font-mono text-sm sm:text-base text-[color:var(--text-dim)] mb-2">
            <span className="accent-text">$</span> whoami
          </div>
          <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl leading-[1.03] tracking-tight mb-5">
            {bootDone ? (
              <>
                Ayush <span className="accent-text">Pandey</span>
              </>
            ) : (
              <span className="font-mono text-3xl">
                Ayush_Pandey<span className="cursor-blink">_</span>
              </span>
            )}
          </h1>

          <div className="font-mono text-lg sm:text-xl h-8 text-[color:var(--text-dim)] mb-6">
            <span className="accent-text">&gt;</span> {typed}
            <span className="cursor-blink accent-text">|</span>
          </div>

          <p className="text-[color:var(--text-dim)] text-base sm:text-lg max-w-xl leading-relaxed mb-9">
            Architecting scalable backend systems and fluid frontend experiences to solve real-world problems —
            one clean commit at a time.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="magnetic-btn accent-bg text-black font-mono text-sm font-semibold px-6 py-3.5 rounded-xl flex items-center gap-2"
            >
              View Projects <Icon name="external" className="w-4 h-4" />
            </a>
            <a
              href={PROFILE.resumeUrl}
              download
              className="magnetic-btn glass border border-white/15 font-mono text-sm font-semibold px-6 py-3.5 rounded-xl flex items-center gap-2 hover:border-white/30"
            >
              <Icon name="download" className="w-4 h-4" /> Resume
            </a>
          </div>

          <div className="flex items-center gap-5 mt-10 text-[color:var(--text-dim)]">
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:accent-text transition-colors"
              aria-label="GitHub"
            >
              <Icon name="github" className="w-5 h-5" />
            </a>
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:accent-text transition-colors"
              aria-label="LinkedIn"
            >
              <Icon name="linkedin" className="w-5 h-5" />
            </a>
            <a href={`mailto:${PROFILE.email}`} className="hover:accent-text transition-colors" aria-label="Email">
              <Icon name="mail" className="w-5 h-5" />
            </a>
            <span className="w-px h-4 bg-white/15"></span>
            <span className="font-mono text-xs flex items-center gap-1.5">
              <Icon name="map-pin" className="w-3.5 h-3.5" /> Lucknow, IN
            </span>
          </div>
        </div>

        {/* right: avatar frame */}
<div className="relative flex justify-center md:justify-end">
  <div className="relative w-64 h-64 sm:w-80 sm:h-80">
    {/* Animated outer rings */}
    <div
      className="absolute inset-0 rounded-[2rem] spin-slow border-2 border-dashed opacity-40 pointer-events-none"
      style={{ borderColor: 'var(--accent)' }}
    ></div>
    <div
      className="absolute -inset-4 rounded-[2.5rem] spin-slow-rev opacity-25 pointer-events-none"
      style={{ border: `1px solid ${theme.hex}` }}
    ></div>

    {/* Main Avatar Shell */}
    <div
      className="absolute inset-3 rounded-[1.75rem] glow-border glass overflow-hidden profile-photo-shell"
      style={{ boxShadow: `0 0 60px -10px var(--accent-glow)` }}
    >
      <div className="relative w-full h-full overflow-hidden profile-photo-wrap">
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{ background: `radial-gradient(circle at 30% 20%, var(--accent-soft), transparent 60%)` }}
        ></div>

        {PROFILE.photo ? (
          <img
            src={PROFILE.photo}
            alt={PROFILE.name}
            className="w-full h-full object-cover object-center profile-photo"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="font-display font-bold text-7xl sm:text-8xl accent-text opacity-90 select-none">
              {PROFILE.initials}
            </span>
          </div>
        )}
      </div>
    </div>

    {/* Badge */}
    <div className="absolute -bottom-3 -right-3 glass rounded-xl px-3 py-2 border border-white/10 font-mono text-[11px] flex items-center gap-1.5 z-20">
      <span className="w-1.5 h-1.5 rounded-full accent-bg"></span> B.Tech CSE '26
    </div>
  </div>
</div>
      </div>
    </section>
  )
}

export default Hero
