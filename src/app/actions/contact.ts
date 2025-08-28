"use server";

import { z } from "zod";
import { contactFormSchema } from "@/lib/schemas/contact";

export async function submitContactForm(data: z.infer<typeof contactFormSchema>) {
  console.log("Form submitted:", data);
  // Here you would typically send an email or save to a database.
  // We'll simulate a successful submission.
  return { success: true, message: "Thank you for your message! We'll be in touch soon." };
}
