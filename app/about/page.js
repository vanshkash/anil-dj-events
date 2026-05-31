// app/about/page.js

import AboutSection from "@/components/server/AboutSection";
import PageTransition from "@/components/client/PageTransition";

export const metadata = {
  title:
    "About Anil DJ & Events | Sound & Lighting Services in Hapur & NCR",

  description:
    "Learn more about Anil DJ & Events, one of the trusted names for DJ services, sound, lighting, wedding setups and live event entertainment across Hapur, Noida, Ghaziabad & Delhi NCR.",

  keywords: [
    "About Anil DJ & Events",
    "DJ company in Hapur",
    "Professional DJ services",
    "Wedding DJ team",
    "Sound & lighting experts",
    "Event management company",
    "DJ services in NCR",
    "Corporate event organizers",
    "College fest event setup",
    "Live event entertainment",
  ],

  alternates: {
    canonical: "https://www.anildjevents.in/about",
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
      "About Anil DJ & Events",

    description:
      "Discover professional DJ, wedding, sound and lighting services by Anil DJ & Events across Hapur & Delhi NCR.",

    url: "https://www.anildjevents.in/about",

    siteName: "Anil DJ & Events",

    images: ["/og-image.webp"],

    locale: "en_IN",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "About Anil DJ & Events",

    description:
      "Trusted DJ, sound and live event entertainment services in Hapur, Noida, Ghaziabad & NCR.",

    images: ["/og-image.webp"],
  },
};

export default function About() {
  return (
    <PageTransition>
      <AboutSection />
    </PageTransition>
  );
}