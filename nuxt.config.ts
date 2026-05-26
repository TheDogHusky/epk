// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

    modules: [
      "@nuxt/eslint",
      "@nuxt/fonts",
      "@nuxt/hints",
      "nuxt-i18n-micro",
      "@nuxt/icon",
      "@nuxt/image",
      "@nuxtjs/plausible",
      "@nuxtjs/seo",
      "nuxt-music-flow",
    ],
    devtools: { enabled: true },

    css: ["~/assets/css/main.css"],

    site: {
        url: "https://epk.classydev.fr",
    },

    compatibilityDate: "2025-07-15",

    vite: {
        optimizeDeps: {
            include: [
                "@plausible-analytics/tracker",
                "@vue/devtools-core",
                "@vue/devtools-kit",
            ],
        },
    },

    eslint: {
        config: {
            stylistic: {
                indent: 4,
                semi: true,
                quotes: "double",
            },
        },
    },

    i18n: {
        locales: [
            { code: "en", iso: "en-US", dir: "ltr" },
            { code: "fr", iso: "fr-FR", dir: "ltr" },
        ],
        defaultLocale: "en",
        translationDir: "locales",
        meta: true,
        localeCookie: 'user-locale'
    },

    image: {
        format: ["webp"],
    },

    ogImage: {
        enabled: false,
    },
});