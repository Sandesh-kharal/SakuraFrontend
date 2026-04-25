

import { z } from "zod";

export const contactFormSchema = z.object({
  firstName: z
    .string()
    .min(1, "First name is required")
    .max(10, "First name is too long"),

  lastName: z
    .string()
    .min(1, "Last name is required")
    .max(10, "Last name is too long"),

  email: z
    .string()
    .min(1, "Email is required")
    .email("Invalid email address"),

  phone: z
    .string()
    .regex(/^\+?[1-9]\d{7,14}$/, "Invalid phone number")
    .optional()
    .or(z.literal("")), // allow empty string from form inputs

  subject: z
    .string()
    .min(1, "Please select a topic"),

  message: z
    .string()
    .min(1, "Message is required")
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message is too long"),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;