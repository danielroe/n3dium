import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    articles: defineCollection({
      source: 'articles/**',
      type: 'page',
      schema: z.object({
        title: z.string(),
      })
    })
  }
})
