import { useEffect } from 'react'
import Icon from './Icon.jsx'

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  if (!project) return null
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-8">
      <div className="absolute inset-0 modal-backdrop" onClick={onClose}></div>
      <div
        className="relative glass border border-white/10 rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-7 sm:p-9"
        style={{ boxShadow: '0 0 80px -10px var(--accent-glow)' }}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center rounded-lg border border-white/10 hover:border-white/30"
        >
          <Icon name="close" className="w-4 h-4" />
        </button>
        <div className="font-mono text-xs uppercase tracking-widest accent-text mb-2 flex items-center gap-2">
          <Icon name="layers" className="w-4 h-4" /> System Breakdown
        </div>
        <h3 className="font-display font-bold text-2xl sm:text-3xl mb-1">{project.name}</h3>
        <p className="text-[color:var(--text-dim)] text-sm mb-6">{project.tagline}</p>

        {project.image && (
          <div className="mb-6 overflow-hidden rounded-xl border border-white/10 bg-black/20">
            <img src={project.image} alt={project.imageAlt || project.name} className="w-full h-44 object-cover object-center" />
          </div>
        )}

        <div
          className="rounded-xl p-4 font-mono text-xs sm:text-[13px] leading-relaxed"
          style={{ background: 'var(--panel-solid)', border: '1px solid var(--line)' }}
        >
          {project.architecture.map((line, i) => (
            <div key={i} className="flex gap-3 py-1">
              <span className="text-[color:var(--text-dimmer)] select-none">{String(i + 1).padStart(2, '0')}</span>
              <span className="text-[color:var(--text-dim)]">
                <span className="accent-text">&rarr;</span> {line}
              </span>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 mt-6">
          {project.stack.map((s) => (
            <span key={s} className="font-mono text-[11px] px-2.5 py-1 rounded-full border border-white/10 text-[color:var(--text-dim)]">
              {s}
            </span>
          ))}
        </div>

        <div className="flex gap-3 mt-7">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="magnetic-btn flex-1 text-center glass border border-white/15 font-mono text-xs font-semibold px-4 py-3 rounded-xl flex items-center justify-center gap-2"
          >
            <Icon name="github" className="w-4 h-4" /> Source
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="magnetic-btn flex-1 text-center accent-bg text-black font-mono text-xs font-semibold px-4 py-3 rounded-xl flex items-center justify-center gap-2"
          >
            Live Demo <Icon name="external" className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default ProjectModal
