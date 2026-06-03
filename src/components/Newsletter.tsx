"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    // TODO: wire to email list provider (Mailchimp, ConvertKit, etc.)
    setSubmitted(true);
  }

  return (
    <section className="bg-canopy py-16 md:py-24">
      <div className="max-w-[1280px] mx-auto px-5 md:px-8 lg:px-12">
        <div className="max-w-xl mx-auto text-center">
          <p className="eyebrow-light mb-4">Stay Connected</p>
          <h2
            className="font-display italic text-parchment leading-tight mb-4"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 300 }}
          >
            Be the first to know
          </h2>
          <p className="font-body text-parchment/60 text-[14px] leading-relaxed mb-8">
            Get notified about casino promotions, events at the Abalone Bar,
            and what&rsquo;s happening across Yurok Country. No spam — just good news from Klamath.
          </p>

          {submitted ? (
            <div className="bg-river/20 border border-river/30 rounded-[4px] px-6 py-5">
              <p className="font-display italic text-parchment text-xl" style={{ fontWeight: 400 }}>
                You&rsquo;re on the list.
              </p>
              <p className="font-body text-parchment/60 text-[13px] mt-1">
                We&rsquo;ll be in touch soon from Klamath.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2" noValidate>
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-white/10 border border-parchment/25 rounded-full px-5 py-3 font-body text-parchment text-[14px] placeholder:text-parchment/35 focus:outline-none focus:border-elk-gold/60 transition-colors duration-200"
              />
              <button
                type="submit"
                className="shrink-0 px-6 py-3 rounded-full bg-elk-gold text-bark font-body font-medium text-[13px] tracking-wide hover:bg-[#d4a048] active:scale-[0.98] transition-all duration-200"
              >
                Subscribe
              </button>
            </form>
          )}

          <p className="font-body text-parchment/35 text-[11px] mt-4">
            No spam. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </section>
  );
}
