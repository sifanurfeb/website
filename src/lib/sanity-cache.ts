// lib/sanity-cache.ts
import { client } from '../lib/sanity';

// Simple in-memory cache untuk development
const cache = new Map();
const CACHE_DURATION = 5 * 60 * 1000; // 5 menit

interface CacheEntry {
  data: any;
  timestamp: number;
}

/**
 * Ambil data dengan caching
 */
export async function getCachedData(
  type: string,
  slug: string,
  query?: string
) {
  const cacheKey = `${type}:${slug}`;
  const cached = cache.get(cacheKey) as CacheEntry | undefined;

  // Jika cache masih valid
  if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
    return cached.data;
  }

  try {
    let data;

    if (query) {
      // Custom query
      data = await client.fetch(query, { type, slug });
    } else {
      // Default query
      data = await client.fetch(
        `*[_type == $type && slug.current == $slug][0]`,
        { type, slug }
      );
    }

    // Simpan ke cache
    cache.set(cacheKey, {
      data,
      timestamp: Date.now()
    });

    return data;
  } catch (error) {
    console.error(`Error fetching ${type} with slug ${slug}:`, error);
    return null;
  }
}

/**
 * Clear cache untuk type tertentu
 */
export function clearCache(type?: string) {
  if (type) {
    for (const key of cache.keys()) {
      if (key.startsWith(`${type}:`)) {
        cache.delete(key);
      }
    }
  } else {
    cache.clear();
  }
}

/**
 * Ambil multiple data sekaligus
 */
export async function getMultipleData(
  items: Array<{ type: string; slug: string }>
) {
  const promises = items.map(item =>
    getCachedData(item.type, item.slug)
  );
  
  const results = await Promise.all(promises);
  
  return items.reduce((acc, item, index) => {
    acc[`${item.type}:${item.slug}`] = results[index];
    return acc;
  }, {} as Record<string, any>);
}