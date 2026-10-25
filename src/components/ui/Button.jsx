import { Link } from 'react-router-dom';

const base = 'inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold transition duration-200';
const variants = {
  primary: 'bg-gradient-to-r from-brand-500 to-brand-blue text-white shadow-glow hover:brightness-110',
  secondary: 'border border-white/15 bg-ink-800/60 text-white hover:border-brand-500/60 hover:bg-ink-700',
};

export default function Button({ to, href, variant = 'primary', className = '', children, ...rest }) {
  const cls = `${base} ${variants[variant]} ${className}`;
  if (to) return <Link to={to} className={cls} {...rest}>{children}</Link>;
  if (href) return <a href={href} className={cls} {...rest}>{children}</a>;
  return <button className={cls} {...rest}>{children}</button>;
}
