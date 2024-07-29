import { defineCollection, z } from 'astro:content';
import { docsSchema } from '@astrojs/starlight/schema';

export const collections = {
	docs: defineCollection({ 
    schema: docsSchema({
      extend: z.object({
        team: z.string().optional(),
        type: z.string().optional(),
        attributes: z.string().optional(),
        module: z.string().optional(),
      }),
    }),
  }),
};
