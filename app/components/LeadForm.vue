<script setup lang="ts">
withDefaults(defineProps<{ compact?: boolean; dark?: boolean }>(), { compact: false, dark: false })
</script>

<template>
  <div :class="dark ? 'bg-white/8 text-white' : 'bg-white text-ink'" class="rounded-[2rem] p-6 shadow-[0_24px_70px_rgba(10,17,40,.08)] md:p-8">
    <div v-if="!compact" class="mb-6">
      <p class="text-xs font-extrabold uppercase tracking-[0.18em] text-brand">Связь с координатором</p>
      <h3 class="mt-3 text-2xl font-semibold tracking-[-0.03em] md:text-3xl">Выберите удобный канал</h3>
      <p class="mt-2 text-sm leading-6" :class="dark ? 'text-white/55' : 'text-ink/55'">Позвоните или напишите — координатор объяснит, как безопасно передать снимок.</p>
    </div>
    <ContactChannels :compact="compact" :dark="dark" />
  </div>
</template>
