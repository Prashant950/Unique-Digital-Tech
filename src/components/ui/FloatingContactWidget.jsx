import { useState } from 'react';
import { MessageSquare, PhoneCall, X, Send, Sparkles, Check, ArrowRight } from 'lucide-react';
import { company } from '../../data/site';
import WhatsAppIcon from './WhatsAppIcon';
import confetti from 'canvas-confetti';

export default function FloatingContactWidget() {
  const [open, setOpen] = useState(false);

  const handleLaunchWhatsApp = () => {
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.85, x: 0.9 },
      });
    } catch (e) {
      // ignore if blocked
    }
    const cleanPhone = company.phone.replace(/[^0-9]/g, '');
    window.open(`https://wa.me/${cleanPhone}?text=Hi%20Unique%20Digital%20Tech%20team,%20I%20would%20like%20to%20discuss%20a%20project.`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Popover Bubble */}
      {open && (
        <div className="mb-3 w-80 rounded-2xl border border-white/15 bg-ink-950/95 p-5 shadow-2xl backdrop-blur-2xl animate-rise">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="text-xs font-bold text-white tracking-wide uppercase">
                Solutions Desk
              </span>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-slate-400 hover:text-white transition"
              aria-label="Close widget"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <p className="mt-3 text-xs leading-relaxed text-slate-300">
            Connect directly with our engineering team for scoping, architecture reviews, or instant enterprise quotes.
          </p>

          <div className="mt-4 space-y-2">
            <button
              onClick={handleLaunchWhatsApp}
              className="flex w-full items-center justify-between rounded-xl border border-emerald-500/40 bg-emerald-500/10 px-3.5 py-2.5 text-xs font-semibold text-emerald-300 hover:bg-emerald-500/20 transition group"
            >
              <span className="flex items-center gap-2">
                <WhatsAppIcon className="h-4 w-4 text-emerald-400" />
                <span>Chat on WhatsApp</span>
              </span>
              <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
            </button>

            <a
              href={`tel:${company.phone}`}
              className="flex w-full items-center justify-between rounded-xl border border-white/10 bg-ink-850 px-3.5 py-2.5 text-xs font-semibold text-slate-200 hover:border-brand-500/40 hover:text-white transition group"
            >
              <span className="flex items-center gap-2">
                <PhoneCall className="h-4 w-4 text-brand-400" />
                <span>Direct Call</span>
              </span>
              <span className="text-[11px] font-mono text-slate-400">{company.phone}</span>
            </a>
          </div>

          <div className="mt-3 text-center">
            <span className="text-[10px] text-slate-400">
              ⚡ Typical response time: &lt;15 minutes
            </span>
          </div>
        </div>
      )}

      {/* Floating Trigger Button */}
     
    </div>
  );
}
