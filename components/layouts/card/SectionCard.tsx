import React from "react";
import Image from "next/image";

interface SectionCardProps {
  service: string;
  title: string;
}

const SectionCard = ({ service, title }: SectionCardProps) => {
  return (
    <div>
      <a
        href="/ourservices"
        aria-label={`Explore ${title}`}
        className="group  h-77.5 rounded-4xl overflow-hidden bg-white border border-gray-100 font-sans flex flex-col shadow-2xl transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-2xl [focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-pink-300/60"
      >
        {/* Upper Section - Dynamic height */}
        <div className="flex-1 bg-dark flex items-center justify-center transition-colors duration-300 group-hover:bg-pink-50 ">
          <Image
            src="/service.png"
            alt={title}
            width={150}
            height={150}
            className="object-cover"
          />
        </div>

        {/* Content Section */}
        <div className="h-37.5 bg-primary text-white px-6 py-6 flex flex-col justify-between">
          <div>
            <p className="text-[10px] tracking-[0.2em] uppercase font-bold text-white/80 mb-1">
              {service}
            </p>

            <h3 className="text-[18px] leading-section font-bold">{title}</h3>
          </div>

          <div className="flex justify-end items-center">
            <div className="flex items-center gap-1.5 text-[13px] font-semibold group-hover:scale-110 transition-opacity">
              Explore More
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default SectionCard;
