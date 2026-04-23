import React from 'react';
import Hero from '@/components/layouts/hero';
import ChatButton from '@/components/layouts/ChatButton';


import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";
import Navbar from '@/components/layouts/navbar';


export default function HeroSection() {
  return (
    <div className=" h-screen min-h-screen bg-[#0f0810] text-white selection:bg-pink-700/30 relative overflow-hidden">
      
<Navbar />
<Hero />
 < ChatButton />

    

   
    </div>
  );
}