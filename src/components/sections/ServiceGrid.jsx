import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { services } from '../../data/site';
import Icon from '../ui/Icon';

export default function ServiceGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {services.map((s) => (
        <Link
          key={s.slug}
          to={`/services/${s.slug}`}
          className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-ink-900/60 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-500/40 hover:shadow-lg"
        >
          {/* Properly proportioned icon badge - no stretch, unified color */}
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-500/10 border border-brand-500/20 text-brand-400 transition-all duration-300 group-hover:scale-105 group-hover:bg-brand-500/20 group-hover:border-brand-400/50">
            <Icon name={s.icon} className="h-6 w-6 text-brand-400" />
          </div>

          <h3 className="mt-5 text-lg font-bold text-white transition-colors duration-200 group-hover:text-brand-300">
            {s.title}
          </h3>

          <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400 transition-colors duration-200 group-hover:text-slate-300">
            {s.short}
          </p>

          <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-400 transition-colors group-hover:text-brand-300">
            Learn more
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>

          {/* Clean hover bottom line */}
          <div className="absolute inset-x-0 bottom-0 h-[2px] bg-transparent transition-colors duration-300 group-hover:bg-brand-500/50" />
        </Link>
      ))}
    </div>
  );
}
