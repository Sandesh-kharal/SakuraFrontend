"use client";
import React from "react";
import Hero from "@/components/layouts/hero";
import ChatButton from "@/components/layouts/ChatButton";
import ServiceSection from "@/components/layouts/sections/ServiceSection";
import TestimonialSection from "@/components/layouts/sections/TestimonialSection";

export default function HeroSection() {
  return (
    <main className="relative overflow-hidden bg-tertiary text-black selection:bg-pink-700/30">
      <section className="max-h-[100svh] ">
        <Hero />
      </section>

      <div className="px-4 sm:px-6 lg:px-8">
        <ChatButton />
      </div>

      <section className="px-4 py-4">
        <ServiceSection />
      </section>

      <section className="px-4 py-4">
        <TestimonialSection />
      </section>
    </main>
  );
}