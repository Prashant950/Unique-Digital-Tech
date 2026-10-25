import { metrics } from '../../data/site';
import CountUp from '../ui/CountUp';

export default function MetricsStrip() {
  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
      {metrics.map((m) => (
        <div
          key={m.label}
          className="group relative overflow-hidden rounded-2xl border border-white/10 bg-ink-900/60 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/40 hover:shadow-lg"
        >
          {/* Clean Solid White Number - No Multi-Color */}
          <p className="text-3xl font-extrabold text-white sm:text-4xl tracking-tight">
            <CountUp value={m.value} className="text-white" />
          </p>

          <p className="mt-2 text-xs font-medium leading-relaxed text-slate-400 group-hover:text-slate-300 transition-colors sm:text-sm">
            {m.label}
          </p>

          {/* Clean brand accent line on hover */}
          <div className="absolute inset-x-0 bottom-0 h-[2px] bg-transparent transition-colors duration-300 group-hover:bg-brand-500/50" />
        </div>
      ))}
    </div>
  );
}
