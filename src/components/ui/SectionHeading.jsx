export default function SectionHeading({ title, text, align = 'center' }) {
  const a = align === 'center' ? 'mx-auto text-center' : 'text-left';
  return (
    <div className={`mb-6 sm:mb-8 max-w-3xl ${a}`}>
      <h2 className="text-2xl font-bold sm:text-3xl lg:text-4xl">{title}</h2>
      {text && <p className="mt-3 text-sm leading-relaxed text-slate-400 sm:text-base">{text}</p>}
    </div>
  );
}
