// TODO: Replace with live review API (Google Places or Tripadvisor) when available
const REVIEWS = [
  {
    stars: 5,
    text: "Best casino in Northern California — and the redwoods outside are unreal. Stayed two nights, played every morning, and had breakfast at the Abalone Bar. Will definitely be back.",
    name: "Robert T.",
    source: "Google",
  },
  {
    stars: 5,
    text: "The rooms are clean and comfortable, and the location right in the redwoods feels completely removed from the world. Staff was warm, welcoming, and genuinely proud of where they are.",
    name: "Sarah M.",
    source: "TripAdvisor",
  },
  {
    stars: 5,
    text: "Loved the breakfast. Fish tacos were incredible. The drive down 101 with the redwoods towering over you is worth the trip alone — and the hotel is a perfect home base.",
    name: "Jessica L.",
    source: "Google",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <path
            d="M7 1.5l1.545 3.13 3.455.502-2.5 2.436.59 3.44L7 9.25l-3.09 1.758.59-3.44L2 5.132l3.455-.503L7 1.5z"
            fill={i < count ? "#C89440" : "none"}
            stroke={i < count ? "#C89440" : "#C89440"}
            strokeWidth="0.8"
            strokeLinejoin="round"
          />
        </svg>
      ))}
    </div>
  );
}

export default function GuestReviews() {
  return (
    <section className="bg-mist py-16 md:py-24">
      <div className="max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12">
        {/* Header */}
        <div className="mb-10 md:mb-14">
          <p className="eyebrow mb-3">Guest Reviews</p>
          <h2
            className="font-display italic text-text-dark leading-tight"
            style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 300 }}
          >
            What guests are saying
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {REVIEWS.map((r) => (
            <div
              key={r.name}
              className="bg-white rounded-[4px] p-6 border border-parchment flex flex-col gap-4"
            >
              <Stars count={r.stars} />
              <blockquote className="font-display italic text-text-dark leading-relaxed flex-1" style={{ fontSize: "1.05rem", fontWeight: 400 }}>
                &ldquo;{r.text}&rdquo;
              </blockquote>
              <div className="flex items-center justify-between border-t border-parchment pt-4">
                <span className="font-body text-text-dark text-[13px] font-medium">{r.name}</span>
                <span className="font-body text-text-dark/40 text-[11px] tracking-wide">{r.source}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
