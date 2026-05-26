// src/components/server/GallerySection.js

import Image from "next/image";
import dynamic from "next/dynamic";

const GalleryLightbox = dynamic(
  () => import("@/components/client/GalleryLightbox")
);

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

      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">

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
        <div className="mt-16 grid auto-rows-[130px] grid-cols-2 gap-2 sm:auto-rows-[180px] sm:gap-4 sm:grid-cols-3 lg:grid-cols-4">

          {galleryImages.map((item, index) => (
            <GalleryLightbox
  key={index}
  images={galleryImages}
  image={item.image}
  alt={`Anil DJ Events Gallery ${index + 1}`}
  className={item.className}
  index={index}
/>
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