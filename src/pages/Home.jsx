import { Link } from 'react-router-dom';
import {
  Code2,
  Rocket,
  ShieldCheck,
  Zap,
  CheckCircle2,
  Users,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
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
import SpotlightCard from '../components/ui/SpotlightCard';
import SEO from '../components/ui/SEO';
import Icon from '../components/ui/Icon';
import WhatsAppIcon from '../components/ui/WhatsAppIcon';
import ServiceEmblem from '../components/ui/ServiceEmblem';
import { valueCards, whyUs, homeFaqs, services, company } from '../data/site';

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

      {/* Who Are We Section */}
      <section className="section relative overflow-hidden border-b border-white/5 bg-gradient-to-b from-[#081230]/60 via-ink-950 to-[#07112c]/60 py-16 sm:py-24">
        {/* Ambient Glows */}
        <div className="pointer-events-none absolute -top-40 right-10 h-96 w-96 rounded-full bg-brand-500/10 blur-[130px]" />
        <div className="pointer-events-none absolute bottom-0 left-10 h-80 w-80 rounded-full bg-brand-blue/10 blur-[110px]" />

        <div className="container-x relative z-10">
          <SectionReveal>
            <div className="grid gap-12 lg:grid-cols-12 items-center">
              {/* Left Content (7 Cols) */}
              <div className="lg:col-span-7 space-y-6">
                <span className="inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-4 py-1 text-xs font-semibold text-brand-300 backdrop-blur-md">
                  <Sparkles className="h-3.5 w-3.5 text-brand-400" />
                  <span>WHO ARE WE · ESTABLISHED 2019, DELHI</span>
                </span>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                  Who Are <span className="text-gradient">We</span>
                </h2>

                <p className="text-sm sm:text-base leading-relaxed text-slate-200">
                  <strong className="text-white font-bold">Unique Digital Tech</strong> began in 2019-Delhi, India, and from that point forward has been taking care of assignments of all scales with undying enthusiasm and trustworthiness. Our group of appropriately chosen specialists have sharpened the craft of making, executing and advancing your organization for all your current and potential customers to see.
                </p>

                <p className="text-sm sm:text-base leading-relaxed text-slate-300">
                  Our specialists have the information and field understanding to give you quality innovative and specialized help. What's more, our 360-degree web advertising arrangements guarantee your image interfaces and draw in with your focus on the crowd in the most ideal way.
                </p>

                <div className="pt-2 flex flex-wrap gap-4">
                  <Button to="/about" className="shadow-lg shadow-brand-500/25">
                    <span>Learn More About Us</span>
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                  <Button to="/contact" variant="secondary">
                    <span>Connect With Specialists</span>
                  </Button>
                </div>
              </div>

              {/* Right Visual Card (5 Cols) */}
              <div className="lg:col-span-5">
                <div className="relative rounded-3xl border border-brand-500/30 bg-gradient-to-b from-[#0b1638] via-[#07112c] to-[#040a1c] p-7 sm:p-8 shadow-2xl backdrop-blur-xl overflow-hidden">
                  <div className="pointer-events-none absolute -bottom-10 -right-10 h-44 w-44 rounded-full bg-cyan-400/15 blur-[60px]" />

                  <div className="space-y-6 relative z-10">
                    <div className="flex items-center justify-between border-b border-white/10 pb-5">
                      <div>
                        <span className="text-xs uppercase font-bold tracking-wider text-brand-400">Established</span>
                        <p className="text-3xl font-black text-white font-mono">2019</p>
                      </div>
                      <span className="rounded-full border border-brand-500/30 bg-brand-500/10 px-3 py-1 text-xs font-semibold text-brand-300">
                        Delhi, India
                      </span>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-start gap-3.5">
                        <div className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-brand-500/15 text-brand-400 border border-brand-500/25">
                          <CheckCircle2 className="h-4 w-4" />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-white">360-Degree Web Advertising</h4>
                          <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                            Holistic strategies that ensure your image interfaces and draws in targeted audiences.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3.5">
                        <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-emerald-500/15 text-emerald-400 border border-emerald-500/25">
                          <ShieldCheck className="h-4 w-4" />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-white">Appropriately Chosen Specialists</h4>
                          <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                            Deep field knowledge giving you quality innovative and specialized technical help.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3.5">
                        <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-amber-500/15 text-amber-400 border border-amber-500/25">
                          <Zap className="h-4 w-4" />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-white">Undying Enthusiasm &amp; Trust</h4>
                          <p className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                            Taking care of assignments of all scales with uncompromised integrity.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Services Section */}
      <section className="section border-b border-white/5 bg-ink-900/50 relative">
        <div className="container-x">
          <SectionReveal>
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-500/30 bg-brand-500/10 px-4 py-1 text-xs font-semibold text-brand-300 mb-3 shadow-sm backdrop-blur">
                <Sparkles className="h-3.5 w-3.5 text-brand-400" />
                <span>360-DEGREE DIGITAL EXCELLENCE</span>
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                Our <span className="text-gradient">Services</span>
              </h2>
              <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
                Marketing. Software. Cloud. One Digital Partner.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {services
                .filter(
                  (s) =>
                    s.slug !== 'custom-crm-erp-solutions' &&
                    s.slug !== 'cloud-architecture-aws-devops'
                )
                .map((s) => (
                <SpotlightCard
                  key={s.slug}
                  tilt={true}
                  className="flex flex-col justify-between p-6 sm:p-7 rounded-3xl border border-white/10 bg-gradient-to-b from-ink-900/90 to-ink-950/90 hover:border-brand-500/40 transition-all duration-300"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      {/* Authentic Themed Glowing Emblem Icon */}
                      <ServiceEmblem service={s} />

                      {s.metrics && s.metrics[0] ? (
                        <span className="inline-flex items-center gap-1 text-[10px] font-extrabold uppercase tracking-wider text-brand-300 bg-brand-500/10 border border-brand-500/30 px-3 py-1 rounded-full shadow-sm shadow-brand-500/10 backdrop-blur">
                          <span className="h-1.5 w-1.5 rounded-full bg-brand-400 animate-pulse" />
                          {s.metrics[0].value} {s.metrics[0].label.split(' ')[0]}
                        </span>
                      ) : (
                        <span className="text-[11px] font-mono text-brand-400/80 uppercase tracking-widest bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                          Production-Grade
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl font-bold text-white mt-5 group-hover:text-brand-300 transition-colors">
                      {s.title}
                    </h3>

                    {s.tagline && (
                      <p className="mt-1 text-xs font-semibold text-brand-300/90 line-clamp-1">
                        {s.tagline}
                      </p>
                    )}

                    <p className="mt-2 text-xs leading-relaxed text-slate-400 line-clamp-3">
                      {s.description || s.short}
                    </p>

                    {/* Included Services: 5 Points List */}
                    <div className="mt-5 border-t border-white/10 pt-4 space-y-2.5">
                      <div className="flex items-center justify-between">
                        <p className="text-[11px] font-bold uppercase tracking-wider text-brand-300 flex items-center gap-1.5">
                          <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
                          <span>Included Services:</span>
                        </p>
                        <span className="text-[10px] font-semibold text-slate-400 bg-white/5 px-2 py-0.5 rounded-md border border-white/10">
                          {Math.min(5, s.capabilities.length)} Offerings
                        </span>
                      </div>
                      <ul className="space-y-2 text-xs text-slate-300">
                        {s.capabilities.slice(0, 5).map((cap, idx) => (
                          <li key={idx} className="flex items-start gap-2.5">
                            <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                            <span className="leading-snug text-slate-200 font-medium">{cap}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Attractive Card Footer Action Buttons */}
                  <div className="mt-7 pt-5 border-t border-white/10 space-y-2.5">
                    {/* Primary Button: Explore Practice */}
                    <Link
                      to={`/services/${s.slug}`}
                      className="group/btn relative flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-600 via-brand-500 to-sky-500 px-4 py-2.5 text-xs font-bold text-white shadow-md shadow-brand-500/25 hover:shadow-brand-500/50 hover:scale-[1.01] active:scale-[0.99] transition-all duration-300"
                    >
                      <span>Explore Practice</span>
                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover/btn:translate-x-1" />
                    </Link>

                    {/* Dual Action Buttons: Request Scope & WhatsApp */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <Link
                        to={`/contact?service=${encodeURIComponent(s.title)}`}
                        className="group/scope relative flex items-center justify-center gap-1.5 rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-xs font-bold text-slate-200 hover:text-white hover:bg-brand-500/15 hover:border-brand-400/50 shadow-sm hover:shadow-brand-500/15 transition-all duration-300"
                      >
                        <span>Request Scope</span>
                        <ArrowRight className="h-3 w-3 text-brand-400 transition-transform group-hover/scope:translate-x-0.5" />
                      </Link>

                      <a
                        href={`https://wa.me/${company.whatsapp}?text=Hi%20Unique%20Digital%20Tech%2C%20I%20am%20interested%20in%20your%20${encodeURIComponent(
                          s.title
                        )}%20services.`}
                        target="_blank"
                        rel="noreferrer"
                        className="group/wa relative flex items-center justify-center gap-1.5 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-3 py-2 text-xs font-bold text-emerald-300 hover:bg-emerald-500/20 hover:border-emerald-400/60 hover:text-white shadow-sm shadow-emerald-500/10 transition-all duration-300"
                      >
                        <WhatsAppIcon variant="real" className="h-4 w-4 shrink-0 transition-transform group-hover/wa:scale-110" />
                        <span>WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </SpotlightCard>
              ))}
            </div>

            {/* Bottom link to all services */}
            <div className="mt-10 text-center">
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-2xl border border-brand-500/30 bg-[#0e1d44]/70 px-6 py-3.5 text-xs sm:text-sm font-bold text-brand-300 shadow-lg shadow-brand-500/15 hover:border-brand-400/60 hover:bg-brand-500/20 hover:text-white transition-all duration-300"
              >
                <span>View All 8 Engineering &amp; Marketing</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
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
