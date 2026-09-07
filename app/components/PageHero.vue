<script setup lang="ts">
withDefaults(defineProps<{ eyebrow: string; title: string; text: string; action?: boolean }>(), { action: true })
</script>

<template>
  <section class="px-5 pb-12 pt-12 md:px-8 lg:px-12 lg:pb-20 lg:pt-20">
    <div class="mx-auto max-w-[1440px] rounded-[2rem] bg-mist px-6 py-14 md:px-12 md:py-20 lg:rounded-[2.5rem] lg:px-16 lg:py-24">
      <p class="text-xs font-extrabold uppercase tracking-[0.2em] text-accent">{{ eyebrow }}</p>
      <h1 class="mt-5 max-w-5xl text-balance text-5xl font-semibold leading-[.98] tracking-[-0.055em] text-ink md:text-7xl lg:text-8xl">{{ title }}</h1>
      <p class="mt-7 max-w-2xl text-lg leading-8 text-ink/60">{{ text }}</p>
      <AuraButton v-if="action" href="#request" class="mt-9">Получить расчёт</AuraButton>
    </div>
  </section>
</template>
