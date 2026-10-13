import { useEffect, useMemo, useRef, useState } from 'react'
import Icon from './Icon.jsx'
import { ARCHITECTURE_BY_PROJECT } from '../data/architecture.js'

const EMPTY_ARCHITECTURE = []

const ProjectModal = ({ project, onClose, initialMode = 'overview' }) => {
  const [mode, setMode] = useState(initialMode)
  const nodes = ARCHITECTURE_BY_PROJECT[project?.id] ?? EMPTY_ARCHITECTURE
  const [selectedNode, setSelectedNode] = useState(nodes[0]?.id ?? '')
  const [flow, setFlow] = useState([])
  const [status, setStatus] = useState('')
  const [simulating, setSimulating] = useState(false)
  const timerRef = useRef(null)

  const projectData = project
  const totalLatencyMs = useMemo(
    () => nodes.reduce((total, node) => total + node.latencyMs, 0),
    [nodes]
  )

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
  }, [initialMode])

  useEffect(() => {
    window.clearTimeout(timerRef.current)
    setSelectedNode(nodes[0]?.id ?? '')
    setFlow([])
    setSimulating(false)
    setStatus(`Ready · ~${totalLatencyMs}ms estimated`)

    return () => window.clearTimeout(timerRef.current)
  }, [projectData?.id, nodes, totalLatencyMs])

  const selectedDetails = nodes.find((node) => node.id === selectedNode) || nodes[0]

  const runSimulation = () => {
    if (simulating || nodes.length === 0) return

    setSimulating(true)
    setFlow([])

    const traceNode = (index) => {
      const node = nodes[index]
      setSelectedNode(node.id)
      setFlow((visited) => [...visited, node.id])
      setStatus(`Processing ${node.label} · ${node.latencyMs}ms`)

      timerRef.current = window.setTimeout(() => {
        if (index + 1 < nodes.length) {
          traceNode(index + 1)
          return
        }

        setStatus(`200 OK · ${totalLatencyMs}ms estimated total`)
        setSimulating(false)
        timerRef.current = null
      }, node.latencyMs)
    }

    traceNode(0)
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
        ) : nodes.length > 0 && selectedDetails ? (
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
                  <span className="font-mono text-[10px] uppercase tracking-widest accent-text">
                    {selectedDetails.tech} · {selectedDetails.latencyMs}ms step / {totalLatencyMs}ms total
                  </span>
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
        ) : (
          <p className="text-[color:var(--text-dim)] text-sm">
            No project-specific architecture has been configured for this project.
          </p>
        )}
      </div>
    </div>
  )
}

export default ProjectModal
