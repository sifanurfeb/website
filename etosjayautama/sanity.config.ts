// import {defineConfig} from 'sanity'
// import {structureTool} from 'sanity/structure'
// import {visionTool} from '@sanity/vision'
// import {schemaTypes} from './schemaTypes'

// export default defineConfig({
//   name: 'default',
//   title: 'etosjayautama',

//   projectId: 'oaf9as88',
//   dataset: 'production',

//   plugins: [structureTool(), visionTool()],

//   schema: {
//     types: schemaTypes,
//   },
  
// })
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'

// ⛔ IMPORT LANGSUNG
import article from './schemaTypes/article'
import media  from './schemaTypes/media'

export default defineConfig({
  projectId: 'oaf9as88',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: [article, media],
  },
})