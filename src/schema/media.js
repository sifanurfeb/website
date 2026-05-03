// export default {
//   name: 'media', // atau 'gambar', pastikan ini sesuai dengan query Anda
//   title: 'Media / Gambar',
//   type: 'document',
//   fields: [
//     {
//       name: 'namaGambar', // Ini adalah "Nama Gambar"
//       title: 'Nama Gambar',
//       type: 'string',
//     },
//     // --- TAMBAHKAN KODE DI BAWAH INI ---
//     {
//       name: 'slug',
//       title: 'Slug',
//       type: 'slug',
//       options: {
//         source: 'namaGambar', // Mengambil teks dari field namaGambar di atas
//         maxLength: 96,
//       },
//       validation: (Rule) => Rule.required(),
//     },
//     // ----------------------------------
//     {
//       name: 'gambar',
//       title: 'Gambar',
//       type: 'image',
//       options: { hotspot: true }
//     },
//     {
//       name: 'altText',
//       title: 'Alt Text (SEO)',
//       type: 'string',
//     },
//   ],
// }

import { client, urlFor } from '../lib/sanity';
const { slug } = Astro.params;

const query = `*[_type == "media" && slug.current == "hero"][0] {
  title,
  "imageUrl": image.asset->url,
  alt
}`;

const media = await client.fetch(query, { slug });

// Jika slug tidak ditemukan
if (!media) {
  return Astro.redirect('/404');
}

