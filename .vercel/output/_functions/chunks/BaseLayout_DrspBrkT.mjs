import { c as createAstro, a as createComponent, e as renderTemplate, f as renderComponent, b as renderSlot, r as renderHead, u as unescapeHTML, d as addAttribute } from './astro/server_CzI7Pzyy.mjs';
import 'kleur/colors';
import { $ as $$Footer, a as $$Navbar } from './Footer_jqqEqqi6.mjs';
import { $ as $$CookieConsent } from './CookieConsent_U7BExp34.mjs';
import { $ as $$WhatsAppButton } from './WhatsAppButton_EUvBSPkM.mjs';
/* empty css                          */

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://esva.pe");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { pageTitle, metaDescription, ogImage, canonicalUrl } = Astro2.props;
  const siteTitle = "ESVA";
  const fullTitle = `${pageTitle} | ${siteTitle}`;
  const absoluteOgImage = ogImage ? new URL(ogImage, Astro2.site).href : new URL("/LogoESVA.png", Astro2.site).href;
  const finalCanonicalUrl = canonicalUrl ? new URL(canonicalUrl.toString(), Astro2.site).href : Astro2.url.href;
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "ESVA Servicios Generales EIRL",
    "image": "https://esva.pe/LogoESVA.png",
    "url": "https://esva.pe",
    "telephone": "+51985834886",
    "description": "Ofrecemos soluciones confiables en soporte t\xE9cnico, seguridad electr\xF3nica, redes, conectividad y recuperaci\xF3n de datos para hogares y empresas en Piura.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Urb Micaela Bastidas II Etapa Mz E Lt 30, Veintiseis de Octubre",
      "addressLocality": "Piura",
      "addressRegion": "Piura",
      "addressCountry": "PE"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday"
      ],
      "opens": "09:00",
      "closes": "20:00"
    }
  };
  return renderTemplate(_a || (_a = __template(['<html lang="es"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><!-- SEO Meta Tags --><title>', '</title><meta name="description"', '><link rel="icon" type="image/svg+xml" href="/faviconESVANUEVO.svg"><link rel="canonical"', '><!-- Open Graph (Facebook, LinkedIn, etc.) --><meta property="og:title"', '><meta property="og:description"', '><meta property="og:url"', '><meta property="og:image"', '><meta property="og:type" content="article"><meta property="og:site_name"', '><!-- Twitter Card --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title"', '><meta name="twitter:description"', '><meta name="twitter:image"', `><!-- Scripts de Analytics/GTM --><script async src="https://www.googletagmanager.com/gtag/js?id=G-365MN03V4H"><\/script><script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-365MN03V4H');
  <\/script><script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-W7XKNX23');<\/script><!-- Datos Estructurados (JSON-LD) --><script type="application/ld+json">`, "<\/script>", '</head> <body> <!-- Google Tag Manager (noscript) --> <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-W7XKNX23" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript> ', ' <main class="pt-8 md:pt-12"> ', " </main> ", " ", " ", " </body></html>"])), fullTitle, addAttribute(metaDescription || schema.description, "content"), addAttribute(finalCanonicalUrl, "href"), addAttribute(pageTitle, "content"), addAttribute(metaDescription || schema.description, "content"), addAttribute(finalCanonicalUrl, "content"), addAttribute(absoluteOgImage, "content"), addAttribute(siteTitle, "content"), addAttribute(pageTitle, "content"), addAttribute(metaDescription || schema.description, "content"), addAttribute(absoluteOgImage, "content"), unescapeHTML(JSON.stringify(schema)), renderHead(), renderComponent($$result, "Navbar", $$Navbar, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}), renderComponent($$result, "WhatsAppButton", $$WhatsAppButton, {}), renderComponent($$result, "CookieConsent", $$CookieConsent, {}));
}, "C:/Users/ZERO/Documents/webesva/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $ };
