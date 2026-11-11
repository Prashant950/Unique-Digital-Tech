import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Check,
  Rocket,
  Shield,
  HelpCircle,
  ArrowRight,
  Sparkles,
  Zap,
  Clock,
  ChevronDown,
  Layers,
  Code2,
  FileCheck,
  Calculator,
  MessageSquare,
} from 'lucide-react';
import Button from '../components/ui/Button';
import SectionHeading from '../components/ui/SectionHeading';
import WhatsAppIcon from '../components/ui/WhatsAppIcon';
import BorderBeam from '../components/ui/BorderBeam';
import CyberBackground from '../components/ui/CyberBackground';
import SEO from '../components/ui/SEO';
import {
  company,
  pricingPlans,
  retainerPlans,
  pricingAddons,
  pricingFaqs,
} from '../data/site';

export default function Pricing() {
  const [billingModel, setBillingModel] = useState('project'); // 'project' or 'retainer'
  const [openFaq, setOpenFaq] = useState(0);

  // Pricing & Scoping Schema with Breadcrumbs and FAQPage
  const pricingSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': 'https://uniquedigitaltech.com/pricing#webpage',
    url: 'https://uniquedigitaltech.com/pricing',
    name: 'Transparent Milestones & Custom Scoping | Unique Digital Tech',
    description:
      'Predictable milestone-based engineering with zero cost overruns. Custom scope estimation for web platforms, mobile apps, SaaS, and cloud infrastructure.',
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://uniquedigitaltech.com',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Pricing & Scoping',
          item: 'https://uniquedigitaltech.com/pricing',
        },
      ],
    },
    mainEntity: {
      '@type': 'FAQPage',
      mainEntity: pricingFaqs.map((faq) => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.a,
        },
      })),
    },
  };

  // Interactive Scope Estimator State
  const [calcService, setCalcService] = useState('Web Platform & SaaS');
  const [calcStage, setCalcStage] = useState('Greenfield MVP (0 to 1)');
  const [calcSpeed, setCalcSpeed] = useState('Standard Sprint (4-6 Wks)');

  const estimatorServices = [
    { id: 'web', name: 'Web Platform & SaaS', icon: 'Code2', desc: 'Next.js, React, Node.js, PostgreSQL' },
    { id: 'mobile', name: 'iOS & Android Mobile App', icon: 'Layers', desc: 'React Native, Offline sync, Push alerts' },
    { id: 'cloud', name: 'Cloud & DevOps Architecture', icon: 'Zap', desc: 'AWS ECS, Docker, CI/CD, Microservices' },
    { id: 'crm', name: 'Custom ERP / CRM System', icon: 'FileCheck', desc: 'High concurrency, automated pipelines' },
  ];

  const estimatorStages = [
    { id: 'mvp', name: 'Greenfield MVP (0 to 1)', tag: 'Fast-Track Launch' },
    { id: 'scale', name: 'Scaling Existing Product', tag: 'High Velocity' },
    { id: 'modernize', name: 'Legacy System Modernization', tag: 'Enterprise Refactor' },
  ];

  const estimatorVelocities = [
    { id: 'fast', name: 'Accelerated Sprint', period: '3–4 Weeks' },
    { id: 'standard', name: 'Production Sprint', period: '6–8 Weeks' },
    { id: 'enterprise', name: 'Enterprise Roadmap', period: 'Phased Milestones' },
  ];

  return (
    <>
      <SEO
        title="Predictable Milestones & Custom Scoping"
        description="Predictable milestone-based engineering with zero cost overruns. Custom scope estimation for web platforms, mobile apps, SaaS, and cloud infrastructure."
        keywords="software development pricing, milestone scoping, web app cost, dedicated developer retainer, custom software development cost"
        schema={pricingSchema}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-24 lg:pt-44 lg:pb-32 flex flex-col justify-center border-b border-white/10">
        <CyberBackground />

        <div className="container-x relative text-center max-w-4xl z-10">
          {/* Availability Pill */}
          <h1 className="rise-2 text-2xl font-extrabold leading-[1.18] sm:text-4xl lg:text-[2.75rem] text-white">
            Predictable Milestones. Zero Hidden Costs. <br className="hidden sm:block" />
            <span className="text-gradient">Production-Grade Architecture.</span>
          </h1>

          <p className="rise-3 mx-auto mt-4 max-w-2xl text-xs leading-relaxed text-slate-300 sm:text-sm md:text-base">
            Every digital product has unique architecture, concurrency, and security requirements. We provide tailored milestone-based scopes with guaranteed deliverables and 100% IP handover from day one.
          </p>

          {/* Core Guarantees Pill Bar - Clean responsive wrap */}
          <div className="rise-3 mt-7 flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm text-slate-300">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-ink-900/80 px-3.5 py-1.5 backdrop-blur shadow-sm">
              <Shield className="h-4 w-4 text-emerald-400" />
              100% Code &amp; IP Ownership
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-ink-900/80 px-3.5 py-1.5 backdrop-blur shadow-sm">
              <Zap className="h-4 w-4 text-amber-400" />
              30/40/30 Milestone Billing
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-ink-900/80 px-3.5 py-1.5 backdrop-blur shadow-sm">
              <Clock className="h-4 w-4 text-brand-400" />
              30–90 Day Post-Launch SLA
            </span>
          </div>

          {/* Mobile-Optimized Engagement Model Selector Bar */}
          <div className="rise-3 mt-9 max-w-xl mx-auto w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 p-1.5 rounded-2xl border border-white/15 bg-ink-900/95 shadow-2xl backdrop-blur-xl">
              <button
                type="button"
                onClick={() => setBillingModel('project')}
                className={`group flex items-center justify-center gap-2.5 rounded-xl px-4 py-3.5 sm:py-3 text-xs sm:text-sm font-bold transition-all duration-300 ${
                  billingModel === 'project'
                    ? 'bg-gradient-to-r from-brand-500 to-brand-blue text-white shadow-lg shadow-brand-500/30 scale-[1.01]'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <Rocket className="h-4 w-4 shrink-0 text-white" />
                <span className="truncate">Turnkey Milestone Projects</span>
              </button>

              <button
                type="button"
                onClick={() => setBillingModel('retainer')}
                className={`group flex items-center justify-center gap-2.5 rounded-xl px-4 py-3.5 sm:py-3 text-xs sm:text-sm font-bold transition-all duration-300 ${
                  billingModel === 'retainer'
                    ? 'bg-gradient-to-r from-brand-500 to-brand-blue text-white shadow-lg shadow-brand-500/30 scale-[1.01]'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <Zap className="h-4 w-4 shrink-0 text-white" />
                <span className="truncate">Dedicated Engineering Squads</span>
              </button>
            </div>
            <p className="mt-2.5 text-center text-[11px] sm:text-xs text-slate-400">
              {billingModel === 'project'
                ? '⚡ Fixed milestone roadmap with guaranteed delivery and zero cost overruns.'
                : '⚡ Embed vetted senior full-stack developers or autonomous sprint squads directly into your repo.'}
            </p>
          </div>
        </div>
      </section>

      {/* Engagement Packages Section (No Price Rates - Fully Contact & Custom Scoping Focused) */}
      <section className="section py-16 sm:py-24 relative">
        <div className="container-x">
          {billingModel === 'project' ? (
            /* Fixed-Scope Turnkey Project Packages */
            <div>
              <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
                <span className="inline-block rounded-full bg-brand-500/10 border border-brand-500/20 px-3.5 py-1 text-xs font-semibold text-brand-300 mb-3">
                  TURNKEY PRODUCT SCOPES
                </span>
                <h2 className="text-2xl font-bold sm:text-4xl text-white">
                  Engineering Delivery Tiers
                </h2>
                <p className="mt-2 text-sm text-slate-400">
                  Every scope includes transparent milestones, private staging previews, comprehensive testing, and complete IP transfer.
                </p>
              </div>

              <div className="grid gap-8 lg:grid-cols-3 items-stretch">
                {pricingPlans.map((plan) => {
                  const isPopular = plan.popular;
                  return (
                    <div
                      key={plan.id}
                      className={`relative flex flex-col justify-between rounded-3xl border p-6 sm:p-8 backdrop-blur transition-all duration-300 ${
                        isPopular
                          ? 'border-brand-500/70 bg-gradient-to-b from-ink-850 via-ink-900 to-ink-950 shadow-[0_0_40px_rgba(14,165,233,0.22)] lg:-translate-y-2'
                          : 'border-white/10 bg-ink-900/75 hover:border-white/20 hover:bg-ink-900'
                      }`}
                    >
                      {/* Popular Badge */}
                      {isPopular && (
                        <>
                          <BorderBeam duration={7} color="#38bdf8" rx={24} />
                          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-brand-500 to-brand-blue px-4 py-1 text-xs font-extrabold uppercase tracking-wider text-white shadow-lg shadow-brand-500/40 z-20">
                            {plan.badge}
                          </div>
                        </>
                      )}

                      <div>
                        {/* Plan Header */}
                        <div className="flex items-center justify-between">
                          <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                          {!isPopular && (
                            <span className="rounded-full bg-white/5 border border-white/10 px-3 py-0.5 text-xs font-medium text-slate-300">
                              {plan.badge}
                            </span>
                          )}
                        </div>

                        <p className="mt-3 text-xs leading-relaxed text-slate-400 min-h-[36px]">
                          {plan.tagline}
                        </p>

                        {/* Attractive Custom Milestone Pricing Banner (No Hardcoded Price) */}
                        <div className="mt-6 rounded-2xl border border-brand-500/30 bg-gradient-to-br from-brand-500/10 via-ink-900/60 to-ink-950/80 p-4 sm:p-5">
                          <div className="flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-brand-400 animate-ping" />
                            <span className="text-xs font-bold uppercase tracking-wider text-brand-300">
                              {plan.scopeBadge || 'Custom Milestone Scope'}
                            </span>
                          </div>
                          <div className="mt-2 text-xl sm:text-2xl font-black text-white tracking-tight">
                            Tailored Project Scope
                          </div>
                          <p className="mt-1 text-xs text-slate-300 font-medium">
                            {plan.scopeDetail || 'Fixed milestone contract · Zero surprise costs'}
                          </p>

                          <div className="mt-3.5 inline-flex items-center gap-1.5 rounded-lg bg-black/40 border border-white/10 px-2.5 py-1 text-xs text-brand-300">
                            <Clock className="h-3.5 w-3.5 text-brand-400" />
                            <span>Estimated: {plan.timeline}</span>
                          </div>
                        </div>

                        {/* Feature Highlights */}
                        <div className="mt-6 space-y-3">
                          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                            What's Included:
                          </p>
                          <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                            {plan.features.map((feat, idx) => (
                              <li key={idx} className="flex items-start gap-2.5">
                                <Check className="h-4 w-4 shrink-0 text-emerald-400 mt-0.5" />
                                <span>{feat}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Card CTAs - Contact Oriented */}
                      <div className="mt-8 pt-6 border-t border-white/10 space-y-2.5">
                        <Button
                          to={`/contact?service=${encodeURIComponent(plan.name)}`}
                          variant={isPopular ? 'primary' : 'secondary'}
                          className="w-full justify-center group shadow-md py-3.5"
                        >
                          <span>{plan.cta}</span>
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>

                        <a
                          href={`https://wa.me/${company.whatsapp}?text=Hi%20Unique%20Digital%20Tech%2C%20I%20would%20like%20to%20discuss%20the%20${encodeURIComponent(
                            plan.name
                          )}%20scope%20and%20get%20an%20estimate.`}
                          target="_blank"
                          rel="noreferrer"
                          className="flex w-full items-center justify-center gap-2 rounded-xl bg-white/5 border border-white/10 px-4 py-2.5 text-xs font-semibold text-slate-200 transition hover:bg-white/10 hover:text-white"
                        >
                          <WhatsAppIcon className="h-3.5 w-3.5 fill-[#25D366]" />
                          <span>Chat on WhatsApp for Fast Quote</span>
                        </a>

                        <p className="mt-1 text-center text-[11px] text-slate-500">
                          Includes NDA &amp; 100% IP Handover
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            /* Dedicated Engineering Retainers */
            <div>
              <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
                <span className="inline-block rounded-full bg-brand-500/10 border border-brand-500/20 px-3.5 py-1 text-xs font-semibold text-brand-300 mb-3">
                  EMBEDDED TALENT &amp; SQUADS
                </span>
                <h2 className="text-2xl font-bold sm:text-4xl text-white">
                  Dedicated Engineering Retainers
                </h2>
                <p className="mt-2 text-sm text-slate-400">
                  Embed vetted senior software engineers or a complete autonomous squad directly into your product workflow. Monthly flexibility with no long-term lock-in.
                </p>
              </div>

              <div className="grid gap-8 lg:grid-cols-3 items-stretch">
                {retainerPlans.map((plan) => {
                  const isPopular = plan.popular;
                  return (
                    <div
                      key={plan.id}
                      className={`relative flex flex-col justify-between rounded-3xl border p-6 sm:p-8 backdrop-blur transition-all duration-300 ${
                        isPopular
                          ? 'border-brand-500/70 bg-gradient-to-b from-ink-850 via-ink-900 to-ink-950 shadow-[0_0_40px_rgba(14,165,233,0.22)] lg:-translate-y-2'
                          : 'border-white/10 bg-ink-900/75 hover:border-white/20'
                      }`}
                    >
                      {isPopular && (
                        <>
                          <BorderBeam duration={7} color="#38bdf8" rx={24} />
                          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-brand-500 to-brand-blue px-4 py-1 text-xs font-extrabold uppercase tracking-wider text-white shadow-lg shadow-brand-500/40 z-20">
                            Recommended
                          </div>
                        </>
                      )}

                      <div>
                        <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                        <div className="mt-2 inline-block rounded-lg bg-brand-500/10 border border-brand-500/20 px-2.5 py-0.5 text-xs font-semibold text-brand-300">
                          {plan.hours}
                        </div>

                        <p className="mt-3 text-xs leading-relaxed text-slate-400">
                          {plan.desc}
                        </p>

                        {/* Retainer Scope Banner (No Hardcoded Price) */}
                        <div className="mt-6 rounded-2xl border border-brand-500/30 bg-gradient-to-br from-brand-500/10 via-ink-900/60 to-ink-950/80 p-4 sm:p-5">
                          <span className="text-xs font-bold uppercase tracking-wider text-brand-300">
                            {plan.scopeBadge || 'Dedicated Monthly Engagement'}
                          </span>
                          <div className="mt-1 text-xl sm:text-2xl font-black text-white">
                            Flexible Monthly Retainer
                          </div>
                          <p className="mt-1 text-xs text-slate-300">
                            {plan.scopeDetail || 'Full dedication · 2 weeks cancellation notice'}
                          </p>
                        </div>

                        <div className="mt-6 space-y-3">
                          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                            Deliverables &amp; Workflow:
                          </p>
                          <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                            {plan.deliverables.map((item, idx) => (
                              <li key={idx} className="flex items-start gap-2.5">
                                <Check className="h-4 w-4 shrink-0 text-emerald-400 mt-0.5" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="mt-8 pt-6 border-t border-white/10 space-y-2.5">
                        <Button
                          to={`/contact?service=${encodeURIComponent(plan.name)}`}
                          variant={isPopular ? 'primary' : 'secondary'}
                          className="w-full justify-center group shadow-md py-3.5"
                        >
                          <span>Engage Dedicated Talent</span>
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>

                        <a
                          href={`https://wa.me/${company.whatsapp}?text=Hi%20Unique%20Digital%20Tech%2C%20I%20am%20interested%20in%20the%20${encodeURIComponent(
                            plan.name
                          )}%20retainer.`}
                          target="_blank"
                          rel="noreferrer"
                          className="flex w-full items-center justify-center gap-2 rounded-xl bg-white/5 border border-white/10 px-4 py-2.5 text-xs font-semibold text-slate-200 transition hover:bg-white/10 hover:text-white"
                        >
                          <WhatsAppIcon className="h-3.5 w-3.5 fill-[#25D366]" />
                          <span>Chat on WhatsApp</span>
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Unique & Attractive Custom Project Scope Estimator Widget */}
      <section className="section py-16 sm:py-24 bg-ink-900/60 border-y border-white/10 relative overflow-hidden">
        <div className="pointer-events-none absolute -top-40 right-10 h-96 w-96 rounded-full bg-brand-500/10 blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-40 left-10 h-96 w-96 rounded-full bg-brand-blue/10 blur-[120px]" />

        <div className="container-x relative z-10 max-w-5xl">
          <div className="text-center mb-12 sm:mb-16">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-4 py-1.5 text-xs font-bold text-brand-300 mb-3">
              <Calculator className="h-3.5 w-3.5 text-brand-400" />
              INTERACTIVE SCOPE ESTIMATOR
            </span>
            <h2 className="text-3xl font-extrabold sm:text-4xl text-white">
              Configure Your Custom Architecture Scope
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
              Select your product requirements below to see an instant architecture blueprint and connect directly with our solutions team for a milestone quote.
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-12 items-start">
            {/* Left Controls (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              {/* Step 1: Select Platform */}
              <div className="rounded-2xl border border-white/10 bg-ink-950/80 p-5 sm:p-6 shadow-xl backdrop-blur">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-400">Step 1: Core Platform</span>
                  <span className="text-[11px] text-slate-400 font-medium">Select primary build target</span>
                </div>
                <div className="grid gap-3 sm:grid-cols-2">
                  {estimatorServices.map((srv) => (
                    <button
                      key={srv.id}
                      type="button"
                      onClick={() => setCalcService(srv.name)}
                      className={`text-left p-3.5 rounded-xl border transition-all duration-200 ${
                        calcService === srv.name
                          ? 'border-brand-500 bg-brand-500/15 shadow-md shadow-brand-500/15'
                          : 'border-white/10 bg-ink-900/60 hover:border-white/20'
                      }`}
                    >
                      <div className="font-bold text-sm text-white">{srv.name}</div>
                      <div className="text-xs text-slate-400 mt-1">{srv.desc}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Select Stage */}
              <div className="rounded-2xl border border-white/10 bg-ink-950/80 p-5 sm:p-6 shadow-xl backdrop-blur">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-400">Step 2: Project Phase</span>
                  <span className="text-[11px] text-slate-400 font-medium">Current codebase status</span>
                </div>
                <div className="grid gap-2.5 sm:grid-cols-3">
                  {estimatorStages.map((stg) => (
                    <button
                      key={stg.id}
                      type="button"
                      onClick={() => setCalcStage(stg.name)}
                      className={`text-left p-3 rounded-xl border transition-all duration-200 ${
                        calcStage === stg.name
                          ? 'border-brand-500 bg-brand-500/15 shadow-md shadow-brand-500/15'
                          : 'border-white/10 bg-ink-900/60 hover:border-white/20'
                      }`}
                    >
                      <div className="font-bold text-xs text-white leading-snug">{stg.name}</div>
                      <span className="mt-1 inline-block text-[10px] text-brand-300 font-semibold">{stg.tag}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 3: Select Velocity */}
              <div className="rounded-2xl border border-white/10 bg-ink-950/80 p-5 sm:p-6 shadow-xl backdrop-blur">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-400">Step 3: Target Velocity</span>
                  <span className="text-[11px] text-slate-400 font-medium">Desired delivery timeline</span>
                </div>
                <div className="grid gap-2.5 sm:grid-cols-3">
                  {estimatorVelocities.map((vel) => (
                    <button
                      key={vel.id}
                      type="button"
                      onClick={() => setCalcSpeed(vel.name)}
                      className={`text-left p-3 rounded-xl border transition-all duration-200 ${
                        calcSpeed === vel.name
                          ? 'border-brand-500 bg-brand-500/15 shadow-md shadow-brand-500/15'
                          : 'border-white/10 bg-ink-900/60 hover:border-white/20'
                      }`}
                    >
                      <div className="font-bold text-xs text-white">{vel.name}</div>
                      <div className="text-[11px] text-slate-300 mt-1 font-medium">{vel.period}</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Summary Card (5 Cols) */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl border border-brand-500/40 bg-gradient-to-b from-ink-900 via-ink-950 to-ink-900 p-6 sm:p-8 shadow-2xl relative overflow-hidden">
                <BorderBeam duration={9} color="#38bdf8" rx={24} />

                <div className="flex items-center gap-2 mb-4">
                  <MessageSquare className="h-5 w-5 text-brand-400" />
                  <h3 className="text-lg font-bold text-white">Your Custom Scope Blueprint</h3>
                </div>

                <div className="space-y-4 text-xs text-slate-300">
                  <div className="rounded-xl border border-white/10 bg-black/40 p-3.5 space-y-2">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Architecture:</span>
                      <span className="font-bold text-white text-right">{calcService}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Starting Phase:</span>
                      <span className="font-bold text-brand-300 text-right">{calcStage}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Delivery Velocity:</span>
                      <span className="font-bold text-white text-right">{calcSpeed}</span>
                    </div>
                  </div>

                  <div className="space-y-2 pt-1">
                    <div className="text-xs font-bold text-slate-200 uppercase tracking-wider">
                      Included Commitments:
                    </div>
                    <div className="flex items-center gap-2 text-slate-300">
                      <Check className="h-4 w-4 text-emerald-400 shrink-0" />
                      <span>100% Full IP &amp; Git Repository Ownership</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-300">
                      <Check className="h-4 w-4 text-emerald-400 shrink-0" />
                      <span>30/40/30 Milestone Billing Schedule</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-300">
                      <Check className="h-4 w-4 text-emerald-400 shrink-0" />
                      <span>Mutual NDA Signed Prior to Architecture Discovery</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-300">
                      <Check className="h-4 w-4 text-emerald-400 shrink-0" />
                      <span>Dedicated Post-Launch Bug Warranty &amp; SLA</span>
                    </div>
                  </div>
                </div>

                {/* Direct Action Buttons from Estimator */}
                <div className="mt-8 pt-5 border-t border-white/10 space-y-3">
                  <Button
                    to={`/contact?service=${encodeURIComponent(calcService)}&notes=${encodeURIComponent(
                      `Estimated scope: ${calcService} (${calcStage}) with ${calcSpeed} timeline.`
                    )}`}
                    className="w-full justify-center py-4 text-sm font-bold shadow-lg shadow-brand-500/30"
                  >
                    <span>Request Custom Scope Proposal</span>
                    <ArrowRight className="h-4 w-4 ml-1.5" />
                  </Button>

                  <a
                    href={`https://wa.me/${company.whatsapp}?text=Hi%20Unique%20Digital%20Tech%2C%20I%20configured%20a%20scope%20on%20your%20website%3A%20${encodeURIComponent(
                      `${calcService} | ${calcStage} | ${calcSpeed}`
                    )}.%20Can%20we%20discuss%20a%20quote%3F`}
                    target="_blank"
                    rel="noreferrer"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-4 py-3 text-xs font-bold text-white shadow-md shadow-[#25D366]/20 transition hover:bg-[#20ba59]"
                  >
                    <WhatsAppIcon className="h-4 w-4 fill-white" />
                    <span>Send Scope on WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Engineering Add-Ons (No Price Rates - Fully Scope Based) */}
      <section className="section bg-ink-900/40 border-y border-white/5 py-16 sm:py-20">
        <div className="container-x">
          <SectionHeading
            title="Specialized Engineering Sprints &amp; Add-ons"
            text="Need standalone micro-deliverables or infrastructure hardening? Bolt these high-impact sprints onto any project."
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pricingAddons.map((addon, idx) => (
              <div
                key={idx}
                className="card p-6 flex flex-col justify-between hover:border-brand-500/40 transition-all duration-300"
              >
                <div>
                  <span className="inline-block rounded-full bg-brand-500/10 border border-brand-500/20 px-2.5 py-0.5 text-[11px] font-semibold text-brand-300">
                    {addon.tag}
                  </span>
                  <h3 className="text-base font-bold text-white mt-3">{addon.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-400">{addon.desc}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-xs font-bold text-brand-300">
                    {addon.scopeBadge || 'Milestone Sprint'}
                  </span>
                  <a
                    href={`https://wa.me/${company.whatsapp}?text=Hi%20Unique%20Digital%20Tech%2C%20I%20am%20interested%20in%20adding%20the%20${encodeURIComponent(
                      addon.title
                    )}%20add-on%20to%20my%20scope.`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-semibold text-brand-400 hover:text-brand-300 flex items-center gap-1 group"
                  >
                    <span>Add to scope</span>
                    <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestone Billing Blueprint (How We Scope & Bill) */}
      <section className="section py-16 sm:py-20">
        <div className="container-x">
          <SectionHeading
            title="The 3-Step Milestone Guarantee"
            text="How our milestone billing ensures you never pay for unverified code or broken promises."
          />

          <div className="grid gap-6 sm:grid-cols-3">
            {[
              {
                step: '30%',
                title: 'Phase 1: Architecture Blueprint & Kickoff',
                desc: 'Covers database schema design, Figma design system, API contract specifications, and Git repository setup.',
              },
              {
                step: '40%',
                title: 'Phase 2: Interactive Staging Demo',
                desc: 'Demonstration of functional frontend, backend REST/WebSocket APIs, database operations, and user auth on private staging.',
              },
              {
                step: '30%',
                title: 'Phase 3: Production Release & IP Handover',
                desc: 'Full security audit, AWS/Vercel production release, post-launch testing, and 100% transfer of code repository and keys.',
              },
            ].map((m, idx) => (
              <div key={idx} className="card p-6 border-white/10 relative">
                <span className="text-3xl font-black text-brand-400">{m.step}</span>
                <h4 className="text-base font-bold text-white mt-2">{m.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed mt-2">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing FAQs */}
      <section className="section bg-ink-900/40 border-t border-white/5 py-16 sm:py-20">
        <div className="container-x max-w-4xl">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-500/30 bg-brand-500/10 px-3.5 py-1 text-xs font-semibold text-brand-300 mb-3">
              <HelpCircle className="h-3.5 w-3.5" />
              COMMERCIAL TRANSPARENCY
            </span>
            <h2 className="text-3xl font-extrabold sm:text-4xl text-white">
              Frequently Asked <span className="text-gradient">Scoping &amp; Pricing Questions</span>
            </h2>
          </div>

          <div className="space-y-3">
            {pricingFaqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-white/10 bg-ink-900/80 transition-all duration-200 overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                    className="flex w-full items-center justify-between p-5 text-left text-sm sm:text-base font-semibold text-white hover:text-brand-300 transition"
                    aria-expanded={isOpen}
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-brand-400 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-sm leading-relaxed text-slate-300 border-t border-white/5 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Bottom CTA Banner */}
      <section className="section py-16">
        <div className="container-x">
          <div className="relative overflow-hidden rounded-3xl border border-brand-500/30 bg-gradient-to-br from-ink-850 via-ink-900 to-ink-950 px-6 py-14 text-center sm:px-14 shadow-2xl">
            <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-72 w-96 rounded-full bg-brand-500/20 blur-3xl" />
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Have a custom RFP or complex technical requirements?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-300 text-sm sm:text-base">
              Send us your specification document or book a confidential architecture consultation with our engineering directors.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
              <Button to="/contact" className="w-full sm:w-auto shadow-lg shadow-brand-500/25">
                <Rocket className="h-4 w-4" />
                Schedule Architecture Review
              </Button>
              <a
                href={`https://wa.me/${company.whatsapp}?text=Hi%20Unique%20Digital%20Tech%2C%20I%20have%20a%20project%20and%20want%20to%20discuss%20pricing%20and%20timeline.`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-[#25D366]/30 transition hover:bg-[#20ba59] sm:w-auto"
              >
                <WhatsAppIcon className="h-4 w-4 fill-white" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}