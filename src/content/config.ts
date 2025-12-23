import { defineCollection, z } from 'astro:content'

const work = defineCollection({
    type: 'content',
    schema: z.object({
        company: z.string(),
        role: z.string(),
        dateStart: z.string(),
        dateEnd: z.string(),
        title: z.string().optional(),
        originalPost: z.string().optional(),
    }),
})

export const collections = { work }
