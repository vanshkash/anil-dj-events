// src/components/server/ServicesSection.js

import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Custom Events",
    description:
      "Complete event solutions for weddings, parties, corporate events and special celebrations.",
    image: "/images/services/custom_event.webp",
    link: "/services/custom-events",
  },
  {
    title: "DJ On Wheels",
    description:
      "Powerful DJ on wheels setup with premium bass sound and energetic lighting effects.",
    image: "/images/services/card-djonwheels.webp",
    link: "/services/dj-on-wheels",
  },
  {
    title: "Wedding DJ Sound",
    description:
      "Professional wedding DJ sound setup for unforgettable entries and celebrations.",
    image: "/images/services/weddingsound.webp",
    link: "/services/wedding-dj-sound",
  },
  {
    title: "LED Display Setup",
    description:
      "High-quality LED wall and display setup for weddings, stage shows and live events.",
    image: "/images/services/ledwall.webp",
    link: "/services/led-wall-display-setup",
  },
  {
    title: "Professional DJ Setup",
    description:
      "Modern DJ consoles, lighting systems and premium sound setup for all event types.",
    image: "/images/services/djsetup.webp",
    link: "/services/professional-dj-setup",
  },
  {
    title: "Equipment Rental",
    description:
      "Complete DJ, sound and lighting equipment rental services in Hapur & NCR.",
    image: "/images/services/equipment-rental.jpeg",
    link: "/services/equipment-rental",
  },
];

export default function ServicesSection() {
  return (
    <section className="relative overflow-hidden py-12 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
<div className="mx-auto max-w-3xl text-center">

  <div className="mb-4 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm backdrop-blur-md">
    Our Services
  </div>

  <h2 className="text-4xl font-extrabold leading-tight sm:text-5xl">

    Premium DJ & Sound
    <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
      by Anil DJ & Events
    </span>

  </h2>

  <p className="mt-6 text-sm leading-relaxed text-gray-400 sm:text-base">
    Explore professional DJ setups, wedding sound systems,
    LED displays, event management and equipment rental
    services.
  </p>

</div>

        {/* Services Grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {services.map((service) => (
            <Link
              key={service.title}
              href={service.link}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-purple-500/30"
            >

              {/* Image */}
              <div className="relative h-64 overflow-hidden">

                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                   priority={service.title === "Wedding DJ Sound"}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition duration-700 group-hover:scale-110"
                />

              </div>

              {/* Content */}
              <div className="relative p-6">

                <h3 className="text-2xl font-bold text-white">
                  {service.title}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-gray-400">
                  {service.description}
                </p>

                {/* Fake Button */}
                <div className="mt-6 inline-block rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition duration-300 hover:border-purple-500/30 hover:bg-white/10">
                  Learn More
                </div>

              </div>

            </Link>
          ))}

        </div>
      </div>
    </section>
  );
}