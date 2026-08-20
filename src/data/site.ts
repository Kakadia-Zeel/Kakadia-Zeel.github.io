// ---------------------------------------------------------------------------
//  SINGLE SOURCE OF TRUTH for the whole site.
//  Edit values here — every component reads from this file.
//  Items marked  // TODO  are placeholders for Zeel to fill in.
// ---------------------------------------------------------------------------

export const site = {
  name: 'Zeel Kakadia',
  role: 'Software & AI Evaluation Engineer',
  tagline:
    'Software engineer with 4+ years shipping production backend systems in Java & Spring Boot — the kind of work where correctness, performance and clean migrations matter. I’ve since moved into frontier-AI evaluation: authoring the statistical evals and data that benchmark leading models, and leading a 30-person eval team. Same engineering rigor, applied to both — and I’m open to software and AI-evaluation opportunities.',
  location: 'India · Open to remote',
  available: true,
  email: 'zeelkakadia.work@gmail.com',
  phone: '+91 84014 00716',

  // ---- Links (from resume). TODO: replace with your exact profile URLs. ----
  links: {
    github: 'https://github.com/Kakadia-Zeel',
    linkedin: 'https://www.linkedin.com/in/zeel-kakadia/',
    leetcode: 'https://leetcode.com/u/kakadia_zeel/',
    resume: '/resume.pdf',
  },

  // Web3Forms access key — free key at https://web3forms.com (takes 30s).
  web3formsKey: 'YOUR_WEB3FORMS_ACCESS_KEY', // TODO
};

// ---- Skill groups ---------------------------------------------------------
export const skillGroups = [
  { title: 'Languages', items: ['Java', 'Python', 'R', 'Julia', 'SQL'] },
  { title: 'Backend & Frameworks', items: ['Spring Boot', 'REST APIs', 'Microservices', 'JUnit'] },
  { title: 'Data & Storage', items: ['MySQL', 'Neo4j (Cypher)', 'Redis', 'OpenSearch', 'MinIO', 'Flyway'] },
  { title: 'Infra & DevOps', items: ['Docker', 'Kubernetes', 'Kafka', 'GitHub Actions', 'CI/CD'] },
  { title: 'AI Evaluation', items: ['LLM evaluation', 'Benchmarking', 'Rubric & verifier design', 'Ground-truth oracles', 'Data labeling'] },
  { title: 'Statistics & Methods', items: ['Survival analysis', 'Causal inference', 'Mixed-effects models', 'Bayesian methods', 'Conformal prediction'] },
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
    company: 'Snorkel AI',
    mark: 'Sn',
    via: 'Syncrope', // engaged through Syncrope
    url: 'https://snorkel.ai',
    role: 'AI Evaluation Engineer · Team Lead',
    period: 'Jun 2026 — Present',
    type: 'Contract',
    current: true,
    highlight: 'Led a 30-person authoring team',
    summary:
      'Contracted through Syncrope to build and review evaluation tasks that benchmark frontier AI across data-science, ML and software-engineering domains.',
    tags: ['LLM Evaluation', 'Benchmarking', 'Team Leadership', 'Rubric Design', 'Quality Review', 'Multi-domain'],
    points: [
      'Lead a 30-person team authoring high-quality evaluation tasks — owning planning, review cadence and the quality bar.',
      'Author evaluation tasks spanning data-science, machine-learning and software-engineering domains.',
      'Reviewer on a large coding-agent evaluation benchmark, upholding correctness and rubric quality across the team’s submissions.',
      'Contributed physics-domain evaluation tasks on a specialized science track.',
    ],
    areas: null,
  },
  {
    company: 'Abundant AI',
    mark: 'Ab',
    via: null,
    url: 'https://abundant.ai',
    role: 'AI Data & Evaluation Engineer',
    period: 'Feb 2026 — Jun 2026',
    type: 'Contract',
    current: false,
    highlight: 'Owned statistical evals end-to-end · dataset → verifier',
    summary:
      'Authored self-contained evaluations that benchmarked how well AI agents perform real statistical work — each owned end to end: realistic dataset → analysis contract → oracle (ground-truth) solution → verifier and hidden test variants that score the agent.',
    tags: ['LLM Evaluation', 'Benchmarking', 'Statistical Analysis', 'Verifier Design', 'Ground-truth Oracles'],
    areas: [
      {
        title: 'Data-Science Evaluation Tasks',
        icon: 'ai',
        explain:
          'Authored self-contained statistical evals end to end — framing the dataset and analysis contract, implementing the oracle solution that defines ground truth, and building the scoring verifier plus hidden test variants.',
        points: [
          'Authored statistical evals end-to-end, each owned from dataset to verifier — mostly R, with Python/Colab and Julia.',
          'Survival analysis (Cox PH, Kaplan–Meier), mixed-effects / multilevel models, multiple-testing / FDR, Bayesian & empirical-Bayes shrinkage.',
          'Econometrics & causal inference (Heckman selection, propensity matching, ordered logit); unsupervised methods (LDA, MDS, EM mixtures, factor analysis); spatial statistics; ML calibration / drift / conformal prediction.',
        ],
        metrics: [],
      },
      {
        title: 'Advanced Statistical Tasks — Real-World Data',
        icon: 'graph',
        explain:
          'Built the hardest tier of evaluation tasks on real, canonical datasets — genuine applied statistical analysis, not toy data.',
        points: [
          'Built the hardest-tier tasks in R (with some Julia) — survival, panel, econometrics, robust and mixed-effects methods.',
          'Examples: mortgage-lending data → logistic discrimination; labor-supply data → Heckman selection; investment panels → dynamic panel GMM (Nickell bias).',
          'Clinical survival data → Cox PH diagnostics + competing risks; overdispersed counts → GAMLSS dispersion modeling; repeated-measures data → mixed-effects / AR(1) / NLME family.',
        ],
        metrics: [],
      },
      {
        title: 'Hardware RTL Evaluation Tasks',
        icon: 'shield',
        explain:
          'Authored register-transfer-level (RTL) hardware evaluation tasks for frontier-model benchmarking.',
        points: ['Built RTL hardware tasks used to benchmark frontier models on hardware-design work.'],
        metrics: [],
      },
    ],
  },
  {
    company: 'Aera Technology',
    mark: 'Ae',
    via: null,
    url: null,
    role: 'Software Engineer',
    period: 'Jan 2022 — Aug 2026',
    type: 'Full-time',
    current: false,
    tags: ['Java', 'Spring Boot', 'Neo4j', 'MySQL', 'Kafka', 'Kubernetes', 'CI/CD'],
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

// ---- Per-section headers: title + plain-language explanation ---------------
export const sections = {
  about: {
    kicker: 'About',
    title: 'Backend depth, now pointed at AI',
    desc: "A quick, honest intro — who I am, what I've shipped, and where I'm heading.",
  },
  experience: {
    kicker: 'Experience',
    title: 'Career timeline',
    desc: 'A backend engineer who moved into frontier-AI evaluation. Most recent first.',
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
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];
