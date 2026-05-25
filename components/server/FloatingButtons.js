// src/components/server/FloatingButtons.js

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-5 right-5 z-[999] flex flex-col gap-3">

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/918923426667"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-2xl shadow-green-500/30 transition duration-300 hover:scale-110"
      >

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          fill="currentColor"
          className="h-7 w-7"
        >
          <path d="M19.11 17.2c-.29-.15-1.72-.85-1.98-.95-.27-.1-.46-.15-.66.15-.2.29-.76.95-.93 1.14-.17.2-.34.22-.63.08-.29-.15-1.24-.46-2.36-1.46-.87-.78-1.46-1.74-1.63-2.03-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.2-.29.29-.49.1-.2.05-.37-.02-.51-.08-.15-.66-1.59-.9-2.18-.24-.58-.49-.49-.66-.5h-.56c-.2 0-.51.08-.78.37-.27.29-1.02 1-1.02 2.44s1.05 2.83 1.2 3.03c.15.2 2.07 3.15 5.01 4.42.7.3 1.25.48 1.68.61.71.22 1.35.19 1.86.12.57-.08 1.72-.7 1.97-1.38.24-.68.24-1.27.17-1.39-.07-.12-.27-.2-.56-.34z" />
          <path d="M16.01 3C8.83 3 3 8.82 3 16c0 2.82.92 5.43 2.47 7.56L3 29l5.64-2.39A12.95 12.95 0 0 0 16.01 29C23.18 29 29 23.18 29 16S23.18 3 16.01 3zm0 23.65c-2.24 0-4.32-.65-6.08-1.77l-.44-.26-3.35 1.42 1.45-3.26-.29-.46A10.59 10.59 0 0 1 5.35 16c0-5.88 4.78-10.66 10.66-10.66 5.87 0 10.65 4.78 10.65 10.66 0 5.87-4.78 10.65-10.65 10.65z" />
        </svg>

      </a>

      {/* Call Button */}
      <a
        href="tel:+918923426667"
        aria-label="Call Now"
        className="group flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-blue-500 text-white shadow-2xl shadow-purple-500/30 transition duration-300 hover:scale-110"
      >

        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="h-6 w-6"
        >
          <path d="M6.62 10.79a15.46 15.46 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.07 21 3 13.93 3 5c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.24.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
        </svg>

      </a>

    </div>
  );
}