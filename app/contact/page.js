// src/app/contact/page.js

import ContactSection from "@/components/server/ContactSection";
import PageTransition from "@/components/client/PageTransition";

export const metadata = {
  title:
    "Contact Anil DJ & Events | DJ & Sound Booking Services in Hapur & NCR",

  description:
    "Contact Anil DJ & Events for DJ bookings, wedding setups, sound systems, lighting and live event services across Hapur, Noida, Ghaziabad & Delhi NCR.",

  keywords: [
    "Contact DJ in Hapur",
    "DJ booking Hapur",
    "Wedding DJ contact",
    "Sound service contact",
    "Event booking NCR",
    "DJ on wheels booking",
    "Corporate event booking",
    "Lighting setup contact",
    "Live event services",
    "DJ services near me",
  ],

  alternates: {
    canonical: "/contact",
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
      "Contact Anil DJ & Events",

    description:
      "Book professional DJ, wedding, sound and lighting services across Hapur, Noida, Ghaziabad & Delhi NCR.",

    url: "https://anildjevents.in/contact",

    siteName: "Anil DJ & Events",

    images: ["/og-image.webp"],

    locale: "en_IN",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Contact Anil DJ & Events",

    description:
      "Get in touch for DJ bookings, sound systems, lighting and live event services in Hapur & NCR.",

    images: ["/og-image.webp"],
  },
};

export default function ContactPage() {
  return (
    <PageTransition>
      <ContactSection />
    </PageTransition>
  );
}