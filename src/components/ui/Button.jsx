import { Link } from 'react-router-dom';

const base = 'group relative inline-flex items-center justify-center gap-2.5 rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-300 active:scale-[0.98] select-none';

const variants = {
  primary: 'btn-shimmer bg-gradient-to-r from-brand-500 via-sky-500 to-brand-blue text-white shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40 hover:scale-[1.02] border border-white/20',
  secondary: 'border border-white/15 bg-ink-900/80 text-white hover:border-brand-400/50 hover:bg-ink-800/90 hover:text-brand-300 backdrop-blur-xl shadow-sm hover:shadow-md',
  ghost: 'text-slate-300 hover:text-white hover:bg-white/5 border border-transparent',
  glow: 'btn-shimmer bg-brand-500 text-white shadow-[0_0_25px_rgba(56,189,248,0.5)] hover:shadow-[0_0_35px_rgba(56,189,248,0.7)] hover:scale-[1.02] border border-brand-300/40',
};

export default function Button({
  to,
  href,
  variant = 'primary',
  className = '',
  children,
  onClick,
  ...rest
}) {
  const cls = `${base} ${variants[variant] || variants.primary} ${className}`;

  if (to) {
    return (
      <Link to={to} className={cls} onClick={onClick} {...rest}>
        {children}
      </Link>
    );
  }

  if (href) {
    const isExt = href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:');
    return (
      <a
        href={href}
        className={cls}
        onClick={onClick}
        target={isExt ? '_blank' : undefined}
        rel={isExt ? 'noopener noreferrer' : undefined}
        {...rest}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={cls} onClick={onClick} {...rest}>
      {children}
    </button>
  );
}
