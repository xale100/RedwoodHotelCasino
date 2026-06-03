"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const links = [
  { href: "/stay", label: "Stay" },
  { href: "/play", label: "Play" },
  { href: "/eat", label: "Eat" },
  { href: "/explore", label: "Explore" },
  { href: "/events", label: "Events" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const navBg =
    scrolled || open
      ? "bg-canopy border-b border-parchment/10"
      : "bg-transparent border-b border-transparent";

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${navBg}`}
      >
        <div className="max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12 flex items-center justify-between h-16 md:h-[72px]">
          {/* Logo */}
          <div className="flex items-center gap-3 shrink-0">
            <Link href="/" className="flex items-center gap-3" aria-label="Redwood Hotel Casino home">
              <TreeMark />
              <div className="flex flex-col leading-none">
                <span
                  className="font-display text-parchment tracking-[0.1em] text-lg leading-none"
                  style={{ fontWeight: 500 }}
                >
                  REDWOOD
                </span>
                <span className="font-body text-parchment/70 text-[9px] tracking-[0.24em] uppercase leading-none mt-[4px]">
                  Hotel · Casino
                </span>
              </div>
            </Link>
            <div className="hidden md:block w-px h-7 bg-parchment/20 mx-0.5" aria-hidden="true" />
            <Image
              src="/hie-logo.png"
              alt="Holiday Inn Express member hotel"
              width={57}
              height={36}
              className="hidden md:block rounded-[2px]"
            />
          </div>

          {/* Desktop links */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10" aria-label="Main navigation">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="font-body text-parchment/90 text-[13px] tracking-wide hover:text-parchment transition-colors duration-200"
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA + mobile hamburger */}
          <div className="flex items-center gap-3">
            <Link
              href="/stay"
              className="hidden md:inline-flex items-center px-5 py-2 rounded-full bg-elk-gold text-bark text-[13px] font-body font-medium tracking-wide hover:bg-[#d4a048] transition-colors duration-200"
            >
              Book Now
            </Link>
            <button
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen(!open)}
              className="md:hidden w-10 h-10 flex flex-col justify-center items-center gap-[5px]"
            >
              <span className={`block h-px w-[22px] bg-parchment transition-all duration-300 origin-center ${open ? "translate-y-[7px] rotate-45" : ""}`} />
              <span className={`block h-px w-[22px] bg-parchment transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
              <span className={`block h-px w-[22px] bg-parchment transition-all duration-300 origin-center ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        aria-hidden={!open}
        className={`fixed inset-0 z-40 bg-canopy flex flex-col px-8 pt-24 pb-10 md:hidden transition-all duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col gap-7" aria-label="Mobile navigation">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-display italic text-parchment text-5xl leading-none hover:text-elk-gold transition-colors duration-200"
              style={{ fontWeight: 300 }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="mt-10">
          <Link
            href="/stay"
            onClick={() => setOpen(false)}
            className="inline-flex items-center px-8 py-3.5 rounded-full bg-elk-gold text-bark font-body font-medium tracking-wide text-[15px]"
          >
            Book Your Stay
          </Link>
        </div>
        <p className="mt-auto font-body text-parchment/35 text-[10px] tracking-[0.2em] uppercase">
          Klamath, California · Yurok Tribe
        </p>
      </div>
    </>
  );
}

function TreeMark() {
  return (
    <svg width="20" height="24" viewBox="0 0 20 24" fill="none" className="shrink-0" aria-hidden="true">
      <polygon points="10,1 19,12 1,12" fill="#C86040" />
      <polygon points="10,6.5 17.5,16 2.5,16" fill="#C86040" fillOpacity="0.65" />
      <rect x="8.5" y="16" width="3" height="6.5" rx="0.5" fill="#C86040" fillOpacity="0.5" />
    </svg>
  );
}
