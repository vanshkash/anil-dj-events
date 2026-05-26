// src/app/services/page.js

import ServicesSection from "@/components/server/ServicesSection";
import PageTransition from "@/components/client/PageTransition";

export const metadata = {
  title:
  "Premium Sound & Lighting Services | Anil DJ & Events",

description:
  "Hire Anil DJ & Events for premium DJ services, live wedding setups, sound & lighting across Hapur, Noida, Ghaziabad & Delhi NCR.",
  
  keywords: [
  "DJ services in Hapur",
  "Wedding DJ services",
  "DJ on wheels Hapur",
  "Sound & lighting services",
  "Stage setup services",
  "Live event setup",
  "Corporate event DJ",
  "College fest DJ",
  "LED wall rental",
  "Sound system on rent",
  "Professional DJ in Noida",
  "DJ services in Ghaziabad",
  "Event services in NCR",
  "Wedding sound setup",
  "Party DJ services",
],

  alternates: {
    canonical: "/services",
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
      "Professional DJ & Event Services | Anil DJ & Events",

    description:
      "Professional DJ, sound, lighting, stage setup and live event services across Hapur, Noida, Ghaziabad & Delhi NCR.",

    url: "https://anildjevents.in/services",

    siteName: "Anil DJ & Events",

    images: ["/og-image.webp"],

    locale: "en_IN",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "DJ & Event Services in Hapur & NCR | Anil DJ & Events",

    description:
      "Professional DJ, sound, lighting and live event setup services across Hapur, Noida, Ghaziabad & NCR.",

    images: ["/og-image.webp"],
  },
};

export default function ServicesPage() {
  return (
    <main className="relative overflow-hidden bg-neutral-950 text-white">

      {/* Global Glow */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-purple-600/20 blur-3xl" />

      <div className="absolute right-0 top-[40%] h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative z-10">
        <PageTransition>
          <ServicesSection />
        </PageTransition>
      </div>

    </main>
  );
}