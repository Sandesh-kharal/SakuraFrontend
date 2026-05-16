import { z } from "zod";

export const trainingFormSchema = z.object({
  firstName: z.string().min(2, { message: "First name is required" }),
  lastName: z.string().min(2, { message: "Last name is required" }),
  email: z.string().email({ message: "Please enter a valid email" }),
  phone: z.string().min(10, { message: "Valid phone number is required" }),
  city: z.string().min(2, { message: "Current city is required" }),
  country: z.string().min(1, { message: "Please select a country" }),
  service: z.string().min(1, { message: "Service is required" }),
  agree: z.boolean().refine((val) => val === true, {
    message: "You must agree to the terms",
  }),
});