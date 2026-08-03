// ---------------------------------------------------------------------------
//  SINGLE SOURCE OF TRUTH for the whole site.
//  Edit values here — every component reads from this file.
//  Items marked  // TODO  are placeholders for Zeel to fill in.
// ---------------------------------------------------------------------------

export const site = {
  name: 'Zeel Kakadia',
  role: 'Backend Engineer → AI/ML',
  tagline:
    'I build reliable, high-performance backend & data systems — now applying that same rigor to AI/ML.',
  location: 'Rajkot, Gujarat, India · Open to remote',
  available: true,
  email: 'zeelkakadia.work@gmail.com',
  phone: '+91 84014 00716',

  // ---- Links (from resume). TODO: replace with your exact profile URLs. ----
  links: {
    github: 'https://github.com/Kakadia-Zeel',
    linkedin: 'https://www.linkedin.com/in/zeelkakadia', // TODO confirm handle
    leetcode: 'https://leetcode.com/zeelkakadia', // TODO confirm handle
    resume: '/resume.pdf',
  },

  // Web3Forms access key — free key at https://web3forms.com (takes 30s).
  web3formsKey: 'YOUR_WEB3FORMS_ACCESS_KEY', // TODO
};

// ---- Skill groups ---------------------------------------------------------
export const skillGroups = [
  { title: 'Languages & Frameworks', items: ['Java', 'Spring Boot', 'REST APIs', 'JUnit'] },
  { title: 'Data & Storage', items: ['MySQL', 'Neo4j (Cypher)', 'Redis', 'OpenSearch', 'MinIO', 'Flyway'] },
  { title: 'Infra & DevOps', items: ['Docker', 'Kubernetes', 'Kafka', 'GitHub Actions', 'CI/CD'] },
  { title: 'AI / ML & Data', items: ['GenAI pipelines', 'Snorkel', 'Abundant', 'Data labeling & eval', 'RAG data prep'] },
];

// Flat list for the scrolling tech marquee under the hero.
export const techMarquee = [
  'Java', 'Spring Boot', 'Neo4j', 'MySQL', 'Kafka', 'Redis', 'Docker', 'Kubernetes',
  'GitHub Actions', 'OpenSearch', 'MinIO', 'Flyway', 'GenAI', 'Snorkel', 'JUnit',
];

