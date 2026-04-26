import React from "react";
import SectionCard from "../card/SectionCard";

const ServiceSection = () => {
  return (
    <>
      <div className=" mx-auto py-5 mt-5 bg-white w-full  shadow-lg ">
        <div className="text-center mt-10 display flex flex-col items-center justify-center">
          <div className="text-5xl text-black font-bold mt-10">
            Our Services
          </div>
          <p className=" text-black text-lg mt-4 mb-10 max-w-lg">
            From your first Japanese lesson to landing at Narita Airport.{" "}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mt-10 mb-20  container mx-auto">
          <SectionCard service="Training" title="Agriculture" />
          <SectionCard service="Training" title="Nursing Care Giver" />
          <SectionCard service="Training" title="Food Service" />
          <SectionCard service="Training" title="Hotel Accommodation" />
          <SectionCard service="Training" title="Ground Handling" />
          <SectionCard service="Training" title="Driving job" />
        </div>
      </div>
    </>
  );
};

export default ServiceSection;
