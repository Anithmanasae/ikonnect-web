type RibbonProps = {
  id: string;
  className?: string;
  /** Mirror horizontally so the bright end sits on the right edge. */
  flip?: boolean;
  /** Number of fine strands in the band. */
  strands?: number;
};

/**
 * Glowing neon-green "silk" ribbon used along section edges.
 * Pure SVG + CSS animation (no JS), so it is cheap to render many times.
 */
export default function Ribbon({ id, className = "", flip = false, strands = 9 }: RibbonProps) {
  const g = `rb-${id}-g`;
  const gf = `rb-${id}-gf`;
  const blur = `rb-${id}-b`;
  const sheen = `rb-${id}-s`;

  const lines = Array.from({ length: strands }, (_, i) => {
    const k = i - strands / 2;
    return `M-40 ${250 + k * 9} C 140 ${170 + k * 11}, 320 ${290 + k * 7}, 520 ${318 + k * 4} S 760 ${372 + k * 2}, 860 ${392}`;
  });

  return (
    <div className={`ribbon ${flip ? "ribbon--flip" : ""} ${className}`} aria-hidden="true">
      <svg viewBox="0 0 800 400" preserveAspectRatio="none">
        <defs>
          <linearGradient id={g} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#62ff6e" stopOpacity="1" />
            <stop offset="0.35" stopColor="#2fe064" stopOpacity="0.75" />
            <stop offset="0.7" stopColor="#14b8a6" stopOpacity="0.25" />
            <stop offset="1" stopColor="#0ea5e9" stopOpacity="0" />
          </linearGradient>
          <linearGradient id={gf} x1="0" y1="0" x2="1" y2="0.4">
            <stop offset="0" stopColor="#3dff6e" stopOpacity="0.55" />
            <stop offset="0.5" stopColor="#10b981" stopOpacity="0.12" />
            <stop offset="1" stopColor="#0ea5e9" stopOpacity="0" />
          </linearGradient>
          <linearGradient id={sheen} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0.4" stopColor="#e4ffd6" stopOpacity="0" />
            <stop offset="0.5" stopColor="#e4ffd6" stopOpacity="0.95" />
            <stop offset="0.6" stopColor="#e4ffd6" stopOpacity="0" />
            <animateTransform
              attributeName="gradientTransform"
              type="translate"
              values="-0.7 0; 0.7 0"
              dur="7s"
              repeatCount="indefinite"
            />
          </linearGradient>
          <filter id={blur} x="-20%" y="-50%" width="140%" height="200%">
            <feGaussianBlur stdDeviation="14" />
          </filter>
        </defs>

        {/* soft glow body */}
        <path
          className="ribbon__glow"
          d="M-40 250 C 140 160, 320 290, 520 320 S 760 380, 860 395 L 860 430 L -40 430 Z"
          fill={`url(#${gf})`}
          filter={`url(#${blur})`}
        />
        <path
          className="ribbon__core"
          d="M-40 252 C 140 168, 320 292, 520 320 S 760 374, 860 392"
          stroke={`url(#${g})`}
          strokeWidth="16"
          strokeLinecap="round"
          filter={`url(#${blur})`}
        />

        <g className="ribbon__strands" stroke={`url(#${g})`} fill="none">
          {lines.map((d, i) => (
            <path key={i} d={d} strokeWidth={i === Math.floor(strands / 2) ? 2.2 : 1} opacity={0.35 + (i % 3) * 0.2} />
          ))}
          {/* travelling light sheen along the brightest strands */}
          <path d={lines[Math.floor(strands / 2)]} stroke={`url(#${sheen})`} strokeWidth="3" opacity="0.9" />
          <path d={lines[Math.floor(strands / 2) - 2]} stroke={`url(#${sheen})`} strokeWidth="1.6" opacity="0.6" />
        </g>
      </svg>
    </div>
  );
}
