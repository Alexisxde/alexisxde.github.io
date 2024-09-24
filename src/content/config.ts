import { defineCollection, z } from 'astro:content'

//* Noticias TelCo
const news = defineCollection({
  schema: z.object({
    id: z.number(),
    title: z.string(),
    slug: z.string(),
    img: z.string(),
    date: z.string()
  })
})

export const collection = { news }
