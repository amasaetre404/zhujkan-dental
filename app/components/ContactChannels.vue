<script setup lang="ts">
import { contacts } from '~/data/contacts'

withDefaults(defineProps<{ dark?: boolean; compact?: boolean; inline?: boolean }>(), { dark: false, compact: false, inline: false })

const channels = [
  { label: 'Позвонить', value: contacts.phone, href: contacts.phoneHref, iconSrc: '/icons/phone-contact.svg' },
  { label: 'Telegram', value: 'Написать сообщение', href: contacts.telegram, iconSrc: '/icons/telegram-official.svg' },
  { label: 'MAX', value: 'Написать сообщение', href: contacts.max, iconSrc: '/icons/max-official.svg' },
  { label: 'WhatsApp', value: 'Написать сообщение', href: contacts.whatsapp, iconSrc: '/icons/whatsapp.svg' },
]
</script>

<template>
  <div class="contact-channels" :class="{ 'contact-channels--inline': inline, 'contact-channels--compact': compact }">
    <component
      :is="channel.href ? 'a' : 'div'"
      v-for="channel in channels"
      :key="channel.label"
      :href="channel.href || undefined"
      :aria-label="channel.label === 'Позвонить' ? 'Позвонить: ' + channel.value : 'Написать в ' + channel.label"
      :title="channel.label === 'Позвонить' ? undefined : channel.label"
      :target="channel.href.startsWith('https://') ? '_blank' : undefined"
      :rel="channel.href.startsWith('https://') ? 'noopener noreferrer' : undefined"
      :aria-disabled="channel.href ? undefined : 'true'"
      :class="[
        channel.href ? 'cursor-pointer' : 'cursor-default',
        dark
          ? 'border-white/13 bg-white/7 text-white hover:border-white/25 hover:bg-white/12'
          : 'border-ink/9 bg-white/90 text-ink hover:border-brand/25 hover:bg-white hover:shadow-[0_14px_40px_rgba(10,17,40,.07)]',
        compact ? 'min-h-[58px]' : 'min-h-[76px]',
        channel.label === 'Позвонить' ? 'contact-channel-phone px-3.5' : 'justify-center',
      ]"
      class="group flex items-center gap-4 rounded-[18px] border transition-[background-color,border-color,box-shadow] duration-300"
    >
      <span :class="channel.label === 'Позвонить' ? [dark ? 'bg-white/10' : 'bg-[#edf1ff]', 'size-11 rounded-[13px] p-2'] : 'size-7'" class="grid shrink-0 place-items-center">
        <img :src="channel.iconSrc" alt="" class="size-full origin-center object-contain transition-transform duration-300 group-hover:scale-[1.04]">
      </span>
      <span v-if="channel.label === 'Позвонить'" class="min-w-0 flex-1">
        <span class="block text-[15px] font-semibold">{{ channel.label }}</span>
        <span :class="dark ? 'text-white/42' : 'text-ink/40'" class="mt-0.5 block text-xs">{{ channel.value }}</span>
      </span>
      <span v-if="!inline && !channel.href" :class="dark ? 'border-white/12 text-white/42' : 'border-ink/8 text-ink/38'" class="rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[.08em]">Скоро</span>
    </component>
  </div>
</template>

<style scoped>
.contact-channels {
  display: grid;
  grid-template-columns: repeat(3, 76px);
  gap: 10px;
  width: fit-content;
  max-width: 100%;
}
.contact-channels--compact { grid-template-columns: repeat(3, 58px); }
.contact-channel-phone { grid-column: 1 / -1; }
@media (min-width: 640px) {
  .contact-channels--inline { grid-template-columns: 240px repeat(3, 76px); }
  .contact-channels--inline.contact-channels--compact { grid-template-columns: 240px repeat(3, 58px); }
  .contact-channels--inline .contact-channel-phone { grid-column: auto; }
}
</style>
