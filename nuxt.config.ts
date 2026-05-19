// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2025-07-15',
    devtools: { enabled: true },

    modules: [
        '@nuxt/eslint',
        '@nuxt/fonts',
        '@nuxt/hints',
        '@nuxt/icon',
        '@nuxt/image',
        '@nuxtjs/plausible',
        '@nuxtjs/seo',
        'nuxt-i18n-micro'
    ],

    eslint: {
        config: {
            stylistic: {
                indent: 4,
                semi: true,
                quotes: 'double'
            }
        }
    },

    vite: {
        optimizeDeps: {
            include: [
                '@plausible-analytics/tracker',
                '@vue/devtools-core',
                '@vue/devtools-kit',
            ]
        }
    },

    site: {
        url: 'https://epk.classydev.fr'
    },

    css: ['~/assets/css/main.css'],

    image: {
        format: ['webp']
    },

    i18n: {
        locales: [
            { code: 'en', iso: 'en-US', dir: 'ltr' },
            { code: 'fr', iso: 'fr-FR', dir: 'ltr' }
        ],
        defaultLocale: 'en',
        translationDir: 'locales',
        meta: true
    },
});