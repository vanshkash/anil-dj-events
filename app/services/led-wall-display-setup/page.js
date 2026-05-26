// app/services/led-wall-display-setup/page.js

import Image from "next/image";
import Link from "next/link";
import PageTransition from "@/components/client/PageTransition";

const ledServices = [
  {
    title: "Corporate Event LED",
    image: "/images/services/cards/display1.webp",
  },
  {
    title: "Live Event Display",
    image: "/images/services/cards/display2.avif",
  },
  {
    title: "Indoor LED Wall",
    image: "/images/services/cards/display3.webp",
  },
];

export const metadata = {
  title:
    "LED Wall Display Setup in Hapur & NCR | Anil DJ & Events",

  description:
    "Book premium LED wall display setups for weddings, DJ nights, live concerts, stage shows and corporate events across Hapur, Noida, Ghaziabad & Delhi NCR.",

  keywords: [
    "LED wall setup in Hapur",
    "LED screen rental",
    "LED display setup",
    "Wedding LED wall",
    "Corporate event LED display",
    "Live concert LED wall",
    "Stage LED setup",
    "Indoor LED display",
    "Outdoor LED wall",
    "LED wall rental NCR",
    "LED video wall",
    "DJ event LED setup",
    "Professional LED display",
    "Event screen rental",
    "LED display services",
  ],

  alternates: {
    canonical: "/services/led-wall-display-setup",
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
      "LED Wall Display Setup in Hapur & NCR | Anil DJ & Events",

    description:
      "Professional LED wall display setups for weddings, live concerts, stage shows and corporate events across Hapur & Delhi NCR.",

    url: "https://anildjevents.in/services/led-wall-display-setup",

    siteName: "Anil DJ & Events",

    images: ["/og-image.webp"],

    locale: "en_IN",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "LED Wall Display Setup | Anil DJ & Events",

    description:
      "Premium LED display and event screen setup services across Hapur, Noida, Ghaziabad & NCR.",

    images: ["/og-image.webp"],
  },
};

export default function LedWallPage() {
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

            {/* Content */}
            <div className="order-2 lg:order-1">

              <div className="mb-5 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm backdrop-blur-md">
                Premium LED Wall Display Setup
              </div>

              <h1 className="text-2xl font-extrabold leading-tight sm:text-5xl">

                LED Wall Display
                <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Designed To Impress
                </span>

              </h1>

              <p className="mt-7 max-w-2xl text-sm leading-relaxed text-gray-400 sm:text-base">

                Create unforgettable event experiences with premium
                LED Wall Display setups for weddings, DJ nights,
                live concerts, stage shows and corporate events by
                Anil DJ & Events across Hapur, Noida, Ghaziabad,
                Delhi and NCR.

              </p>

              {/* Features */}
              <div className="mt-10 grid gap-4 sm:grid-cols-2">

                {[
                  "High Resolution LED Panels",
                  "Stage Background Displays",
                  "Live Video Streaming",
                  "Wedding Entry Screens",
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
                  Book LED Setup
                </a>

                <Link
                  href="/gallery"
                  className="rounded-full border border-white/10 bg-white/5 px-8 py-4 text-center text-sm font-semibold text-white backdrop-blur-xl transition duration-300 hover:bg-white/10"
                >
                  View Gallery
                </Link>

              </div>

            </div>

            {/* Image */}
            <div className="relative order-1 lg:order-2">

              <div className="relative overflow-hidden rounded-[32px] border border-white/10">

                <Image
                  src="/images/services/ledwall.webp"
                  alt="LED Wall Display Setup"
                  width={900}
                  height={700}
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* LED Services */}
      <section className="relative overflow-hidden pb-24">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Heading */}
          <div className="mx-auto max-w-3xl text-center">

            <div className="mb-4 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm backdrop-blur-md">
              LED Display Solutions
            </div>

            <h2 className="text-4xl font-extrabold leading-tight sm:text-5xl">

              Professional LED
              <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Event Display Setup
              </span>

            </h2>

          </div>

          {/* Cards */}
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {ledServices.map((service) => (
              <div
                key={service.title}
                className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl"
              >

                {/* Image */}
                <div className="relative h-72 overflow-hidden">

                  <Image
  src={service.image}
  alt={`${service.title} setup by Anil DJ & Events in Hapur`}
  fill
  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
  className="object-cover transition duration-700 group-hover:scale-110"
/>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 w-full p-6">

                  <h3 className="text-2xl font-bold text-white">
                    {service.title}
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