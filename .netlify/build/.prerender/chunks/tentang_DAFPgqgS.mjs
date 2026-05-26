import { c as createComponent } from './page-ssr_CZ42SuHD.mjs';
import 'piccolore';
import { r as renderComponent, g as renderTemplate, d as maybeRenderHead } from './prerender_Bi9m1rI3.mjs';
import { $ as $$Layout } from './Layout_C-YZpalr.mjs';

const $$Tentang = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Tentang Kami" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>Tentang Perusahan Kami</h1> <p>kami adalah tim profesional yang siap membantu anda</p> ` })}`;
}, "/workspaces/website/src/pages/tentang.astro", void 0);

const $$file = "/workspaces/website/src/pages/tentang.astro";
const $$url = "/tentang";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Tentang,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
