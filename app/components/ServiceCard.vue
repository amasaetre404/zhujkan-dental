<script setup lang="ts">
import type { Service } from '~/data/content'

const props = defineProps<{ service: Service }>()

const images: Record<string, { src: string; alt: string; position?: string }> = {
  diagnostics: { src: '/images/service-diagnostics-v1.png', alt: 'Обсуждение панорамного снимка зубов в клинике' },
  hygiene: { src: '/images/service-hygiene-v1.png', alt: 'Профессиональная гигиена зубов — иллюстративное изображение' },
  implantation: { src: '/images/service-implant-planning-turquoise-v1.png', alt: 'Цифровое планирование установки импланта' },
  'removable-prosthetics': { src: '/images/service-removable-denture-v1.png', alt: 'Съёмный протез с естественным оттенком зубов в зуботехнической лаборатории' },
  veneers: { src: '/images/service-veneers-v1.png', alt: 'Тонкие керамические виниры и работа зубного техника' },
  crowns: { src: '/images/service-crowns-lab.png', alt: 'Керамические и циркониевые коронки', position: 'object-[58%_center]' },
  treatment: { src: '/images/service-restorative-treatment-v3.png', alt: 'Лечение зуба врачом клиники под изоляцией коффердамом' },
  extraction: { src: '/images/service-extraction-consultation-v2.png', alt: 'Консультация врача по панорамному снимку перед удалением зуба' },
  orthodontics: { src: '/images/service-digital-scan-turquoise-v1.png', alt: 'Цифровое сканирование для ортодонтического лечения', position: 'object-[62%_center]' },
}

const image = computed(() => images[props.service.slug])
</script>

<template>
  <article
    class="flex min-h-full flex-col overflow-hidden rounded-[24px] border border-ink/9 bg-white"
  >
    <div class="relative aspect-[16/10] overflow-hidden bg-mist">
      <NuxtImg
        v-if="image"
        :src="image.src"
        :alt="image.alt"
        :class="['size-full object-cover', image.position]"
        width="900"
        height="563"
        format="webp"
        quality="88"
        loading="lazy"
      />
    </div>

    <div class="flex flex-1 flex-col p-6 md:p-7">
      <h3 class="text-[clamp(1.5rem,2vw,2rem)] font-medium leading-[1.08] tracking-[-.035em] text-ink">{{ service.title }}</h3>
      <p class="mt-3 max-w-md text-[15px] leading-6 text-muted">{{ service.short }}</p>

      <div class="mt-auto flex items-end justify-between gap-5 pt-8">
        <div>
          <span class="block text-[11px] font-medium uppercase tracking-[.1em] text-muted">Стоимость</span>
          <span class="mt-1 block text-base font-medium text-brand-dark">{{ service.price }}</span>
        </div>
      </div>
    </div>
  </article>
</template>
