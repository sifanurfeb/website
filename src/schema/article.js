// schemas/article.js
export default {
  name: 'article',
  title: 'Article',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Judul Artikel',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title', // Otomatis mengambil data dari field 'title'
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'content',
      title: 'Konten / Isi Artikel',
      type: 'array', 
      of: [{ type: 'block' }], // Menggunakan Portable Text
    },
    {
      name: 'thumbnail',
      title: 'Gambar Utama',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
}