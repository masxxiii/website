import { defineCollection, z } from 'astro:content';

const notesCollection = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        date: z.string(),
        tags: z.array(z.string()),
        summary: z.string(),
        draft: z.boolean().optional().default(false),
    }),
});

export const collections = {
    notes: notesCollection,
};
