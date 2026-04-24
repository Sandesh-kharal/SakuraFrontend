import React from 'react';
import { Phone, Smartphone, Globe,  } from 'lucide-react';

import Image from 'next/image';

export default function EnterpriseFooter() {
  return (
    <footer className="bg-[#0b060c] text-zinc-400 py-12 px-8 border-t border-white/5">
      <div  className="max-w-7xl mx-auto container  py-6 mr-6">
        {/* Main Footer Grid - Reduced gap and vertical spacing */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10 mb-12">
          
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-white rounded-sm flex justify-center ">
                 
            <Image src="/logo.jpg" alt="Logo" width={50} height={70} className='rounded-2xl ' />
              </div>
              <div className="flex flex-col">
                <span className="text-white text-sm font-serif font-bold leading-none tracking-tight">
                  Momiji International Academy
                </span>
                <span className="text-[8px] tracking-[0.2em] font-semibold mt-1 uppercase text-zinc-500">
                  Nepal's Gateway to Japan
                </span>
              </div>
            </div>
            
            <p className="text-[13px] leading-relaxed max-w-xs text-zinc-500">
              Established in 2017. Leading the way in Japanese language training and SSW placement with transparency and expertise.
            </p>

            <div className="space-y-2 text-[13px]">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-zinc-600" />
                <span>01-5912507</span>
                <span className="text-zinc-700">|</span>
                <Smartphone className="w-3.5 h-3.5 text-zinc-600" />
                <span>9851335507</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-zinc-600" />
                <a href="https://momiji.edu.np" className="hover:text-pink-500 transition-colors">
                  momiji.edu.np
                </a>
              </div>
            </div>
          </div>

          {/* Links Columns - Tighter line heights for Enterprise look */}
          <div className='ml-20'> 
            <h4 className="text-white text-[11px] font-bold tracking-[0.25em] uppercase mb-5">Services</h4>
            <ul className="space-y-2.5 text-[13px]">
              {["Language Training", "Student Visa", "SSW Preparation", "Job Placement", "Interview Coaching"].map((item) => (
                <li key={item} className="hover:text-white cursor-pointer transition-colors w-fit">{item}</li>
              ))}
            </ul>
          </div>

          <div className='ml-8'>
            <h4 className="text-white text-[11px] font-bold tracking-[0.25em] uppercase mb-5">Job Sectors</h4>
            <ul className="space-y-2.5 text-[13px]">
              {["Agriculture", "Nursing Caregiver", "Food & Beverage", "Ground Handling", "Construction"].map((item) => (
                <li key={item} className="hover:text-white cursor-pointer transition-colors w-fit">{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white text-[11px] font-bold tracking-[0.25em] uppercase mb-5">Academy</h4>
            <ul className="space-y-2.5 text-[13px]">
              {["About Us", "Our Founder", "Our Team", "Success Stories", "Free Consultation"].map((item) => (
                <li key={item} className="hover:text-white cursor-pointer transition-colors w-fit">{item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar - Slimmer padding */}
        <div className="  pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[12px] text-zinc-600">
          
          <div className="flex items-center gap-3 justify-between  w-full container mx-auto mr-40">
            <div>
                <p>© 2026 Momiji International Academy. All rights reserved.</p>
            </div>
            
            <div className='flex gap-1'> <span className="hover:text-zinc-400 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-zinc-400 cursor-pointer">Terms of Service <span>紅葉</span> </span>
           </div>
           
          </div>
        </div>
      </div>

      
    </footer>
  );
}