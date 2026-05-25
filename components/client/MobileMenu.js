"use client";

import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import Link from "next/link";

export default function MobileMenu({ navLinks }) {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  
useEffect(() => {

  if (isOpen) {

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

  } else {

    document.body.style.overflow = "";
    document.documentElement.style.overflow = "";

  }

  return () => {

    document.body.style.overflow = "";
    document.documentElement.style.overflow = "";

  };

}, [isOpen]);
  return (
    
    <div className="lg:hidden">
      {/* Menu Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white lg:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5m-16.5 5.25h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 z-50 h-screen w-[280px] border-l border-white/10 bg-black/95 backdrop-blur-xl transition-transform duration-300 lg:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Top */}
        <div className="flex items-center justify-between border-b border-white/10 p-5">
          <h2 className="text-lg font-semibold text-white">
            Menu
          </h2>

          <button
            onClick={() => setIsOpen(false)}
            className="text-2xl text-white"
          >
            ×
          </button>
        </div>

        {/* Links */}
        <nav className="flex flex-col p-5">

  {navLinks.map((link) => {

    // Services Dropdown
    if (link.name === "Services") {
      return (
        <div
          key={link.name}
          className="border-b border-white/10"
        >

          {/* Main Button */}
          <button
            onClick={() =>
              setServicesOpen(!servicesOpen)
            }
            className="flex w-full items-center justify-between py-4 text-left text-gray-300 transition hover:text-purple-400"
          >

            <span>
              Services
            </span>

            <ChevronDown
              className={`h-4 w-4 transition duration-300 ${
                servicesOpen ? "rotate-180" : ""
              }`}
            />

          </button>

          {/* Sub Links */}
          <div
            className={`overflow-hidden transition-all duration-300 ${
              servicesOpen
                ? "max-h-96 pb-3"
                : "max-h-0"
            }`}
          >

            <div className="flex flex-col rounded-2xl bg-white/5">

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
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-3 text-sm text-gray-400 transition hover:text-white"
                >
                  {item.name}
                </Link>
              ))}

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
        onClick={() => setIsOpen(false)}
        className="border-b border-white/10 py-4 text-gray-300 transition hover:text-purple-400"
      >
        {link.name}
      </Link>
    );
  })}

</nav>

        {/* Button */}
        <div className="p-5">
          <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-full bg-gradient-to-r from-purple-600 to-blue-500 px-6 py-3 text-center font-semibold text-white"
          >
            Book Now
          </a>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-[45] bg-black/50 backdrop-blur-sm lg:hidden"
        />
      )}
    </div>
  );
}