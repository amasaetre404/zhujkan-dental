<script setup lang="ts">
import ClinicGallery from '~/components/ClinicGallery.vue'
import CoordinatorCta from '~/components/CoordinatorCta.vue'
import { ArrowDown, MapPin } from '@lucide/vue'
import { clinicDocuments } from '~/data/clinic-documents'
useSeoMeta({ title: 'Клиника и врачи — Жуйкан в Хэйхэ', description: 'Познакомьтесь с клиникой Жуйкан: фотографии, специалисты, лицензии и сертификаты.' })
const photos = [
  { image: '/images/clinic/reception-lobby-wide.png', alt: 'Холл и стойка регистрации', caption: 'Знакомство начинается здесь' },
  { image: '/images/clinic/dental-room-wide.png', alt: 'Стоматологический кабинет', caption: 'Кабинеты для приёма' },
  { image: '/images/clinic/waiting-area-wide.png', alt: 'Зал ожидания', caption: 'Пространство для ожидания' },
  { image: '/images/clinic/dental-room-chair.png', alt: 'Стоматологическое кресло у окна', caption: 'Внимание к деталям' },
  { image: '/images/clinic/reception-front.png', alt: 'Стойка регистрации Жуйкан', caption: 'На связи с пациентами' },
  { image: '/images/clinic/clinic-exterior-angle.png', alt: 'Фасад клиники Жуйкан', caption: 'Жуйкан в Хэйхэ' },
  { image: '/images/clinic/clinic-exterior-front.png', alt: 'Главный вход в клинику', caption: 'Главный вход' },
  { image: '/images/clinic/reception-welcome.png', alt: 'Сотрудник у стойки регистрации', caption: 'Встречаем пациентов' },
  { image: '/images/clinic/reception-logo.png', alt: 'Стойка регистрации и логотип Жуйкан', caption: 'Регистратура' },
  { image: '/images/clinic/waiting-area-seating.png', alt: 'Ряды кресел в зале ожидания', caption: 'Зал ожидания' },
  { image: '/images/clinic/lobby-lounge.png', alt: 'Зона отдыха в холле', caption: 'Место для отдыха' },
  { image: '/images/clinic/refreshment-area.png', alt: 'Кофейный автомат и чайник', caption: 'Зона с напитками' },
  { image: '/images/clinic/dental-treatment-close.png', alt: 'Стоматолог и ассистент во время приёма', caption: 'Работа команды' },
  { image: '/images/clinic/dental-treatment-wide.png', alt: 'Стоматологический приём в светлом кабинете', caption: 'Во время приёма' },
  { image: '/images/clinic/treatment-room-wide.png', alt: 'Кабинет с кушетками', caption: 'Кабинеты центра' },
  { image: '/images/clinic/treatment-room-detail.png', alt: 'Кушетки и оборудование в кабинете', caption: 'Оснащение кабинетов' },
  { image: '/images/clinic/recliner-room.png', alt: 'Комната с креслами для отдыха', caption: 'Комната отдыха' },
  { image: '/images/clinic/patient-lounge.png', alt: 'Посетители в зале с креслами', caption: 'Пространство для пациентов' },
]
</script>

<template>
  <main>
    <section class="px-5 pb-12 pt-10 md:px-8 lg:px-12 lg:pb-20 lg:pt-16">
      <div class="mx-auto max-w-[1440px]">
        <div class="grid items-end gap-7 lg:grid-cols-[1.25fr_1fr] lg:gap-20">
          <div><p class="text-sm font-medium text-brand-dark">Клиника и врачи</p><h1 class="mt-5 text-[clamp(2.75rem,5.3vw,5.5rem)] font-medium leading-[1.02] tracking-[-.055em]">Знакомьтесь,<br><span class="text-brand-dark">клиника Жуйкан</span></h1></div>
          <div class="max-w-xl lg:pb-2">
            <p class="text-base leading-7 text-ink/60 md:text-lg md:leading-8">Стоматологическое лечение в Хэйхэ — с вниманием к вашему здоровью и сопровождением на русском языке. Познакомьтесь с клиникой и командой ещё до поездки.</p>
            <nav aria-label="Разделы страницы" class="mt-7 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium">
              <a v-for="item in [{id:'clinic-photos',label:'Клиника'},{id:'doctors',label:'Специалисты'},{id:'documents',label:'Документы'}]" :key="item.id" :href="'#'+item.id" class="inline-flex items-center gap-2">{{ item.label }}<ArrowDown class="size-4 text-brand" /></a>
            </nav>
          </div>
        </div>
        <div class="relative mt-10 overflow-hidden rounded-[1.75rem] md:mt-12 md:rounded-[2.5rem]">
          <NuxtImg src="/images/clinic/clinic-exterior-front.png" alt="Фасад медицинского центра Жуйкан в Хэйхэ" width="1280" height="706" format="webp" preload class="aspect-[4/3] w-full object-cover md:aspect-[2.2/1]" />
          <span class="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-sm md:bottom-6 md:left-6"><MapPin class="size-4 text-brand" />Хэйхэ, Китай</span>
        </div>
        <div class="mt-8 grid gap-7 border-b border-ink/10 pb-10 md:grid-cols-3 md:gap-10">
          <div v-for="(fact, index) in [
            {title:'План начинается с диагностики',text:'Врач оценивает снимки и результаты осмотра, затем предлагает варианты лечения.'},
            {title:'Понятно на каждом этапе',text:'Русскоязычный координатор помогает с вопросами о лечении и организацией поездки.'},
            {title:'Рядом с Благовещенском',text:'Клиника находится в Хэйхэ. Обсудить поездку и предварительный план можно заранее.'}
          ]" :key="fact.title"><p class="text-sm text-brand">0{{ index + 1 }}</p><h2 class="mt-3 text-xl font-medium tracking-[-.03em]">{{ fact.title }}</h2><p class="mt-3 text-sm leading-6 text-ink/55">{{ fact.text }}</p></div>
        </div>
      </div>
    </section>
    <section id="clinic-photos" class="scroll-mt-28 px-5 py-10 md:px-8 lg:px-12 lg:py-16">
      <div class="mx-auto max-w-[1440px]">
        <p class="text-sm font-medium text-brand-dark">Внутри клиники</p><h2 class="mt-5 text-3xl font-medium leading-tight tracking-[-.045em] md:text-5xl">Увидеть всё до поездки</h2>
        <p class="mt-5 max-w-xl leading-7 text-ink/60">Светлые кабинеты, просторный холл и зоны ожидания — посмотрите, где будет проходить ваш приём.</p>
        <ClinicGallery :items="photos" class="mt-9" />
      </div>
    </section>
    <ClinicDoctors />
    <section id="documents" class="scroll-mt-28 px-5 py-10 md:px-8 lg:px-12 lg:py-20">
      <div class="mx-auto max-w-[1440px] border-t border-ink/10 pt-10 lg:pt-16">
        <p class="text-sm font-medium text-brand-dark">Документы</p><h2 class="mt-5 text-3xl font-medium leading-tight tracking-[-.045em] md:text-5xl">Лицензии и сертификаты</h2>
        <ClinicGallery :items="clinicDocuments" documents class="mt-9" />
      </div>
    </section>
    <CoordinatorCta />
  </main>
</template>
