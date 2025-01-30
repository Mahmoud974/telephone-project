import { z } from "zod";

export const modelSchema = z.object({
  name: z.string(),
  year: z.number().min(2000).max(new Date().getFullYear()),
});
