export const THEMES = {
  blue:   { key:'blue',   name:'Electric Blue',  hex:'#00c2ff', glow:'#38bdf8', soft:'rgba(0,194,255,0.14)' },
  violet: { key:'violet', name:'Neon Violet',     hex:'#a855f7', glow:'#c084fc', soft:'rgba(168,85,247,0.14)' },
  cyan:   { key:'cyan',   name:'Emerald Cyan',    hex:'#14e8c4', glow:'#34d8b8', soft:'rgba(20,232,196,0.14)' },
  orange: { key:'orange', name:'Sunset Orange',   hex:'#ff7a45', glow:'#ffb26b', soft:'rgba(255,122,69,0.14)' },
};

export const NAV_LINKS = [
  { id:'about', label:'About' },
  { id:'skills', label:'Skills' },
  { id:'projects', label:'Projects' },
  { id:'timeline', label:'Journey' },
  { id:'contact', label:'Contact' },
];

export const SKILL_GROUPS = [
  { title:'Languages', icon:'code', items:['Java','JavaScript','SQL'] },
  { title:'Frontend', icon:'layout', items:['React.js','HTML5','CSS3','Tailwind CSS'] },
  { title:'Backend', icon:'server', items:['Node.js','Express.js','REST APIs','JWT Auth'] },
  { title:'Databases', icon:'database', items:['MongoDB','MySQL'] },
  { title:'CS Fundamentals', icon:'cpu', items:['Data Structures & Algorithms','OOPS','Computer Networks','Operating Systems'] },
  { title:'Tools', icon:'tool', items:['Git','GitHub','Postman','Claude','GitHub Copilot'] },
];

