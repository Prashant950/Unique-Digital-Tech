import Button from '../ui/Button';
import BorderBeam from '../ui/BorderBeam';
import { Sparkles, ArrowRight, Rocket } from 'lucide-react';

export default function CtaBanner({
  title = 'Let’s engineer your next competitive advantage.',
  text = 'Have an application to build, a legacy system to modernize or an aggressive growth target? Talk directly with our senior software engineers.',
}) {
  return (
    <section className="section overflow-hidden">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-3xl border border-brand-500/30 bg-gradient-to-br from-ink-900 via-ink-950 to-ink-900 px-6 py-14 sm:py-16 text-center sm:px-14 shadow-2xl">
          {/* Animated Border Beam */}
          <BorderBeam duration={8} color="#38bdf8" rx={24} />

          {/* Background Ambient Glows & Dot Grid */}
          <div className="absolute inset-0 bg-dot-grid opacity-50 pointer-events-none" />
          <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-72 w-96 rounded-full bg-brand-500/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 right-10 h-60 w-60 rounded-full bg-brand-blue/15 blur-3xl" />

          <div className="relative mx-auto max-w-2xl z-10">
            {/* Live Availability Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-3.5 py-1 text-xs font-semibold text-brand-300 mb-5 shadow-sm backdrop-blur">
              <Sparkles className="h-3.5 w-3.5 text-brand-400" />
              <span>Sprint Slots Open For Q1–Q2 2026</span>
            </div>

            <h2 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
              {title}
            </h2>
            <p className="mt-4 text-slate-300 leading-relaxed text-base sm:text-lg">
              {text}
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-3.5 sm:flex-row sm:flex-wrap">
              <Button
                to="/contact"
                className="w-full sm:w-auto shadow-xl shadow-brand-500/30 hover:shadow-brand-500/50"
              >
                <Rocket className="h-4 w-4" />
                <span>Start Your Project</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button to="/services" variant="secondary" className="w-full sm:w-auto">
                Explore Services &amp; Tech
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
