import Icon from '../ui/Icon';
import SpotlightCard from '../ui/SpotlightCard';

export default function FeatureCards({ items }) {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {items.map((v) => (
        <SpotlightCard
          key={v.title}
          tilt={true}
          className="flex flex-col"
        >
          {/* Glowing Cyber Emblem Icon */}
          <div className="relative group/icon mb-2">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-brand-500/35 via-cyan-400/25 to-brand-blue/35 opacity-40 blur-md group-hover:opacity-100 group-hover:blur-lg transition-all duration-500" />
            <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#0e214d] via-[#091536] to-[#04091a] border border-brand-400/35 shadow-[0_0_20px_rgba(14,165,233,0.22)] group-hover:scale-110 group-hover:border-brand-400/70 group-hover:shadow-[0_0_30px_rgba(56,189,248,0.45)] transition-all duration-300">
              <Icon name={v.icon} className="h-7 w-7 text-brand-300 group-hover:text-white drop-shadow-[0_0_8px_rgba(56,189,248,0.6)] transition-all duration-300" />
            </div>
          </div>

          <h3 className="mt-3 text-xl font-bold tracking-tight text-white transition-colors duration-200 group-hover:text-brand-300">
            {v.title}
          </h3>

          <p className="mt-3 text-sm leading-relaxed text-slate-300 transition-colors duration-200 group-hover:text-slate-200">
            {v.text}
          </p>
        </SpotlightCard>
      ))}
    </div>
  );
}
