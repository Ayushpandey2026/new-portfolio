const Eyebrow = ({ children }) => (
  <div className="font-mono text-xs tracking-[0.25em] uppercase accent-text flex items-center gap-2 mb-3">
    <span className="w-6 h-px" style={{ background: 'var(--accent)' }}></span>
    {children}
  </div>
)

export default Eyebrow
