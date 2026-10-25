export default function AnimatedLogo({ className = 'h-12 w-auto' }) {
  return (
    <div className={`relative inline-flex items-center justify-center select-none ${className}`}>
      {/* 1. The 100% Exact User Logo Base Image */}
      <img
        src="/logo-exact.png"
        alt="Unique Digital Tech Logo"
        className="h-full w-auto object-contain drop-shadow-[0_4px_16px_rgba(56,189,248,0.25)]"
      />

      {/* 2. Seamless Celestial Nakshatra Animation Layer
          Precisely mapped to the 552x561 pixel coordinate space of logo-exact.png.
          The orange nucleus center is at exactly (212, 154.5).
      */}
      <svg
        viewBox="0 0 552 561"
        className="absolute inset-0 h-full w-full pointer-events-none overflow-visible"
        aria-hidden="true"
      >
        <defs>
          {/* Intense Glow Filter for Celestial Stars / Nakshatras */}
          <filter id="nakshatra-glow-cyan" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur1" />
            <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" result="blur2" />
            <feMerge>
              <feMergeNode in="blur1" />
              <feMergeNode in="blur2" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="nakshatra-glow-amber" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur in="SourceGraphic" stdDeviation="7" result="blur1" />
            <feMerge>
              <feMergeNode in="blur1" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Luminous stream gradient for traveling comet pulses */}
          <linearGradient id="stream-cyan" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0" />
            <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#ffffff" stopOpacity="1" />
          </linearGradient>

          <linearGradient id="stream-blue" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#60a5fa" stopOpacity="0" />
            <stop offset="70%" stopColor="#60a5fa" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#bae6fd" stopOpacity="0.95" />
          </linearGradient>
        </defs>

        {/* Coordinated Group centered at the orange nucleus (212, 154.5) */}
        <g transform="translate(212, 154.5)">
          {/* Central Sun/Nucleus Gentle Radiant Pulse */}
          <circle cx="0" cy="0" r="22" fill="#f59e0b" opacity="0.25">
            <animate attributeName="r" values="21;28;21" dur="3.2s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.15;0.35;0.15" dur="3.2s" repeatCount="indefinite" />
          </circle>
          <circle cx="0" cy="0" r="16" fill="#fbbf24" opacity="0.3">
            <animate attributeName="opacity" values="0.2;0.5;0.2" dur="3.2s" repeatCount="indefinite" />
          </circle>

          {/* ========================================================
              ORBIT 1: Vertical Ellipse (0 deg rotation)
              Major radius = 148, Minor radius = 62
              ======================================================== */}
          <g>
            {/* Luminous traveling energy pulse along Orbit 1 */}
            <ellipse
              cx="0"
              cy="0"
              rx="62"
              ry="148"
              fill="none"
              stroke="url(#stream-cyan)"
              strokeWidth="2.8"
              strokeDasharray="45 320"
              strokeLinecap="round"
              opacity="0.85"
            >
              <animate
                attributeName="stroke-dashoffset"
                values="0;-365"
                dur="4.2s"
                repeatCount="indefinite"
              />
            </ellipse>

            {/* Revolving Nakshatra 1: Radiant Cyan Celestial Star */}
            <g>
              <animateMotion
                dur="4.2s"
                repeatCount="indefinite"
                path="M 0,-148 A 62 148 0 1 0 0,148 A 62 148 0 1 0 0,-148"
              />
              {/* Outer Glow Halo */}
              <circle r="12" fill="#38bdf8" opacity="0.45" filter="url(#nakshatra-glow-cyan)" />
              {/* Luminous Planet Body */}
              <circle r="6" fill="#38bdf8" />
              {/* Brilliant White Core */}
              <circle r="3" fill="#ffffff" />
            </g>
          </g>

          {/* ========================================================
              ORBIT 2: Tilted 60 degrees (Clockwise)
              ======================================================== */}
          <g transform="rotate(60)">
            {/* Luminous traveling energy pulse along Orbit 2 */}
            <ellipse
              cx="0"
              cy="0"
              rx="62"
              ry="148"
              fill="none"
              stroke="url(#stream-blue)"
              strokeWidth="2.8"
              strokeDasharray="45 320"
              strokeLinecap="round"
              opacity="0.8"
            >
              <animate
                attributeName="stroke-dashoffset"
                values="0;-365"
                dur="5.6s"
                repeatCount="indefinite"
              />
            </ellipse>

            {/* Revolving Nakshatra 2: Vivid Sky-Blue Celestial Star */}
            <g>
              <animateMotion
                dur="5.6s"
                repeatCount="indefinite"
                path="M 0,-148 A 62 148 0 1 0 0,148 A 62 148 0 1 0 0,-148"
              />
              <circle r="11" fill="#60a5fa" opacity="0.5" filter="url(#nakshatra-glow-cyan)" />
              <circle r="5.5" fill="#60a5fa" />
              <circle r="2.8" fill="#ffffff" />
            </g>
          </g>

          {/* ========================================================
              ORBIT 3: Tilted 120 degrees (-60 degrees)
              ======================================================== */}
          <g transform="rotate(120)">
            {/* Luminous traveling energy pulse along Orbit 3 */}
            <ellipse
              cx="0"
              cy="0"
              rx="62"
              ry="148"
              fill="none"
              stroke="url(#stream-cyan)"
              strokeWidth="2.8"
              strokeDasharray="45 320"
              strokeLinecap="round"
              opacity="0.85"
            >
              <animate
                attributeName="stroke-dashoffset"
                values="0;-365"
                dur="6.8s"
                repeatCount="indefinite"
              />
            </ellipse>

            {/* Revolving Nakshatra 3: Brilliant Golden / Amber Celestial Star */}
            <g>
              <animateMotion
                dur="6.8s"
                repeatCount="indefinite"
                path="M 0,-148 A 62 148 0 1 0 0,148 A 62 148 0 1 0 0,-148"
              />
              <circle r="11" fill="#f59e0b" opacity="0.55" filter="url(#nakshatra-glow-amber)" />
              <circle r="5.5" fill="#fbbf24" />
              <circle r="2.8" fill="#ffffff" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}
