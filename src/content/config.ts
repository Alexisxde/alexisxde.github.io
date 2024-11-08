import { defineCollection, z } from 'astro:content'

const article = defineCollection({
  schema: z.object({
    id: z.number(),
    title: z.string(),
    description: z.string(),
    slug: z.string(),
    tags: z.array(z.string()),
    date: z.date()
  })
})

export const collection = { article }
