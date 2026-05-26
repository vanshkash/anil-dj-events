import Link from "next/link";
import HeroSlider from "@/components/client/HeroSlider";

export default function HeroSection() {
  return (
    <section className="overflow-hidden text-white">

      <div className="flex flex-col md:relative md:min-h-screen md:items-center md:justify-center">

        {/* Slider */}
        <div className="relative aspect-video w-full md:absolute md:inset-0 md:aspect-auto">
          <HeroSlider />
        </div>

        {/* Content */}
        <div className="relative z-10 px-5 pb-6 pt-10 text-center md:mx-auto md:max-w-5xl md:px-6 md:pt-0">

          <div className="mb-5 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs backdrop-blur-md md:mb-6 md:text-sm">
  Anil DJ & Events • Premium DJ & Sound Service in Hapur & NCR
</div>

          <h1 className="text-4xl font-extrabold leading-tight md:text-6xl lg:text-7xl">
            Make Your Events
            <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Unforgettable
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-gray-300 md:mt-6 md:text-lg">
            Wedding DJ, Sound System, Stage Lighting, LED Wall,
            Barat DJ & Complete Event Solutions in Hapur and NCR.
          </p>

          <div className="mt-8 flex flex-col gap-4 md:mt-10 md:flex-row md:items-center md:justify-center">

            <a
              href="https://wa.me/918923426667"
                target="_blank"
                rel="noopener noreferrer"
              className="rounded-full bg-gradient-to-r from-purple-600 to-blue-500 px-8 py-4 text-sm font-semibold text-white transition hover:scale-105 md:text-base"
            >
              Book Now
            </a>

            <Link
              href="/gallery"
              className="rounded-full border border-white/20 bg-white/10 px-8 py-4 text-sm font-semibold backdrop-blur-md transition hover:bg-white/20 md:text-base"
            >
              View Gallery
            </Link>

          </div>

        </div>
      </div>
    </section>
  );
}