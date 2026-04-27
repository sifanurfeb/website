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