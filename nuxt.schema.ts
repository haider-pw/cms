import { field, group } from '@nuxthq/studio/theme'

export default defineNuxtSchema({
  appConfig: {
    parent: group({
      title: 'Parent title',
      description: 'Parent description.',
      icon: 'i-icon-to-display',
      fields: {
        leaf: field({
          type: 'object',
          title: 'Field title',
          description: 'Field Description',
          icon: 'i-icon-to-display',
          default: 'default value'
        })
      }
    })
  }
})
