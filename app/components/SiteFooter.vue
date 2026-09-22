<script setup lang="ts">
import { contacts } from '~/data/contacts'
</script>

<template>
  <footer class="site-footer text-ink">
    <div class="mx-auto max-w-[1440px] px-5 pb-7 pt-14 md:px-8 lg:px-12 lg:pb-8 lg:pt-20">
      <div class="flex flex-col gap-10 border-b border-ink/10 pb-7 xl:flex-row xl:justify-between xl:gap-16 lg:pb-8">
        <div class="max-w-[310px] shrink-0">
          <LogoMark />
          <p class="mt-5 max-w-[310px] text-sm leading-6 text-[#59657b]">Стоматологическое лечение в Хэйхэ с предварительным расчётом и сопровождением из Благовещенска.</p>
          <nav aria-label="Мессенджеры и карты" class="mt-5 flex flex-wrap gap-1">
            <a
              v-for="item in [
                { label: 'Telegram', href: contacts.telegram, icon: '/icons/telegram-official.svg' },
                { label: 'MAX', href: contacts.max, icon: '/icons/max-official.svg' },
                { label: 'WhatsApp', href: contacts.whatsapp, icon: '/icons/whatsapp.svg' },
                { label: '2ГИС', href: contacts.twoGis, icon: '/icons/2gis.png' },
                { label: 'Яндекс Карты', href: contacts.yandex, icon: '/icons/yandex-maps.svg' },
              ]"
              :key="item.label"
              :href="item.href"
              :aria-label="item.label"
              :title="item.label"
              target="_blank"
              rel="noopener noreferrer"
              class="grid size-11 place-items-center rounded-xl border border-ink/10 bg-white transition-colors hover:border-brand/30 hover:bg-white"
            >
              <img :src="item.icon" alt="" width="24" height="24" class="size-6 object-contain" />
            </a>
          </nav>
        </div>
        <div class="grid grid-cols-2 gap-x-6 gap-y-10 sm:grid-cols-[1fr_1.2fr_1.6fr] xl:grid-cols-[max-content_max-content_max-content] xl:gap-x-20">
        <div>
          <h2 class="footer-heading">Пациентам</h2>
          <nav aria-label="Пациентам" class="footer-links">
            <NuxtLink to="/services">Услуги и цены</NuxtLink>
            <NuxtLink to="/#process">Как проходит лечение</NuxtLink>
            <NuxtLink to="/faq">Вопросы и ответы</NuxtLink>
          </nav>
        </div>
        <div>
          <h2 class="footer-heading">О клинике</h2>
          <nav aria-label="О клинике" class="footer-links">
            <NuxtLink to="/clinic">Клиника и врачи</NuxtLink>
            <NuxtLink to="/clinic#clinic-photos">Фотографии клиники</NuxtLink>
            <NuxtLink to="/clinic#doctors">Специалисты</NuxtLink>
            <NuxtLink to="/clinic#documents">Лицензии и сертификаты</NuxtLink>
          </nav>
        </div>
        <div class="col-span-2 sm:col-span-1">
          <h2 class="footer-heading">Контакты</h2>
          <address class="footer-links not-italic">
            <NuxtLink to="/contacts">{{ contacts.address }}</NuxtLink>
            <a :href="contacts.phoneHref">{{ contacts.phone }}</a>
            <a :href="contacts.officePhoneHref">{{ contacts.officePhone }}</a>
            <a :href="'mailto:' + contacts.email">{{ contacts.email }}</a>
          </address>
        </div>
        </div>
      </div>
      <div class="flex flex-col gap-4 pt-7 text-xs leading-5 text-[#657086] md:flex-row md:items-center md:justify-between">
        <div><p>© {{ new Date().getFullYear() }} ГидМед</p><p class="mt-1">Организация поездок — <a href="https://turburo-prof.ru/" class="underline decoration-current/30 underline-offset-2 hover:decoration-current">Турбюро Профсоюзы</a></p></div>
        <div class="flex flex-col items-start gap-1 md:items-end md:text-right">
          <div class="flex flex-wrap gap-x-4 gap-y-1 md:justify-end">
            <NuxtLink to="/privacy">Политика конфиденциальности</NuxtLink>
          </div>
          <span>Информация не является публичной офертой</span>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  background: linear-gradient(180deg, #f5f7fb 0%, #edf2f9 38%, #e9eff8 100%);
}
.footer-heading {
  font-size: 11px;
  font-weight: 600;
  letter-spacing: .14em;
  text-transform: uppercase;
  color: #59657b;
  padding-top: 6px;
}
.footer-links {
  display: grid;
  gap: 8px;
  margin-top: 20px;
  font-size: 14px;
  color: #344158;
}
.footer-links a { padding-block: 5px; width: fit-content; }
.site-footer :deep(a) { transition: color .18s ease; }
.site-footer :deep(a:hover) { color: #3449c7; }
.site-footer :deep(a:focus-visible) { outline: 2px solid #536bff; outline-offset: 5px; border-radius: 3px; }
@media (prefers-reduced-motion: reduce) {
  .site-footer :deep(a) { transition: none; }
}
</style>
