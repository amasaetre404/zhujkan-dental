<script setup lang="ts">
import { ArrowUpRight } from '@lucide/vue'

withDefaults(defineProps<{ dark?: boolean; compact?: boolean; inline?: boolean }>(), { dark: false, compact: false, inline: false })

// Добавьте подтверждённые контакты здесь — они обновятся во всех CTA на сайте.
const channels = [
  { label: 'Позвонить', value: 'Номер уточняется', href: '', iconSrc: '/icons/phone-contact.svg' },
  { label: 'Telegram', value: 'Ссылка уточняется', href: '', iconSrc: '/icons/telegram-official.svg' },
  { label: 'MAX', value: 'Ссылка уточняется', href: '', iconSrc: '/icons/max-official.svg' },
]
</script>

<template>
  <div :class="[compact ? 'grid gap-2.5' : 'grid gap-3', inline ? 'sm:grid-cols-3' : '']">
    <component
      :is="channel.href ? 'a' : 'div'"
      v-for="channel in channels"
      :key="channel.label"
      :href="channel.href || undefined"
      :aria-disabled="channel.href ? undefined : 'true'"
      :class="[
        dark
          ? 'border-white/13 bg-white/7 text-white hover:border-white/25 hover:bg-white/12'
          : 'border-ink/9 bg-white/90 text-ink hover:border-brand/25 hover:bg-white hover:shadow-[0_14px_40px_rgba(10,17,40,.07)]',
        compact ? 'min-h-[62px] px-3.5' : 'min-h-[76px] px-5',
      ]"
      class="group flex cursor-pointer items-center gap-4 rounded-[18px] border transition-[background-color,border-color,box-shadow] duration-300"
    >
      <span :class="dark ? 'bg-white/10' : 'bg-[#edf1ff]'" class="grid size-11 shrink-0 place-items-center rounded-[13px] p-2">
        <img :src="channel.iconSrc" alt="" class="size-full origin-center object-contain transition-transform duration-300 group-hover:scale-[1.04]">
      </span>
      <span class="min-w-0 flex-1">
        <span class="block text-[15px] font-semibold">{{ channel.label }}</span>
        <span :class="dark ? 'text-white/42' : 'text-ink/40'" class="mt-0.5 block text-xs">{{ channel.value }}</span>
      </span>
      <ArrowUpRight v-if="channel.href" class="size-4 opacity-45 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      <span v-if="!inline && !channel.href" :class="dark ? 'border-white/12 text-white/42' : 'border-ink/8 text-ink/38'" class="rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[.08em]">Скоро</span>
    </component>
  </div>
</template>
