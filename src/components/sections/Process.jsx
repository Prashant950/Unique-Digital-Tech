import { process } from '../../data/site';
import SpotlightCard from '../ui/SpotlightCard';

export default function Process() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {process.map((p, i) => (
        <SpotlightCard
          key={p.title}
          tilt={true}
          className="flex flex-col"
        >
          <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-brand-500 to-brand-blue text-sm font-bold text-white shadow-md shadow-brand-500/30 transition-transform duration-300 group-hover:scale-110">
            {i + 1}
          </span>

          <h3 className="mt-5 text-lg font-bold text-white transition-colors duration-200 group-hover:text-brand-300">
            {p.title}
          </h3>

          <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-400 transition-colors duration-200 group-hover:text-slate-300">
            {p.text}
          </p>
        </SpotlightCard>
      ))}
    </div>
  );
}
