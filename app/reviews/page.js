// src/app/reviews/page.js

import ReviewsSection from "@/components/server/ReviewsSection";
import PageTransition from "@/components/client/PageTransition";

export const metadata = {
  title:
    "Client Reviews & Event Experiences | Anil DJ & Events",

  description:
    "Read real client reviews and event experiences of Anil DJ & Events for weddings, DJ nights, sound systems, lighting and live event services across Hapur, Noida, Ghaziabad & Delhi NCR.",

  keywords: [
    "DJ reviews in Hapur",
    "Wedding DJ reviews",
    "Client testimonials",
    "Event service reviews",
    "Sound & lighting reviews",
    "DJ experience NCR",
    "Corporate event reviews",
    "College fest DJ reviews",
    "Best DJ in Hapur reviews",
    "Event entertainment feedback",
  ],

  alternates: {
    canonical: "https://www.anildjevents.in/reviews",
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
      "Client Reviews | Anil DJ & Events",

    description:
      "Explore real reviews and experiences from weddings, parties and live events managed by Anil DJ & Events across Hapur & NCR.",

    url: "https://www.anildjevents.in/reviews",

    siteName: "Anil DJ & Events",

    images: ["/og-image.webp"],

    locale: "en_IN",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Reviews | Anil DJ & Events",

    description:
      "See what clients say about Anil DJ & Events for weddings, sound, lighting and live event entertainment.",

    images: ["/og-image.webp"],
  },
};

export default function ReviewsPage() {
  return (
    <PageTransition>
      <ReviewsSection />
    </PageTransition>
  );
}