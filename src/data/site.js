export const company = {
  name: 'Unique Digital Tech',
  email: 'info@uniquedigitaltech.com',
  phone: '+91 75035 09216',
  whatsapp: '917503509216',
  location: 'Noida / New Delhi, India',
};

export const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services', dropdown: true },
  { label: 'Pricing', to: '/pricing' },
  { label: 'Contact', to: '/contact' },
];

export const metrics = [
  { value: '99.9%', label: 'Uptime & production SLA' },
  { value: '150+', label: 'Full-stack solutions delivered' },
  { value: '5+', label: 'Years of modern engineering' },
  { value: '98%', label: 'Client retention & growth' },
];

export const services = [
  {
    slug: 'website-development', icon: 'globe', title: 'Website Development',
    short: 'Fast, secure Next.js and React platforms, built for high traffic and clean role-based access.',
    description: 'Custom web applications on React, Next.js and modular Node.js/PostgreSQL backends — designed for low latency, strict access control and high user concurrency.',
    capabilities: ['Scalable SPA and server-side rendered systems', 'Multi-tenant SaaS dashboards and admin portals', 'Headless e-commerce with sub-second checkout'],
    tools: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
  },
  {
    slug: 'mobile-app-development', icon: 'phone', title: 'Mobile App Development',
    short: 'iOS and Android apps with offline-first data, real-time events and fluid performance.',
    description: 'Cross-platform apps built with React Native and Flutter, with offline-first persistence, real-time push events and a native-feeling interface.',
    capabilities: ['Native-grade performance on iOS and Android', 'Secure payment gateways and biometric login', 'Real-time messaging and location tracking'],
    tools: ['React Native', 'Flutter', 'Firebase', 'REST / WebSockets'],
  },
  {
    slug: 'digital-marketing', icon: 'megaphone', title: 'Digital Marketing',
    short: 'Data-engineered acquisition funnels that turn ad spend into a predictable pipeline.',
    description: 'We replace ad-hoc campaigns with systematic funnels — tracked end to end, tuned weekly and tied to revenue, not vanity metrics.',
    capabilities: ['Search and social paid acquisition', 'Full-funnel attribution analytics', 'Conversion rate optimization (CRO)'],
    tools: ['Google Ads', 'LinkedIn Ads', 'GA4', 'Tag Manager'],
  },
  {
    slug: 'seo-services', icon: 'search', title: 'SEO Services',
    short: 'Technical SEO and Core Web Vitals work that wins high-intent search traffic.',
    description: 'Technical SEO, site-architecture optimization and Core Web Vitals engineering that help the right buyers find you first.',
    capabilities: ['Enterprise technical SEO audits', 'Core Web Vitals and speed optimization', 'Content architecture and schema markup'],
    tools: ['Search Console', 'Lighthouse', 'Schema.org', 'Screaming Frog'],
  },
  {
    slug: 'meta-ads', icon: 'target', title: 'Meta Ads & Social Growth',
    short: 'Precision Facebook and Instagram campaigns with creative testing and clean tracking.',
    description: 'Meta advertising built on proper pixel and Conversions API setup, structured creative testing and audience strategy that scales profitably.',
    capabilities: ['Facebook and Instagram lead and sales campaigns', 'Pixel and Conversions API implementation', 'Click-to-WhatsApp ad funnels'],
    tools: ['Meta Ads Manager', 'Conversions API', 'WhatsApp Business'],
  },
  {
    slug: 'crm-erp-development', icon: 'database', title: 'Custom CRM & ERP',
    short: 'Tailored business systems, reseller portals and workflows that fit how you operate.',
    description: 'Custom CRM, ERP, reseller and portal architectures that unify your data and remove manual work across sales, operations and support.',
    capabilities: ['Custom CRM and ERP platforms', 'Reseller and wholesale portal architecture', 'SMM panel wholesale engine integration'],
    tools: ['Node.js', 'PostgreSQL', 'Redis', 'REST APIs'],
  },
  {
    slug: 'whatsapp-api-automation', icon: 'message', title: 'WhatsApp API & Automation',
    short: 'Meta WhatsApp Cloud API integrations for automated, two-way customer communication.',
    description: 'Official WhatsApp Cloud API integrations: automated notifications, chat flows, lead capture and CRM sync — built to be reliable at volume.',
    capabilities: ['WhatsApp Cloud API integration', 'Automated customer communications', 'Event-driven webhooks and workflow automation'],
    tools: ['Meta Cloud API', 'Webhooks', 'Node.js', 'Third-party gateways'],
  },
  {
    slug: 'cloud-devops', icon: 'cloud', title: 'Cloud & DevOps',
    short: 'Hardened servers, Docker pipelines and zero-downtime deployments.',
    description: 'Secure infrastructure, containerization and CI/CD automation so every release ships safely and your platform stays online.',
    capabilities: ['VPS hardening and Nginx configuration', 'Dockerization and CI/CD automation', 'Monitoring with post-launch SLA support'],
    tools: ['AWS', 'Docker', 'Nginx', 'PM2', 'Git CI/CD'],
  },
];

