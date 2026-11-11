import { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

export default function SpotlightCard({
  children,
  className = '',
  spotlightColor = 'rgba(56, 189, 248, 0.16)',
  tilt = false,
  to,
  href,
  onClick,
  ...props
}) {
  const cardRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);
  const [transform, setTransform] = useState('');

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setPosition({ x, y });
    setOpacity(1);

    if (tilt) {
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -5;
      const rotateY = ((x - centerX) / centerX) * 5;
      setTransform(`perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.015, 1.015, 1.015)`);
    }
  };

  const handleMouseLeave = () => {
    setOpacity(0);
    if (tilt) {
      setTransform('perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)');
    }
  };

  const Component = to ? Link : href ? 'a' : 'div';
  const linkProps = to ? { to } : href ? { href, target: href.startsWith('http') ? '_blank' : undefined, rel: href.startsWith('http') ? 'noopener noreferrer' : undefined } : {};

  return (
    <Component
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        transform: tilt ? transform : undefined,
        transition: 'transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease, box-shadow 0.3s ease',
      }}
      className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-ink-900/70 p-6 backdrop-blur-xl transition-all duration-300 hover:border-brand-500/40 hover:shadow-xl hover:shadow-brand-500/10 ${className}`}
      {...linkProps}
      {...props}
    >
      {/* Dynamic Cursor Spotlight Radial Glow */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          opacity,
          background: `radial-gradient(550px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 60%)`,
        }}
        aria-hidden="true"
      />

      {/* Subtle top glare highlight line */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Content */}
      <div className="relative z-10">{children}</div>

      {/* Clean hover bottom accent line */}
      <div className="absolute inset-x-0 bottom-0 h-[2px] bg-transparent transition-colors duration-300 group-hover:bg-gradient-to-r group-hover:from-transparent group-hover:via-brand-500/70 group-hover:to-transparent" />
    </Component>
  );
}
