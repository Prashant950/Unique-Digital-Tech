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
  Globe,
  Smartphone,
  Video,
  Share2,
  ArrowRight,
} from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import SectionHeading from '../components/ui/SectionHeading';
import MetricsStrip from '../components/sections/MetricsStrip';
import TechStack from '../components/sections/TechStack';
import CtaBanner from '../components/sections/CtaBanner';
import Button from '../components/ui/Button';
import SpotlightCard from '../components/ui/SpotlightCard';
import SEO from '../components/ui/SEO';

export default function About() {
  const aboutSchema = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    '@id': 'https://uniquedigitaltech.com/about#webpage',
    url: 'https://uniquedigitaltech.com/about',
    name: 'About Unique Digital Tech | Our Company & Foundation',
    description:
      'Unique Digital Tech began in 2019 in New Delhi, India. Offering 360-degree web marketing, customisation solutions, and our signature ‘Customers Forever’ commitment.',
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
          name: 'About Us',
          item: 'https://uniquedigitaltech.com/about',
        },
      ],
    },
  };

  const foundationPillars = [
    {
      icon: HeartHandshake,
      title: '‘Customers Forever’ Strategy',
      badge: 'Ethical Foundation',
      desc: 'We never classify customers as large or little. Or maybe focus on ‘Customers forever.’ And consistently adopt a reasonable and fair strategy to lead our administrations under high moral and expert principles.',
    },
    {
      icon: ShieldCheck,
      title: 'Insight & Self-Conviction',
      badge: 'Dependable Duty',
      desc: 'Utilizing our insight and self-conviction, we convey our duties just to make your activity simpler. That has permitted us to turn into the chief decision for all our elite customer base.',
    },
    {
      icon: Users,
      title: 'Future-Forward Consultation',
      badge: 'Deep Understanding',
      desc: 'Continually hoping to convey your development; we oblige every single mind boggling issue from our customer’s side and watch out for it in the most capable of habits. Our group will talk with you about your business before-hand to see how you need your image to scale later on.',
    },
    {
      icon: Rocket,
      title: 'High-End Customisation Answers',
      badge: 'Bespoke Solutions',
      desc: 'Alongside that; our group will even give you very good quality customisation answers for redress and expand how your image shows up on the World Wide Web. Be it giving you appropriate web based business arrangements, versatile applications or convincing video creation; our imaginative arrangements will change your business path superior to your desires.',
    },
  ];

  return (
    <>
      <SEO
        title="About Us | Our Company & Foundation"
        description="Unique Digital Tech began in 2019 in New Delhi, India. Offering 360-degree web marketing, customisation solutions, and our signature ‘Customers Forever’ commitment."
        keywords="about Unique Digital Tech, digital marketing company Delhi, web development New Delhi, SEO services India, 360 degree web advertising"
        schema={aboutSchema}
      />

      {/* Hero Section */}
      <PageHero
        badge="ABOUT UNIQUE DIGITAL TECH · NEW DELHI, INDIA"
        title="About Us"
        text="Unique Digital Tech began in 2019 in New Delhi, India — taking care of assignments of all scales with undying energy, specialized field knowledge, and high-impact 360-degree digital solutions."
      >
        <div className="flex flex-wrap items-center justify-center gap-3.5 text-xs sm:text-sm text-slate-300">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 backdrop-blur transition-all duration-300 hover:border-brand-400/50 hover:bg-brand-500/10 hover:text-white hover:scale-105">
            <CheckCircle2 className="h-3.5 w-3.5 text-brand-400" />
            Established 2019 · New Delhi
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 backdrop-blur transition-all duration-300 hover:border-emerald-400/50 hover:bg-emerald-500/10 hover:text-white hover:scale-105">
            <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
            360-Degree Web Promoting
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 backdrop-blur transition-all duration-300 hover:border-amber-400/50 hover:bg-amber-500/10 hover:text-white hover:scale-105">
            <Award className="h-3.5 w-3.5 text-amber-400" />
            ‘Customers Forever’ Ethos
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 backdrop-blur transition-all duration-300 hover:border-sky-400/50 hover:bg-sky-500/10 hover:text-white hover:scale-105">
            <Users className="h-3.5 w-3.5 text-sky-400" />
            Solid In-House Specialists
          </span>
        </div>
      </PageHero>

      {/* Our Company Section */}
      <section className="section py-16 sm:py-24 relative overflow-hidden">
        <div className="pointer-events-none absolute -top-40 right-10 h-96 w-96 rounded-full bg-brand-500/10 blur-[130px]" />
        
        <div className="container-x relative z-10">
          <div className="grid gap-12 lg:grid-cols-12 items-center">
            {/* Left Content (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-4 py-1 text-xs font-semibold text-brand-300">
                <Sparkles className="h-3.5 w-3.5 text-brand-400" />
                <span>WHO WE ARE · OUR HERITAGE</span>
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
                Our <span className="text-gradient">Company</span>
              </h2>

              <p className="text-sm sm:text-base leading-relaxed text-slate-200">
                <strong className="text-white font-bold">Unique Digital Tech</strong> began in 2019-New Delhi, India, and from that point forward has been taking care of assignments of all scales with undying energy and respectability. Our group of appropriately chosen specialists has sharpened the craft of making, executing and advancing your organization for all your current and potential customers to see.
              </p>

              <p className="text-sm sm:text-base leading-relaxed text-slate-300">
                Our specialists have the information and field understanding to give you quality inventive and specialized help. What's more, our 360-degree web promoting arrangements guarantee your image interfaces and connect with your focused crowd in the most ideal way.
              </p>

              <p className="text-sm sm:text-base leading-relaxed text-slate-300">
                With the most solid in-house inventive and specialized group, <strong className="text-white font-semibold">‘Unique Digital Tech’</strong>, mixes vital substance with specialized adequacy to drive the fruitful brand underwriting efforts. Additionally utilizing our savvy change based correspondence inspires quick input from your focused on crowd.
              </p>

              <div className="pt-2 flex flex-wrap gap-4">
                <Button to="/contact" className="shadow-lg shadow-brand-500/25">
                  <span>Start a Conversation</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <Button to="/services" variant="secondary">
                  <span>Explore Our Services</span>
                </Button>
              </div>
            </div>

            {/* Right Visual Highlight Cards (5 Cols) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="rounded-3xl border border-brand-500/30 bg-gradient-to-b from-[#0b1638] via-[#07112c] to-[#040a1c] p-6 sm:p-7 shadow-2xl backdrop-blur-xl">
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
                  <span className="text-xs uppercase font-bold tracking-wider text-brand-400">Headquarters</span>
                  <span className="text-xs text-slate-300 font-semibold bg-white/5 px-2.5 py-0.5 rounded-full border border-white/10">
                    New Delhi, India
                  </span>
                </div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Rocket className="h-5 w-5 text-brand-400" />
                  <span>Vital Substance &amp; Technical Adequacy</span>
                </h3>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-300">
                  Driving successful brand underwriting efforts by combining high-level creative storytelling with robust engineering capabilities.
                </p>
              </div>

              <div className="rounded-3xl border border-white/10 bg-ink-900/80 p-6 sm:p-7 shadow-xl backdrop-blur-xl">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-emerald-400" />
                  <span>360-Degree Web Promoting</span>
                </h3>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-300">
                  Full-spectrum digital marketing, search optimization, and web engineering to ensure your brand connects and thrives across all customer touchpoints.
                </p>
              </div>

              <div className="rounded-3xl border border-amber-500/20 bg-amber-500/5 p-6 shadow-lg backdrop-blur-xl">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Zap className="h-5 w-5 text-amber-400" />
                  <span>Savvy Change-Based Communication</span>
                </h3>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-300">
                  Inspiring quick feedback and fast conversion from your targeted audience through smart, responsive digital interaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics Strip */}
      <section className="py-10 sm:py-12 border-y border-white/5 bg-ink-900/40 relative">
        <div className="container-x">
          <SectionHeading
            title="Battle-tested metrics that back our work"
            text="Numbers that represent years of dedication, undying energy, and long-term client trust."
          />
          <MetricsStrip />
        </div>
      </section>

      {/* Our Foundation Section */}
      <section className="section py-16 sm:py-24 relative overflow-hidden bg-gradient-to-b from-transparent via-[#07112c]/40 to-transparent">
        <div className="container-x relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-500/30 bg-brand-500/10 px-4 py-1 text-xs font-semibold text-brand-300 mb-3 shadow-sm backdrop-blur">
              <Sparkles className="h-3.5 w-3.5 text-brand-400" />
              <span>CORE VALUES &amp; ETHICS</span>
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Our <span className="text-gradient">Foundation</span>
            </h2>
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-300">
              Endeavoring to get one of the main advanced advertising accomplices for every one of our customers, our organization is developed on the mainstays of offering comprehensive and intuitive types of assistance which coordinate with your business.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {foundationPillars.map((p, idx) => {
              const Icon = p.icon;
              return (
                <SpotlightCard
                  key={idx}
                  tilt={true}
                  className="flex flex-col justify-between p-7 sm:p-8 rounded-3xl border border-white/10 bg-gradient-to-b from-[#0b1638]/90 via-[#07112c]/90 to-[#040a1c]/90 hover:border-brand-500/40 transition-all duration-300"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      {/* Glowing Cyber Emblem Icon */}
                      <div className="relative group/icon">
                        <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-brand-500/35 via-cyan-400/25 to-brand-blue/35 opacity-40 blur-md group-hover:opacity-100 group-hover:blur-lg transition-all duration-500" />
                        <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0e214d] via-[#091536] to-[#04091a] border border-brand-400/35 shadow-[0_0_20px_rgba(14,165,233,0.22)] group-hover:scale-110 group-hover:border-brand-400/70 group-hover:shadow-[0_0_30px_rgba(56,189,248,0.45)] transition-all duration-300">
                          <Icon className="h-7 w-7 text-brand-300 group-hover:text-white drop-shadow-[0_0_8px_rgba(56,189,248,0.6)] transition-all duration-300" />
                        </div>
                      </div>
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-brand-300 bg-brand-500/10 border border-brand-500/25 px-3 py-1 rounded-full shadow-sm shadow-brand-500/10 backdrop-blur">
                        {p.badge}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-white mt-5 group-hover:text-brand-300 transition-colors">
                      {p.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-3">
                      {p.desc}
                    </p>
                  </div>
                </SpotlightCard>
              );
            })}
          </div>
        </div>
      </section>

      {/* High-End Customisation Solutions Showcase */}
      <section className="section py-14 sm:py-20 border-y border-white/5 bg-ink-900/60">
        <div className="container-x">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs uppercase font-bold tracking-wider text-brand-400">
              Transformative Scope
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white mt-2">
              High-End Customisation Answers for World Wide Web
            </h2>
            <p className="mt-3 text-xs sm:text-sm text-slate-300">
              Imaginative arrangements changing your business path superior to your desires.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-3">
            <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-[#0b1638]/90 to-[#040a1c]/90 p-7 backdrop-blur hover:border-cyan-400/40 transition-all duration-300 group">
              <div className="relative inline-block mb-4">
                <div className="absolute -inset-1 rounded-2xl bg-cyan-400/30 blur-md opacity-40 group-hover:opacity-100 transition-all" />
                <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0e214d] to-[#04091a] border border-cyan-400/30 text-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.25)] group-hover:scale-110 transition-transform">
                  <Globe className="h-7 w-7 text-cyan-300 drop-shadow-[0_0_8px_rgba(6,182,212,0.6)]" />
                </div>
              </div>
              <h4 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">Web Based Business Arrangements</h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                Next-gen, responsive e-commerce and web platforms built for higher business versatility and seamless customer experiences.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-[#0b1638]/90 to-[#040a1c]/90 p-7 backdrop-blur hover:border-brand-400/40 transition-all duration-300 group">
              <div className="relative inline-block mb-4">
                <div className="absolute -inset-1 rounded-2xl bg-brand-400/30 blur-md opacity-40 group-hover:opacity-100 transition-all" />
                <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0e214d] to-[#04091a] border border-brand-400/30 text-brand-400 shadow-[0_0_20px_rgba(14,165,233,0.25)] group-hover:scale-110 transition-transform">
                  <Smartphone className="h-7 w-7 text-brand-300 drop-shadow-[0_0_8px_rgba(14,165,233,0.6)]" />
                </div>
              </div>
              <h4 className="text-lg font-bold text-white group-hover:text-brand-300 transition-colors">Versatile Applications</h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                Fabricating portable applications to your requirements, within your spending limits, and according to your timeline for App Store &amp; Play Store.
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-[#0b1638]/90 to-[#040a1c]/90 p-7 backdrop-blur hover:border-brand-400/40 transition-all duration-300 group">
              <div className="relative inline-block mb-4">
                <div className="absolute -inset-1 rounded-2xl bg-brand-400/30 blur-md opacity-40 group-hover:opacity-100 transition-all" />
                <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0e214d] to-[#04091a] border border-brand-400/30 text-brand-400 shadow-[0_0_20px_rgba(14,165,233,0.25)] group-hover:scale-110 transition-transform">
                  <Video className="h-7 w-7 text-brand-300 drop-shadow-[0_0_8px_rgba(56,189,248,0.6)]" />
                </div>
              </div>
              <h4 className="text-lg font-bold text-white group-hover:text-brand-300 transition-colors">Convincing Video &amp; Creative Media</h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-2 leading-relaxed">
                Meticulous, passionate creative work that goes into each graphic, promotional video, brand profile, and advertising creative.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack Marquee */}
      <section className="section border-b border-white/5 overflow-hidden">
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
