<script setup lang="ts">
import { ArrowUpRight, MapPin } from '@lucide/vue'
</script>

<template>
  <footer class="bg-ink text-white">
    <div class="mx-auto max-w-[1440px] px-5 py-14 md:px-8 lg:px-12 lg:py-20">
      <div class="grid gap-12 border-b border-white/12 pb-14 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <LogoMark class="[&_strong]:!text-white [&_span_span]:!text-white/45" />
          <p class="mt-6 max-w-sm text-base leading-7 text-white/58">Стоматологическое лечение в Хэйхэ с предварительным расчётом и сопровождением из Благовещенска.</p>
        </div>
        <div>
          <p class="text-xs font-bold uppercase tracking-[0.18em] text-white/35">Пациентам</p>
          <div class="mt-5 grid gap-3 text-sm text-white/70">
            <NuxtLink to="/services" class="hover:text-white">Услуги</NuxtLink>
            <NuxtLink to="/prices" class="hover:text-white">Цены</NuxtLink>
            <NuxtLink to="/how-it-works" class="hover:text-white">Как проходит лечение</NuxtLink>
            <NuxtLink to="/faq" class="hover:text-white">Вопросы и ответы</NuxtLink>
          </div>
        </div>
        <div>
          <p class="text-xs font-bold uppercase tracking-[0.18em] text-white/35">О клинике</p>
          <div class="mt-5 grid gap-3 text-sm text-white/70">
            <NuxtLink to="/clinic" class="hover:text-white">Клиника</NuxtLink>
            <NuxtLink to="/doctors" class="hover:text-white">Врачи</NuxtLink>
            <NuxtLink to="/before-after" class="hover:text-white">До и после</NuxtLink>
            <NuxtLink to="/reviews" class="hover:text-white">Отзывы</NuxtLink>
            <NuxtLink to="/blog" class="hover:text-white">Полезные материалы</NuxtLink>
          </div>
        </div>
        <div>
          <p class="text-xs font-bold uppercase tracking-[0.18em] text-white/35">В России</p>
          <p class="mt-5 flex gap-2 text-sm leading-6 text-white/70"><MapPin class="mt-0.5 size-4 shrink-0" />г. Благовещенск,<br>ул. Ленина, 120, офис 8</p>
          <NuxtLink to="/contacts" class="mt-5 inline-flex items-center gap-1 text-sm font-bold text-white">Все контакты <ArrowUpRight class="size-4" /></NuxtLink>
        </div>
      </div>
      <div class="flex flex-col gap-4 pt-7 text-xs leading-5 text-white/38 md:flex-row md:items-center md:justify-between">
        <p>© {{ new Date().getFullYear() }} Стоматологическая клиника «Жуйкан»</p>
        <div class="flex flex-wrap gap-5">
          <NuxtLink to="/privacy" class="hover:text-white">Политика конфиденциальности</NuxtLink>
          <span>Информация не является публичной офертой</span>
        </div>
      </div>
    </div>
  </footer>
</template>
