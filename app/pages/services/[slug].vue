<script setup lang="ts">
import { ArrowLeft, CheckCircle2 } from '@lucide/vue'
import { services } from '~/data/content'
const route = useRoute()
const service = computed(() => services.find(item => item.slug === route.params.slug))
if (!service.value) throw createError({ statusCode: 404, statusMessage: 'Услуга не найдена' })
useSeoMeta({ title: () => `${service.value!.title} в Хэйхэ | Жуйкан`, description: () => `${service.value!.short} Предварительный расчёт стоимости лечения по снимку.` })
useSchemaOrg([defineService({ name: service.value!.title, description: service.value!.description, provider: { name: 'Стоматологическая клиника Жуйкан' } })])
</script>

<template>
  <main v-if="service">
    <section class="px-5 py-10 md:px-8 lg:px-12 lg:py-16"><div class="mx-auto max-w-[1440px]"><NuxtLink to="/services" class="inline-flex items-center gap-2 text-sm font-bold text-brand"><ArrowLeft class="size-4" />Все услуги</NuxtLink><div class="mt-8 grid overflow-hidden rounded-[2.5rem] bg-mist lg:grid-cols-[1.15fr_.85fr]"><div class="p-7 md:p-12 lg:p-16"><p class="text-xs font-extrabold uppercase tracking-[.2em] text-accent">Стоматология в Хэйхэ</p><h1 class="mt-5 text-5xl font-semibold tracking-[-.055em] md:text-7xl">{{ service.title }}</h1><p class="mt-6 max-w-2xl text-lg leading-8 text-ink/62">{{ service.description }}</p><AuraButton href="#request" class="mt-9">Рассчитать по снимку</AuraButton></div><div class="grid content-center bg-ink p-7 text-white md:p-12 lg:p-14"><p class="text-sm text-white/42">Ориентировочный срок</p><p class="mt-2 text-2xl font-bold">{{ service.duration }}</p><div class="my-8 h-px bg-white/12" /><p class="text-sm text-white/42">Стоимость</p><p class="mt-2 text-2xl font-bold">{{ service.price }}</p></div></div></div></section>
    <section class="px-5 py-16 md:px-8 lg:px-12 lg:py-24"><div class="mx-auto grid max-w-[1200px] gap-14 lg:grid-cols-2"><div><SectionHeading eyebrow="Что важно" title="Продуманное лечение без спешки" /><div class="mt-9 grid gap-4"><div v-for="item in service.benefits" :key="item" class="flex items-center gap-3 rounded-2xl border border-ink/8 bg-white p-5 font-semibold"><CheckCircle2 class="size-5 text-brand" />{{ item }}</div></div></div><div><p class="text-xs font-extrabold uppercase tracking-[.2em] text-brand">Возможные этапы</p><ol class="mt-6 divide-y divide-ink/10 border-y border-ink/10"><li v-for="(step, index) in service.steps" :key="step" class="flex items-center gap-5 py-6"><span class="grid size-9 place-items-center rounded-full bg-mist text-xs font-bold text-brand">{{ index + 1 }}</span><span class="text-lg font-bold">{{ step }}</span></li></ol><p class="mt-6 text-sm leading-6 text-ink/48">Точный порядок определяется врачом после диагностики и может отличаться от приведённого примера.</p></div></div></section>
    <RequestSection />
  </main>
</template>
