import Image from "next/image";
import Link from "next/link";

export default function TribalIdentity() {
  return (
    <section className="relative overflow-hidden py-24 md:py-36">
      {/* Background — redwood forest panoramic */}
      <Image
        src="/redwood-forest.jpg"
        alt="Ancient redwood forest on Yurok ancestral homeland, Klamath, California"
        fill
        className="object-cover object-center"
        sizes="100vw"
      />

      {/* Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(15,26,15,0.97) 0%, rgba(15,26,15,0.92) 55%, rgba(15,26,15,0.82) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12">
        <div className="max-w-2xl">
          <p className="eyebrow-light mb-6">Yurok Tribe</p>

          {/* River accent bar */}
          <div className="w-10 h-px bg-river mb-8" />

          <blockquote
            className="font-display italic text-parchment leading-snug mb-8"
            style={{ fontSize: "clamp(1.6rem, 4vw, 2.75rem)", fontWeight: 300 }}
          >
            "The Klamath River is not just a place — it is a living relative.
            The Yurok People have been its stewards since before memory."
          </blockquote>

          <p className="font-body text-parchment/80 text-[13px] tracking-wide mb-3">
            Redwood Hotel Casino is a Yurok Tribe enterprise — proud stewards of
            this land, the river, and the old-growth forest that surrounds us.
            Every visit supports the Tribe&rsquo;s sovereignty, its language
            revitalization, and the ongoing restoration of the Klamath River
            ecosystem.
          </p>

          <p className="font-body text-parchment/80 text-[13px] tracking-wide mb-3">
            In 2022 the Yurok Tribe led the largest dam removal in United States
            history — returning the Klamath to the salmon and the people who
            have always called it home.
          </p>

          <p className="font-body text-parchment/80 text-[13px] tracking-wide mb-10">
            The Tribe&rsquo;s Condor Restoration Program has reintroduced California
            Condors to Yurok skies. On a clear morning above the property, you
            may see one soaring — a sight no other hotel on earth can promise.
          </p>

          <Link
            href="/tribe"
            className="inline-flex items-center gap-2 font-body text-elk-gold text-[13px] font-medium tracking-wide hover:gap-4 transition-all duration-200"
          >
            Learn about the Yurok Tribe
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M2.5 7h9M8 3.5l3.5 3.5L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
