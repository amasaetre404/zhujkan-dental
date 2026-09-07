import tailwindcss from '@tailwindcss/vite'

// Заменяется реальным доменом через NUXT_SITE_URL перед публикацией.
const siteUrl = process.env.NUXT_SITE_URL || 'https://zhujkan.example'

export default defineNuxtConfig({
  compatibilityDate: '2026-09-01',
  devtools: { enabled: true },
  modules: ['@nuxt/image', '@nuxtjs/seo'],
  css: ['~/assets/css/main.css'],
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
      ],
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
  site: {
    url: siteUrl,
    name: 'Жуйкан — стоматология в Хэйхэ',
    description: 'Лечение и протезирование зубов в Китае с полным сопровождением из Благовещенска.',
    defaultLocale: 'ru',
  },
  schemaOrg: {
    identity: {
      type: 'Organization',
      name: 'Стоматологическая клиника Жуйкан',
      url: siteUrl,
    },
  },
  sitemap: {
    zeroRuntime: true,
    urls: [
      '/services/implantation',
      '/services/prosthetics',
      '/services/crowns',
      '/services/treatment',
      '/services/extraction',
      '/services/orthodontics',
      '/doctors/implantologist',
      '/doctors/prosthodontist',
      '/doctors/therapist',
      '/blog/how-to-prepare',
      '/blog/implant-or-bridge',
      '/blog/dental-ct',
    ],
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
    '/privacy': { robots: false },
  },
})
