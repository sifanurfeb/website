import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: 'oaf9as88',
  dataset: 'production',
  apiVersion: '2023-01-01',
  useCdn: true,
});

const builder = imageUrlBuilder(client);

// ✅ WAJIB ADA
export function urlFor(source) {
  return builder.image(source);
}