<script setup lang="ts">
import { Clock3, Mail, MapPin, Phone } from '@lucide/vue'
import { contacts, officeHours } from '~/data/contacts'
useSeoMeta({ title: 'Контакты в Благовещенске', description: 'Турбюро Профсоюзы: Благовещенск, Ленина, 120, офис 8. Телефоны, мессенджеры, часы работы и карта проезда.' })
</script>

<template>
  <main class="px-5 pb-16 pt-10 md:px-8 lg:px-12 lg:pb-24 lg:pt-16">
    <div class="mx-auto max-w-[1440px]">
      <div class="grid items-end gap-7 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
        <div><p class="text-sm font-medium text-brand-dark">Контакты</p><h1 class="mt-5 text-[clamp(2.75rem,5vw,5rem)] font-medium leading-[1.04] tracking-[-.055em]">Мы рядом.<br><span class="text-brand-dark">Ещё до поездки</span></h1></div>
        <p class="max-w-xl text-base leading-7 text-ink/60 md:text-lg md:leading-8">Позвоните, напишите или приходите в офис в Благовещенске. Поможем разобраться с подготовкой к лечению и поездкой в Хэйхэ.</p>
      </div>

      <section aria-labelledby="contact-title" class="mt-10 overflow-hidden rounded-[2rem] border border-ink/8 bg-white lg:mt-14">
        <div class="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
          <div class="min-w-0 p-6 md:p-9 lg:p-10">
            <p class="text-sm text-brand-dark">Представительство в России</p>
            <h2 id="contact-title" class="mt-3 text-3xl font-medium tracking-[-.04em] xl:text-4xl">Турбюро Профсоюзы</h2>

            <div class="mt-7 flex gap-3">
              <MapPin aria-hidden="true" class="mt-1 size-5 shrink-0 text-brand" />
              <address class="text-base not-italic leading-7"><span class="font-medium">{{ contacts.address }}</span><br><span class="text-sm text-ink/55">{{ contacts.office }}</span></address>
            </div>

            <div class="mt-5 flex gap-3">
              <Clock3 aria-hidden="true" class="mt-0.5 size-5 shrink-0 text-brand" />
              <div class="min-w-0 flex-1">
                <h3 class="text-sm font-medium">Часы работы</h3>
                <dl class="mt-4 space-y-2.5 text-sm"><div v-for="row in officeHours" :key="row.days" class="flex flex-wrap justify-between gap-x-3 gap-y-1"><dt class="text-ink/60">{{ row.days }}</dt><dd class="whitespace-nowrap tabular-nums">{{ row.hours }}</dd></div></dl>
                <p class="mt-4 text-xs leading-5 text-ink/45">Перерыв в будни: 13:00–14:00. Время Благовещенска (МСК +6).<br>В праздничные дни уточняйте график по телефону.</p>
              </div>
            </div>

            <div class="mt-7 grid gap-6 border-y border-ink/8 py-6 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              <div class="flex gap-3"><Phone aria-hidden="true" class="mt-1 size-5 shrink-0 text-brand" /><div class="min-w-0"><p class="text-xs text-ink/45">Телефоны</p><a :href="contacts.phoneHref" class="mt-2 block whitespace-nowrap text-lg font-medium tracking-[-.025em] hover:text-brand">{{ contacts.phone }}</a><a :href="contacts.officePhoneHref" class="mt-2 block whitespace-nowrap text-sm hover:text-brand">{{ contacts.officePhone }} <span class="text-ink/45">· офис</span></a></div></div>
              <div class="flex gap-3"><Mail aria-hidden="true" class="mt-1 size-5 shrink-0 text-brand" /><div class="min-w-0"><p class="text-xs text-ink/45">Электронная почта</p><a :href="'mailto:'+contacts.email" class="mt-2 block break-all text-sm leading-7 hover:text-brand">{{ contacts.email }}</a></div></div>
            </div>

            <div class="mt-6 flex flex-wrap gap-2">
              <a v-for="item in [{label:'Telegram',url:contacts.telegram,icon:'/icons/telegram-official.svg'},{label:'MAX',url:contacts.max,icon:'/icons/max-official.svg'},{label:'WhatsApp',url:contacts.whatsapp,icon:'/icons/whatsapp.svg'}]" :key="item.label" :href="item.url" target="_blank" rel="noopener noreferrer" class="inline-flex min-h-12 items-center gap-2.5 rounded-xl bg-paper px-3 text-sm font-medium transition-colors hover:bg-brand/10"><img :src="item.icon" alt="" class="size-6 shrink-0 object-contain" />{{ item.label }}</a>
            </div>
            <div class="mt-2 flex gap-2">
              <a v-for="item in [{label:'2ГИС',url:contacts.twoGis,icon:'/icons/2gis.png'},{label:'Яндекс Карты',url:contacts.yandex,icon:'/icons/yandex-maps.svg'}]" :key="item.label" :href="item.url" target="_blank" rel="noopener noreferrer" class="inline-flex min-h-12 items-center gap-2 rounded-xl bg-paper px-3 text-sm font-medium whitespace-nowrap transition-colors hover:bg-brand/10"><img :src="item.icon" alt="" class="size-6 shrink-0 object-contain" />{{ item.label }}</a>
            </div>


          </div>

          <div class="flex min-w-0 flex-col border-t border-ink/8 bg-paper lg:border-l lg:border-t-0">
            <iframe :src="contacts.mapEmbed" title="Карта: Турбюро Профсоюзы, Ленина, 120, Благовещенск" class="min-h-[360px] w-full flex-1 border-0 md:min-h-[440px] lg:min-h-[560px]" allowfullscreen />
          </div>
        </div>
      </section>
    </div>
  </main>
</template>
