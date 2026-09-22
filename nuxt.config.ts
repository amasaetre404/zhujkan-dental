import tailwindcss from '@tailwindcss/vite'

// Заменяется реальным доменом через NUXT_SITE_URL перед публикацией.
const siteUrl = process.env.NUXT_SITE_URL || 'https://gidmed.pro'

export default defineNuxtConfig({
  compatibilityDate: '2026-09-01',
  devtools: { enabled: true },
  modules: ['@nuxt/image', '@nuxtjs/seo'],
  css: ['~/assets/css/main.css'],
  runtimeConfig: {
    public: { metricaId: '' }, // NUXT_PUBLIC_METRICA_ID
  },
  app: {
    head: {
      htmlAttrs: { lang: 'ru' },
      meta: [
        { name: 'theme-color', content: '#4d6bff' },
        { name: 'format-detection', content: 'telephone=no' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'manifest', href: '/site.webmanifest' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap' },
      ],
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
  site: {
    url: siteUrl,
    name: 'ГидМед',
    description: 'Лечение и протезирование зубов в Китае с полным сопровождением из Благовещенска.',
    defaultLocale: 'ru',
  },
  schemaOrg: {
    identity: {
      type: 'Organization',
      name: 'ГидМед — Турбюро Профсоюзы',
      url: siteUrl,
    },
  },
  sitemap: {
    zeroRuntime: true,
    excludeAppSources: true,
    urls: ['/', '/services', '/clinic', '/faq', '/contacts'].map(path => ({ loc: new URL(path, siteUrl).href })),
  },
  robots: {
    // Let crawlers see privacy's noindex and deleted pages' 404 responses.
    // Development/staging protection is provided by the SEO module.
    groups: [{ userAgent: '*', allow: '/' }],
    sitemap: [new URL('/sitemap.xml', siteUrl).href],
  },
  linkChecker: {
    enabled: true,
    failOnError: false,
  },
  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/robots.txt', '/sitemap.xml'],
    },
  },
  routeRules: {
    '/doctors': { redirect: { to: '/clinic#doctors', statusCode: 301 } },
    '/prices': { redirect: { to: '/services', statusCode: 301 } },
    '/privacy': { robots: false },
  },
})
