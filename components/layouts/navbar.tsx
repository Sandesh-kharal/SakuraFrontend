"use client";
import Image from 'next/image';


export default function Navbar() {
  return (
   
    
    <nav className="w-full h-[13vh]  container  mx-auto  bg-[#0f0810] px-6 py-4 flex items-center justify-between border-b border-white/5 ">
    {/* Left: Logo and Brand */}
<div className="relative flex items-center justify-center w-70 h-15 bg-white rounded-2xl border-white/20 overflow-hidden">
  <Image 
    src="/Sakuralogo.jpg" 
    alt="Sakura Caring Logo" 
   fill
    className="object-contain p-2" // 'object-contain' ensures the whole logo is visible without cropping
    priority 
    rounded-2xl
  />
</div>
    
        
      

      {/* Center: Nav Links */}
      <div className="hidden lg:flex items-center gap-10">
        {["OurServices", "StudyAbroad","AboutUs", "ContactUs"].map((item) => (
          <a
            key={item}
            href={`${item.toLowerCase().replace(" ", "-")}`}
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