export default function CyberBackground({ className = '', variant = 'full' }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      {/* Cyber lines subtle matrix (Clean ambient, dot pattern removed) */}
      {variant === 'full' && (
        <div className="absolute inset-0 bg-cyber-lines opacity-25" />
      )}

      {/* Luminous Animated Aurora Glow Spheres */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-[26rem] w-[42rem] rounded-full bg-brand-500/15 blur-[100px] animate-pulse-slow" />
      <div className="absolute top-1/4 -right-24 h-80 w-80 rounded-full bg-brand-blue/15 blur-[90px] animate-float" />
      <div className="absolute top-1/2 -left-28 h-80 w-80 rounded-full bg-cyan-400/10 blur-[90px] animate-float-delayed" />
    </div>
  );
}