// ---------------------------------------------------------------------------
//  EXPERIENCE — organized by company, then by work area, point-wise.
//  This is the core "genuine" showcase.
// ---------------------------------------------------------------------------
export const experience = [
  {
    company: 'Aera Technology',
    role: 'Software Engineer 1',
    period: 'Jan 2022 — 2025',
    type: 'Full-time',
    // What the company does + my scope — sets honest context.
    summary:
      'Aera builds an enterprise “Decision Intelligence” platform. I worked across its data & backend layer — customer migrations, graph services, platform observability, and the data pipelines that feed its GenAI features.',
    logo: null as string | null, // TODO: /images/aera.png
    areas: [
      {
        title: 'Multi-Tenant Data Migration',
        icon: 'migrate',
        // Plain-language explanation of the problem + what I did.
        explain:
          'Onboarding every new customer meant moving their entire MySQL + Neo4j footprint onto a new architecture — slow, manual and heavily reliant on DBAs. I automated the whole thing end to end.',
        points: [
          'Automated customer-project migrations across MySQL & Neo4j with minimal DBA involvement.',
          'Backed up MySQL (MySQL Shell) and exported Neo4j graphs (Cypher-shell), including source-environment cleanup.',
          'Built a GitHub Actions CI/CD pipeline to back up, upload to version-controlled repos, and restore.',
          'Versioned every schema change with Flyway for a traceable, consistent migration history across environments.',
        ],
        metrics: [
          { num: 60, suffix: '%', label: 'faster customer migrations' },
          { num: 40, suffix: '%', label: 'faster seed deployments' },
        ],
      },
      {
        title: 'Graph Service Development',
        icon: 'graph',
        explain:
          'The platform’s graph data had to respect complex, per-role access rules. I built the service that generates the right queries dynamically and provisions each project’s database automatically.',
        points: [
          'Built a graph backend on Neo4j + MySQL with dynamic Cypher generation driven by role-based access filters.',
          'Developed an automated provisioning system that creates schemas, users and role configs per project deployment.',
        ],
        metrics: [],
      },
      {
        title: 'System Monitoring & Infrastructure',
        icon: 'shield',
        explain:
          'Made the platform observable and resilient — so we always knew who changed what, and unhealthy services were caught before customers ever noticed.',
        points: [
          'Designed a real-time Audit Framework tracking user and role modifications.',
          'Built liveness & readiness probes for MySQL, Kafka, Neo4j and Redis to monitor application health.',
          'Replaced the deprecated PhantomJS with Puppeteer (headless Chrome) to automate chart-snapshot generation.',
        ],
        metrics: [],
      },
      {
        title: 'Data Processing & GenAI Integration',
        icon: 'ai',
        explain:
          'Connected the data platform to its AI features and to geospatial search — turning raw metadata and map data into something models and queries could actually use.',
        points: [
          'Generated batch-wise JSON of DataView metadata (measures & dimensions) for entire projects, auto-uploaded to MinIO to feed a GenAI metadata push.',
          'Extracted OpenStreetMap City/State/Country boundaries (multipolygon geometry) and indexed them into OpenSearch for fast, accurate custom-border geospatial queries.',
        ],
        metrics: [],
      },
      {
        title: 'Quality & Performance',
        icon: 'spark',
        explain:
          'Raised the reliability bar — hardening the test suite and resolving the issues that actually mattered in production.',
        points: [
          'Wrote 80+ JUnit tests and API automation suites, systematically resolving critical failures.',
          'Resolved production bugs and shipped performance optimizations, refactoring for code quality and maintainability.',
        ],
        metrics: [
          { text: '53→85%', label: 'API test pass rate' },
          { num: 80, suffix: '+', label: 'JUnit tests authored' },
        ],
      },
    ],
  },
];

// ---- Side projects (personal) --------------------------------------------
export const sideProjects = [
  {
    title: 'Real-Time Chat Application',
    blurb:
      'Person-to-person real-time chat with online/offline presence, last-seen, and persistent timestamped history.',
    tags: ['Next.js', 'Firestore', 'Firebase Auth'],
    icon: 'chat',
    link: null as string | null, // TODO: repo/demo URL
  },
  {
    title: 'Meme Collection Website',
    blurb:
      'Full-stack CRUD app (GET/POST/PUT/DELETE) for managing memes with image-URL handling. Built during the Crio Externship.',
    tags: ['React', 'Express', 'SQLite3'],
    icon: 'graph',
    link: null,
  },
];

export const education = {
  school: 'Gujarat Technological University',
  degree: 'B.Tech, Computer Engineering',
  period: '2018 — 2022 · Rajkot, Gujarat',
  detail: 'CGPA 8.90 / 10',
};

// ---- Per-section headers: title + plain-language explanation ---------------
export const sections = {
  about: {
    kicker: 'About',
    title: 'Backend depth, now pointed at AI',
    desc: "A quick, honest intro — who I am, what I've shipped, and where I'm heading.",
  },
  experience: {
    kicker: 'Experience',
    title: 'What I actually built',
    desc: 'My work at Aera, broken down area by area — the problem, what I built, and the measurable result. No fluff.',
  },
  skills: {
    kicker: 'Toolbox',
    title: 'Skills & stack',
    desc: 'The technologies I reach for, grouped by domain — strong across backend, data and infra, and actively building in AI/ML.',
  },
  projects: {
    kicker: 'Beyond work',
    title: 'Side projects',
    desc: 'Things I built on my own time to learn front-end, realtime data and full-stack delivery.',
  },
  contact: {
    kicker: 'Contact',
    title: "Let's build something together",
    desc: "I'm open to remote roles and freelance projects, and I usually reply within a day.",
  },
};

// ---- Navigation -----------------------------------------------------------
export const nav = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];
