import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react';
import { navLinks, services } from '../../data/site';
import Icon from '../ui/Icon';
import Button from '../ui/Button';
import AnimatedLogo from '../ui/AnimatedLogo';

export function Logo({ size = 'default' }) {
  const isLarge = size === 'large';
  return (
    <Link to="/" className="flex items-center gap-3.5 group select-none" aria-label="Unique Digital Tech home">
      <div className="relative flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105">
        <AnimatedLogo className={isLarge ? 'h-14 sm:h-16' : 'h-12 sm:h-13'} />
      </div>
      <div className="flex flex-col leading-tight">
        <span className={`${isLarge ? 'text-xl' : 'text-lg sm:text-xl'} font-black tracking-tight text-white`}>
          Unique<span className="text-brand-400"> Digital Tech</span>
        </span>
        <span className="text-[10px] font-semibold uppercase tracking-widest text-slate-400 -mt-0.5">
          Software &amp; Cloud Agency
        </span>
      </div>
    </Link>
  );
}

const linkCls = ({ isActive }) =>
  `relative py-2 text-[15px] font-medium transition-colors ${
    isActive
      ? 'text-brand-400 after:absolute after:inset-x-0 after:-bottom-1 after:h-0.5 after:rounded after:bg-brand-400'
      : 'text-slate-200 hover:text-white hover:text-brand-300'
  }`;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [mobileServices, setMobileServices] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setOpen(false);
    setMobileServices(false);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? 'border-brand-500/20 bg-ink-950/95 shadow-xl shadow-black/40 backdrop-blur-xl'
          : 'border-white/10 bg-ink-950/90 shadow-lg shadow-black/25 backdrop-blur-lg'
      }`}
    >
      <div className="mx-auto flex h-20 w-full max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <Logo />

        <nav className="hidden items-center gap-7 lg:gap-8 lg:flex" aria-label="Primary">
          {navLinks.map((l) =>
            l.dropdown ? (
              <div key={l.label} className="group relative">
                <NavLink to={l.to} className={(s) => `${linkCls(s)} inline-flex items-center gap-1`}>
                  {l.label}
                  <ChevronDown className="h-4 w-4 transition duration-200 group-hover:rotate-180" />
                </NavLink>
                <div className="invisible absolute left-1/2 top-full w-[34rem] -translate-x-1/2 pt-4 opacity-0 transition-all duration-200 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                  <div className="card grid grid-cols-2 gap-1 p-3 shadow-2xl border-white/10 bg-ink-950/95 backdrop-blur-xl">
                    {services.map((s) => (
                      <Link
                        key={s.slug}
                        to={`/services/${s.slug}`}
                        className="group/item flex items-start gap-3 rounded-xl p-3 transition hover:bg-white/5"
                      >
                        <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-brand-500/10 text-brand-400 border border-brand-500/20 transition group-hover/item:bg-brand-500/20 group-hover/item:scale-105">
                          <Icon name={s.icon} className="h-5 w-5" />
                        </span>
                        <span className="text-sm font-semibold text-white transition group-hover/item:text-brand-300">
                          {s.title}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <NavLink key={l.label} to={l.to} end={l.to === '/'} className={linkCls}>
                {l.label}
              </NavLink>
            )
          )}
        </nav>

        {/* Right side CTA button shifted closer to right side */}
        <div className="hidden items-center gap-3 lg:flex lg:translate-x-1">
          <Button
            to="/contact"
            className="group relative inline-flex items-center gap-2 shadow-lg shadow-brand-500/25 transition-all duration-300 hover:scale-[1.03] hover:shadow-brand-500/40"
          >
            <span>Get Started</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </div>

        <button
          className="grid h-11 w-11 place-items-center rounded-lg border border-white/10 text-white lg:hidden hover:bg-white/5 transition"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <nav
          className="mx-auto max-w-[1440px] px-5 sm:px-8 h-[calc(100vh-5rem)] overflow-y-auto pb-24 lg:hidden bg-ink-950/98 backdrop-blur-xl border-t border-white/5"
          aria-label="Mobile"
        >
          <ul className="space-y-1 pt-3">
            {navLinks.map((l) =>
              l.dropdown ? (
                <li key={l.label}>
                  <button
                    onClick={() => setMobileServices(!mobileServices)}
                    className="flex w-full items-center justify-between rounded-lg px-3 py-3.5 text-lg font-medium text-white hover:bg-white/5"
                  >
                    {l.label}
                    <ChevronDown className={`h-5 w-5 transition ${mobileServices ? 'rotate-180' : ''}`} />
                  </button>
                  {mobileServices && (
                    <ul className="mb-2 ml-3 space-y-1 border-l border-white/10 pl-3">
                      <li>
                        <Link to="/services" className="block rounded-lg px-3 py-2.5 text-slate-300 hover:text-white">
                          All services
                        </Link>
                      </li>
                      {services.map((s) => (
                        <li key={s.slug}>
                          <Link
                            to={`/services/${s.slug}`}
                            className="block rounded-lg px-3 py-2.5 text-slate-300 hover:text-brand-300 hover:bg-white/5"
                          >
                            {s.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ) : (
                <li key={l.label}>
                  <NavLink
                    to={l.to}
                    end={l.to === '/'}
                    className={({ isActive }) =>
                      `block rounded-lg px-3 py-3.5 text-lg font-medium transition ${
                        isActive ? 'text-brand-400 bg-brand-500/10' : 'text-white hover:bg-white/5'
                      }`
                    }
                  >
                    {l.label}
                  </NavLink>
                </li>
              )
            )}
          </ul>
          <Button to="/contact" className="mt-6 w-full">
            Schedule Tech Consultation
          </Button>
        </nav>
      )}
    </header>
  );
}
