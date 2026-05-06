"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLanguage, setActiveLanguage] = useState("EN");

  const toggleLanguage = () => {
    setActiveLanguage((prev) => (prev === "EN" ? "JPN" : "EN"));
  };

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Our Services", href: "/our-services" },
    { label: "About Us", href: "/about-us" },
    { label: "Contact Us", href: "/contact-us" },
  ];

  return (
    <nav className="w-full bg-primary">
      <div className="container mx-auto flex items-center justify-between gap-3 border-b border-white/5 px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          className="relative flex h-10 w-36 items-center justify-center overflow-hidden rounded-2xl bg-white sm:h-12 sm:w-44 lg:w-52"
        >
          <Image
            src="/Sakuralogo.jpg"
            alt="Sakura Caring Logo"
            fill
            sizes="(max-width: 640px) 144px, (max-width: 1024px) 176px, 208px"
            className="object-contain p-2"
            priority
          />
        </Link>

        {/* Desktop / Tablet nav */}
        <div className="hidden items-center gap-6 lg:flex xl:gap-10">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-[15px] font-normal text-gray-200 transition-colors hover:text-white"
            >
              {item.label.toUpperCase()}
            </Link>
          ))}
        </div>

        {/* Right controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="inline-flex h-9 w-20 items-center rounded-full border border-zinc-200 bg-white p-0.5 shadow-sm sm:h-10 sm:w-24">
            <button
              onClick={toggleLanguage}
              className={`flex h-full w-10 items-center justify-center rounded-full bg-linear-to-r from-primary to-secondary text-xl font-semibold text-white transition-all duration-300 sm:w-12 ${
                activeLanguage === "EN" ? "translate-x-0" : "translate-x-4 sm:translate-x-6"
              }`}
              aria-label="Toggle language"
              type="button"
            >
              <span className="text-xl">{activeLanguage === "EN" ? "🇬🇧" : "🇯🇵"}</span>
            </button>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white transition-colors hover:bg-white/10 lg:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile / tablet dropdown */}
      <div
        className={`overflow-hidden border-b border-white/5 bg-primary transition-all duration-300 lg:hidden ${
          isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container mx-auto flex flex-col gap-2 px-4 py-4 sm:px-6">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="rounded-xl px-3 py-2 text-sm font-medium text-gray-200 transition-colors hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
