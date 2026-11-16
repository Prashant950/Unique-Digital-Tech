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
  TrendingUp,
  DollarSign,
  MessageSquare,
  Activity,
  Target,
  Sliders,
  Link2,
  MapPin,
  FileEdit,
  Compass,
  BarChart3,
  Users,
  HeartHandshake,
  Globe,
  Video,
  Facebook,
  Twitter,
  BookOpen,
  CreditCard,
  FileText,
  Megaphone,
  Smartphone,
  Palette,
  UploadCloud,
  ShoppingBag,
  PhoneCall,
  Search,
  FileCode,
} from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import Button from '../components/ui/Button';
import Icon from '../components/ui/Icon';
import SectionHeading from '../components/ui/SectionHeading';
import BorderBeam from '../components/ui/BorderBeam';
import WhatsAppIcon from '../components/ui/WhatsAppIcon';
import CyberBackground from '../components/ui/CyberBackground';
import SEO from '../components/ui/SEO';
import { services, company } from '../data/site';

const iconMap = {
  Search,
  Palette,
  CheckCircle2,
  Rocket,
  TrendingUp,
  DollarSign,
  MessageSquare,
  Activity,
  Target,
  Sliders,
  Code2,
  Link2,
  MapPin,
  FileEdit,
  Compass,
  Cpu: Code2,
  BarChart3,
  Zap,
  Users,
  HeartHandshake,
  Sparkles,
  Globe,
  Facebook,
  Twitter,
  Shield,
  Share2: Sliders,
  Video,
  BookOpen,
  CreditCard,
  FileText,
  Megaphone,
  Smartphone,
  UploadCloud,
  ShoppingBag,
  PhoneCall,
  FileCode,
  Layers,
  Clock,
  Lock,
};

function resolveIcon(name) {
  if (!name) return Sparkles;
  return iconMap[name] || Sparkles;
}

