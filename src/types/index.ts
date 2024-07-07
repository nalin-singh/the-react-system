import { z } from "zod";

export const GlobalSchema = z.object({
  userID: z.string().uuid(),
  token: z.string(),
  theme: z.enum(["light", "dark"]),
});

export type TGlobal = z.infer<typeof GlobalSchema>;
