import React from "react";
import Hero from "@/components/layouts/hero";
import ChatButton from "@/components/layouts/ChatButton";
import Navbar from "@/components/layouts/navbar";
import ServiceSection from "@/components/layouts/sections/ServiceSection";

export default function HeroSection() {
  return (
    <>

      <div className="h-min-screen min-h-screen bg-[#0f0810]  text-white selection:bg-pink-700/30 relative overflow-hidden">

        <div>
          <div className="h-screen">
            <Navbar />
            <Hero />
          </div>

          <ChatButton />
        </div>

        <div><ServiceSection /></div>


      </div>
    </>

  );
}