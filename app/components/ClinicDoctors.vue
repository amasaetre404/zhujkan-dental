<script setup lang="ts">
import { clinicSpecialists } from '~/data/clinic-specialists'
</script>
<template>
  <section id="doctors" aria-labelledby="doctors-title" class="scroll-mt-28 px-5 py-12 md:px-8 lg:px-12 lg:py-20">
    <div class="mx-auto max-w-[1440px]">
      <p class="text-sm font-medium text-brand-dark">Команда клиники</p>
      <h2 id="doctors-title" class="mt-5 max-w-[800px] text-3xl font-medium leading-tight tracking-[-.045em] md:text-5xl">Люди, которые заботятся о вас</h2>
      <p class="mt-5 max-w-xl leading-7 text-ink/60">Стоматологи и специалисты других направлений медицинского центра Жуйкан.</p>
      <div class="mt-10 grid grid-cols-2 gap-x-4 gap-y-8 md:gap-x-6 md:gap-y-10 lg:grid-cols-4">
        <article v-for="doctor in clinicSpecialists" :key="doctor.id">
          <div class="overflow-hidden rounded-2xl bg-mist md:rounded-[1.75rem]"><NuxtImg :src="doctor.image" :alt="doctor.name" width="630" height="887" format="webp" loading="lazy" class="aspect-[3/4] w-full object-cover object-top" /></div>
          <h3 class="mt-4 text-lg font-medium tracking-[-.03em] md:text-2xl">{{ doctor.name }}</h3><p class="mt-1 text-sm text-ink/55">{{ doctor.role }}</p>
        </article>
      </div>
    </div>
  </section>
</template>
