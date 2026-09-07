<script setup lang="ts">
import { ArrowUpRight, UserRound } from '@lucide/vue'
import { doctors } from '~/data/content'
useSeoMeta({ title: 'Врачи клиники Жуйкан в Хэйхэ', description: 'Специалисты стоматологической клиники Жуйкан: направления работы, опыт и профессиональные профили.' })
</script>

<template>
  <main><PageHero eyebrow="Специалисты" title="Врачи, которым можно задать вопросы заранее" text="Публикуем только подтверждённые сведения об образовании, опыте и специализации каждого врача." /><section class="px-5 py-12 md:px-8 lg:px-12 lg:py-24"><div class="mx-auto grid max-w-[1200px] gap-5 md:grid-cols-3"><NuxtLink v-for="doctor in doctors" :key="doctor.slug" :to="`/doctors/${doctor.slug}`" class="group overflow-hidden rounded-[2rem] border border-ink/8 bg-white"><div class="grid aspect-[4/5] place-items-center bg-mist"><UserRound class="size-24 text-brand/20" /></div><div class="p-7"><p class="text-xs font-bold uppercase tracking-[.16em] text-brand">{{ doctor.role }}</p><h2 class="mt-3 text-2xl font-bold tracking-[-.035em]">{{ doctor.name }}</h2><p class="mt-4 text-sm leading-6 text-ink/48">ФИО, фотография и подтверждённый стаж будут добавлены после получения материалов.</p><span class="mt-6 inline-flex items-center gap-2 text-sm font-bold text-brand">Профиль <ArrowUpRight class="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></span></div></NuxtLink></div></section><RequestSection /></main>
</template>
