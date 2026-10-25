import { useState } from 'react';
import { Star, ShieldCheck, MessageSquareQuote } from 'lucide-react';
import { testimonials } from '../../data/site';
import SectionHeading from '../ui/SectionHeading';

function CompactReviewCard({ review }) {
  const { name, role, company, avatar, avatarBg, location, service, rating, metric, quote } = review;

  return (
    <div className="group/card relative flex h-full w-[265px] sm:w-[290px] shrink-0 flex-col justify-between rounded-xl border border-white/10 bg-ink-900/90 p-3.5 sm:p-4 backdrop-blur-md transition-all duration-300 hover:border-brand-400/60 hover:bg-ink-850 hover:shadow-[0_8px_25px_rgba(14,165,233,0.18)] overflow-hidden">
      {/* Ambient background glow on card hover */}
      <div className="pointer-events-none absolute -top-8 -right-8 h-20 w-20 rounded-full bg-brand-500/10 blur-xl opacity-0 transition-opacity duration-300 group-hover/card:opacity-100" />

      <div>
        {/* Top Header: 5 Stars & Verified Badge */}
        <div className="flex items-center justify-between gap-1.5 border-b border-white/5 pb-2">
          <div className="flex items-center gap-0.5">
            {[...Array(rating)].map((_, i) => (
              <Star key={i} className="h-3 w-3 fill-amber-400 text-amber-400 drop-shadow-[0_0_3px_rgba(251,191,36,0.4)]" />
            ))}
            <span className="ml-1 text-[10px] font-bold text-amber-300">5.0</span>
          </div>

          <span className="inline-flex items-center gap-1 rounded-full border border-brand-500/20 bg-brand-500/10 px-2 py-0.5 text-[9px] font-medium text-brand-300 shrink-0">
            <ShieldCheck className="h-2.5 w-2.5 text-brand-400" />
            Verified
          </span>
        </div>

        {/* Highlight Result Pill - Guaranteed No Overflow */}
        <div className="mt-2">
          <span className="inline-block max-w-full truncate rounded-md bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 text-[10.5px] font-semibold text-emerald-400">
            {metric}
          </span>
        </div>

        {/* Review Quote - Compact & Clean Typography */}
        <div className="relative mt-2">
          <MessageSquareQuote className="absolute -left-0.5 -top-1 h-3.5 w-3.5 text-brand-500/20" />
          <p className="text-[11px] sm:text-xs leading-relaxed text-slate-300 pl-3 italic">
            "{quote}"
          </p>
        </div>
      </div>

      {/* Client Profile Footer - Clean Stacked Layout so text NEVER overflows or sticks out */}
      <div className="mt-3.5 flex items-center gap-2.5 border-t border-white/5 pt-2.5 min-w-0">
        <div
          className={`grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-gradient-to-br ${avatarBg} text-[10px] font-bold text-white shadow-sm shadow-brand-500/10`}
        >
          {avatar}
        </div>
        <div className="min-w-0 flex-1">
          <h4 className="text-xs font-bold text-white group-hover/card:text-brand-300 transition-colors truncate">
            {name}
          </h4>
          <p className="text-[10px] sm:text-[10.5px] text-slate-400 truncate">
            {role}, <span className="text-slate-300 font-medium">{company}</span>
          </p>
          <p className="text-[9.5px] text-brand-400/80 truncate mt-0.5 font-medium">
            {service} · <span className="text-slate-500">{location}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'SaaS & Web', 'Mobile Apps', 'WhatsApp & CRM', 'Cloud & DevOps'];

  const filtered = testimonials.filter((t) => {
    if (activeCategory === 'All') return true;
    if (activeCategory === 'SaaS & Web') return t.service.includes('SaaS') || t.service.includes('Next.js') || t.service.includes('E-Commerce');
    if (activeCategory === 'Mobile Apps') return t.service.includes('Mobile');
    if (activeCategory === 'WhatsApp & CRM') return t.service.includes('WhatsApp') || t.service.includes('ERP');
    if (activeCategory === 'Cloud & DevOps') return t.service.includes('DevOps') || t.service.includes('Cloud');
    return true;
  });

  return (
    <section className="section relative overflow-hidden bg-gradient-to-b from-ink-950 via-ink-900 to-ink-950 py-10 sm:py-14 border-t border-white/5" id="testimonials">
      {/* Background Ambient Lighting */}
      <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-80 w-[36rem] rounded-full bg-brand-500/10 blur-3xl" aria-hidden="true" />

      <div className="container-x relative">
        {/* Exact Requested Headings */}
        <SectionHeading
          title="What Our Clients Say"
          text="Hear from the businesses we've helped transform"
        />

        {/* Category Filters */}
        <div className="mb-5 flex flex-wrap items-center justify-center gap-1.5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-lg px-3 py-1 text-[11px] font-semibold transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-brand-500 to-brand-blue text-white shadow-sm shadow-brand-500/25'
                  : 'border border-white/10 bg-ink-900/60 text-slate-400 hover:border-brand-500/30 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* SINGLE ROW Continuous Autoscrolling Marquee without black side overlays for 100% clear view */}
      <div className="pause-marquee relative overflow-hidden py-1">
        {/* Single Row - Infinite Left Scroll with Pause on Hover */}
        <div className="flex overflow-hidden py-2">
          <div className="animate-reviews-marquee-left flex gap-3.5">
            {[...filtered, ...filtered, ...filtered, ...filtered].map((review, idx) => (
              <CompactReviewCard key={`single-${review.id}-${idx}`} review={review} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
