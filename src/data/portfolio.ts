/**
 * Central portfolio data — built from Siva's resume and project details.
 * Every fact on the site comes from this file. Update it here and the whole site follows.
 * Nothing here should be added unless it is true and Siva can back it up.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export const profile = {
  fullName: 'Kakanuru Siva Prasad Reddy',
  displayName: 'Siva Reddy',
  firstName: 'SIVA',
  seriesTag: 'THE SERIES',
  /** Fictional studio card shown at the very start of the opening sequence. */
  originalLabel: 'A REDDY ORIGINAL',
  role: 'AI / ML Developer',
  tagline: ['Generative AI', 'AI / ML', 'Full-Stack'],
  intro:
    'A final-year B.Tech AI & ML student (CGPA 8.0) building practical AI, web and automation projects — from local-first RAG platforms and computer vision to role-based campus systems — with Python, FastAPI, Flask, React and AWS.',
  location: 'Proddatur, Andhra Pradesh',
  email: 'kakanuruprasadreddy05@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/siva-prasad-reddy-kakanuru-0b994232b/',
    github: 'https://github.com/Sivareddy317',
  },
  resumePdf: '/assets/Siva_Prasad_Reddy_Resume.pdf',
  portrait: {
    src: '/assets/portrait-720.webp',
    srcSet: '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w',
    alt: 'Portrait of Siva Reddy',
  },
  interests: ['Generative AI', 'Cloud Computing (AWS)', 'Machine Learning'],
};

export const education = [
  {
    school: 'CBIT',
    place: 'Proddatur',
    degree: 'Bachelor of Technology — CSE (Artificial Intelligence & Machine Learning)',
    period: '2023 – 2027',
    score: 'CGPA 8.0',
  },
  {
    school: 'Nalanda Junior College',
    place: 'Nandyal',
    degree: 'Intermediate — MPC',
    period: '2021 – 2023',
    score: '85.7%',
  },
  {
    school: 'SSC',
    place: 'Andhra Pradesh',
    degree: 'Secondary School Certificate',
    period: '2021',
    score: '100%',
  },
];

/** Most recent first. */
export const experience = [
  {
    company: 'DecodeLabs',
    role: 'Generative AI Intern',
    place: 'Virtual internship',
    period: '01 Jun 2026 – 01 Jul 2026',
    points: [
      'Worked with LLM-based tools and applied prompt-engineering tasks on Generative AI use cases.',
      'Issued a Global Internship Credential on completion.',
    ],
  },
  {
    company: 'ReshApp Software Solutions Pvt. Ltd.',
    role: 'AWS DevOps Intern',
    place: '',
    period: '14 Apr 2026 – 07 Jun 2026',
    points: ['Hands-on exposure to core AWS services (EC2, S3, IAM), Linux environments and DevOps workflow fundamentals.'],
  },
];

export type Metric = { value: string; label: string };

export type Motif = 'docs' | 'chart' | 'chat' | 'vision' | 'qr' | 'health' | 'receipt';

export type Project = {
  id: string;
  title: string;
  /** Optional — only shown when the build period is known. */
  year?: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  /** Omit when the repository isn't public — the GitHub button is hidden instead of linking to a 404. */
  github?: string;
  palette: Palette;
  motif: Motif;
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };
const rose: Palette = { from: '#240614', via: '#7a1244', to: '#09060a', accent: '#ff5fa2' };
const teal: Palette = { from: '#031614', via: '#0b5a58', to: '#050a0a', accent: '#3ee0d0' };

