import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import HoursStrip from "@/components/HoursStrip";
import FeatureCards from "@/components/FeatureCards";
import TribalIdentity from "@/components/TribalIdentity";
import EventsTeaser from "@/components/EventsTeaser";
import AbaloneBar from "@/components/AbaloneBar";
import NearbySpotlight from "@/components/NearbySpotlight";
import GuestReviews from "@/components/GuestReviews";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Hotel",
      "@id": "https://redwoodhotelcasino.com/#hotel",
      name: "Redwood Hotel Casino",
      description:
        "Hotel and casino owned and operated by the Yurok Tribe in Klamath, California — where the old-growth redwoods meet the Klamath River.",
      url: "https://redwoodhotelcasino.com",
      telephone: "+17074820777",
      address: {
        "@type": "PostalAddress",
        streetAddress: "99895 Hwy 169",
        addressLocality: "Klamath",
        addressRegion: "CA",
        postalCode: "95548",
        addressCountry: "US",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 41.5268,
        longitude: -123.9782,
      },
      priceRange: "$$",
      servesCuisine: "American",
      amenityFeature: [
        { "@type": "LocationFeatureSpecification", name: "Casino", value: true },
        { "@type": "LocationFeatureSpecification", name: "Restaurant", value: true },
        { "@type": "LocationFeatureSpecification", name: "Free Parking", value: true },
      ],
      sameAs: [
        "https://facebook.com/RedwoodHotelCasino",
        "https://instagram.com/RedwoodHotelCasino",
      ],
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://redwoodhotelcasino.com/#business",
      name: "Redwood Hotel Casino",
      image: "https://redwoodhotelcasino.com/rhc-exterior.jpg",
      telephone: "+17074820777",
      address: {
        "@type": "PostalAddress",
        streetAddress: "99895 Hwy 169",
        addressLocality: "Klamath",
        addressRegion: "CA",
        postalCode: "95548",
        addressCountry: "US",
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          name: "Casino",
          dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
          opens: "11:00",
          closes: "23:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          name: "Abalone Bar and Grill",
          dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
          opens: "17:00",
          closes: "20:00",
        },
      ],
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Nav />
      <main>
        <Hero />
        <HoursStrip />
        <FeatureCards />
        <TribalIdentity />
        <EventsTeaser />
        <AbaloneBar />
        <NearbySpotlight />
        <GuestReviews />
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
