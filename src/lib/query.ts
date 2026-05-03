// lib/sanity-queries.ts
import { client } from '../lib/sanity';

/**
 * Ambil artikel dari Sanity berdasarkan slug
 * @param slug - nama file / slug dari artikel
 */
export async function getArticleBySlug(slug: string) {
  return await client.fetch(`
    *[_type == "article" && slug.current == $slug][0]{
      _id,
      title,
      slug,
      description,
      content,
      author,
      publishedAt,
      image,
      alt
    }
  `, { slug });
}

/**
 * Ambil media dari Sanity berdasarkan slug
 * @param slug - nama file / slug dari media
 */
// lib/query.ts
export async function getAllMedia() {
  // Ganti 'media' dengan nama tipe dokumen di schema kamu
  const query = `*[_type == "media"] {
    "slug": slug.current,
    "nama": namaGambar,
    "url": gambar.asset->url
  }`;
  return await client.fetch(query);
}

// lib/query.ts
export async function getMediaBySlug(slug: string) {
  // Tambahkan pengecekan agar tidak error jika slug kosong
  if (!slug) return null;

  const query = `*[_type == "media" && slug.current == $slug][0] {
    "slug": slug.current,
    "nama": namaGambar,
    "url": gambar.asset->url,
    "alt": altText
  }`;

  // Pastikan parameter kedua adalah objek { slug }
  return await sanityClient.fetch(query, { slug: slug });
}

/**
 * Ambil data generic berdasarkan type dan slug
 * @param type - tipe dokumen (article, media, product, dll)
 * @param slug - nama file / slug
 */
export async function getDataBySlug(type: string, slug: string) {
  return await client.fetch(`
    *[_type == $type && slug.current == $slug][0]
  `, { type, slug });
}

/**
 * Ambil semua artikel
 */
export async function getAllArticles() {
  return await client.fetch(`
    *[_type == "article"] | order(publishedAt desc){
      _id,
      title,
      slug,
      description,
      publishedAt,
      image
    }
  `);
}

export async function getArticleWithRelated(slug: string) {
  const article = await getArticleBySlug(slug);
  
  if (!article) return null;

  const related = await client.fetch(`
    *[_type == "article" && slug.current != $slug][0..2]{
      _id,
      title,
      slug,
      description,
      image
    }
  `, { slug });

  return { ...article, related };
}

export interface Media {
  _id: string;
  title: string;
  slug: string;
  image: any;
  alt?: string;
  description?: string;
}

export interface Article {
  _id: string;
  title: string;
  slug: string;
  description?: string;
  content?: any;
  author?: string;
  publishedAt?: string;
  image?: any;
  alt?: string;
}