export const PROJECTS = [
  {
    id:'ai-job-portal',
    name:'AI Job-Portal',
    period:'Oct 2025',
    tagline:'AI-assisted hiring pipeline with automated resume screening.',
    stack:['React.js','Node.js','Express.js','MongoDB','Tailwind CSS'],
    image:'/images/ai-job-portal.svg',
    imageAlt:'AI Job Portal system preview',
    problem:'Manual resume screening created a bottleneck in hiring, and candidates struggled to parse dense, jargon-heavy job descriptions.',
    solution:'Engineered a full-stack job portal with REST APIs on Node.js and Express, automating resume screening with ATS scoring and AI-based JD simplification through the Groq and Affinda APIs.',
    impact:['Improved screening efficiency for recruiters','Faster candidate filtering via automated ATS scoring','Optimized MongoDB queries, pagination and role-based access control'],
    architecture:[
      'React SPA communicates with an Express REST API layer',
      'Affinda API parses and structures uploaded resumes',
      'Groq LLM scores candidates against JD requirements and simplifies listings',
      'Role-based access control gates recruiter vs. candidate routes',
      'MongoDB stores applicants, listings and scoring metadata with paginated queries',
    ],
    github:'https://github.com/Ayushpandey2026',
    live:'https://jobwallah.vercel.app/',
  },
  {
    id:'ecommerce-platform',
    name:'E-Commerce Platform',
    period:'May 2025',
    tagline:'MERN storefront built for speed and maintainable UI.',
    stack:['React.js','Express.js','Redux Toolkit','REST API','MongoDB'],
    image:'/images/ecommerce-platform.svg',
    imageAlt:'E-commerce storefront preview',
    problem:'A growing product catalog needed a storefront that stayed fast and easy to extend without UI code turning into spaghetti.',
    solution:'Built a MERN e-commerce platform with modular React components and REST APIs, using Redux Toolkit for predictable state management and lazy loading for efficient rendering.',
    impact:['Reduced page load time through lazy loading and efficient rendering','Improved user engagement with a smoother browsing flow','Improved long-term maintainability via reusable, responsive components'],
    architecture:[
      'React component library with Tailwind CSS for consistent, responsive UI',
      'Redux Toolkit centralizes cart, auth and product state',
      'Express REST API exposes catalog, cart and order endpoints',
      'MongoDB persists products, orders and users',
      'Route-level code splitting and lazy-loaded images cut initial bundle weight',
    ],
    github:'https://github.com/Ayushpandey2026',
    live:'https://everbuy.vercel.app/',
  },
  {
    id:'drivenest',
    name:'DriveNest',
    period:'Mar 2026',
    tagline:'Secure, Google Drive-inspired cloud file manager.',
    stack:['React.js','Node.js','Express.js','MongoDB','JWT','Cloudinary'],
    image:'/images/drivenest.svg',
    imageAlt:'DriveNest file management platform preview',
    problem:'Users needed a private, secure workspace to organize and store files in nested folders, with reliable access control.',
    solution:'Developed a full-stack cloud file management platform with nested folder architecture, recursive storage size computation, and JWT-based access control, backed by Cloudinary for media storage.',
    impact:['Secure, private per-user workspaces with authenticated access','Reliable recursive storage accounting across nested folders','Clean REST APIs for file, folder and user management'],
    architecture:[
      'React client renders a recursive folder tree UI',
      'Express REST API secured end-to-end by JWT middleware',
      'MongoDB models folders recursively; storage size rolls up parent-to-child',
      'Cloudinary handles upload, storage and delivery of file assets',
      "Auth middleware scopes every query to the authenticated user's workspace",
    ],
    github:'https://github.com/Ayushpandey2026',
    live:'https://drivenest.vercel.app/',
  },
  {
  id: 'school-map',
  name: 'SchoolMap — School Management System',
  period: 'Nov 2025',
  tagline: 'Full-stack school directory with geolocation and distance-based sorting.',
  stack: ['React.js', 'Node.js', 'Express.js', 'MySQL', 'Tailwind CSS'],
  image:'/images/school-map.svg',
  imageAlt:'SchoolMap management and geolocation preview',
  problem: 'Parents and administrators struggled to find nearby educational institutions efficiently due to the lack of location-aware filtering and real-time distance sorting.',
  solution: 'Developed a full-stack production-ready management platform using Node.js, Express, and MySQL, implementing the Haversine formula on the backend to dynamically calculate and sort schools based on user geographic proximity.',
  impact: [
    'Seamless discovery of nearby schools sorted by exact distance',
    'Reduced load times using Vite, client-side search filters, and skeleton loaders',
    'Ensured data integrity via robust server-side validation and MVC architecture',
  ],
  architecture: [
    'React 18 frontend utilizes Browser Geolocation API for auto-detecting user coordinates',
    'Express.js REST API handles CRUD operations for school registration and spatial calculations',
    'Haversine algorithm computes precise distances between user lat/long and database entries',
    'MySQL database (via mysql2) securely stores school metadata, address details, and coordinates',
    'Centralized error handling with full server-side input validation and toast notifications',
  ],
  github: 'http://github.com/Ayushpandey2026/SchoolMap_fro',
  live: 'https://school-map-fro.vercel.app/',
},
{
  id: 'finance-os',
  name: 'FinanceOS — Financial Analytics Dashboard',
  period: 'Mar 2026',
  tagline: 'Modern dark-themed finance dashboard with analytics and role-based UI.',
  stack: ['React.js', 'Vite', 'Tailwind CSS', 'React Router v6', 'Axios', 'Recharts'],
  image:'/images/finance-os.svg',
  imageAlt:'FinanceOS analytics dashboard preview',
  problem: 'Users required a fast, responsive interface to track complex financial records, analyze data trends, and view permissions based on user roles without dealing with cluttered legacy UI.',
  solution: 'Designed and built a modern, responsive frontend dashboard using React 18, Vite, and Tailwind CSS, integrating REST APIs via Axios with interactive chart visualizations and role-based route guards.',
  impact: [
    'Sub-second page transitions and lightning-fast HMR using Vite build tooling',
    'Enhanced decision-making through intuitive data visualization with Recharts',
    'Secured client-side workflows with role-based UI rendering and conditional routing',
  ],
  architecture: [
    'React 18 SPA built on Vite for optimized bundling and instant client-side rendering',
    'React Router v6 manages nested routing and secure role-based UI access control',
    'Axios HTTP client interfaces with the FinanceOS backend for dynamic data fetching',
    'Recharts powers real-time interactive analytics graphs and financial tracking modules',
    'Tailwind CSS drives a cohesive, modern dark-themed responsive user interface',
  ],
  github: 'https://github.com/Ayushpandey2026/Finance_Frontend',
  live: 'https://finansh.vercel.app/login',
},
{
  id: 'ai-counsellor',
  name: 'AI Counsellor — Study Abroad Decision Platform',
  period: 'Feb 2026',
  tagline: 'Stage-based AI platform guiding students through study-abroad decision pipelines.',
  stack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
  image:'/images/ai-counsellor.svg',
  imageAlt:'AI Counsellor study-abroad workflow preview',
  problem: 'Students face decision paralysis using generic university directory sites and unguided chatbots that lack structured, stage-by-stage application roadmaps.',
  solution: 'Engineered an end-to-end guided decision prototype that evaluates academic profiles, budgets, and readiness to drive step-by-step onboarding, university shortlisting, and locking.',
  impact: [
    'Eliminated application overwhelm via a structured, multi-stage unlocking workflow',
    'Streamlined decision-making through personalized university matching and locking mechanisms',
    'Boosted candidate readiness with real-time application guidance and integrated task tracking',
  ],
  architecture: [
    'Stage-based state machine manages progressive workflow unlocking from onboarding to locking',
    'React client interfaces with Node.js/Express REST APIs for stage evaluation and university discovery',
    'Interactive Dashboard displays dynamic stage indicators, university comparison, and execution checklists',
    'MongoDB persists student academic profiles, shortlists, locked preferences, and readiness metadata',
    'Structured AI Counsellor engine processes profile constraints to deliver personalized university recommendations',
  ],
  github: 'https://github.com/Ayushpandey2026/AI_Powered_Counsellor',
  live: 'https://ai-powered-counsellor.vercel.app/',
}
];

