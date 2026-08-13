import { useReveal } from '../hooks/useReveal'

const Reveal = ({ children, className = '', variant = 'reveal', delay = 0 }) => {
  const [ref, inView] = useReveal()
  return (
    <div
      ref={ref}
      className={`${variant} ${inView ? 'in' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

export default Reveal
