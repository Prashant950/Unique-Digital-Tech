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
          {/* Properly proportioned icon badge - no stretch, unified color */}
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-500/10 border border-brand-500/20 text-brand-400 transition-all duration-300 group-hover:scale-110 group-hover:bg-brand-500/20 group-hover:border-brand-400/50">
            <Icon name={s.icon} className="h-6 w-6 text-brand-400" />
          </div>

          <h3 className="mt-5 text-lg font-bold text-white transition-colors duration-200 group-hover:text-brand-300">
            {s.title}
          </h3>

          <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400 transition-colors duration-200 group-hover:text-slate-300">
            {s.short}
          </p>

         
        </SpotlightCard>
      ))}
    </div>
  );
}
