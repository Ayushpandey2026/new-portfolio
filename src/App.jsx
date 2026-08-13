import { useEffect, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Timeline from './components/Timeline.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import BackToTop from './components/BackToTop.jsx'
import { THEMES, NAV_LINKS } from './data/content.js'

function App() {
  const [themeKey, setThemeKey] = useState('blue')
  const theme = THEMES[themeKey]
  const [active, setActive] = useState('home')

  useEffect(() => {
    const root = document.documentElement
    root.style.setProperty('--accent', theme.hex)
    root.style.setProperty('--accent-glow', theme.glow)
    root.style.setProperty('--accent-soft', theme.soft)
    ;['glow-a', 'glow-b', 'glow-c'].forEach((id) => {
      const el = document.getElementById(id)
      if (el) el.style.background = theme.hex
    })
  }, [theme])

  useEffect(() => {
    const sections = NAV_LINKS.map((l) => document.getElementById(l.id)).filter(Boolean)
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-45% 0px -45% 0px' }
    )
    sections.forEach((s) => obs.observe(s))
    return () => obs.disconnect()
  }, [])

  return (
    <>
      <div className="starfield" aria-hidden="true" />
      <div className="bg-grid" aria-hidden="true" />
      <Navbar theme={theme} setTheme={setThemeKey} active={active} />
      <main className="relative z-10">
        <Hero theme={theme} />
        <About />
        <Skills />
        <Projects />
        <Timeline />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}

export default App
