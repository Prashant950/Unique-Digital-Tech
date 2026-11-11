import { Code2, Rocket, ShieldCheck, Zap, CheckCircle2, Users, ArrowRight, Sparkles } from 'lucide-react';
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
import CyberBackground from '../components/ui/CyberBackground';
import SectionReveal from '../components/ui/SectionReveal';
import SEO from '../components/ui/SEO';
import { valueCards, whyUs, homeFaqs } from '../data/site';

export default function Home() {
  const homeSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': 'https://uniquedigitaltech.com/#webpage',
    url: 'https://uniquedigitaltech.com',
    name: 'Unique Digital Tech | Enterprise Software Engineering & Cloud Agency',
    description:
      'We architect, build and scale resilient web platforms, mission-critical mobile applications and scalable cloud architecture with 100% IP ownership.',
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://uniquedigitaltech.com',
        },
      ],
    },
    mainEntity: {
      '@type': 'FAQPage',
      mainEntity: homeFaqs.slice(0, 6).map((faq) => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.a,
        },
      })),
    },
  };

  return (
    <>
      <SEO
        title="Enterprise Software Engineering & Cloud Architecture"
        description="Unique Digital Tech is a premium digital engineering agency architecting high-concurrency web platforms, mobile applications, custom ERPs, and cloud architecture with 100% IP ownership."
        keywords="software engineering agency, web development Noida, React Next.js developers, mobile app development India, cloud DevOps AWS, custom CRM ERP software, Unique Digital Tech"
        schema={homeSchema}
      />

      {/* Hero Section with Originkit-caliber Cyber Ambient Atmosphere & Live Showcase */}
      <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-24">
        {/* Ambient Cyber Grid & Glowing Aurora Blobs */}
        <CyberBackground />

        <div className="container-x relative text-center z-10">
          {/* Live Availability Badge Pill with Pinging Dot */}
          <div className="rise inline-flex items-center gap-2 rounded-full border border-brand-500/40 bg-brand-500/10 px-4 py-1.5 text-xs font-semibold text-brand-300 mb-6 shadow-md shadow-brand-500/10 backdrop-blur-xl">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span>Accepting Q1–Q2 2026 Projects · 3 Enterprise Sprint Slots Open</span>
            <Sparkles className="h-3 w-3 text-brand-400" />
          </div>

          <p className="rise text-xs font-bold tracking-[0.28em] text-brand-400 sm:text-sm uppercase">
            Software Engineering &amp; Scalable Cloud Architecture
          </p>

          <h1 className="rise-2 mx-auto mt-4 max-w-4xl text-3xl font-extrabold leading-[1.15] sm:text-4xl md:text-5xl lg:text-[3.25rem]">
            Engineering Digital Products <br className="hidden sm:block" />
            <span className="shimmer-text">That Drive Enterprise Scale.</span>
          </h1>

          <p className="rise-3 mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base sm:leading-relaxed">
            We architect, build and scale resilient web platforms, mission-critical mobile applications and high-ROI digital acquisition channels for high-growth businesses and enterprise teams worldwide.
          </p>

          {/* Action CTAs */}
          <div className="rise-3 mt-8 flex flex-col items-center justify-center gap-3.5 sm:flex-row sm:flex-wrap">
            <Button
              to="/contact"
              className="w-full sm:w-auto shadow-xl shadow-brand-500/30 hover:shadow-brand-500/50"
            >
              <Rocket className="h-4 w-4" />
              <span>Start Your Project</span>
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>

            <Button to="/services" variant="secondary" className="w-full sm:w-auto">
              <Code2 className="h-4 w-4 text-brand-400" />
              <span>Explore Services</span>
            </Button>
          </div>

          {/* Trust Value Badges Strip - Sleek Glass Pills */}
          <div className="rise-3 mt-10 flex flex-wrap items-center justify-center gap-3 border-t border-white/10 pt-6 text-xs text-slate-300">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-ink-900/80 px-3.5 py-1.5 backdrop-blur-xl hover:border-brand-500/40 transition">
              <ShieldCheck className="h-4 w-4 text-brand-400" />
              <span>100% Code &amp; IP Ownership</span>
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-ink-900/80 px-3.5 py-1.5 backdrop-blur-xl hover:border-amber-400/40 transition">
              <Zap className="h-4 w-4 text-amber-400" />
              <span>Sub-30ms API Latency</span>
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-ink-900/80 px-3.5 py-1.5 backdrop-blur-xl hover:border-emerald-400/40 transition">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              <span>30–90 Day Post-Launch SLA</span>
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-ink-900/80 px-3.5 py-1.5 backdrop-blur-xl hover:border-sky-400/40 transition">
              <Users className="h-4 w-4 text-sky-400" />
              <span>Direct Senior Full-Stack Engineers</span>
            </span>
          </div>

         
        </div>
      </section>

      {/* 99% Reliability Section */}
      <section className="py-12 sm:py-16 border-y border-white/5 bg-ink-900/40 relative">
        <div className="container-x">
          <SectionReveal>
            <SectionHeading
              title="Enterprise-grade reliability at scale"
              text="Battle-tested metrics that demonstrate our commitment to 99.9% uptime, scalability, and long-term client success."
            />
            <MetricsStrip />
          </SectionReveal>
        </div>
      </section>

      {/* Modern Engineering Over Legacy Bottlenecks */}
      <section className="section">
        <div className="container-x">
          <SectionReveal>
            <SectionHeading
              title="Modern engineering over legacy bottlenecks"
              text="Outdated codebases, slow rendering and fragmented marketing kill business momentum. Here is how we build your competitive advantage."
            />
            <FeatureCards items={valueCards} />
          </SectionReveal>
        </div>
      </section>

      {/* Service Grid Section */}
      <section className="section border-y border-white/5 bg-ink-900/50">
        <div className="container-x">
          <SectionReveal>
            <SectionHeading
              title="Everything you need to build and grow online"
              text="Engineering and marketing under one roof — from the first line of code to the first thousand customers."
            />
            <ServiceGrid />
          </SectionReveal>
        </div>
      </section>

      {/* Modern, Scalable, Production-Ready Tooling - Continuous Running Marquee */}
      <section className="section overflow-hidden">
        <div className="container-x">
          <SectionReveal>
            <SectionHeading
              title="Modern, scalable, production-ready tooling"
              text="Battle-tested technologies running in production for high-performance and resilient digital products."
            />
          </SectionReveal>
        </div>
        <TechStack />
      </section>

      {/* Process Section */}
      <section className="section border-y border-white/5 bg-ink-900/50">
        <div className="container-x">
          <SectionReveal>
            <SectionHeading title="How we ship production-grade code" />
            <Process />
          </SectionReveal>
        </div>
      </section>

      {/* Reviews & Client Testimonials Section */}
      <Testimonials />

      {/* Why Us Section */}
      <section className="section">
        <div className="container-x">
          <SectionReveal>
            <SectionHeading title="Why enterprises choose Unique Digital Tech" />
            <FeatureCards items={whyUs} />
          </SectionReveal>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <HomeFaq />

      {/* CTA Banner */}
      <CtaBanner />
    </>
  );
}
