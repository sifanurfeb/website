import { createClient } from '@sanity/client';
import { c as createComponent } from './astro-component_CuWoDiNx.mjs';
import 'piccolore';
import { l as createRenderInstruction, s as renderTemplate, j as addAttribute, o as maybeRenderHead, r as renderComponent, q as renderSlot, p as renderHead } from './ssr-function_CNutqr6j.mjs';
import 'clsx';
import imageUrlBuilder from '@sanity/image-url';

async function renderScript(result, id) {
  const inlined = result.inlinedScripts.get(id);
  let content = "";
  if (inlined != null) {
    if (inlined) {
      content = `<script type="module">${inlined}</script>`;
    }
  } else {
    const resolved = await result.resolve(id);
    content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"></script>`;
  }
  return createRenderInstruction({ type: "script", id, content });
}

const sanityClient = createClient(
  { "apiVersion": "v2023-08-24", "projectId": "oaf9as88", "dataset": "production", "useCdn": true }
);

globalThis.sanityClient = sanityClient;

const client = createClient({
    projectId: 'oaf9as88',
    dataset: 'production',
    apiVersion: '2023-01-01',
    useCdn: true,
  });

  imageUrlBuilder(client);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Navbar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Navbar;
  const { slug } = Astro2.params;
  const phone = `*[_type == "media" && slug.current == "phone"][0] {
  title,
  "imageUrl": image.asset->url,
  alt
}`;
  const mail = `*[_type == "media" && slug.current == "mail"][0] {
  title,
  "imageUrl": image.asset->url,
  alt
}`;
  const logoetos = `*[_type == "media" && slug.current == "logo"][0] {
  title,
  "imageUrl": image.asset->url,
  alt
}`;
  const phoneIcon = await client.fetch(phone, { slug });
  const mailIcon = await client.fetch(mail, { slug });
  const logoIcon = await client.fetch(logoetos, { slug });
  if (!phoneIcon || !mailIcon) {
    return Astro2.redirect("/404");
  }
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '<div class="hidden md:flex bg-transparent gap-2 justify-between p-3 text-black"> <div class="telp flex gap-3 items-center px-10"> ', ' <span class=""> <a href="wa.me/6285899225363" class="">0858-9922-5363</a> </span> <span class=""> <a href="wa.me/6281282792034" class="">0812-8279-2034</a> </span> ', ` <span><a href="mailto:etosjayautama@yahoo.com">Etos Jaya Utama</a></span> <span><a href="mailto:sales@etosjayautama.id">Sales</a></span> </div> <span class="px-10 uppercase text-red-500"><a href="" target="_blank">nfpa member</a></span> </div> <!-- <nav class="w-full bg-white sticky top-0 z-50 shadow-sm">
    <div class="flex items-center justify-between p-4 max-w-7xl mx-auto">
        <div class="flex-shrink-0">
            <img src="/images/logo-etos.webp" alt="Logo" class="h-10 md:h-12 w-auto">
        </div>

        <ul class="hidden md:flex gap-8 capitalize text-black font-medium">
            {['home', 'service', 'project', 'contact'].map((item) => (
                <li class="group">
                    <a href={\`/\${item === 'home' ? '' : item}\`}>{item}</a>
                    <div class="bg-red-600 h-[2px] w-0 group-hover:w-full transition-all duration-300"></div>
                </li>
            ))}
        </ul>

        <div class="flex items-center gap-4">
            <button class="hidden md:block capitalize bg-red-700 px-4 py-2 rounded-lg text-white hover:bg-red-800 transition">
                Company Profile
            </button>
            
            <button id="menu-btn" class="block md:hidden text-black focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
            </button>
        </div>
    </div>

    <div id="mobile-menu" class="hidden md:hidden bg-white border-t border-gray-100 p-4">
        <ul class="flex flex-col gap-4 capitalize text-black">
            <li><a href="/" class="block py-2">home</a></li>
            <li><a href="/service" class="block py-2">service</a></li>
            <li><a href="/project" class="block py-2">project</a></li>
            <li><a href="/contact" class="block py-2">contact</a></li>
            <li>
                <button class="w-full text-left capitalize bg-red-700 p-3 rounded-lg text-white">
                    Company Profile
                </button>
            </li>
        </ul>
    </div>
</nav>

<script>
    const btn = document.getElementById('menu-btn');
    const menu = document.getElementById('mobile-menu');

    btn.addEventListener('click', () => {
        menu.classList.toggle('hidden');
    });
<\/script> --> <nav class="w-full bg-transparent sticky top-0 z-50 flex p-2 shadow-2xs" id="navbar"> <div class="flex items-center justify-between p-4 w-full"> <div class="flex-shrink-0 px-6"> <img`, ' alt="PT Etos Jaya Utama" class="h-8 md:h-12 w-auto"> </div> <ul class="hidden md:flex gap-8 capitalize text-gray-200 font-medium"> ', ' <!-- <li class="group">\n            <a href="">home</a>\n            <div class="bg-red-600 h-[2px] w-0 group-hover:w-full transition-all duration-300"></div>\n        </li>\n        <li class="group">\n            <a href="">service</a>\n            <div class="bg-red-600 h-[2px] w-0 group-hover:w-full transition-all duration-300"></div>\n        </li>\n        <li class="group">\n            <a href="">project</a>\n            <div class="bg-red-600 h-[2px] w-0 group-hover:w-full transition-all duration-300"></div>\n        </li>\n        <li class="group">\n            <a href="">contact</a>\n            <div class="bg-red-600 h-[2px] w-0 group-hover:w-full transition-all duration-300"></div>\n        </li> --> </ul> <!-- <button class="hidden md:block capitalize mx-5 bg-red-700 p-2 rounded-lg \ntext-white hover:bg-red-500 hover:text-black transition-all duration-300">\n        </button> --> <a href="https://drive.google.com/file/d/15_BwIdG6vZ0x-QSfb3IHzyoz03ZIux0s/view?usp=sharing" class="hidden md:block capitalize mx-5 bg-red-700 p-2 rounded-lg \n                    text-white hover:bg-red-500 hover:text-black transition-all duration-300 cursor-pointer">company profile\n</a> <button id="menu-btn" class="block md:hidden text-black z-[60] relative"> <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path id="menu-icon" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path> </svg> </button> </div> <!-- mobile-menu --> <div id="menu-overlay" class="fixed inset-0 bg-black/50 z-40 hidden opacity-0 transition-opacity duration-300"></div> <div id="mobile-sidebar" class="fixed top-0 right-0 h-full w-[75%] max-w-[300px] bg-black z-50 translate-x-full transition-transform duration-300 ease-in-out shadow-2xl p-6"> <div class="flex flex-col gap-8 mt-16"> <ul class="flex flex-col gap-6 capitalize text-gray-200 text-xl font-semibold"> ', ` </ul> <button class="capitalize bg-red-700 p-4 rounded-lg text-white font-bold shadow-lg hover:bg-red-500 hover:text-black transition-all duration-300 cursor-pointer">
Company Profile
</button> </div> </div> </nav> <script>
    const btn = document.getElementById('menu-btn');
    const sidebar = document.getElementById('mobile-sidebar');
    const overlay = document.getElementById('menu-overlay');
    const menuIcon = document.getElementById('menu-icon');

    function toggleMenu() {
        // Slide Sidebar
        sidebar.classList.toggle('translate-x-full');
        
        // Show/Hide Overlay
        overlay.classList.toggle('hidden');
        setTimeout(() => overlay.classList.toggle('opacity-100'), 10);

        // Opsional: Ubah icon jadi 'X' saat terbuka
        const isOpen = !sidebar.classList.contains('translate-x-full');
        menuIcon.setAttribute('d', isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7');
    }

    btn.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', toggleMenu);


const navBg = document.getElementById("navbar");

  window.addEventListener("scroll", () => {
    let scroll = window.scrollY;

    // max efek sampai 200px scroll
    let opacity = Math.min(scroll / 200, 0.8);

    navBg.style.background = \`rgba(0,0,0,\${opacity})\`;
  });
<\/script>`], ["", '<div class="hidden md:flex bg-transparent gap-2 justify-between p-3 text-black"> <div class="telp flex gap-3 items-center px-10"> ', ' <span class=""> <a href="wa.me/6285899225363" class="">0858-9922-5363</a> </span> <span class=""> <a href="wa.me/6281282792034" class="">0812-8279-2034</a> </span> ', ` <span><a href="mailto:etosjayautama@yahoo.com">Etos Jaya Utama</a></span> <span><a href="mailto:sales@etosjayautama.id">Sales</a></span> </div> <span class="px-10 uppercase text-red-500"><a href="" target="_blank">nfpa member</a></span> </div> <!-- <nav class="w-full bg-white sticky top-0 z-50 shadow-sm">
    <div class="flex items-center justify-between p-4 max-w-7xl mx-auto">
        <div class="flex-shrink-0">
            <img src="/images/logo-etos.webp" alt="Logo" class="h-10 md:h-12 w-auto">
        </div>

        <ul class="hidden md:flex gap-8 capitalize text-black font-medium">
            {['home', 'service', 'project', 'contact'].map((item) => (
                <li class="group">
                    <a href={\\\`/\\\${item === 'home' ? '' : item}\\\`}>{item}</a>
                    <div class="bg-red-600 h-[2px] w-0 group-hover:w-full transition-all duration-300"></div>
                </li>
            ))}
        </ul>

        <div class="flex items-center gap-4">
            <button class="hidden md:block capitalize bg-red-700 px-4 py-2 rounded-lg text-white hover:bg-red-800 transition">
                Company Profile
            </button>
            
            <button id="menu-btn" class="block md:hidden text-black focus:outline-none">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
            </button>
        </div>
    </div>

    <div id="mobile-menu" class="hidden md:hidden bg-white border-t border-gray-100 p-4">
        <ul class="flex flex-col gap-4 capitalize text-black">
            <li><a href="/" class="block py-2">home</a></li>
            <li><a href="/service" class="block py-2">service</a></li>
            <li><a href="/project" class="block py-2">project</a></li>
            <li><a href="/contact" class="block py-2">contact</a></li>
            <li>
                <button class="w-full text-left capitalize bg-red-700 p-3 rounded-lg text-white">
                    Company Profile
                </button>
            </li>
        </ul>
    </div>
</nav>

<script>
    const btn = document.getElementById('menu-btn');
    const menu = document.getElementById('mobile-menu');

    btn.addEventListener('click', () => {
        menu.classList.toggle('hidden');
    });
<\/script> --> <nav class="w-full bg-transparent sticky top-0 z-50 flex p-2 shadow-2xs" id="navbar"> <div class="flex items-center justify-between p-4 w-full"> <div class="flex-shrink-0 px-6"> <img`, ' alt="PT Etos Jaya Utama" class="h-8 md:h-12 w-auto"> </div> <ul class="hidden md:flex gap-8 capitalize text-gray-200 font-medium"> ', ' <!-- <li class="group">\n            <a href="">home</a>\n            <div class="bg-red-600 h-[2px] w-0 group-hover:w-full transition-all duration-300"></div>\n        </li>\n        <li class="group">\n            <a href="">service</a>\n            <div class="bg-red-600 h-[2px] w-0 group-hover:w-full transition-all duration-300"></div>\n        </li>\n        <li class="group">\n            <a href="">project</a>\n            <div class="bg-red-600 h-[2px] w-0 group-hover:w-full transition-all duration-300"></div>\n        </li>\n        <li class="group">\n            <a href="">contact</a>\n            <div class="bg-red-600 h-[2px] w-0 group-hover:w-full transition-all duration-300"></div>\n        </li> --> </ul> <!-- <button class="hidden md:block capitalize mx-5 bg-red-700 p-2 rounded-lg \ntext-white hover:bg-red-500 hover:text-black transition-all duration-300">\n        </button> --> <a href="https://drive.google.com/file/d/15_BwIdG6vZ0x-QSfb3IHzyoz03ZIux0s/view?usp=sharing" class="hidden md:block capitalize mx-5 bg-red-700 p-2 rounded-lg \n                    text-white hover:bg-red-500 hover:text-black transition-all duration-300 cursor-pointer">company profile\n</a> <button id="menu-btn" class="block md:hidden text-black z-[60] relative"> <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path id="menu-icon" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path> </svg> </button> </div> <!-- mobile-menu --> <div id="menu-overlay" class="fixed inset-0 bg-black/50 z-40 hidden opacity-0 transition-opacity duration-300"></div> <div id="mobile-sidebar" class="fixed top-0 right-0 h-full w-[75%] max-w-[300px] bg-black z-50 translate-x-full transition-transform duration-300 ease-in-out shadow-2xl p-6"> <div class="flex flex-col gap-8 mt-16"> <ul class="flex flex-col gap-6 capitalize text-gray-200 text-xl font-semibold"> ', ` </ul> <button class="capitalize bg-red-700 p-4 rounded-lg text-white font-bold shadow-lg hover:bg-red-500 hover:text-black transition-all duration-300 cursor-pointer">
Company Profile
</button> </div> </div> </nav> <script>
    const btn = document.getElementById('menu-btn');
    const sidebar = document.getElementById('mobile-sidebar');
    const overlay = document.getElementById('menu-overlay');
    const menuIcon = document.getElementById('menu-icon');

    function toggleMenu() {
        // Slide Sidebar
        sidebar.classList.toggle('translate-x-full');
        
        // Show/Hide Overlay
        overlay.classList.toggle('hidden');
        setTimeout(() => overlay.classList.toggle('opacity-100'), 10);

        // Opsional: Ubah icon jadi 'X' saat terbuka
        const isOpen = !sidebar.classList.contains('translate-x-full');
        menuIcon.setAttribute('d', isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7');
    }

    btn.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', toggleMenu);


const navBg = document.getElementById("navbar");

  window.addEventListener("scroll", () => {
    let scroll = window.scrollY;

    // max efek sampai 200px scroll
    let opacity = Math.min(scroll / 200, 0.8);

    navBg.style.background = \\\`rgba(0,0,0,\\\${opacity})\\\`;
  });
<\/script>`])), maybeRenderHead(), phoneIcon.imageUrl && renderTemplate`<img${addAttribute(phoneIcon.imageUrl, "src")}${addAttribute(phoneIcon?.alt || "Phone Icon", "alt")} style="width: 20px;">`, mailIcon.imageUrl && renderTemplate`<img${addAttribute(mailIcon.imageUrl, "src")}${addAttribute(mailIcon?.alt || "Mail Icon", "alt")} style="width: 20px;">`, addAttribute(logoIcon?.imageUrl, "src"), ["home", "service", "project", "article", "contact"].map((item) => renderTemplate`<li class="group"> <a class="hover:text-red-500 h-[2px] w-0 group-hover:w-full transition-all duration-300 font-bold"${addAttribute(`/${item === "home" ? "" : item}`, "href")}>${item}</a> <div class=" bg-red-600 h-[2px] w-0 group-hover:w-full transition-all duration-300"></div> </li>`), ["home", "service", "project", "contact"].map((item) => renderTemplate`<li class="group"> <a class="hover:text-red-500 font-bold"${addAttribute(`/${item === "home" ? "" : item}`, "href")}>${item}</a> <div class=" bg-red-600 h-[2px] w-0 group-hover:w-full transition-all duration-300"></div> </li>`));
}, "/workspaces/website/src/components/Navbar.astro", void 0);

