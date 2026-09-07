<script setup lang="ts">
import { Quote, Sparkles } from '@lucide/vue'
import { testimonials } from '~/data/content'
useSeoMeta({ title: 'Отзывы о лечении в клинике Жуйкан', description: 'Отзывы пациентов о лечении зубов в Хэйхэ, сопровождении и организации поездки из Благовещенска.' })
</script>

<template>
  <main><PageHero eyebrow="Отзывы" title="Опыт пациентов без рекламной обработки" text="В финальной версии разместим подтверждённые текстовые и видеоотзывы с датой и видом лечения." /><section class="px-5 py-12 md:px-8 lg:px-12 lg:py-24"><div class="mx-auto grid max-w-[1200px] gap-5 md:grid-cols-3"><figure v-for="item in testimonials" :key="item.name" class="flex min-h-96 flex-col rounded-[2rem] border border-ink/8 bg-white p-7"><Quote class="size-9 text-brand/25" /><blockquote class="mt-8 text-lg leading-8 text-ink/70">{{ item.quote }}</blockquote><figcaption class="mt-auto pt-10"><div class="flex gap-1 text-accent"><Sparkles v-for="n in 5" :key="n" class="size-4" /></div><p class="mt-4 font-bold">{{ item.name }}, {{ item.city }}</p><p class="mt-1 text-sm text-ink/42">{{ item.treatment }} · пример оформления</p></figcaption></figure></div></section><RequestSection /></main>
</template>
