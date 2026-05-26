import Link from "next/link";
import Image from "next/image";
import MobileMenu from "../client/MobileMenu";
import { ChevronDown } from "lucide-react";

const navLinks = [
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
    name: "Equipment Rental",
    href: "/services/equipment-rental",
  },
  {
    name: "Reviews",
    href: "/reviews",
  },
  {
    name: "About Us",
    href: "/about",
  },
  {
    name: "Contact Us",
    href: "/contact",
  },
];

export default function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-xl">
      <div className="mx-auto flex h-17 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
           <div className="relative h-12 w-12 overflow-hidden rounded-full border border-white/10 shadow-lg shadow-purple-500/20">
    <Image
      src="/images/logo.webp"
      alt="Anil DJ & Events Logo"
      fill
      priority
      sizes="48px"
      className="object-cover"
    />
  </div>

          <div>
            <h1 className="text-lg font-bold tracking-wide text-white sm:text-xl">
              Anil DJ & Events
            </h1>

            <p className="hidden text-xs text-gray-400 sm:block">
              DJ & Sound Service in Hapur and NCR
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">

  {navLinks.map((link) => {

    // Services Dropdown
    if (link.name === "Services") {
      return (
        <div
          key={link.name}
          className="group relative"
        >

          {/* Main Link */}
          <Link
  href={link.href}
  className="flex items-center gap-1 text-sm font-medium text-gray-300 transition duration-300 hover:text-purple-400"
>

  <span>
    Services
  </span>

  <ChevronDown className="h-4 w-4 transition duration-300 group-hover:rotate-180" />

</Link>

          {/* Dropdown */}
<div className="invisible absolute left-0 top-full z-50 pt-5 opacity-0 transition duration-300 group-hover:visible group-hover:opacity-100">

  <div className="w-72 rounded-3xl border border-white/10 bg-black/90 p-4 shadow-2xl shadow-black/40 backdrop-blur-2xl">

    <div className="flex flex-col gap-2">

      {[
        {
          name: "Custom Events",
          href: "/services/custom-events",
        },
        {
          name: "DJ On Wheels",
          href: "/services/dj-on-wheels",
        },
        {
          name: "Wedding DJ Sound",
          href: "/services/wedding-dj-sound",
        },
        {
          name: "LED Wall Setup",
          href: "/services/led-wall-display-setup",
        },
        {
          name: "Professional DJ Setup",
          href: "/services/professional-dj-setup",
        },
        {
          name: "Equipment Rental",
          href: "/services/equipment-rental",
        },
      ].map((item) => (
        <Link
          key={item.name}
          href={item.href}
          className="rounded-2xl px-4 py-3 text-sm text-gray-300 transition duration-300 hover:bg-white/5 hover:text-white"
        >
          {item.name}
        </Link>
      ))}

    </div>

  </div>

</div>

        </div>
      );
    }

    // Normal Links
    return (
      <Link
        key={link.name}
        href={link.href}
        className="text-sm font-medium text-gray-300 transition duration-300 hover:text-purple-400"
      >
        {link.name}
      </Link>
    );
  })}

</nav>

        {/* Desktop Button */}
        <div className="hidden lg:block">
          <a
            href="https://wa.me/919837754630"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-gradient-to-r from-purple-600 to-blue-500 px-6 py-3 text-sm font-semibold text-white transition duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30"
          >
            Book Now
          </a>
        </div>

        {/* Mobile Menu */}
        <MobileMenu navLinks={navLinks} />
      </div>
    </header>
  );
}