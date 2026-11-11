import { Link } from 'react-router-dom';
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Twitter,
  Instagram,
  Facebook,
  Youtube,
  ArrowUp,
  ArrowRight,
  ShieldCheck,
  Zap,
  Clock,
  Sparkles,
  Send,
} from 'lucide-react';
import { useState } from 'react';
import { Logo } from './Navbar';
import WhatsAppIcon from '../ui/WhatsAppIcon';
import { company, services } from '../../data/site';
import { useToast } from '../ui/Toast';

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const toast = useToast();

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!newsletterEmail.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newsletterEmail)) {
      toast.error('Please enter a valid work email address.', 'Invalid Email');
      return;
    }
    setSubscribed(true);
    toast.success(
      'Thank you for subscribing! You will receive our architectural case studies and tech release breakdowns.',
      'Subscribed Successfully'
    );
    setNewsletterEmail('');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://linkedin.com/company/unique-digital-tech',
      color: 'hover:text-[#0A66C2] hover:border-[#0A66C2]/50 hover:bg-[#0A66C2]/10',
      glow: 'shadow-[0_0_15px_rgba(10,102,194,0.3)]',
    },
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com/uniquedigitaltech',
      color: 'hover:text-white hover:border-white/50 hover:bg-white/10',
      glow: 'shadow-[0_0_15px_rgba(255,255,255,0.25)]',
    },
    {
      name: 'Twitter / X',
      icon: Twitter,
      href: 'https://twitter.com/uniquedigitech',
      color: 'hover:text-[#1DA1F2] hover:border-[#1DA1F2]/50 hover:bg-[#1DA1F2]/10',
      glow: 'shadow-[0_0_15px_rgba(29,161,242,0.3)]',
    },
    {
      name: 'Instagram',
      icon: Instagram,
      href: 'https://instagram.com/uniquedigitaltech',
      color: 'hover:text-[#E1306C] hover:border-[#E1306C]/50 hover:bg-[#E1306C]/10',
      glow: 'shadow-[0_0_15px_rgba(225,48,108,0.3)]',
    },
    {
      name: 'Facebook',
      icon: Facebook,
      href: 'https://facebook.com/uniquedigitaltech',
      color: 'hover:text-[#1877F2] hover:border-[#1877F2]/50 hover:bg-[#1877F2]/10',
      glow: 'shadow-[0_0_15px_rgba(24,119,242,0.3)]',
    },
    {
      name: 'WhatsApp',
      icon: WhatsAppIcon,
      isCustomSvg: true,
      href: `https://wa.me/${company.whatsapp}?text=Hi%20Unique%20Digital%20Tech%2C%20I%20would%20like%20to%20connect%20with%20your%20engineering%20team.`,
      color: 'hover:text-[#25D366] hover:border-[#25D366]/50 hover:bg-[#25D366]/10',
      glow: 'shadow-[0_0_15px_rgba(37,211,102,0.3)]',
    },
  ];

  return (
    <footer className="relative border-t border-brand-500/20 bg-ink-950 overflow-hidden text-slate-300">
      {/* Background Ambient Radial Glows */}
      <div className="pointer-events-none absolute -top-40 left-1/4 h-96 w-96 rounded-full bg-brand-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-10 h-80 w-80 rounded-full bg-brand-blue/10 blur-[100px]" />

      {/* Top Pre-Footer Consultation & Newsletter Banner */}
      

      {/* Main Footer Content */}
      <div className="container-x py-16 lg:py-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-12 items-start">
          {/* Col 1: Brand, Tagline, Trust Badges, Social Media (4 Cols) */}
          <div className="lg:col-span-4 space-y-6">
            <Logo size="large" />

            <p className="text-xs sm:text-sm leading-relaxed text-slate-400">
              Unique Digital Tech is a premium digital engineering agency architecting high-concurrency web platforms, cross-platform mobile apps, and scalable cloud systems with 100% IP ownership transferred from day one.
            </p>

            {/* Core Commitments Strip */}
           

            {/* Social Media Channels */}
            <div className="pt-2">
             
              <div className="flex flex-wrap items-center gap-2.5">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={social.name}
                      className={`grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-ink-900/90 text-slate-400 transition-all duration-300 hover:scale-110 ${social.color} ${social.glow}`}
                      title={social.name}
                    >
                      {social.isCustomSvg ? (
                        <IconComponent className="h-4 w-4 fill-current" />
                      ) : (
                        <IconComponent className="h-4 w-4" />
                      )}
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Col 2: Engineering Practices & Services (3 Cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-400" />
              Engineering Services
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    to={`/services/${s.slug}`}
                    className="text-slate-400 transition-colors hover:text-brand-300 flex items-center justify-between group"
                  >
                    <span>{s.title}</span>
                    <ArrowRight className="h-3 w-3 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-brand-400" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Company, Engagement & Estimation (2 Cols) */}
          <div className="lg:col-span-2">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-blue" />
              Company
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {[
                ['Home', '/'],
                ['About Agency', '/about'],
                ['All Services', '/services'],
                ['Pricing & Scoping', '/pricing'],
                ['Contact Engineers', '/contact'],
              ].map(([l, to]) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-slate-400 transition-colors hover:text-brand-300 block py-0.5"
                  >
                    {l}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-6 pt-4 border-t border-white/5 space-y-2">
              <span className="block text-[11px] font-bold uppercase tracking-wider text-brand-400">
                Direct Channels
              </span>
              <a
                href={`https://wa.me/${company.whatsapp}?text=Hi%20Unique%20Digital%20Tech%2C%20I%20have%20an%20inquiry.`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-[#25D366] transition"
              >
                <WhatsAppIcon className="h-3.5 w-3.5 fill-[#25D366]" />
                <span>WhatsApp Business</span>
              </a>
            </div>
          </div>

          {/* Col 4: Direct Tech Hub & Location (3 Cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
              Direct Tech Hub
            </h4>

            <div className="rounded-2xl border border-white/10 bg-ink-900/60 p-4 space-y-3.5 text-xs text-slate-300">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 shrink-0 text-amber-400 mt-0.5" />
                <div>
                  <span className="font-bold text-white block">Engineering Headquarters</span>
                  <span>Sector 62, Electronic City, Noida, Delhi NCR, UP 201309, India</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-brand-400" />
                <div>
                  <span className="text-[10px] text-slate-400 block uppercase font-semibold">Direct Phone</span>
                  <a href={`tel:${company.phone.replace(/\s/g, '')}`} className="font-bold text-white hover:text-brand-300 transition">
                    {company.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-brand-400" />
                <div>
                  <span className="text-[10px] text-slate-400 block uppercase font-semibold">Technical Inquiries</span>
                  <a href={`mailto:${company.email}`} className="font-bold text-white hover:text-brand-300 transition">
                    {company.email}
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-brand-500/20 bg-brand-500/5 p-3 text-[11px] text-slate-300">
              <span className="text-brand-400 font-bold">⚡ Emergency SLA Response:</span> For production clients with active enterprise SLAs, technical support is available 24/7.
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright, System Status & Legal Strip */}
      <div className="border-t border-white/10 bg-black/60 py-6">
        <div className="container-x flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-3">
            {/* Live Operational Status Pill */}
          </div>

          <p className="text-center md:text-left">
            © {new Date().getFullYear()} Unique Digital Tech. All rights reserved. Registered Digital Engineering Firm.
          </p>
        </div>
      </div>
    </footer>
  );
}
