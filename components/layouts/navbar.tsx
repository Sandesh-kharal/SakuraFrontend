"use client";
import Image from "next/image";
import Link from "next/link";

import { useState } from "react";
import { Home, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLanguage, setActiveLanguage] = useState("EN");

  const toggleLanguage = () => {
    setActiveLanguage((prev) => (prev === "EN" ? "JPN" : "EN"));
  };

  const navItems = ["Home", "OUR SERVICES", "ABOUT US", "CONTACT US"];

  return (
    <nav className="w-full  bg-primary">
      <div className=" max-h-[13vh]  container  mx-auto  px-6 py-4 flex items-center justify-between border-b border-white/5">
        {/* Left: Logo and Brand */}
        <div className="relative flex items-center justify-center w-50 h-10 sm:w-70 sm:h-15 bg-white rounded-2xl border-white/20 overflow-hidden">
          <Link href="/">
            <Image
              src="/Sakuralogo.jpg"
              alt="Sakura Caring Logo"
              fill
              sizes="(max-width: 768px) 70px, 280px"
              className="object-contain p-2"
              priority
            />
          </Link>
        </div>

        {/* Center: Nav Links */}
        <div className="hidden lg:flex items-center gap-10">
          {navItems.map((item) => (
            <a
              key={item}
              href={`${item.toLowerCase().replace(" ", "-")}`}
              className="text-gray-200 text-[15px] font-normal hover:text-white transition-colors"
            >
              {item.toUpperCase()}
            </a>
          ))}
        </div>

        {/* Right: Language Switcher */}
        <div className="inline-flex items-center bg-white border border-zinc-200 rounded-full p-0.5 shadow-sm w-20 h-10 relative">
          <button
            onClick={toggleLanguage}
            className={`absolute h-9 w-11 rounded-full bg-linear-to-r from-primary to-secondary text-white text-xl font-semibold flex items-center justify-center transition-all duration-300 cursor-pointer ${
              activeLanguage === "EN" ? "left-0.5" : "left-8"
            }`}
          >
            <span className="text-2xl">
            {activeLanguage === "EN" ? "🇬🇧" : "🇯🇵"}

            </span>
          </button>
        </div>
      </div>
    </nav>
  );
}
