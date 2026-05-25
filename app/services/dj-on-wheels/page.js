// app/services/dj-on-wheels/page.js

import Image from "next/image";
import Link from "next/link";

const wheelServices = [
  {
    title: "Wedding Barat DJ",
    image: "/images/services/cards/wheels1.jfif",
  },
  {
    title: "Luxury DJ Trolley",
    image: "/images/services/cards/onwheels1.webp",
  },
  {
    title: "LED DJ Setup",
    image: "/images/services/cards/wheels3.avif",
  },
];

export const metadata = {
  title:
    "DJ On Wheels in Hapur, Noida & NCR | Anil DJ & Events",

  description:
    "Book premium DJ On Wheels services with luxury Barat Truck, powerful bass, wedding barat DJ and LED lighting setups across Hapur, Noida, Ghaziabad & Delhi NCR.",

  keywords: [
    "DJ on wheels Hapur",
    "Wedding barat DJ",
    "Luxury DJ trolley",
    "DJ trolley setup",
    "Wedding DJ in Hapur",
    "LED DJ setup",
    "High bass DJ service",
    "DJ on wheels in Noida",
    "DJ on wheels in Ghaziabad",
    "Barat DJ service NCR",
    "Professional DJ service",
    "DJ lighting service",
    "DJ van service",
    "Barat on wheels"
  ],

  alternates: {
    canonical: "/services/dj-on-wheels",
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
      "DJ On Wheels Service in Hapur & NCR | Anil DJ & Events",

    description:
      "Experience luxury DJ trolley setups, wedding barat DJ, LED lighting and powerful bass systems across Hapur & Delhi NCR.",

    url: "https://anildjevents.in/services/dj-on-wheels",

    siteName: "Anil DJ & Events",

    images: ["/og-image.webp"],

    locale: "en_IN",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "DJ On Wheels | Anil DJ & Events",

    description:
      "Premium DJ trolley, wedding barat DJ and LED lighting setups across Hapur, Noida, Ghaziabad & NCR.",

    images: ["/og-image.webp"],
  },
};

export default function DjOnWheelsPage() {
  return (
    <main className="relative overflow-hidden bg-neutral-950 text-white">

      {/* Glow Effects */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-purple-600/20 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-24">

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          <div className="grid items-center gap-14 lg:grid-cols-2">

            {/* Content */}
            <div className="order-2 lg:order-1">

              <div className="mb-5 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm backdrop-blur-md">
                Premium DJ On Wheels Service
              </div>

              <h1 className="text-2xl font-extrabold leading-tight sm:text-5xl">

                DJ On Wheels
                <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Powered By Energy
                </span>

              </h1>

              <p className="mt-7 max-w-2xl text-sm leading-relaxed text-gray-400 sm:text-base">

                Experience high-energy DJ On Wheels services with
                powerful bass systems, luxury DJ trolley setups,
                LED lighting and unforgettable barat vibes for weddings,
                parties and grand celebrations across Hapur, Noida,
                Ghaziabad, Delhi and NCR.

              </p>

              {/* Features */}
              <div className="mt-10 grid gap-4 sm:grid-cols-2">

                {[
                  "High Bass DJ Setup",
                  "Luxury DJ Trolley",
                  "LED Lighting Effects",
                  "Professional Sound System",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-gray-300 backdrop-blur-xl"
                  >
                    {item}
                  </div>
                ))}

              </div>

              {/* Video Gallery Button */}
<div className="mt-10">

  <a
    href="https://anildjevents.netlify.app/services/dj-on-wheels"
    target="_blank"
    rel="noopener noreferrer"
    className="group flex w-full items-center justify-center gap-4 rounded-full border border-white/10 bg-white/5 px-8 py-4 text-sm font-semibold text-white backdrop-blur-xl transition duration-300 hover:border-purple-500/30 hover:bg-white/10 hover:shadow-xl hover:shadow-purple-500/20"
  >

    {/* Icon */}
    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-blue-500 transition duration-300 group-hover:scale-110">

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        className="h-5 w-5 text-white"
      >
        <path d="M8 5v14l11-7z" />
      </svg>

    </span>

    {/* Text */}
    <div className="flex flex-col items-start">

      <span className="text-base font-bold">
        View Video Gallery
      </span>

      <span className="text-xs text-gray-400">
        Watch Real DJ Events & Wedding Moments
      </span>

    </div>

  </a>

</div>

            </div>

            {/* Image */}
            <div className="relative order-1 lg:order-2">

              <div className="relative overflow-hidden rounded-[32px] border border-white/10">

                <Image
                  src="/images/services/card-djonwheels.webp"
                  alt="DJ On Wheels Service"
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

      {/* Service Types */}
      <section className="relative overflow-hidden pb-24">

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Heading */}
          <div className="mx-auto max-w-3xl text-center">

            <div className="mb-4 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm backdrop-blur-md">
              DJ Features
            </div>

            <h2 className="text-4xl font-extrabold leading-tight sm:text-5xl">

              Premium DJ
              <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Entertainment Setup
              </span>

            </h2>

          </div>

          {/* Cards */}
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {wheelServices.map((service) => (
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
  );
}