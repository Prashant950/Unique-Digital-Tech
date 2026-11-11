import { useState } from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import {
  CheckCircle2,
  Clock,
  Shield,
  Zap,
  ArrowRight,
  Layers,
  Sparkles,
  HelpCircle,
  ChevronDown,
  Lock,
  Code2,
  Terminal,
  ExternalLink,
  Rocket,
  Check,
  XCircle,
} from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import Button from '../components/ui/Button';
import Icon from '../components/ui/Icon';
import SectionHeading from '../components/ui/SectionHeading';
import BorderBeam from '../components/ui/BorderBeam';
import WhatsAppIcon from '../components/ui/WhatsAppIcon';
import CyberBackground from '../components/ui/CyberBackground';
import { services, company } from '../data/site';

export default function ServiceDetail() {
  const { slug } = useParams();
  const [openFaq, setOpenFaq] = useState(0);

  const service = services.find((s) => s.slug === slug);
  if (!service) return <Navigate to="/services" replace />;

  const otherServices = services.filter((s) => s.slug !== slug);

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28 lg:pt-44 lg:pb-32 flex flex-col justify-center border-b border-white/10">
        <CyberBackground />

        <div className="container-x relative z-10 max-w-5xl text-center">
          {/* Availability Pill */}
          <div className="rise inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-4 py-1.5 text-xs font-semibold text-brand-300 mb-6 shadow-sm backdrop-blur-xl">
            <Sparkles className="h-3.5 w-3.5 text-brand-400" />
            <span>SPECIALIZED ENGINEERING PRACTICE · ACTIVE SPRINTS</span>
          </div>

          <h1 className="rise-2 text-3xl font-extrabold leading-[1.12] sm:text-5xl lg:text-6xl text-white">
            {service.title}
          </h1>

          <p className="rise-2 mt-4 text-base sm:text-xl font-semibold text-brand-300 max-w-3xl mx-auto leading-relaxed">
            {service.tagline || service.short}
          </p>

          <p className="rise-3 mx-auto mt-5 max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base">
            {service.description}
          </p>

          {/* 3 Live KPI / Value Metrics Cards */}
          {service.metrics && service.metrics.length > 0 && (
            <div className="rise-3 mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
              {service.metrics.map((m, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-brand-500/30 bg-gradient-to-b from-ink-900/90 to-ink-950/90 p-4 sm:p-5 backdrop-blur shadow-lg text-center"
                >
                  <div className="text-2xl sm:text-3xl font-black text-white tracking-tight text-gradient">
                    {m.value}
                  </div>
                  <div className="mt-1 text-xs text-slate-300 font-medium">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Action CTAs */}
          <div className="rise-3 mt-10 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            <Button
              to={`/contact?service=${encodeURIComponent(service.title)}`}
              className="w-full sm:w-auto shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40 py-3.5 px-7"
            >
              <span>Start Your {service.title} Project</span>
              <ArrowRight className="h-4 w-4 ml-1.5" />
            </Button>

            <a
              href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent(
                `Hi Unique Digital Tech, I am interested in discussing your ${service.title} services.`
              )}`}
              target="_blank"
              rel="noreferrer"
              className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-3.5 text-xs sm:text-sm font-bold text-white shadow-lg shadow-[#25D366]/25 transition hover:bg-[#20ba59]"
            >
              <WhatsAppIcon className="h-4 w-4 fill-white" />
              <span>Chat with Lead Architect</span>
            </a>
          </div>
        </div>
      </section>

      {/* Architecture Modules Breakdown */}
      {service.modules && service.modules.length > 0 && (
        <section className="section py-16 sm:py-24 relative">
          <div className="container-x">
            <SectionHeading
              title="System Architecture &amp; Engineering Modules"
              text="How our senior software architects build resilient, fault-tolerant platforms designed to handle enterprise scale."
            />

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-8">
              {service.modules.map((mod, idx) => (
                <div
                  key={idx}
                  className="rounded-3xl border border-white/10 bg-gradient-to-b from-ink-900/80 to-ink-950/80 p-6 backdrop-blur shadow-xl relative overflow-hidden flex flex-col justify-between hover:border-brand-500/40 transition-all duration-300 group"
                >
                  <BorderBeam duration={9 + idx} color="#38bdf8" rx={24} />
                  <div>
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-500/10 text-brand-400 border border-brand-500/20 group-hover:scale-105 group-hover:bg-brand-500/20 transition-transform">
                      <Code2 className="h-6 w-6" />
                    </span>
                    <h3 className="text-lg font-bold text-white mt-4">{mod.title}</h3>
                    <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-400">
                      {mod.desc}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 text-xs font-semibold text-brand-300">
                    <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                    <span>Production Standard</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Comprehensive Deliverables Checklist (Everything You Receive) */}
      <section className="section py-16 sm:py-24 bg-ink-900/50 border-y border-white/10 relative">
        <div className="container-x">
          <SectionHeading
            title="Complete Production Deliverables"
            text="Concrete assets handed over with 100% intellectual property ownership from day one."
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2 mt-8">
            {(service.deliverables || service.capabilities).map((deliv, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 rounded-2xl border border-white/10 bg-ink-950/80 p-5 backdrop-blur hover:border-brand-500/30 transition-all"
              >
                <div className="grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mt-0.5">
                  <Check className="h-4 w-4" />
                </div>
                <div>
                  <span className="text-sm font-semibold text-white leading-relaxed">
                    {deliv}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Guarantees Ribbon */}
          <div className="mt-12 rounded-2xl border border-brand-500/30 bg-gradient-to-r from-brand-500/10 via-ink-900 to-brand-blue/10 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="space-y-1 text-center md:text-left">
              <h4 className="text-lg font-bold text-white">
                Backed by Our 3-Step Milestone Protection
              </h4>
              <p className="text-xs sm:text-sm text-slate-300">
                You review and approve working code on private staging before releasing milestone payments.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs text-slate-200">
                <Shield className="h-3.5 w-3.5 text-emerald-400" />
                100% NDA Protection
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-black/40 px-3 py-1 text-xs text-slate-200">
                <Clock className="h-3.5 w-3.5 text-brand-400" />
                30–90 Day SLA Warranty
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* The Unique Digital Tech Advantage vs The Legacy Way */}
      {service.advantages && service.advantages.length > 0 && (
        <section className="section py-16 sm:py-24 relative">
          <div className="container-x">
            <SectionHeading
              title="The Unique Digital Tech Production Advantage"
              text="Why enterprise teams and ambitious founders partner with us over traditional agencies or freelancers."
            />

            <div className="grid gap-6 md:grid-cols-3 mt-10">
              {service.advantages.map((adv, idx) => (
                <div
                  key={idx}
                  className="rounded-3xl border border-white/10 bg-gradient-to-b from-ink-900/90 to-ink-950/90 p-6 sm:p-7 shadow-xl flex flex-col justify-between"
                >
                  <div>
                    <span className="inline-block rounded-full bg-brand-500/10 border border-brand-500/20 px-3 py-1 text-xs font-bold text-brand-300 uppercase tracking-wider">
                      {adv.aspect}
                    </span>

                    {/* Legacy/Broken Way */}
                    <div className="mt-5 rounded-xl border border-rose-500/20 bg-rose-950/20 p-4">
                      <div className="flex items-center gap-2 text-xs font-bold text-rose-400">
                        <XCircle className="h-4 w-4 shrink-0" />
                        <span>The Legacy Agency / Freelancer Way:</span>
                      </div>
                      <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                        {adv.legacy}
                      </p>
                    </div>

                    {/* Unique Digital Tech Production Way */}
                    <div className="mt-4 rounded-xl border border-emerald-500/30 bg-emerald-950/25 p-4 shadow-sm">
                      <div className="flex items-center gap-2 text-xs font-bold text-emerald-300">
                        <CheckCircle2 className="h-4 w-4 shrink-0" />
                        <span>The Unique Digital Tech Standard:</span>
                      </div>
                      <p className="mt-2 text-xs text-white leading-relaxed font-medium">
                        {adv.unique}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 3-Phase Milestone Roadmap */}
      {service.timelineSteps && (
        <section className="section py-16 sm:py-24 bg-ink-900/40 border-y border-white/10">
          <div className="container-x">
            <SectionHeading
              title="Predictable Milestone Delivery Roadmap"
              text="From initial architectural blueprint to production deployment with zero surprises."
            />

            <div className="grid gap-6 md:grid-cols-3 mt-10">
              {service.timelineSteps.map((step, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-white/10 bg-ink-950/90 p-6 relative overflow-hidden shadow-lg"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl font-black text-brand-400">{step.step}</span>
                    <span className="rounded-lg bg-white/5 border border-white/10 px-2.5 py-1 text-xs font-semibold text-slate-300">
                      {step.duration}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-white mt-2">{step.title}</h4>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mt-2">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Tech Stack & Tooling Ecosystem */}
    

      {/* Service-Specific FAQs */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="section py-16 sm:py-20 bg-ink-900/40 border-t border-white/5">
          <div className="container-x max-w-3xl">
            <div className="text-center mb-10">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-500/30 bg-brand-500/10 px-3.5 py-1 text-xs font-semibold text-brand-300 mb-3">
                <HelpCircle className="h-3.5 w-3.5" />
                TECHNICAL DISCOVERY
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Frequently Asked <span className="text-gradient">Questions</span>
              </h2>
            </div>

            <div className="space-y-3">
              {service.faqs.map((faq, idx) => {
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
      )}

      {/* Tailored Bottom Consultation CTA Banner */}
      <section className="section py-16">
        <div className="container-x">
          <div className="relative overflow-hidden rounded-3xl border border-brand-500/30 bg-gradient-to-br from-ink-850 via-ink-900 to-ink-950 px-6 py-14 text-center sm:px-14 shadow-2xl">
            <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-72 w-96 rounded-full bg-brand-500/20 blur-3xl" />
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Ready to engineer your {service.title}?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-300 text-sm sm:text-base">
              Send us your requirements or schedule a private architecture whiteboarding call with our lead solutions engineers.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
              <Button
                to={`/contact?service=${encodeURIComponent(service.title)}`}
                className="w-full sm:w-auto shadow-lg shadow-brand-500/25 py-3.5 px-8"
              >
                <Rocket className="h-4 w-4" />
                Schedule Technical Review
              </Button>
              <a
                href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent(
                  `Hi Unique Digital Tech, I want to discuss a scope for ${service.title}.`
                )}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#25D366]/30 transition hover:bg-[#20ba59] sm:w-auto"
              >
                <WhatsAppIcon className="h-4 w-4 fill-white" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Explore Other Services Grid */}
      <section className="section py-16 bg-ink-950 border-t border-white/5">
        <div className="container-x">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h3 className="text-xl font-bold text-white">Explore Other Practices</h3>
              <p className="text-xs text-slate-400 mt-1">Full-lifecycle digital engineering under one roof.</p>
            </div>
            <Link
              to="/services"
              className="text-xs font-bold text-brand-400 hover:text-brand-300 flex items-center gap-1"
            >
              <span>All Services</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {otherServices.slice(0, 4).map((s) => (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className="card p-5 hover:border-brand-500/40 hover:-translate-y-1 transition-all group"
              >
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-500/10 text-brand-400 border border-brand-500/20 group-hover:scale-105 group-hover:bg-brand-500/20 transition-transform">
                    <Icon name={s.icon} className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <h4 className="text-sm font-bold text-white truncate group-hover:text-brand-300 transition">
                      {s.title}
                    </h4>
                    <span className="text-[11px] text-slate-400 block truncate mt-0.5">
                      Explore Architecture →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
