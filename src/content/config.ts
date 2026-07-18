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

const blog = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.string(),
    }),
})

export const collections = { work, blog }
