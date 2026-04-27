"use client";
import Image from "next/image";
import Link from "next/link"

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ["OUR SERVICES", "STUDY ABROAD", "ABOUT US", "CONTACT US"];

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
          {["Our Services", "Study Abroad", "About Us", "Contact Us"].map(
            (item) => (
              <a
                key={item}
                href={`${item.toLowerCase().replace(" ", "-")}`}
                className="text-gray-200 text-[15px] font-normal hover:text-white transition-colors"
              >
               {item.toUpperCase()}
              </a>
            ),
          )}
        </div>

        {/* Right: Language Switcher */}
        <div className="flex items-center gap-0 border border-zinc-700 overflow-hidden">
          <button className="bg-white px-4 py-2 text-[#d81b60] text-sm font-bold tracking-tighter">
            EN
          </button>
          <button className="bg-transparent px-4 py-2 text-gray-300 text-sm font-medium border-l border-zinc-700 hover:bg-zinc-800 transition-colors">
            日本語
          </button>
        </div>
      </div>
    </nav>
  );
}
