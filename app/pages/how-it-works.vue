<script setup lang="ts">
import { CheckCircle2 } from '@lucide/vue'
import { journeySteps } from '~/data/content'
useSeoMeta({ title: 'Как проходит лечение зубов в Хэйхэ | Жуйкан', description: 'Пошагово о лечении в Китае: снимок, предварительный расчёт, поездка из Благовещенска, сопровождение и возвращение.' })
useSchemaOrg([defineHowTo({ name: 'Как пройти лечение в клинике Жуйкан в Хэйхэ', step: journeySteps.map(item => ({ name: item.title, text: item.text })) })])
</script>

<template>
  <main><PageHero eyebrow="Как всё проходит" title="Поездка без неизвестности" text="От первого сообщения до возвращения в Благовещенск — понятный маршрут и контакт с координатором на каждом этапе." /><section class="px-5 py-12 md:px-8 lg:px-12 lg:py-24"><div class="mx-auto max-w-[1100px]"><article v-for="(step, index) in journeySteps" :key="step.number" class="grid gap-5 border-t border-ink/10 py-10 last:border-b md:grid-cols-[100px_1fr_1fr]"><span class="text-5xl font-semibold tracking-[-.06em] text-brand/25">{{ step.number }}</span><h2 class="text-2xl font-bold tracking-[-.03em]">{{ step.title }}</h2><p class="leading-7 text-ink/58">{{ step.text }}</p></article><div class="mt-14 rounded-[2rem] bg-mist p-7 md:p-10"><h2 class="text-3xl font-bold tracking-[-.04em]">Что подготовить до поездки</h2><div class="mt-7 grid gap-4 sm:grid-cols-2"><p v-for="item in ['Заграничный паспорт', 'Панорамный снимок или КТ', 'Список принимаемых препаратов', 'Вопросы, которые хотите задать врачу']" :key="item" class="flex items-center gap-3 font-semibold"><CheckCircle2 class="size-5 text-brand" />{{ item }}</p></div><p class="mt-7 text-sm leading-6 text-ink/50">Актуальные требования к пересечению границы координатор проверяет перед каждой поездкой.</p></div></div></section><RequestSection /></main>
</template>
