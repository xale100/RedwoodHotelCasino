import Image from "next/image";
import Link from "next/link";

const CARDS = [
  {
    eyebrow: "Stay",
    headline: "Klamath River mornings",
    body: "Comfortable rooms steps from the river, with breakfast waiting and old-growth redwoods right outside.",
    href: "/stay",
    cta: "Reserve a Room",
    img: "/rhc-exterior.jpg",
    alt: "Redwood Hotel Casino exterior — warm cedar and stone in Klamath, CA",
    position: "object-center",
  },
  {
    eyebrow: "Play",
    headline: "Your game starts here",
    body: "Slots, video poker, and table games on a vibrant floor. Players Club members earn on every play.",
    href: "/play",
    cta: "See the Floor",
    img: "/casino-floor.jpg",
    alt: "Redwood Hotel Casino gaming floor with slot machines",
    position: "object-center",
  },
  {
    eyebrow: "Eat",
    headline: "River-to-table dining",
    body: "The Abalone Bar & Grill serves breakfast, lunch, and dinner with local craft beer and seasonal flavors.",
    href: "/eat",
    cta: "View the Menu",
    img: "/food-burger.jpg",
    alt: "Abalone Bar and Grill burger with fries",
    position: "object-center",
  },
  {
    eyebrow: "Explore",
    headline: "Yurok Country awaits",
    body: "Fern Canyon, Roosevelt Elk, the Klamath River mouth — and 60 miles of Redwood National Park coastline.",
    href: "/explore",
    cta: "Plan Your Trip",
    img: "/klamath-coast.jpg",
    alt: "Klamath River meeting the Pacific Ocean, Yurok ancestral homeland",
    position: "object-top",
  },
];

export default function FeatureCards() {
  return (
    <section className="bg-canopy py-16 md:py-24">
      <div className="max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12">
        {/* Section header */}
        <div className="mb-10 md:mb-14">
          <p className="eyebrow-light mb-3">Experience</p>
          <h2
            className="font-display italic text-parchment leading-tight"
            style={{ fontSize: "clamp(2rem, 5vw, 3.25rem)", fontWeight: 300 }}
          >
            Everything Klamath has to offer
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {CARDS.map((card) => (
            <Link
              key={card.eyebrow}
              href={card.href}
              className="group relative overflow-hidden rounded-[4px] flex flex-col"
              style={{ minHeight: "clamp(280px, 50vw, 480px)" }}
            >
              {/* Photo */}
              <Image
                src={card.img}
                alt={card.alt}
                fill
                className={`object-cover ${card.position} transition-transform duration-700 group-hover:scale-[1.04]`}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />

              {/* Gradient */}
              <div
                className="absolute inset-0 transition-opacity duration-300"
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(15,26,15,0.05) 0%, rgba(15,26,15,0.4) 40%, rgba(15,26,15,0.92) 100%)",
                }}
              />

              {/* Text */}
              <div className="relative z-10 mt-auto p-6">
                <p className="eyebrow-light mb-2">{card.eyebrow}</p>
                <h3
                  className="font-display text-parchment italic leading-tight mb-2"
                  style={{ fontSize: "clamp(1.4rem, 3vw, 1.75rem)", fontWeight: 400 }}
                >
                  {card.headline}
                </h3>
                <p className="font-body text-parchment/85 text-[13px] leading-relaxed mb-4 hidden sm:block">
                  {card.body}
                </p>
                <span className="inline-flex items-center gap-1.5 font-body text-elk-gold text-[13px] font-medium tracking-wide group-hover:gap-3 transition-all duration-200">
                  {card.cta}
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M2.5 7h9M8 3.5l3.5 3.5L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
