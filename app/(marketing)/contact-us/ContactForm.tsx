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
      className="mx-auto flex w-full flex-col gap-5 rounded-2xl border-2 border-gray-300 p-5 shadow-2xl sm:gap-6 sm:p-6 lg:max-w-3xl lg:p-10"
    >
      <h2 className="text-2xl font-semibold sm:text-3xl">Send Message</h2>

      {/* First + Last Name */}
      <div className="flex flex-col gap-4 sm:flex-row">
        <div className="flex w-full flex-col">
          <label htmlFor="firstName" className="mb-2 text-gray-700">
            First Name
          </label>
          <input
            type="text"
            {...register("firstName")}
            className="rounded-xl border px-4 py-3 outline-none focus:border-red-500"
          />
          {errors.firstName && (
            <p className="mt-1 text-sm text-red-500">
              {errors.firstName.message}
            </p>
          )}
        </div>

        <div className="flex w-full flex-col">
          <label htmlFor="lastName" className="mb-2 text-gray-700">
            Last Name
          </label>
          <input
            type="text"
            {...register("lastName")}
            className="rounded-xl border px-4 py-3 outline-none focus:border-red-500"
          />
          {errors.lastName && (
            <p className="mt-1 text-sm text-red-500">
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
          className="rounded-xl border px-4 py-3 outline-none focus:border-red-500"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
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
          className="rounded-xl border px-4 py-3 outline-none focus:border-red-500"
        />
        {errors.phone && (
          <p className="mt-1 text-sm text-red-500">{errors.phone.message}</p>
        )}
      </div>

      {/* Subject */}
      <div className="flex flex-col">
        <label htmlFor="subject" className="mb-2 text-gray-700">
          Service
        </label>
        <select
          {...register("subject")}
          className="h-14 rounded-xl border px-4 py-3 outline-none focus:border-red-500"
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
          <p className="mt-1 text-sm text-red-500">{errors.subject.message}</p>
        )}
      </div>

      {/* Message */}
      <div className="flex flex-col">
        <label htmlFor="message" className="mb-2 text-gray-700">
          Message
        </label>
        <textarea
          {...register("message")}
          placeholder="Tell us about your spiritual needs, birth details (if seeking astrological guidance), or any questions you have..."
          rows={5}
          className="resize-none rounded-2xl border px-4 py-3 outline-none focus:border-red-500"
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="rounded-2xl bg-primary py-4 font-semibold text-white transition disabled:bg-gray-400"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  )
}

export default ContactForm