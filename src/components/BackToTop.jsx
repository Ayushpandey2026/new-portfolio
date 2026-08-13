import { useEffect, useState } from 'react'
import Icon from './Icon.jsx'

const BackToTop = () => {
  const [show, setShow] = useState(false)
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
      className={`fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full accent-bg text-black flex items-center justify-center magnetic-btn transition-all duration-300 ${
        show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}
    >
      <Icon name="arrow-up" className="w-5 h-5" />
    </button>
  )
}

export default BackToTop
