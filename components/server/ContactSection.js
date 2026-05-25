// src/components/server/ContactSection.js

import ContactForm from "@/components/client/ContactForm";

export default function ContactSection() {
  return (
    <section className="relative overflow-hidden py-12 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm backdrop-blur-md">
            Contact Us
          </div>

          <h2 className="text-4xl font-extrabold leading-tight sm:text-5xl lg:whitespace-nowrap">

  <span>
    Let’s Plan Your
  </span>

  <span className="ml-2 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent lg:ml-3">
     Next Event
  </span>

</h2>

          <p className="mt-6 text-sm leading-relaxed text-gray-400 sm:text-base">
            Book premium DJ, sound, lighting and event setup services in Hapur,
            Noida, Ghaziabad, Delhi & NCR.
          </p>
        </div>

        {/* Layout */}
        <div className="mt-16 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Left Info */}
          <div className="order-2 space-y-5 lg:order-1">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <h3 className="text-xl font-bold text-white">Office Address</h3>

              <p className="mt-3 text-sm leading-relaxed text-gray-400">
                New Rajeev Vihar, Delhi Road, Hapur, Uttar Pradesh
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <h3 className="text-xl font-bold text-white">Service Areas</h3>

              <p className="mt-3 text-sm leading-relaxed text-gray-400">
                Hapur, Noida, Ghaziabad, Delhi & Entire NCR Region
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <h3 className="text-xl font-bold text-white">Contact Number</h3>

              <p className="mt-3 text-sm leading-relaxed text-gray-400">
                +91 8932426667
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
              <h3 className="text-xl font-bold text-white">Email Address</h3>

              <p className="mt-3 text-sm leading-relaxed text-gray-400">
                info@anildjevents.com
              </p>
            </div>
          </div>

          {/* Client Form */}
          <div className="order-1 lg:order-2">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
