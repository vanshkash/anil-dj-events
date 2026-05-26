// app/services/wedding-dj-sound/page.js

import Image from "next/image";
import Link from "next/link";
import PageTransition from "@/components/client/PageTransition";

const weddingServices = [
  {
    title: "Wedding Stage Sound",
    image: "/images/services/cards/wedding1.webp",
  },
  {
    title: "Luxury DJ Setup",
    image: "/images/services/cards/wedding2.webp",
  },
  {
    title: "LED Wall Setup",
    image: "/images/services/cards/wedding3.webp",
  },
];

export const metadata = {
  title:
    "Wedding DJ Sound in Hapur & NCR | Anil DJ & Events",

  description:
    "Book premium wedding DJ sound setups, luxury stage lighting, LED walls and live wedding entertainment services across Hapur, Noida, Ghaziabad & Delhi NCR.",

  keywords: [
    "Wedding DJ in Hapur",
    "Wedding sound setup",
    "Luxury wedding DJ",
    "Wedding stage setup",
    "LED wall for weddings",
    "Wedding lighting setup",
    "Wedding DJ in Noida",
    "Wedding DJ in Ghaziabad",
    "Wedding entertainment services",
    "DJ sound for weddings",
    "Wedding event setup",
    "Wedding music system",
    "Professional wedding DJ",
    "Wedding stage lighting",
    "Wedding DJ services NCR",
  ],

  alternates: {
    canonical: "/services/wedding-dj-sound",
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
      "Wedding DJ Sound in Hapur & NCR | Anil DJ & Events",

    description:
      "Premium wedding DJ setups, luxury sound systems, LED walls and stage lighting services across Hapur & Delhi NCR.",

    url: "https://anildjevents.in/services/wedding-dj-sound",

    siteName: "Anil DJ & Events",

    images: ["/og-image.webp"],

    locale: "en_IN",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Wedding DJ Sound | Anil DJ & Events",

    description:
      "Luxury wedding DJ, sound and lighting setups across Hapur, Noida, Ghaziabad & NCR.",

    images: ["/og-image.webp"],
  },
};

export default function WeddingDjSoundPage() {
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
                Premium Wedding DJ Sound Service
              </div>

              <h1 className="text-2xl font-extrabold leading-tight sm:text-5xl">

                Wedding DJ Sound
                <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Crafted For Grand Celebrations
                </span>

              </h1>

              <p className="mt-7 max-w-2xl text-sm leading-relaxed text-gray-400 sm:text-base">

                Transform your wedding celebrations with premium DJ sound,
                luxury stage setups, LED walls, lighting effects and
                unforgettable entertainment experiences by Anil DJ & Events
                across Hapur, Noida, Ghaziabad, Delhi and NCR.

              </p>

              {/* Features */}
              <div className="mt-10 grid gap-4 sm:grid-cols-2">

                {[
                  "Premium Wedding DJ",
                  "Luxury Sound System",
                  "LED Wall & Lighting",
                  "Wedding Entry Effects",
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
                  Book Wedding Setup
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
                  src="/images/services/weddingsound.webp"
                  alt="Wedding DJ Sound Service"
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

      {/* Wedding Services */}
      <section className="relative overflow-hidden pb-24">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Heading */}
          <div className="mx-auto max-w-3xl text-center">

            <div className="mb-4 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm backdrop-blur-md">
              Wedding Entertainment
            </div>

            <h2 className="text-4xl font-extrabold leading-tight sm:text-5xl">

              Luxury Wedding
              <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Event Experiences
              </span>

            </h2>

          </div>

          {/* Cards */}
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {weddingServices.map((service) => (
              <div
                key={service.title}
                className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl"
              >

                {/* Image */}
                <div className="relative h-72 overflow-hidden">

                  <Image
                    src={service.image}
                    alt={`${service.title} by Anil DJ & Events in Hapur and Noida`}
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