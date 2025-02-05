import { z } from "zod";

export const categorySchema = z.object({
  id: z.string(),
  name: z.string(),
  slug: z.string(),
  description: z.string().nullable(),
  status: z.enum(["PUBLISHED", "PRIVATE"]),
  createdAt: z.date(),
  updatedAt: z.date(),
});

export type CategoryItem = z.infer<typeof categorySchema>;
