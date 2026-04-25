"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"

import { contactFormSchema, ContactFormValues } from "./ContactForm.Schema"

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
  })

  const onSubmit = async (data: ContactFormValues) => {
    await new Promise((resolve) => setTimeout(resolve, 1000))
    console.log("Form submitted:", data)
    reset()
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-1/2 mx-auto p-10 flex flex-col gap-6 border-2 shadow-2xl border-gray-300 rounded-2xl mb-8"
    >
      <h2 className="text-3xl font-semibold">Send Message</h2>

      {/* First + Last Name */}

      <div className="flex gap-4">
        <div className="flex flex-col w-full">
           <label htmlFor="firstName" className="mb-2 text-gray-700">
      First Name
    </label>
          <input
            type="text"
            {...register("firstName")}
        
            className="border rounded-xl px-4 py-3 outline-none focus:border-red-500"
          />
          {errors.firstName && (
            <p className="text-red-500 text-sm mt-1">
              {errors.firstName.message}
            </p>
          )}
        </div>

        <div className="flex flex-col w-full">
               <label htmlFor="lastName" className="mb-2 text-gray-700">
      Last Name
    </label>
          <input
            type="text"
            {...register("lastName")}
         
            className="border rounded-xl px-4 py-3 outline-none focus:border-red-500"
          />
          {errors.lastName && (
            <p className="text-red-500 text-sm mt-1">
              {errors.lastName.message}
            </p>
          )}
        </div>
      </div>

      {/* Email */}
      <div className="flex flex-col">
             <label htmlFor="email" className="mb-2 text-gray-700">
      Email
    </label>
        <input
          type="email"
          {...register("email")}
          placeholder="you@example.com"
          className="border rounded-xl px-4 py-3 outline-none focus:border-red-500"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Phone (Optional) */}
      <div className="flex flex-col">
             <label htmlFor="phone" className="mb-2 text-gray-700">
      Phone (Optional)
    </label>
        <input
          type="text"
          {...register("phone")}
          placeholder="+977 9800000000"
          className="border rounded-xl px-4 py-3 outline-none focus:border-red-500"
        />
        {errors.phone && (
          <p className="text-red-500 text-sm mt-1">
            {errors.phone.message}
          </p>
        )}
      </div>

      {/* Subject */}
      <div className="flex flex-col">
              <label htmlFor="subject" className="mb-2 text-gray-700">
        Service
      </label>
        <select
          {...register("subject")}
          className="border rounded-xl px-4 py-3 outline-none focus:border-red-500"
          defaultValue=""
        >
          <option value="" disabled>
            Select a topic
          </option>
         
          <option value="Training">Agriculture</option>
          <option value="Training">Driving Job </option>
          <option value="Training">Food Service</option>
          <option value="Training">Ground Handling</option>
          <option value="Training">Hotel Acommodation</option>
          <option value="other">Other</option>
        </select>
        {errors.subject && (
          <p className="text-red-500 text-sm mt-1">
            {errors.subject.message}
          </p>
        )}
      </div>

      {/* Message */}
      <div className="flex flex-col">
              <label htmlFor="message" className="mb-2 text-gray-700">  Message</label>
        <textarea
          {...register("message")}
          placeholder="Tell us about your spiritual needs, birth details (if seeking astrological guidance), or any questions you have..."
          rows={5}
          className="border rounded-2xl px-4 py-3 outline-none focus:border-red-500 resize-none"
        />
        {errors.message && (
          <p className="text-red-500 text-sm mt-1">
            {errors.message.message}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className=" bg-primary text-white py-4 rounded-2xl font-semibold disabled:bg-gray-400 transition"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  )
}

export default ContactForm