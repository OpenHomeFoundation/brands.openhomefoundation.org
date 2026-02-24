// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

import { remarkAlert } from "remark-github-blockquote-alert";

import { siteConfig } from "./src/site.config.ts";

// Netlify specific
const isProduction =
  process.env.CONTEXT === "production" || !process.env.CONTEXT;

// https://astro.build/config
export default defineConfig({
  site: siteConfig.site,
  markdown: {
    remarkPlugins: [remarkAlert],
  },
  integrations: [
    starlight({
      title: siteConfig.title,
      description: siteConfig.description,
      titleDelimiter: "-",
      editLink: isProduction
        ? {
            baseUrl: `${siteConfig.github}/edit/main/`,
          }
        : {},
      logo: {
        light: "./src/assets/logo--dark.svg",
        dark: "./src/assets/logo--light.svg",
        replacesTitle: true,
      },
      favicon: "/favicon.svg",
      pagination: siteConfig.pagination,
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: siteConfig.github,
        },
      ],
      head: [
        {
          tag: "meta",
          attrs: {
            name: "robots",
            content: isProduction ? "index, follow" : "noindex, nofollow",
          },
        },
        {
          tag: "script",
          attrs: { type: "application/ld+json" },
          content: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Open Home Foundation",
            url: "https://www.openhomefoundation.org",
            description:
              "The Open Home Foundation fights for the fundamental principles of privacy, choice, and sustainability for smart homes.",
            sameAs: ["https://github.com/OpenHomeFoundation"],
          }),
        },
        {
          tag: "link",
          attrs: {
            rel: "icon",
            href: "/favicon.svg",
          },
        },
        {
          tag: "script",
          content: `document.addEventListener('keydown', function(e) {
						if (e.key === '/' && !['INPUT', 'TEXTAREA', 'SELECT'].includes(document.activeElement?.tagName)) {
							e.preventDefault();
							document.querySelector('button[data-open-modal]')?.click();
						}
					});`,
        },
        {
          tag: "meta",
          attrs: {
            property: "og:image",
            content: `${siteConfig.site}/assets/banner.png`,
          },
        },
        {
          tag: "meta",
          attrs: {
            name: "twitter:image",
            content: `${siteConfig.site}/assets/banner.png`,
          },
        },
        {
          tag: "meta",
          attrs: {
            name: "twitter:card",
            content: "summary_large_image",
          },
        },
      ],
      customCss: ["./src/styles/custom.css"],
      sidebar: [
        {
          label: "Guides",
          autogenerate: { directory: "guides" },
        },
        {
          label: "Open Home Foundation",
          autogenerate: { directory: "open-home-foundation" },
          collapsed: true,
        },
        {
          label: "Home Assistant",
          autogenerate: { directory: "home-assistant" },
          collapsed: true,
        },
        {
          label: "Music Assistant",
          autogenerate: { directory: "music-assistant" },
          collapsed: true,
        },
        {
          label: "ESPHome",
          autogenerate: { directory: "esphome" },
          collapsed: true,
        },
      ],
      components: {
        Head: "./src/components/Head.astro",
      },
    }),
  ],
});
