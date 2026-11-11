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
    slug: 'website-development',
    icon: 'globe',
    title: 'Website Development',
    tagline: 'High-Performance Next.js & React Web Platforms Built for Enterprise Scale',
    short: 'Fast, secure Next.js and React platforms, built for high traffic, sub-second loads and clean role-based access.',
    description: 'We architect and build modern full-stack web applications using React, Next.js 14, Node.js, and PostgreSQL. From multi-tenant SaaS dashboards to high-concurrency client portals and headless e-commerce, our architectures achieve 95+ Core Web Vitals, sub-30ms global edge latency, and zero technical debt.',
    metrics: [
      { value: '< 30ms', label: 'Global Edge Response Time' },
      { value: '99.99%', label: 'Production Uptime SLA' },
      { value: '100%', label: 'Git & Code IP Handover' },
    ],
    capabilities: [
      'Scalable Next.js 14 App Router with Server-Side Rendering (SSR) & Static Generation (SSG)',
      'Multi-tenant SaaS dashboards, customer portals, and RBAC admin panels',
      'Modular RESTful & WebSocket API architecture on Node.js / Express',
      'Relational PostgreSQL / Supabase schema design with optimized indexes and caching',
      'Automated CI/CD deployment pipelines on Vercel, AWS ECS, or private VPS with SSL',
      'Enterprise payment gateway integration (Stripe, Razorpay, PayPal) with idempotent webhooks',
    ],
    modules: [
      {
        title: 'Modern Frontend & Design System',
        desc: 'Pixel-perfect, accessible UI components built in Tailwind CSS and React, backed by Figma tokens and interactive micro-animations.',
      },
      {
        title: 'High-Concurrency Backend APIs',
        desc: 'Modular Express / Next.js backend with input sanitization, rate-limiting, JWT authentication, and structured error handling.',
      },
      {
        title: 'PostgreSQL & Redis Cache Layer',
        desc: 'Optimized database schemas, transaction isolation, connection pooling via Prisma / Supabase, and Redis in-memory cache for fast lookups.',
      },
      {
        title: 'DevOps & Automated CI/CD Pipeline',
        desc: 'Zero-downtime automated deployment via GitHub Actions, Docker containerization, health checks, and automatic SSL provisioning.',
      },
    ],
    deliverables: [
      'Complete interactive Figma UI/UX Design System with responsive mobile-first layouts',
      'Full-stack Next.js / React source code repository with clean Git commit history',
      'Production-ready PostgreSQL database schemas, migrations, and seed scripts',
      'Secure authentication flow (OAuth, email magic links, or 2FA session management)',
      'Payment gateway integration with automated invoice generation and webhooks',
      'Docker container setup and GitHub Actions automated deployment workflow',
      'Lighthouse 95+ performance optimization and structured SEO metadata',
      '30 to 90 days complimentary post-launch bug warranty and SLA monitoring',
    ],
    advantages: [
      {
        aspect: 'Architecture Quality',
        legacy: 'Bloated WordPress templates, slow PHP monoliths, or spaghetti JavaScript with high vulnerability risks.',
        unique: 'Modern Next.js 14 SSR/SSG, modular TypeScript, zero code bloat, and enterprise security hardening.',
      },
      {
        aspect: 'IP & Code Ownership',
        legacy: 'Agencies hold code hostage behind recurring proprietary license fees or cryptic locked CMS platforms.',
        unique: '100% full source code, Git commit history, and deployment keys transferred directly to you from day one.',
      },
      {
        aspect: 'Load Times & Conversion',
        legacy: 'Heavy 4-7 second page load times causing 60%+ bounce rates on mobile and poor Core Web Vitals rankings.',
        unique: 'Sub-second rendering, edge CDN caching, image optimization, and 95+ Lighthouse scores for top conversions.',
      },
    ],
    timelineSteps: [
      { step: 'Phase 1', duration: 'Days 1–7', title: 'Architecture Blueprint & Wireframes', desc: 'Requirements audit, database schema modeling, Figma design system signoff, and Git repo creation.' },
      { step: 'Phase 2', duration: 'Days 8–24', title: 'Interactive Staging Demo Build', desc: 'Core feature development, REST APIs, database queries, and private staging deployment for client review.' },
      { step: 'Phase 3', duration: 'Days 25–35', title: 'Hardened Release & IP Handover', desc: 'Stress testing, security audit, production DNS release on AWS/Vercel, and full transfer of code and keys.' },
    ],
    tools: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'Redis', 'Docker', 'Vercel'],
    faqs: [
      {
        q: 'Do you build custom code or rely on pre-made WordPress templates?',
        a: 'We build 100% bespoke, production-grade web applications from scratch using React, Next.js, and Node.js. No bloated WordPress themes, no third-party plugin vulnerabilities, and zero arbitrary vendor lock-in.',
      },
      {
        q: 'Can our in-house developers easily take over the codebase after launch?',
        a: 'Yes, absolutely. Our code follows industry-standard TypeScript/ES6 conventions, strict linting rules, and clean folder structures. We provide complete architectural documentation and a walkthrough session upon final handover.',
      },
      {
        q: 'What happens if we encounter bugs after the website is launched?',
        a: 'Every website we deliver includes complimentary 30 to 90 days of dedicated post-launch SLA bug warranty. Our solutions architects monitor performance and fix any defects with high urgency at zero extra charge.',
      },
    ],
  },
  {
    slug: 'mobile-app-development',
    icon: 'phone',
    title: 'Mobile App Development',
    tagline: 'Cross-Platform iOS & Android Applications with 60fps Native Performance',
    short: 'iOS and Android apps with offline-first data, real-time push events, biometric security and fluid 60fps UX.',
    description: 'We develop high-performance cross-platform mobile applications using React Native and Flutter. Designed for mission-critical reliability, our apps feature offline-first synchronization, secure biometric authentication, instant push notification pipelines, and seamless App Store & Google Play Store release management.',
    metrics: [
      { value: '60 FPS', label: 'Smooth Fluid Rendering' },
      { value: 'iOS & Android', label: 'Single Unified Codebase' },
      { value: '100%', label: 'Store Approval Guarantee' },
    ],
    capabilities: [
      'Native-grade 60fps performance on both Apple iOS and Google Android',
      'Offline-first data persistence with automated background synchronization',
      'Biometric authentication (FaceID, Fingerprint) and secure keychain storage',
      'Real-time WebSocket notifications, live in-app chat, and location tracking',
      'Payment gateway SDK integrations (Apple Pay, Google Pay, Razorpay, Stripe)',
      'End-to-end App Store and Google Play compliance review and deployment',
    ],
    modules: [
      {
        title: 'Native UX & UI Components',
        desc: 'Fluid micro-interactions, gesture navigation, dark/light theme support, and responsive scaling across smartphones and tablets.',
      },
      {
        title: 'Offline-First SQLite / WatermelonDB',
        desc: 'Local database caching ensuring the app operates seamlessly with zero connectivity and syncs when reconnected.',
      },
      {
        title: 'Push Notification Pipelines',
        desc: 'Firebase Cloud Messaging (FCM) and Apple Push Notification Service (APNs) integration for targeted real-time alerts.',
      },
      {
        title: 'Security & App Store Hardening',
        desc: 'ProGuard code obfuscation, SSL pinning, jailbreak/root detection, and end-to-end encryption for sensitive user records.',
      },
    ],
    deliverables: [
      'Complete React Native / Flutter cross-platform source code repository',
      'Interactive Figma mobile UI kit following Apple HIG and Google Material guidelines',
      'Backend REST / GraphQL API endpoints with real-time WebSocket listeners',
      'Firebase Cloud Messaging push notification setup and campaign triggers',
      'Full App Store Connect & Google Play Console submission and metadata preparation',
      'Automated Fastlane build scripts for instant iOS TestFlight and Android APK builds',
      '60-Day Post-Launch SLA Warranty covering store updates and OS version patches',
    ],
    advantages: [
      {
        aspect: 'Platform Delivery',
        legacy: 'Hiring separate iOS and Android teams leading to doubled costs, delayed timelines, and mismatched features.',
        unique: 'Single unified React Native / Flutter codebase delivering identical 60fps native feel on both platforms at half the cost.',
      },
      {
        aspect: 'Offline Reliability',
        legacy: 'Apps crash or show blank screens the moment the user enters an elevator, airplane, or low-coverage zone.',
        unique: 'Offline-first local storage with optimistic UI updates and silent background sync upon reconnection.',
      },
      {
        aspect: 'Store Approval',
        legacy: 'Repeated App Store rejections due to non-compliant privacy policies, guideline violations, or broken auth.',
        unique: '100% store submission guarantee. Our architects handle all Apple and Google review guidelines until approved.',
      },
    ],
    timelineSteps: [
      { step: 'Phase 1', duration: 'Days 1–10', title: 'Mobile UI/UX & API Contract', desc: 'Figma interactive prototypes, user journey mapping, and mobile backend API contracts specification.' },
      { step: 'Phase 2', duration: 'Days 11–30', title: 'Core App Build & Staging TestFlight', desc: 'Screen engineering, state management, local database, and staging deployment to TestFlight / Internal Testing.' },
      { step: 'Phase 3', duration: 'Days 31–45', title: 'Store Release & Handover', desc: 'Biometric security hardening, App Store & Play Store review approval, and 100% source code repository transfer.' },
    ],
    tools: ['React Native', 'Flutter', 'Firebase', 'Redux', 'SQLite', 'Fastlane', 'Node.js', 'PostgreSQL'],
    faqs: [
      {
        q: 'Will the app feel like a native app or a sluggish web wrapper?',
        a: 'We build with React Native and Flutter, which compile down to true native UI controls on iOS and Android. Users experience fluid 60fps scrolling, native gestures, and instantaneous responsiveness.',
      },
      {
        q: 'Do you manage the Apple App Store and Google Play Store launch process?',
        a: 'Yes. We configure your developer accounts, generate required certificates, create app store screenshots, prepare privacy disclosures, and resolve any questions from Apple and Google review teams.',
      },
      {
        q: 'Can the mobile app share the same database and backend as our web app?',
        a: 'Absolutely. We design unified REST and WebSocket APIs so your web portal and mobile app share the exact same user accounts, database records, and real-time events.',
      },
    ],
  },
  {
    slug: 'crm-erp-development',
    icon: 'database',
    title: 'Custom CRM & ERP Architecture',
    tagline: 'Tailored Business Operations Engines, Reseller Panels & Workflow Automations',
    short: 'Custom CRM, ERP, reseller and portal architectures that unify your operational data and eliminate manual bottlenecks.',
    description: 'We architect and engineer bespoke enterprise CRM, ERP, and operations management software designed around your specific business model. We specialize in complex business logic, automated multi-tier approval workflows, wholesale reseller/agent panels, inventory tracking, and high-volume billing engines handling millions in transaction volume.',
    metrics: [
      { value: '10,000+', label: 'Concurrent Ops Handled' },
      { value: '75%', label: 'Reduction in Manual Work' },
      { value: 'Zero', label: 'Recurring User Seat Fees' },
    ],
    capabilities: [
      'Bespoke CRM / ERP workflows eliminating monthly per-seat licensing fees (Salesforce/HubSpot alternative)',
      'Multi-tier role hierarchies: Super Admin, Branch Managers, Sales Agents, and Customers',
      'Automated invoicing, payment reconciliation, GST billing, and ledger reporting',
      'Wholesale reseller panels, SMM provider engine integrations, and automated order fulfillment',
      'Webhook-driven external integrations with banking APIs, WhatsApp Cloud API, and logistics partners',
      'High-concurrency PostgreSQL relational schemas with field-level data encryption and audit logs',
    ],
    modules: [
      {
        title: 'Granular Role-Based Access Control',
        desc: 'Role permissions down to individual database attributes, preventing unauthorized data exfiltration.',
      },
      {
        title: 'Automated Operations Pipelines',
        desc: 'Event-driven job queues (BullMQ/Redis) for automated invoices, order dispatch, and alert notifications.',
      },
      {
        title: 'Interactive Financial Analytics',
        desc: 'Real-time profit & loss charts, agent commission reconciliations, and custom CSV/PDF report generators.',
      },
      {
        title: 'Reseller & Partner API Gateway',
        desc: 'Secure tokenized API gateway enabling external resellers and affiliates to submit automated bulk orders.',
      },
    ],
    deliverables: [
      'Complete custom CRM/ERP web application source code with zero user-seat restrictions',
      'Granular administrative control portal with audit logs and activity histories',
      'Automated background worker queue system for emails, WhatsApp alerts, and payment webhooks',
      'Custom database schema with relational foreign keys, indexes, and automated daily backups',
      'Exportable financial reports (PDF invoices, GST summaries, and Excel reconciliations)',
      'Interactive Figma UI system for executive dashboards and operations screens',
      '60 to 90 days enterprise post-launch hypercare SLA support and staff training sessions',
    ],
    advantages: [
      {
        aspect: 'Cost Structure',
        legacy: 'Paying $150 to $300 per user every month to SaaS vendors like Salesforce or SAP as your headcount grows.',
        unique: 'One-time custom milestone investment. You own the software forever with zero recurring user license fees.',
      },
      {
        aspect: 'Workflow Fit',
        legacy: 'Forcing your business processes to fit into rigid, generic SaaS tools that lack industry-specific logic.',
        unique: 'Custom-built around your exact operational workflows, commission structures, and business rules.',
      },
      {
        aspect: 'Data Privacy & Security',
        legacy: 'Your proprietary customer lists and trade financial secrets stored on shared third-party multi-tenant servers.',
        unique: 'Self-hosted on your own private AWS or GCP cloud with field-level encryption and full data sovereignty.',
      },
    ],
    timelineSteps: [
      { step: 'Phase 1', duration: 'Days 1–12', title: 'Business Logic Audit & Data Modeling', desc: 'Mapping operational workflows, role permissions, approval chains, and database relational schemas.' },
      { step: 'Phase 2', duration: 'Days 13–35', title: 'Core System & Queue Engine Build', desc: 'Developing modules, automated queues, payment reconciliation, and staging environment verification.' },
      { step: 'Phase 3', duration: 'Days 36–50', title: 'Security Audit, Staff Training & Handover', desc: 'Data migration, vulnerability assessments, staff onboarding walkthrough, and 100% source code transfer.' },
    ],
    tools: ['Node.js', 'PostgreSQL', 'Redis', 'BullMQ', 'Next.js', 'Docker', 'AWS', 'Prisma ORM'],
    faqs: [
      {
        q: 'Why should we build a custom CRM/ERP instead of using Salesforce or Zoho?',
        a: 'Commercial SaaS platforms charge steep recurring fees per user per month ($50–$300/user/mo), making them exorbitantly expensive as your team expands. A custom system has zero per-seat license costs, matches your exact workflows, and keeps your customer data 100% private.',
      },
      {
        q: 'Can this custom ERP integrate with our existing accounting or payment gateways?',
        a: 'Yes. We build custom API connectors for Razorpay, Stripe, Tally, Zoho Books, WhatsApp Business API, and your existing banking interfaces for automated settlement.',
      },
      {
        q: 'How secure is our financial data in the custom system?',
        a: 'We implement bank-grade security: AES-256 field-level encryption for sensitive data, bcrypt password hashing, IP whitelisting for admin portals, and complete audit logging for every record change.',
      },
    ],
  },
  {
    slug: 'whatsapp-api-automation',
    icon: 'message',
    title: 'WhatsApp Cloud API & Automations',
    tagline: 'Official Meta WhatsApp Business Cloud API Solutions & Event-Driven Bots',
    short: 'Official WhatsApp Cloud API integrations: automated notifications, interactive chat flows, lead routing and CRM sync.',
    description: 'We design and deploy enterprise automated messaging pipelines using the official Meta WhatsApp Business Cloud API. From instant lead capture and multi-agent customer support dashboards to automated payment receipts, delivery notifications, and conversational AI chatbots, we turn WhatsApp into your highest-converting channel.',
    metrics: [
      { value: '98%', label: 'Average Open Rate' },
      { value: '< 2 Sec', label: 'Automated Bot Latency' },
      { value: '100% Official', label: 'Meta Cloud API Verified' },
    ],
    capabilities: [
      'Official Meta WhatsApp Business Cloud API registration and Green Tick verification assistance',
      'Automated multi-step chatbot flows for qualification, order placement, and FAQ answering',
      'Two-way CRM integration: automatically create leads, trigger status alerts, and log conversation histories',
      'High-throughput notification broadcasts for marketing campaigns and transactional OTPs',
      'Multi-agent shared team inbox with live agent routing, canned responses, and conversation tags',
      'Automated payment links and receipt dispatch via Razorpay / Stripe integrations',
    ],
    modules: [
      {
        title: 'Meta Cloud Webhook Gateway',
        desc: 'Resilient Node.js webhook engine that receives message payloads, sanitizes inputs, and routes events in milliseconds.',
      },
      {
        title: 'Visual Flow & State Machine',
        desc: 'Stateful conversation logic that guides users through questionnaires, collects documents, and executes actions.',
      },
      {
        title: 'Multi-Agent Support Dashboard',
        desc: 'Centralized customer support web dashboard where human agents can take over bot chats in real time.',
      },
      {
        title: 'CRM & ERP Synchronization',
        desc: 'Bidirectional sync that updates leads in your database and triggers WhatsApp alerts on specific CRM milestones.',
      },
    ],
    deliverables: [
      'Fully verified Meta WhatsApp Cloud API credentials and webhook integration',
      'Conversational chatbot workflows tailored to your sales and support funnels',
      'Multi-agent live chat web portal for customer support representatives',
      'Pre-approved Meta utility and marketing message templates for broadcasts',
      'Automated event triggers for order confirmations, reminders, and payment receipts',
      'Comprehensive webhook error-recovery queue with retry logic (BullMQ / Redis)',
      'Complete Git source code repository and API documentation',
    ],
    advantages: [
      {
        aspect: 'API Authenticity',
        legacy: 'Using unofficial, pirated third-party QR-code scrapers that get your business phone number permanently banned by Meta.',
        unique: '100% official Meta WhatsApp Cloud API with zero risk of number bans, direct server-to-server security, and green tick eligibility.',
      },
      {
        aspect: 'Engagement & Open Rates',
        legacy: 'Traditional emails with 12-18% open rates that end up in the spam folder, or SMS messages ignored by customers.',
        unique: 'WhatsApp achieves an astonishing 98% open rate and 45%+ response rate, delivering instant engagement on users’ primary messaging app.',
      },
      {
        aspect: 'System Integration',
        legacy: 'Siloed standalone WhatsApp tools that do not connect to your central database, requiring manual copy-pasting of leads.',
        unique: 'Direct bidirectional sync with your website, custom CRM, and database for zero manual administrative work.',
      },
    ],
    timelineSteps: [
      { step: 'Phase 1', duration: 'Days 1–3', title: 'Meta Verification & Template Setup', desc: 'Meta Business Manager registration, Cloud API verification, and template approvals.' },
      { step: 'Phase 2', duration: 'Days 4–10', title: 'Bot Flow & Webhook Engine Build', desc: 'Chatbot state machine, CRM webhook integration, and multi-agent portal setup.' },
      { step: 'Phase 3', duration: 'Days 11–15', title: 'Live Testing & Handover', desc: 'End-to-end load testing, staff onboarding on the live-chat portal, and code delivery.' },
    ],
    tools: ['Meta Cloud API', 'Node.js', 'Express', 'Redis', 'Webhooks', 'React', 'PostgreSQL'],
    faqs: [
      {
        q: 'Is this the official Meta API or a third-party gateway that can get banned?',
        a: 'We build exclusively on the official Meta WhatsApp Cloud API. Your phone number is registered directly with Meta, guaranteeing zero risk of account bans and providing high-speed message throughput.',
      },
      {
        q: 'Can multiple customer service agents chat from the same WhatsApp number?',
        a: 'Yes. We deliver a multi-agent team inbox where your sales and support representatives can reply to customers simultaneously from individual logins using the single official business WhatsApp number.',
      },
      {
        q: 'Can we send automated reminders when a user abandons checkout on our website?',
        a: 'Yes. We connect webhooks to your checkout workflow. When a cart is left incomplete for a set time (e.g. 15 minutes), our engine automatically triggers a personalized WhatsApp recovery message.',
      },
    ],
  },
  {
    slug: 'cloud-devops',
    icon: 'cloud',
    title: 'Cloud Architecture & AWS DevOps',
    tagline: 'Resilient Cloud Infrastructure, Docker Pipelines & Zero-Downtime Releases',
    short: 'Hardened cloud servers, Docker containers, automated CI/CD pipelines and 24/7 high-availability architecture.',
    description: 'We design, provision, and maintain production cloud infrastructure on AWS, Google Cloud Platform (GCP), DigitalOcean, and dedicated VPS. We transform fragile, manual server setups into self-healing, auto-scaling containerized environments with automated CI/CD pipelines, DDoS mitigation, and sub-minute disaster recovery.',
    metrics: [
      { value: '99.99%', label: 'Cloud Availability Target' },
      { value: 'Zero', label: 'Deployment Downtime' },
      { value: '40%+', label: 'Infra Cost Optimization' },
    ],
    capabilities: [
      'AWS cloud architecture: ECS, EC2, RDS PostgreSQL, S3, CloudFront CDN, and Route 53',
      'Docker containerization and multi-stage production image optimization',
      'Automated Git-based CI/CD deployment pipelines (GitHub Actions, GitLab CI)',
      'High-performance Nginx reverse proxy configuration with HTTP/2 and automated Let’s Encrypt SSL',
      'Automated daily database backups with offsite S3 retention and point-in-time recovery',
      'Server security hardening: UFW firewall, fail2ban brute-force defense, and SSH key enforcement',
    ],
    modules: [
      {
        title: 'Infrastructure as Code (IaC)',
        desc: 'Reproducible, version-controlled cloud environments created via Terraform and Docker Compose.',
      },
      {
        title: 'Continuous Deployment (CI/CD)',
        desc: 'Push code to your main Git branch, and automated workflows test, build, and deploy with zero downtime.',
      },
      {
        title: 'Security Hardening & Shield',
        desc: 'Strict firewall rules, rate-limiting, SSL A+ grade configuration, and Cloudflare DDoS shielding.',
      },
      {
        title: 'Monitoring & Alerting Hub',
        desc: 'Real-time CPU/RAM metrics, uptime pingers, and instant Telegram/Slack alerts for system anomalies.',
      },
    ],
    deliverables: [
      'Complete Docker Compose / ECS configuration files and deployment scripts',
      'Automated GitHub Actions CI/CD pipeline for automated staging and production releases',
      'Hardened Linux server configuration with Nginx reverse proxy and SSL certificates',
      'Managed PostgreSQL / MySQL database setup with automated daily offsite snapshots',
      'Comprehensive Cloudflare / CDN configuration for caching and DDoS mitigation',
      'Full architecture specification document and credentials master vault handover',
      '30 to 90 days complimentary DevOps support and infrastructure SLA monitoring',
    ],
    advantages: [
      {
        aspect: 'Release Velocity',
        legacy: 'Manual FTP file uploads, fragile SSH copy-pasting, and terrifying midnight releases that take sites down for hours.',
        unique: 'Automated CI/CD pipelines that test and deploy changes within 90 seconds with zero downtime for active users.',
      },
      {
        aspect: 'Server Reliability',
        legacy: 'Unmonitored shared hosting that crashes under minor traffic spikes with no automated recovery or alert triggers.',
        unique: 'Self-healing containerized architecture with PM2 / Docker auto-restart and instant Slack incident notifications.',
      },
      {
        aspect: 'Disaster Recovery',
        legacy: 'No verified database backups. A single hardware failure or cyber incident results in catastrophic data loss.',
        unique: 'Encrypted, automated daily snapshots stored in geographically redundant AWS S3 buckets with tested 1-click restore.',
      },
    ],
    timelineSteps: [
      { step: 'Phase 1', duration: 'Days 1–4', title: 'Infrastructure Audit & Dockerization', desc: 'Evaluating server loads, containerizing applications, and architecting the target cloud blueprint.' },
      { step: 'Phase 2', duration: 'Days 5–10', title: 'Cloud Provisioning & CI/CD Setup', desc: 'Configuring servers, Nginx, automated SSL, GitHub Actions pipelines, and database replication.' },
      { step: 'Phase 3', duration: 'Days 11–14', title: 'Zero-Downtime Migration & Handover', desc: 'Traffic cutover, load testing, monitoring verification, and full handover of server keys.' },
    ],
    tools: ['AWS', 'Docker', 'Nginx', 'GitHub Actions', 'Linux / Ubuntu', 'Cloudflare', 'Redis', 'PM2'],
    faqs: [
      {
        q: 'Can you migrate our live platform to AWS without any downtime for our customers?',
        a: 'Yes. We use a blue/green or staged DNS cutover approach. We replicate your database and verify the staging cloud before switching traffic, resulting in zero downtime and zero lost customer transactions.',
      },
      {
        q: 'Do you help optimize our monthly AWS or cloud hosting bill?',
        a: 'Absolutely. We regularly audit enterprise AWS setups to eliminate idle instances, implement proper CDN caching, optimize database tier sizing, and switch to reserved/spot instances, saving clients 30% to 50% on monthly bills.',
      },
      {
        q: 'Who owns the cloud accounts and infrastructure credentials?',
        a: 'You do, 100%. We provision everything inside your own AWS, GCP, or DigitalOcean account. You retain root ownership from day one, and we provide a documented master vault upon project completion.',
      },
    ],
  },
  {
    slug: 'seo-services',
    icon: 'search',
    title: 'Technical SEO & Web Vitals',
    tagline: 'Technical Search Architecture & Core Web Vitals Optimization for Top Rankings',
    short: 'Technical SEO, site-architecture optimization and Core Web Vitals engineering that help high-intent buyers find you first.',
    description: 'We deliver developer-grade technical SEO and Core Web Vitals optimization designed to dominate organic search rankings. Rather than empty keyword promises, our software engineers re-architect your site structure, fix crawl budget bloat, implement rich schema markup, and achieve green 95+ scores on Google Lighthouse.',
    metrics: [
      { value: '95+', label: 'Target Lighthouse Score' },
      { value: 'Sub-Second', label: 'First Contentful Paint' },
      { value: '100% Green', label: 'Core Web Vitals Pass' },
    ],
    capabilities: [
      'Comprehensive technical SEO architecture audit and deep crawl budget optimization',
      'Core Web Vitals optimization: Largest Contentful Paint (LCP), INP, and Cumulative Layout Shift (CLS)',
      'Structured JSON-LD schema markup implementation (Organization, Product, FAQ, Article, LocalBusiness)',
      'Canonicalization, robots.txt, XML sitemaps, and server-side redirect routing',
      'JavaScript rendering & server-side rendering (SSR) optimization for Googlebot indexability',
      'Competitor keyword gap analysis and high-intent commercial landing page architecture',
    ],
    modules: [
      {
        title: 'Core Web Vitals Engineering',
        desc: 'Eliminating render-blocking resources, tuning server response times, and optimizing image delivery via WebP/AVIF.',
      },
      {
        title: 'JSON-LD Semantic Schemas',
        desc: 'Injecting structured rich data so Google surfaces rich snippet stars, prices, and FAQ accordions directly in SERPs.',
      },
      {
        title: 'Crawl Architecture & Indexing',
        desc: 'Streamlining site hierarchy, eliminating pagination loops, and directing bot authority to revenue-driving URLs.',
      },
      {
        title: 'International & Local SEO',
        desc: 'Configuring hreflang multi-lingual tags and Google Business Profile optimization for regional dominance.',
      },
    ],
    deliverables: [
      'Full technical SEO audit report identifying all indexing, speed, and architecture defects',
      'Direct code-level fixes applied to your React, Next.js, or HTML/CSS codebase',
      'Lighthouse 95+ speed benchmark report showing before-and-after performance metrics',
      'Implemented JSON-LD structured data validated with Google Rich Results test',
      'Configured Google Search Console, Bing Webmaster, and automated sitemap sync',
      'Keyword mapping roadmap prioritizing high-intent commercial transactional terms',
    ],
    advantages: [
      {
        aspect: 'SEO Methodology',
        legacy: 'Non-technical marketers who write generic blog posts while your underlying website code is slow, bloated, and unindexable.',
        unique: 'Software engineers who fix server bottlenecks, JavaScript hydration issues, and schema markup directly inside your code.',
      },
      {
        aspect: 'Speed & Rankings',
        legacy: 'Sluggish 5-second mobile load times that trigger Google’s page experience penalty and tank your positions.',
        unique: 'Sub-second first contentful paint and 100% green Core Web Vitals that give your site a distinct ranking edge.',
      },
      {
        aspect: 'Traffic Quality',
        legacy: 'Vanity traffic from irrelevant informational keywords that generates zero qualified business leads or sales.',
        unique: 'Targeting commercial-intent keywords searched by ready-to-buy decision-makers for maximum conversion.',
      },
    ],
    timelineSteps: [
      { step: 'Phase 1', duration: 'Days 1–5', title: 'Deep Technical Crawl & Speed Audit', desc: 'Full Screaming Frog crawl, Google Search Console indexing review, and Lighthouse profiling.' },
      { step: 'Phase 2', duration: 'Days 6–14', title: 'Code-Level Fixes & Schema Injection', desc: 'Refactoring render-blocking assets, CDN optimization, and injecting rich JSON-LD data.' },
      { step: 'Phase 3', duration: 'Days 15–20', title: 'Verification & Search Console Re-index', desc: 'Submitting updated sitemaps to Google, verifying zero error status, and delivery report.' },
    ],
    tools: ['Google Search Console', 'Lighthouse', 'Screaming Frog', 'Schema.org', 'PageSpeed Insights', 'Ahrefs'],
    faqs: [
      {
        q: 'Why is technical SEO more important than just publishing blog posts?',
        a: 'If Googlebot cannot crawl your JavaScript, or if your Core Web Vitals are failing, Google will demote your pages regardless of your content quality. Technical SEO ensures your foundation is flawless so every page can rank.',
      },
      {
        q: 'Do your engineers actually write the code fixes or just give us a PDF checklist?',
        a: 'Unlike traditional SEO agencies that hand you a 40-page checklist of problems, our engineers directly open your Git repository and implement the technical code fixes ourselves.',
      },
      {
        q: 'How quickly do we see organic search improvements after technical fixes?',
        a: 'Once technical errors, slow server response times, and broken schemas are resolved, Google typically re-indexes pages within 2 to 4 weeks, with measurable keyword position gains following shortly.',
      },
    ],
  },
  {
    slug: 'digital-marketing',
    icon: 'megaphone',
    title: 'Digital Marketing & Growth Architecture',
    tagline: 'Data-Engineered Acquisition Funnels Converting Ad Spend into Predictable Revenue',
    short: 'We replace ad-hoc marketing campaigns with systematic acquisition funnels tracked end-to-end and tied to revenue.',
    description: 'We engineer high-ROI digital acquisition channels and full-funnel growth architecture. We blend paid search, precision display, conversion rate optimization (CRO), and advanced attribution analytics into a predictable customer acquisition machine that maximizes your customer lifetime value (LTV).',
    metrics: [
      { value: '3.8x', label: 'Average Client ROAS' },
      { value: '100%', label: 'Attribution Tracking' },
      { value: '< 24hr', label: 'Real-Time ROI Reporting' },
    ],
    capabilities: [
      'High-intent Google Search, Performance Max, and YouTube paid acquisition campaigns',
      'Advanced server-side tracking (Google Tag Manager Server Container, GA4, Meta CAPI)',
      'Conversion Rate Optimization (CRO) and landing page A/B testing architecture',
      'B2B LinkedIn lead generation funnels targeting enterprise decision-makers and CTOs',
      'Multi-touch attribution modeling to eliminate wasted ad spend across channels',
      'Automated email nurture sequences and retargeting workflows that recover lost prospects',
    ],
    modules: [
      {
        title: 'Full-Funnel Acquisition Strategy',
        desc: 'Structured campaigns matching customer intent across Top-of-Funnel (awareness) to Bottom-of-Funnel (checkout).',
      },
      {
        title: 'Server-Side Analytics & CAPI',
        desc: 'Bypassing ad-blockers and iOS privacy restrictions with server-to-server tracking for 100% accurate attribution.',
      },
      {
        title: 'High-Converting Landing Pages',
        desc: 'Fast, responsive Next.js landing pages with persuasive copywriting, social proof, and seamless lead capture.',
      },
      {
        title: 'Automated Retention & Email',
        desc: 'Automated email flows that re-engage past buyers, drive repeat sales, and maximize overall customer LTV.',
      },
    ],
    deliverables: [
      'Comprehensive digital growth strategy roadmap and competitor acquisition audit',
      'High-performance Next.js custom landing page built for maximum conversion',
      'Google Tag Manager and GA4 server-side analytics setup with verified conversion goals',
      'Google Ads & paid media campaign creation with ad copy, negative keyword lists, and bids',
      'Real-time automated Looker Studio performance dashboard tracking real revenue ROI',
      'Bi-weekly strategy reviews and campaign tuning sessions with senior growth leads',
    ],
    advantages: [
      {
        aspect: 'Accountability Metric',
        legacy: 'Focusing on vanity metrics like "impressions", "clicks", and "likes" while your bank account remains unchanged.',
        unique: 'Strictly evaluated on verified Cost Per Acquisition (CPA), Return on Ad Spend (ROAS), and actual cash revenue.',
      },
      {
        aspect: 'Tracking Accuracy',
        legacy: 'Client-side pixels losing 30-40% of conversion data due to Apple iOS updates and browser ad-blockers.',
        unique: 'Server-side Google Tag Manager and Conversions API ensuring 100% accurate attribution and lower ad costs.',
      },
      {
        aspect: 'Landing Page Execution',
        legacy: 'Sending paid traffic to a slow, generic homepage where users get confused and leave without converting.',
        unique: 'Dedicated, ultra-fast landing pages with persuasive value propositions and friction-free lead capture forms.',
      },
    ],
    timelineSteps: [
      { step: 'Phase 1', duration: 'Week 1', title: 'Attribution Setup & Competitor Audit', desc: 'Deploying server-side tracking, GTM container, GA4 conversion events, and creative testing strategy.' },
      { step: 'Phase 2', duration: 'Week 2', title: 'Landing Page Build & Campaign Launch', desc: 'Designing high-converting landing pages, writing ad copy, and launching structured ad campaigns.' },
      { step: 'Phase 3', duration: 'Ongoing', title: 'Attribution Tuning & Scaling', desc: 'Weekly negative keyword audits, creative A/B testing, and scaling budget into winning ad groups.' },
    ],
    tools: ['Google Ads', 'GA4', 'Tag Manager', 'Meta Ads', 'Looker Studio', 'LinkedIn Ads'],
    faqs: [
      {
        q: 'How do you measure success on our digital marketing campaigns?',
        a: 'We tie every dollar of spend directly to verified customer inquiries, pipeline value, and closed revenue. You receive an automated real-time Looker Studio dashboard showing exact CPA, ROAS, and conversions.',
      },
      {
        q: 'Do you design the landing pages as well or just run the ads?',
        a: 'We engineer the complete funnel. That includes building custom, sub-second landing pages with persuasive copywriting, clear CTAs, and frictionless lead capture forms to maximize your conversion rate.',
      },
    ],
  },
  {
    slug: 'meta-ads',
    icon: 'target',
    title: 'Meta Ads & Paid Social Growth',
    tagline: 'Precision Facebook & Instagram Advertising Funnels Backed by Conversions API',
    short: 'High-converting Facebook and Instagram ad campaigns built on proper Conversions API tracking and systematic creative testing.',
    description: 'We architect and manage scalable Meta (Facebook & Instagram) advertising campaigns. Leveraging server-side Meta Conversions API (CAPI), structured creative testing frameworks, dynamic retargeting, and click-to-WhatsApp funnels, we help direct-to-consumer (D2C) brands and B2B companies scale profitably.',
    metrics: [
      { value: '4.2x', label: 'Average Meta ROAS' },
      { value: '100% CAPI', label: 'Server-Side Event Match' },
      { value: '50% Lower', label: 'Lead Acquisition Cost' },
    ],
    capabilities: [
      'Full-funnel Meta advertising architecture: Cold Prospecting, Retargeting, and Retention',
      'Meta Conversions API (CAPI) server-side deployment for high event quality match scores',
      'Click-to-WhatsApp ad funnels that direct high-intent prospects straight into conversational bots',
      'Dynamic product catalog ads (DPA) for e-commerce stores with automated cross-selling',
      'High-velocity creative testing frameworks (Hooks, Visuals, Angles, and CTAs)',
      'Custom audience creation from CRM databases, email lists, and high-value customer lookalikes',
    ],
    modules: [
      {
        title: 'Server-Side Meta CAPI Pipeline',
        desc: 'Ensures 100% data passback to Meta’s algorithm, drastically improving AI bidding efficiency.',
      },
      {
        title: 'Creative Angle Lab',
        desc: 'Rapid testing of video reels, static carousels, and founder story angles to find profitable winners.',
      },
      {
        title: 'Click-to-WhatsApp Ad Funnels',
        desc: 'Bypassing clunky web forms by opening instant WhatsApp chats with pre-filled inquiries.',
      },
      {
        title: 'Audience & Lookalike Architecture',
        desc: 'Targeting high-net-worth buyers and existing customer lookalikes with segmented messaging.',
      },
    ],
    deliverables: [
      'Complete Meta Ads account structure with cold, warm, and hot campaign segmentation',
      'Server-side Meta Conversions API setup via Cloud / GTM for 9.0+ Event Quality Match',
      'High-converting static and motion ad creatives designed in Figma and After Effects',
      'Direct Click-to-WhatsApp campaign integration with automated greeting webhooks',
      'Custom Looker Studio reporting dashboard updated with daily ROAS and lead metrics',
      'Bi-weekly creative optimization cycles and scale strategies',
    ],
    advantages: [
      {
        aspect: 'Data Match Quality',
        legacy: 'Relying solely on outdated browser pixels that miss 35%+ of purchases due to iOS privacy restrictions.',
        unique: 'Direct server-to-server Conversions API passing encrypted phone, email, and IP for 9.0+ Meta match rates.',
      },
      {
        aspect: 'Creative Strategy',
        legacy: 'Running 1 or 2 static images for months until ad fatigue sets in and acquisition costs skyrocket.',
        unique: 'Continuous weekly creative testing testing different hooks, pain-points, and formats to sustain high ROAS.',
      },
      {
        aspect: 'Lead Conversion',
        legacy: 'Sending mobile users to slow web forms that take 30 seconds to fill out, losing 80% of prospects.',
        unique: 'Click-to-WhatsApp ad funnels opening immediate conversational chats that convert 3x higher.',
      },
    ],
    timelineSteps: [
      { step: 'Phase 1', duration: 'Week 1', title: 'CAPI Audit & Creative Sprint', desc: 'Implementing server-side CAPI, testing event triggers, and designing initial creative angles.' },
      { step: 'Phase 2', duration: 'Week 2', title: 'Campaign Launch & Hook Testing', desc: 'Deploying cold prospecting and Click-to-WhatsApp campaigns to identify winning ad creatives.' },
      { step: 'Phase 3', duration: 'Ongoing', title: 'Budget Scaling & Retargeting', desc: 'Scaling spend on verified winning ad sets and optimizing dynamic catalog retargeting.' },
    ],
    tools: ['Meta Ads Manager', 'Conversions API', 'Meta Pixel', 'WhatsApp Business', 'Figma', 'Looker Studio'],
    faqs: [
      {
        q: 'Why do we need Meta Conversions API (CAPI) in addition to the standard Pixel?',
        a: 'Browser-based pixels lose up to 40% of conversion data due to iOS restrictions, private browsers, and ad-blockers. Meta CAPI sends conversion events directly from your server to Meta, allowing Meta’s algorithm to optimize effectively.',
      },
      {
        q: 'How do Click-to-WhatsApp ads help our sales team?',
        a: 'When a customer taps your Facebook or Instagram ad, it immediately opens a WhatsApp conversation with your verified business number with a pre-filled message, allowing instant engagement and 3x higher close rates.',
      },
    ],
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
    scopeBadge: 'Tailored MVP Milestone',
    scopeDetail: 'Custom estimate based on feature requirements',
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
    cta: 'Discuss MVP Scope & Quote',
  },
  {
    id: 'growth',
    name: 'Growth & Custom Web / App',
    badge: 'Most Popular',
    popular: true,
    tagline: 'Full-stack software platform engineered for high concurrency, automated workflows, and commercial scale.',
    timeline: '6 to 8 Weeks Delivery',
    scopeBadge: 'Custom Architecture Scope',
    scopeDetail: 'Phased 30/40/30 milestone billing & verified deliverables',
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
    cta: 'Discuss Growth Scope & Quote',
  },
  {
    id: 'enterprise',
    name: 'Enterprise & Systems',
    badge: 'Full Digital Transformation',
    popular: false,
    tagline: 'Custom ERP, CRM, high-volume reseller engines, and cloud microservices built for demanding enterprise workloads.',
    timeline: 'Custom Milestone Roadmap',
    scopeBadge: 'Dedicated Architecture Scope',
    scopeDetail: 'Tailored enterprise specifications & strict 99.9% SLA',
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
    scopeBadge: 'Active Maintenance Scope',
    scopeDetail: 'Monthly engineering coverage · Cancel anytime',
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
    scopeBadge: 'Dedicated Senior Talent',
    scopeDetail: 'Embedded engineer in your team & sprint rituals',
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
    scopeBadge: 'Complete Engineering Squad',
    scopeDetail: 'Autonomous cross-functional delivery team',
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
    scopeBadge: 'Custom Add-On Sprint',
    desc: 'Official WhatsApp Business Cloud API setup, template message verification, webhook handlers, and automated lead capture workflows.',
  },
  {
    title: 'Core Web Vitals & Technical SEO Overhaul',
    tag: 'Performance Sprint',
    scopeBadge: 'Custom Add-On Sprint',
    desc: 'Full Lighthouse 95+ score optimization, server-side caching, image CDN optimization, and structured schema markup for top search ranks.',
  },
  {
    title: 'AWS Cloud DevOps & Security Hardening',
    tag: 'Infrastructure',
    scopeBadge: 'Custom Add-On Sprint',
    desc: 'Docker container setup, Nginx reverse proxy, SSL, automated CI/CD pipeline, DDoS mitigation, and scheduled database backups.',
  },
  {
    title: 'Cross-Platform Mobile App Extension',
    tag: 'Mobile Add-on',
    scopeBadge: 'Custom Add-On Sprint',
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
    q: 'Why do you provide custom milestone quotes instead of arbitrary fixed prices?',
    a: 'Every digital product is unique in its architecture, integration complexity, and concurrency requirements. Arbitrary flat prices either lead to low-quality outsourced code or inflated costs. We audit your exact specifications to give you a transparent, custom milestone proposal with zero hidden fees.',
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

