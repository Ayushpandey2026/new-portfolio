import { useState } from 'react'
import Icon from './Icon.jsx'
import Reveal from './Reveal.jsx'
import Eyebrow from './Eyebrow.jsx'
import { PROFILE } from '../data/content.js'

const FloatField = ({ label, type = 'text', textarea, value, onChange, name }) => {
  const [focused, setFocused] = useState(false)
  const hasValue = value && value.length > 0
  const Tag = textarea ? 'textarea' : 'input'
  return (
    <div className="relative">
      <Tag
        name={name}
        type={!textarea ? type : undefined}
        rows={textarea ? 4 : undefined}
        value={value}
        onChange={onChange}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        className="float-input w-full rounded-xl px-4 pt-5 pb-2 text-sm resize-none"
        required
      />
      <label
        className={`absolute left-4 font-mono transition-all pointer-events-none ${
          focused || hasValue ? 'top-2 text-[10px] accent-text' : 'top-4 text-sm text-[color:var(--text-dim)]'
        }`}
      >
        {label}
      </label>
    </div>
  )
}

const ContactCard = ({ icon, label, value, href }) => (
  <a
    href={href}
    target={href.startsWith('http') ? '_blank' : undefined}
    rel="noopener noreferrer"
    className="glass glow-border rounded-xl p-4 flex items-center gap-3 group"
  >
    <span
      className="w-10 h-10 rounded-lg flex items-center justify-center accent-text shrink-0"
      style={{ background: 'var(--accent-soft)' }}
    >
      <Icon name={icon} className="w-4.5 h-4.5" />
    </span>
    <div className="min-w-0">
      <div className="font-mono text-[10px] uppercase tracking-widest text-[color:var(--text-dimmer)]">{label}</div>
      <div className="text-sm truncate group-hover:accent-text transition-colors">{value}</div>
    </div>
  </a>
)

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio inquiry from ${form.name || 'a visitor'}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="contact" className="relative py-28 px-5">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <Eyebrow>05 / Contact</Eyebrow>
          <h2 className="font-display font-bold text-3xl sm:text-4xl mb-3">Let's build something.</h2>
          <p className="text-[color:var(--text-dim)] mb-12 max-w-xl">
            Open to internships, full-time roles and collaborative projects. Reach out — I read every message.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-[1fr_1.2fr] gap-8">
          <Reveal variant="reveal-l" className="space-y-4">
            <ContactCard icon="mail" label="Email" value={PROFILE.email} href={`mailto:${PROFILE.email}`} />
            <ContactCard icon="linkedin" label="LinkedIn" value="ayushp2007" href={PROFILE.linkedin} />
            <ContactCard icon="github" label="GitHub" value="Ayushpandey2026" href={PROFILE.github} />
            <ContactCard icon="map-pin" label="Location" value={PROFILE.location} href="#" />
          </Reveal>

          <Reveal variant="reveal-r" delay={100}>
            <form onSubmit={handleSubmit} className="glass glow-border rounded-2xl p-6 sm:p-8 space-y-5">
              <FloatField label="Your Name" name="name" value={form.name} onChange={handleChange} />
              <FloatField label="Your Email" name="email" type="email" value={form.email} onChange={handleChange} />
              <FloatField label="Message" name="message" textarea value={form.message} onChange={handleChange} />
              <button
                type="submit"
                className="magnetic-btn accent-bg text-black font-mono text-sm font-semibold px-6 py-3.5 rounded-xl w-full flex items-center justify-center gap-2"
              >
                {sent ? 'Opening your mail client…' : 'Send Message'} <Icon name="mail" className="w-4 h-4" />
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default Contact
