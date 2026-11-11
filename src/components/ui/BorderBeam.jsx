export default function BorderBeam({
  className = '',
  color = '#38bdf8',
  duration = 6,
  strokeWidth = 2,
  rx = 16,
}) {
  return (
    <svg
      className={`pointer-events-none absolute inset-0 h-full w-full overflow-visible rounded-[inherit] ${className}`}
      aria-hidden="true"
    >
      <defs>
        <filter id="beam-glow" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="beam-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#38bdf8" stopOpacity="0" />
          <stop offset="60%" stopColor={color} stopOpacity="1" />
          <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.8" />
        </linearGradient>
      </defs>
      <rect
        x="1"
        y="1"
        width="calc(100% - 2px)"
        height="calc(100% - 2px)"
        rx={rx}
        fill="none"
        stroke="url(#beam-grad)"
        strokeWidth={strokeWidth}
        strokeDasharray="180 540"
        strokeLinecap="round"
        filter="url(#beam-glow)"
        style={{
          animation: `borderBeamDash ${duration}s linear infinite`,
        }}
      />
    </svg>
  );
}
