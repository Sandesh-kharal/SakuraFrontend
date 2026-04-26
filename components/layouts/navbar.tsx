"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ["OUR SERVICES", "STUDY ABROAD", "ABOUT US", "CONTACT US"];

  return (
    <nav className="relative w-full border-b border-white/5 bg-[#0f0810] px-4 py-3 sm:px-6 lg:px-8">
      <div className="mx-auto  container flex items-center justify-between gap-4">
        {/* Left: Logo */}
        <div className="relative flex h-14 w-40 items-center justify-center overflow-hidden rounded-2xl bg-white">
          <a href="/home" className="relative block h-full w-full">
            <Image
              src="/Sakuralogo.jpg"
              alt="Sakura Caring Logo"
              fill
              sizes="(max-width: 768px) 160px, 280px"
              className="object-contain p-2"
              priority
            />
          </a>
        </div>

        {/* Desktop Links */}
        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href={`${item.toLowerCase().replace(/\s+/g, "-")}`}
              className="text-[15px] font-semibold text-gray-200 transition-colors hover:text-white"
            >
              {item}
            </a>
          ))}
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="flex items-center overflow-hidden rounded-xl border border-zinc-700">
            <button
              type="button"
              className="bg-white px-3 py-2 text-sm font-bold tracking-tighter text-[#d81b60] sm:px-4"
            >
              EN
            </button>
            <button
              type="button"
              className="border-l border-zinc-700 bg-transparent px-3 py-2 text-sm font-medium text-gray-300 transition-colors hover:bg-zinc-800 sm:px-4"
            >
              日本語
            </button>
          </div>

          {/* Mobile/Tablet Menu Toggle */}
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="inline-flex items-center justify-center rounded-xl border border-zinc-700 bg-transparent p-2 text-gray-200 transition-colors hover:bg-zinc-800 lg:hidden"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute left-0 top-full z-50 w-full border-b border-white/5 bg-[#0f0810] px-4 py-4 shadow-lg lg:hidden sm:px-6">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item}
                href={`${item.toLowerCase().replace(/\s+/g, "-")}`}
                className="rounded-lg px-3 py-2 text-sm font-semibold text-gray-200 transition-colors hover:bg-zinc-800 hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}