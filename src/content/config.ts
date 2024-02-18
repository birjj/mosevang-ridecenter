import { z, defineCollection } from "astro:content";
const pagesCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    map: z.string().optional(),
    images: z.string().optional(),
  }),
});

export const collections = {
  pages: pagesCollection,
};