export const TIMELINE = [
  { date:'Nov 2022', title:'Started B.Tech, Computer Science Engineering', org:'Dr. A.P.J. Abdul Kalam Technical University (AKTU), Lucknow', type:'Education' },
  { date:'Jun 2024', title:'Flipkart GRID 6.0 — Software Development Track', org:'Completed the initial screening round', type:'Achievement' },
  { date:'Dec 2024', title:'Prod-E-G Hackathon', org:'Completed the preliminary coding and problem-solving round', type:'Achievement' },
  { date:'2025', title:'OCI 2025 AI Foundations Associate', org:'Oracle Cloud Infrastructure — Certification (1Z0-1122-25)', type:'Certification' },
  { date:'2025', title:'OCI Generative AI Professional', org:'Oracle Cloud Infrastructure — Certification', type:'Certification' },
  { date:'Jul 2025', title:'Adobe India Hackathon — Team Shaurya', org:'Completed the initial coding assessment round', type:'Achievement' },
  { date:'May 2026', title:'B.Tech, Computer Science Engineering ', org:'AKTU, Lucknow', type:'Education' },
];

export const STATS = [
  { label:'Production Projects Shipped', value:3, suffix:'' },
  { label:'Hackathons Participated', value:3, suffix:'' },
  { label:'Cloud / AI Certifications', value:2, suffix:'' },
  { label:'Core CS Domains Mastered', value:4, suffix:'' },
];

export const ROLES = ['Full-Stack Software Engineer', 'MERN Stack Developer', 'Problem Solver', 'Systems Thinker'];

export const PROFILE = {
  name: 'Ayush Pandey',
  initials: 'AP',
  email: 'ayushpandey02003@gmail.com',
  linkedin: 'https://www.linkedin.com/in/ayushp2007/',
  github: 'https://github.com/Ayushpandey2026',
  location: 'Lucknow, India',
  resumeUrl: '/Ayush_Pandey_Resume.pdf',
  photo: '/images/Formal Corporate Portrait in Charcoal Suit.png' || '/images/ayush-profile.svg',
};
