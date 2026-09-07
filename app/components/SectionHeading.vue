<script setup lang="ts">
withDefaults(defineProps<{ eyebrow?: string; title: string; text?: string; align?: 'left' | 'center' }>(), { align: 'left' })
</script>

<template>
  <div :class="align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'">
    <p v-if="eyebrow" class="mb-4 text-xs font-extrabold uppercase tracking-[0.2em] text-brand">{{ eyebrow }}</p>
    <h2 class="text-balance text-4xl font-semibold leading-[1.04] tracking-[-0.045em] text-ink md:text-5xl lg:text-6xl">{{ title }}</h2>
    <p v-if="text" class="mt-5 max-w-2xl text-base leading-7 text-ink/62 md:text-lg md:leading-8" :class="align === 'center' ? 'mx-auto' : ''">{{ text }}</p>
  </div>
</template>
