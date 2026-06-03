// TODO: Replace static hours with a CMS-driven source or environment variable
const HOURS = [
  {
    label: "Hotel",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <rect x="2" y="8" width="14" height="9" rx="1" stroke="currentColor" strokeWidth="1.4" />
        <path d="M1 8L9 2l8 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <rect x="7" y="11" width="4" height="6" rx="0.5" fill="currentColor" opacity="0.5" />
      </svg>
    ),
    lines: ["Check-in: 3:00 PM", "Check-out: 11:00 AM", "Front Desk: 24 Hours"],
  },
  {
    label: "Casino",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <circle cx="9" cy="9" r="7.5" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="9" cy="9" r="2" fill="currentColor" />
        <path d="M9 1.5v3M9 13.5v3M1.5 9h3M13.5 9h3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
    lines: ["Daily: 11 AM – 11 PM"],
  },
  {
    label: "Abalone Bar & Grill",
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
        <path d="M3 5h12M3 9h12M6 13h6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M5 2v3M9 2v3M13 2v3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M5 15v1M13 15v1" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
    lines: ["Daily: 5 PM – 8 PM"],
  },
];

export default function HoursStrip() {
  return (
    <div className="bg-bark">
      <div className="max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12 py-6 md:py-7">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-0 sm:divide-x sm:divide-parchment/15">
          {HOURS.map((h) => (
            <div key={h.label} className="sm:px-8 lg:px-12 first:pl-0 last:pr-0">
              <div className="flex items-center gap-2.5 text-elk-gold mb-2">
                {h.icon}
                <span className="font-body font-semibold text-[11px] tracking-[0.18em] uppercase text-elk-gold">
                  {h.label}
                </span>
              </div>
              {h.lines.map((line) => (
                <p key={line} className="font-body text-parchment/85 text-[13px] leading-relaxed">
                  {line}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
