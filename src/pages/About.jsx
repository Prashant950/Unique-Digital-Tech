import {
  ShieldCheck,
  Zap,
  Users,
  Code2,
  Lock,
  Layers,
  Award,
  Clock,
  CheckCircle2,
  Rocket,
  Sparkles,
  TrendingUp,
  Terminal,
  HeartHandshake,
} from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import SectionHeading from '../components/ui/SectionHeading';
import MetricsStrip from '../components/sections/MetricsStrip';
import TechStack from '../components/sections/TechStack';
import CtaBanner from '../components/sections/CtaBanner';
import Button from '../components/ui/Button';

export default function About() {
  const principles = [
    {
      icon: Lock,
      title: 'Zero Vendor Lock-In',
      desc: 'You own 100% of the intellectual property, Git repositories, deployment keys, and documentation from day one. We never hold code hostage.',
    },
    {
      icon: Users,
      title: 'Direct Senior Engineer Access',
      desc: 'No non-technical account managers playing broken telephone. You collaborate directly with senior architects and developers on WhatsApp or Slack.',
    },
    {
      icon: Zap,
      title: 'Sub-Second Performance',
      desc: 'We obsess over Core Web Vitals, database indexing, and low-latency APIs. Fast applications convert better, rank higher, and cost less to host.',
    },
    {
      icon: ShieldCheck,
      title: 'Production-Grade Reliability',
      desc: 'Every system is built on battle-tested frameworks (Next.js, Node.js, PostgreSQL, Docker) with automated CI/CD and a 99.9% uptime SLA.',
    },
  ];

  const milestones = [
    {
      year: '2021',
      title: 'Founded as a Full-Stack Studio',
      desc: 'Started in Noida / Delhi NCR with a mission to build clean React, Next.js, and Node.js web applications free of legacy technical debt.',
    },
    {
      year: '2022',
      title: 'Mobile & Cloud Expansion',
      desc: 'Scaled engineering capabilities into cross-platform React Native / Flutter mobile apps and automated Docker/AWS cloud deployments.',
    },
    {
      year: '2023',
      title: 'High-Concurrency & Automation Engines',
      desc: 'Pioneered official Meta WhatsApp Cloud API automation and built custom high-traffic reseller/SMM panel backends handling millions of events.',
    },
    {
      year: '2024',
      title: 'Enterprise ERP & Systems Integration',
      desc: 'Delivered custom enterprise CRM/ERP platforms, microservices architectures, and technical SEO frameworks for international clients.',
    },
    {
      year: '2025–2026',
      title: 'Global Engineering Partner',
      desc: 'Over 150+ full-stack solutions delivered with 98% client retention and 99.9% SLA across India, UAE, UK, Singapore, and the USA.',
    },
  ];

  return (
    <>
      <PageHero
        badge="ENGINEERING FIRST · NOIDA & DELHI NCR"
        title="We engineer digital systems that let businesses scale with certainty."
        text="Unique Digital Tech is a specialized software engineering firm based in Noida / Delhi NCR, architecting high-performance web platforms, mobile apps, and automated workflows for organizations worldwide."
      >
        <div className="flex flex-wrap items-center justify-center gap-3.5 text-xs sm:text-sm text-slate-300">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 backdrop-blur transition-all duration-300 hover:border-brand-400/50 hover:bg-brand-500/10 hover:text-white hover:scale-105">
            <CheckCircle2 className="h-3.5 w-3.5 text-brand-400" />
            150+ Full-Stack Solutions Shipped
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 backdrop-blur transition-all duration-300 hover:border-emerald-400/50 hover:bg-emerald-500/10 hover:text-white hover:scale-105">
            <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
            100% Source Code Ownership
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 backdrop-blur transition-all duration-300 hover:border-amber-400/50 hover:bg-amber-500/10 hover:text-white hover:scale-105">
            <Award className="h-3.5 w-3.5 text-amber-400" />
            5+ Years of Modern Engineering
          </span>
        </div>
      </PageHero>

      {/* Our Mission & Philosophy Section */}
      <section className="section py-12 sm:py-16">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-500/30 bg-brand-500/10 px-3 py-0.5 text-xs font-semibold text-brand-300 mb-3">
              <Sparkles className="h-3.5 w-3.5" />
              ENGINEERING FIRST · GROWTH ALWAYS
            </span>
            <h2 className="text-3xl font-extrabold sm:text-4xl text-white">
              Why Unique Digital Tech was built
            </h2>
            <p className="mt-4 leading-relaxed text-slate-300 text-sm sm:text-base">
              Most digital agencies build throwaway WordPress themes or lock clients into proprietary systems that fall apart under real traffic.
            </p>
            <p className="mt-3 leading-relaxed text-slate-400 text-sm sm:text-base">
              We started Unique Digital Tech to be the engineering partner we always wished we could hire:
              senior engineers writing clean, scalable Next.js and Node.js code, delivering on time, communicating with complete transparency, and handing over full source code ownership.
            </p>
            <p className="mt-3 leading-relaxed text-slate-400 text-sm sm:text-base">
              Today, our cross-functional team designs system architecture, develops mission-critical web and mobile applications, automates customer communication via WhatsApp Cloud API, and executes data-driven performance funnels.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button to="/contact">Schedule an Architecture Call</Button>
              <Button to="/pricing" variant="secondary">View Transparent Pricing</Button>
            </div>
          </div>

          <div className="space-y-4">
            <div className="rounded-2xl border border-brand-500/30 bg-gradient-to-br from-ink-900 to-ink-950 p-6 shadow-xl">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Rocket className="h-5 w-5 text-brand-400" />
                <span>Our Mission</span>
              </h3>
              <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-300">
                To eradicate technical debt and empower high-growth startups and enterprises with resilient, high-concurrency software that turns technical capabilities into lasting commercial advantage.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-ink-900/80 p-6 shadow-lg">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-emerald-400" />
                <span>Our Vision</span>
              </h3>
              <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-300">
                To be the most trusted, dependable full-lifecycle engineering firm in the industry — recognized for production-grade code quality, zero vendor lock-in, and measurable business ROI.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Strip */}
      <section className="py-8 sm:py-10 border-y border-white/5 bg-ink-900/40 relative">
        <div className="container-x">
          <SectionHeading
            title="Battle-tested metrics that back our engineering"
            text="Numbers that represent hundreds of thousands of lines of production code, zero-downtime releases, and long-term client trust."
          />
          <MetricsStrip />
        </div>
      </section>

      {/* Core Engineering Principles (4 Pillars) */}
      <section className="section py-12 sm:py-16">
        <div className="container-x">
          <SectionHeading
            title="The Principles That Guide Every Sprint"
            text="How we make architectural decisions, write maintainable code, and ensure you always stay in control."
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-8">
            {principles.map((p, idx) => {
              const Icon = p.icon;
              return (
                <div
                  key={idx}
                  className="card p-6 flex flex-col justify-between hover:border-brand-500/50 hover:bg-ink-850 transition-all duration-300 group"
                >
                  <div>
                    <div className="grid h-12 w-12 place-items-center rounded-xl bg-brand-500/10 text-brand-400 border border-brand-500/20 group-hover:scale-105 group-hover:bg-brand-500/20 transition-transform">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-base font-bold text-white mt-4">{p.title}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed mt-2">{p.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Journey & Milestones Timeline */}
      <section className="section bg-ink-900/40 border-y border-white/5 py-12 sm:py-16">
        <div className="container-x">
          <SectionHeading
            title="Our Evolution &amp; Track Record"
            text="From an engineering studio in Noida to delivering mission-critical applications across global markets."
          />

          <div className="mt-10 relative">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
              {milestones.map((m, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-white/10 bg-ink-900/80 p-5 backdrop-blur transition-all duration-300 hover:border-brand-400/50 hover:-translate-y-1"
                >
                  <span className="text-2xl font-black text-brand-400 font-mono">{m.year}</span>
                  <h4 className="text-sm font-bold text-white mt-2">{m.title}</h4>
                  <p className="text-xs text-slate-400 mt-2 leading-relaxed">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Engineering Standards Showcase */}
      <section className="section py-12 sm:py-16">
        <div className="container-x">
          <SectionHeading
            title="How We Maintain Enterprise Quality"
            text="Every project delivered by Unique Digital Tech adheres to strict production benchmarks."
          />

          <div className="grid gap-6 sm:grid-cols-3 mt-8">
            <div className="card p-6 border-white/10">
              <Terminal className="h-6 w-6 text-brand-400 mb-3" />
              <h4 className="text-sm font-bold text-white">Automated CI/CD &amp; Testing</h4>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Automated linting, unit testing, and GitHub Actions workflows ensure no untested code makes it to production.
              </p>
            </div>

            <div className="card p-6 border-white/10">
              <Layers className="h-6 w-6 text-brand-400 mb-3" />
              <h4 className="text-sm font-bold text-white">Modular &amp; Decoupled Architecture</h4>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Clean separation between UI state, business logic, and database layer for painless future scaling and team handoffs.
              </p>
            </div>

            <div className="card p-6 border-white/10">
              <HeartHandshake className="h-6 w-6 text-brand-400 mb-3" />
              <h4 className="text-sm font-bold text-white">Post-Launch SLA &amp; Hypercare</h4>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                Complimentary 30 to 90 days bug warranty with real-time uptime monitoring and direct engineer escalation channels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack Marquee */}
      <section className="section border-t border-white/5 overflow-hidden">
        <div className="container-x">
          <SectionHeading
            title="Battle-Tested Production Stack"
            text="Technologies running in production for high performance, fault tolerance, and uncompromised security."
          />
        </div>
        <TechStack />
      </section>

      <CtaBanner />
    </>
  );
}
