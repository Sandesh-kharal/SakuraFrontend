import React from "react";
import SectionCard from "../card/SectionCard";

const ServiceSection = () => {
  return (
    <>
      <div className="mx-auto pb-4 sm:bg-white w-full sm:shadow-lg sm:my-8">
        <div className="text-center display flex flex-col items-center justify-center">
          <div className="text-4xl sm:text-5xl text-black font-bold sm:mt-10">
            Our Services
          </div>
          <p className="text-black text-lg mt-4 mb-10 max-w-lg">
            From your first Japanese lesson to landing at Narita Airport.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-10 sm:mt-10 mt-4 mb-20 container mx-auto">
          <SectionCard
            service="Training"
            title="Agriculture"
            href="/our-services/training/agriculture"
          />
          <SectionCard
            service="Training"
            title="Nursing Care Giver"
            href="/our-services/training/nursing"
          />
          <SectionCard
            service="Training"
            title="Food Service"
            href="/our-services/training/foodservice"
          />
          <SectionCard
            service="Training"
            title="Hotel Accommodation"
            href="/our-services/training/hotel"
          />
          <SectionCard
            service="Training"
            title="Ground Handling"
            href="/our-services/training/groundhandling"
          />
          <SectionCard
            service="Training"
            title="Driving job"
            href="/our-services/training/driving"
          />
        </div>
      </div>
    </>
  );
};

export default ServiceSection;
