<script setup lang="ts">
import { ArrowLeft, CheckCircle2, GraduationCap, UserRound } from '@lucide/vue'
import { doctors } from '~/data/content'
const route = useRoute()
const doctor = computed(() => doctors.find(item => item.slug === route.params.slug))
if (!doctor.value) throw createError({ statusCode: 404, statusMessage: 'Специалист не найден' })
useSeoMeta({ title: () => `${doctor.value!.name} | Клиника Жуйкан`, description: () => `${doctor.value!.role}. Направления работы специалиста клиники Жуйкан в Хэйхэ.` })
</script>

<template>
  <main v-if="doctor"><section class="px-5 py-12 md:px-8 lg:px-12 lg:py-20"><div class="mx-auto max-w-[1200px]"><NuxtLink to="/doctors" class="inline-flex items-center gap-2 text-sm font-bold text-brand"><ArrowLeft class="size-4" />Все специалисты</NuxtLink><div class="mt-8 grid overflow-hidden rounded-[2.5rem] bg-mist lg:grid-cols-[.8fr_1.2fr]"><div class="grid min-h-[420px] place-items-center bg-brand/8"><UserRound class="size-36 text-brand/20" /></div><div class="p-7 md:p-12 lg:p-16"><p class="text-xs font-extrabold uppercase tracking-[.2em] text-accent">{{ doctor.role }}</p><h1 class="mt-5 text-5xl font-semibold leading-tight tracking-[-.05em]">{{ doctor.name }}</h1><p class="mt-5 leading-7 text-ink/55">Страница подготовлена для подтверждённого профиля врача. Перед публикацией сюда добавляются ФИО, фотография, образование, сертификаты и реальный стаж.</p><div class="mt-8 flex items-center gap-3"><GraduationCap class="size-5 text-brand" /><span class="font-semibold">{{ doctor.experience }}</span></div><div class="mt-8 grid gap-3"><p v-for="item in doctor.focus" :key="item" class="flex items-center gap-3 font-semibold"><CheckCircle2 class="size-5 text-brand" />{{ item }}</p></div></div></div></div></section><RequestSection /></main>
</template>
