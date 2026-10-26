import { Link, useParams, Navigate } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';
import PageHero from '../components/ui/PageHero';
import Button from '../components/ui/Button';
import Icon from '../components/ui/Icon';
import SectionHeading from '../components/ui/SectionHeading';
import Process from '../components/sections/Process';
import FeatureCards from '../components/sections/FeatureCards';
import CtaBanner from '../components/sections/CtaBanner';
import WhatsAppIcon from '../components/ui/WhatsAppIcon';
import { services, valueCards, company } from '../data/site';

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);
  if (!service) return <Navigate to="/services" replace />;
  const others = services.filter((s) => s.slug !== slug);

  return (
    <>
      <PageHero
        badge="SPECIALIZED ENGINEERING PRACTICE"
        title={service.title}
        text={service.short}
      >
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button to="/contact" className="shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40">
            Discuss this project
          </Button>

          <a
            href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent(
              `Hi Unique Digital Tech, I would like to enquire about your ${service.title} services.`
            )}`}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 via-[#25D366] to-emerald-600 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-emerald-500/25 transition-all duration-300 hover:scale-105 hover:shadow-emerald-500/50 hover:brightness-110 active:scale-95"
          >
            <WhatsAppIcon className="h-5 w-5 fill-white transition-transform duration-300 group-hover:rotate-12" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </PageHero>

      <section className="section">
        <div className="container-x grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <span className="grid h-14 w-14 place-items-center rounded-xl bg-brand-500/10 text-brand-400 border border-brand-500/20 shadow-md">
              <Icon name={service.icon} className="h-7 w-7" />
            </span>
            <h2 className="mt-6 text-3xl font-bold">What we deliver</h2>
            <p className="mt-4 leading-relaxed text-slate-400">{service.description}</p>
            <ul className="mt-8 space-y-4">
              {service.capabilities.map((c) => (
                <li
                  key={c}
                  className="group flex items-start gap-3 rounded-2xl border border-white/10 bg-gradient-to-b from-ink-900/80 to-ink-950/80 p-4 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-brand-400/50 hover:shadow-md"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-400 transition group-hover:scale-110" />
                  <span className="text-slate-200 group-hover:text-white transition-colors">{c}</span>
                </li>
              ))}
            </ul>
          </div>
          <aside className="space-y-6">
            <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-ink-900/80 to-ink-950/80 p-6 backdrop-blur">
              <h3 className="text-base font-bold text-white">Tools we use</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {service.tools.map((t) => (
                  <span
                    key={t}
                    className="rounded-lg border border-white/10 bg-ink-800 px-3 py-1.5 text-xs font-medium text-slate-300 shadow-sm transition-all duration-200 hover:scale-105 hover:border-brand-400/50 hover:bg-brand-500/15 hover:text-white cursor-default"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-ink-900/80 to-ink-950/80 p-6 backdrop-blur">
              <h3 className="text-base font-bold text-white">Other services</h3>
              <ul className="mt-4 space-y-2 text-sm">
                {others.map((o) => (
                  <li key={o.slug}>
                    <Link
                      to={`/services/${o.slug}`}
                      className="block rounded-lg px-2 py-1.5 text-slate-400 transition hover:bg-white/5 hover:text-brand-300"
                    >
                      {o.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>

      {/* Modern Engineering Over Legacy Bottlenecks */}
      <section className="section border-y border-white/5 bg-ink-900/50">
        <div className="container-x">
          <SectionHeading
            title="Modern engineering over legacy bottlenecks"
            text="Outdated codebases, slow rendering and fragmented marketing kill business momentum. Here is how we build your competitive advantage."
          />
          <FeatureCards items={valueCards} />
        </div>
      </section>

      <section className="section">
        <div className="container-x">
          <SectionHeading title="From brief to production" />
          <Process />
        </div>
      </section>
      <CtaBanner />
    </>
  );
}
