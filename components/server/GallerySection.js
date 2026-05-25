// src/components/server/GallerySection.js

import Image from "next/image";

const galleryImages = [
  {
    image: "/images/gallery/gallery-1.webp",
    className: "lg:col-span-2 lg:row-span-2",
  },
  {
    image: "/images/gallery/gallery-2.webp",
    // className: "",
  },
  {
    image: "/images/gallery/gallery-3.webp",
    // className: "",
  },
  {
    image: "/images/gallery/gallery-4.jpeg",
    className: "lg:col-span-2",
  },
  {
    image: "/images/gallery/gallery-5.webp",
    // className: "",
  },
  {
    image: "/images/gallery/gallery-6.jpg",
    // className: "",
  },
  {
    image: "/images/gallery/gallery-7.jpeg",
    // className: "",
  },
  {
    image: "/images/gallery/gallery-8.webp",
    className: "lg:row-span-2",
  },
  {
    image: "/images/gallery/gallery-9.webp",
    // className: "",
  },
  {
    image: "/images/gallery/gallery-10.jpg",
    // className: "",
  },
  {
    image: "/images/gallery/gallery-11.webp",
    // className: "",
  },
];

export default function GallerySection() {
  return (
    <section className="relative overflow-hidden py-12 text-white">

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <div className="mb-4 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm backdrop-blur-md">
            Event Highlights
          </div>

          <h2 className="text-4xl font-extrabold leading-tight sm:text-5xl">
            Moments That Feel
            <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Unforgettable
            </span>
          </h2>

          <p className="mt-6 text-sm leading-relaxed text-gray-400 sm:text-base">
            Explore some of our premium DJ events, wedding setups,
            lighting experiences and unforgettable celebrations across
            Hapur & NCR.
          </p>

        </div>

        {/* Gallery Grid */}
        <div className="mt-16 grid auto-rows-[180px] grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">

          {galleryImages.map((item, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl ${item.className}`}
            >

              {/* Image */}
              <Image
                src={item.image}
                alt={`Anil DJ Events Gallery ${index + 1}`}
                fill
                priority={index === 0}
                 sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition duration-700 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-80 transition duration-500 group-hover:opacity-100" />

              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">

                <div className="absolute bottom-0 left-0 h-32 w-32 rounded-full bg-purple-500/20 blur-3xl" />

              </div>

            </div>
          ))}

        </div>
{/* Video Gallery Button */}
<div className="mt-14 flex justify-center">

  <a
    href="https://anildjevents.netlify.app/gallery"
    target="_blank"
    rel="noopener noreferrer"
    className="group inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-8 py-4 text-sm font-semibold text-white backdrop-blur-xl transition duration-300 hover:border-purple-500/30 hover:bg-white/10"
  >

    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-blue-500">

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 24 24"
        className="h-5 w-5 text-white"
      >
        <path d="M8 5v14l11-7z" />
      </svg>

    </span>

    View Video Gallery

  </a>

</div>
      </div>
      
    </section>
  );
}