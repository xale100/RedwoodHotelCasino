import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Redwood Hotel Casino | Klamath, CA | Yurok Tribe",
  description:
    "Redwood Hotel Casino is owned and operated by the Yurok Tribe in Klamath, California — where the old-growth redwoods meet the Klamath River. Hotel, casino, dining, and the gateway to Yurok Country.",
  keywords:
    "Redwood Hotel Casino, Klamath CA casino, hotels near Redwood National Park, Klamath River lodging, things to do in Klamath CA, Yurok Country travel, Northern California casino hotel",
  openGraph: {
    title: "Redwood Hotel Casino | Klamath, CA",
    description:
      "Stay, play, and explore in the heart of Yurok Country. Hotel rooms, casino floor, Abalone Bar & Grill, and endless redwood adventure.",
    siteName: "Redwood Hotel Casino",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
