import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Logo } from './Navbar';
import { company, services } from '../../data/site';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink-900">
      <div className="container-x grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo size="large" />
          <p className="mt-5 text-sm leading-relaxed text-slate-400">
            Unique Digital Tech is an enterprise digital engineering firm building custom web systems, mobile platforms and revenue-driven growth frameworks for organizations worldwide.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold text-white">Services</h3>
          <ul className="space-y-2.5 text-sm">
            {services.map((s) => (
              <li key={s.slug}><Link to={`/services/${s.slug}`} className="text-slate-400 transition hover:text-brand-400">{s.title}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold text-white">Company</h3>
          <ul className="space-y-2.5 text-sm">
            {[['Home', '/'], ['About us', '/about'], ['All services', '/services'], ['Pricing & Plans', '/pricing'], ['Contact', '/contact']].map(([l, to]) => (
              <li key={to}><Link to={to} className="text-slate-400 transition hover:text-brand-400">{l}</Link></li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold text-white">Get in touch</h3>
          <ul className="space-y-3 text-sm text-slate-400">
            <li className="flex gap-3"><Mail className="h-4 w-4 shrink-0 translate-y-0.5 text-brand-400" /><a href={`mailto:${company.email}`} className="break-all hover:text-white">{company.email}</a></li>
            <li className="flex gap-3"><Phone className="h-4 w-4 shrink-0 translate-y-0.5 text-brand-400" /><a href={`tel:${company.phone.replace(/\s/g, '')}`} className="hover:text-white">{company.phone}</a></li>
            <li className="flex gap-3"><MapPin className="h-4 w-4 shrink-0 translate-y-0.5 text-brand-400" />{company.location}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-x flex flex-col items-center justify-between gap-2 py-6 text-xs text-slate-500 sm:flex-row">
          <p>© {new Date().getFullYear()} Unique Digital Tech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
