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
  MessageSquare,
  Sparkles,
  ExternalLink,
  ChevronDown,
  Building2,
  FileCheck,
} from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import Button from '../components/ui/Button';
import SectionHeading from '../components/ui/SectionHeading';
import WhatsAppIcon from '../components/ui/WhatsAppIcon';
import { company } from '../data/site';

const domains = [
  'Website Development (Next.js / React)',
  'Mobile App Development (iOS & Android)',
  'Custom CRM / ERP & Reseller Engine',
  'WhatsApp Cloud API & Chatbot Automation',
  'Cloud Architecture & AWS DevOps',
  'Technical SEO & Performance Marketing',
];

const budgetRanges = [
  'Under ₹1,50,000 / $2,000 (MVP)',
  '₹1,50,000 – ₹3,50,000 / $2,000 – $4,500',
  '₹3,50,000 – ₹7,50,000 / $4,500 – $9,500',
  '₹7,50,000+ / $10,000+ (Enterprise)',
  'Monthly Retainer / Dedicated Squad',
];

const timelines = [
  'Immediate (Under 3 weeks - Fast-Track)',
  '1 to 2 Months (Standard Agile Sprint)',
  '3+ Months (Large-scale Enterprise)',
  'Flexible / Discovery Stage',
];

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [ndaChecked, setNdaChecked] = useState(true);
  const [activeFaq, setActiveFaq] = useState(0);

  const onSubmit = (e) => {
    e.preventDefault();
    const d = Object.fromEntries(new FormData(e.currentTarget));
    const msg = `*New Project Architecture Enquiry*\n` +
      `━━━━━━━━━━━━━━━━━━━\n` +
      `👤 *Name:* ${d.name}\n` +
      `🏢 *Company:* ${d.company || 'Not specified'}\n` +
      `📧 *Email:* ${d.email}\n` +
      `📱 *Phone:* ${d.phone}\n` +
      `🎯 *Domain:* ${d.domain}\n` +
      `💰 *Budget:* ${d.budget}\n` +
      `⏱️ *Timeline:* ${d.timeline}\n` +
      `🔒 *NDA Requested:* ${ndaChecked ? 'Yes' : 'No'}\n` +
      `📝 *Scope Notes:*\n${d.scope}\n` +
      `━━━━━━━━━━━━━━━━━━━\n` +
      `Sent via uniquedigitaltech.com`;

    window.open(`https://wa.me/${company.whatsapp}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener');
    setSent(true);
  };

  const contactFaqs = [
    {
      q: 'How fast can I expect an engineering response?',
      a: 'If you message on WhatsApp, our on-duty solutions engineer typically responds within 15 to 30 minutes during business hours (Mon-Sat, 9:30 AM to 7:30 PM IST). Form submissions and email inquiries are answered with a technical assessment within 4 to 6 business hours.',
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
      a: 'Absolutely. We welcome founders and enterprise teams at our development hub in Sector 62, Noida (Delhi NCR). Please schedule a prior appointment via WhatsApp or email so our lead solutions architect can be available to host you.',
    },
  ];

  return (
    <>
      <PageHero
        title="Let’s engineer your next competitive advantage."
        text="Have a product to build, legacy code to modernize or a high-concurrency architecture to scale? Talk directly with our solutions engineers."
      >
        <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-slate-300">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3.5 py-1">
            <Clock className="h-3.5 w-3.5 text-brand-400" />
            Average Response: &lt; 30 Minutes
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3.5 py-1">
            <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
            100% NDA Protection
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3.5 py-1">
            <Building2 className="h-3.5 w-3.5 text-amber-400" />
            Noida / New Delhi Tech Hub
          </span>
        </div>
      </PageHero>

      {/* Main Contact Grid & Form */}
      <section className="section py-12 sm:py-16">
        <div className="container-x grid gap-10 lg:grid-cols-12 items-start">
          {/* Left Column: Direct Contact Channels & Guarantee (5 Cols) */}
          <div className="space-y-4 lg:col-span-5">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-brand-400">
                Direct Communication Channels
              </span>
              <h2 className="text-2xl font-bold text-white mt-1">
                Reach the engineering team directly
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-2">
                No bureaucratic ticketing or junior sales gatekeepers. Speak directly with practitioners who understand system design and code.
              </p>
            </div>

            {/* Official Real WhatsApp Direct Channel Card */}
            <a
              href={`https://wa.me/${company.whatsapp}?text=Hi%20Unique%20Digital%20Tech%2C%20I%20would%20like%20to%20discuss%20a%20new%20software%20project`}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-between rounded-2xl border border-[#25D366]/40 bg-gradient-to-r from-emerald-950/40 via-ink-900/90 to-ink-950/90 p-5 shadow-lg shadow-[#25D366]/10 transition-all duration-300 hover:-translate-y-1 hover:border-[#25D366]/70 hover:shadow-[#25D366]/20"
            >
              <div className="flex items-center gap-3.5">
                <span className="relative grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-[#25D366] text-white shadow-md shadow-[#25D366]/30">
                  <span className="absolute -top-1 -right-1 flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-300" />
                  </span>
                  <WhatsAppIcon className="h-6 w-6 fill-white" />
                </span>
                <div>
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-bold text-white">Direct WhatsApp Hotline</p>
                    <span className="rounded bg-[#25D366]/20 px-1.5 py-0.5 text-[10px] font-bold text-[#25D366]">
                      Fastest
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 font-mono mt-0.5">+{company.whatsapp}</p>
                  <p className="text-[11px] text-emerald-400 mt-0.5">Online Mon–Sat · Avg reply 15 mins</p>
                </div>
              </div>
              <ExternalLink className="h-4 w-4 text-emerald-400 transition-transform group-hover:translate-x-1" />
            </a>

            {/* Email Card */}
            <div className="rounded-2xl border border-white/10 bg-ink-900/80 p-5 backdrop-blur transition hover:border-brand-500/40">
              <div className="flex items-start gap-3.5">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-brand-500/10 text-brand-400 border border-brand-500/20">
                  <Mail className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-semibold text-slate-400">Formal Architecture Inquiries &amp; RFPs</p>
                  <a
                    href={`mailto:${company.email}`}
                    className="text-sm font-bold text-white hover:text-brand-300 transition-colors break-all"
                  >
                    {company.email}
                  </a>
                  <p className="text-[11px] text-slate-400 mt-1">Send spec sheets, wireframes or RFPs</p>
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <div className="rounded-2xl border border-white/10 bg-ink-900/80 p-5 backdrop-blur transition hover:border-brand-500/40">
              <div className="flex items-start gap-3.5">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20">
                  <Phone className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-semibold text-slate-400">Direct Office Voice Line</p>
                  <a
                    href={`tel:${company.phone.replace(/\s/g, '')}`}
                    className="text-sm font-bold text-white hover:text-sky-300 transition-colors font-mono"
                  >
                    {company.phone}
                  </a>
                  <p className="text-[11px] text-slate-400 mt-1">Mon–Sat: 9:30 AM – 7:30 PM IST</p>
                </div>
              </div>
            </div>

            {/* Physical Location Card */}
            <div className="rounded-2xl border border-white/10 bg-ink-900/80 p-5 backdrop-blur transition hover:border-brand-500/40">
              <div className="flex items-start gap-3.5">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs font-semibold text-slate-400">Engineering Headquarters</p>
                  <p className="text-sm font-bold text-white">Sector 62, Electronic City, Noida</p>
                  <p className="text-[11px] text-slate-400 mt-0.5">Delhi NCR, Uttar Pradesh 201309, India</p>
                </div>
              </div>
            </div>

            {/* NDA Guarantee Pill Box */}
            <div className="rounded-2xl border border-emerald-500/20 bg-emerald-950/20 p-4">
              <div className="flex items-center gap-2.5">
                <FileCheck className="h-5 w-5 text-emerald-400 shrink-0" />
                <div>
                  <p className="text-xs font-bold text-emerald-300">Confidentiality Guarantee</p>
                  <p className="text-[11px] text-slate-300 mt-0.5">
                    We execute a Non-Disclosure Agreement (NDA) before viewing your source code, proprietary algorithms, or product roadmap.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: High-Impact Project Scope Request Form (7 Cols) */}
          <div className="lg:col-span-7">
            <form
              onSubmit={onSubmit}
              className="rounded-3xl border border-brand-500/20 bg-gradient-to-b from-ink-900/95 via-ink-900/90 to-ink-950/95 p-6 sm:p-9 space-y-5 shadow-2xl backdrop-blur-xl relative overflow-hidden"
            >
              {/* Subtle ambient glow inside form */}
              <div className="pointer-events-none absolute -top-20 -right-20 h-44 w-44 rounded-full bg-brand-500/10 blur-2xl" />

              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-500/30 bg-brand-500/10 px-3 py-0.5 text-xs font-semibold text-brand-300 mb-2">
                  <Sparkles className="h-3.5 w-3.5" />
                  PROJECT SPECIFICATION FORM
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Request an Architecture Review &amp; Scope Proposal
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Fill in your project goals and an engineering lead will evaluate technical viability and estimate delivery milestones.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block text-xs sm:text-sm">
                  <span className="mb-1.5 block font-semibold text-white">Full Name *</span>
                  <input
                    name="name"
                    required
                    className="field text-xs sm:text-sm"
                    placeholder="e.g. Vikramaditya Sharma"
                  />
                </label>
                <label className="block text-xs sm:text-sm">
                  <span className="mb-1.5 block font-semibold text-white">Company / Project Name</span>
                  <input
                    name="company"
                    className="field text-xs sm:text-sm"
                    placeholder="e.g. FinEdge Technologies"
                  />
                </label>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block text-xs sm:text-sm">
                  <span className="mb-1.5 block font-semibold text-white">Work Email Address *</span>
                  <input
                    name="email"
                    type="email"
                    required
                    className="field text-xs sm:text-sm"
                    placeholder="name@company.com"
                  />
                </label>
                <label className="block text-xs sm:text-sm">
                  <span className="mb-1.5 block font-semibold text-white">Phone / WhatsApp Number *</span>
                  <input
                    name="phone"
                    type="tel"
                    required
                    className="field text-xs sm:text-sm"
                    placeholder="+91 98765 43210"
                  />
                </label>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block text-xs sm:text-sm">
                  <span className="mb-1.5 block font-semibold text-white">Primary Architecture Domain *</span>
                  <select name="domain" required defaultValue="" className="field text-xs sm:text-sm">
                    <option value="" disabled>Select project domain</option>
                    {domains.map((d) => (
                      <option key={d} value={d}>{d}</option>
                    ))}
                  </select>
                </label>

                <label className="block text-xs sm:text-sm">
                  <span className="mb-1.5 block font-semibold text-white">Estimated Budget Range *</span>
                  <select name="budget" required defaultValue="" className="field text-xs sm:text-sm">
                    <option value="" disabled>Select budget bracket</option>
                    {budgetRanges.map((b) => (
                      <option key={b} value={b}>{b}</option>
                    ))}
                  </select>
                </label>
              </div>

              <label className="block text-xs sm:text-sm">
                <span className="mb-1.5 block font-semibold text-white">Target Sprint Timeline *</span>
                <select name="timeline" required defaultValue="" className="field text-xs sm:text-sm">
                  <option value="" disabled>Select expected timeline</option>
                  {timelines.map((t) => (
                    <option key={t} value={t}>{t}</option>
                  ))}
                </select>
              </label>

              <label className="block text-xs sm:text-sm">
                <span className="mb-1.5 block font-semibold text-white">Project Scope &amp; Tech Requirements *</span>
                <textarea
                  name="scope"
                  rows="4"
                  required
                  className="field text-xs sm:text-sm"
                  placeholder="Outline your application logic, tech stack preferences (e.g. Next.js, Node.js, Flutter), target audience, and key problems to solve..."
                />
              </label>

              {/* Bilateral NDA Checkbox */}
              <div className="flex items-center gap-2.5 pt-1">
                <input
                  type="checkbox"
                  id="nda"
                  checked={ndaChecked}
                  onChange={(e) => setNdaChecked(e.target.checked)}
                  className="h-4 w-4 rounded border-white/20 bg-ink-800 text-brand-500 focus:ring-brand-500"
                />
                <label htmlFor="nda" className="text-xs text-slate-300 cursor-pointer select-none">
                  Please execute a mutual Non-Disclosure Agreement (NDA) prior to technical calls.
                </label>
              </div>

              <Button
                type="submit"
                className="w-full justify-center shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40 text-sm sm:text-base py-3.5 group"
              >
                <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                <span>Submit Scope &amp; Connect with Solutions Architect</span>
              </Button>

              {sent && (
                <div className="rounded-xl border border-emerald-500/30 bg-emerald-950/40 p-4 text-xs sm:text-sm text-emerald-300 flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0" />
                  <span>
                    Thank you! WhatsApp has been opened with your scope summary. Send the message to instantly connect with our lead architect.
                  </span>
                </div>
              )}

              <p className="text-[11px] text-center text-slate-500">
                🔒 We treat all inquiries under strict commercial confidence. No spam, ever.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Interactive Google Map & Office Location Section */}
      <section className="section bg-ink-900/50 border-y border-white/5 py-12 sm:py-16">
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
                  Schedule an In-Person Architecture Session
                </h4>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  Want to whiteboard your database schema, system architecture, or product roadmap with us in Noida?
                </p>
                <a
                  href={`https://wa.me/${company.whatsapp}?text=Hi%20Unique%20Digital%20Tech%2C%20I%20would%20like%20to%20book%20an%20in-person%20meeting%20at%20your%20Noida%20office.`}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-500 to-brand-blue px-4 py-2 text-xs font-bold text-white shadow-md shadow-brand-500/25 transition hover:brightness-110"
                >
                  <Calendar className="h-3.5 w-3.5" />
                  <span>Book In-Person Meeting</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3-Step Discovery Roadmap */}
      <section className="section py-12 sm:py-16">
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
      <section className="section bg-ink-900/40 border-t border-white/5 py-12 sm:py-16">
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
