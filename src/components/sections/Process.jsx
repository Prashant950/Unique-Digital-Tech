import { process } from '../../data/site';

export default function Process() {
  return (
    <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {process.map((p, i) => (
        <li
          key={p.title}
          className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-ink-900/80 to-ink-950/80 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-2 hover:border-brand-400/60 hover:shadow-[0_12px_32px_rgba(14,165,233,0.18)]"
        >
          {/* Subtle corner glow */}
          <div className="pointer-events-none absolute -right-8 -top-8 h-20 w-20 rounded-full bg-brand-500/10 blur-xl transition-all duration-500 group-hover:scale-150 group-hover:bg-brand-500/20" />

          <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-brand-500 to-brand-blue text-sm font-bold text-white shadow-md shadow-brand-500/30 transition-transform duration-300 group-hover:scale-110">
            {i + 1}
          </span>

          <h3 className="relative mt-5 text-lg font-bold text-white transition-colors duration-200 group-hover:text-brand-300">
            {p.title}
          </h3>

          <p className="relative mt-2 text-sm leading-relaxed text-slate-400 transition-colors duration-200 group-hover:text-slate-300">
            {p.text}
          </p>

          {/* Accent bottom line */}
          <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-brand-500/0 to-transparent transition-all duration-500 group-hover:via-brand-400" />
        </li>
      ))}
    </ol>
  );
}
