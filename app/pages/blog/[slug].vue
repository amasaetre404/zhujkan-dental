<script setup lang="ts">
import { ArrowLeft } from '@lucide/vue'
import { articles } from '~/data/content'
const route = useRoute()
const article = computed(() => articles.find(item => item.slug === route.params.slug))
if (!article.value) throw createError({ statusCode: 404, statusMessage: 'Материал не найден' })
useSeoMeta({ title: () => `${article.value!.title} | ГидМед`, description: () => article.value!.excerpt })
useSchemaOrg([defineArticle({ headline: article.value!.title, description: article.value!.excerpt })])
</script>

<template>
  <main v-if="article"><article class="px-5 py-14 md:px-8 lg:px-12 lg:py-24"><div class="mx-auto max-w-[900px]"><NuxtLink to="/blog" class="inline-flex items-center gap-2 text-sm font-bold text-brand"><ArrowLeft class="size-4" />Все материалы</NuxtLink><p class="mt-14 text-xs font-extrabold uppercase tracking-[.2em] text-accent">{{ article.category }} · {{ article.date }}</p><h1 class="mt-5 text-balance text-5xl font-semibold leading-[1.02] tracking-[-.055em] md:text-7xl">{{ article.title }}</h1><p class="mt-8 text-xl leading-9 text-ink/58">{{ article.excerpt }}</p><div class="prose mt-14 max-w-none"><h2>Главное перед началом</h2><p>Любой дистанционный расчёт носит предварительный характер. Врач формирует окончательный план только после очного осмотра и оценки диагностических данных.</p><h2>Что подготовить</h2><p>Соберите имеющиеся снимки, выписки и список препаратов, которые принимаете постоянно. Запишите вопросы — это поможет сделать консультацию предметной и ничего не упустить.</p><h2>Как получить персональный ответ</h2><p>Оставьте контакт и передайте снимок координатору. Специалист клиники изучит ситуацию, после чего вы получите возможные варианты лечения, сроки и ориентировочный бюджет.</p></div></div></article><RequestSection /></main>
</template>
