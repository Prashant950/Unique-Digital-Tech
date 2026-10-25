import Icon from '../ui/Icon';

export default function FeatureCards({ items }) {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {items.map((v) => (
        <div
          key={v.title}
          className="group relative overflow-hidden rounded-2xl border border-white/10 bg-ink-900/60 p-7 backdrop-blur transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-500/40 hover:shadow-lg"
        >
          {/* Properly sized and styled Icon Badge - Fixed stretch issue */}
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-500/10 border border-brand-500/20 text-brand-400 transition-all duration-300 group-hover:scale-105 group-hover:bg-brand-500/20 group-hover:border-brand-400/50">
            <Icon name={v.icon} className="h-6 w-6 text-brand-400" />
          </div>

          <h3 className="mt-5 text-xl font-bold tracking-tight text-white transition-colors duration-200 group-hover:text-brand-300">
            {v.title}
          </h3>

          <p className="mt-3 text-sm leading-relaxed text-slate-400 transition-colors duration-200 group-hover:text-slate-300">
            {v.text}
          </p>

          {/* Clean hover accent line */}
          <div className="absolute inset-x-0 bottom-0 h-[2px] bg-transparent transition-colors duration-300 group-hover:bg-brand-500/50" />
        </div>
      ))}
    </div>
  );
}
