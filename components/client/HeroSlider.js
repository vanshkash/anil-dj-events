"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const slides = [
  {
    image: "/images/hero/desktop-1.avif",
    alt: "Wedding DJ setup in Hapur by Anil DJ & Events",
  },
  {
    image: "/images/hero/desktop-2.jpg",
    alt: "Professional sound and lighting setup in Noida",
  },
  {
    image: "/images/hero/desktop-3.avif",
    alt: "College fest sound setup in Ghaziabad",
  },
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) =>
        prev === slides.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-full w-full">

      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide
              ? "opacity-100"
              : "opacity-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.alt}
            fill
            priority={index === 0}
            sizes="100vw"
            className="object-cover"
          />
        </div>
      ))}

      {/* Overlay only desktop feel */}
      <div className="absolute inset-0 bg-black/0 md:bg-black/65" />

    </div>
  );
}