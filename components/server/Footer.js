// src/components/server/Footer.js
import Image from "next/image";
import Link from "next/link";

import {
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";

const quickLinks = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Services",
    href: "/services",
  },
  {
    name: "Gallery",
    href: "/gallery",
  },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Contact",
    href: "/contact",
  },
  {
    name: "Reviews",
    href: "/reviews",
  },
];

const services = [
  "Wedding DJ",
  "DJ On Wheels",
  "LED Wall Setup",
  "Stage Lighting",
  "Sound System",
  "Equipment Rental",
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 pt-20 text-white bg-black">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid gap-14 lg:grid-cols-[1.3fr_0.8fr_0.9fr_1fr]">
          {/* Brand */}
          <div>
            {/* Logo */}
            <Link href="/" className="inline-flex items-center gap-4">
              <div className="relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border border-white/10 bg-white/5 p-1 shadow-lg shadow-purple-500/20">
                <Image
                  src="/images/logo.webp"
                  alt="Anil DJ & Events Logo"
                  fill
                  sizes="56px"
                  className="object-contain p-1"
                />
              </div>

              <div>
                <h2 className="text-2xl font-extrabold">Anil DJ & Events</h2>

                <p className="text-sm text-gray-400">
                  DJ & Sound Service in Hapur & NCR
                </p>
              </div>
            </Link>

            {/* Description */}
            <p className="mt-6 max-w-md text-sm leading-relaxed text-gray-400">
              Delivering unforgettable wedding, DJ, lighting and event
              experiences across Hapur, Noida, Ghaziabad, Delhi and the entire
              NCR region for over 25 years.
            </p>

            {/* Social Icons */}
            <div className="mt-8 flex items-center gap-4">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/anil_dj_event_001?utm_source=ig_web_button_share_sheet&igsh=c3J4NzIwMDMza2l4"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 transition duration-300 hover:-translate-y-1 hover:border-pink-500/40 hover:bg-white/10"
              >
                <FaInstagram className="h-5 w-5 text-white" />
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/shivam.kashyap.944241/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 transition duration-300 hover:-translate-y-1 hover:border-blue-500/40 hover:bg-white/10"
              >
                <FaFacebookF className="h-5 w-5 text-white" />
              </a>

              {/* YouTube */}
              <a
                href="https://www.youtube.com/@anildjeventshapur"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 transition duration-300 hover:-translate-y-1 hover:border-red-500/40 hover:bg-white/10"
              >
                <FaYoutube className="h-5 w-5 text-white" />
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/918923426667"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 transition duration-300 hover:-translate-y-1 hover:border-green-500/40 hover:bg-white/10"
              >
                <FaWhatsapp className="h-5 w-5 text-white" />
              </a>
            </div>
          </div>

          {/* Mobile Combined Grid */}
          <div className="grid grid-cols-2 gap-10 lg:contents">
            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold text-white">Quick Links</h3>

              <div className="mt-6 flex flex-col gap-4">
                {quickLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="text-sm text-gray-400 transition duration-300 hover:text-purple-400"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-bold text-white">Our Services</h3>

              <div className="mt-6 flex flex-col gap-4">
                {services.map((service) => (
                  <p key={service} className="text-sm text-gray-400">
                    {service}
                  </p>
                ))}
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold text-white">Contact Info</h3>

            <div className="mt-6 space-y-5">
              {/* Address */}
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
                <p className="text-xs uppercase tracking-wider text-purple-400">
                  Office Address
                </p>

                <a
                  href="https://maps.app.goo.gl/MacCDJe9fLsLL8ZV8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 block text-sm leading-relaxed text-gray-400 transition hover:text-white"
                >
                  New Rajeev Vihar, Delhi Road, Hapur, Uttar Pradesh, India
                </a>
              </div>

              {/* Phone */}
<div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">

  <p className="text-xs uppercase tracking-wider text-purple-400">
    Phone Number
  </p>

  <a
    href="tel:+918923426667"
    className="mt-2 inline-block text-sm text-gray-400 transition hover:text-white"
  >
    +91 8923426667
  </a>

  <a
    href="tel:+919837754630"
    className="ml-3 inline-block text-sm text-gray-400 transition hover:text-white"
  >
    +91 9837754630
  </a>

</div>

              {/* Email */}
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
                <p className="text-xs uppercase tracking-wider text-purple-400">
                  Email Address
                </p>

                <a
                  href="mailto:anildjhapur@gmail.com"
                  className="mt-2 block text-sm text-gray-400 transition hover:text-white"
                >
                  anildjhapur@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 border-t border-white/10 py-8">
          <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Anil DJ & Events. All rights
              reserved.
            </p>

            <p className="text-sm text-gray-500">
              Designed & Developed by
              <a
                href="https://vanshkash.github.io/Portfolio-Website/"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1 font-semibold text-white transition hover:text-purple-400"
              >
                Vansh Kashyap
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
