import Icon from './Icon.jsx'
import { PROFILE } from '../data/content.js'

const Footer = () => (
  <footer className="relative border-t border-white/10 py-10 px-5">
    <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="font-mono text-xs text-[color:var(--text-dimmer)]">
        &copy; {new Date().getFullYear()} Ayush Pandey 
      </div>
      <div className="flex items-center gap-5">
        <a
          href={PROFILE.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[color:var(--text-dim)] hover:accent-text transition-colors"
        >
          <Icon name="github" className="w-4.5 h-4.5" />
        </a>
        <a
          href={PROFILE.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[color:var(--text-dim)] hover:accent-text transition-colors"
        >
          <Icon name="linkedin" className="w-4.5 h-4.5" />
        </a>
        <a href={`mailto:${PROFILE.email}`} className="text-[color:var(--text-dim)] hover:accent-text transition-colors">
          <Icon name="mail" className="w-4.5 h-4.5" />
        </a>
      </div>
    </div>
  </footer>
)

export default Footer
