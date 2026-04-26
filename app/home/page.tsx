"use client";
import React from "react";
import Hero from "@/components/layouts/hero";
import ChatButton from "@/components/layouts/ChatButton";
import ServiceSection from "@/components/layouts/sections/ServiceSection";
import TestimonialSection from "@/components/layouts/sections/TestimonialSection";

export default function HeroSection() {
  return (
    <main className="relative overflow-hidden bg-[#0f0810] text-white selection:bg-pink-700/30">
      <section className="min-h-[100svh] sm:min-h-screen">
        <Hero />
      </section>

      <div className="px-4 sm:px-6 lg:px-8">
        <ChatButton />
      </div>

      <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <ServiceSection />
      </section>

      <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <TestimonialSection />
      </section>
    </main>
  );
}