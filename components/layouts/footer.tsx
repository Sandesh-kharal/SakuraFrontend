import React from 'react';
import { Phone, Smartphone, Globe } from 'lucide-react';
import Image from 'next/image';

export default function EnterpriseFooter() {
  return (
    <footer className="bg-[#0b060c] text-zinc-400 py-16 px-8 border-t border-white/5 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Main Grid: 4 Equal Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand & Contact (This was the issue) */}
          <div className="space-y-6">
            {/* Logo Wrapper */}
            <div className="relative w-64 h-14 bg-white rounded-xl overflow-hidden flex items-center justify-center">
              <Image 
                src="/Sakuralogo.jpg" 
                alt="Logo" 
                fill
                className="object-contain p-2" 
                priority 
              />
            </div>
            
            {/* Description */}
            <p className="text-[13px] leading-relaxed text-zinc-500 max-w-[280px]">
              Established in 2017. Leading the way in Japanese language training and SSW placement with transparency and expertise.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 text-[13px]">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-zinc-600" />
                <span>01-5912507</span>
                <span className="text-zinc-800">|</span>
                <Smartphone className="w-4 h-4 text-zinc-600" />
                <span>9851335507</span>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="w-4 h-4 text-zinc-600" />
                <a href="https://momiji.edu.np" className="hover:text-pink-500 transition-colors">
                  momiji.edu.np
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Services */}
          <div className="lg:pl-10"> 
            <h4 className="text-white text-[11px] font-bold tracking-[0.2em] uppercase mb-6">Services</h4>
            <ul className="space-y-3 text-[13px]">
              {["Language Training", "Student Visa", "SSW Preparation", "Job Placement", "Interview Coaching"].map((item) => (
                <li key={item} className="hover:text-white cursor-pointer transition-colors">{item}</li>
              ))}
            </ul>
          </div>

          {/* Column 3: Job Sectors */}
          <div className="lg:pl-5">
            <h4 className="text-white text-[11px] font-bold tracking-[0.2em] uppercase mb-6">Job Sectors</h4>
            <ul className="space-y-3 text-[13px]">
              {["Agriculture", "Nursing Caregiver", "Food & Beverage", "Ground Handling", "Construction"].map((item) => (
                <li key={item} className="hover:text-white cursor-pointer transition-colors">{item}</li>
              ))}
            </ul>
          </div>

          {/* Column 4: Academy */}
          <div>
            <h4 className="text-white text-[11px] font-bold tracking-[0.2em] uppercase mb-6">Academy</h4>
            <ul className="space-y-3 text-[13px]">
              {["About Us", "Our Founder", "Our Team", "Success Stories", "Free Consultation"].map((item) => (
                <li key={item} className="hover:text-white cursor-pointer transition-colors">{item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[12px] text-zinc-600">
          <p>© 2026 Momiji International Academy. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <span className="hover:text-zinc-400 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-zinc-400 cursor-pointer">Terms of Service <span className="text-zinc-800 ml-1">紅葉</span></span>
          </div>
        </div>
      </div>
    </footer>
  );
}