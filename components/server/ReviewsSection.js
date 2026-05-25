// src/components/server/ReviewsSection.js

import {
  Star,
  Quote,
} from "lucide-react";

const reviews = [
  {
    name: "Rahul Sharma",
    event: "Wedding Event",
    review:
      "Amazing DJ setup and lighting experience. The sound quality and energy were absolutely incredible throughout the wedding.",
  },
  {
    name: "Priya Verma",
    event: "Engagement Ceremony",
    review:
      "Professional team with premium sound and LED setup. Everything was perfectly managed and on time.",
  },
  {
    name: "Amit Chauhan",
    event: "DJ Night",
    review:
      "Best DJ service in Hapur. The crowd energy, bass and lighting setup made our event unforgettable.",
  },
  {
    name: "Neha Singh",
    event: "Wedding Reception",
    review:
      "Very professional management by Vansh Kashyap and Shivam Kashyap. Highly recommended for weddings and parties.",
  },
  {
    name: "Karan Malhotra",
    event: "Corporate Event",
    review:
      "Excellent sound clarity, modern lighting and very cooperative team. One of the best event experiences we had.",
  },
  {
    name: "Simran Arora",
    event: "Birthday Celebration",
    review:
      "Premium DJ setup with amazing effects and energetic music atmosphere. Guests loved the entire setup.",
  },
];

export default function ReviewsSection() {
  return (
    <section className="relative overflow-hidden py-12 text-white">

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <div className="mb-4 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm backdrop-blur-md">
            Client Reviews
          </div>

          <h2 className="text-4xl font-extrabold leading-tight sm:text-5xl">

            What Our Clients
            <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Say About Us
            </span>

          </h2>

          <p className="mt-6 text-sm leading-relaxed text-gray-400 sm:text-base">

            Trusted by hundreds of clients across Hapur,
            Noida, Ghaziabad, Delhi and NCR for unforgettable
            event experiences.

          </p>

        </div>

        {/* Reviews Grid */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {reviews.map((review, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-purple-500/30"
            >

              {/* Glow */}
              <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100">

                <div className="absolute -top-10 right-0 h-32 w-32 rounded-full bg-purple-500/20 blur-3xl" />

              </div>

              {/* Quote Icon */}
              <div className="relative flex items-center justify-between">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-purple-600 to-blue-500">

                  <Quote className="h-7 w-7 text-white" />

                </div>

                {/* Stars */}
                <div className="flex items-center gap-1">

                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-yellow-400 text-yellow-400"
                    />
                  ))}

                </div>

              </div>

              {/* Review */}
              <p className="relative mt-6 text-sm leading-relaxed text-gray-300">

                "{review.review}"

              </p>

              {/* User */}
              <div className="relative mt-8 border-t border-white/10 pt-5">

                <h3 className="text-lg font-bold text-white">
                  {review.name}
                </h3>

                <p className="mt-1 text-sm text-gray-400">
                  {review.event}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}