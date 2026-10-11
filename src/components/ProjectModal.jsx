import { useEffect, useMemo, useState } from 'react'
import Icon from './Icon.jsx'

const getNodes = (project) => {
  const defaultNodes = [
    {
      id: 'client',
      label: 'Client UI',
      tech: 'React + Tailwind',
      role: 'Presentation layer for product browsing, auth, and dashboard UX.',
      tradeoff: 'Prefers a lightweight client-side SPA for fast interaction and minimal page reloads without sacrificing responsive UX.',
      optimization: 'Component reuse and route-driven rendering keep the UI lean; state is chunked where useful for a smoother browsing flow.',
    },
    {
      id: 'api',
      label: 'API / Middleware',
      tech: 'Node.js + Express',
      role: 'Routes requests, validates payloads, applies auth, and orchestrates business logic.',
      tradeoff: 'A thin API layer keeps data transformations explicit and easy to test without overloading the frontend with business rules.',
      optimization: 'JWT checks, payload validation, and route scoping reduce unauthorized access and keep requests predictable under load.',
    },
    {
      id: 'database',
      label: 'Database / Cache',
      tech: project?.stack?.includes('MongoDB') ? 'MongoDB + indexed queries' : 'MySQL + relational queries',
      role: 'Stores persistent application state, user records, and queryable operational datasets.',
      tradeoff: 'A document store was chosen where flexible schemas matter; relational models are favored where joins and consistency are critical.',
      optimization: 'Indexes, filtered queries, and disciplined schema shapes reduce response latency and keep read-heavy workloads efficient.',
    },
    {
      id: 'services',
      label: 'External Services',
      tech: project?.stack?.includes('Cloudinary') ? 'Cloudinary + JWT auth' : project?.stack?.includes('MongoDB') ? 'Groq / Affinda APIs' : 'Geolocation + analytics services',
      role: 'Extends the platform with AI, media storage, or geospatial processing beyond the app core.',
      tradeoff: 'External services decouple domain-specific processing and reduce the need to build every capability from scratch.',
      optimization: 'Caching and scoped API calls improve resilience, while bounded integrations keep request latency and failure modes controllable.',
    },
  ]

  return defaultNodes
}