export default function ServiceDetail() {
  const { slug } = useParams();
  const [openFaq, setOpenFaq] = useState(0);

  const service = services.find((s) => s.slug === slug);
  if (!service) return <Navigate to="/services" replace />;

  const otherServices = services.filter((s) => s.slug !== slug);

  // Dynamic Service Schema + Breadcrumb + FAQPage Schema for Google Rich Snippets
  const serviceDetailSchema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `https://uniquedigitaltech.com/services/${service.slug}#service`,
        name: service.title,
        serviceType: service.title,
        description: service.description,
        provider: {
          '@type': 'Organization',
          name: 'Unique Digital Tech',
          url: 'https://uniquedigitaltech.com',
          logo: 'https://uniquedigitaltech.com/logo-exact.png',
        },
        areaServed: [
          'India',
          'United States',
          'United Kingdom',
          'United Arab Emirates',
          'Australia',
          'Singapore',
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: `${service.title} Capabilities`,
          itemListElement: (service.capabilities || []).map((cap, i) => ({
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: cap,
            },
            position: i + 1,
          })),
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `https://uniquedigitaltech.com/services/${service.slug}#breadcrumbs`,
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
            name: 'Services',
            item: 'https://uniquedigitaltech.com/services',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: service.title,
            item: `https://uniquedigitaltech.com/services/${service.slug}`,
          },
        ],
      },
      ...(service.faqs && service.faqs.length > 0
        ? [
            {
              '@type': 'FAQPage',
              '@id': `https://uniquedigitaltech.com/services/${service.slug}#faq`,
              mainEntity: service.faqs.map((faq) => ({
                '@type': 'Question',
                name: faq.q,
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: faq.a,
                },
              })),
            },
          ]
        : []),
    ],
  };

  return (
    <>
      <SEO
        title={`${service.title} | Enterprise Engineering Practice`}
        description={`${service.tagline || service.short}. Sub-second performance, 99.9% uptime SLA, and 100% IP code ownership.`}
        keywords={`${service.title.toLowerCase()}, ${service.title.toLowerCase()} company Noida, hire ${service.title.toLowerCase()} developers, enterprise ${service.slug}`}
        schema={serviceDetailSchema}
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28 lg:pt-44 lg:pb-32 flex flex-col justify-center border-b border-white/10">
        <CyberBackground />

        <div className="container-x relative z-10 max-w-5xl text-center">
          {/* Availability Pill */}
         

          <h1 className="rise-2 text-3xl font-extrabold leading-[1.12] sm:text-5xl lg:text-6xl text-white">
            {service.title}
          </h1>

          <p className="rise-2 mt-4 text-base sm:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-300 via-white to-brand-400 max-w-3xl mx-auto leading-relaxed">
            {service.tagline || service.short}
          </p>

          {/* Clean, punchy lead description - structured & spacious */}
          <p className="rise-3 mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-slate-300 sm:text-base">
            {service.short || service.description.split('\n\n')[0]}
          </p>

          {/* 3 Live KPI / Value Metrics Cards with cyber border glow & hover scaling */}
          {service.metrics && service.metrics.length > 0 && (
            <div className="rise-3 mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
              {service.metrics.map((m, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-brand-500/30 bg-gradient-to-b from-[#0b1638]/90 via-[#07112c]/90 to-[#040a1c]/90 p-4 sm:p-5 backdrop-blur shadow-lg shadow-brand-500/10 hover:border-brand-400/60 hover:shadow-brand-500/25 hover:scale-[1.03] transition-all duration-300 text-center group"
                >
                  <div className="text-2xl sm:text-3xl font-black text-white tracking-tight text-gradient group-hover:scale-105 transition-transform">
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
              className="w-full sm:w-auto shadow-lg shadow-brand-500/30 hover:shadow-brand-500/50 hover:scale-105 py-3.5 px-7 transition-all duration-300"
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
              className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-3.5 text-xs sm:text-sm font-bold text-white shadow-lg shadow-[#25D366]/25 hover:shadow-[#25D366]/40 hover:scale-105 transition-all duration-300"
            >
              <WhatsAppIcon className="h-4 w-4 fill-white" />
              <span>Chat with Lead Architect</span>
            </a>
          </div>
        </div>
      </section>

      {/* Structured Strategy & Business Impact Cards (For multi-paragraph service descriptions) */}
      {service.description.split('\n\n').length > 1 && (
        <section className="section py-14 sm:py-20 bg-ink-900/40 border-b border-white/10 relative overflow-hidden">
          <div className="pointer-events-none absolute -top-40 right-10 h-80 w-80 rounded-full bg-brand-500/10 blur-[120px]" />
          <div className="container-x relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-500/30 bg-brand-500/10 px-4 py-1 text-xs font-semibold text-brand-300 mb-3 shadow-sm backdrop-blur">
                <Sparkles className="h-3.5 w-3.5 text-brand-400" />
                <span>EXECUTIVE ARCHITECTURE &amp; BUSINESS IMPACT</span>
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                Strategic Foundation for <span className="text-gradient">{service.title}</span>
              </h2>
            </div>

            <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
              {service.description.split('\n\n').slice(1).map((para, pIdx) => (
                <div
                  key={pIdx}
                  className="rounded-3xl border border-white/10 bg-gradient-to-b from-[#0b1638]/90 via-[#07112c]/90 to-[#040a1c]/90 p-7 sm:p-8 backdrop-blur shadow-xl hover:border-brand-400/60 hover:shadow-[0_0_30px_rgba(14,165,233,0.3)] hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="relative group/icon">
                        <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-brand-500/35 via-cyan-400/25 to-brand-blue/35 opacity-40 blur-md group-hover:opacity-100 group-hover:blur-lg transition-all duration-500" />
                        <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0e214d] via-[#091536] to-[#04091a] border border-brand-400/35 shadow-[0_0_15px_rgba(14,165,233,0.25)] group-hover:scale-110 group-hover:border-brand-400/70 transition-all duration-300">
                          {pIdx === 0 ? (
                            <Shield className="h-6 w-6 text-brand-300 group-hover:text-white drop-shadow-[0_0_8px_rgba(56,189,248,0.6)]" />
                          ) : (
                            <Zap className="h-6 w-6 text-cyan-300 group-hover:text-white drop-shadow-[0_0_8px_rgba(6,182,212,0.6)]" />
                          )}
                        </div>
                      </div>
                      <span className="text-[10px] font-extrabold uppercase tracking-widest text-brand-300 bg-brand-500/10 border border-brand-500/30 px-3 py-1 rounded-full shadow-sm shadow-brand-500/10">
                        Strategic Value 0{pIdx + 1}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
                      {para}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 1. Growth Section & Digital Marketing Scope (if present) */}
      {service.growthSection && (
        <section className="section py-16 sm:py-24 bg-ink-900/60 border-b border-white/10 relative overflow-hidden">
          <div className="pointer-events-none absolute -top-40 right-10 h-96 w-96 rounded-full bg-brand-500/10 blur-[130px]" />
          <div className="container-x relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-500/30 bg-brand-500/10 px-4 py-1 text-xs font-semibold text-brand-300 mb-3 shadow-sm backdrop-blur">
                <Sparkles className="h-3.5 w-3.5 text-brand-400" />
                <span>PROVEN ROI · GLOBAL SCALE</span>
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                {service.growthSection.title}
              </h2>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-300">
                {service.growthSection.intro}
              </p>
            </div>

            {/* 4 Growth Benefit Cards */}
            <div className="grid gap-6 md:grid-cols-2">
              {service.growthSection.benefits.map((b, idx) => {
                const BenefitIcon = resolveIcon(b.icon);
                return (
                  <div
                    key={idx}
                    className="rounded-3xl border border-white/10 bg-gradient-to-b from-[#0b1638]/90 via-[#07112c]/90 to-[#040a1c]/90 p-7 sm:p-8 backdrop-blur shadow-xl hover:border-brand-400/60 hover:shadow-[0_0_30px_rgba(14,165,233,0.3)] hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-5">
                        <div className="relative group/icon">
                          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-brand-500/35 via-cyan-400/25 to-brand-blue/35 opacity-40 blur-md group-hover:opacity-100 group-hover:blur-lg transition-all duration-500" />
                          <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0e214d] via-[#091536] to-[#04091a] border border-brand-400/35 shadow-[0_0_20px_rgba(14,165,233,0.22)] group-hover:scale-110 group-hover:border-brand-400/70 group-hover:shadow-[0_0_30px_rgba(56,189,248,0.45)] transition-all duration-300">
                            <BenefitIcon className="h-7 w-7 text-brand-300 group-hover:text-white drop-shadow-[0_0_8px_rgba(56,189,248,0.6)] transition-all duration-300" />
                          </div>
                        </div>
                        <span className="text-[10px] font-extrabold uppercase tracking-wider text-brand-300 bg-brand-500/10 border border-brand-500/25 px-3 py-1 rounded-full shadow-sm shadow-brand-500/10">
                          {b.badge}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-white group-hover:text-brand-300 transition-colors">
                        {b.title}
                      </h3>
                      <p className="mt-3 text-xs sm:text-sm leading-relaxed text-slate-300">
                        {b.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* What Includes In Digital Marketing Services Grid */}
            {service.marketingScope && (
              <div className="mt-14 rounded-3xl border border-brand-500/30 bg-gradient-to-b from-[#0b1638] via-[#07112c] to-[#040a1c] p-8 sm:p-10 shadow-2xl">
                <div className="text-center max-w-2xl mx-auto mb-8">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                    {service.marketingScope.title}
                  </h3>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {service.marketingScope.items.map((item, idx) => {
                    const ItemIcon = resolveIcon(item.icon);
                    return (
                      <div
                        key={idx}
                        className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur hover:border-brand-400/40 hover:bg-brand-500/10 transition-all group"
                      >
                        <div className="flex items-center gap-3">
                          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-500/20 text-brand-300 border border-brand-500/30 group-hover:scale-110 transition-transform">
                            <ItemIcon className="h-5 w-5" />
                          </span>
                          <span className="text-sm font-bold text-white group-hover:text-brand-300 transition-colors">
                            {item.name}
                          </span>
                        </div>
                        <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    );
                  })}
                </div>
                <p className="mt-8 text-xs sm:text-sm text-center text-slate-300 max-w-3xl mx-auto border-t border-white/10 pt-6">
                  {service.marketingScope.note}
                </p>
              </div>
            )}
          </div>
        </section>
      )}

      {/* 2. SEO Dedicated Deep-Dive Section (if present) */}
      {service.seoDeepDive && (
        <section className="section py-16 sm:py-24 bg-ink-950 border-b border-white/10 relative">
          <div className="container-x">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-500/30 bg-brand-500/10 px-4 py-1 text-xs font-semibold text-brand-300 mb-3 shadow-sm backdrop-blur">
                <Search className="h-3.5 w-3.5 text-brand-400" />
                <span>SEO MASTERY &amp; SERP EXCELLENCE</span>
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                {service.seoDeepDive.title}
              </h2>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-300">
                {service.seoDeepDive.subtitle}
              </p>
            </div>

            {/* Why Choose For SEO Editorial Box */}
            <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-[#0b1638]/80 to-[#040a1c]/80 p-8 sm:p-10 mb-14 backdrop-blur shadow-xl">
              <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-4 text-gradient">
                {service.seoDeepDive.whyChooseSeo.headline}
              </h3>
              <div className="space-y-4 text-xs sm:text-sm leading-relaxed text-slate-300">
                <p>{service.seoDeepDive.whyChooseSeo.p1}</p>
                <p>{service.seoDeepDive.whyChooseSeo.p2}</p>
                <p className="font-semibold text-white border-l-2 border-brand-400 pl-4 py-1 italic bg-brand-500/5 rounded-r-lg">
                  {service.seoDeepDive.whyChooseSeo.p3}
                </p>
              </div>
            </div>

            {/* What Do We Cover For You (4 Pillars with Glowing Emblems) */}
            <div className="mb-14">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-extrabold text-white">
                  SO, WHAT DO WE COVER FOR YOU?
                </h3>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {service.seoDeepDive.whatWeCover.map((cov, idx) => {
                  const CovIcon = resolveIcon(cov.icon);
                  return (
                    <div
                      key={idx}
                      className="rounded-3xl border border-white/10 bg-gradient-to-b from-[#0b1638]/90 via-[#07112c]/90 to-[#040a1c]/90 p-6 flex flex-col justify-between hover:border-brand-400/60 hover:shadow-[0_0_25px_rgba(14,165,233,0.25)] hover:scale-[1.03] hover:-translate-y-1 transition-all duration-300 group"
                    >
                      <div>
                        <div className="relative group/icon mb-4">
                          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-brand-500/35 via-cyan-400/25 to-brand-blue/35 opacity-40 blur-md group-hover:opacity-100 group-hover:blur-lg transition-all duration-500" />
                          <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0e214d] via-[#091536] to-[#04091a] border border-brand-400/35 shadow-[0_0_20px_rgba(14,165,233,0.22)] group-hover:scale-110 group-hover:border-brand-400/70 group-hover:shadow-[0_0_30px_rgba(56,189,248,0.45)] transition-all duration-300">
                            <CovIcon className="h-7 w-7 text-brand-300 group-hover:text-white drop-shadow-[0_0_8px_rgba(56,189,248,0.6)] transition-all duration-300" />
                          </div>
                        </div>
                        <span className="text-[10px] font-bold text-brand-400 uppercase tracking-wider">
                          {cov.tag}
                        </span>
                        <h4 className="text-lg font-bold text-white mt-1 group-hover:text-brand-300 transition-colors">
                          {cov.title}
                        </h4>
                        <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                          {cov.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Our Approach Towards The Success (5 Steps) */}
            <div>
              <div className="text-center mb-8">
                <h3 className="text-2xl font-extrabold text-white">
                  OUR APPROACH TOWARDS THE SUCCESS
                </h3>
              </div>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
                {service.seoDeepDive.approach.map((app, idx) => {
                  const AppIcon = resolveIcon(app.icon);
                  return (
                    <div
                      key={idx}
                      className="rounded-2xl border border-white/10 bg-gradient-to-b from-[#0b1638]/90 to-[#040a1c]/90 p-5 flex flex-col justify-between hover:border-brand-400/60 hover:shadow-[0_0_20px_rgba(14,165,233,0.22)] hover:scale-[1.03] hover:-translate-y-1 transition-all duration-300 group"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-2xl font-black text-brand-400 font-mono">
                            {app.step}
                          </span>
                          <span className="grid h-9 w-9 place-items-center rounded-xl bg-brand-500/10 text-brand-300 border border-brand-500/20 group-hover:scale-110 transition-transform">
                            <AppIcon className="h-4 w-4" />
                          </span>
                        </div>
                        <h4 className="text-base font-bold text-white group-hover:text-brand-300 transition-colors">
                          {app.title}
                        </h4>
                        <p className="mt-2 text-xs text-slate-300 leading-relaxed">
                          {app.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 3. SMO Dedicated Section (if present) */}
      {service.smoSection && (
        <section className="section py-16 sm:py-24 bg-ink-900/40 border-b border-white/10 relative">
          <div className="container-x">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1 text-xs font-semibold text-indigo-300 mb-3 shadow-sm backdrop-blur">
                <Sliders className="h-3.5 w-3.5 text-indigo-400" />
                <span>SOCIAL MEDIA &amp; BRAND AUDIENCE</span>
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                {service.smoSection.headline}
              </h2>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-300">
                {service.smoSection.intro}
              </p>
            </div>

            {/* How Business Benefits from SMO */}
            <div className="grid gap-6 md:grid-cols-3 mb-14">
              {service.smoSection.benefits.map((b, idx) => {
                const BIcon = resolveIcon(b.icon);
                return (
                  <div
                    key={idx}
                    className="rounded-3xl border border-white/10 bg-gradient-to-b from-[#0b1638]/90 to-[#040a1c]/90 p-7 backdrop-blur shadow-xl hover:border-indigo-400/60 hover:shadow-[0_0_25px_rgba(99,102,241,0.25)] hover:scale-[1.03] hover:-translate-y-1 transition-all duration-300 group flex flex-col justify-between"
                  >
                    <div>
                      <div className="relative group/icon mb-5">
                        <div className="absolute -inset-1 rounded-2xl bg-indigo-500/30 blur-md opacity-40 group-hover:opacity-100 transition-all" />
                        <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0e214d] to-[#04091a] border border-indigo-400/35 text-indigo-300 shadow-[0_0_20px_rgba(99,102,241,0.25)] group-hover:scale-110 transition-transform">
                          <BIcon className="h-7 w-7 text-indigo-300 drop-shadow-[0_0_8px_rgba(99,102,241,0.6)]" />
                        </div>
                      </div>
                      <h3 className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors">
                        {b.title}
                      </h3>
                      <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {b.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* What Does Our Social Media Marketing Comprise */}
            <div className="rounded-3xl border border-indigo-500/30 bg-gradient-to-b from-[#0b1638] via-[#07112c] to-[#040a1c] p-8 sm:p-10 shadow-2xl">
              <h3 className="text-2xl font-extrabold text-white text-center mb-8">
                WHAT DOES OUR SOCIAL MEDIA MARKETING COMPRISE?
              </h3>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {service.smoSection.comprises.map((comp, idx) => {
                  const CompIcon = resolveIcon(comp.icon);
                  return (
                    <div
                      key={idx}
                      className="flex items-center gap-3.5 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur hover:bg-indigo-500/15 hover:border-indigo-400/50 hover:scale-[1.02] hover:-translate-y-0.5 transition-all duration-300 group"
                    >
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-indigo-500/20 text-indigo-300 border border-indigo-500/30 group-hover:scale-110 transition-transform">
                        <CompIcon className="h-5 w-5" />
                      </span>
                      <span className="text-sm font-bold text-white group-hover:text-indigo-300 transition-colors">
                        {comp.name}
                      </span>
                    </div>
                  );
                })}
              </div>
              <p className="mt-8 text-xs sm:text-sm text-center text-slate-300 max-w-3xl mx-auto border-t border-white/10 pt-6">
                {service.smoSection.ctaText}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* 4. Graphic Design & Video Editing Dedicated Section (if present) */}
      {service.graphicDesignDetails && (
        <section className="section py-16 sm:py-24 bg-ink-950 border-b border-white/10 relative">
          <div className="container-x">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-500/30 bg-brand-500/10 px-4 py-1 text-xs font-semibold text-brand-300 mb-3 shadow-sm backdrop-blur">
                <Palette className="h-3.5 w-3.5 text-brand-400" />
                <span>VISUAL BRANDING EXCELLENCE</span>
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                WHAT WE DO &amp; OUR SPECIALTIES
              </h2>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-300">
                {service.graphicDesignDetails.intro}
              </p>
            </div>

            {/* 6 Specialties Cards with cyber border & hover animations */}
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 mb-16">
              {service.graphicDesignDetails.specialties.map((spec, idx) => {
                const SpecIcon = resolveIcon(spec.icon);
                return (
                  <div
                    key={idx}
                    className="rounded-2xl border border-white/10 bg-gradient-to-b from-[#0b1638]/90 to-[#040a1c]/90 p-6 backdrop-blur shadow-lg shadow-brand-500/5 hover:border-brand-400/60 hover:shadow-[0_0_25px_rgba(14,165,233,0.25)] hover:scale-[1.03] hover:-translate-y-1 transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-3.5 mb-3">
                      <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-500/15 text-brand-300 border border-brand-500/30 group-hover:scale-110 group-hover:border-brand-400/60 transition-all duration-300">
                        <SpecIcon className="h-5 w-5" />
                      </span>
                      <h4 className="text-sm font-extrabold text-white group-hover:text-brand-300 transition-colors uppercase tracking-wider">
                        {spec.title}
                      </h4>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {spec.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Approach Callout Banner */}
            <div className="rounded-2xl border border-brand-500/30 bg-brand-500/10 p-5 sm:p-6 mb-16 text-center max-w-3xl mx-auto shadow-lg backdrop-blur shadow-brand-500/10">
              <p className="text-sm sm:text-base font-semibold text-brand-200">
                {service.graphicDesignDetails.approachIntro}
              </p>
            </div>

            {/* 5 In-Depth Design Pillars: Logo, Brochure, Business Card, Letterhead, Other */}
            <div className="space-y-10">
              {service.graphicDesignDetails.pillars.map((pillar, idx) => {
                const PilIcon = resolveIcon(pillar.icon);
                return (
                  <div
                    key={idx}
                    className="rounded-3xl border border-white/10 bg-gradient-to-b from-[#0b1638]/85 via-[#07112c]/85 to-[#040a1c]/85 p-7 sm:p-10 backdrop-blur shadow-xl hover:border-brand-400/60 hover:shadow-[0_0_30px_rgba(14,165,233,0.25)] hover:scale-[1.01] hover:-translate-y-0.5 transition-all duration-300 group"
                  >
                    <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-5 mb-6">
                      <div className="flex items-center gap-4">
                        <div className="relative group/icon">
                          <div className="absolute -inset-1 rounded-2xl bg-brand-500/30 blur-md opacity-40 group-hover:opacity-100 transition-all" />
                          <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0e214d] to-[#04091a] border border-brand-400/35 text-brand-300 shadow-[0_0_20px_rgba(14,165,233,0.25)] group-hover:scale-110 group-hover:border-brand-400/70 transition-transform">
                            <PilIcon className="h-7 w-7 text-brand-300 drop-shadow-[0_0_8px_rgba(56,189,248,0.6)]" />
                          </div>
                        </div>
                        <div>
                          <span className="text-[10px] font-extrabold uppercase tracking-widest text-brand-400">
                            {pillar.badge}
                          </span>
                          <h3 className="text-2xl font-extrabold text-white mt-0.5">
                            {pillar.title}
                          </h3>
                        </div>
                      </div>
                      <Button
                        to={`/contact?service=${encodeURIComponent(pillar.title)}`}
                        className="text-xs py-2.5 px-5 shadow-md shadow-brand-500/25 hover:shadow-brand-500/40 hover:scale-105 active:scale-95 transition-all duration-300"
                      >
                        <span>Commission {pillar.title}</span>
                        <ArrowRight className="h-3.5 w-3.5 ml-1" />
                      </Button>
                    </div>

                    <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed">
                      <p>{pillar.p1}</p>
                      <p>{pillar.p2}</p>
                      {pillar.p3 && <p>{pillar.p3}</p>}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* 5. Website Design & Development Dedicated Section (if present) */}
      {service.webDesignDetails && (
        <section className="section py-16 sm:py-24 bg-ink-950 border-b border-white/10 relative">
          <div className="container-x">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1 text-xs font-semibold text-cyan-300 mb-3 shadow-sm backdrop-blur">
                <Globe className="h-3.5 w-3.5 text-cyan-400" />
                <span>PRODUCTION-GRADE WEB CRAFTSMANSHIP</span>
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                {service.webDesignDetails.headline}
              </h2>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-300">
                {service.webDesignDetails.intro}
              </p>
            </div>

            {/* 4-Step Process */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-16">
              {service.webDesignDetails.process.map((step, idx) => {
                const StepIcon = resolveIcon(step.icon);
                return (
                  <div
                    key={idx}
                    className="rounded-3xl border border-white/10 bg-gradient-to-b from-[#0b1638]/90 to-[#040a1c]/90 p-7 flex flex-col justify-between hover:border-cyan-400/60 hover:shadow-[0_0_25px_rgba(6,182,212,0.25)] hover:scale-[1.03] hover:-translate-y-1 transition-all duration-300 group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-5">
                        <span className="text-2xl font-black text-cyan-400 font-mono">
                          {step.step}
                        </span>
                        <div className="relative group/icon">
                          <div className="absolute -inset-1 rounded-2xl bg-cyan-400/30 blur-md opacity-40 group-hover:opacity-100 transition-all" />
                          <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0e214d] to-[#04091a] border border-cyan-400/35 text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.22)] group-hover:scale-110 transition-transform">
                            <StepIcon className="h-6 w-6 text-cyan-300 drop-shadow-[0_0_8px_rgba(6,182,212,0.6)]" />
                          </div>
                        </div>
                      </div>
                      <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {step.title}
                      </h3>
                      <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Why Choose Us Editorial Box */}
            <div className="rounded-3xl border border-cyan-500/30 bg-gradient-to-b from-[#0b1638] via-[#07112c] to-[#040a1c] p-8 sm:p-12 shadow-2xl">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4 text-center">
                {service.webDesignDetails.whyChooseUs.headline}
              </h3>
              <p className="text-sm text-slate-300 text-center max-w-3xl mx-auto mb-8">
                {service.webDesignDetails.whyChooseUs.intro}
              </p>
              <div className="grid gap-3.5 sm:grid-cols-2 max-w-4xl mx-auto">
                {service.webDesignDetails.whyChooseUs.points.map((pt, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur hover:border-cyan-400/40 hover:bg-cyan-500/10 hover:scale-[1.02] hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <CheckCircle2 className="h-5 w-5 text-cyan-400 shrink-0 mt-0.5" />
                    <span className="text-xs sm:text-sm text-slate-200 font-medium leading-snug">
                      {pt}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-10 text-center">
                <Button
                  to="/contact?service=Website%20Design%20%26%20Development"
                  className="shadow-lg shadow-cyan-500/25 py-3 px-8 text-sm font-bold"
                >
                  <span>{service.webDesignDetails.whyChooseUs.callout}</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 6. Mobile App Development Dedicated Section (if present) */}
      {service.mobileAppDetails && (
        <section className="section py-16 sm:py-24 bg-ink-950 border-b border-white/10 relative">
          <div className="container-x">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1 text-xs font-semibold text-cyan-300 mb-3 shadow-sm backdrop-blur">
                <Smartphone className="h-3.5 w-3.5 text-cyan-400" />
                <span>NATIVE &amp; CROSS-PLATFORM MOBILE ENGINEERING</span>
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                {service.mobileAppDetails.headline}
              </h2>
              <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-300">
                {service.mobileAppDetails.intro}
              </p>
            </div>

            {/* 4-Step Process */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-16">
              {service.mobileAppDetails.process.map((step, idx) => {
                const StepIcon = resolveIcon(step.icon);
                return (
                  <div
                    key={idx}
                    className="rounded-3xl border border-white/10 bg-gradient-to-b from-[#0b1638]/90 to-[#040a1c]/90 p-7 flex flex-col justify-between hover:border-cyan-400/60 hover:shadow-[0_0_25px_rgba(6,182,212,0.25)] hover:scale-[1.03] hover:-translate-y-1 transition-all duration-300 group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-5">
                        <span className="text-2xl font-black text-cyan-400 font-mono">
                          {step.step}
                        </span>
                        <div className="relative group/icon">
                          <div className="absolute -inset-1 rounded-2xl bg-cyan-400/30 blur-md opacity-40 group-hover:opacity-100 transition-all" />
                          <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0e214d] to-[#04091a] border border-cyan-400/35 text-cyan-300 shadow-[0_0_15px_rgba(6,182,212,0.22)] group-hover:scale-110 transition-transform">
                            <StepIcon className="h-6 w-6 text-cyan-300 drop-shadow-[0_0_8px_rgba(6,182,212,0.6)]" />
                          </div>
                        </div>
                      </div>
                      <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {step.title}
                      </h3>
                      <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* 8 Mobile Application Development Skills Grid */}
            <div className="mb-16">
              <h3 className="text-2xl font-extrabold text-white text-center mb-8">
                OUR MOBILE APPLICATION DEVELOPMENT SKILLS
              </h3>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {service.mobileAppDetails.skills.map((sk, idx) => {
                  const SkIcon = resolveIcon(sk.icon);
                  return (
                    <div
                      key={idx}
                      className="flex items-center gap-3.5 rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur hover:bg-cyan-500/10 hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.2)] hover:scale-[1.02] hover:-translate-y-0.5 transition-all duration-300 group"
                    >
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 group-hover:scale-110 group-hover:border-cyan-400/60 transition-transform">
                        <SkIcon className="h-5 w-5" />
                      </span>
                      <span className="text-xs sm:text-sm font-bold text-white group-hover:text-cyan-300 transition-colors leading-snug">
                        {sk.title}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Business Sectors We Have Developed Apps For */}
            <div className="rounded-3xl border border-cyan-500/30 bg-gradient-to-b from-[#0b1638] via-[#07112c] to-[#040a1c] p-8 sm:p-12 shadow-2xl text-center">
              <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-2">
                HIGHLY-RESPONSIVE MOBILE APPLICATIONS FOR THESE BUSINESS SECTORS
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 max-w-2xl mx-auto mb-8">
                Domain-specific architectures with integrated booking flows, secure payments, and custom backends.
              </p>
              <div className="flex flex-wrap justify-center gap-2.5 max-w-4xl mx-auto">
                {service.mobileAppDetails.sectors.map((sec, idx) => (
                  <span
                    key={idx}
                    className="rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold text-slate-200 hover:text-white hover:border-cyan-400/60 hover:bg-cyan-500/20 hover:scale-105 hover:shadow-[0_0_15px_rgba(6,182,212,0.2)] transition-all duration-300"
                  >
                    {sec}
                  </span>
                ))}
              </div>
              <p className="mt-8 text-xs sm:text-sm text-cyan-300 font-semibold max-w-3xl mx-auto border-t border-white/10 pt-6">
                {service.mobileAppDetails.sectorNote}
              </p>
            </div>
          </div>
        </section>
      )}

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
                  className="rounded-3xl border border-white/10 bg-gradient-to-b from-[#0b1638]/90 to-[#040a1c]/90 p-6 backdrop-blur shadow-xl relative overflow-hidden flex flex-col justify-between hover:border-brand-400/60 hover:shadow-[0_0_25px_rgba(14,165,233,0.25)] hover:scale-[1.02] hover:-translate-y-1 transition-all duration-300 group"
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
                className="flex items-start gap-4 rounded-2xl border border-white/10 bg-gradient-to-b from-[#0b1638]/80 to-[#040a1c]/80 p-5 backdrop-blur hover:border-brand-400/50 hover:shadow-[0_0_20px_rgba(14,165,233,0.2)] hover:scale-[1.01] hover:-translate-y-0.5 transition-all duration-300 group"
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
                    <div className="mt-5 rounded-xl border border-white/10 bg-white/5 p-4">
                      <div className="flex items-center gap-2 text-xs font-bold text-slate-300">
                        <XCircle className="h-4 w-4 shrink-0 text-slate-400" />
                        <span>The Legacy Agency / Freelancer Way:</span>
                      </div>
                      <p className="mt-2 text-xs text-slate-400 leading-relaxed">
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
