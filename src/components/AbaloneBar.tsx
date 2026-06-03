import Image from "next/image";
import Link from "next/link";

export default function AbaloneBar() {
  return (
    <section className="bg-bark">
      <div className="max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Food photos — 2-up grid */}
          <div className="grid grid-cols-2 gap-3 order-2 lg:order-1">
            <div className="relative aspect-[4/5] rounded-[4px] overflow-hidden">
              <Image
                src="/food-tacos.jpg"
                alt="Crispy fish tacos at Abalone Bar and Grill, Redwood Hotel Casino"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 45vw, 25vw"
              />
            </div>
            <div className="relative aspect-[4/5] rounded-[4px] overflow-hidden mt-6">
              <Image
                src="/food-burger.jpg"
                alt="Burger and fries at Abalone Bar and Grill, Redwood Hotel Casino"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 45vw, 25vw"
              />
            </div>
          </div>

          {/* Text */}
          <div className="order-1 lg:order-2">
            <p className="eyebrow-light mb-4">Dining</p>
            <h2
              className="font-display italic text-parchment leading-tight mb-5"
              style={{ fontSize: "clamp(2rem, 5vw, 3.25rem)", fontWeight: 300 }}
            >
              Abalone Bar
              <br />& Grill
            </h2>
            <p className="font-body text-parchment/70 text-[15px] leading-relaxed mb-4">
              Start your morning with breakfast before the trails. Come back for
              lunch after the river. End the day with dinner and a craft beer
              from our friends at Mad River Brewery — Northern California&rsquo;s
              finest independent brewery.
            </p>
            <p className="font-body text-parchment/70 text-[15px] leading-relaxed mb-8">
              From hearty breakfasts to fish tacos and hand-pressed burgers, the
              Abalone Bar & Grill is where Klamath slows down and sits together.
            </p>

            {/* Mad River Brewery callout */}
            <div className="border-l-2 border-river pl-5 mb-10">
              <p className="font-body text-parchment/55 text-[12px] tracking-[0.15em] uppercase mb-1">
                Local partnership
              </p>
              <p className="font-display italic text-parchment/80 text-lg" style={{ fontWeight: 400 }}>
                Mad River Brewery craft beers on tap
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/eat"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-elk-gold text-bark font-body font-medium text-[13px] tracking-wide hover:bg-[#d4a048] transition-colors duration-200"
              >
                View Menu
              </Link>
              <Link
                href="/eat#hours"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-parchment/30 text-parchment font-body font-medium text-[13px] tracking-wide hover:border-parchment/60 transition-colors duration-200"
              >
                Hours & Info
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
