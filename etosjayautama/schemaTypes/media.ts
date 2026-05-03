import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'media',
  title: 'Media / Gambar',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Nama Gambar',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        // Mengambil sumber dari field 'title'
        source: 'title',
        maxLength: 96,
        // Opsional: Memastikan slug selalu lowercase dan ramah URL
        slugify: (input) =>
          input
            .toLowerCase()
            .replace(/\s+/g, '-')
            .slice(0, 96),
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Gambar',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'alt',
      title: 'Alt Text (SEO)',
      type: 'string',
    }),
  ],
});