<script setup lang="ts">
import { services } from '~/data/content'
useSeoMeta({ title: 'Стоматологические услуги в Хэйхэ | Жуйкан', description: 'Имплантация, протезирование, коронки, лечение зубов и ортодонтия в клинике Жуйкан в Хэйхэ.' })
useSchemaOrg([defineWebPage({ name: 'Стоматологические услуги клиники Жуйкан' })])
</script>

<template>
  <main>
    <PageHero eyebrow="Услуги" title="Лечение с понятным планом" text="Выберите направление, чтобы узнать, как проходит лечение, какие этапы могут потребоваться и что влияет на стоимость." />
    <section class="px-5 py-12 md:px-8 lg:px-12 lg:py-20"><div class="mx-auto grid max-w-[1440px] gap-4 md:grid-cols-2 lg:grid-cols-3"><ServiceCard v-for="(service, index) in services" :key="service.slug" :service="service" :index="index" /></div></section>
    <RequestSection />
  </main>
</template>
