import { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  CheckCircle2,
  Clock,
  ShieldCheck,
  Send,
  Calendar,
  ExternalLink,
  ChevronDown,
  Building2,
} from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import Button from '../components/ui/Button';
import SectionHeading from '../components/ui/SectionHeading';
import { company } from '../data/site';

const serviceOptions = [
  'Website Development (Next.js / React)',
  'Mobile App Development (iOS & Android)',
  'Custom CRM / ERP & Enterprise Platform',
  'WhatsApp Cloud API & Automations',
  'Cloud Infrastructure & AWS DevOps',
  'Technical SEO & Growth Architecture',
  'Architecture Consultation & Code Audit',
];

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);
  const [activeFaq, setActiveFaq] = useState(0);

  const onSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const d = Object.fromEntries(new FormData(e.currentTarget));

    // Simulate real submission
    setTimeout(() => {
      setLoading(false);
      setSent(true);
      setSubmittedData(d);
    }, 600);
  };

  const contactFaqs = [
    {
      q: 'How fast can I expect an engineering response?',
      a: 'Our solutions architects review form submissions within 4 to 6 business hours (Mon-Sat, 9:30 AM to 7:30 PM IST). You will receive a direct technical response and preliminary scope assessment.',
    },
    {
      q: 'Is the initial architecture consultation really free?',
      a: 'Yes, 100% free with zero obligation. We evaluate your requirements, review your current codebase or wireframes, and provide a preliminary architecture recommendation and milestone estimate without charging any consultation fee.',
    },
    {
      q: 'Will you sign a Non-Disclosure Agreement (NDA) before our call?',
      a: 'Yes. We respect your intellectual property and trade secrets. You can request our standard bilateral mutual NDA or provide your team’s custom NDA, and our directors will execute it prior to your technical discovery call.',
    },
    {
      q: 'Can we visit your engineering hub in Noida / Delhi NCR in person?',
      a: 'Absolutely. We welcome founders and enterprise teams at our development hub in Sector 62, Noida (Delhi NCR). Please schedule a prior appointment via phone or email so our lead solutions architect can be available to host you.',
    },
  ];

  return (
    <>
      <PageHero
        badge="TALK DIRECTLY WITH SOLUTIONS ARCHITECTS"
        title="Let’s engineer your next competitive advantage."
        text="Have a product to build, legacy code to modernize or a high-concurrency architecture to scale? Talk directly with our solutions engineers."
      >
        <div className="flex flex-wrap items-center justify-center gap-3.5 text-xs sm:text-sm text-slate-300">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 backdrop-blur transition-all duration-300 hover:border-brand-400/50 hover:bg-brand-500/10 hover:text-white hover:scale-105">
            <Clock className="h-3.5 w-3.5 text-brand-400" />
            Average Response: &lt; 24 Hours
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 backdrop-blur transition-all duration-300 hover:border-emerald-400/50 hover:bg-emerald-500/10 hover:text-white hover:scale-105">
            <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
            100% NDA Protection
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 backdrop-blur transition-all duration-300 hover:border-amber-400/50 hover:bg-amber-500/10 hover:text-white hover:scale-105">
            <Building2 className="h-3.5 w-3.5 text-amber-400" />
            Noida / New Delhi Tech Hub
          </span>
        </div>
      </PageHero>

      {/* Main Contact Grid & Form */}
      <section className="section py-16 sm:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-12 items-start">
          {/* Left Column: Direct Contact Details & Info (5 Cols) */}
          <div className="space-y-6 lg:col-span-5">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-400">
                Direct Communication
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 leading-tight">
                Let’s talk about your next project.
              </h2>
              <p className="text-sm sm:text-base text-slate-300 mt-3 leading-relaxed">
                Whether you need a dedicated engineering squad, a custom software build, or modern architecture guidance, our leads are ready to collaborate.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              {/* Email Card */}
              <a
                href={`mailto:${company.email}`}
                className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-ink-900/80 p-5 backdrop-blur transition-all duration-300 hover:border-brand-500/50 hover:bg-ink-900 hover:shadow-glow"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-brand-500/10 text-brand-400 border border-brand-500/20 group-hover:scale-105 transition-transform">
                  <Mail className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Email Us Directly</p>
                  <p className="text-base font-bold text-white group-hover:text-brand-300 transition-colors mt-0.5 break-all">
                    {company.email}
                  </p>
                  <p className="text-xs text-slate-400 mt-1">Send spec sheets, RFPs, or questions</p>
                </div>
              </a>

              {/* Phone Card */}
              <a
                href={`tel:${company.phone.replace(/\s/g, '')}`}
                className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-ink-900/80 p-5 backdrop-blur transition-all duration-300 hover:border-sky-500/50 hover:bg-ink-900 hover:shadow-glow"
              >
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20 group-hover:scale-105 transition-transform">
                  <Phone className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Direct Voice Line</p>
                  <p className="text-base font-bold text-white group-hover:text-sky-300 transition-colors font-mono mt-0.5">
                    {company.phone}
                  </p>
                  <p className="text-xs text-slate-400 mt-1">Monday – Saturday, 9:30 AM – 7:30 PM IST</p>
                </div>
              </a>

              {/* Physical Location Card */}
              <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-ink-900/80 p-5 backdrop-blur">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">Engineering Headquarters</p>
                  <p className="text-base font-bold text-white mt-0.5">Sector 62, Electronic City, Noida</p>
                  <p className="text-xs text-slate-400 mt-1">Delhi NCR, Uttar Pradesh 201309, India</p>
                </div>
              </div>
            </div>

            {/* Confidentiality & Assurance Box */}
            <div className="rounded-2xl border border-emerald-500/20 bg-emerald-950/20 p-5">
              <div className="flex items-start gap-3.5">
                <ShieldCheck className="h-5 w-5 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-bold text-emerald-300">100% Confidentiality Assured</p>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                    We respect your intellectual property. We are happy to execute a bilateral Non-Disclosure Agreement (NDA) before reviewing your codebase or ideas.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Clean, Real-world Contact Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-ink-900/95 to-ink-950/95 p-8 sm:p-10 shadow-2xl backdrop-blur-xl relative">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white">Send us a message</h3>
                <p className="text-sm text-slate-400 mt-1.5">
                  Fill in the details below and we will get back to you with a preliminary assessment.
                </p>
              </div>

              {sent ? (
                <div className="rounded-2xl border border-emerald-500/30 bg-emerald-950/40 p-8 text-center space-y-4">
                  <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white">Message Sent Successfully!</h4>
                    <p className="text-sm text-slate-300 mt-2 max-w-md mx-auto leading-relaxed">
                      Thank you, <strong className="text-white">{submittedData?.name || 'there'}</strong>! Your inquiry has been received. Our solutions architects will review your requirements and reach out within 24 hours.
                    </p>
                  </div>
                  <Button
                    onClick={() => {
                      setSent(false);
                      setSubmittedData(null);
                    }}
                    variant="secondary"
                    className="mt-2"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <label className="block">
                      <span className="mb-2 block text-sm font-semibold text-slate-200">
                        Full Name <span className="text-brand-400">*</span>
                      </span>
                      <input
                        name="name"
                        required
                        className="field py-3.5"
                        placeholder="John Doe"
                      />
                    </label>

                    <label className="block">
                      <span className="mb-2 block text-sm font-semibold text-slate-200">
                        Work Email <span className="text-brand-400">*</span>
                      </span>
                      <input
                        name="email"
                        type="email"
                        required
                        className="field py-3.5"
                        placeholder="john@company.com"
                      />
                    </label>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <label className="block">
                      <span className="mb-2 block text-sm font-semibold text-slate-200">
                        Phone Number <span className="text-brand-400">*</span>
                      </span>
                      <input
                        name="phone"
                        type="tel"
                        required
                        className="field py-3.5"
                        placeholder="+91 98765 43210"
                      />
                    </label>

                    <label className="block">
                      <span className="mb-2 block text-sm font-semibold text-slate-200">
                        Company Name <span className="text-xs text-slate-400 font-normal">(Optional)</span>
                      </span>
                      <input
                        name="company"
                        className="field py-3.5"
                        placeholder="Your Company / Brand"
                      />
                    </label>
                  </div>

                  <label className="block">
                    <span className="mb-2 block text-sm font-semibold text-slate-200">
                      Service Interested In <span className="text-brand-400">*</span>
                    </span>
                    <select name="service" required defaultValue="" className="field py-3.5">
                      <option value="" disabled>Select the service you need</option>
                      {serviceOptions.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </label>

                  <label className="block">
                    <span className="mb-2 block text-sm font-semibold text-slate-200">
                      Project Details / Message <span className="text-brand-400">*</span>
                    </span>
                    <textarea
                      name="message"
                      rows="5"
                      required
                      className="field py-3.5 resize-y"
                      placeholder="Tell us about your project, timeline, features, or any specific requirements you have in mind..."
                    />
                  </label>

                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full justify-center text-base py-4 shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40 group mt-2"
                  >
                    <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    <span>{loading ? 'Sending...' : 'Send Message'}</span>
                  </Button>

                  <p className="text-xs text-center text-slate-400 pt-2">
                    🔒 We protect your data under strict commercial confidence. Zero spam, guaranteed.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Google Map & Office Location Section */}
      <section className="section bg-ink-900/50 border-y border-white/5 py-16 sm:py-20">
        <div className="container-x">
          <SectionHeading
            title="Visit our Engineering Hub in Noida / New Delhi"
            text="Located in the heart of Delhi NCR’s IT corridor. Meet our engineering leads in person for whiteboarding and architecture planning sessions."
          />

          <div className="mt-8 grid gap-8 lg:grid-cols-12 items-center">
            {/* Embedded Google Map (8 Cols) */}
            <div className="lg:col-span-8 overflow-hidden rounded-3xl border border-white/10 bg-ink-950 shadow-2xl relative">
              <iframe
                src="https://maps.google.com/maps?q=Sector%2062%2C%20Noida%2C%20Uttar%20Pradesh%20201309%2C%20India&t=&z=14&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="380"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Unique Digital Tech Office Location - Sector 62, Noida, NCR, India"
                className="w-full h-[320px] sm:h-[400px] grayscale contrast-125 opacity-90 hover:opacity-100 hover:grayscale-0 transition-all duration-300"
              />
              <div className="absolute top-4 left-4 rounded-xl border border-white/10 bg-ink-950/90 px-3 py-1.5 backdrop-blur shadow-lg text-xs font-semibold text-white flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Unique Digital Tech Headquarters</span>
              </div>
            </div>

            {/* Office Highlights & Hours (4 Cols) */}
            <div className="lg:col-span-4 space-y-4">
              <div className="card p-5 border-white/10">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <Building2 className="h-4 w-4 text-brand-400" />
                  <span>Physical Address</span>
                </h4>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  Unique Digital Tech<br />
                  Sector 62, Electronic City Tech Hub<br />
                  Noida, Delhi NCR, Uttar Pradesh 201309<br />
                  India
                </p>
                <a
                  href="https://maps.google.com/?q=Sector+62+Noida+Uttar+Pradesh+India"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-400 hover:text-brand-300 mt-3"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>

              <div className="card p-5 border-white/10">
                <h4 className="text-sm font-bold text-white flex items-center gap-2">
                  <Clock className="h-4 w-4 text-emerald-400" />
                  <span>Operational Hours</span>
                </h4>
                <ul className="text-xs text-slate-300 mt-2 space-y-1.5">
                  <li className="flex justify-between">
                    <span className="text-slate-400">Monday – Friday:</span>
                    <span className="font-semibold text-white">9:30 AM – 7:30 PM IST</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-slate-400">Saturday:</span>
                    <span className="font-semibold text-white">10:00 AM – 5:00 PM IST</span>
                  </li>
                  <li className="flex justify-between">
                    <span className="text-slate-400">Sunday:</span>
                    <span className="text-brand-300 font-medium">Emergency DevOps SLA Only</span>
                  </li>
                </ul>
              </div>

              <div className="card p-5 border-brand-500/30 bg-brand-500/5">
                <h4 className="text-xs font-bold text-brand-300 uppercase tracking-wide">
                  Schedule an In-Person Session
                </h4>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  Want to whiteboard your database schema, system architecture, or roadmap with us in Noida?
                </p>
                <a
                  href={`mailto:${company.email}?subject=In-Person Architecture Meeting Request`}
                  className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-500 to-brand-blue px-4 py-2.5 text-xs font-bold text-white shadow-md shadow-brand-500/25 transition hover:brightness-110"
                >
                  <Calendar className="h-3.5 w-3.5" />
                  <span>Request Office Meeting</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3-Step Discovery Roadmap */}
      <section className="section py-16 sm:py-20">
        <div className="container-x">
          <SectionHeading
            title="What happens after you reach out?"
            text="A clear, respectful, and transparent engineering engagement workflow from your initial message to kick-off."
          />

          <div className="grid gap-6 sm:grid-cols-3 mt-8">
            {[
              {
                step: '01',
                title: 'Technical Review in < 4 Hours',
                desc: 'Our solutions architect examines your specs, checks API viability, and prepares clarifying questions.',
              },
              {
                step: '02',
                title: '30-Minute Architecture Call',
                desc: 'We hop on Google Meet or phone to align on functional requirements, tech stack tradeoffs, and milestones.',
              },
              {
                step: '03',
                title: 'Written Scope Blueprint & Proposal',
                desc: 'You receive a detailed technical roadmap with locked milestone pricing, deliverables, and estimated sprint delivery dates.',
              },
            ].map((s, idx) => (
              <div key={idx} className="card p-6 border-white/10 relative">
                <span className="text-3xl font-extrabold text-brand-400 font-mono">{s.step}</span>
                <h4 className="text-base font-bold text-white mt-2">{s.title}</h4>
                <p className="text-xs text-slate-400 mt-2 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact FAQ Accordion */}
      <section className="section bg-ink-900/40 border-t border-white/5 py-16 sm:py-20">
        <div className="container-x max-w-4xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold sm:text-3xl text-white">
              Contact &amp; Engagement FAQs
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-2">
              Common questions answered before initiating contact with our engineering team.
            </p>
          </div>

          <div className="space-y-3">
            {contactFaqs.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-white/10 bg-ink-900/80 transition-all duration-200 overflow-hidden"
                >
                  <button
                    onClick={() => setActiveFaq(isOpen ? -1 : idx)}
                    className="flex w-full items-center justify-between p-4.5 sm:p-5 text-left text-xs sm:text-sm font-semibold text-white hover:text-brand-300 transition"
                    aria-expanded={isOpen}
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`h-4 w-4 shrink-0 text-brand-400 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm leading-relaxed text-slate-300 border-t border-white/5 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
