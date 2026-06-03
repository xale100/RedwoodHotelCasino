import Link from "next/link";

// TODO: Replace with Google Calendar API or CMS data
const EVENTS = [
  {
    date: { month: "Jun", day: "14" },
    category: "Casino",
    title: "Lucky 7s Slot Tournament",
    desc: "Enter for your chance to win the top prize. Open to all Players Club members. Register at the cage.",
    href: "/events",
  },
  {
    date: { month: "Jun", day: "19" },
    category: "Dining",
    title: "Mad River Craft Beer Night",
    desc: "Local Mad River Brewery on tap all night with a special pairing menu at the Abalone Bar & Grill.",
    href: "/events",
  },
  {
    date: { month: "Jun", day: "21–22" },
    category: "Promotion",
    title: "Players Club Double Points Weekend",
    desc: "Earn twice the points on every slot play this weekend only. New members welcome — sign up at the cage.",
    href: "/events",
  },
];

const categoryColor: Record<string, string> = {
  Casino: "text-salmon bg-salmon/10",
  Dining: "text-river bg-river/10",
  Promotion: "text-elk-gold bg-elk-gold/10",
};

export default function EventsTeaser() {
  return (
    <section className="bg-mist py-16 md:py-24">
      <div className="max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 md:mb-14">
          <div>
            <p className="eyebrow mb-3">What&rsquo;s On</p>
            <h2
              className="font-display italic text-text-dark leading-tight"
              style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 300 }}
            >
              Upcoming events
            </h2>
          </div>
          <Link
            href="/events"
            className="shrink-0 inline-flex items-center gap-1.5 font-body text-river text-[13px] font-medium tracking-wide hover:text-text-dark transition-colors duration-200"
          >
            View all events
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M2.5 7h9M8 3.5l3.5 3.5L8 10.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {EVENTS.map((ev) => (
            <Link
              key={ev.title}
              href={ev.href}
              className="group bg-white rounded-[4px] p-6 border border-parchment hover:border-river/40 transition-colors duration-200 flex gap-5"
            >
              {/* Date badge */}
              <div className="shrink-0 flex flex-col items-center justify-start pt-0.5 w-10">
                <span className="font-body text-[9px] font-semibold tracking-[0.18em] uppercase text-salmon">
                  {ev.date.month}
                </span>
                <span
                  className="font-display text-text-dark leading-none"
                  style={{ fontSize: "1.75rem", fontWeight: 500 }}
                >
                  {ev.date.day}
                </span>
              </div>

              {/* Content */}
              <div className="min-w-0">
                <span className={`inline-block text-[10px] font-body font-semibold tracking-[0.12em] uppercase px-2 py-0.5 rounded-full mb-3 ${categoryColor[ev.category] ?? "text-fog bg-fog/10"}`}>
                  {ev.category}
                </span>
                <h3
                  className="font-display text-text-dark leading-snug mb-2"
                  style={{ fontSize: "1.2rem", fontWeight: 500 }}
                >
                  {ev.title}
                </h3>
                <p className="font-body text-text-dark/60 text-[13px] leading-relaxed">
                  {ev.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
