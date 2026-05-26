import { c as createComponent } from './page-ssr_CZ42SuHD.mjs';
import 'piccolore';
import { g as renderTemplate } from './prerender_Bi9m1rI3.mjs';
import 'clsx';
import { c as client } from './sanity_-uR2p6SE.mjs';

async function getStaticPaths() {
  const articles = await client.fetch(`
    *[_type == "article"]{
      "slug": slug.current
    }
  `);
  return articles.map((a) => ({
    params: { slug: a.slug }
  }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  await client.fetch(
    `*[_type == "article" && slug.current == $slug][0]{
    title,
    content
  }`,
    { slug }
  );
  return renderTemplate`<!-- ---
import { client } from '../../lib/sanity';

// ambil semua slug
export async function getStaticPaths() {
  const articles = await sanity.fetch(\`
    *[_type == "article"]{
      "slug": slug.current
    }
  \`);

  return articles.map((a) => ({
    params: { slug: a.slug },
  }));
}

// ambil slug dari URL
const { slug } = Astro.params;

// ambil data berdasarkan slug
const article = await sanity.fetch(
  \`*[_type == "article" && slug.current == $slug][0]{
    title,
    content
  }\`,
  { slug }
);
--- -->`;
}, "/workspaces/website/src/pages/article/[slug].astro", void 0);

const $$file = "/workspaces/website/src/pages/article/[slug].astro";
const $$url = "/article/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
