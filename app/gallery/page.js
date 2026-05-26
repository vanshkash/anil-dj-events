// /app/gallery/page.js

import GallerySection from "@/components/server/GallerySection";
import PageTransition from "@/components/client/PageTransition";

export const metadata = {
  title:
    "Event Gallery in Hapur & NCR | Anil DJ & Events",

  description:
    "Browse real event setups by Anil DJ & Events. Explore our portfolio of premium concert sound systems, massive truss lighting setups, and weddings in Hapur, Noida, Ghaziabad & Delhi NCR.",

  keywords: [
    "DJ event gallery",
    "Wedding DJ gallery",
    "Event setup photos",
    "Sound & lighting gallery",
    "Stage setup gallery",
    "DJ events in Hapur",
    "Wedding setup in NCR",
    "Corporate event gallery",
    "College fest gallery",
    "DJ lighting photos",
    "Live event highlights",
    "Event decoration gallery",
  ],

  alternates: {
    canonical: "/gallery",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    title:
      "Event Gallery | Anil DJ & Events",

    description:
      "Browse wedding DJ setups, stage lighting, sound systems and live event highlights across Hapur, Noida, Ghaziabad & NCR.",

    url: "https://anildjevents.in/gallery",

    siteName: "Anil DJ & Events",

    images: ["/og-image.webp"],

    locale: "en_IN",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "DJ & Event Gallery | Anil DJ & Events",

    description:
      "Explore premium wedding, corporate and live event highlights by Anil DJ & Events.",

    images: ["/og-image.webp"],
  },
};

export default function GalleryPage() {
  return (
    <main className="relative overflow-hidden text-white">
      <PageTransition>
        <GallerySection />
      </PageTransition>
    </main>
  );
}