export const valueCards = [
  { icon: 'layers', title: 'High-concurrency architecture', text: 'We move you from monolithic choke-points to fast, modular services and modern React/Next.js frontends.' },
  { icon: 'shield', title: 'End-to-end reliability', text: 'Fault-tolerant backends, zero-downtime deployments, strict data validation and clean REST/WebSocket APIs.' },
  { icon: 'trend', title: 'Predictable growth pipelines', text: 'Ad-hoc marketing becomes a measured acquisition funnel, backed by technical SEO and precision paid media.' },
];

export const techStack = [
  { group: 'Frontend & UI', items: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Vite', 'Redux Toolkit'] },
  { group: 'Backend & Runtime', items: ['Node.js', 'Express.js', 'Python', 'REST APIs', 'WebSockets'] },
  { group: 'Databases & Cache', items: ['PostgreSQL', 'Prisma ORM', 'MongoDB Atlas', 'Redis'] },
  { group: 'Cloud & Deployment', items: ['AWS', 'Docker', 'Nginx', 'PM2', 'Vercel', 'Git CI/CD'] },
  { group: 'Messaging & Automation', items: ['Meta Cloud APIs', 'WhatsApp Business API', 'Third-party gateways'] },
];

export const process = [
  { title: 'Discovery & architecture', text: 'We audit requirements, define database schemas, document API contracts and agree a scalable roadmap before any code is written.' },
  { title: 'Agile sprint execution', text: 'Bi-weekly cycles with transparent staging environments, Git version control and real-time sprint tracking.' },
  { title: 'Testing & security audits', text: 'Unit testing, API stress-testing, vulnerability assessments and cross-platform compatibility checks.' },
  { title: 'Deployment & handover', text: 'Safe production release with full documentation, post-launch SLA monitoring and 100% source-code ownership transferred to you.' },
];

export const whyUs = [
  { icon: 'key', title: 'Zero vendor lock-in', text: 'You own the code, repository commits, credentials and documentation from day one.' },
  { icon: 'users', title: 'Direct engineering communication', text: 'No bureaucratic layers. You work directly with the architects and developers building your product.' },
  { icon: 'cycle', title: 'Full-lifecycle delivery', text: 'System design, API engineering, infrastructure and performance marketing — managed under one roof.' },
];

export const testimonials = [
  {
    id: 1,
    name: 'Vikramaditya Singhania',
    role: 'CTO & Co-Founder',
    company: 'FinEdge Global Technologies',
    avatar: 'VS',
    avatarBg: 'from-blue-600 to-indigo-700',
    location: 'Singapore / Mumbai',
    service: 'Custom SaaS & Cloud Architecture',
    rating: 5,
    metric: '⚡ 3.8x Throughput & 99.99% SLA',
    quote:
      'Unique Digital Tech re-architected our transaction processing backend on Node.js and PostgreSQL. We handled over 1.4 million peak requests during Diwali week with zero latency degradation. True production-grade engineering.',
    verified: true,
  },
  {
    id: 2,
    name: 'Sarah Jenkins',
    role: 'VP of Product',
    company: 'CloudSphere Solutions',
    avatar: 'SJ',
    avatarBg: 'from-sky-500 to-cyan-600',
    location: 'San Francisco, USA',
    service: 'Next.js Web Platform',
    rating: 5,
    metric: '🚀 6-Week Turnaround & Sub-Second Loads',
    quote:
      'Finding an agency that actually understands modern Next.js server-side rendering and Core Web Vitals is exceedingly rare. Their team shipped our entire customer portal in 6 weeks with zero technical debt.',
    verified: true,
  },
  {
    id: 3,
    name: 'Rajesh K. Mehta',
    role: 'Director of Operations',
    company: 'NexusLogistics India',
    avatar: 'RM',
    avatarBg: 'from-amber-500 to-orange-600',
    location: 'New Delhi / NCR',
    service: 'Custom Logistics ERP & Mobile App',
    rating: 5,
    metric: '📉 40% Reduction in Dispatch Latency',
    quote:
      'Our dispatch operations were stuck on obsolete legacy spreadsheets. Unique Digital Tech designed a unified web & React Native portal with automated WhatsApp driver alerts and real-time shipment reconciliations.',
    verified: true,
  },
  {
    id: 4,
    name: 'Marcus Vance',
    role: 'Head of Growth',
    company: 'Omnify Commerce Group',
    avatar: 'MV',
    avatarBg: 'from-emerald-500 to-teal-700',
    location: 'London, UK',
    service: 'Headless E-Commerce & Paid Ads',
    rating: 5,
    metric: '📈 +240% ROAS & -34% Cart Drop-offs',
    quote:
      'Their team engineered a blazing-fast headless React storefront integrated directly with Meta Conversions API and Google Ads. Our paid ad tracking accuracy improved overnight and checkout conversion jumped by 34%.',
    verified: true,
  },
  {
    id: 5,
    name: 'Dr. Neha Kulkarni',
    role: 'Co-Founder & COO',
    company: 'HealthPulse Diagnostics',
    avatar: 'NK',
    avatarBg: 'from-purple-500 to-pink-600',
    location: 'Bengaluru, India',
    service: 'Healthcare Mobile App & WhatsApp API',
    rating: 5,
    metric: '⭐ 4.9 App Store Rating & 80k+ Users',
    quote:
      'They developed our cross-platform patient booking and lab report delivery app with offline sync and biometric authentication. Over 80,000 patients now receive diagnostic updates instantly via automated WhatsApp.',
    verified: true,
  },
  {
    id: 6,
    name: 'Tariq Al-Mansoor',
    role: 'Managing Director',
    company: 'Apex Retail Network',
    avatar: 'TA',
    avatarBg: 'from-rose-500 to-red-700',
    location: 'Dubai, UAE',
    service: 'Official WhatsApp Cloud API & CRM',
    rating: 5,
    metric: '🤖 18,000+ Automated Chats / Day',
    quote:
      'The Meta Cloud API integration implemented by Unique Digital Tech handles over 18,000 automated customer conversations every day. Webhook delivery has been 100% resilient with zero lost leads.',
    verified: true,
  },
  {
    id: 7,
    name: 'Amanpreet Singh',
    role: 'Founder & CEO',
    company: 'QuickScale SMM Wholesale',
    avatar: 'AS',
    avatarBg: 'from-cyan-500 to-blue-600',
    location: 'Gurugram, India',
    service: 'High-Concurrency Reseller Engine',
    rating: 5,
    metric: '⚡ 22ms Average API Response Time',
    quote:
      'We needed a high-frequency reseller engine that could handle tens of thousands of automated API provider requests without throttling. Unique Digital Tech architected a Redis-backed queue system that executes flawlessly.',
    verified: true,
  },
  {
    id: 8,
    name: 'Elena Rostova',
    role: 'Head of Infrastructure',
    company: 'Nordica DataLabs',
    avatar: 'ER',
    avatarBg: 'from-indigo-500 to-violet-700',
    location: 'Stockholm, Sweden',
    service: 'Docker & AWS DevOps Automation',
    rating: 5,
    metric: '🔒 Zero Vulnerabilities in Third-Party Audit',
    quote:
      'They containerized our entire microservices ecosystem with Docker and established automated zero-downtime CI/CD pipelines on AWS. Release deployment time plummeted from 3 hours to under 90 seconds.',
    verified: true,
  },
];

export const pricingPlans = [
  {
    id: 'starter',
    name: 'Startup MVP',
    badge: 'Fast-Track Launch',
    popular: false,
    tagline: 'Ideal for early-stage founders & prototypes seeking rapid market validation with clean, unbloated code.',
    timeline: '3 to 4 Weeks Delivery',
    inrPrice: '₹1,49,999',
    inrSub: 'Fixed milestone fee · No surprises',
    usdPrice: '$1,999',
    usdSub: 'Fixed milestone fee · No surprises',
    features: [
      'Interactive Figma UI/UX Design System (5-8 core pages)',
      'High-performance Next.js / React Web Application',
      'Modular Node.js / Express or Next.js API architecture',
      'PostgreSQL / Supabase Database Schema & Indexes',
      'Secure Authentication & Role-Based Access Control',
      'Razorpay / Stripe Payment Gateway Integration',
      'Production Deployment on Vercel / Cloud VPS with SSL',
      '30-Day Post-Launch Bug Warranty & SLA Monitoring',
      '100% Source Code Ownership & Git Repository Transfer',
    ],
    highlight: 'Production-ready MVP shipped in 4 weeks',
    cta: 'Book MVP Discovery Call',
  },
  {
    id: 'growth',
    name: 'Growth & Custom Web / App',
    badge: 'Most Popular',
    popular: true,
    tagline: 'Full-stack software platform engineered for high concurrency, automated workflows, and commercial scale.',
    timeline: '6 to 8 Weeks Delivery',
    inrPrice: '₹3,49,999',
    inrSub: 'Milestone billing (30% / 40% / 30%)',
    usdPrice: '$4,499',
    usdSub: 'Milestone billing (30% / 40% / 30%)',
    features: [
      'Everything in Startup MVP, plus:',
      'Cross-Platform iOS & Android Mobile App OR Complex SaaS Web Portal',
      'Redis Caching & Optimized High-Concurrency Query Layer',
      'Multi-Tenant Role Hierarchy & Granular Analytics Dashboard',
      'Official Meta WhatsApp Cloud API Automated Event Triggers',
      'Automated CI/CD Pipeline & Docker Containerization',
      'Advanced Security Hardening, Rate Limiting & Input Sanitization',
      'API Load Testing & Core Web Vitals Sub-Second Tuning',
      '60-Day Post-Launch Enterprise Warranty & SLA Support',
      'Direct Private Slack / WhatsApp Engineering Channel',
    ],
    highlight: 'Full-stack scale with WhatsApp API & Mobile App',
    cta: 'Start Growth Project',
  },
  {
    id: 'enterprise',
    name: 'Enterprise & Systems',
    badge: 'Full Digital Transformation',
    popular: false,
    tagline: 'Custom ERP, CRM, high-volume reseller engines, and cloud microservices built for demanding enterprise workloads.',
    timeline: 'Custom Milestone Roadmap',
    inrPrice: '₹7,99,999+',
    inrSub: 'Custom scope & tailored phased sprints',
    usdPrice: '$9,999+',
    usdSub: 'Custom scope & tailored phased sprints',
    features: [
      'Tailored Modular Monolith or Microservices Architecture',
      'High-concurrency infrastructure handling 10,000+ active connections',
      'Custom ERP / CRM / SMM wholesale panel engine integration',
      'Biometric / Enterprise SSO Authentication & Field-Level Encryption',
      'Multi-Region Cloud Architecture on AWS / GCP with Auto-Scaling',
      'Webhook orchestration with automated failover & retry queues',
      'Comprehensive Technical Architecture & Swagger API Documentation',
      '99.9% Uptime SLA Agreement with 24/7 Severity-1 Incident Response',
      '90-Day Enterprise Hypercare Support & Handover Workshops',
      'Dedicated Solutions Architect & Senior Tech Lead assigned',
    ],
    highlight: 'Custom mission-critical architecture with 99.9% SLA',
    cta: 'Request Enterprise Proposal',
  },
];

export const retainerPlans = [
  {
    id: 'maintenance-retainer',
    name: 'Maintenance & Security Retainer',
    hours: '40 Hours / Month',
    popular: false,
    inrPrice: '₹49,999',
    inrPeriod: '/ month',
    usdPrice: '$699',
    usdPeriod: '/ month',
    desc: 'Continuous uptime monitoring, dependency patching, bug resolution, and steady minor feature rollouts.',
    deliverables: [
      'Security patch audits and zero-day dependency updates',
      'Performance & database query optimization',
      'Bug fixes & UI/UX enhancements',
      '48-hour SLA response time for non-critical tickets',
      'Monthly architectural health report',
    ],
  },
  {
    id: 'dedicated-senior-dev',
    name: 'Dedicated Senior Full-Stack Engineer',
    hours: '160 Hours / Month (Full-Time)',
    popular: true,
    inrPrice: '₹1,29,999',
    inrPeriod: '/ month',
    usdPrice: '$1,799',
    usdPeriod: '/ month',
    desc: 'An experienced senior software engineer fully embedded into your product roadmap, daily standups, and codebase.',
    deliverables: [
      'Full-time 40 hours/week dedicated engineering focus',
      'Next.js, React, Node.js, PostgreSQL & API development',
      'Direct participation in your team meetings & Slack / Discord',
      'Daily Git commits, pull requests & code reviews',
      'Flexible month-to-month agreement with 2 weeks notice',
    ],
  },
  {
    id: 'dedicated-engineering-pod',
    name: 'Dedicated Engineering Squad',
    hours: 'Full Dedicated Team (Squad)',
    popular: false,
    inrPrice: '₹3,49,999',
    inrPeriod: '/ month',
    usdPrice: '$4,499',
    usdPeriod: '/ month',
    desc: 'A complete autonomous engineering team: Lead Architect, 2 Senior Full-Stack Developers, QA Engineer & DevOps.',
    deliverables: [
      'Full cross-functional squad for rapid product iterations',
      'System design, frontend, backend, QA & cloud deployments',
      'Bi-weekly sprint planning, roadmap execution & releases',
      'Guaranteed 4x development velocity vs solo hiring',
      'Dedicated Project Manager for timeline accountability',
    ],
  },
];

export const pricingAddons = [
  {
    title: 'Meta WhatsApp Cloud API Automation',
    tag: 'Quick 5-Day Integration',
    inr: '₹29,999',
    usd: '$399',
    desc: 'Official WhatsApp Business Cloud API setup, template message verification, webhook handlers, and automated lead capture workflows.',
  },
  {
    title: 'Core Web Vitals & Technical SEO Overhaul',
    tag: 'Performance Sprint',
    inr: '₹24,999',
    usd: '$349',
    desc: 'Full Lighthouse 95+ score optimization, server-side caching, image CDN optimization, and structured schema markup for top search ranks.',
  },
  {
    title: 'AWS Cloud DevOps & Security Hardening',
    tag: 'Infrastructure',
    inr: '₹39,999',
    usd: '$549',
    desc: 'Docker container setup, Nginx reverse proxy, SSL, automated CI/CD pipeline, DDoS mitigation, and scheduled database backups.',
  },
  {
    title: 'Cross-Platform Mobile App Extension',
    tag: 'Mobile Add-on',
    inr: '₹99,999',
    usd: '$1,299',
    desc: 'Extend your existing web platform with React Native iOS and Android apps, push notifications, and App Store submission support.',
  },
];

export const comparisonFeatures = [
  {
    category: 'Architecture & Design',
    items: [
      { name: 'Custom UI/UX Design System in Figma', starter: '5-8 Pages', growth: '12-18 Pages', enterprise: 'Unlimited Custom' },
      { name: 'Responsive Mobile-First Interface', starter: '✓ Included', growth: '✓ Included', enterprise: '✓ Included' },
      { name: 'Database Architecture & Data Modeling', starter: 'Standard Relational', growth: 'Optimized + Caching', enterprise: 'Distributed / Multi-Region' },
    ],
  },
  {
    category: 'Engineering & Capabilities',
    items: [
      { name: 'Frontend Technology', starter: 'React / Next.js', growth: 'Next.js 14 SSR/SSG', enterprise: 'Next.js Micro-frontends' },
      { name: 'Backend & APIs', starter: 'Node.js REST API', growth: 'Node.js + WebSockets', enterprise: 'Event-Driven Microservices' },
      { name: 'Mobile App Support', starter: 'Responsive PWA', growth: 'React Native / Flutter', enterprise: 'Native iOS & Android + Wearable' },
      { name: 'WhatsApp Cloud API Automation', starter: 'Optional Add-on', growth: '✓ Included (Official)', enterprise: '✓ High-Volume Tier' },
      { name: 'Role-Based Access & Admin Portal', starter: 'Basic Admin', growth: 'Granular Multi-Tenant', enterprise: 'Enterprise SSO / RBAC' },
    ],
  },
  {
    category: 'Infrastructure & Support',
    items: [
      { name: 'Cloud Deployment & SSL', starter: 'Vercel / VPS', growth: 'AWS / Docker Container', enterprise: 'Multi-Region Auto-Scaling' },
      { name: 'CI/CD Automated Pipelines', starter: 'Standard Git', growth: 'GitHub Actions / Docker', enterprise: 'Enterprise GitOps & Staging' },
      { name: 'Complimentary Post-Launch Warranty', starter: '30 Days SLA', growth: '60 Days SLA', enterprise: '90 Days Hypercare' },
      { name: 'Source Code & IP Ownership', starter: '100% Transfer', growth: '100% Transfer', enterprise: '100% Transfer' },
    ],
  },
];

export const pricingFaqs = [
  {
    q: 'Do I get 100% ownership of the intellectual property and source code?',
    a: 'Yes, completely. From the first commit to final production deployment, you own all Git repositories, codebases, designs, databases, and deployment keys. We transfer full source code upon milestone completion with zero vendor lock-in.',
  },
  {
    q: 'How does your milestone-based payment structure work?',
    a: 'Our fixed-price projects are divided into 3 transparent, risk-free milestones: 30% advance on project kickoff and architectural signoff, 40% upon staging environment demonstration of core features, and the remaining 30% upon final production deployment, security audit, and handover.',
  },
  {
    q: 'Do you sign Non-Disclosure Agreements (NDAs)?',
    a: 'Absolutely. We respect your proprietary ideas and trade secrets. We execute an NDA prior to reviewing your product specifications, wireframes, or internal business data.',
  },
  {
    q: 'What happens after our product is launched?',
    a: 'Every project includes complimentary post-launch warranty support (30 days for Startup MVP, 60 days for Growth, and 90 days for Enterprise) covering bug fixes, server monitoring, and minor tweaks. Afterwards, you can switch to a flexible monthly maintenance retainer or have your in-house team manage it.',
  },
  {
    q: 'What if our project requirements evolve during the sprint?',
    a: 'We work in agile 1-2 week sprints. If you want to introduce new features, we assess the scope, provide transparent estimation, and adjust the backlog collaboratively without halting progress.',
  },
  {
    q: 'Can we pay in Indian Rupees (INR) or US Dollars (USD)?',
    a: 'Yes. For Indian businesses, we issue GST-compliant invoices with bank transfer (NEFT/RTGS/IMPS) and UPI. For international clients, we accept wire transfers (SWIFT/ACH), Stripe, and Wise.',
  },
];

export const homeComparison = [
  {
    feature: 'Direct Access to Senior Engineers',
    unique: 'Yes — Direct engineering channel (Slack/WhatsApp)',
    traditional: 'No — Layered through non-technical account managers',
    freelance: 'Varies — Unvetted communication & unpredictable timezones',
  },
  {
    feature: 'Source Code Ownership & IP',
    unique: '100% IP transfer from day one, zero lock-in',
    traditional: 'Often held behind proprietary CMS or hostage clauses',
    freelance: 'Unclear licensing risks & inconsistent repo handovers',
  },
  {
    feature: 'Architecture & Tech Stack',
    unique: 'Modern React, Next.js, Node.js, PostgreSQL, AWS & Docker',
    traditional: 'Bloated legacy PHP, WordPress templates or slow monoliths',
    freelance: 'Fragmented libraries & zero code architecture standards',
  },
  {
    feature: 'Post-Launch Warranty & SLA',
    unique: '30 to 90 days complimentary bug-fix warranty & SLA guarantee',
    traditional: 'Heavy monthly minimum maintenance lock-in contracts',
    freelance: 'Ghosting once the final invoice is paid',
  },
  {
    feature: 'Milestone-Based Risk Protection',
    unique: 'Pay 30% / 40% / 30% only upon verified working deliverables',
    traditional: 'Heavy 50% upfront retainer with ambiguous billing',
    freelance: 'Hourly billing with unpredictable runaway costs',
  },
];

export const homeFaqs = [
  {
    q: 'How quickly can we kick off a new engineering sprint?',
    a: 'Once we finalize the initial architecture discovery call and align on requirements, our engineering team can typically begin sprint setup, schema design, and Figma wireframing within 48 to 72 hours.',
  },
  {
    q: 'Who will be my primary point of contact during development?',
    a: 'You will work directly with a dedicated Lead Solutions Architect and Senior Full-Stack Engineer via a private WhatsApp or Slack channel. We do not use intermediary account managers who dilute technical requirements.',
  },
  {
    q: 'Can you take over or refactor an existing codebase?',
    a: 'Yes. We frequently conduct deep codebase audits, identify security vulnerabilities, optimize slow database queries, and upgrade legacy stacks to modern Next.js, Node.js, and Docker environments.',
  },
  {
    q: 'How do you ensure enterprise-grade security and data privacy?',
    a: 'We implement industry best practices: HTTPS/TLS encryption, parameterized SQL queries against injection, strict JWT/session authentication, rate limiting, CORS configuration, and automated dependency vulnerability scans.',
  },
];

