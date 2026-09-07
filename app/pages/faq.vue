<script setup lang="ts">
import { faqs } from '~/data/content'
useSeoMeta({ title: 'Вопросы о лечении зубов в Хэйхэ | Жуйкан', description: 'Ответы о стоимости, снимках, поездке в Китай, сопровождении, сроках лечения, документах и гарантиях.' })
useSchemaOrg([defineWebPage({ name: 'Вопросы и ответы о лечении в Жуйкан' }), ...faqs.map(item => defineQuestion({ name: item.q, acceptedAnswer: item.a }))])
</script>

<template>
  <main><PageHero eyebrow="FAQ" title="Ответы до того, как вы примете решение" text="Собрали практические вопросы о лечении, поездке, документах и предварительном расчёте." :action="false" /><section class="px-5 py-12 md:px-8 lg:px-12 lg:py-24"><div class="mx-auto max-w-[1440px]"><FaqAccordion :items="faqs" /></div></section><RequestSection /></main>
</template>
