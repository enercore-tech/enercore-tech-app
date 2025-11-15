import { z } from "zod";

export const ContactInputSchema = z.object({
  name: z.string().min(1, "Name is required"),
  contact: z.string().min(1, "Contact information is required"),
  interestedProducts: z.string().min(1, "Please select an interested product"),
});

export type ContactInput = z.infer<typeof ContactInputSchema>;
