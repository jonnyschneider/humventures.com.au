import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { apiVersion, dataset, projectId } from './src/sanity/env'
import { schema } from './src/sanity/schema'
import { media } from 'sanity-plugin-media'

export default defineConfig({
    name: 'Radiant',
    basePath: '/studio',
    projectId,
    dataset,
    schema,
    plugins: [
        structureTool(), 
        visionTool({ 
            defaultApiVersion: apiVersion }),
        media({
            creditLine: {
                enabled: true,
                excludeSources: ['unsplash'],
            },
            maximumUploadSize: 10000000
        })
    ],
})
