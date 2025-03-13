import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    menus: defineCollection({
      type: 'data',
      source: 'menus/*.json',
      schema: z.object({})
    })
  }
})
