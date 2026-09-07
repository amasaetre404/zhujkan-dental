<script setup lang="ts">
import { ArrowUpRight } from '@lucide/vue'
import { articles } from '~/data/content'
useSeoMeta({ title: 'О лечении зубов в Китае | Блог Жуйкан', description: 'Полезные материалы о лечении зубов в Хэйхэ, подготовке к поездке, имплантации, протезировании и диагностике.' })
</script>

<template>
  <main><PageHero eyebrow="Полезные материалы" title="Понимать лечение до консультации" text="Отвечаем на практические вопросы простым языком и помогаем подготовиться к разговору с врачом." :action="false" /><section class="px-5 py-12 md:px-8 lg:px-12 lg:py-24"><div class="mx-auto grid max-w-[1200px] gap-5 md:grid-cols-3"><NuxtLink v-for="article in articles" :key="article.slug" :to="`/blog/${article.slug}`" class="group flex min-h-96 flex-col rounded-[2rem] border border-ink/8 bg-white p-7 transition hover:-translate-y-1 hover:shadow-xl"><p class="text-xs font-bold uppercase tracking-[.16em] text-brand">{{ article.category }}</p><h2 class="mt-6 text-2xl font-bold leading-tight tracking-[-.035em]">{{ article.title }}</h2><p class="mt-5 leading-7 text-ink/52">{{ article.excerpt }}</p><div class="mt-auto flex items-center justify-between pt-10 text-sm"><span class="text-ink/38">{{ article.date }}</span><ArrowUpRight class="size-5 text-brand transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" /></div></NuxtLink></div></section></main>
</template>
