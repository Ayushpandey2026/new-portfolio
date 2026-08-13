import { useEffect, useState } from 'react'
import Icon from './Icon.jsx'
import { NAV_LINKS, THEMES, PROFILE } from '../data/content.js'

const ThemeSlider = ({ theme, setTheme }) => (
  <div className="flex items-center gap-2 glass rounded-full px-2 py-1.5 border border-white/10">
    {Object.values(THEMES).map((t) => (
      <button
        key={t.key}
        onClick={() => setTheme(t.key)}
        title={t.name}
        aria-label={`Switch accent to ${t.name}`}
        className="theme-dot w-4 h-4 rounded-full relative"
        style={{
          background: t.hex,
          boxShadow:
            theme.key === t.key
              ? `0 0 0 2px var(--void), 0 0 0 4px ${t.hex}, 0 0 12px ${t.hex}`
              : `0 0 8px ${t.hex}80`,
        }}
      />
    ))}
  </div>
)

const Navbar = ({ theme, setTheme, active }) => {
  const [scrolled, setScrolled] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${scrolled ? 'py-3' : 'py-5'}`}>
        <div
          className={`mx-auto max-w-6xl px-5 flex items-center justify-between rounded-2xl transition-all duration-500 ${
            scrolled ? 'glass py-2.5 px-5 border-white/10' : ''
          }`}
        >
          <a href="#home" className="font-display font-semibold text-lg flex items-center gap-2 group">
            <span
              className="w-8 h-8 rounded-lg flex items-center justify-center border font-mono text-sm accent-border accent-text transition-all group-hover:shadow-[0_0_16px_var(--accent-glow)]"
              style={{ borderColor: 'var(--accent)' }}
            >
              {PROFILE.initials}
            </span>
            <span className="hidden sm:inline">
              Ayush<span className="accent-text">.</span>Pandey
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8 font-mono text-[13px] uppercase tracking-wider text-[color:var(--text-dim)]">
            {NAV_LINKS.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                className={`nav-link transition-colors hover:text-white ${active === l.id ? 'text-white' : ''}`}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden sm:block">
              <ThemeSlider theme={theme} setTheme={setTheme} />
            </div>
            <button
              onClick={() => setDrawerOpen(true)}
              className="md:hidden w-9 h-9 flex items-center justify-center rounded-lg glass border border-white/10"
            >
              <Icon name="menu" className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* mobile drawer */}
      <div className={`fixed inset-0 z-50 md:hidden ${drawerOpen ? '' : 'pointer-events-none'}`}>
        <div
          className={`absolute inset-0 modal-backdrop transition-opacity duration-300 ${
            drawerOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setDrawerOpen(false)}
        />
        <div
          className={`drawer absolute top-0 right-0 h-full w-72 glass border-l border-white/10 p-6 flex flex-col gap-6 ${
            drawerOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex justify-between items-center">
            <span className="font-mono text-xs uppercase tracking-widest text-[color:var(--text-dim)]">Menu</span>
            <button onClick={() => setDrawerOpen(false)}>
              <Icon name="close" className="w-5 h-5" />
            </button>
          </div>
          <nav className="flex flex-col gap-5 font-display text-2xl">
            {NAV_LINKS.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                onClick={() => setDrawerOpen(false)}
                className="hover:accent-text transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div className="mt-auto">
            <ThemeSlider theme={theme} setTheme={setTheme} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
