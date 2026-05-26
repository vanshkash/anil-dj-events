"use client";

import { useEffect, useState } from "react";
import { FaQuoteLeft, FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    name: "Rajaji Haveli Restaurant",
    quote:
    "ANIL DJ brought vibrant energy to our outdoor celebration. Guests loved the music and setup!",
    location: "Hapur",
    rating: 5,
  },
  {
    name: "Amit Sharma.",
    quote:
      "Professional setup, amazing sound, and great vibes. Highly recommended!",
    location: "Ghaziabad",
    rating: 4,
  },
  {
    name: "Amar Ujala",
    quote:
      "ANIL DJ energized our media event with flawless sound and crowd engagement. A true professional!",
    location: "Hapur",
    rating: 4.5,
  },
  {
    name: "Om Saaj Band",
      quote:
  "Om Saaj Band + ANIL DJ & EVENTS created pure baraat magic. The live dhol and DJ fusion kept everyone dancing nonstop!",
    location: "Ghaziabad Wedding",
    rating: 5,
  },
  {
    name: "Ajay & Priya",
    quote:
      "ANIL DJ made our baraat unforgettable! The energy was electric.",
    location: "Mumbai",
    rating: 5,
  },
  {
    name: "Neha & Karan",
    quote:
      "The DJ on Wheels concept was a hit—everyone was dancing in the streets!",
    location: "Noida",
    rating: 4.5,
  },
  {
    name: "Mehul T.",
    quote:
      "Booked ANIL DJ for my sister’s wedding. Seamless coordination and top-notch sound!",
    location: "Meerut",
    rating: 5,
  },
  {
    name: "Ritika & Sahil",
    quote:
      "From dhol beats to Bollywood remixes, the baraat was pure magic. Thank you!",
    location: "Hapur",
    rating: 4,
  },
  {
    name: "Corporate Team – Zentech",
    quote:
      "Our annual party was a blast thanks to ANIL DJ. Professional, punctual, and energetic!",
    location: "Greater Noida",
    rating: 4.5,
  },
];

export default function ReviewsSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 4500);

    return () => clearInterval(timer);
  }, []);

  const renderStars = (rating) => {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      if (rating >= i) {
        stars.push(<FaStar key={i} />);
      } else if (rating >= i - 0.5) {
        stars.push(<FaStarHalfAlt key={i} />);
      } else {
        stars.push(<FaRegStar key={i} />);
      }
    }

    return stars;
  };

  return (
    <div className="relative mx-auto mt-12 max-w-2xl px-2 sm:px-4">
      {/* Glow */}
      <div className="absolute inset-0 rounded-[28px] bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-purple-500/10 blur-2xl" />

      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.45 }}
          whileHover={{
            scale: 1.01,
          }}
          className="relative z-10 rounded-[24px] border border-white/10 bg-white/5 p-4 shadow-2xl backdrop-blur-2xl sm:p-5"
        >
          {/* Header */}
<div className="mb-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

  {/* Left */}
  <div className="flex items-center gap-3">

    {/* Icon */}
    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-blue-500 text-sm text-white shadow-lg shadow-purple-500/20">

      <FaQuoteLeft />

    </div>

    {/* Heading */}
    <div>

      <h3 className="text-lg font-bold text-white sm:text-xl">
        What Clients Say
      </h3>

      <p className="mt-0.5 text-[11px] text-gray-400 sm:text-xs">
        Real Wedding & DJ Experiences
      </p>

    </div>

  </div>

  {/* Stars */}
  <div className="flex gap-1 text-sm text-yellow-400">

    {renderStars(testimonials[current].rating)}

  </div>

</div>

          {/* Review */}
          <p className="text-sm leading-relaxed text-gray-200 sm:text-base">
            “{testimonials[current].quote}”
          </p>

          {/* Footer */}
<div className="mt-4 border-t border-white/10 pt-4">

  {/* Top Row */}
  <div className="flex items-center justify-between gap-3">

    {/* Client */}
    <h4 className="text-sm font-bold text-white sm:text-base">
      {testimonials[current].name}
    </h4>

    {/* Verified Badge */}
    <div className="inline-flex rounded-full border border-green-500/20 bg-green-500/10 px-2.5 py-1 text-[9px] font-semibold text-green-400 sm:px-3 sm:text-[10px]">

      ✔ Verified Client

    </div>

  </div>

  {/* Location */}
  <p className="mt-1 text-[11px] text-gray-400 sm:text-xs">
    {testimonials[current].location}
  </p>

</div>
        </motion.div>
      </AnimatePresence>

      {/* Dots */}
      <div className="relative z-10 mt-5 flex justify-center gap-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2 w-2 rounded-full transition-all duration-300 ${
              current === index
                ? "scale-125 bg-purple-500 shadow-lg shadow-purple-500/40"
                : "bg-white/20"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
