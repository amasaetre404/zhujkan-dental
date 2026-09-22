<script setup lang="ts">
import { faqs } from '~/data/content'
useSeoMeta({ title: 'Вопросы о лечении зубов в Хэйхэ | ГидМед', description: 'Ответы о стоимости, снимках, поездке в Китай, сопровождении, сроках лечения, документах и гарантиях.' })
useSchemaOrg([defineWebPage({ name: 'Вопросы и ответы о лечении в Жуйкан' }), ...faqs.map(item => defineQuestion({ name: item.q, acceptedAnswer: item.a }))])
</script>

<template>
  <main>
    <section class="px-5 pb-8 pt-12 md:px-8 md:pt-20 lg:px-12">
      <div class="mx-auto max-w-[1440px]">
        <h1 class="text-[clamp(2.5rem,5vw,4.5rem)] font-medium leading-[1.04] tracking-[-.045em]">Вопросы и ответы</h1>
        <p class="mt-5 max-w-2xl text-base leading-7 text-ink/60">Собрали практические вопросы о лечении, поездке, документах и предварительном расчёте.</p>
        <div class="mt-8 md:mt-10"><FaqAccordion :items="faqs" :initial-open="faqs.map((_, index) => index)" /></div>
      </div>
    </section>
    <RequestSection />
  </main>
</template>
