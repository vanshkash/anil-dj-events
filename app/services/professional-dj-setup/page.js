// app/services/professional-dj-setup/page.js

import Image from "next/image";
import Link from "next/link";
import PageTransition from "@/components/client/PageTransition";

const djServices = [
  {
    title: "Premium Sound System",
    image: "/images/services/cards/djsetup1.webp",
  },
  {
    title: "Luxury Event Stage",
    image: "/images/services/cards/djsetup3.webp",
  },
  {
    title: "Wedding DJ Console",
    image: "/images/services/cards/djsetup2.webp",
  }
];

export const metadata = {
  title:
    "Professional DJ Setup in Hapur & NCR | Anil DJ & Events",

  description:
    "Book professional DJ setups with premium sound systems, luxury DJ consoles, intelligent lighting and live entertainment services across Hapur, Noida, Ghaziabad & Delhi NCR.",

  keywords: [
    "Professional DJ setup",
    "DJ setup in Hapur",
    "Wedding DJ setup",
    "Luxury DJ console",
    "High bass sound system",
    "DJ lighting setup",
    "Live DJ entertainment",
    "Corporate event DJ",
    "Party DJ setup",
    "DJ setup in Noida",
    "DJ setup in Ghaziabad",
    "Professional sound system",
    "Event DJ services",
    "Stage lighting setup",
    "DJ services in NCR",
  ],

  alternates: {
    canonical: "/services/professional-dj-setup",
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
      "Professional DJ Setup in Hapur & NCR | Anil DJ & Events",

    description:
      "Premium DJ consoles, sound systems, intelligent lighting and luxury entertainment setups across Hapur & Delhi NCR.",

    url: "https://anildjevents.in/services/professional-dj-setup",

    siteName: "Anil DJ & Events",

    images: ["/og-image.webp"],

    locale: "en_IN",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Professional DJ Setup | Anil DJ & Events",

    description:
      "Luxury DJ setup, sound systems and lighting services across Hapur, Noida, Ghaziabad & NCR.",

    images: ["/og-image.webp"],
  },
};

export default function ProfessionalDjSetupPage() {
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
                Premium Professional DJ Setup
              </div>

              <h1 className="text-2xl font-extrabold leading-tight sm:text-5xl">

                Professional DJ Setup
                <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Built For Powerful Experiences
                </span>

              </h1>

              <p className="mt-7 max-w-2xl text-sm leading-relaxed text-gray-400 sm:text-base">

                Experience high-end professional DJ setups with
                premium sound systems, luxury DJ consoles,
                intelligent lighting and unforgettable entertainment
                solutions for weddings, parties, DJ nights and
                corporate events across Hapur, Noida, Ghaziabad,
                Delhi and NCR.

              </p>

              {/* Features */}
              <div className="mt-10 grid gap-4 sm:grid-cols-2">

                {[
                  "Club Style DJ Console",
                  "High Bass Sound System",
                  "Intelligent Lighting Effects",
                  "Luxury Event Experience",
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
                  Book DJ Setup
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
                  src="/images/services/djsetup.webp"
                  alt="Professional DJ Setup"
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

      {/* DJ Services */}
      <section className="relative overflow-hidden pb-24">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Heading */}
          <div className="mx-auto max-w-3xl text-center">

            <div className="mb-4 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm backdrop-blur-md">
              DJ Entertainment Setup
            </div>

            <h2 className="text-4xl font-extrabold leading-tight sm:text-5xl">

              Premium DJ
              <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Sound & Lighting Experience
              </span>

            </h2>

          </div>

          {/* Cards */}
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {djServices.map((service) => (
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