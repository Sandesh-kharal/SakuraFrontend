import React from "react";
import ContactForm from "./ContactForm";
import ContactInfro from "./ContactInfro";

const page = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div className="flex w-full flex-col items-center justify-center gap-2 bg-linear-to-br from-slate-50 via-blue-100 to-indigo-50 px-4 py-12 text-center sm:px-6 sm:py-16 lg:px-8">
        <p className="text-3xl font-semibold italic text-primary sm:text-4xl lg:text-5xl">
          Contact Us
        </p>
        <p className="text-lg italic sm:text-xl lg:text-2xl">Get in touch</p>
      </div>

      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 px-4 py-10 sm:px-6 lg:flex-row lg:gap-10 lg:px-8 lg:py-12">
        <ContactForm />
        <ContactInfro />
      </div>
    </div>
  );
};

export default page;
