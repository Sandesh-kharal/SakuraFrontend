"use client";
import Image from 'next/image';


export default function Navbar() {
  return (
   
    
    <nav className="w-full mt-10 container mx-auto  bg-[#0f0810] px-6 py-4 flex items-center justify-between border-b border-white/5 ">
      {/* Left: Logo and Brand */}
      <div className="flex items-center gap-4 ">
        {/* Placeholder for the Cherry Blossom Logo */}
        <div className="bg-white p-1 rounded-sm">
           <div className="w-10 h-10 bg-[#d81b60] rounded-full flex items-center justify-center text-white text-[8px]">
           <Image src="/logo.jpg" alt="Logo" width={40} height={40} />
           </div>
        </div>
        
        <div className="flex flex-col">
          <span className="text-white text-2xl font-serif font-bold tracking-tight leading-none">
            Momiji International Academy
          </span>
          <span className="text-gray-400 text-[10px] tracking-[0.25em] font-medium mt-1 uppercase">
            Nepal's Gateway to Japan
          </span>
        </div>
      </div>

      {/* Center: Nav Links */}
      <div className="hidden lg:flex items-center gap-10">
        {["About", "Services", "Job Sectors", "Process", "Our Team", "Contact"].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase().replace(" ", "-")}`}
            className="text-gray-200 text-[15px] font-normal hover:text-white transition-colors"
          >
            {item}
          </a>
        ))}
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
    </nav>
   
  );
}