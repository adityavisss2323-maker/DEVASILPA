import { z } from 'zod';

export const inquirySchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
  turnstileToken: z.string().min(1, "Please verify you are human"),
  productId: z.number().optional(),
});

export type InquiryData = z.infer<typeof inquirySchema>;