const ProjectModal = ({ project, onClose, initialMode = 'overview' }) => {
  const [mode, setMode] = useState(initialMode)
  const [selectedNode, setSelectedNode] = useState('client')
  const [flow, setFlow] = useState([])
  const [status, setStatus] = useState('200 OK - 75ms total')
  const [simulating, setSimulating] = useState(false)

  const projectData = project
  const nodes = useMemo(() => getNodes(projectData), [projectData])

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

  useEffect(() => {
    setMode(initialMode)
    if (!nodes.some((node) => node.id === selectedNode)) {
      setSelectedNode(nodes[0]?.id ?? 'client')
    }
  }, [initialMode, nodes, selectedNode])

  const selectedDetails = nodes.find((node) => node.id === selectedNode) || nodes[0]

  const runSimulation = () => {
    if (simulating) return

    setSimulating(true)
    const path = ['client', 'api', 'database', 'services', 'api', 'client']
    let index = 0

    const tick = () => {
      setFlow(path.slice(0, index + 1))
      index += 1

      if (index < path.length) {
        window.setTimeout(tick, 210)
        return
      }

      setStatus('200 OK - 75ms total')
      setSimulating(false)
      window.setTimeout(() => setFlow([]), 700)
    }

    setStatus('POST /api/request')
    setFlow(['client'])
    window.setTimeout(tick, 180)
  }

  if (!projectData) return null

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 sm:p-8">
      <div className="absolute inset-0 modal-backdrop" onClick={onClose}></div>
      <div
        className="relative glass border border-white/10 rounded-2xl max-w-4xl w-full max-h-[88vh] overflow-y-auto p-6 sm:p-8"
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
        <h3 className="font-display font-bold text-2xl sm:text-3xl mb-1">{projectData.name}</h3>
        <p className="text-[color:var(--text-dim)] text-sm mb-5">{projectData.tagline}</p>

        <div className="project-modal-tabs mb-6">
          <button
            type="button"
            className={`project-modal-tab ${mode === 'overview' ? 'active' : ''}`}
            onClick={() => setMode('overview')}
          >
            Overview
          </button>
          <button
            type="button"
            className={`project-modal-tab ${mode === 'architecture' ? 'active' : ''}`}
            onClick={() => setMode('architecture')}
          >
            System Architecture
          </button>
        </div>

        {mode === 'overview' ? (
          <>
            {projectData.image && (
              <div className="mb-6 overflow-hidden rounded-xl border border-white/10 bg-black/20">
                <img src={projectData.image} alt={projectData.imageAlt || projectData.name} className="w-full h-44 object-cover object-center" />
              </div>
            )}

            <div
              className="rounded-xl p-4 font-mono text-xs sm:text-[13px] leading-relaxed"
              style={{ background: 'var(--panel-solid)', border: '1px solid var(--line)' }}
            >
              {projectData.architecture.map((line, i) => (
                <div key={i} className="flex gap-3 py-1">
                  <span className="text-[color:var(--text-dimmer)] select-none">{String(i + 1).padStart(2, '0')}</span>
                  <span className="text-[color:var(--text-dim)]">
                    <span className="accent-text">&rarr;</span> {line}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2 mt-6">
              {projectData.stack.map((s) => (
                <span key={s} className="font-mono text-[11px] px-2.5 py-1 rounded-full border border-white/10 text-[color:var(--text-dim)]">
                  {s}
                </span>
              ))}
            </div>

            <div className="flex gap-3 mt-7">
              <a
                href={projectData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="magnetic-btn flex-1 text-center glass border border-white/15 font-mono text-xs font-semibold px-4 py-3 rounded-xl flex items-center justify-center gap-2"
              >
                <Icon name="github" className="w-4 h-4" /> Source
              </a>
              <a
                href={projectData.live}
                target="_blank"
                rel="noopener noreferrer"
                className="magnetic-btn flex-1 text-center accent-bg text-black font-mono text-xs font-semibold px-4 py-3 rounded-xl flex items-center justify-center gap-2"
              >
                Live Demo <Icon name="external" className="w-4 h-4" />
              </a>
            </div>
          </>
        ) : (
          <div className="architecture-visualizer-wrap">
            <div className="architecture-visualizer">
              <div className="architecture-flow">
                {nodes.map((node, index) => (
                  <div key={node.id} className="architecture-node-wrap">
                    <button
                      type="button"
                      className={`architecture-node ${selectedNode === node.id ? 'active' : ''} ${flow.includes(node.id) ? 'pulse' : ''}`}
                      onClick={() => setSelectedNode(node.id)}
                    >
                      <span className="architecture-node__label">{node.label}</span>
                    </button>
                    {index < nodes.length - 1 && <span className="architecture-connector" aria-hidden="true" />}
                  </div>
                ))}
              </div>

              <div className="architecture-panel">
                <div className="architecture-panel__header">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[color:var(--text-dimmer)]">Selected Node</span>
                  <button
                    type="button"
                    onClick={runSimulation}
                    className="architecture-simulate magnetic-btn glass border border-white/15 font-mono text-[11px] font-semibold px-3 py-2 rounded-lg"
                    disabled={simulating}
                  >
                    {simulating ? 'Simulating...' : 'Simulate Request'}
                  </button>
                </div>

                <div className="architecture-panel__meta">
                  <span className="font-mono text-[10px] uppercase tracking-widest accent-text">{selectedDetails.tech}</span>
                  <span className="arch-status">{status}</span>
                </div>

                <h4 className="font-display font-semibold text-xl mb-2">{selectedDetails.label}</h4>

                <div className="architecture-detail-group">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-[color:var(--text-dimmer)] mb-1">Component Role</div>
                  <p className="text-[color:var(--text-dim)] text-sm">{selectedDetails.role}</p>
                </div>

                <div className="architecture-detail-group">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-[color:var(--text-dimmer)] mb-1">Design Decisions & Trade-offs</div>
                  <p className="text-[color:var(--text-dim)] text-sm">{selectedDetails.tradeoff}</p>
                </div>

                <div className="architecture-detail-group">
                  <div className="font-mono text-[10px] uppercase tracking-widest text-[color:var(--text-dimmer)] mb-1">Optimization / Security</div>
                  <p className="text-[color:var(--text-dim)] text-sm">{selectedDetails.optimization}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProjectModal
