export default function AttachNetLogo() {
  return (
    <div className="w-28 h-28 mb-2">
      <svg viewBox="0 0 200 200" className="w-full h-full">
        {/* Background Circle */}
        <circle cx="100" cy="100" r="90" fill="url(#gradientBackground)" />

        {/* Gradient Definition */}
        <defs>
          <linearGradient id="gradientBackground" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#6EE7B7" />
            <stop offset="100%" stopColor="#3B82F6" />
          </linearGradient>
        </defs>

        {/* Abstract Network Lines */}
        <path
          d="M60,100 L140,100 M100,60 L100,140"
          stroke="rgba(255,255,255,0.3)"
          strokeWidth="15"
          strokeLinecap="round"
        />

        {/* Connected Dots */}
        <circle cx="60" cy="100" r="12" fill="#FFF" />
        <circle cx="140" cy="100" r="12" fill="#FFF" />
        <circle cx="100" cy="60" r="12" fill="#FFF" />
        <circle cx="100" cy="140" r="12" fill="#FFF" />
        <circle cx="100" cy="100" r="15" fill="#FFF" />

        {/* Animated Pulse Ring */}
        <circle
          cx="100"
          cy="100"
          r="25"
          fill="none"
          stroke="#FFF"
          strokeWidth="2"
          className="animate-ping opacity-75"
        />

        {/* Connection Lines */}
        <path
          d="M60,100 L100,60 M100,60 L140,100 M140,100 L100,140 M100,140 L60,100"
          stroke="rgba(255,255,255,0.6)"
          strokeWidth="4"
          fill="none"
        />
      </svg>
    </div>
  );
}
