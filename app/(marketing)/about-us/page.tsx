"use client";

import React from "react";
import Link from "next/link";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import {
  GraduationCap,
  Globe,
  Users,
  Award,
  CheckCircle2,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

export default function AboutUs() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeService, setActiveService] = React.useState<number | null>(null);

  const services = [
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Japanese Language Courses",
      description: "JLPT/NAT preparation with expert instructors",
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "SSW Program",
      description: "Comprehensive JFT & Skill training courses",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Visa Processing",
      description: "Student visa consultation and processing",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Job Placement",
      description: "Career opportunities in Japan",
    },
  ];

  const specializations = [
    "Agriculture",
    "Nursing Care",
    "Food Service",
    "Hotel Accommodation",
    "Ground Handling",
    "Driving",
  ];

  const whyChooseUs = [
    "Extensive experience in Japanese language training",
    "Personalized approach for every student",
    "Comprehensive end-to-end services",
    "Client-centric consultation model",
    "Quality assurance in all programs",
    "Transparent pricing structure",
    "Native Japanese language expertise",
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-tertiary">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32 px-4">
        <div className="absolute top-20 right-10 w-72 h-72 bg-tertiary rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-tertiary rounded-full blur-3xl" />

        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-16 h-16 bg-tertiary rounded-2xl flex items-center justify-center shadow-lg">
                <Image
                  src="/logo.png"
                  alt="Logo"
                  width={40}
                  height={64}
                  className="w-full h-full object-fit-cover object-fit-fill object-fit-lg-contain rounded-2xl shadow-lg"
                />{" "}
              </div>
            </div>
            <h1 className="text-6xl md:text-7xl font-bold mb-6 bg-primary bg-clip-text text-transparent tracking-tight">
              Sakura Caring
            </h1>
            <p className="text-2xl md:text-3xl text-gray-600 font-light tracking-wide">
              さくらケアリング
            </p>
            <div className="mt-8 inline-block">
              <p className="text-lg text-gray-700 font-medium px-6 py-3 bg-tertiary rounded-full border border-pink-200">
                Your Expert Japanese Language Training School
              </p>
            </div>
          </div>

          {/* Mission Statement */}
          <div className="container mx-auto mt-20">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-xl border border-pink-100">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed text-center">
                To empower students with the knowledge, skills, and confidence
                they need to succeed in their educational pursuits in Japan. We
                are a team of experienced professionals committed to providing
                exceptional consultancy services to our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 bg-white/50">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-800">
            Our Services
          </h2>
          <p className="text-center text-gray-600 mb-16 text-lg">
            Comprehensive programs designed for your success
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {services.map((service, index) => (
              <div
                key={index}
                onMouseEnter={() => setActiveService(index)}
                onMouseLeave={() => setActiveService(null)}
                className="group bg-white rounded-2xl p-8 shadow-lg border border-pink-100 hover:border-pink-300 transition-all duration-300 hover:-translate-y-2 cursor-pointer"
              >
                <div
                  className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 ${
                    activeService === index
                      ? "bg-primary text-white"
                      : "bg-pink-100 text-pink-600"
                  }`}
                >
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>

          {/* Specializations */}
          <div className="bg-tertiary rounded-3xl p-10 ">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Training Specializations
            </h3>
            <div className="flex flex-wrap gap-3 justify-center ">
              {specializations.map((spec, index) => (
                <div
                  key={index}
                  className="px-6 py-3 bg-white rounded-full border border-pink-200 text-gray-700 font-medium hover:bg-primary hover:text-white transition-all duration-300"
                >
                  {spec}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Why Choose Us
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover the unique benefits that set us apart in Japanese
              language education
            </p>
          </div>

          {/* service Grid */}
          <div className="grid grid-cols-1 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="relative group"
                onClick={() => toggleAccordion(index)}
              >
                {/* Card */}
                <div
                  className={`
                relative overflow-hidden rounded-2xl p-6 
                transition-all duration-500 cursor-pointer
               shadow-md border-tertiary
              `}
                >
                  {/* Title */}
                  {/* Icon */}
                  <div
                    className={`
                  text-5xl transition-transform duration-500 flex justify-between 
                `}
                  >
                    <div className="flex gap-2">
                      <span>{service.icon}</span>
                      <h3
                        className={`
                  text-xl font-bold mb-4 transition-colors duration-300
                  ${activeIndex === index ? "text-dark" : "text-gray-800"}
                `}
                      >
                        {service.title}
                      </h3>
                    </div>

                    <ChevronDown
                      className={`w-6 h-6 transition-transform duration-300 ${activeIndex === index ? "rotate-180" : ""}`}
                    />
                  </div>

                  {/* Description - Hidden by default, shows on hover */}
                  <div
                    className={`
                  overflow-hidden transition-all duration-500
                  ${
                    activeIndex === index
                      ? "max-h-40 opacity-100 translate-y-0"
                      : "max-h-0 opacity-0 -translate-y-4"
                  }
                `}
                  >
                    <p className="text-dark text-lg leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-primary text-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">100+</div>
              <div className="text-pink-100 text-lg">
                Students Placed in Japan
              </div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">95%</div>
              <div className="text-pink-100 text-lg">Visa Success Rate</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">5+</div>
              <div className="text-pink-100 text-lg">Years of Excellence</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 bg-white/50">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            Start Your Journey Today
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Take the first step toward your Japanese language journey
          </p>

          <div className="bg-white rounded-3xl p-10 shadow-xl border border-pink-100">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center gap-3">
                <div className="w-14 h-14 bg-pink-100 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-pink-600" />
                </div>
                <h3 className="font-bold text-gray-800">Location</h3>
                <p className="text-gray-600 text-sm text-center">
                  Samakhushi-10, Tokha Road
                  <br />
                  Suganda Complex, Kathmandu
                </p>
              </div>

              <div className="flex flex-col items-center gap-3">
                <div className="w-14 h-14 bg-pink-100 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-pink-600" />
                </div>
                <h3 className="font-bold text-gray-800">Phone</h3>
                <p className="text-gray-600 text-sm">
                  01-5912507
                  <br />
                  9761678769
                </p>
              </div>

              <div className="flex flex-col items-center gap-3">
                <div className="w-14 h-14 bg-pink-100 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-pink-600" />
                </div>
                <h3 className="font-bold text-gray-800">Email</h3>
                <p className="text-gray-600 text-sm">Sakurainepal@gmail.com</p>
              </div>
            </div>

            <Link href={'/contact-us'}>
            <button  className="mt-10 px-8 py-4 bg-linear-to-r from-pink-500 to-rose-500 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer">
              Contact Us Today
            </button>
            </Link>
            
          </div>
        </div>
      </section>

      {/* Footer */}

      <style jsx global>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }

        @import url("https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800&display=swap");

        * {
          font-family:
            "Outfit",
            system-ui,
            -apple-system,
            sans-serif;
        }
      `}</style>
    </div>
  );
}
