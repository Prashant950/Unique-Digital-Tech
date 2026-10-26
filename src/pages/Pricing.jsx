import { useState } from 'react';
import {
  Check,
  Rocket,
  Shield,
  HelpCircle,
  ArrowRight,
  Sparkles,
  Zap,
  Clock,
  ChevronDown,
} from 'lucide-react';
import Button from '../components/ui/Button';
import SectionHeading from '../components/ui/SectionHeading';
import WhatsAppIcon from '../components/ui/WhatsAppIcon';
import {
  company,
  pricingPlans,
  retainerPlans,
  pricingAddons,
  pricingFaqs,
} from '../data/site';

export default function Pricing() {
  const [currency, setCurrency] = useState('INR'); // 'INR' or 'USD'
  const [billingModel, setBillingModel] = useState('project'); // 'project' or 'retainer'
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-hero-glow relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-28 lg:pt-44 lg:pb-36 min-h-[78vh] sm:min-h-[84vh] lg:min-h-[90vh] flex flex-col justify-center border-b border-white/10">
        {/* Glow Spheres */}
        <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-96 w-[40rem] rounded-full bg-brand-500/15 blur-3xl" aria-hidden="true" />
        <div className="pointer-events-none absolute top-1/3 -right-20 h-72 w-72 rounded-full bg-brand-blue/10 blur-3xl" aria-hidden="true" />

        <div className="container-x relative text-center max-w-4xl">
          <div className="rise inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-4 py-1.5 text-xs font-semibold text-brand-300 mb-5 shadow-sm backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-brand-400" />
            <span>TRANSPARENT SOFTWARE ENGINEERING PRICING</span>
          </div>

          <h1 className="rise-2 text-4xl font-extrabold leading-[1.15] sm:text-6xl text-white">
            Predictable Investment. Zero Hidden Costs. <br className="hidden sm:block" />
            <span className="text-gradient">Production-Grade Code.</span>
          </h1>

          <p className="rise-3 mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
            Choose between fixed-price milestone delivery for turnkey projects or dedicated engineering squads for continuous velocity. 100% source code ownership from day one.
          </p>

          {/* Core Guarantees Pill Bar */}
          <div className="rise-3 mt-8 flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-slate-300">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-ink-900/80 px-3.5 py-1.5 backdrop-blur">
              <Shield className="h-4 w-4 text-emerald-400" />
              100% Code &amp; IP Ownership
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-ink-900/80 px-3.5 py-1.5 backdrop-blur">
              <Zap className="h-4 w-4 text-amber-400" />
              30/40/30 Milestone Billing
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-ink-900/80 px-3.5 py-1.5 backdrop-blur">
              <Clock className="h-4 w-4 text-brand-400" />
              30–90 Day Post-Launch SLA Warranty
            </span>
          </div>

          {/* Interactive Controls Bar */}
          <div className="rise-3 mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            {/* Billing Model Selector */}
            <div className="flex rounded-2xl border border-white/10 bg-ink-900/80 p-1 backdrop-blur shadow-lg">
              <button
                onClick={() => setBillingModel('project')}
                className={`rounded-xl px-5 py-2.5 text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  billingModel === 'project'
                    ? 'bg-gradient-to-r from-brand-500 to-brand-blue text-white shadow-md shadow-brand-500/25'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Fixed-Scope Projects (Turnkey)
              </button>
              <button
                onClick={() => setBillingModel('retainer')}
                className={`rounded-xl px-5 py-2.5 text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  billingModel === 'retainer'
                    ? 'bg-gradient-to-r from-brand-500 to-brand-blue text-white shadow-md shadow-brand-500/25'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Monthly Engineering Retainers
              </button>
            </div>

            {/* Currency Selector (INR vs USD) */}
            <div className="flex items-center rounded-2xl border border-white/10 bg-ink-900/80 p-1 backdrop-blur">
              <button
                onClick={() => setCurrency('INR')}
                className={`rounded-xl px-3.5 py-2 text-xs font-bold transition-all ${
                  currency === 'INR'
                    ? 'bg-brand-500 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                ₹ INR
              </button>
              <button
                onClick={() => setCurrency('USD')}
                className={`rounded-xl px-3.5 py-2 text-xs font-bold transition-all ${
                  currency === 'USD'
                    ? 'bg-brand-500 text-white shadow-sm'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                $ USD
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Cards Section */}
      <section className="section py-16 sm:py-20 relative">
        <div className="container-x">
          {billingModel === 'project' ? (
            /* Fixed-Scope Turnkey Project Plans */
            <div>
              <div className="text-center max-w-2xl mx-auto mb-12">
                <h2 className="text-2xl font-bold sm:text-3xl text-white">
                  Turnkey Product Delivery Packages
                </h2>
                <p className="mt-2 text-sm text-slate-400">
                  Fixed pricing with clearly defined milestone outcomes. You review and approve deliverables before releasing milestone payments.
                </p>
              </div>

              <div className="grid gap-8 lg:grid-cols-3 items-stretch">
                {pricingPlans.map((plan) => {
                  const isPopular = plan.popular;
                  return (
                    <div
                      key={plan.id}
                      className={`relative flex flex-col justify-between rounded-3xl border p-7 sm:p-8 backdrop-blur transition-all duration-300 ${
                        isPopular
                          ? 'border-brand-500/60 bg-gradient-to-b from-ink-850 via-ink-900 to-ink-950 shadow-[0_0_40px_rgba(14,165,233,0.22)] lg:-translate-y-2'
                          : 'border-white/10 bg-ink-900/70 hover:border-white/20 hover:bg-ink-900'
                      }`}
                    >
                      {/* Popular Badge */}
                      {isPopular && (
                        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-brand-500 to-brand-blue px-4 py-1 text-xs font-extrabold uppercase tracking-wider text-white shadow-lg shadow-brand-500/40">
                          {plan.badge}
                        </div>
                      )}

                      <div>
                        {/* Plan Header */}
                        <div className="flex items-center justify-between">
                          <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                          {!isPopular && (
                            <span className="rounded-full bg-white/5 border border-white/10 px-3 py-0.5 text-xs font-medium text-slate-300">
                              {plan.badge}
                            </span>
                          )}
                        </div>

                        <p className="mt-3 text-xs leading-relaxed text-slate-400 min-h-[36px]">
                          {plan.tagline}
                        </p>

                        {/* Price Display */}
                        <div className="mt-6 border-y border-white/10 py-5">
                          <div className="flex items-baseline gap-2">
                            <span className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                              {currency === 'INR' ? plan.inrPrice : plan.usdPrice}
                            </span>
                          </div>
                          <p className="mt-1 text-xs text-brand-300/80 font-medium">
                            {currency === 'INR' ? plan.inrSub : plan.usdSub}
                          </p>

                          <div className="mt-3 inline-flex items-center gap-1.5 rounded-lg bg-white/5 border border-white/10 px-2.5 py-1 text-xs text-slate-300">
                            <Clock className="h-3.5 w-3.5 text-brand-400" />
                            <span>{plan.timeline}</span>
                          </div>
                        </div>

                        {/* Feature Highlights */}
                        <div className="mt-6 space-y-3">
                          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                            What's Included:
                          </p>
                          <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                            {plan.features.map((feat, idx) => (
                              <li key={idx} className="flex items-start gap-2.5">
                                <Check className="h-4 w-4 shrink-0 text-emerald-400 mt-0.5" />
                                <span>{feat}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Card CTA */}
                      <div className="mt-8 pt-6 border-t border-white/10">
                        <Button
                          to="/contact"
                          variant={isPopular ? 'primary' : 'secondary'}
                          className="w-full justify-center group"
                        >
                          <span>{plan.cta}</span>
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                        <p className="mt-2.5 text-center text-[11px] text-slate-500">
                          Includes NDA &amp; 100% IP Handover
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            /* Dedicated Engineering Retainers */
            <div>
              <div className="text-center max-w-2xl mx-auto mb-12">
                <h2 className="text-2xl font-bold sm:text-3xl text-white">
                  Dedicated Engineering Retainers
                </h2>
                <p className="mt-2 text-sm text-slate-400">
                  Embed vetted senior software engineers or a complete autonomous squad directly into your product workflow. Monthly flexibility with no long-term lock-in.
                </p>
              </div>

              <div className="grid gap-8 lg:grid-cols-3 items-stretch">
                {retainerPlans.map((plan) => {
                  const isPopular = plan.popular;
                  return (
                    <div
                      key={plan.id}
                      className={`relative flex flex-col justify-between rounded-3xl border p-7 sm:p-8 backdrop-blur transition-all duration-300 ${
                        isPopular
                          ? 'border-brand-500/60 bg-gradient-to-b from-ink-850 via-ink-900 to-ink-950 shadow-[0_0_40px_rgba(14,165,233,0.22)] lg:-translate-y-2'
                          : 'border-white/10 bg-ink-900/70 hover:border-white/20'
                      }`}
                    >
                      {isPopular && (
                        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-brand-500 to-brand-blue px-4 py-1 text-xs font-extrabold uppercase tracking-wider text-white shadow-lg shadow-brand-500/40">
                          Recommended
                        </div>
                      )}

                      <div>
                        <h3 className="text-xl font-bold text-white">{plan.name}</h3>
                        <div className="mt-2 inline-block rounded-lg bg-brand-500/10 border border-brand-500/20 px-2.5 py-0.5 text-xs font-semibold text-brand-300">
                          {plan.hours}
                        </div>

                        <p className="mt-3 text-xs leading-relaxed text-slate-400">
                          {plan.desc}
                        </p>

                        <div className="mt-6 border-y border-white/10 py-5">
                          <div className="flex items-baseline gap-2">
                            <span className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
                              {currency === 'INR' ? plan.inrPrice : plan.usdPrice}
                            </span>
                            <span className="text-xs text-slate-400">
                              {currency === 'INR' ? plan.inrPeriod : plan.usdPeriod}
                            </span>
                          </div>
                          <p className="mt-1 text-xs text-slate-500">
                            Month-to-month · 2 weeks cancellation notice
                          </p>
                        </div>

                        <div className="mt-6 space-y-3">
                          <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                            Deliverables &amp; Workflow:
                          </p>
                          <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
                            {plan.deliverables.map((item, idx) => (
                              <li key={idx} className="flex items-start gap-2.5">
                                <Check className="h-4 w-4 shrink-0 text-emerald-400 mt-0.5" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="mt-8 pt-6 border-t border-white/10">
                        <Button
                          to="/contact"
                          variant={isPopular ? 'primary' : 'secondary'}
                          className="w-full justify-center group"
                        >
                          <span>Engage Dedicated Talent</span>
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </section>

      

    

      {/* Specialized Engineering Add-Ons */}
      <section className="section bg-ink-900/40 border-y border-white/5 py-16 sm:py-20">
        <div className="container-x">
          <SectionHeading
            title="Specialized Engineering Sprints &amp; Add-ons"
            text="Need standalone micro-deliverables or infrastructure hardening? Bolt these high-impact sprints onto any project."
          />

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {pricingAddons.map((addon, idx) => (
              <div
                key={idx}
                className="card p-6 flex flex-col justify-between hover:border-brand-500/40 transition-all duration-300"
              >
                <div>
                  <span className="inline-block rounded-full bg-brand-500/10 border border-brand-500/20 px-2.5 py-0.5 text-[11px] font-semibold text-brand-300">
                    {addon.tag}
                  </span>
                  <h3 className="text-base font-bold text-white mt-3">{addon.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-400">{addon.desc}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                  <span className="text-lg font-extrabold text-white">
                    {currency === 'INR' ? addon.inr : addon.usd}
                  </span>
                  <a
                    href={`https://wa.me/${company.whatsapp}?text=Hi%20Unique%20Digital%20Tech%2C%20I%20am%20interested%20in%20the%20${encodeURIComponent(
                      addon.title
                    )}%20add-on.`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xs font-semibold text-brand-400 hover:text-brand-300 flex items-center gap-1"
                  >
                    <span>Add to scope</span>
                    <ArrowRight className="h-3 w-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestone Billing Blueprint (How We Bill) */}
      <section className="section py-16 sm:py-20">
        <div className="container-x">
          <SectionHeading
            title="The 3-Step Milestone Guarantee"
            text="How our milestone billing ensures you never pay for unverified code or broken promises."
          />

          <div className="grid gap-6 sm:grid-cols-3">
            {[
              {
                step: '30%',
                title: 'Phase 1: Architecture Blueprint & Kickoff',
                desc: 'Covers database schema design, Figma design system, API contract specifications, and Git repository setup.',
              },
              {
                step: '40%',
                title: 'Phase 2: Interactive Staging Demo',
                desc: 'Demonstration of functional frontend, backend REST/WebSocket APIs, database operations, and user auth on private staging.',
              },
              {
                step: '30%',
                title: 'Phase 3: Production Release & IP Handover',
                desc: 'Full security audit, AWS/Vercel production release, post-launch testing, and 100% transfer of code repository and keys.',
              },
            ].map((m, idx) => (
              <div key={idx} className="card p-6 border-white/10 relative">
                <span className="text-3xl font-black text-brand-400">{m.step}</span>
                <h4 className="text-base font-bold text-white mt-2">{m.title}</h4>
                <p className="text-xs text-slate-400 leading-relaxed mt-2">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing FAQs */}
      <section className="section bg-ink-900/40 border-t border-white/5 py-16 sm:py-20">
        <div className="container-x max-w-4xl">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-brand-500/30 bg-brand-500/10 px-3.5 py-1 text-xs font-semibold text-brand-300 mb-3">
              <HelpCircle className="h-3.5 w-3.5" />
              COMMERCIAL TRANSPARENCY
            </span>
            <h2 className="text-3xl font-extrabold sm:text-4xl text-white">
              Frequently Asked <span className="text-gradient">Pricing Questions</span>
            </h2>
          </div>

          <div className="space-y-3">
            {pricingFaqs.map((faq, idx) => {
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

      {/* Bottom CTA Banner */}
      <section className="section py-16">
        <div className="container-x">
          <div className="relative overflow-hidden rounded-3xl border border-brand-500/30 bg-gradient-to-br from-ink-850 via-ink-900 to-ink-950 px-6 py-14 text-center sm:px-14 shadow-2xl">
            <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-72 w-96 rounded-full bg-brand-500/20 blur-3xl" />
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              Have a custom RFP or complex technical requirements?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-300 text-sm sm:text-base">
              Send us your specification document or book a confidential architecture consultation with our engineering directors.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
              <Button to="/contact" className="w-full sm:w-auto shadow-lg shadow-brand-500/25">
                <Rocket className="h-4 w-4" />
                Schedule Architecture Review
              </Button>
              <a
                href={`https://wa.me/${company.whatsapp}?text=Hi%20Unique%20Digital%20Tech%2C%20I%20have%20a%20project%20and%20want%20to%20discuss%20pricing%20and%20timeline.`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#25D366] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-[#25D366]/30 transition hover:bg-[#20ba59] sm:w-auto"
              >
                <WhatsAppIcon className="h-4 w-4 fill-white" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