const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Footer;
  const { slug } = Astro2.params;
  const logoetos = `*[_type == "media" && slug.current == "logo"][0] {
  title,
  "imageUrl": image.asset->url,
  alt
}`;
  const logoIcon = await client.fetch(logoetos, { slug });
  return renderTemplate`<!-- footer -->${maybeRenderHead()}<footer class="bg-[#f2f4f5] dark:bg-slate-950 pt-24 pb-12 border-t border-[#e3bebb]/15"> <div class="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-7xl mx-auto px-8"> <div class="col-span-1 md:col-span-1"> <div class="w-[180px] h-12 mb-8"> ${logoIcon.imageUrl && renderTemplate`<img${addAttribute(logoIcon.imageUrl, "src")}${addAttribute(logoIcon?.alt || "Etos Jaya Utama", "alt")}>`} </div> <p class="text-secondary dark:text-slate-500 font-brand text-sm uppercase tracking-wider leading-relaxed mb-8">
Memberikan keunggulan teknis dan presisi operasional untuk kemajuan industri nasional.
</p> <!-- <div class="flex gap-4">
<a class="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center hover:bg-primary hover:text-white transition-colors" href="#">
<span class="material-symbols-outlined text-sm">share</span>
</a>
<a class="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center hover:bg-primary hover:text-white transition-colors" href="#">
<span class="material-symbols-outlined text-sm">public</span>
</a>
</div> --> </div> <div> <h4 class="font-bold text-surface-bright font-brand mb-8 tracking-widest text-xs uppercase">Core Services</h4> <ul class="space-y-4"> <li class="text-[#546067] dark:text-slate-500 hover:text-[#005066] transition-colors inline-block font-brand text-sm uppercase tracking-wider">Consulting</li> <br> <li class="text-[#546067] dark:text-slate-500 hover:text-[#005066] transition-colors inline-block font-brand text-sm uppercase tracking-wider">Design Engineering</li> <li class="text-[#546067] dark:text-slate-500 hover:text-[#005066] transition-colors inline-block font-brand text-sm uppercase tracking-wider">Supply Procurument</li> </ul> </div> <div> <h4 class="font-bold text-surface-bright font-brand mb-8 tracking-widest text-xs uppercase">Certifications</h4> <ul class="space-y-4"> <li class="text-[#546067] dark:text-slate-500 hover:text-[#005066] transition-colors inline-block font-brand text-sm uppercase tracking-wider">NFPA Member</li> <!-- <li><a class="text-[#546067] dark:text-slate-500 hover:text-[#005066] transition-colors inline-block font-brand text-sm uppercase tracking-wider">ISO 9001 Compliance</li>
<li><a class="text-[#546067] dark:text-slate-500 hover:text-[#005066] transition-colors inline-block font-brand text-sm uppercase tracking-wider">Privacy Policy</li> --> </ul> </div> <div> <h4 class="font-bold text-surface-bright font-brand mb-8 tracking-widest text-xs uppercase">Office Hub</h4> <div class="space-y-4 text-[#546067] dark:text-slate-500 font-['Plus_Jakarta_Sans'] text-sm uppercase tracking-wider leading-relaxed"> <p>GD AKA Bangka Raya <br>Jakarta Selatan, DKI Jakarta 12720<br>Indonesia</p> <p class="pt-4">T: +62 858-9922-5363<br>E: <a href="mailto:etosjayautama@yahoo.com" class="hover:text-primary transition-colors">etosjayautama@yahoo.com</a></p> </div> </div> </div> <div class="max-w-7xl mx-auto px-8 mt-24 pt-8 border-t border-outline-variant/10 flex flex-col md:flex-row justify-between items-center gap-4"> <p class="text-[#546067] dark:text-slate-500 font-['Plus_Jakarta_Sans'] text-sm uppercase tracking-wider">
© 2026 Etos Jaya Utama. All Rights Reserved. Consulting, Design Engineering &amp; Supply Procurument.
</p> </div> </footer>`;
}, "/workspaces/website/src/components/Footer.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Layout;
  const { title, description } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="id"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" href="/logo-etos.svg"><link rel="stylesheet" href="https://unpkg.com/aos@2.3.4/dist/aos.css"><meta name="Etos Jaya Utama"', "><title>", '</title><meta name="description"', '><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap" rel="stylesheet">', "</head> <body> ", " ", " ", ' <script>\n  document.addEventListener("DOMContentLoaded", () => {\n    const animatedElements = document.querySelectorAll(\n      ".reveal-up, .zoom-in, .fade-in"\n    );\n\n    const observer = new IntersectionObserver(\n      (entries) => {\n        entries.forEach((entry) => {\n          if (entry.isIntersecting) {\n            entry.target.classList.add("active");\n          } else {\n            entry.target.classList.remove("active");\n          }\n        });\n      },\n      {\n        threshold: 0.2,\n      }\n    );\n\n    animatedElements.forEach((el) => observer.observe(el));\n  });\n\n  document.addEventListener("astro:after-swap", () => {\n    const animatedElements = document.querySelectorAll(\n      ".reveal-up, .zoom-in, .fade-in"\n    );\n\n    const observer = new IntersectionObserver(\n      (entries) => {\n        entries.forEach((entry) => {\n          if (entry.isIntersecting) {\n            entry.target.classList.add("active");\n          } else {\n            entry.target.classList.remove("active");\n          }\n        });\n      },\n      {\n        threshold: 0.2,\n      }\n    );\n\n    animatedElements.forEach((el) => observer.observe(el));\n  });\n<\/script> </body> </html>'])), addAttribute(Astro2.generator, "content"), title, addAttribute(description, "content"), renderHead(), renderComponent($$result, "Navbar", $$Navbar, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}));
}, "/workspaces/website/src/layouts/Layout.astro", void 0);

