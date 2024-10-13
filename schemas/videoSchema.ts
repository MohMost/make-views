// schemas/videoSchema.ts
import { z } from "zod";

export const videoSchema = z.object({
  videoUrl: z.string().url().nonempty("Video URL cannot be empty"),
});

// You can export the type for use in your components
export type VideoSchemaType = z.infer<typeof videoSchema>;
