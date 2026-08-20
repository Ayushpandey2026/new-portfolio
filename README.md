# Ayush Pandey — Portfolio (React + Tailwind, Vite)

A dark cyber-chic, glassmorphism portfolio built with React, Tailwind CSS and Vite,
structured as a proper component-based project instead of a single HTML file.

## Project structure

```
portfolio-react/
├── index.html                 Vite entry HTML (fonts + #root)
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── public/
│   └── Ayush_Pandey_Resume.pdf   Served at /Ayush_Pandey_Resume.pdf (Resume button)
└── src/
    ├── main.jsx                Mounts <App /> into #root
    ├── App.jsx                 Root component — theme state, section layout
    ├── index.css                Tailwind directives + design system (glass, glow, animations)
    ├── data/
    │   └── content.js          All site content: themes, nav, skills, projects, timeline, profile
    ├── hooks/
    │   ├── useReveal.js         Scroll-reveal (IntersectionObserver)
    │   ├── useCountUp.js        Animated stat counters
    │   └── useTypewriter.js     Hero role typewriter effect
    └── components/
        ├── Icon.jsx             Inline SVG icon set
        ├── Reveal.jsx           Scroll-reveal wrapper
        ├── Eyebrow.jsx           Small section label
        ├── Navbar.jsx            Sticky nav + accent theme slider + mobile drawer
        ├── Hero.jsx               Hero section (terminal boot + typewriter + avatar frame)
        ├── About.jsx              Bio + engineering philosophy + stat counters
        ├── Skills.jsx             Skill category cards
        ├── ProjectCard.jsx        Single project card (Problem/Solution/Impact)
        ├── ProjectModal.jsx       "Architecture" system-breakdown modal
        ├── Projects.jsx           Projects section (carousel on mobile, grid on desktop)
        ├── Timeline.jsx           Education / certifications / achievements timeline
        ├── Contact.jsx            Contact form (mailto) + contact cards
        ├── Footer.jsx
        └── BackToTop.jsx
```

## Getting started

```bash
npm install
npm run dev       # http://localhost:5173
```

## Build for production

```bash
npm run build      # outputs to dist/
npm run preview    # preview the production build locally
```



