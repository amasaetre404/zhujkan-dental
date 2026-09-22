<script setup lang="ts">
import { Clock3, FileCheck2 } from '@lucide/vue'
</script>
<template>
    <section id="calculation" class="scroll-mt-24 px-5 py-10 md:px-8 lg:px-12 lg:py-16">
      <div class="relative mx-auto max-w-[1440px] overflow-hidden rounded-[2.5rem] border border-ink/8 bg-paper">
        <NuxtImg src="/images/contact-illustration-v2.png" alt="Смартфон и символы связи с координатором" class="cta-illustration absolute inset-y-0 right-0 h-full w-[72%] object-contain object-right sm:w-[64%] lg:w-[60%]" width="1680" height="945" format="webp" quality="91" loading="lazy" />
        <div class="absolute inset-0 bg-[linear-gradient(90deg,rgba(245,247,251,.99)_0%,rgba(245,247,251,.96)_49%,rgba(245,247,251,.5)_70%,rgba(245,247,251,.06)_100%)]" />
        <div class="relative max-w-[870px] p-7 md:p-10 lg:p-12 xl:p-14">
          <p class="text-[15px] font-medium tracking-[-.01em] text-brand-dark">Следующий шаг</p>
          <h2 class="mt-4 max-w-[720px] text-balance text-3xl font-medium leading-[1.02] tracking-[-0.045em] text-ink md:text-5xl">Обсудите лечение с координатором</h2>
          <p class="mt-5 max-w-[620px] text-base leading-7 text-ink/58">Позвоните или напишите — подскажем, какой снимок нужен, как его передать и чего ожидать дальше.</p>
          <div class="mt-7 max-w-[760px]"><ContactChannels compact inline /></div>
          <div class="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-xs text-ink/45"><span class="flex items-center gap-2"><Clock3 class="size-4 text-brand" />Ответ координатора</span><span class="flex items-center gap-2"><FileCheck2 class="size-4 text-brand" />Без предоплаты и обязательств</span></div>
        </div>
      </div>
    </section>
</template>
