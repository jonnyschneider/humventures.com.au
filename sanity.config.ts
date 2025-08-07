import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schema } from './src/sanity/schema'
import { media } from 'sanity-plugin-media'

export default defineConfig({
    name: 'Radiant',
    basePath: '/studio',
    projectId: '6i6wbquj',
    dataset: 'staging',
    schema,
    plugins: [
        structureTool(), 
        visionTool({ 
            defaultApiVersion: '2025-01-01' }),
        media({
            creditLine: {
                enabled: true,
                excludeSources: ['unsplash'],
            },
            maximumUploadSize: 10000000
        })
    ],
})