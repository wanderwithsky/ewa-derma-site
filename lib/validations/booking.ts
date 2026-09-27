import { z } from "zod";

// Phone validation for Indian mobile numbers (+91 or 10 digits starting with 6-9)
const indianPhoneRegex = /^(?:\+91[\-\s]?)?[6-9]\d{9}$/;

export const BookingFormSchema = z.object({
  category: z.string().min(1, "Please select a treatment category"),
  treatment: z.string().min(1, "Please select a specific procedure"),
  date: z.string().min(1, "Please select your preferred appointment date"),
  timeSlot: z.string().min(1, "Please select a time slot"),
  doctor: z.string().default("first-available"),
  fullName: z
    .string()
    .min(2, "Full name must be at least 2 characters")
    .max(80, "Name is too long"),
  phone: z
    .string()
    .regex(indianPhoneRegex, "Please enter a valid 10-digit Indian phone number (e.g. 9876543210)"),
  email: z
    .string()
    .email("Please enter a valid email address")
    .optional()
    .or(z.literal("")),
  notes: z.string().max(500, "Notes cannot exceed 500 characters").optional(),
  // Honeypot field for bot detection (must be empty)
  website_hp: z.string().max(0, "Spam detected").optional().or(z.literal("")),
});

export type BookingFormData = z.infer<typeof BookingFormSchema>;

export const ContactFormSchema = z.object({
  fullName: z
    .string()
    .min(2, "Full name must be at least 2 characters")
    .max(80, "Name is too long"),
  phone: z
    .string()
    .regex(indianPhoneRegex, "Please enter a valid 10-digit Indian phone number"),
  email: z
    .string()
    .email("Please enter a valid email address")
    .optional()
    .or(z.literal("")),
  treatment: z.string().min(1, "Please select a treatment area"),
  doctor: z.string().optional(),
  timeSlot: z.string().optional(),
  message: z.string().max(1000, "Message is too long").optional(),
  // Honeypot field for bot detection
  website_hp: z.string().max(0, "Spam detected").optional().or(z.literal("")),
});

export type ContactFormData = z.infer<typeof ContactFormSchema>;
