import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Code2,
  Smartphone,
  Globe,
  Database,
  Megaphone,
  Search,
  Cloud,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Zap,
  Lock,
  Layers,
  HeartHandshake,
  Clock,
  Rocket,
} from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import SectionHeading from '../components/ui/SectionHeading';
import Process from '../components/sections/Process';
import CtaBanner from '../components/sections/CtaBanner';
import Button from '../components/ui/Button';
import Icon from '../components/ui/Icon';
import WhatsAppIcon from '../components/ui/WhatsAppIcon';
import { services, company } from '../data/site';

export default function Services() {
  const [selectedFilter, setSelectedFilter] = useState('All');

  const filterTabs = ['All', 'Web & SaaS', 'Mobile Apps', 'Automation & CRM', 'Cloud & Marketing'];

  const filteredServices = services.filter((s) => {
    if (selectedFilter === 'All') return true;
    if (selectedFilter === 'Web & SaaS') return s.slug.includes('website') || s.slug.includes('crm');
    if (selectedFilter === 'Mobile Apps') return s.slug.includes('mobile');
    if (selectedFilter === 'Automation & CRM') return s.slug.includes('whatsapp') || s.slug.includes('crm');
    if (selectedFilter === 'Cloud & Marketing') return s.slug.includes('cloud') || s.slug.includes('marketing') || s.slug.includes('seo') || s.slug.includes('meta');
    return true;
  });

  const standards = [
    {
      icon: Lock,
      title: '100% Code & IP Handover',
      desc: 'Complete transfer of Git repositories, database schemas, and cloud deployment keys upon milestone completion.',
    },
    {
      icon: ShieldCheck,
      title: 'Complimentary SLA Warranty',
      desc: '30 to 90 days of dedicated post-launch bug fixes, server monitoring, and performance tuning included in every contract.',
    },
    {
      icon: Layers,
      title: 'Automated CI/CD & Docker',
      desc: 'Every project is containerized with automated deployment pipelines for reliable zero-downtime releases.',
    },
    {
      icon: HeartHandshake,
      title: 'Direct Engineer Channel',
      desc: 'No non-technical layers. Direct collaboration with the senior solutions architects building your system.',
    },
  ];

  const models = [
    {
      tag: 'Turnkey Delivery',
      title: 'Fixed-Scope Projects',
      desc: 'Ideal for ground-up MVPs, SaaS platforms, and enterprise rewrites with defined milestones (30% / 40% / 30%).',
      features: ['Fixed budget & locked delivery date', 'Figma design system to production launch', '30–90 days post-launch warranty'],
      link: '/pricing',
      cta: 'View Fixed Packages',
    },
    {
      tag: 'Velocity & Scaling',
      title: 'Dedicated Monthly Retainers',
      desc: 'Embed senior full-stack developers or an autonomous cross-functional engineering pod directly into your team.',
      features: ['40 to 160 hours / month allocation', 'Direct participation in daily standups', 'Flexible month-to-month agreement'],
      link: '/pricing',
      cta: 'Explore Retainers',
    },
    {
      tag: 'Focused Sprints',
      title: 'Modernization & Audits',
      desc: 'Targeted architectural audits, Core Web Vitals speed optimization, AWS hardening, and WhatsApp API integrations.',
      features: ['Rapid 1 to 2 week execution', 'Zero-downtime migration & tuning', 'Measurable Lighthouse & uptime gains'],
      link: '/contact',
      cta: 'Request Technical Audit',
    },
  ];

  return (
    <>
      <PageHero
        title="Full-lifecycle engineering built for commercial scale."
        text="Custom Next.js platforms, cross-platform mobile apps, official WhatsApp Cloud API integrations, and multi-region cloud architectures — delivered by one accountable engineering team."
      >
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-slate-300">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3.5 py-1">
            <CheckCircle2 className="h-3.5 w-3.5 text-brand-400" />
            8 Core Technical Domains
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3.5 py-1">
            <Zap className="h-3.5 w-3.5 text-amber-400" />
            99.9% Production Uptime SLA
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3.5 py-1">
            <Lock className="h-3.5 w-3.5 text-emerald-400" />
            100% Source Code Ownership
          </span>
        </div>
      </PageHero>

      {/* Main Interactive Services Grid */}
      <section className="section py-12 sm:py-16">
        <div className="container-x">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row mb-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-400">
                CAPABILITIES CATALOGUE
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
                Explore our engineering services
              </h2>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-1.5 rounded-2xl border border-white/10 bg-ink-900/80 p-1 backdrop-blur">
              {filterTabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setSelectedFilter(tab)}
                  className={`rounded-xl px-3.5 py-1.5 text-xs font-semibold transition-all ${
                    selectedFilter === tab
                      ? 'bg-gradient-to-r from-brand-500 to-brand-blue text-white shadow-md shadow-brand-500/25'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredServices.map((s) => (
              <div
                key={s.slug}
                className="group relative flex flex-col justify-between rounded-3xl border border-white/10 bg-gradient-to-b from-ink-900/80 to-ink-950/80 p-6 sm:p-7 backdrop-blur transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-400/50 hover:bg-ink-900 hover:shadow-[0_12px_35px_rgba(14,165,233,0.18)]"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-500/10 text-brand-400 border border-brand-500/20 group-hover:scale-110 group-hover:bg-brand-500/20 transition-all duration-300">
                      <Icon name={s.icon} className="h-6 w-6" />
                    </span>

                    <span className="text-[11px] font-mono text-slate-500 uppercase tracking-widest">
                      Production-Grade
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mt-4 group-hover:text-brand-300 transition-colors">
                    {s.title}
                  </h3>

                  <p className="mt-2 text-xs leading-relaxed text-slate-400">
                    {s.short}
                  </p>

                  {/* Key Capabilities */}
                  <div className="mt-4 border-t border-white/5 pt-4 space-y-2">
                    <p className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                      Key Deliverables:
                    </p>
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      {s.capabilities.map((cap, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="h-3.5 w-3.5 text-brand-400 shrink-0 mt-0.5" />
                          <span>{cap}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech stack pills */}
                  <div className="mt-4 flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                    {s.tools.map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-white/10 bg-ink-800/80 px-2 py-0.5 text-[10px] font-medium text-slate-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Footer Link */}
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                  <Link
                    to={`/services/${s.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-400 group-hover:text-brand-300 transition"
                  >
                    <span>View Architecture Details</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>

                  <Link
                    to="/pricing"
                    className="text-[11px] font-medium text-slate-400 hover:text-white transition"
                  >
                    View Pricing
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Models (How We Work) */}
      <section className="section bg-ink-900/40 border-y border-white/5 py-12 sm:py-16">
        <div className="container-x">
          <SectionHeading
            title="Flexible Engagement Models"
            text="Whether you need a full turnkey product built from scratch or dedicated engineering firepower on a monthly retainer."
          />

          <div className="grid gap-6 sm:grid-cols-3 mt-8">
            {models.map((m, idx) => (
              <div
                key={idx}
                className="card p-6 flex flex-col justify-between hover:border-brand-500/40 transition-all duration-300"
              >
                <div>
                  <span className="inline-block rounded-full bg-brand-500/10 border border-brand-500/20 px-2.5 py-0.5 text-[11px] font-semibold text-brand-300">
                    {m.tag}
                  </span>
                  <h3 className="text-lg font-bold text-white mt-3">{m.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-400">{m.desc}</p>

                  <ul className="mt-4 space-y-2 border-t border-white/5 pt-4 text-xs text-slate-300">
                    {m.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2">
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5">
                  <Button to={m.link} variant="secondary" className="w-full text-xs justify-center">
                    {m.cta}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What Every Service Includes (Our Quality Standards) */}
      <section className="section py-12 sm:py-16">
        <div className="container-x">
          <SectionHeading
            title="Included With Every Service Engagement"
            text="Non-negotiable quality guarantees we ship into every client repository, regardless of project size."
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-8">
            {standards.map((st, idx) => {
              const IconComponent = st.icon;
              return (
                <div key={idx} className="card p-6 border-white/10">
                  <div className="grid h-11 w-11 place-items-center rounded-xl bg-brand-500/10 text-brand-400 border border-brand-500/20 mb-3">
                    <IconComponent className="h-5 w-5" />
                  </div>
                  <h4 className="text-sm font-bold text-white">{st.title}</h4>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">{st.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4-Step Agile Delivery Process */}
      <section className="section bg-ink-900/50 border-y border-white/5 py-12 sm:py-16">
        <div className="container-x">
          <SectionHeading
            title="How We Ship Production-Grade Code"
            text="A transparent, agile workflow from architecture signoff to production deployment."
          />
          <Process />
        </div>
      </section>

      {/* Interactive Service Selector Banner */}
      <section className="section py-12 sm:py-16">
        <div className="container-x">
          <div className="rounded-3xl border border-brand-500/30 bg-gradient-to-r from-ink-900 via-ink-850 to-ink-950 p-8 sm:p-12 text-center relative overflow-hidden shadow-2xl">
            <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-64 w-80 rounded-full bg-brand-500/20 blur-3xl" />
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Not sure which architecture or service fits your product stage?
            </h3>
            <p className="mt-3 text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
              Hop on a 20-minute architecture discovery call. We review your goals and recommend the leanest, most scalable roadmap.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <Button to="/contact">Schedule Technical Consultation</Button>
              <a
                href={`https://wa.me/${company.whatsapp}?text=Hi%20Unique%20Digital%20Tech%2C%20I%20need%20guidance%20on%20which%20service%20or%20architecture%20best%20fits%20my%20business.`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] px-5 py-3 text-xs sm:text-sm font-bold text-white shadow-lg shadow-[#25D366]/30 hover:bg-[#20ba59] transition"
              >
                <WhatsAppIcon className="h-4 w-4 fill-white" />
                <span>Quick WhatsApp Advice</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