const $$Home = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Home;
  const { slug } = Astro2.params;
  const query = `*[_type == "media" && slug.current == "hero"][0] {
  title,
  "imageUrl": image.asset->url,
  alt
}`;
  const abbottQuery = `*[_type == "media" && slug.current == "abbott"][0] {
  title,
  "imageUrl": image.asset->url,
  alt
}`;
  const wahanaQuery = `*[_type == "media" && slug.current == "wahana"][0] {
  title,
  "imageUrl": image.asset->url,
  alt
}`;
  const ammanQuery = `*[_type == "media" && slug.current == "amman"][0] {
  title,
  "imageUrl": image.asset->url,
  alt
}`;
  const basQuery = `*[_type == "media" && slug.current == "bas"][0] {
  title,
  "imageUrl": image.asset->url,
  alt
}`;
  const baliQuery = `*[_type == "media" && slug.current == "balihai"][0] {
  title,
  "imageUrl": image.asset->url,
  alt
}`;
  const bdxQuery = `*[_type == "media" && slug.current == "bdx"][0] {
  title,
  "imageUrl": image.asset->url,
  alt
}`;
  const bkpQuery = `*[_type == "media" && slug.current == "bkp"][0] {
  title,
  "imageUrl": image.asset->url,
  alt
}`;
  const breadQuery = `*[_type == "media" && slug.current == "bread"][0] {
  title,
  "imageUrl": image.asset->url,
  alt
}`;
  const ciraQuery = `*[_type == "media" && slug.current == "cira"][0] {
  title,
  "imageUrl": image.asset->url,
  alt
}`;
  const dcsQuery = `*[_type == "media" && slug.current == "dcs"][0] {
  title,
  "imageUrl": image.asset->url,
  alt
}`;
  const energizerQuery = `*[_type == "media" && slug.current == "energizer"][0] {
  title,
  "imageUrl": image.asset->url,
  alt
}`;
  const grhaQuery = `*[_type == "media" && slug.current == "grha"][0] {
  title,
  "imageUrl": image.asset->url,
  alt
}`;
  const consulQuery = `*[_type == "media" && slug.current == "consul"][0] {
  title,
  "imageUrl": image.asset->url,
  alt
}`;
  const designQuery = `*[_type == "media" && slug.current == "design"][0] {
  title,
  "imageUrl": image.asset->url,
  alt
}`;
  const mepQuery = `*[_type == "media" && slug.current == "mep"][0] {
  title,
  "imageUrl": image.asset->url,
  alt
}`;
  const firealarmQuery = `*[_type == "media" && slug.current == "firealarm"][0] {
  title,
  "imageUrl": image.asset->url,
  alt
}`;
  const swayQuery = `*[_type == "media" && slug.current == "sway"][0] {
  title,
  "imageUrl": image.asset->url,
  alt
}`;
  const watersparyQuery = `*[_type == "media" && slug.current == "waterspary"][0] {
  title,
  "imageUrl": image.asset->url,
  alt
}`;
  const ggpQuery = `*[_type == "media" && slug.current == "procurument"][0] {
  title,
  "imageUrl": image.asset->url,
  alt
}`;
  const media = await client.fetch(query, { slug });
  const abbott = await client.fetch(abbottQuery, { slug });
  const wahana = await client.fetch(wahanaQuery, { slug });
  const amman = await client.fetch(ammanQuery, { slug });
  const bas = await client.fetch(basQuery, { slug });
  const bali = await client.fetch(baliQuery, { slug });
  const bdx = await client.fetch(bdxQuery, { slug });
  const bkp = await client.fetch(bkpQuery, { slug });
  const bread = await client.fetch(breadQuery, { slug });
  const cira = await client.fetch(ciraQuery, { slug });
  const dcs = await client.fetch(dcsQuery, { slug });
  const energizer = await client.fetch(energizerQuery, { slug });
  const grha = await client.fetch(grhaQuery, { slug });
  const consul = await client.fetch(consulQuery, { slug });
  const design = await client.fetch(designQuery, { slug });
  const mep = await client.fetch(mepQuery, { slug });
  const fireAlarm = await client.fetch(firealarmQuery, { slug });
  const sway = await client.fetch(swayQuery, { slug });
  const waterspary = await client.fetch(watersparyQuery, { slug });
  const ggp = await client.fetch(ggpQuery, { slug });
  if (!media) {
    return Astro2.redirect("/404");
  }
  return renderTemplate`${maybeRenderHead()}<main> <!-- hero section --> <section class="relative min-h-[921px] flex items-center pb-12 overflow-hidden -mt-25"> <div class="absolute inset-0 z-0"> ${media.imageUrl && renderTemplate`<img${addAttribute(media.imageUrl, "src")}${addAttribute(media.alt || media.title, "alt")} class="w-full h-full object-cover object-center">`} <div class="w-full h-96 object-cover rounded-lg"></div> <!-- <div class="absolute inset-0 bg-gradient-to-r from-surface via-surface/0.9 "></div> --> <div class="absolute inset-0 bg-on-surface/70"></div> </div> <div class="relative z-10 max-w-7xl mx-auto px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"> <div class="lg:col-span-8 flex flex-col justify-start"> <span class="text-on-primary font-bold font-brand tracking-[0.3em] uppercase text-xs mb-4 block reveal-up">Precision Engineering Indonesia</span> <h1 class="text-[clamp(2.5rem,8vw,4.5rem)] font-extrabold font-heading leading-[0.95] tracking-tighter text-on-primary mb-8 reveal-up">
Membangun Masa Depan<br> <span class="text-primary reveal-up">Industri Presisi.</span> </h1> <p class="text-on-primary font-sans text-lg max-w-xl mb-10 leading-relaxed reveal-up">
Etos Jaya Utama menghadirkan keunggulan teknis melalui solusi manufaktur canggih, manajemen proyek industri, dan standar kualitas internasional.
</p> <div class="flex flex-wrap gap-4"> <button class="bg-primary text-on-primary px-8 py-4 rounded-md font-bold transition-all hover:bg-primary-container shadow-[0px_12px_32px_rgba(152,0,27,0.2)] cursor-pointer reveal-up font-brand"><a href="/contact">
Hubungi Kami
</a> </button> <button class="bg-surface-container-high text-on-surface px-8 py-4 rounded-md font-bold transition-all hover:bg-surface-container-highest cursor-pointer reveal-up font-brand"> <a href="/about" class="capitalize">profil perusahaan</a> </button> </div> </div> <div class="lg:col-span-4 hidden lg:flex items-start pb-50 reveal-up"> <div class="p-8 bg-surface-container-lowest shadow-[0px_12px_32px_rgba(25,28,29,0.06)] rounded-xl border-l-4 border-primary"> <h3 class="text-4xl font-black text-primary font-heading mb-1">2+</h3> <p class="text-sm font-bold uppercase tracking-widest text-on-surface-variant">Tahun Pengalaman</p> <div class="mt-4 pt-4 border-t border-outline-variant/15 text-xs text-secondary leading-relaxed font-brand">
Mitra terpercaya bagi berbagai sektor di seluruh Indonesia.
</div> </div> </div> </div> </section> <!-- service section --> <section class="py-32 bg-background reveal-up"> <div class="max-w-7xl mx-auto px-8"> <div class="flex flex-col md:flex-row justify-between items-end mb-20 gap-8"> <div class="max-w-2xl"> <span class="label-md uppercase tracking-widest font-brand text-on-surface-variant font-bold mb-4 block">Layanan Kami</span> <h2 class="text-4xl md:text-5xl font-extrabold font-heading tracking-tighter leading-tight">Solusi Terintegrasi Untuk Kompleksitas Industri</h2> </div> <div class="text-secondary text-sm font-medium font-brand border-l-3 border-primary pl-2 py-5">
Kami memastikan setiap komponen diproduksi <br> dengan toleransi mikron demi performa optimal.
</div> </div> <div class="grid grid-cols-1 md:grid-cols-3 gap-1"> <!-- Service Card 1 --> <div class="group relative bg-surface-container-lowest p-10 hover:bg-primary transition-all duration-500 overflow-hidden rounded-sm
hover:cursor-pointer flex flex-col justify-between h-full"> <h1 class="material-symbols-outlined text-4xl font-heading text-primary group-hover:text-on-primary lower mb-8 block transition-colors">Consulting</h1> <h3 class="text-xl font-bold mb-4 font-sans group-hover:text-on-primary transition-colors capitalize">konsultasi dengan ahli</h3> <p class="text-secondary group-hover:text-on-primary/80 font-brand text-justify transition-colors leading-relaxed mb-8">
Kalkulasi efisiensi energi, mitigasi risiko operasional, dan kepatuhan standar teknis internasional menyatu dalam blueprint rekayasa jaringan kelistrikan, sistem mekanis, serta jalur distribusi air dan fluida.
</p> <div class="w-full aspect-video bg-surface-container rounded-sm overflow-hidden opacity-50 group-hover:opacity-20 transition-opacity"> <img alt="Tim engineer PT Etos Jaya Utama sedang melakukan konsultasi desain proyek industri" class="w-full h-full object-cover"${addAttribute(consul?.imageUrl, "src")}> </div> </div> <!-- Service Card 2 --> <div class="group relative bg-surface-container-lowest p-10 hover:bg-primary transition-all duration-500 overflow-hidden
rounded-sm 
hover:cursor-pointer flex flex-col justify-between h-full"> <h1 class="material-symbols-outlined text-4xl  font-heading text-primary group-hover:text-on-primary mb-8 block transition-colors capitalize">Design Engineering</h1> <h3 class="text-xl font-bold mb-4 group-hover:text-on-primary font-sans transition-colors capitalize">Fabrication &amp; Assembly</h3> <p class="text-secondary group-hover:text-on-primary/80 font-brand text-justify transition-colors leading-relaxed mb-8">
Jaringan distribusi listrik panel utama, sirkulasi tata udara massal, deteksi dini penanggulangan api, hingga jalur pipa bertekanan tinggi beroperasi secara presisi untuk stabilitas jangka panjang.
</p> <div class="w-full aspect-video bg-surface-container rounded-sm overflow-hidden opacity-50 group-hover:opacity-30 transition-opacity"> <img alt="Fabrication" class="h-48 w-full object-cover" data-alt="industrial welder working on a large steel frame with bright blue sparks and professional safety gear"${addAttribute(design?.imageUrl, "src")}> </div> </div> <!-- Service Card 3 --> <div class="group relative bg-surface-container-lowest p-10 hover:bg-primary transition-all duration-500 overflow-hidden
rounded-sm
hover:cursor-pointer flex flex-col justify-between h-full"> <h1 class="material-symbols-outlined text-4xl text-primary font-heading group-hover:text-on-primary mb-8 block transition-colors capitalize">Supply Procurument</h1> <h3 class="text-xl font-bold mb-4 group-hover:text-on-primary font-sans transition-colors capitalize">Supply Chain Management</h3> <p class="text-secondary group-hover:text-on-primary/80 font-brand text-justify transition-colors leading-relaxed mb-8">
Komponen gardu listrik, kabel industrial berlapis pelindung, katup kendali otomatis, serta pompa transfer cairan heavy-duty siap menjaga keandalan operasional di area kerja dengan tingkat korosi dan suhu ekstrem.
</p> <div class="w-full aspect-video bg-surface-container aspect-video rounded-sm overflow-hidden opacity-50 group-hover:opacity-20 transition-opacity"> <img alt="Supply Chain" class="w-full h-full object-cover object-center"${addAttribute(ggp?.imageUrl, "src")}> </div> </div> </div> </div> </section> <!-- visi dan misi --> <!-- <section class="py-32 bg-surface">
<div class="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
<div class="relative">
<div class="aspect-[4/5] bg-surface-container overflow-hidden rounded-lg shadow-xl">
<img alt="Professionalism" class="w-full h-full object-cover grayscale" data-alt="a professional engineer in a white hard hat reviewing technical blueprints on a digital tablet in a clean factory environment" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAaPRh5p5rsrFifd8icaCvlcEt58qcDGqYCJYN1SFL_ASn30tosWzhskGnfvDixGlAgXeL1XDs2UWG8KOibLm8sLydsBspANFHcV5amxOGYKMaZjakwMgIeWpPgWxF1TBYY5VjpUXWAIC8wS5BSTu-NT2HjCyQITQ63P24qt5Oh3OHentuFdiagL-xV1SNWVM1DkHiohPh3NF7Alqp1kFJblSQFWVYxTBbNPVI3YIeR_hW0LSg1hdFo20ymgzYi_6R3vVltP3eDH60"/>
</div>
<div class="absolute -bottom-10 -right-10 w-2/3 aspect-square bg-primary p-1 flex items-center justify-center">
<div class="w-full h-full border border-on-primary/20 flex flex-col items-center justify-center text-on-primary p-8">
<span class="text-6xl font-black mb-2 italic">Quality</span>
<span class="text-xs tracking-[0.4em] uppercase font-bold">Without Compromise</span>
</div>
</div>
</div>
<div class="flex flex-col gap-12">
<div>
<span class="text-primary font-bold uppercase tracking-widest text-xs mb-4 block">Nilai Inti Kami</span>
<h2 class="text-4xl font-extrabold tracking-tighter mb-6 italic">Visi Kami</h2>
<p class="text-on-surface-variant text-xl leading-relaxed">
                            Menjadi pemimpin regional dalam penyediaan solusi engineering yang inovatif, presisi, dan berkelanjutan bagi industri global.
                        </p>
</div>
<div class="space-y-8">
<h2 class="text-2xl font-extrabold tracking-tighter mb-4 border-b border-primary w-fit pr-8 pb-1">Misi Kami</h2>
<div class="grid grid-cols-1 gap-6">
<div class="flex gap-6 items-start">
<span class="text-primary font-black text-2xl">01</span>
<div>
<h4 class="font-bold text-lg mb-1">Inovasi Berkelanjutan</h4>
<p class="text-secondary text-sm">Terus mengadopsi teknologi manufaktur terbaru untuk efisiensi maksimal.</p>
</div>
</div>
<div class="flex gap-6 items-start">
<span class="text-primary font-black text-2xl">02</span>
<div>
<h4 class="font-bold text-lg mb-1">Kualitas Standar Dunia</h4>
<p class="text-secondary text-sm">Menjamin setiap output memenuhi standar ISO dan kepuasan klien.</p>
</div>
</div>
<div class="flex gap-6 items-start">
<span class="text-primary font-black text-2xl">03</span>
<div>
<h4 class="font-bold text-lg mb-1">Keamanan &amp; HSE</h4>
<p class="text-secondary text-sm">Memprioritaskan keselamatan kerja dan kelestarian lingkungan dalam setiap proyek.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section> --> <!-- keunggulan --> <section class="py-32 bg-secondary-container-low reveal-up"> <div class="max-w-7xl mx-auto px-6 md:px-12"> <!-- Header --> <div class="text-center mb-20 reveal-up"> <h2 class="text-5xl font-extrabold text-on-surface mb-8">
Keunggulan Kami
</h2> <h3 class="text-3xl md:text-4xl font-bold text-on-surface mb-8 leading-tight reveal-up">
PT Etos Jaya Utama: Ahli MEP, Civil, Fire Protection, Konsultant HSE
</h3> <p class="fade-in text-lg text-secondary max-w-5xl mx-auto leading-relaxed">
PT Etos Jaya Utama adalah perusahaan berpengalaman di bidang
<strong>MEP (Mechanical, Electrical, Plumbing)</strong>,
<strong>konstruksi civil</strong>,
<strong>sistem proteksi kebakaran</strong>,
<strong>supply & maintenance service</strong>, 
        serta konsultan <strong>fire safety</strong> dan <strong>HSE</strong>.
</p> </div> <!-- Grid Statistik --> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"> <!-- Card 1 --> <div class="zoom-in rounded-3xl border border-on-surface/20 p-12 text-center bg-surface
                  transition-all duration-500 ease-out
                  hover:-translate-y-4 hover:scale-105
                  hover:shadow-[0px_20px_40px_rgba(25,28,29,0.15)]
                  hover:border-primary/40
                  hover:cursor-pointer"> <h4 class="counter text-7xl font-extrabold text-on-surface mb-4" data-target="850" data-suffix="+">0</h4> <p class="text-2xl text-secondary font-medium">Projek Selesai</p> </div> <!-- Card 2 --> <div class="zoom-in rounded-3xl border border-on-surface/20 p-12 text-center bg-surface
                  transition-all duration-500 ease-out
                  hover:-translate-y-4 hover:scale-105
                  hover:shadow-[0px_20px_40px_rgba(25,28,29,0.15)]
                  hover:border-primary/40
                  hover:cursor-pointer"> <h4 class="counter text-7xl font-extrabold text-on-surface mb-4" data-target="99" data-suffix="%">0</h4> <p class="text-2xl text-secondary font-medium">Rating Kepuasan</p> </div> <!-- Card 3 --> <div class="zoom-in rounded-3xl border border-on-surface/20 p-12 text-center bg-surface
                  transition-all duration-500 ease-out
                  hover:-translate-y-4 hover:scale-105
                  hover:shadow-[0px_20px_40px_rgba(25,28,29,0.15)]
                  hover:border-primary/40
                  hover:cursor-pointer"> <h4 class="counter text-7xl font-extrabold text-on-surface mb-4" data-target="50" data-suffix="+">0</h4> <p class="text-2xl text-secondary font-medium">Klien Yang Puas</p> </div> <!-- Card 4 --> <div class="zoom-in rounded-3xl border border-on-surface/20 p-12 text-center bg-surface
                  transition-all duration-500 ease-out
                  hover:-translate-y-4 hover:scale-105
                  hover:shadow-[0px_20px_40px_rgba(25,28,29,0.15)]
                  hover:border-primary/40
                  hover:cursor-pointer"> <h4 class="counter text-7xl font-extrabold text-on-surface mb-4" data-target="50" data-suffix="+">0</h4> <p class="text-2xl text-secondary font-medium">Teknisi Berkualitas</p> </div> </div> </div> </section> <!-- project preview --> <section class="py-32 bg-surface-container-low"> <div class="max-w-7xl mx-auto px-8"> <div class="text-center mb-20"> <span class="text-primary font-bold font-brand uppercase tracking-widest text-xs mb-4 block">Portofolio Proyek</span> <h2 class="text-5xl font-extrabold font-heading tracking-tighter">Proyek Kami</h2> </div> <div class="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-auto md:h-[800px]"> <div class="md:col-span-2 md:row-span-2 relative group overflow-hidden bg-surface-container rounded-lg"> <img alt="MEP" class="w-full h-full object-fit object-center
group-hover:scale-105 transition-transform duration-700"${addAttribute(mep?.imageUrl, "src")}> <div class="absolute inset-0 bg-gradient-to-t from-black/100 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-10 flex flex-col justify-end"> <span class="text-primary-container font-bold text-xs uppercase tracking-widest mb-2">MEP</span> <h3 class="text-white text-2xl font-bold">Mechanical, Electrical Plumbing <br> PT. Diamond Cold Storage</h3> </div> </div> <div class="md:col-span-2 md:row-span-1 relative group overflow-hidden bg-surface-container rounded-sm"> <img alt="Fire Alarm Project" class="w-full h-full object-fit
group-hover:scale-105 transition-transform duration-700"${addAttribute(fireAlarm?.imageUrl, "src")}> <div class="absolute inset-0 bg-gradient-to-t from-black/100 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-10 flex flex-col justify-end"> <span class="text-primary-container font-bold text-xs uppercase tracking-widest mb-2">Fire Alarm</span> <h3 class="text-white text-xl font-bold">Fire Alarm <br> PT. Sukanda Djaya</h3> </div> </div> <div class="md:col-span-1 md:row-span-1 relative group overflow-hidden bg-surface-container rounded-sm"> <img alt="Tech Project" class="w-full h-full object-fit group-hover:scale-105 transition-transform duration-700"${addAttribute(sway?.imageUrl, "src")}> <div class="absolute inset-0 bg-gradient-to-t from-black/100 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-end"> <span class="text-primary-container font-bold text-[10px] uppercase tracking-widest mb-1">Sway Bracing</span> <h3 class="text-white text-lg font-bold leading-tight">Sway Bracing for Pipe Springkler <br> PT. Abbott Indonesia</h3> </div> </div> <div class="md:col-span-1 md:row-span-1 relative group overflow-hidden bg-surface-container rounded-sm"> <img alt="Logistics Project" class="w-full h-full object-fit group-hover:scale-105 transition-transform duration-700"${addAttribute(waterspary?.imageUrl, "src")}> <div class="absolute inset-0 bg-gradient-to-t from-black/100 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-6 flex flex-col justify-end"> <span class="text-primary-container font-bold text-[10px] uppercase tracking-widest mb-1">Water Spary & IGS300</span> <h3 class="text-white text-lg font-bold leading-tight">Water Spray & IGS300 <br> PT. Krakatau Chandra Energi</h3> </div> </div> </div> </div> </section> <!-- client --> <section class="py-16 bg-surface overflow-hidden border-y border-outline-variant/10"> <div class="max-w-7xl mx-auto px-8 mb-8 text-center"> <span class="text-[10px] font-label uppercase tracking-[0.2em] text-secondary font-brand">Dipercaya oleh Pemimpin Industri</span> </div> <div class="overflow-hidden"> <div class="flex gap-10 animate-infinite-scroll whitespace-nowrap items-center opacity-40 grayscale hover:grayscale-0 cursor-pointer transition-all"> <div class="flex items-center gap-5"> <div class="w-40 h-12 flex items-center justify-center"></div> <div class="w-32 h-20 rounded-2xl p-3 bg-secondary/0.5 rounded flex items-center justify-center font-black text-secondary italic"> ${abbott.imageUrl && renderTemplate`<img${addAttribute(abbott.imageUrl, "src")}${addAttribute(abbott.alt || abbott.title, "alt")} class="w-full h-full object-contain mix-blend-multiply">`} </div> <div class="w-32 h-20 rounded-2xl bg-secondary/0.5 rounded flex items-center justify-center font-black text-secondary italic"> ${wahana.imageUrl && renderTemplate`<img${addAttribute(wahana.imageUrl, "src")}${addAttribute(wahana.alt || wahana.title, "alt")} class="w-full h-full object-contain mix-blend-multiply">`} </div> <div class="w-32 h-20 rounded-2xl bg-secondary/0.5 rounded flex items-center justify-center font-black text-secondary italic"> ${amman.imageUrl && renderTemplate`<img${addAttribute(amman.imageUrl, "src")}${addAttribute(amman.alt || amman.title, "alt")} class="w-full h-full object-contain mix-blend-multiply">`} </div> <div class="w-32 h-20 rounded-2xl bg-secondary/0.5 rounded flex items-center justify-center font-black text-secondary italic"> ${bas.imageUrl && renderTemplate`<img${addAttribute(bas.imageUrl, "src")}${addAttribute(bas.alt || bas.title, "alt")} class="w-full h-full object-contain mix-blend-multiply">`} </div> <div class="w-32 h-20 rounded-2xl bg-secondary/0.5 rounded flex items-center justify-center font-black text-secondary italic"> ${bali.imageUrl && renderTemplate`<img${addAttribute(bali.imageUrl, "src")}${addAttribute(bali.alt || bali.title, "alt")} class="w-full h-full object-contain mix-blend-multiply">`} </div> </div> <!-- Duplicate for seamless scroll --> <div aria-hidden="true" class="flex items-center gap-5"> <div class="w-32 h-12 bg-secondary/0.5 rounded-2xl rounded flex items-center justify-center font-black text-secondary italic"> ${bdx.imageUrl && renderTemplate`<img${addAttribute(bdx.imageUrl, "src")}${addAttribute(bdx.alt || bdx.title, "alt")} class="w-full h-full object-contain mix-blend-multiply">`} </div> <div class="w-32 h-12 bg-secondary/0.5 rounded-2xl rounded flex items-center justify-center font-black text-secondary italic"> ${bkp.imageUrl && renderTemplate`<img${addAttribute(bkp.imageUrl, "src")}${addAttribute(bkp.alt || bkp.title, "alt")} class="w-full h-full object-contain mix-blend-multiply">`} </div> <div class="w-32 h-12 bg-secondary/0.5 rounded-2xl rounded flex items-center justify-center font-black text-secondary italic"> ${bread.imageUrl && renderTemplate`<img${addAttribute(bread.imageUrl, "src")}${addAttribute(bread.alt || bread.title, "alt")} class="w-full h-full object-contain mix-blend-multiply">`} </div> <div class="w-32 h-12 bg-secondary/0.5 rounded-2xl rounded flex items-center justify-center font-black text-secondary italic"> ${cira.imageUrl && renderTemplate`<img${addAttribute(cira.imageUrl, "src")}${addAttribute(cira.alt || cira.title, "alt")} class="w-full h-full object-contain mix-blend-multiply">`} </div> <div class="w-32 h-12 bg-secondary/0.5 rounded-2xl rounded flex items-center justify-center font-black text-secondary italic"> ${dcs.imageUrl && renderTemplate`<img${addAttribute(dcs.imageUrl, "src")}${addAttribute(dcs.alt || dcs.title, "alt")} class="w-full h-full object-contain mix-blend-multiply">`} </div> <div class="w-32 h-12 bg-secondary/0.5 rounded-2xl rounded flex items-center justify-center font-black text-secondary italic"> ${energizer.imageUrl && renderTemplate`<img${addAttribute(energizer.imageUrl, "src")}${addAttribute(energizer.alt || energizer.title, "alt")} class="w-full h-full object-contain mix-blend-multiply">`} </div> <div class="w-32 h-12 bg-secondary/0.5 rounded-2xl rounded flex items-center justify-center font-black text-secondary italic"> ${grha.imageUrl && renderTemplate`<img${addAttribute(grha.imageUrl, "src")}${addAttribute(grha.alt || grha.title, "alt")} class="w-full h-full object-contain mix-blend-multiply">`} </div> </div> </div> </div> </section> </main> ${renderScript($$result, "/workspaces/website/src/pages/home.astro?astro&type=script&index=0&lang.ts")}`;
}, "/workspaces/website/src/pages/home.astro", void 0);

const prerender = false;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "PT Etos Jaya Utama | Manufaktur Presisi & Kontraktor MEP Industri", "description": "PT Etos Jaya Utama menyediakan solusi manufaktur presisi, rekayasa desain sistem mekanikal elektrikal (MEP), manajemen proyek, dan pengadaan komponen industri bersertifikat." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Home", $$Home, {})} ` })}`;
}, "/workspaces/website/src/pages/index.astro", void 0);

const $$file = "/workspaces/website/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
