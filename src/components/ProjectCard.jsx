import Icon from './Icon.jsx'

const ProjectCard = ({ project, number, onExpand }) => (
  <article className="project-card glass glow-border rounded-2xl p-5 sm:p-7">
    <div className="project-card-media">
      {project.image && (
        <div className="project-image-frame">
          <img
            src={project.image}
            alt={project.imageAlt || project.name}
            className="project-image"
            loading="lazy"
          />
        </div>
      )}

      <div className="project-action-row">
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="project-action project-action-primary magnetic-btn"
        >
          Live Demo <Icon name="external" className="w-4 h-4" />
        </a>
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="project-action magnetic-btn"
        >
          <Icon name="github" className="w-4 h-4" /> GitHub
        </a>
        <button
          type="button"
          onClick={() => onExpand(project, 'architecture')}
          className="project-action magnetic-btn"
        >
          <Icon name="layers" className="w-4 h-4" /> View Architecture
        </button>
      </div>
    </div>

    <div className="project-card-content">
      <div className="flex items-center gap-3 mb-3">
        <span className="project-number font-mono accent-text">{String(number).padStart(2, '0')}</span>
        <span className="font-mono text-[11px] uppercase tracking-widest text-[color:var(--text-dimmer)]">
          {project.period}
        </span>
      </div>

      <h3 className="font-display font-bold text-2xl sm:text-3xl mb-3">{project.name}</h3>
      <p className="text-[color:var(--text-dim)] text-sm sm:text-base leading-relaxed mb-4">
        {project.problem}
      </p>
      <p className="text-[color:var(--text-dim)] text-sm sm:text-base leading-relaxed mb-5">
        {project.solution}
      </p>

      <div className="project-stack flex flex-wrap gap-2 mb-6">
        {project.stack.map((item) => (
          <span
            key={item}
            className="font-mono text-[10px] px-2.5 py-1.5 rounded-full border border-white/10 text-[color:var(--text-dim)]"
          >
            {item}
          </span>
        ))}
      </div>

      <button
        type="button"
        onClick={() => onExpand(project, 'overview')}
        className="project-details-trigger magnetic-btn glass border border-white/15 font-mono text-xs font-semibold px-4 py-3 rounded-xl inline-flex items-center justify-center gap-2"
      >
        <Icon name="layers" className="w-4 h-4" /> View Details
      </button>
    </div>
  </article>
)

export default ProjectCard
