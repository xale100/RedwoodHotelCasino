import Link from "next/link";

// TODO: Confirm exact address and phone number with property management
const CONTACT = {
  address: "99895 Hwy 169",
  city: "Klamath, CA 95548",
  phone: "(707) 482-0777",
  email: "info@redwoodhotelcasino.com", // TODO: confirm
};

const NAV_COLS = [
  {
    heading: "Explore",
    links: [
      { label: "Stay", href: "/stay" },
      { label: "Play", href: "/play" },
      { label: "Eat", href: "/eat" },
      { label: "Explore Klamath", href: "/explore" },
      { label: "Nearby Businesses", href: "/nearby" },
    ],
  },
  {
    heading: "Connect",
    links: [
      { label: "Events & Promotions", href: "/events" },
      { label: "Yurok Tribe", href: "/tribe" },
      { label: "Careers", href: "/careers" },
      { label: "Contact Us", href: "/contact" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Responsible Gaming", href: "/responsible-gaming" },
      { label: "Players Club", href: "/play#players-club" },
      { label: "Accessibility", href: "/contact#accessibility" },
      { label: "Privacy Policy", href: "/privacy" },
    ],
  },
];

const SOCIAL = [
  {
    label: "Facebook",
    href: "https://facebook.com/RedwoodHotelCasino", // TODO: confirm handle
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor" aria-hidden="true">
        <path d="M16 1H2a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h7.5v-6H7V8.5h2.5V7c0-2.48 1.52-3.83 3.73-3.83.74 0 1.51.06 2.27.13V6h-1.56c-1.22 0-1.46.58-1.46 1.43V8.5H15l-.5 3H12.5V17H16a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://instagram.com/RedwoodHotelCasino", // TODO: confirm handle
    icon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="2" width="14" height="14" rx="4" />
        <circle cx="9" cy="9" r="3.5" />
        <circle cx="13.5" cy="4.5" r="0.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-footer text-parchment/80" role="contentinfo">
      {/* Main footer */}
      <div className="max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12 pt-14 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-12">
          {/* Brand + contact */}
          <div className="lg:col-span-2">
            {/* Logo lockup */}
            <div className="flex items-center gap-2.5 mb-5">
              <FooterTreeMark />
              <div className="flex flex-col leading-none">
                <span className="font-display text-parchment tracking-[0.1em] text-base leading-none" style={{ fontWeight: 500 }}>
                  REDWOOD
                </span>
                <span className="font-body text-parchment/65 text-[9px] tracking-[0.22em] uppercase leading-none mt-1">
                  Hotel · Casino
                </span>
              </div>
            </div>

            <address className="not-italic font-body text-[13px] leading-relaxed mb-5">
              <p>{CONTACT.address}</p>
              <p className="mb-3">{CONTACT.city}</p>
              <a href={`tel:${CONTACT.phone}`} className="text-parchment/80 hover:text-parchment transition-colors duration-200 block">
                {CONTACT.phone}
              </a>
              <a href={`mailto:${CONTACT.email}`} className="text-parchment/70 hover:text-parchment/80 transition-colors duration-200 block text-[12px]">
                {CONTACT.email}
              </a>
            </address>

            {/* Hours summary */}
            <div className="font-body text-[12px] leading-relaxed border-t border-parchment/10 pt-5 mb-5">
              <p className="text-parchment/60 tracking-[0.15em] uppercase text-[10px] mb-2">Hours</p>
              <p>Casino: Open 24 Hours</p>
              <p>Hotel Front Desk: 24 Hours</p>
              <p>Abalone Bar: Sun–Thu 7am–10pm</p>
              <p>Fri–Sat 7am–11pm</p>
            </div>

            {/* Social */}
            <div className="flex gap-3">
              {SOCIAL.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${s.label} — opens in new tab`}
                  className="w-9 h-9 flex items-center justify-center rounded-full border border-parchment/20 text-parchment/70 hover:text-parchment hover:border-parchment/40 transition-colors duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {NAV_COLS.map((col) => (
            <div key={col.heading}>
              <h3 className="font-body text-[10px] font-semibold tracking-[0.2em] uppercase text-parchment/60 mb-4">
                {col.heading}
              </h3>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="font-body text-[13px] text-parchment/80 hover:text-parchment transition-colors duration-200"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom strip */}
        <div className="border-t border-parchment/10 pt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <p className="font-body text-[11px] text-parchment/55">
            © {year} Redwood Hotel Casino. Owned and operated by the Yurok Tribe. All rights reserved.
          </p>
          <p className="font-body text-[11px] text-parchment/55 leading-relaxed max-w-lg">
            Must be 21 or older to enter the casino.&nbsp;
            <Link href="/responsible-gaming" className="underline underline-offset-2 hover:text-parchment/55 transition-colors duration-200">
              Gambling Problem?
            </Link>{" "}
            Call 1-800-522-4700 (National Helpline) or 1-800-426-2537 (CA Council).
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterTreeMark() {
  return (
    <svg width="18" height="21" viewBox="0 0 18 21" fill="none" className="shrink-0" aria-hidden="true">
      <polygon points="9,1 17,11 1,11" fill="#C86040" fillOpacity="0.7" />
      <polygon points="9,5.5 15.5,14 2.5,14" fill="#C86040" fillOpacity="0.5" />
      <rect x="7.5" y="14" width="3" height="6" rx="0.5" fill="#C86040" fillOpacity="0.4" />
    </svg>
  );
}
