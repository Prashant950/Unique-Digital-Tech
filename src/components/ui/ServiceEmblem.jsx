import Icon from './Icon';
import WhatsAppIcon from './WhatsAppIcon';

export const serviceIconThemes = {
  'digital-marketing-ai-search': {
    ambientGlow: 'from-emerald-500/50 via-teal-400/40 to-emerald-600/50',
    boxBg: 'bg-gradient-to-br from-emerald-950/80 via-[#062419] to-[#03150e]',
    boxBorder: 'border-emerald-500/50 group-hover:border-emerald-400',
    boxShadow: 'shadow-[0_0_22px_rgba(16,185,129,0.3)] group-hover:shadow-[0_0_35px_rgba(52,211,153,0.55)]',
    iconColor: 'text-emerald-400',
    iconDropShadow: 'drop-shadow-[0_0_10px_rgba(52,211,153,0.8)]',
  },
  'paid-advertising-lead-generation': {
    ambientGlow: 'from-rose-500/50 via-amber-400/40 to-rose-600/50',
    boxBg: 'bg-gradient-to-br from-rose-950/80 via-[#270c14] to-[#16060a]',
    boxBorder: 'border-rose-500/50 group-hover:border-rose-400',
    boxShadow: 'shadow-[0_0_22px_rgba(244,63,94,0.3)] group-hover:shadow-[0_0_35px_rgba(251,113,133,0.55)]',
    iconColor: 'text-rose-400',
    iconDropShadow: 'drop-shadow-[0_0_10px_rgba(251,113,133,0.8)]',
  },
  'website-design-development': {
    ambientGlow: 'from-cyan-500/50 via-sky-400/40 to-blue-600/50',
    boxBg: 'bg-gradient-to-br from-cyan-950/80 via-[#082236] to-[#04111d]',
    boxBorder: 'border-cyan-400/50 group-hover:border-cyan-300',
    boxShadow: 'shadow-[0_0_22px_rgba(6,182,212,0.3)] group-hover:shadow-[0_0_35px_rgba(34,211,238,0.55)]',
    iconColor: 'text-cyan-400',
    iconDropShadow: 'drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]',
  },
  'graphic-design-video-editing': {
    ambientGlow: 'from-purple-500/50 via-fuchsia-400/40 to-purple-600/50',
    boxBg: 'bg-gradient-to-br from-purple-950/80 via-[#1f0a30] to-[#12051d]',
    boxBorder: 'border-purple-500/50 group-hover:border-purple-400',
    boxShadow: 'shadow-[0_0_22px_rgba(168,85,247,0.3)] group-hover:shadow-[0_0_35px_rgba(192,132,252,0.55)]',
    iconColor: 'text-purple-400',
    iconDropShadow: 'drop-shadow-[0_0_10px_rgba(192,132,252,0.8)]',
  },
  'mobile-app-development': {
    ambientGlow: 'from-blue-500/50 via-indigo-400/40 to-blue-600/50',
    boxBg: 'bg-gradient-to-br from-blue-950/80 via-[#0d1b3e] to-[#060e22]',
    boxBorder: 'border-blue-500/50 group-hover:border-blue-400',
    boxShadow: 'shadow-[0_0_22px_rgba(59,130,246,0.3)] group-hover:shadow-[0_0_35px_rgba(96,165,250,0.55)]',
    iconColor: 'text-blue-400',
    iconDropShadow: 'drop-shadow-[0_0_10px_rgba(96,165,250,0.8)]',
  },
  'whatsapp-cloud-api-automation': {
    ambientGlow: 'from-[#25D366]/60 via-emerald-400/50 to-green-600/60',
    boxBg: 'bg-gradient-to-br from-[#075E54]/90 via-[#128C7E]/50 to-[#041a12]',
    boxBorder: 'border-[#25D366]/60 group-hover:border-[#25D366]',
    boxShadow: 'shadow-[0_0_24px_rgba(37,211,102,0.4)] group-hover:shadow-[0_0_38px_rgba(37,211,102,0.7)]',
    iconColor: 'text-[#25D366]',
    iconDropShadow: 'drop-shadow-[0_0_12px_rgba(37,211,102,0.85)]',
    isRealWhatsApp: true,
  },
  'custom-crm-erp-solutions': {
    ambientGlow: 'from-amber-500/50 via-orange-400/40 to-amber-600/50',
    boxBg: 'bg-gradient-to-br from-amber-950/80 via-[#271805] to-[#160c02]',
    boxBorder: 'border-amber-500/50 group-hover:border-amber-400',
    boxShadow: 'shadow-[0_0_22px_rgba(245,158,11,0.3)] group-hover:shadow-[0_0_35px_rgba(251,191,36,0.55)]',
    iconColor: 'text-amber-400',
    iconDropShadow: 'drop-shadow-[0_0_10px_rgba(251,191,36,0.8)]',
  },
  'cloud-architecture-aws-devops': {
    ambientGlow: 'from-sky-500/50 via-cyan-400/40 to-sky-600/50',
    boxBg: 'bg-gradient-to-br from-sky-950/80 via-[#0a1e33] to-[#040f1a]',
    boxBorder: 'border-sky-400/50 group-hover:border-sky-300',
    boxShadow: 'shadow-[0_0_22px_rgba(14,165,233,0.3)] group-hover:shadow-[0_0_35px_rgba(56,189,248,0.55)]',
    iconColor: 'text-sky-400',
    iconDropShadow: 'drop-shadow-[0_0_10px_rgba(56,189,248,0.8)]',
  },
};

export default function ServiceEmblem({ service, className = '' }) {
  const slug = service?.slug || '';
  const theme = serviceIconThemes[slug] || {
    ambientGlow: 'from-brand-500/40 via-cyan-400/30 to-brand-blue/40',
    boxBg: 'bg-gradient-to-br from-[#0e214d] via-[#091536] to-[#04091a]',
    boxBorder: 'border-brand-400/35 group-hover:border-brand-400/70',
    boxShadow: 'shadow-[0_0_20px_rgba(14,165,233,0.22)] group-hover:shadow-[0_0_30px_rgba(56,189,248,0.45)]',
    iconColor: 'text-brand-300',
    iconDropShadow: 'drop-shadow-[0_0_10px_rgba(56,189,248,0.6)]',
  };

  return (
    <div className={`relative group/icon ${className}`}>
      {/* Dynamic Themed Ambient Glow */}
      <div
        className={`absolute -inset-1.5 rounded-2xl bg-gradient-to-r ${theme.ambientGlow} opacity-40 blur-md group-hover:opacity-100 group-hover:blur-lg transition-all duration-500`}
      />

      {/* Dynamic Themed Glassmorphic Emblem Container */}
      <div
        className={`relative flex h-14 w-14 items-center justify-center rounded-2xl ${theme.boxBg} border ${theme.boxBorder} ${theme.boxShadow} group-hover:scale-110 transition-all duration-300`}
      >
        {theme.isRealWhatsApp ? (
          <WhatsAppIcon variant="real" className="h-8 w-8 drop-shadow-[0_0_10px_rgba(37,211,102,0.85)]" />
        ) : (
          <Icon
            name={service?.icon}
            className={`h-7 w-7 ${theme.iconColor} ${theme.iconDropShadow} transition-all duration-300`}
          />
        )}
      </div>
    </div>
  );
}
