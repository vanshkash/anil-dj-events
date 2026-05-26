import dynamic from "next/dynamic";

const ReviewsSlider = dynamic(
  () => import("@/components/client/ReviewsSlider")
);

export default function ReviewsSection() {
  return (
    <section className="relative overflow-hidden bg-neutral-950 py-10 text-white">

      {/* Background Glow */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-purple-600/20 blur-3xl" />

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">

          <div className="mb-4 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm backdrop-blur-md">
            Real Client Experiences
          </div>

          <h1 className="text-4xl font-extrabold leading-tight sm:text-6xl">

            Trusted By Families &
            <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Event Organizers
            </span>

          </h1>

          <p className="mt-6 text-sm leading-relaxed text-gray-400 sm:text-base">
            Explore real experiences from weddings, DJ nights,
            baraat entries and unforgettable celebrations.
          </p>

        </div>

        {/* Slider */}
        <ReviewsSlider />

        {/* Google Reviews Button */}
        <div className="mt-16 flex justify-center">

          <a
            href="https://www.google.com/search?sca_esv=7d9c60e3220b4d37&sxsrf=ANbL-n6-lqq21B2iqlqqrmQ_HijZuOJ5Cg:1779803776916&q=anil+dj+events+hapur&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOVptjuPpB-pxfmTulqS0r1MtRbok_GkKkloe6jHdgLPZitiML1BiDiWm3sMVkT1LJRi6TdT0UpcBhRj_Z9RpP60s1ByaHKvpF6d3Ajnoo1WGR4RREg%3D%3D&sa=X&ved=2ahUKEwiFkZLfjdeUAxXwTGwGHRBEOPkQrrQLegQIHBAA&biw=1517&bih=712&dpr=0.9"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-4 rounded-full border border-white/10 bg-white/5 px-8 py-4 text-sm font-semibold text-white backdrop-blur-xl transition duration-300 hover:border-purple-500/30 hover:bg-white/10"
          >

            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-lg">

  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    className="h-6 w-6"
  >
    <path
      fill="#FFC107"
      d="M43.6 20.5H42V20H24v8h11.3C33.6 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.7 1.1 7.8 3l5.7-5.7C34.1 6.1 29.4 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.3-.4-3.5z"
    />
    <path
      fill="#FF3D00"
      d="M6.3 14.7l6.6 4.8C14.7 16 19 12 24 12c3 0 5.7 1.1 7.8 3l5.7-5.7C34.1 6.1 29.4 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"
    />
    <path
      fill="#4CAF50"
      d="M24 44c5.2 0 9.9-2 13.5-5.3l-6.2-5.2C29.2 36 26.8 37 24 37c-5.2 0-9.6-3.3-11.1-7.9l-6.5 5C9.7 39.7 16.3 44 24 44z"
    />
    <path
      fill="#1976D2"
      d="M43.6 20.5H42V20H24v8h11.3c-1.1 3-3.3 5.4-6.2 7.1l6.2 5.2C39.5 36.5 44 30.8 44 24c0-1.3-.1-2.3-.4-3.5z"
    />
  </svg>

</span>

            <div className="flex flex-col items-start">

              <span className="text-base font-bold">
                View Google Reviews
              </span>

              <span className="text-xs text-gray-400">
                See Client Experiences
              </span>

            </div>

          </a>

        </div>

      </div>

    </section>
  );
}