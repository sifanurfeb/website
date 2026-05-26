import { c as createComponent } from './page-ssr_CZ42SuHD.mjs';
import 'piccolore';
import { g as renderTemplate, a as addAttribute, d as maybeRenderHead, r as renderComponent, f as renderSlot, e as renderHead } from './prerender_Bi9m1rI3.mjs';
import 'clsx';
import { c as client } from './sanity_-uR2p6SE.mjs';

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

export { $$Layout as $ };
