// src/components/server/AboutSection.js

import Image from "next/image";

export default function AboutSection() {
  return (
    
    <section className="relative overflow-hidden py-2 text-white">
        {/* Section Badge */}
<div className="mb-10 flex justify-center">

  <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm backdrop-blur-md">
    About Anil DJ & Events
  </div>

</div>

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2 lg:px-8 text-center">

        {/* Left Content */}
        <div>

          {/* Heading */}
          <h2 className="text-2xl font-extrabold leading-tight sm:text-5xl">

            Creating Unforgettable
            <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Event Experiences
            </span>

          </h2>

          {/* Description */}
          <p className="mt-7 text-sm leading-relaxed text-gray-400 sm:text-base">

            Founded over 25 years ago by
            <span className="font-semibold text-white">
              {" "}Anil Kashyap
            </span>,
            Anil DJ & Events has become one of the most trusted DJ
            and sound service providers across Hapur, Noida,
            Ghaziabad, Delhi and the entire NCR region.

          </p>

          <p className="mt-5 text-sm leading-relaxed text-gray-400 sm:text-base">

            From wedding celebrations and DJ nights to premium sound,
            LED walls, stage lighting and complete event management,
            we deliver unforgettable experiences with professional
            setups and high-energy entertainment.

          </p>

          <p className="mt-5 text-sm leading-relaxed text-gray-400 sm:text-base">

            Today, the company is professionally managed by
            <span className="font-semibold text-white">
              {" "}Vansh Kashyap
            </span>
            {" "}and
            <span className="font-semibold text-white">
              {" "}Shivam Kashyap
            </span>,
            continuing the legacy of quality, trust and modern event
            experiences for clients across Uttar Pradesh and NCR.

          </p>

          {/* Info Cards */}
          <div className="mt-10 grid gap-4 sm:grid-cols-2">

            <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">

              <h3 className="text-lg font-bold text-white">
                Founder
              </h3>

              <p className="mt-2 text-sm text-gray-400">
                Anil Kashyap
              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">

              <h3 className="text-lg font-bold text-white">
                Management
              </h3>

              <p className="mt-2 text-sm text-gray-400">
                Vansh Kashyap & Shivam Kashyap
              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">

              <h3 className="text-lg font-bold text-white">
                Experience
              </h3>

              <p className="mt-2 text-sm text-gray-400">
                25+ Years in DJ & Event Industry
              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">

              <h3 className="text-lg font-bold text-white">
                Office Location
              </h3>

              <p className="mt-2 text-sm text-gray-400">
                New Rajeev Vihar, Delhi Road,
                Hapur, Uttar Pradesh
              </p>

            </div>

          </div>

        </div>

        {/* Right Images */}
        <div className="relative">

          {/* Main Image */}
          <div className="relative overflow-hidden rounded-[32px] border border-white/10">

            <Image
              src="/images/about/about.webp"
              alt="Anil DJ & Events Setup"
              width={700}
              height={900}
              className="h-full w-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

          </div>

          {/* Floating Card */}
          <div className="absolute -bottom-6 -left-6 rounded-3xl border border-white/10 bg-black/70 p-5 backdrop-blur-xl">

            <h3 className="text-3xl font-extrabold text-white">
              25+
            </h3>

            <p className="mt-1 text-sm text-gray-400">
              Years of Experience
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}