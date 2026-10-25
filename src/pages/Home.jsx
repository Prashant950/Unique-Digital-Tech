import { Code2, Rocket, ShieldCheck, Zap, CheckCircle2, Users } from 'lucide-react';
import Button from '../components/ui/Button';
import SectionHeading from '../components/ui/SectionHeading';
import MetricsStrip from '../components/sections/MetricsStrip';
import ServiceGrid from '../components/sections/ServiceGrid';
import FeatureCards from '../components/sections/FeatureCards';
import TechStack from '../components/sections/TechStack';
import Process from '../components/sections/Process';
import Testimonials from '../components/sections/Testimonials';
import HomeFaq from '../components/sections/HomeFaq';
import CtaBanner from '../components/sections/CtaBanner';
import { valueCards, whyUs, company } from '../data/site';

export default function Home() {
  return (
    <>
      {/* Hero Section - Clean Ambient Lighting, Reduced Vertical Spacing */}
      <section className="bg-hero-glow relative overflow-hidden pt-32 pb-10 sm:pt-36 sm:pb-14">
        {/* Ambient Top Glow Spheres */}
        <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-96 w-[36rem] rounded-full bg-brand-500/15 blur-3xl" aria-hidden="true" />
        <div className="pointer-events-none absolute top-1/3 -right-20 h-80 w-80 rounded-full bg-brand-blue/10 blur-3xl" aria-hidden="true" />
        <div className="pointer-events-none absolute top-1/2 -left-20 h-72 w-72 rounded-full bg-sky-500/10 blur-3xl" aria-hidden="true" />

        <div className="container-x relative text-center">
          {/* Live Availability Badge */}
          <div className="rise inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-4 py-1.5 text-xs font-semibold text-brand-300 mb-5 shadow-sm backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Accepting Q1–Q2 2026 Projects · 3 Enterprise Sprint Slots Open</span>
          </div>

          <p className="rise text-xs font-semibold tracking-[0.25em] text-brand-400 sm:text-sm">
            SOFTWARE ENGINEERING &amp; DIGITAL GROWTH
          </p>

          <h1 className="rise-2 mx-auto mt-4 max-w-5xl text-4xl font-extrabold leading-[1.1] sm:text-6xl lg:text-7xl">
            Engineering Digital Products <br className="hidden sm:block" />
            <span className="text-gradient">That Drive Enterprise Scale.</span>
          </h1>

          <p className="rise-3 mx-auto mt-5 max-w-3xl text-base leading-relaxed text-slate-300 sm:text-lg">
            We architect, build and scale resilient web platforms, mission-critical mobile apps and high-ROI digital acquisition channels for high-growth businesses and enterprise teams worldwide.
          </p>

          {/* Action CTAs */}
          <div className="rise-3 mt-8 flex flex-col items-center justify-center gap-3.5 sm:flex-row sm:flex-wrap">
            <Button to="/contact" className="w-full sm:w-auto shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40">
              <Rocket className="h-4 w-4" />
              Start Your Project
            </Button>

            <Button to="/services" variant="secondary" className="w-full sm:w-auto">
              <Code2 className="h-4 w-4" />
              Explore Services
            </Button>
          </div>

          {/* Trust Value Badges Strip - Sleek Glass Pills */}
          <div className="rise-3 mt-10 flex flex-wrap items-center justify-center gap-3 border-t border-white/5 pt-6 text-xs text-slate-300">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-ink-900/80 px-3.5 py-1.5 backdrop-blur hover:border-brand-500/40 transition">
              <ShieldCheck className="h-4 w-4 text-brand-400" />
              <span>100% Code &amp; IP Ownership</span>
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-ink-900/80 px-3.5 py-1.5 backdrop-blur hover:border-amber-400/40 transition">
              <Zap className="h-4 w-4 text-amber-400" />
              <span>Sub-30ms API Latency</span>
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-ink-900/80 px-3.5 py-1.5 backdrop-blur hover:border-emerald-400/40 transition">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              <span>30–90 Day Post-Launch SLA</span>
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-ink-900/80 px-3.5 py-1.5 backdrop-blur hover:border-sky-400/40 transition">
              <Users className="h-4 w-4 text-sky-400" />
              <span>Direct Senior Full-Stack Engineers</span>
            </span>
          </div>
        </div>
      </section>

      {/* 99% Section - Tightly Spaced & Solid White Numbers */}
      <section className="py-8 sm:py-10 border-y border-white/5 bg-ink-900/40 relative">
        <div className="container-x">
          <SectionHeading
            title="Enterprise-grade reliability at scale"
            text="Battle-tested metrics that demonstrate our commitment to 99.9% uptime, scalability, and long-term client success."
          />
          <MetricsStrip />
        </div>
      </section>

      {/* Modern Engineering Over Legacy Bottlenecks */}
      <section className="section">
        <div className="container-x">
          <SectionHeading
            title="Modern engineering over legacy bottlenecks"
            text="Outdated codebases, slow rendering and fragmented marketing kill business momentum. Here is how we build your competitive advantage."
          />
          <FeatureCards items={valueCards} />
        </div>
      </section>

      {/* Service Grid Section */}
      <section className="section border-y border-white/5 bg-ink-900/50">
        <div className="container-x">
          <SectionHeading
            title="Everything you need to build and grow online"
            text="Engineering and marketing under one roof — from the first line of code to the first thousand customers."
          />
          <ServiceGrid />
        </div>
      </section>

      {/* Modern, Scalable, Production-Ready Tooling - Continuous Running Marquee */}
      <section className="section overflow-hidden">
        <div className="container-x">
          <SectionHeading
            title="Modern, scalable, production-ready tooling"
            text="Battle-tested technologies running in production for high-performance and resilient digital products."
          />
        </div>
        <TechStack />
      </section>

      {/* Process Section */}
      <section className="section border-y border-white/5 bg-ink-900/50">
        <div className="container-x">
          <SectionHeading title="How we ship production-grade code" />
          <Process />
        </div>
      </section>

      {/* Reviews & Client Testimonials Section - Autoscrolls with Pause on Hover */}
      <Testimonials />

      {/* Why Us Section */}
      <section className="section">
        <div className="container-x">
          <SectionHeading title="Why enterprises choose Unique Digital Tech" />
          <FeatureCards items={whyUs} />
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <HomeFaq />

      <CtaBanner />
    </>
  );
}
