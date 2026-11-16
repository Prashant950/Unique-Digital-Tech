import { ArrowUpRight } from 'lucide-react';
import { services } from '../../data/site';
import Icon from '../ui/Icon';
import SpotlightCard from '../ui/SpotlightCard';

export default function ServiceGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {services.map((s) => (
        <SpotlightCard
          key={s.slug}
          to={`/services/${s.slug}`}
          tilt={true}
          className="flex flex-col cursor-pointer"
        >
          {/* Glowing Cyber Emblem Icon */}
          <div className="relative group/icon mb-2">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-brand-500/35 via-cyan-400/25 to-brand-blue/35 opacity-40 blur-md group-hover:opacity-100 group-hover:blur-lg transition-all duration-500" />
            <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0e214d] via-[#091536] to-[#04091a] border border-brand-400/35 shadow-[0_0_20px_rgba(14,165,233,0.22)] group-hover:scale-110 group-hover:border-brand-400/70 group-hover:shadow-[0_0_30px_rgba(56,189,248,0.45)] transition-all duration-300">
              <Icon name={s.icon} className="h-7 w-7 text-brand-300 group-hover:text-white drop-shadow-[0_0_8px_rgba(56,189,248,0.6)] transition-all duration-300" />
            </div>
          </div>

          <h3 className="mt-3 text-lg font-bold text-white transition-colors duration-200 group-hover:text-brand-300">
            {s.title}
          </h3>

          <p className="mt-2 flex-1 text-xs sm:text-sm leading-relaxed text-slate-400 transition-colors duration-200 group-hover:text-slate-300">
            {s.short}
          </p>

          <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between text-xs">
            <span className="text-[11px] font-medium text-slate-400">{s.capabilities.length} Core Capabilities</span>
            <span className="inline-flex items-center gap-1.5 rounded-xl bg-gradient-to-r from-brand-600 via-brand-500 to-sky-500 px-3 py-1.5 text-xs font-bold text-white shadow-md shadow-brand-500/20 group-hover:shadow-brand-500/40 group-hover:scale-105 transition-all duration-300">
              <span>View Practice</span>
              <ArrowUpRight className="h-3.5 w-3.5" />
            </span>
          </div>
        </SpotlightCard>
      ))}
    </div>
  );
}
