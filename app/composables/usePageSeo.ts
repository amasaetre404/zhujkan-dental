/** Shared metadata for the five public landing pages; query parameters are UI state. */
export function usePageSeo(title: string, description: string, path: string) {
  const site = useSiteConfig()
  const url = new URL(path, site.url).href
  const image = new URL('/images/clinic/clinic-exterior-front.png', site.url).href

  useHead({ titleTemplate: null, link: [{ rel: 'canonical', href: url }] })
  useSeoMeta({
    title,
    description,
    ogTitle: title,
    ogDescription: description,
    ogUrl: url,
    ogType: 'website',
    ogLocale: 'ru_RU',
    ogSiteName: 'ГидМед',
    ogImage: image,
    ogImageAlt: 'Фасад клиники Жуйкан в Хэйхэ',
    twitterCard: 'summary_large_image',
    twitterTitle: title,
    twitterDescription: description,
    twitterImage: image,
  })
}
