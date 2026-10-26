import { Sparkles } from 'lucide-react';

export default function PageHero({ badge, title, text, children, className = '' }) {
  return (
    <section className={`bg-hero-glow relative overflow-hidden border-b border-white/10 pt-36 pb-28 sm:pt-44 sm:pb-36 lg:pt-48 lg:pb-48 min-h-[78vh] sm:min-h-[84vh] lg:min-h-[90vh] flex flex-col justify-center ${className}`}>
      {/* Soft ambient lighting without grid boxes */}
      <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-80 w-[36rem] rounded-full bg-brand-500/15 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute top-1/3 -right-20 h-72 w-72 rounded-full bg-brand-blue/10 blur-3xl" aria-hidden="true" />
      
      <div className="container-x relative max-w-4xl text-center">
        {badge && (
          <div className="rise inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-4 py-1.5 text-xs font-semibold text-brand-300 mb-5 shadow-sm backdrop-blur">
            <Sparkles className="h-3.5 w-3.5 text-brand-400" />
            <span>{badge}</span>
          </div>
        )}
        <h1 className="rise text-4xl font-extrabold sm:text-5xl lg:text-6xl text-white leading-[1.15]">{title}</h1>
        {text && <p className="rise-2 mx-auto mt-5 max-w-2xl text-base sm:text-lg text-slate-300 leading-relaxed">{text}</p>}
        {children && <div className="rise-3 mt-8">{children}</div>}
      </div>
    </section>
  );
}
