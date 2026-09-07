<template>
  <section id="request" class="px-5 py-12 md:px-8 lg:px-12 lg:py-20">
    <div class="relative mx-auto max-w-[1440px] overflow-hidden rounded-[2.5rem] border border-ink/8 bg-paper">
      <NuxtImg src="/images/contact-illustration-v2.png" alt="Смартфон и символы связи с координатором" class="cta-illustration absolute inset-y-0 right-0 h-full w-[72%] object-contain object-right sm:w-[64%] lg:w-[60%]" width="1680" height="945" format="webp" quality="90" loading="lazy" />
      <div class="absolute inset-0 bg-[linear-gradient(90deg,rgba(245,247,251,.99)_0%,rgba(245,247,251,.95)_50%,rgba(245,247,251,.42)_72%,rgba(245,247,251,.04)_100%)]" />
      <div class="relative max-w-[880px] p-7 md:p-10 lg:p-12 xl:p-14">
        <p class="text-[15px] font-medium tracking-[-.01em] text-brand-dark">Предварительный расчёт</p>
        <h2 class="mt-4 max-w-2xl text-3xl font-medium leading-[1.03] tracking-[-.045em] text-ink md:text-5xl">Начните лечение со снимка</h2>
        <p class="mt-5 max-w-xl text-base leading-7 text-ink/58">Позвоните или напишите координатору. Он объяснит, как передать снимок, и поможет получить предварительный план до поездки.</p>
        <div class="mt-7 max-w-[760px]"><ContactChannels compact inline /></div>
      </div>
    </div>
  </section>
</template>
