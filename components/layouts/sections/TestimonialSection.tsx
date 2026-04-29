"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Card, CardContent } from "@/components/ui/card";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/testimonialAvatar";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface Testimonial {
  id: number;
  name: string;
  avatar?: string;
  avatarColor: string;
  testimonial: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Ankita karki",
    avatarColor: "#E8F4F8",
    testimonial:
      "My overall journey with expert was smooth and easy. My counselors Biniya Khadgi and Preeti Neupane was very supportive and helped me understand how the process works which is why we were able to get through it properly. With the immense help of them I have received my Australian student visa with so much ease. Very grateful for this experience.",
    rating: 5,
  },
  {
    id: 2,
    name: "Kritisha Pandey",
    avatarColor: "#17A2B8",
    testimonial:
      "Great service, very knowledgeable and helpful staff. Extremely reliable and trustworthy consultancy. One of the best consultancy I have ever come through. Received very helpful advice throughout my visa process. I would strongly recommend international students to get advice from Expert education and Prashanna dai for their future plan.",
    rating: 5,
  },
  {
    id: 3,
    name: "Pratikshya Bhandari",
    avatarColor: "#DC3545",
    testimonial:
      "Very happy with the work of expert education and visa consaltancy. Very overwhelming and experienced staffs. Good professionalism. Quality services. Good and comfortable environment ❤️❤️❤️",
    rating: 5,
  },
  {
    id: 4,
    name: "Rajesh Sharma",
    avatarColor: "#28A745",
    testimonial:
      "Exceptional service from start to finish. The team was incredibly patient and guided me through every step of the application process. Highly recommended for anyone looking for visa consultancy services.",
    rating: 5,
  },
  {
    id: 5,
    name: "Sita Gurung",
    avatarColor: "#FFC107",
    testimonial:
      "Professional and reliable consultancy. They made my dream of studying abroad a reality. The counselors were always available to answer my questions and concerns. Thank you for the excellent support!",
    rating: 5,
  },
];

export default function TestimonialSection() {
  const [swiperInstance, setSwiperInstance] = React.useState<SwiperType | null>(
    null,
  );

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div className="w-full pb-10 px-4 bg-linear-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16 text-slate-800 tracking-tight">
          What our clients love about us
        </h2>

        {/* Swiper Container */}
        <div className="relative px-12 md:px-16">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            onSwiper={setSwiperInstance}
            pagination={{
              clickable: true,
              bulletClass: "swiper-pagination-bullet !bg-slate-400",
              bulletActiveClass:
                "swiper-pagination-bullet-active !bg-indigo-600 !w-8",
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
           
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="testimonials-swiper pb-12"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id} className="h-full">
                <Card className="h-full bg-white shadow-lg hover:shadow-xl transition-all border-none border-0! outline-none duration-300 rounded-2xl overflow-hden group">
                  <CardContent className="p-8 flex flex-col h-full">
                    {/* Avatar and Name */}
                    <div className="flex items-center gap-4 mb-6">
                      <Avatar className="w-16 h-16 ring-4 ring-white shadow-md">
                        <AvatarFallback
                          className="text-white font-semibold text-lg"
                          style={{ backgroundColor: testimonial.avatarColor }}
                        >
                          {getInitials(testimonial.name)}
                        </AvatarFallback>
                        {testimonial.avatar && (
                          <AvatarImage src={testimonial.avatar} />
                        )}
                      </Avatar>
                      <div>
                        <h3 className="font-semibold text-lg text-primary">
                          {testimonial.name}
                        </h3>
                        {/* Rating */}
                        <div className="flex gap-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-4 h-4 fill-yellow-400 text-yellow-400"
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-slate-600 leading-relaxed mb-6 grow text-sm">
                      {testimonial.testimonial}
                    </p>

                    {/* Decorative Quote Mark */}
                    <div className="absolute bottom-4 right-4 text-slate-100 text-7xl font-serif leading-none opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      "
                    </div>
                  </CardContent>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Instagram-style Navigation Buttons */}
          <button
            onClick={() => swiperInstance?.slidePrev()}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 group"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-slate-700 group-hover:text-indigo-600 transition-colors" />
          </button>

          <button
            onClick={() => swiperInstance?.slideNext()}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 hover:scale-110 group"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-slate-700 group-hover:text-indigo-600 transition-colors" />
          </button>
        </div>
      </div>

      <style jsx global>{`
        .testimonials-swiper .swiper-pagination {
          position: relative;
          margin-top: 2rem;
        }

        .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          border-radius: 9999px;
          transition: all 0.3s ease;
          opacity: 1;
        }

        .swiper-slide{
            height:auto;
        }
        .swiper-pagination-bullet-active {
          border-radius: 4px;
        }
      `}</style>
    </div>
  );
}
