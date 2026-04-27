import React from "react";
import Hero from "@/components/layouts/hero";
import ChatButton from "@/components/layouts/ChatButton";
import Navbar from "@/components/layouts/navbar";
import ServiceSection from "@/components/layouts/sections/ServiceSection";
import TestimonialSection from "@/components/layouts/sections/TestimonialSection";

export default function HeroSection() {
  return (
    <>

      <div className="h-min-screen min-h-screen bg-tertiary  text-white relative overflow-hidden">

        <div>
          <div className="h-screen">
            <Hero />
          </div>

          <ChatButton />
        </div>

        <div><ServiceSection /></div>

      <TestimonialSection/>
      </div>
    </>

  );
}