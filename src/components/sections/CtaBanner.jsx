import Button from '../ui/Button';
import WhatsAppIcon from '../ui/WhatsAppIcon';
import { company } from '../../data/site';

export default function CtaBanner({
  title = 'Let’s engineer your next competitive advantage.',
  text = 'Have an application to build, a legacy system to modernize or an aggressive growth target? Talk directly with our solutions engineers.',
}) {
  return (
    <section className="section">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-3xl border border-brand-500/30 bg-gradient-to-br from-ink-850 via-ink-900 to-ink-950 px-6 py-14 text-center sm:px-14 shadow-2xl">
          <div className="bg-hero-glow absolute inset-0 opacity-80" aria-hidden="true" />

          {/* Ambient Lighting Spheres */}
          <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-72 w-96 rounded-full bg-brand-500/20 blur-3xl" />

          <div className="relative mx-auto max-w-2xl">
            <h2 className="text-3xl font-extrabold sm:text-4xl text-white tracking-tight">{title}</h2>
            <p className="mt-4 text-slate-300 leading-relaxed text-base sm:text-lg">{text}</p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap">
              <Button to="/contact" className="w-full sm:w-auto shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40">
                Request Review
              </Button>
              <Button to="/services" variant="secondary" className="w-full sm:w-auto">
                Explore services
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
