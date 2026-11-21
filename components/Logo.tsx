type LogoProps = {
  className?: string;
  /** Unique id prefix so multiple logos on one page don't share gradient ids. */
  idPrefix?: string;
};

export function LogoMark({ className, idPrefix = "lg" }: LogoProps) {
  const stem = `${idPrefix}-stem`;
  const arm = `${idPrefix}-arm`;
  return (
    <svg className={className} viewBox="0 0 56 70" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id={stem} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#3ee6c9" />
          <stop offset="1" stopColor="#4fdc9a" />
        </linearGradient>
        <linearGradient id={arm} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#86f262" />
          <stop offset="1" stopColor="#3fd64a" />
        </linearGradient>
      </defs>
      <circle cx="8.5" cy="7.5" r="6.5" fill="#3ee6c9" />
      <rect x="2" y="19" width="13" height="47" rx="6.5" fill={`url(#${stem})`} />
      <path d="M55 12H37.5L15 39.5 37.5 67H55L33 39.5Z" fill={`url(#${arm})`} />
    </svg>
  );
}

export default function Logo({ className, idPrefix }: LogoProps) {
  return (
    <span className={`logo ${className ?? ""}`}>
      <LogoMark className="logo__mark" idPrefix={idPrefix} />
      <span className="logo__text">
        <span className="logo__name">Ikonnect</span>
        <span className="logo__sub">Talentum Arrow</span>
        <span className="logo__pl">Private Limited</span>
      </span>
    </span>
  );
}
