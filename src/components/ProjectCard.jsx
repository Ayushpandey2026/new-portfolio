import { useState } from 'react'
import Icon from './Icon.jsx'

const ProjectCard = ({ project, onExpand }) => {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className={`project-card glass glow-border rounded-2xl p-6 sm:p-7 flex flex-col min-w-[300px] ${expanded ? 'project-card--expanded' : ''}`}>
      <div className="flex items-start justify-between mb-4">
        <h3 className="font-display font-bold text-xl sm:text-2xl">{project.name}</h3>
        <span className="font-mono text-[11px] text-[color:var(--text-dimmer)] whitespace-nowrap ml-2 mt-1">
          {project.period}
        </span>
      </div>

      {project.image && (
        <div className="mb-4 overflow-hidden rounded-xl border border-white/10 bg-black/20">
          <img
            src={project.image}
            alt={project.imageAlt || project.name}
            className="w-full h-40 object-cover object-center"
            loading="lazy"
          />
        </div>
      )}

      <div className="project-preview mb-4">
        <p className="text-[color:var(--text-dim)] text-sm">{project.tagline}</p>
        <p className="project-preview-text text-[color:var(--text-dim)] text-sm mt-3">{project.problem}</p>
      </div>

      <div className="project-stack flex flex-wrap gap-1.5 mb-5">
        {project.stack.map((s) => (
          <span key={s} className="font-mono text-[10px] px-2 py-1 rounded-full border border-white/10 text-[color:var(--text-dim)]">
            {s}
          </span>
        ))}
      </div>

      <div className="project-details">
        <div className="space-y-3 text-sm">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-[color:var(--text-dimmer)] mb-1">
              Problem
            </div>
            <p className="text-[color:var(--text-dim)] leading-snug">{project.problem}</p>
          </div>
          <div>
            <div className="font-mono text-[10px] uppercase tracking-widest accent-text mb-1">Engineering Solution</div>
            <p className="text-[color:var(--text-dim)] leading-snug">{project.solution}</p>
          </div>
          <div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-[color:var(--text-dimmer)] mb-1">
              Impact
            </div>
            <ul className="text-[color:var(--text-dim)] leading-snug space-y-1">
              {project.impact.map((im, i) => (
                <li key={i} className="flex gap-2">
                  <span className="accent-text">▸</span>
                  {im}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-auto flex items-center gap-3 pt-5">
        <button
          type="button"
          onClick={() => {
            setExpanded((v) => !v)
            if (expanded === false && onExpand) onExpand(project)
          }}
          className="project-toggle magnetic-btn flex-1 glass border border-white/15 font-mono text-xs font-semibold px-4 py-3 rounded-xl flex items-center justify-center gap-2"
        >
          <Icon name="layers" className="w-4 h-4" />
          {expanded ? 'View Less' : 'View More'}
        </button>

        {expanded && (
          <>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 flex items-center justify-center rounded-xl glass border border-white/15 hover:border-white/30"
              aria-label="GitHub repo"
            >
              <Icon name="github" className="w-4 h-4" />
            </a>
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 flex items-center justify-center rounded-xl glass border border-white/15 hover:border-white/30"
              aria-label="Live demo"
            >
              <Icon name="external" className="w-4 h-4" />
            </a>
          </>
        )}
      </div>
    </div>
  )
}

export default ProjectCard
