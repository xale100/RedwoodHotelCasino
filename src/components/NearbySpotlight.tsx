import Image from "next/image";
import Link from "next/link";

const BUSINESSES = [
  { name: "Trees of Mystery", type: "Attraction", desc: "Giant redwoods, gondola rides, and a museum of Native American artifacts." },
  { name: "Klamath River Jet Boat Tours", type: "Adventure", desc: "Jet boat up the Klamath to see Roosevelt Elk, black bears, and river wildlife." },
  { name: "Blue Creek Guide Service", type: "Fishing", desc: "Half-day and full-day guided salmon and steelhead fishing on the Klamath." },
  { name: "Requa Inn", type: "Lodging", desc: "Historic 1914 inn perched above the Klamath River mouth, steps from the coast." },
  { name: "Pem-Mey Fuel Mart", type: "Services", desc: "Yurok-owned fuel and convenience on the way in or out of Klamath." },
  { name: "Country Club Bar and Grill", type: "Dining", desc: "Local favorite for burgers, beer, and a warm welcome from the Klamath community." },
];

const DAY_TRIPS = [
  "Fern Canyon — a 50-foot-tall fern gorge, 30 min south",
  "Roosevelt Elk herd on Newton B. Drury Scenic Parkway",
  "Hidden Beach Trail — coastal bluffs and tide pools",
  "Su-Mêg Village — ancestral Yurok cultural village",
];

export default function NearbySpotlight() {
  return (
    <section className="bg-parchment py-16 md:py-24">
      <div className="max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 mb-12 md:mb-16">
          <div>
            <p className="eyebrow mb-3">Klamath Country</p>
            <h2
              className="font-display italic text-text-dark leading-tight"
              style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 300 }}
            >
              We&rsquo;re the hub —
              <br />explore from here
            </h2>
          </div>
          <div>
            <p className="font-body text-text-dark/70 text-[15px] leading-relaxed mb-4">
              Redwood Hotel Casino sits at the heart of Yurok Country, surrounded
              by some of the most spectacular landscapes on the Pacific Coast.
              Use us as your base for everything Klamath has to offer.
            </p>
            <Link
              href="/nearby"
              className="inline-flex items-center gap-1.5 font-body text-river text-[13px] font-medium tracking-wide hover:text-text-dark transition-colors duration-200"
            >
              Full local guide
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M2.5 7h9M8 3.5l3.5 3.5L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Image + businesses grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mb-10">
          {/* Treehouse photo */}
          <div className="relative rounded-[4px] overflow-hidden lg:row-span-2" style={{ minHeight: 280 }}>
            <Image
              src="/klamath-treehouse.png"
              alt="Klamath River treehouse lodging along the river"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 33vw"
            />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(15,26,15,0.6) 0%, transparent 50%)" }} />
            <p className="absolute bottom-4 left-4 font-display italic text-parchment text-lg" style={{ fontWeight: 300 }}>
              Klamath River Country
            </p>
          </div>

          {/* Businesses list */}
          {BUSINESSES.map((b) => (
            <div
              key={b.name}
              className="bg-white rounded-[4px] p-5 border border-parchment/60"
            >
              <span className="eyebrow text-xs mb-2 block">{b.type}</span>
              <h3 className="font-display text-text-dark text-lg leading-snug mb-1" style={{ fontWeight: 500 }}>
                {b.name}
              </h3>
              <p className="font-body text-text-dark/60 text-[13px] leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>

        {/* Day trips strip */}
        <div className="border-t border-text-dark/10 pt-8">
          <p className="eyebrow mb-4">Day Trips from the Property</p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {DAY_TRIPS.map((trip) => (
              <li key={trip} className="flex items-start gap-2.5 font-body text-text-dark/70 text-[13px] leading-relaxed">
                <span className="mt-1.5 shrink-0 w-1 h-1 rounded-full bg-river" />
                {trip}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
