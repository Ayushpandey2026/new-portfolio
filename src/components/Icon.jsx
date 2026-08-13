const Icon = ({ name, className }) => {
  const p = {
    className,
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '1.6',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    viewBox: '0 0 24 24',
  }
  switch (name) {
    case 'code':
      return (
        <svg {...p}>
          <polyline points="8 6 2 12 8 18" />
          <polyline points="16 6 22 12 16 18" />
        </svg>
      )
    case 'layout':
      return (
        <svg {...p}>
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <line x1="3" y1="9" x2="21" y2="9" />
          <line x1="9" y1="9" x2="9" y2="21" />
        </svg>
      )
    case 'server':
      return (
        <svg {...p}>
          <rect x="3" y="4" width="18" height="7" rx="1.5" />
          <rect x="3" y="13" width="18" height="7" rx="1.5" />
          <circle cx="7" cy="7.5" r="0.6" fill="currentColor" />
          <circle cx="7" cy="16.5" r="0.6" fill="currentColor" />
        </svg>
      )
    case 'database':
      return (
        <svg {...p}>
          <ellipse cx="12" cy="5.5" rx="8" ry="3" />
          <path d="M4 5.5V18.5C4 20.16 7.58 21.5 12 21.5C16.42 21.5 20 20.16 20 18.5V5.5" />
          <path d="M4 12C4 13.66 7.58 15 12 15C16.42 15 20 13.66 20 12" />
        </svg>
      )
    case 'cpu':
      return (
        <svg {...p}>
          <rect x="7" y="7" width="10" height="10" rx="1.5" />
          <rect x="2.5" y="10" width="2.5" height="4" />
          <rect x="19" y="10" width="2.5" height="4" />
          <rect x="10" y="2.5" width="4" height="2.5" />
          <rect x="10" y="19" width="4" height="2.5" />
        </svg>
      )
    case 'tool':
      return (
        <svg {...p}>
          <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4l-6 6 2 2 6-6a4 4 0 0 0 5.4-5.4l-2.7 2.7-2-2 2.7-2.7z" />
        </svg>
      )
    case 'menu':
      return (
        <svg {...p}>
          <line x1="4" y1="7" x2="20" y2="7" />
          <line x1="4" y1="12" x2="20" y2="12" />
          <line x1="4" y1="17" x2="20" y2="17" />
        </svg>
      )
    case 'close':
      return (
        <svg {...p}>
          <line x1="6" y1="6" x2="18" y2="18" />
          <line x1="18" y1="6" x2="6" y2="18" />
        </svg>
      )
    case 'arrow-up':
      return (
        <svg {...p}>
          <line x1="12" y1="19" x2="12" y2="5" />
          <polyline points="5 12 12 5 19 12" />
        </svg>
      )
    case 'external':
      return (
        <svg {...p}>
          <path d="M14 3h7v7" />
          <path d="M10 14 21 3" />
          <path d="M21 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5" />
        </svg>
      )
    case 'github':
      return (
        <svg {...p} strokeWidth="1.5">
          <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.36 1.09 2.94.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.03a9.4 9.4 0 0 1 5 0c1.91-1.3 2.75-1.03 2.75-1.03.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2z" />
        </svg>
      )
    case 'linkedin':
      return (
        <svg {...p} strokeWidth="1.5">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <line x1="8" y1="11" x2="8" y2="16" />
          <line x1="8" y1="8" x2="8" y2="8" />
          <path d="M12 16v-3a2 2 0 0 1 4 0v3" />
        </svg>
      )
    case 'mail':
      return (
        <svg {...p}>
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3 7 9 6 9-6" />
        </svg>
      )
    case 'map-pin':
      return (
        <svg {...p}>
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
          <circle cx="12" cy="10" r="2.5" />
        </svg>
      )
    case 'download':
      return (
        <svg {...p}>
          <path d="M12 3v12" />
          <polyline points="7 10 12 15 17 10" />
          <path d="M5 20h14" />
        </svg>
      )
    case 'terminal':
      return (
        <svg {...p}>
          <rect x="3" y="4" width="18" height="16" rx="2" />
          <polyline points="7 9 10 12 7 15" />
          <line x1="12" y1="15" x2="16" y2="15" />
        </svg>
      )
    case 'layers':
      return (
        <svg {...p}>
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      )
    default:
      return null
  }
}

export default Icon
