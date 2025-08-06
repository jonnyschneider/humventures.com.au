import { defineField, defineType } from 'sanity'

export const postType = defineType({
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      options: {
        source: 'title',
      },
      validation: (Rule) =>
        Rule.required().error('A slug is required for the post URL.'),
    }),
    defineField({
      name: 'publishedAt',
      type: 'datetime',
      validation: (Rule) =>
        Rule.required().error(
          'A publication date is required for ordering posts.',
        ),
    }),
    defineField({
      name: 'isFeatured',
      type: 'boolean',
      initialValue: false,
      description: 'Featured posts appear in the featured section on the blog homepage',
    }),
    defineField({
      name: 'author',
      type: 'reference',
      to: { type: 'author' },
    }),
    defineField({
      name: 'mainImage',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        },
      ],
    }),
    defineField({
      name: 'categories',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }],
    }),
    defineField({
      name: 'excerpt',
      type: 'text',
      rows: 3,
      description: 'A brief summary of the post for previews',
    }),
    defineField({
      name: 'body',
      type: 'blockContent',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
      author: 'author.name',
      isFeatured: 'isFeatured',
    },
    prepare({ title, author, media, isFeatured }) {
      return {
        title,
        subtitle: [isFeatured && 'Featured', author && `By ${author}`]
          .filter(Boolean)
          .join(' | '),
        media,
      }
    },
  },
  orderings: [
    {
      name: 'isFeaturedAndPublishedAtDesc',
      title: 'Featured & Latest Published',
      by: [
        { field: 'isFeatured', direction: 'desc' },
        { field: 'publishedAt', direction: 'desc' },
      ],
    },
  ],
})