// app/services/custom-events/page.js

import Image from "next/image";
import Link from "next/link";
import PageTransition from "@/components/client/PageTransition";

const eventTypes = [
  {
    title: "Wedding Events",
    image: "/images/services/cards/event1.webp",
  },
  {
    title: "Corporate Events",
    image: "/images/services/cards/event2.webp",
  },
  {
    title: "School & College Events",
    image: "/images/services/cards/event3.webp",
  },
];

export const metadata = {
  title:
    "Custom Event Services in Hapur & NCR | Anil DJ & Events",

  description:
    "Book premium custom event services including weddings, DJ nights, birthdays, corporate events and celebrations in Hapur & NCR.",

  keywords: [
    "Custom event services in Hapur",
    "Wedding event setup",
    "Corporate event management",
    "College fest event setup",
    "Birthday party DJ",
    "DJ night setup",
    "Live event production",
    "Sound & lighting services",
    "Stage setup in NCR",
    "LED wall rental",
    "Premium DJ services",
    "Event planners in Hapur",
    "Event services in Noida",
    "Corporate events in Ghaziabad",
    "Wedding DJ in NCR",
  ],

  alternates: {
    canonical: "https://www.anildjevents.in/services/custom-events",
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
      "Custom Event Services in Hapur & NCR | Anil DJ & Events",

    description:
      "Premium weddings, DJ nights, birthdays, corporate events and live event setups with professional sound & lighting across Hapur & NCR.",

    url: "https://www.anildjevents.in/services/custom-events",

    siteName: "Anil DJ & Events",

    images: ["/og-image.webp"],

    locale: "en_IN",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Custom Event Services | Anil DJ & Events",

    description:
      "Premium wedding, corporate and live event setups with DJ, sound & lighting across Hapur & NCR.",

    images: ["/og-image.webp"],
  },
};

export default function CustomEventsPage() {
  return (
    <PageTransition>
    <main className="relative overflow-hidden bg-neutral-950 text-white">

      {/* Glow Effects */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-purple-600/20 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-6">

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="grid items-center gap-14 lg:grid-cols-2">

            {/* Left Content */}
<div className="order-2 lg:order-1">

              <div className="mb-5 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm backdrop-blur-md">
                Premium Custom Event Services
              </div>

              <h1 className="text-2xl font-extrabold leading-tight sm:text-5xl">

                Custom Events
                <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Crafted To Impress
                </span>

              </h1>

              <p className="mt-7 max-w-2xl text-sm leading-relaxed text-gray-400 sm:text-base">

                Anil DJ & Events delivers luxury event experiences
                with premium sound systems, DJ setups, stage lighting,
                LED walls and complete event production for weddings,
                birthdays, DJ nights, corporate events and celebrations
                across Hapur, Noida, Ghaziabad, Delhi and NCR.

              </p>

              {/* Features */}
              <div className="mt-10 grid gap-4 sm:grid-cols-2">

                {[
                  "Professional DJ Setup",
                  "Premium Sound Quality",
                  "LED Wall & Lighting",
                  "Event Management",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-gray-300 backdrop-blur-xl"
                  >
                    {item}
                  </div>
                ))}

              </div>

              {/* Buttons */}
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">

                <a
                  href="https://wa.me/918923426667"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-gradient-to-r from-purple-600 to-blue-500 px-8 py-4 text-center text-sm font-semibold text-white transition duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/30"
                >
                  Book Your Event
                </a>

                <Link
                  href="/gallery"
                  className="rounded-full border border-white/10 bg-white/5 px-8 py-4 text-center text-sm font-semibold text-white backdrop-blur-xl transition duration-300 hover:bg-white/10"
                >
                  View Gallery
                </Link>

              </div>

            </div>

            {/* Right Image */}
<div className="relative order-1 lg:order-2">

              <div className="relative overflow-hidden rounded-[32px] border border-white/10">

                <Image
                  src="/images/services/custom_event.webp"
                  alt="Custom Event Service"
                  width={900}
                  height={700}
                  className="h-full w-full object-cover"
                />

                {/* <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" /> */}

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Event Types */}
      <section className="relative overflow-hidden pb-24">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Heading */}
          <div className="mx-auto max-w-3xl text-center">

            <div className="mb-4 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm backdrop-blur-md">
              Event Categories
            </div>

            <h2 className="text-4xl font-extrabold leading-tight sm:text-5xl">

              Events We
              <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Specialize In
              </span>

            </h2>

          </div>

          {/* Cards */}
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {eventTypes.map((event) => (
              <div
                key={event.title}
                className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl"
              >

                {/* Image */}
                <div className="relative h-72 overflow-hidden">

                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 w-full p-6">

                  <h3 className="text-2xl font-bold text-white">
                    {event.title}
                  </h3>

                </div>

              </div>
            ))}

          </div>

        </div>

      </section>

    </main>
    </PageTransition>
  );
}