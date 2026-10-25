export default function PageHero({ title, text, children }) {
  return (
    <section className="bg-hero-glow relative overflow-hidden border-b border-white/10 pt-36 pb-16 sm:pt-44 sm:pb-24">
      {/* Soft ambient lighting without grid boxes */}
      <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-72 w-96 rounded-full bg-brand-500/15 blur-3xl" aria-hidden="true" />
      <div className="container-x relative max-w-4xl text-center">
        <h1 className="rise text-4xl font-extrabold sm:text-5xl lg:text-6xl">{title}</h1>
        {text && <p className="rise-2 mx-auto mt-5 max-w-2xl text-lg text-slate-400">{text}</p>}
        {children && <div className="rise-3 mt-8">{children}</div>}
      </div>
    </section>
  );
}
