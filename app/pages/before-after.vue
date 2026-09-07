<script setup lang="ts">
import { ImageIcon } from '@lucide/vue'
useSeoMeta({ title: 'До и после лечения зубов | Клиника Жуйкан', description: 'Кейсы лечения и протезирования зубов в клинике Жуйкан: задача, решение, срок и результат.' })
const cases = ['Полное протезирование', 'Восстановление передних зубов', 'Имплантация и коронки', 'Эстетическая реставрация']
</script>

<template>
  <main><PageHero eyebrow="Результаты лечения" title="Не только фотографии, но и история каждого случая" text="Для каждого кейса покажем исходную ситуацию, решение врача, срок лечения и подтверждённую стоимость." /><section class="px-5 py-12 md:px-8 lg:px-12 lg:py-24"><div class="mx-auto grid max-w-[1200px] gap-6 md:grid-cols-2"><article v-for="(item,index) in cases" :key="item" class="overflow-hidden rounded-[2rem] border border-ink/8 bg-white"><div class="grid aspect-[16/10] grid-cols-2 gap-px bg-ink/8"><div v-for="side in ['До', 'После']" :key="side" class="grid place-items-center bg-mist"><div class="text-center"><ImageIcon class="mx-auto size-8 text-brand/25" /><p class="mt-3 text-xs font-bold uppercase tracking-[.16em] text-brand">{{ side }}</p></div></div></div><div class="p-7"><p class="text-xs font-bold text-brand">Кейс 0{{ index+1 }}</p><h2 class="mt-3 text-2xl font-bold">{{ item }}</h2><p class="mt-3 text-sm leading-6 text-ink/50">Подтверждённые фотографии и детали лечения будут добавлены после получения письменного согласия пациента.</p></div></article></div></section><RequestSection /></main>
</template>
