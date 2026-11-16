import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X, ArrowRight, Phone, Mail, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { navLinks, services, company } from '../../data/site';
import Icon from '../ui/Icon';
import Button from '../ui/Button';
import AnimatedLogo from '../ui/AnimatedLogo';
import WhatsAppIcon from '../ui/WhatsAppIcon';

export function Logo({ size = 'default' }) {
  const isLarge = size === 'large';
  return (
    <Link to="/" className="flex items-center gap-3.5 group select-none" aria-label="Unique Digital Tech home">
      <div className="relative flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105">
        <AnimatedLogo className={isLarge ? 'h-16 sm:h-20' : 'h-14 sm:h-16'} />
      </div>
      <div className="flex flex-col leading-tight">
        <span className={`${isLarge ? 'text-xl sm:text-2xl' : 'text-lg sm:text-xl'} font-black tracking-tight text-white`}>
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
  const [mobileServices, setMobileServices] = useState(false); // Collapsed by default, opens after clicking arrow
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  // Close drawer and desktop dropdown on route change
  useEffect(() => {
    setOpen(false);
    setDesktopServicesOpen(false);
  }, [pathname]);

  // Handle header background blur on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when drawer is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  // Close drawer and desktop dropdown on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setOpen(false);
        setDesktopServicesOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? 'border-brand-500/20 bg-ink-950/95 shadow-xl shadow-black/40 backdrop-blur-xl'
          : 'border-white/10 bg-ink-950/90 shadow-lg shadow-black/25 backdrop-blur-lg'
      }`}
    >
      <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-brand-500/30 to-transparent pointer-events-none" />
      <div className="mx-auto flex h-20 w-full max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <Logo />

        <nav className="hidden items-center gap-7 lg:gap-8 lg:flex" aria-label="Primary">
          {navLinks.map((l) =>
            l.dropdown ? (
              <div
                key={l.label}
                className="relative"
                onMouseEnter={() => setDesktopServicesOpen(true)}
                onMouseLeave={() => setDesktopServicesOpen(false)}
              >
                <NavLink
                  to={l.to}
                  onClick={() => setDesktopServicesOpen(false)}
                  className={(s) => `${linkCls(s)} inline-flex items-center gap-1`}
                >
                  {l.label}
                  <ChevronDown
                    className={`h-4 w-4 transition duration-200 ${
                      desktopServicesOpen ? 'rotate-180 text-brand-400' : ''
                    }`}
                  />
                </NavLink>

                {/* Non-Transparent Rich Frosted Cyber Dropdown (Auto-closes on click) */}
                {desktopServicesOpen && (
                  <div className="absolute left-1/2 top-full w-[40rem] -translate-x-1/2 pt-3 z-50 animate-in fade-in zoom-in-95 duration-150">
                    <div className="relative rounded-2xl border border-brand-500/35 bg-[#07112c] p-4 shadow-[0_25px_70px_rgba(0,0,0,0.95)] ring-1 ring-white/10 overflow-hidden">
                      {/* Ambient cyber radial glow inside dropdown */}
                      <div className="pointer-events-none absolute -top-12 -right-12 h-44 w-44 rounded-full bg-brand-500/15 blur-[60px]" />
                      <div className="pointer-events-none absolute -bottom-12 -left-12 h-44 w-44 rounded-full bg-brand-blue/15 blur-[60px]" />

                      <div className="relative z-10 grid grid-cols-2 gap-2">
                        {services.map((s) => (
                          <Link
                            key={s.slug}
                            to={`/services/${s.slug}`}
                            onClick={() => setDesktopServicesOpen(false)}
                            className="group/item flex items-start gap-3 rounded-xl p-2.5 transition-all duration-200 hover:bg-brand-500/15 hover:border-brand-500/30 border border-white/5 bg-white/[0.02]"
                          >
                            <span className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-brand-500/10 text-brand-400 border border-brand-500/20 transition group-hover/item:bg-brand-500/25 group-hover/item:scale-105 group-hover/item:border-brand-400/40">
                              <Icon name={s.icon} className="h-4 w-4" />
                            </span>
                            <div className="flex flex-col min-w-0">
                              <span className="text-xs font-bold text-white transition group-hover/item:text-brand-300 leading-snug">
                                {s.title}
                              </span>
                              <span className="text-[10px] text-slate-400 line-clamp-1 mt-0.5">
                                {s.tagline}
                              </span>
                            </div>
                          </Link>
                        ))}
                      </div>

                      <div className="relative z-10 mt-3 pt-3 border-t border-white/10 flex items-center justify-between px-2 text-[11px]">
                       
                        <Link
                          to="/services"
                          onClick={() => setDesktopServicesOpen(false)}
                          className="font-bold text-brand-300 hover:text-brand-400 transition inline-flex items-center gap-1 group/all"
                        >
                          <span>Explore All Services</span>
                          <ArrowRight className="h-3 w-3 transition-transform group-hover/all:translate-x-0.5" />
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <NavLink key={l.label} to={l.to} end={l.to === '/'} className={linkCls}>
                {l.label}
              </NavLink>
            )
          )}
        </nav>

        {/* Right side CTA button */}
        <div className="hidden items-center gap-3 lg:flex lg:translate-x-1">
          <Button
            to="/contact"
            className="group relative inline-flex items-center gap-2 shadow-lg shadow-brand-500/25 transition-all duration-300 hover:scale-[1.03] hover:shadow-brand-500/40"
          >
            <span>Get Started</span>
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </div>

        {/* Top Right Corner Menu Button - Toggles Drawer with Smooth Animation */}
        <button
          className="grid h-11 w-11 place-items-center rounded-xl border border-white/10 bg-white/5 text-white lg:hidden hover:bg-white/10 hover:border-brand-500/30 transition-all duration-200 active:scale-95 shadow-md"
          onClick={() => setOpen(!open)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? (
            <X className="h-6 w-6 text-brand-300" />
          ) : (
            <Menu className="h-6 w-6 text-brand-300" />
          )}
        </button>
      </div>

      {/* Viewport-level React Portal: Smooth Right-to-Left Slide Drawer */}
      {typeof document !== 'undefined' &&
        createPortal(
          <AnimatePresence>
            {open && (
              <>
                {/* Backdrop Blur Overlay */}
                <motion.div
                  key="drawer-backdrop"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.24, ease: 'easeOut' }}
                  onClick={() => setOpen(false)}
                  className="fixed inset-0 z-[9998] bg-black/80 backdrop-blur-md lg:hidden"
                  aria-hidden="true"
                />

                {/* Right Slide-in Drawer: Slides from Right (100%) to Left (0) */}
                <motion.aside
                  key="drawer-panel"
                  initial={{ x: '100%' }}
                  animate={{ x: 0 }}
                  exit={{ x: '100%' }}
                  transition={{ type: 'spring', damping: 28, stiffness: 280 }}
                  className="fixed inset-y-0 right-0 z-[9999] flex w-[88vw] max-w-sm sm:max-w-md flex-col bg-ink-950/98 border-l border-brand-500/30 shadow-[-15px_0_60px_rgba(0,0,0,0.9)] backdrop-blur-2xl lg:hidden overflow-hidden"
                  aria-label="Mobile Navigation"
                >
                  {/* Drawer Top Header with Animated Logo & Dedicated Close Button */}
                  <div className="flex h-20 items-center justify-between px-5 border-b border-white/10 bg-ink-900/70">
                    <Logo />
                    <button
                      onClick={() => setOpen(false)}
                      className="grid h-11 w-11 place-items-center rounded-xl border border-white/15 bg-white/5 text-slate-200 hover:text-white hover:bg-white/10 hover:border-brand-500/40 transition active:scale-95 shadow-md"
                      aria-label="Close menu"
                    >
                      <X className="h-6 w-6 text-brand-300" />
                    </button>
                  </div>

                  {/* Drawer Scrollable Navigation Body */}
                  <div className="flex-1 overflow-y-auto px-5 py-5 space-y-4 custom-scrollbar">
                    <ul className="space-y-2">
                      {navLinks.map((l) =>
                        l.dropdown ? (
                          <li
                            key={l.label}
                            className="rounded-2xl border border-white/10 bg-ink-900/50 overflow-hidden transition-colors"
                          >
                            {/* Services Header Row with Arrow Toggle Button */}
                            <div className="flex items-center justify-between px-4 py-3.5">
                              <Link
                                to="/services"
                                onClick={() => setOpen(false)}
                                className="flex items-center gap-2.5 text-base font-bold text-white hover:text-brand-300 transition"
                              >
                                <span className="h-2 w-2 rounded-full bg-brand-400 animate-pulse" />
                                <span>{l.label}</span>
                              </Link>

                              {/* Arrow button that toggles all subservices in scroller */}
                              <button
                                type="button"
                                onClick={() => setMobileServices(!mobileServices)}
                                className="grid h-9 w-9 place-items-center rounded-xl border border-white/15 bg-white/5 text-brand-300 hover:bg-brand-500/20 hover:text-white transition active:scale-95 shadow-sm"
                                aria-label="Toggle all subservices"
                                aria-expanded={mobileServices}
                              >
                                <ChevronDown
                                  className={`h-4 w-4 transition-transform duration-300 ${
                                    mobileServices ? 'rotate-180 text-brand-400' : 'text-slate-300'
                                  }`}
                                />
                              </button>
                            </div>

                            {/* Sub-services Scroller: Opens after clicking arrow */}
                            <AnimatePresence>
                              {mobileServices && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: 'auto', opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{ duration: 0.25, ease: 'easeInOut' }}
                                  className="overflow-hidden px-3 pb-3.5"
                                >
                                  <div className="max-h-64 overflow-y-auto space-y-1.5 p-2 rounded-xl bg-ink-950/90 border border-brand-500/20 shadow-inner custom-scrollbar">
                                    <Link
                                      to="/services"
                                      onClick={() => setOpen(false)}
                                      className="flex items-center justify-between rounded-lg px-3 py-2 text-xs font-bold text-brand-300 hover:bg-brand-500/20 border border-brand-500/30 transition mb-1 bg-brand-500/10"
                                    >
                                      <span>All 8 Engineering Services</span>
                                      <ArrowRight className="h-3.5 w-3.5" />
                                    </Link>

                                    {services.map((s) => (
                                      <Link
                                        key={s.slug}
                                        to={`/services/${s.slug}`}
                                        onClick={() => setOpen(false)}
                                        className="flex items-center gap-3 rounded-lg p-2 text-xs font-semibold text-slate-200 hover:bg-white/10 hover:text-brand-300 transition group"
                                      >
                                        <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-brand-500/10 text-brand-400 border border-brand-500/20 group-hover:scale-105 group-hover:bg-brand-500/20 transition-transform">
                                          <Icon name={s.icon} className="h-3.5 w-3.5" />
                                        </span>
                                        <span className="truncate">{s.title}</span>
                                      </Link>
                                    ))}
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </li>
                        ) : (
                          <li key={l.label}>
                            <NavLink
                              to={l.to}
                              end={l.to === '/'}
                              onClick={() => setOpen(false)}
                              className={({ isActive }) =>
                                `flex items-center justify-between rounded-2xl px-4 py-3.5 text-base font-semibold transition ${
                                  isActive
                                    ? 'bg-gradient-to-r from-brand-500/20 to-brand-blue/15 text-brand-300 border border-brand-500/30 font-bold'
                                    : 'text-slate-200 hover:bg-white/5 hover:text-white border border-transparent'
                                }`
                              }
                            >
                              <span>{l.label}</span>
                              <ArrowRight className="h-4 w-4 opacity-50" />
                            </NavLink>
                          </li>
                        )
                      )}
                    </ul>

                    {/* Direct Action & Quick Links in Drawer Footer */}
                    <div className="pt-4 border-t border-white/10 space-y-3">
                      <Button
                        to="/contact"
                        onClick={() => setOpen(false)}
                        className="w-full justify-center py-4 text-sm font-bold shadow-lg shadow-brand-500/25"
                      >
                        <span>Start Your Project</span>
                        <ArrowRight className="h-4 w-4 ml-1.5" />
                      </Button>
                    </div>
                  </div>
                </motion.aside>
              </>
            )}
          </AnimatePresence>,
          document.body
        )}
    </header>
  );
}
