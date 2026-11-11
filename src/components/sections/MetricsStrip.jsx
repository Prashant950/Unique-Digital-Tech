import { metrics } from '../../data/site';
import CountUp from '../ui/CountUp';
import SpotlightCard from '../ui/SpotlightCard';

export default function MetricsStrip() {
  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
      {metrics.map((m) => (
        <SpotlightCard
          key={m.label}
          className="flex flex-col justify-between"
          spotlightColor="rgba(56, 189, 248, 0.22)"
        >
          {/* Clean Solid White Number with CountUp */}
          <p className="text-3xl font-extrabold text-white sm:text-4xl tracking-tight">
            <CountUp value={m.value} className="text-white" />
          </p>

          <p className="mt-2 text-xs font-medium leading-relaxed text-slate-400 group-hover:text-slate-300 transition-colors sm:text-sm">
            {m.label}
          </p>
        </SpotlightCard>
      ))}
    </div>
  );
}