export const projects: Project[] = [
  {
    id: 'intelform-ai',
    title: 'IntelForm AI',
    genre: 'GenAI • RAG • Local-first',
    logline: 'A local-first platform that turns source documents into reviewed, source-cited content — with a human approving every export.',
    stack: ['Python', 'Flask', 'LangChain', 'ChromaDB', 'MiniLM', 'Qwen2.5 / Ollama'],
    build: [
      'Built a local-first intelligence-transformation platform that converts source documents into reviewed, source-cited content outputs.',
      'Grounded generated claims in source passages and added a human-approval step before any export, keeping source data on the user’s machine.',
    ],
    features: ['7 output formats', 'Source-grounded, cited claims', 'Human approval before export', 'Runs locally with Qwen2.5 via Ollama'],
    metrics: [
      { value: '7', label: 'output formats' },
      { value: 'Local', label: 'source data stays on your machine' },
      { value: 'Human', label: 'approval before export' },
    ],
    github: 'https://github.com/Sivareddy317/GenAI-Intelligence-Transformation-Platform',
    palette: violet,
    motif: 'docs',
  },
  {
    id: 'recoverai',
    title: 'RecoverAI',
    genre: 'FinTech • Machine Learning • Razorpay Buildathon',
    logline: 'A behavior-based credit-risk model that groups repayment risk and recommends the next recovery action.',
    stack: ['Python', 'scikit-learn', 'Logistic Regression', 'Flask'],
    build: [
      'Trained a logistic regression risk model on the UCI “Default of Credit Card Clients” dataset (30,000 accounts), reaching 0.74 AUC-ROC.',
      'Ran a fairness audit across sex, education and marital status, and built an explainable Flask dashboard with tiered recovery actions. Built for Razorpay Buildathon, Track 3: AI Revenue Recovery.',
    ],
    features: ['Behavior-based risk grouping', 'Fairness audit', 'Explainable risk dashboard', 'Tiered recovery actions'],
    metrics: [
      { value: '30,000', label: 'accounts analysed' },
      { value: '0.74', label: 'AUC-ROC' },
      { value: '3', label: 'demographic dimensions audited' },
    ],
    github: 'https://github.com/Sivareddy317/Recover-AI',
    palette: amber,
    motif: 'chart',
  },
  {
    id: 'college-chatbot',
    title: 'College Information Chatbot',
    genre: 'RAG • Client Delivery',
    logline: 'A retrieval-augmented chatbot that answers college and admissions queries from the institution’s own documents.',
    stack: ['Python', 'FastAPI', 'ChromaDB', 'sentence-transformers', 'Supabase / pgvector', 'Flutter'],
    build: [
      'Built a RAG chatbot with a FastAPI backend that answers admissions and college queries from the institution’s own documents.',
      'Planned web and Flutter mobile clients for quicker access to common admissions information.',
    ],
    features: ['Document-based answers', 'Vector search with ChromaDB / pgvector', 'Web and mobile direction', 'Admissions support'],
    metrics: [
      { value: 'RAG', label: 'answers grounded in college documents' },
      { value: '2', label: 'client targets — web & mobile (Flutter)' },
    ],
    github: 'https://github.com/Sivareddy317/college-chatbot',
    palette: ocean,
    motif: 'chat',
  },
  {
    id: 'trafficguard',
    title: 'TrafficGuard',
    genre: 'Computer Vision • Full-Stack • Hackathon',
    logline: 'AI traffic-violation detection for helmet, seatbelt and number-plate workflows on live camera feeds.',
    stack: ['Python', 'YOLOv8', 'OpenCV', 'React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'Gemini', 'Blockchain'],
    build: [
      'Built a real-time computer-vision pipeline for live camera feeds that detects traffic violations (helmet, seatbelt and number-plate workflows).',
      'Added a backend for automated record generation and a blockchain-backed audit trail. Won 2nd Prize at Avinyak 2K25 & 2K26 (CBIT).',
    ],
    features: ['Live camera-feed detection', 'Helmet, seatbelt & number-plate workflows', 'Automated violation records', 'Blockchain-backed audit trail'],
    metrics: [
      { value: '2nd', label: 'Prize — Avinyak 2K25 & 2K26 (CBIT)' },
      { value: 'Live', label: 'real-time camera feeds' },
    ],
    github: 'https://github.com/Sivareddy317/TRAFFIC-YOLO-V8---AVINYA2.0-',
    palette: crimson,
    motif: 'vision',
  },
  {
    id: 'gate-pass',
    title: 'Campus Gate Pass System',
    year: '2024',
    genre: 'Campus Automation • Full-Stack',
    logline: 'A role-based platform for student requests, multi-level approvals and security verification at campus entry and exit.',
    stack: ['Python', 'Flask', 'SQLite', 'Firebase', 'JWT', 'Bcrypt', 'QR Code', 'HTML', 'JavaScript'],
    build: [
      'Built a role-based web platform (5 role types) with JWT/Bcrypt authentication, multi-level and bulk approvals, QR-based gate verification, entry/exit logs and admin analytics.',
      'Replaced paper-heavy gate-pass workflows at CBIT; tested across roles and edge cases.',
    ],
    features: ['5 role types', 'Multi-level & bulk approvals', 'QR-based verification', 'Entry/exit logs & admin analytics'],
    metrics: [
      { value: '5', label: 'role types' },
      { value: 'Bulk', label: 'approvals supported' },
      { value: 'QR', label: 'verified entry & exit' },
    ],
    github: 'https://github.com/Sivareddy317/Gatepass-1',
    palette: jade,
    motif: 'qr',
  },
  {
    id: 'take-care',
    title: 'Take Care',
    genre: 'HealthTech • Android • Privacy-first',
    logline: 'A privacy-first health-record concept for extracting, checking and organising information from medical documents.',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Capacitor', 'Firebase', 'Gemini'],
    build: [
      'Designed an app that extracts, verifies and organises information from medical documents using document OCR.',
      'Added emergency-summary export and family sharing through access codes.',
    ],
    features: ['Document OCR & verification', 'Emergency summary export', 'Family sharing with access codes', 'Android via Capacitor'],
    metrics: [
      { value: 'OCR', label: 'medical-document extraction' },
      { value: 'Android', label: 'built with Capacitor' },
    ],
    github: 'https://github.com/Sivareddy317/TAKE-CARE-',
    palette: rose,
    motif: 'health',
  },
  {
    id: 'dukaanpro',
    title: 'DukaanPro',
    year: '2024',
    genre: 'SME Tools • Full-Stack',
    logline: 'A small-business billing and inventory system for product and stock management in local shops.',
    stack: ['Python', 'Flask', 'SQLite', 'JavaScript', 'HTML / CSS'],
    build: [
      'Built a full-stack Flask application handling inventory, billing and stock-tracking logic on a SQLite data layer.',
      'Aimed at small local shops that need simple, practical digital tools.',
    ],
    features: ['Billing workflow', 'Inventory & stock tracking', 'Local-shop focus'],
    metrics: [
      { value: 'Full-stack', label: 'Flask + SQLite + JavaScript' },
      { value: 'Jun – Oct', label: '2024 build period' },
    ],
    github: 'https://github.com/Sivareddy317/DUKAAN-APP',
    palette: teal,
    motif: 'receipt',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'avinyak',
    title: '2nd Prize',
    org: 'Avinyak 2K25 & 2K26 · CBIT',
    detail: 'TrafficGuard — real-time YOLOv8 traffic-violation detection with a blockchain-backed audit trail.',
    laurel: 'Runner-up',
  },
  {
    id: 'project-expo',
    title: '1st Place',
    org: 'Campus Project Expo',
    detail: 'Smart Traffic Management System — geofenced congestion data that adjusts signal timing, with a live web dashboard.',
    laurel: 'Winner',
  },
  {
    id: 'young-turks',
    title: '92.78 Percentile',
    org: 'Naukri Campus Young Turks 2026',
    detail: 'Round 1 of India’s largest skill contest, recognised by Naukri Campus on 19 Oct 2026.',
    laurel: 'Top scorer',
    link: '/certs/naukri-young-turks-2026.pdf',
  },
  {
    id: 'bih',
    title: 'Shortlisted',
    org: 'Bharat Innovate Hackathon 2026',
    detail: 'Selected for the next round at the EMATIX hackathon, recognised for innovation, teamwork and problem-solving.',
    laurel: 'Next round',
    link: '/certs/bih-2026.jpg',
  },
  {
    id: 'aws-ml',
    title: 'AWS ML Engineer Associate',
    org: 'AWS Training & Certification · Dec 2025',
    detail: 'Curriculum completed 23 Dec 2025, after AWS ML & AI Fundamentals (27 Nov 2025).',
    laurel: 'Certified',
    link: '/certs/aws-ml-engineer-associate.pdf',
  },
];

export type Certification = { issuer: string; name: string; link?: string };

export const certifications: Certification[] = [
  { issuer: 'AWS', name: 'Machine Learning Engineer – Associate Curriculum (Dec 2025)', link: '/certs/aws-ml-engineer-associate.pdf' },
  { issuer: 'AWS', name: 'Fundamentals of ML & AI (Nov 2025)', link: '/certs/aws-ai-ml-fundamentals.pdf' },
  { issuer: 'AWS', name: 'One-week AWS Workshop at CBIT (Nov 2025)', link: '/certs/aws-workshop.pdf' },
  { issuer: 'ReshApp / CBIT', name: 'AWS DevOps Short-Term Internship (Apr–Jun 2026)', link: '/certs/aws-devops-internship.pdf' },
  { issuer: 'DecodeLabs', name: 'Generative AI Virtual Internship (Jun–Jul 2026)', link: '/certs/decodelabs-genai-internship.pdf' },
  { issuer: 'Reliance Foundation', name: 'Skilling Academy — AI–ML Engineer Course (Sep 2026)', link: '/certs/reliance-aiml.jpg' },
  { issuer: 'Hugging Face', name: 'The LLM Course — Fundamentals of LLMs (Aug 2026)', link: '/certs/huggingface-llm-course.jpg' },
  { issuer: 'Google (Coursera)', name: 'AI Essentials (Aug 2026)', link: '/certs/google-ai-essentials.jpg' },
  { issuer: 'Google (Coursera)', name: 'Prompting Essentials (Aug 2026)', link: '/certs/google-prompting-essentials.jpg' },
  { issuer: 'Anthropic Academy', name: 'Claude 101', link: '/certs/anthropic-claude-101.pdf' },
  { issuer: 'Anthropic Academy', name: 'AI Fluency: Framework & Foundations', link: '/certs/anthropic-ai-fluency-framework.pdf' },
  { issuer: 'Anthropic Academy', name: 'AI Fluency for Students', link: '/certs/anthropic-ai-fluency-students.pdf' },
  { issuer: 'Anthropic Academy', name: 'Teaching AI Fluency', link: '/certs/anthropic-teaching-ai-fluency.pdf' },
  { issuer: 'Accenture (FutureLearn)', name: 'Digital Skills: Artificial Intelligence (Jul 2026)', link: '/certs/accenture-digital-skills-ai.pdf' },
  { issuer: 'Forage', name: 'GenAI-Powered Data Analytics Job Simulation (Aug 2026)', link: '/certs/forage-genai-analytics.pdf' },
  { issuer: 'Forage · Deloitte', name: 'Technology Job Simulation — Coding Development (Oct 2026)', link: '/certs/deloitte-technology-simulation.pdf' },
  { issuer: 'Wingspan', name: 'Database and SQL (Jan 2025)', link: '/certs/database-and-sql.pdf' },
  { issuer: 'Wingspan', name: 'Implementing Database Using SQL Server 2012 (Apr 2025)', link: '/certs/sql-server-2012.pdf' },
  { issuer: 'Wingspan', name: 'Java Tools (Nov 2024)', link: '/certs/java-tools.pdf' },
  { issuer: 'Wingspan', name: 'Design Thinking (Jan 2025)', link: '/certs/design-thinking.pdf' },
  { issuer: 'FullbridgeX (edX)', name: 'Problem Solving & Critical Thinking Skills (Mar 2024)', link: '/certs/edx-problem-solving.pdf' },
  { issuer: 'Wadhwani Foundation', name: 'Ignite India — entrepreneurship (Sep 2025)', link: '/certs/wadhwani-ignite-india.pdf' },
  { issuer: 'Adobe × Unstop', name: 'Adobe University Hackathon — Participation (Aug 2026)', link: '/certs/adobe-university-hackathon.jpg' },
  { issuer: 'CMR College', name: 'CMR Hackfest 3.0 — 36-hour national hackathon (Jan 2026)', link: '/certs/cmr-hackfest-3.pdf' },
  { issuer: "Dr. Reddy's", name: "Destination Dr. Reddy's 3.0 — Participation (Oct 2026)", link: '/certs/dr-reddys-destination.jpg' },
  { issuer: 'Swarna Andhra @ 2047', name: 'Ideas for the Vision — Participation', link: '/certs/swarna-andhra-2047.pdf' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'languages',
    title: 'Languages',
    subtitle: 'Python is the main language',
    skills: [
      { name: 'Python', mono: 'Py', note: 'Primary' },
      { name: 'JavaScript', mono: 'Js' },
      { name: 'TypeScript', mono: 'Ts' },
      { name: 'C', mono: 'C' },
      { name: 'SQL', mono: 'Sq' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend & Mobile',
    subtitle: 'Interfaces & the web platform',
    skills: [
      { name: 'React', mono: 'Re' },
      { name: 'Tailwind CSS', mono: 'Tw' },
      { name: 'HTML / CSS', mono: 'Ht' },
      { name: 'Flutter', mono: 'Fl' },
      { name: 'Capacitor', mono: 'Cp' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    subtitle: 'APIs & server-side logic',
    skills: [
      { name: 'FastAPI', mono: 'Fa' },
      { name: 'Flask', mono: 'Fk' },
      { name: 'Node.js', mono: 'No' },
      { name: 'Express.js', mono: 'Ex' },
      { name: 'REST APIs', mono: 'Ap' },
      { name: 'JWT Auth', mono: 'Jw' },
    ],
  },
  {
    id: 'ai',
    title: 'AI & ML',
    subtitle: 'GenAI, RAG & vision',
    skills: [
      { name: 'LangChain', mono: 'Lc' },
      { name: 'RAG', mono: 'Rg' },
      { name: 'ChromaDB', mono: 'Ch' },
      { name: 'Ollama', mono: 'Ol' },
      { name: 'Gemini', mono: 'Gm' },
      { name: 'scikit-learn', mono: 'Sk' },
      { name: 'YOLOv8', mono: 'Yo' },
      { name: 'OpenCV', mono: 'Cv' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    subtitle: 'SQL & NoSQL',
    skills: [
      { name: 'SQLite', mono: 'Sl' },
      { name: 'MySQL', mono: 'My' },
      { name: 'MongoDB', mono: 'Mg' },
      { name: 'Firebase', mono: 'Fb' },
      { name: 'Supabase', mono: 'Sb' },
    ],
  },
  {
    id: 'cloud',
    title: 'Cloud & Tools',
    subtitle: 'Shipping & delivery',
    skills: [
      { name: 'AWS', mono: 'Aw' },
      { name: 'Azure', mono: 'Az' },
      { name: 'Linux', mono: 'Lx' },
      { name: 'Git / GitHub', mono: 'Gt' },
      { name: 'Agile SDLC', mono: 'Ag' },
    ],
  },
  {
    id: 'interests',
    title: 'Interests',
    subtitle: 'Coming soon to the series',
    skills: [
      { name: 'Generative AI', mono: 'Ga' },
      { name: 'Cloud Computing (AWS)', mono: 'Cl' },
      { name: 'Machine Learning', mono: 'Ml' },
    ],
  },
];

/**
 * Factual cross-references shown when a skill card is hovered/tapped:
 * where the skill appears in the projects, internships or certifications.
 */
export const skillEvidence: Record<string, string[]> = {
  Python: ['IntelForm AI', 'RecoverAI', 'College Information Chatbot', 'TrafficGuard'],
  JavaScript: ['Campus Gate Pass System', 'DukaanPro'],
  TypeScript: ['TrafficGuard', 'Take Care'],
  C: ['B.Tech coursework'],
  SQL: ['DukaanPro', 'Campus Gate Pass System'],
  React: ['TrafficGuard', 'Take Care'],
  'Tailwind CSS': ['Take Care'],
  'HTML / CSS': ['Campus Gate Pass System', 'DukaanPro'],
  Flutter: ['College Information Chatbot'],
  Capacitor: ['Take Care'],
  FastAPI: ['College Information Chatbot'],
  Flask: ['IntelForm AI', 'RecoverAI', 'Campus Gate Pass System', 'DukaanPro'],
  'Node.js': ['TrafficGuard'],
  'Express.js': ['TrafficGuard'],
  'JWT Auth': ['Campus Gate Pass System'],
  LangChain: ['IntelForm AI'],
  RAG: ['IntelForm AI', 'College Information Chatbot'],
  ChromaDB: ['IntelForm AI', 'College Information Chatbot'],
  Ollama: ['IntelForm AI'],
  Gemini: ['TrafficGuard', 'Take Care'],
  'scikit-learn': ['RecoverAI'],
  YOLOv8: ['TrafficGuard'],
  OpenCV: ['TrafficGuard'],
  SQLite: ['Campus Gate Pass System', 'DukaanPro'],
  MongoDB: ['TrafficGuard'],
  Firebase: ['Take Care', 'Campus Gate Pass System'],
  Supabase: ['College Information Chatbot'],
  AWS: ['AWS DevOps Intern — ReshApp', 'AWS ML Engineer Associate'],
  Linux: ['AWS DevOps Intern — ReshApp'],
  'Git / GitHub': ['All projects'],
  'Generative AI': ['Generative AI Intern — DecodeLabs', 'IntelForm AI'],
  'Cloud Computing (AWS)': ['AWS ML Engineer Associate', 'AWS Workshop'],
  'Machine Learning': ['B.Tech AI & ML', 'RecoverAI'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Beginning',
    period: '2021 – 2023',
    synopsis: 'School and intermediate years — a 100% SSC result and MPC at Nalanda Junior College, Nandyal.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'The Foundation',
        description: 'Secondary School Certificate, Andhra Pradesh — finishing with 100%.',
        tags: ['SSC', '100%'],
        runtime: '2021',
        palette: amber,
      },
      {
        code: 'S01 E02',
        title: 'The Intermediate',
        description: 'MPC at Nalanda Junior College, Nandyal — finishing with 85.7%.',
        tags: ['MPC', '85.7%'],
        runtime: '2021 – 2023',
        palette: ocean,
      },
    ],
  },
  {
    number: 2,
    title: 'Enter: AI & ML',
    period: '2023 – Present',
    synopsis: 'B.Tech in CSE (AI & Machine Learning) at CBIT, Proddatur — and the first real builds.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'The Engineer',
        description: 'Bachelor of Technology in CSE (AI & ML) at CBIT, Proddatur — CGPA 8.0, graduating in 2027.',
        tags: ['B.Tech', 'AI & ML', 'CGPA 8.0'],
        runtime: '2023 – 2027',
        palette: violet,
      },
      {
        code: 'S02 E02',
        title: 'The First Builds',
        description: 'Campus Gate Pass System (Jan – Apr 2024) and DukaanPro (Jun – Oct 2024) — Flask backends with SQLite and Firebase.',
        tags: ['Flask', 'SQLite', 'Firebase'],
        runtime: '2024',
        palette: jade,
      },
      {
        code: 'S02 E03',
        title: 'The Winner',
        description: 'Smart Traffic Management System (Feb – May 2025) — 1st Place at the Campus Project Expo.',
        tags: ['Python', 'Maps API', 'Geofencing'],
        runtime: 'Feb – May 2025',
        palette: crimson,
      },
    ],
  },
  {
    number: 3,
    title: 'Cloud & Certified',
    period: '2025 – 2026',
    synopsis: 'Building a cloud and AI foundation through AWS and a run of industry courses.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'The Cloud Learner',
        description: 'AWS ML & AI Fundamentals (Nov 2025), a one-week AWS workshop at CBIT (Nov 2025) and the AWS Machine Learning Engineer – Associate curriculum (Dec 2025).',
        tags: ['AWS', 'Cloud', 'ML'],
        runtime: 'Nov – Dec 2025',
        palette: amber,
      },
      {
        code: 'S03 E02',
        title: 'The Upskiller',
        description: 'Reliance Foundation AI–ML Engineer course, Hugging Face LLM course, Google AI & Prompting Essentials, four Anthropic Academy courses, Accenture Digital Skills: AI, and Forage job simulations (GenAI analytics, Deloitte).',
        tags: ['GenAI', 'Prompting', 'AI'],
        runtime: 'Courses',
        palette: ocean,
      },
    ],
  },
  {
    number: 4,
    title: 'Internships & Hackathons',
    period: '2026',
    synopsis: 'Two internships and a podium finish — taking the projects into real settings.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'The DevOps Intern',
        description: 'AWS DevOps Intern at ReshApp Software Solutions — core AWS services, Linux and DevOps workflow fundamentals.',
        tags: ['AWS', 'Linux', 'DevOps'],
        runtime: '14 Apr – 07 Jun 2026',
        palette: ocean,
      },
      {
        code: 'S04 E02',
        title: 'The GenAI Intern',
        description: 'Generative AI Intern at DecodeLabs — LLM-based tools and applied prompt-engineering tasks, with a Global Internship Credential.',
        tags: ['GenAI', 'LLMs', 'Prompting'],
        runtime: '01 Jun – 01 Jul 2026',
        palette: violet,
      },
      {
        code: 'S04 E03',
        title: 'The Podium',
        description: '2nd Prize at Avinyak 2K25 & 2K26 with TrafficGuard, and RecoverAI built for the Razorpay Buildathon (Track 3).',
        tags: ['TrafficGuard', 'RecoverAI', 'Hackathons'],
        runtime: 'Avinyak 2K25 & 2K26',
        palette: crimson,
      },
    ],
  },
  {
    number: 5,
    title: "What's Next",
    period: 'Now streaming',
    synopsis: 'Final year at CBIT, with the focus on Generative AI, cloud and Python.',
    episodes: [
      {
        code: 'S05 E01',
        title: 'The Next Chapter',
        description: 'Graduating in 2027 — exploring Generative AI, Cloud Computing (AWS) and Machine Learning.',
        tags: ['GenAI', 'AWS', 'Machine Learning'],
        runtime: 'In production',
        palette: violet,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'Primary language', title: 'Python', detail: 'ML, backends and automation', palette: amber },
  { label: 'The GenAI Original', title: 'IntelForm AI', detail: '7 output formats • runs locally', palette: violet },
  { label: 'Campus favourite', title: '1st Place', detail: 'Campus Project Expo', palette: crimson },
  { label: 'Hackathon podium', title: '2nd Prize', detail: 'Avinyak 2K25 & 2K26', palette: ocean },
  { label: 'Cloud credential', title: 'AWS ML Associate', detail: 'ML Engineer – Associate • Dec 2025', palette: amber },
  { label: 'The fintech build', title: 'RecoverAI', detail: '30,000 accounts • 0.74 AUC-ROC', palette: jade },
  { label: 'The RAG build', title: 'College Chatbot', detail: 'FastAPI + ChromaDB', palette: ocean },
  { label: 'Live at CBIT', title: 'Gate Pass', detail: '5 roles • approvals • QR checks', palette: jade },
  { label: 'Hands-on', title: '2 Internships', detail: 'Generative AI • AWS DevOps', palette: rose },
  { label: 'Current focus', title: 'GenAI + Cloud', detail: 'Final year • graduating 2027', palette: violet },
];

/** Slides for the "▶ Play Intro" cinematic sequence. */
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Education',
    title: 'B.Tech · AI & ML',
    lines: ['CBIT, Proddatur', '2023 – 2027'],
    chips: ['CGPA 8.0'],
  },
  {
    kicker: 'Skills',
    title: 'Python first.',
    lines: ['FastAPI, Flask, Node.js · React, Tailwind CSS', 'LangChain, RAG, scikit-learn, YOLOv8 · AWS'],
    chips: ['Python', 'FastAPI', 'React', 'LangChain', 'AWS', 'SQL'],
  },
  {
    kicker: 'Experience',
    title: 'Two Internships',
    lines: ['Generative AI Intern · DecodeLabs · Jun – Jul 2026', 'AWS DevOps Intern · ReshApp · Apr – Jun 2026'],
  },
  {
    kicker: 'Projects',
    title: `${projects.length} Originals`,
    lines: ['IntelForm AI — local-first RAG platform', 'RecoverAI — 30,000 accounts, 0.74 AUC-ROC', 'TrafficGuard — real-time YOLOv8 detection'],
  },
  {
    kicker: 'Achievements',
    title: 'Top Moments',
    lines: ['2nd Prize — Avinyak 2K25 & 2K26', '1st Place — Campus Project Expo', 'AWS Machine Learning Engineer – Associate'],
  },
  {
    kicker: 'Certified',
    title: `${certifications.length} Certifications`,
    lines: ['AWS · Reliance Foundation · Hugging Face · Google', 'Anthropic Academy · Accenture · Forage · Deloitte'],
  },
  {
    kicker: 'Current mission',
    title: 'Now exploring',
    lines: ['Generative AI · Cloud Computing (AWS) · Python'],
  },
];

export type ProfileId = 'siva' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'siva',
    name: 'Siva',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, achievements & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, stack & GitHub first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'The story arc & highlights first',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education & experience', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 from the resume', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'My Achievements', meta: `${achievements.length} Moments • ${certifications.length} Certifications`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};
