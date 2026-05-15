import React from 'react';
import { Phone, Smartphone, Globe } from 'lucide-react';
import Image from 'next/image';

export default function EnterpriseFooter() {
  return (
    <footer className="border-t border-white/5 bg-gray-900 px-4 py-12 font-sans text-zinc-400 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Main Grid: responsive columns */}
        <div className="mb-12 grid grid-cols-1 gap-10 md:grid-cols-2 lg:mb-16 lg:grid-cols-4 lg:gap-12">
          {/* Column 1: Brand & Contact */}
          <div className="space-y-5 sm:space-y-6 md:col-span-2 lg:col-span-1">
            <div className="relative flex h-14 w-40 items-center justify-center overflow-hidden rounded-xl bg-white sm:w-44">
              <Image
                src="/Sakuralogo.jpg"
                alt="Logo"
                fill
                sizes="(max-width: 640px) 160px, 176px"
                className="object-contain p-2"
                priority
              />
            </div>

            <p className="max-w-[320px] text-[13px] leading-relaxed text-zinc-500">
              Established in 2017. Leading the way in Japanese language training and SSW placement with transparency and expertise.
            </p>

            <div className="space-y-3 text-[13px]">
              <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3">
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-zinc-600" />
                  <span>01-5912507</span>
                </div>
                <span className="hidden text-zinc-800 sm:inline">|</span>
                <div className="flex items-center gap-3">
                  <Smartphone className="h-4 w-4 text-zinc-600" />
                  <span>9851335507</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Globe className="h-4 w-4 text-zinc-600" />
                <a href="https://momiji.edu.np" className="transition-colors hover:text-pink-500">
                  momiji.edu.np
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Services */}
          <div className="lg:pl-10">
            <h4 className="mb-6 text-[11px] font-bold uppercase tracking-[0.2em] text-white">
              Services
            </h4>
            <ul className="space-y-3 text-[13px]">
              {["Language Training", "Student Visa", "SSW Preparation", "Job Placement", "Interview Coaching"].map((item) => (
                <li key={item} className="cursor-pointer transition-colors hover:text-white">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Job Sectors */}
          <div className="lg:pl-5">
            <h4 className="mb-6 text-[11px] font-bold uppercase tracking-[0.2em] text-white">
              Job Sectors
            </h4>
            <ul className="space-y-3 text-[13px]">
              {["Agriculture", "Nursing Caregiver", "Food & Beverage", "Ground Handling", "Construction"].map((item) => (
                <li key={item} className="cursor-pointer transition-colors hover:text-white">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Academy */}
          <div>
            <h4 className="mb-6 text-[11px] font-bold uppercase tracking-[0.2em] text-white">
              Academy
            </h4>
            <ul className="space-y-3 text-[13px]">
              {["About Us", "Our Founder", "Our Team", "Success Stories", "Free Consultation"].map((item) => (
                <li key={item} className="cursor-pointer transition-colors hover:text-white">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-start justify-between gap-4 border-t border-white/5 pt-6 text-[12px] text-zinc-600 md:flex-row md:items-center">
          <p>© 2026 Sakura Caring. All rights reserved.</p>
          <div className="flex flex-col gap-2 sm:flex-row sm:gap-6 md:mt-0">
            <span className="cursor-pointer hover:text-zinc-400">Privacy Policy</span>
            <span className="cursor-pointer hover:text-zinc-400">
              Terms of Service <span className="ml-1 text-zinc-800">紅葉</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}