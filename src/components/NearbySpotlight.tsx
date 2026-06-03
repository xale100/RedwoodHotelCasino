import Image from "next/image";
import Link from "next/link";

const BUSINESSES = [
  {
    name: "Klamath River Jet Boat Tours",
    type: "Adventure",
    desc: "Jet boat up the Klamath to see Roosevelt Elk, black bears, and river wildlife up close.",
    yurokEnterprise: true,
  },
  {
    name: "Riverside RV Park",
    type: "RV & Camping",
    desc: "Full hookups on the Klamath River — the ideal base for RV travelers rolling through on Hwy 101.",
    yurokEnterprise: true,
    rvNote: "Book direct · Full hookups · River frontage",
  },
  {
    name: "Pem-Mey Fuel Mart",
    type: "Services",
    desc: "Yurok-owned fuel and convenience — stocked and ready on the way in or out of Klamath.",
    yurokEnterprise: true,
  },
  {
    name: "Trees of Mystery",
    type: "Attraction",
    desc: "Giant redwoods, gondola rides, and a museum of Native American artifacts.",
    yurokEnterprise: false,
  },
  {
    name: "Blue Creek Guide Service",
    type: "Fishing",
    desc: "Half-day and full-day guided salmon and steelhead fishing on the Klamath River.",
    yurokEnterprise: false,
  },
  {
    name: "Requa Inn",
    type: "Lodging",
    desc: "Historic 1914 inn above the Klamath River mouth — steps from the coast.",
    yurokEnterprise: false,
  },
  {
    name: "Country Club Bar and Grill",
    type: "Dining",
    desc: "Local favorite for burgers, cold beer, and a warm welcome from the Klamath community.",
    yurokEnterprise: false,
  },
];

const DAY_TRIPS = [
  "Fern Canyon — a 50-foot-tall fern gorge, 30 min south",
  "Roosevelt Elk herd on Newton B. Drury Scenic Parkway",
  "Hidden Beach Trail — coastal bluffs and tide pools",
  "Su-Mêg Village — ancestral Yurok cultural village",
];

const GATEWAY = [
  "30 min to Fern Canyon",
  "45 min to Redwood NP Visitor Center",
  "2 hrs from Eureka",
  "3 hrs from Medford, OR",
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
              Rest here.
              <br />Explore Yurok Country.
            </h2>
          </div>
          <div>
            <p className="font-body text-text-dark/70 text-[15px] leading-relaxed mb-4">
              Check in here and you&rsquo;re at the center of Yurok Country — within reach
              of everything on the river and the coast, including several tribally owned
              enterprises that make your visit count for the whole community.
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
          <div className="relative rounded-[4px] overflow-hidden lg:row-span-3" style={{ minHeight: 280 }}>
            <Image
              src="/klamath-treehouse.png"
              alt="Klamath River country — Yurok ancestral land"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 33vw"
            />
            <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(15,26,15,0.65) 0%, transparent 50%)" }} />
            <p className="absolute bottom-4 left-4 font-display italic text-parchment text-lg" style={{ fontWeight: 300 }}>
              Klamath River Country
            </p>
          </div>

          {/* Business cards */}
          {BUSINESSES.map((b) => (
            <div
              key={b.name}
              className={`rounded-[4px] p-5 border ${b.yurokEnterprise ? "bg-white border-river/25" : "bg-white border-parchment/60"}`}
            >
              <div className="flex items-center gap-2 mb-2 flex-wrap">
                <span className="eyebrow text-xs">{b.type}</span>
                {b.yurokEnterprise && (
                  <span className="inline-flex items-center gap-1 text-[9px] font-body font-semibold tracking-[0.12em] uppercase text-river border border-river/40 px-2 py-0.5 rounded-full">
                    ◆ Yurok Enterprise
                  </span>
                )}
              </div>
              <h3 className="font-display text-text-dark text-lg leading-snug mb-1" style={{ fontWeight: 500 }}>
                {b.name}
              </h3>
              <p className="font-body text-text-dark/60 text-[13px] leading-relaxed">{b.desc}</p>
              {b.rvNote && (
                <p className="font-body text-river text-[12px] font-medium mt-2">
                  {b.rvNote}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Day trips + gateway distances */}
        <div className="border-t border-text-dark/10 pt-8">
          <p className="eyebrow mb-4">Day Trips from the Property</p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
            {DAY_TRIPS.map((trip) => (
              <li key={trip} className="flex items-start gap-2.5 font-body text-text-dark/70 text-[13px] leading-relaxed">
                <span className="mt-1.5 shrink-0 w-1 h-1 rounded-full bg-river" />
                {trip}
              </li>
            ))}
          </ul>
          {/* Gateway distances — one-liner */}
          <div className="flex flex-wrap gap-x-6 gap-y-1 border-t border-text-dark/8 pt-5">
            {GATEWAY.map((g, i) => (
              <span key={g} className="font-body text-text-dark/45 text-[12px]">
                {i > 0 && <span className="mr-6 hidden sm:inline" />}
                {g}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
