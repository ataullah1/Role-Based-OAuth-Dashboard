import { z } from "zod";

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const newsSchema = z.object({
  id: z.string(),
  title: z.string(),
  slug: z.string(),
  content: z.string(),
  category: z.string(),
  image: z.string().nullable(),
  status: z.enum(["PRIVATE", "PUBLISHED"]),
  createdAt: z.date(),
  updatedAt: z.date(),
  label: z.string().optional(),
});

export type NewsItem = z.infer<typeof newsSchema>;

// Keep the existing taskSchema if needed
export const taskSchema = z.object({
  id: z.string(),
  title: z.string(),
  status: z.string(),
  label: z.string(),
});

export type Task = z.infer<typeof taskSchema>;
