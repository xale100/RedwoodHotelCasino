import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
      {/* Background — swap for a higher-res hero photo when available */}
      <Image
        src="/hero-redwoods.jpg"
        alt="Looking up through old-growth redwood canopy, Klamath, California — Yurok ancestral land"
        fill
        priority
        className="object-cover object-center"
        quality={90}
        sizes="100vw"
      />

      {/* Layered overlay: subtle at top, dense at bottom for legibility */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(15,26,15,0.20) 0%, rgba(15,26,15,0.65) 35%, rgba(15,26,15,0.88) 60%, rgba(15,26,15,0.96) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-5 max-w-3xl mx-auto pt-24 pb-28">
        {/* Eyebrow */}
        <p className="eyebrow-light mb-8 md:mb-10">
          Yurok Ancestral Land &nbsp;·&nbsp; Klamath, California
        </p>

        {/* Main display — huem-chor = Yurok for "welcome" */}
        <h1
          className="font-display italic text-parchment leading-[0.9] tracking-wide mb-5"
          style={{ fontSize: "clamp(3.5rem, 12vw, 8.5rem)", fontWeight: 300 }}
        >
          huem-chor
        </h1>

        {/* Sub-headline */}
        <p
          className="font-display text-parchment/90 leading-snug mb-6"
          style={{ fontSize: "clamp(1.1rem, 3vw, 1.75rem)", fontWeight: 400 }}
        >
          Welcome to Redwood Hotel Casino
        </p>

        {/* Land acknowledgment — woven in, not a disclaimer */}
        <p
          className="font-display italic text-parchment/75 leading-relaxed mb-10 max-w-md mx-auto"
          style={{ fontSize: "clamp(0.9rem, 2vw, 1.05rem)" }}
        >
          We are grateful guests on the ancestral homeland of the Yurok People,
          where the Klamath River has flowed since time immemorial.
        </p>

        {/* Primary CTA */}
        <Link
          href="/stay"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-elk-gold text-bark font-body font-medium text-sm tracking-wide hover:bg-[#d4a048] active:scale-[0.98] transition-all duration-200"
        >
          Book Your Stay
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
            <path d="M3 7.5h9M8.5 3.5l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-40">
        <span className="font-body text-parchment text-[9px] tracking-[0.25em] uppercase">Scroll</span>
        <div className="w-px h-7 bg-gradient-to-b from-parchment to-transparent" />
      </div>
    </section>
  );
}
