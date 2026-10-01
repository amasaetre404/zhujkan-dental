<script setup lang="ts">
import { ArrowUpRight, FileCheck2, MapPin } from '@lucide/vue'
import HeroOffer from '~/components/HeroOffer.vue'
</script>

<template>
  <section class="home-hero" aria-labelledby="home-hero-title">
    <div class="home-hero__stage">
      <NuxtImg class="home-hero__background" src="/images/hero-dental-suite-v2.png" alt="" aria-hidden="true" width="1983" height="793" preload format="webp" quality="90" />
      <div class="home-hero__wash" aria-hidden="true" />
      <div class="home-hero__content">
        <div class="home-hero__copy">
          <p class="home-hero__eyebrow"><span aria-hidden="true" />Клиника «Жуйкан» · Хэйхэ, Китай</p>
          <h1 id="home-hero-title">Лечение и протезирование зубов <span>в Хэйхэ</span></h1>
          <p class="home-hero__intro">Организуем лечение и поездку из Благовещенска. Поможем согласовать план и бюджет, сопровождаем на русском языке.</p>
          <div class="home-hero__actions">
            <AuraButton contact>Получить расчёт лечения</AuraButton>
            <NuxtLink to="/services" class="home-hero__prices">Услуги и цены<ArrowUpRight aria-hidden="true" :size="17" /></NuxtLink>
          </div>
          <p class="home-hero__next-step"><FileCheck2 aria-hidden="true" :size="17" />Предварительный план по вашему снимку — до поездки.</p>
          <div class="home-hero__local"><MapPin aria-hidden="true" :size="16" /><span>Представитель и офис в Благовещенске</span></div>
        </div>
      </div>
    </div>
    <div class="home-hero__offer"><HeroOffer /></div>
  </section>
</template>

<style scoped>
.home-hero { padding-bottom: 26px; background: var(--color-paper); }
.home-hero__stage { position: relative; isolation: isolate; min-height: clamp(530px, calc(100svh - 360px), 730px); overflow: hidden; }
.home-hero__background { position: absolute; z-index: -2; inset: 0; width: 100%; height: 100%; object-fit: cover; object-position: center; }
.home-hero__wash { position: absolute; z-index: -1; inset: 0; background: linear-gradient(0deg, var(--color-paper), transparent 17%), linear-gradient(90deg, rgba(245,247,251,.48), rgba(245,247,251,.18) 45%, transparent 65%); }
.home-hero__content { display: flex; align-items: center; min-height: inherit; max-width: 1536px; margin-inline: auto; padding: 16px 48px; }
.home-hero__copy { width: 50%; max-width: 630px; min-width: 0; padding-block: 8px; }
.home-hero__eyebrow { display: flex; align-items: center; gap: 10px; color: #536979; font-size: 12px; font-weight: 500; letter-spacing: .01em; }
.home-hero__eyebrow > span { width: 7px; height: 7px; border-radius: 50%; background: var(--color-brand); }
.home-hero h1 { margin-top: 26px; font-size: clamp(43px,4.2vw,67px); font-weight: 500; line-height: 1.05; letter-spacing: -.045em; text-wrap: balance; }
.home-hero h1 span { color: var(--color-brand-dark); }
.home-hero__intro { max-width: 510px; margin-top: 23px; color: #59657b; font-size: 16px; line-height: 1.8; text-wrap: pretty; }
.home-hero__actions { display: flex; align-items: center; flex-wrap: wrap; gap: 18px 26px; margin-top: 27px; }
.home-hero__prices { display: inline-flex; align-items: center; gap: 8px; min-height: 44px; color: var(--color-ink); font-size: 14px; font-weight: 500; text-decoration: none; }
.home-hero__prices:hover { color: var(--color-brand-dark); }
.home-hero__next-step { display: flex; align-items: flex-start; gap: 9px; max-width: 490px; margin-top: 17px; color: #657086; font-size: 12px; line-height: 1.65; }
.home-hero__next-step svg { flex-shrink: 0; margin-top: 1px; color: var(--color-brand); }
.home-hero__local { display: flex; align-items: center; gap: 9px; margin-top: 28px; padding-top: 18px; border-top: 1px solid rgba(10,17,40,.1); color: #59657b; font-size: 12px; }
.home-hero__local svg { color: var(--color-brand); flex-shrink: 0; }
.home-hero__offer { max-width: 1536px; margin-inline: auto; padding: 0 48px; }
@media (min-width: 701px) and (max-width: 1100px) {
  .home-hero__content { padding-inline: 32px; }
  .home-hero__copy { width: 58%; }
  .home-hero h1 { font-size: clamp(36px,4.35vw,48px); }
  .home-hero__intro { font-size: 14px; }
  .home-hero__wash { background: linear-gradient(0deg, var(--color-paper), transparent 20%), linear-gradient(90deg, rgba(245,247,251,.92), rgba(245,247,251,.8) 42%, rgba(245,247,251,.1) 80%); }
  .home-hero__offer { padding-inline: 32px; }
}
@media (max-width: 700px) {
  .home-hero { padding-bottom: 20px; }
  .home-hero__stage { min-height: 0; }
  .home-hero__background { object-position: 68% center; }
  .home-hero__wash { background: linear-gradient(0deg, var(--color-paper), transparent 35%), linear-gradient(90deg, rgba(245,247,251,.98), rgba(245,247,251,.92) 48%, rgba(245,247,251,.65)); }
  .home-hero__content { padding: 28px 20px 30px; }
  .home-hero__copy { width: 100%; padding: 0; }
  .home-hero__eyebrow { font-size: 11px; }
  .home-hero h1 { margin-top: 22px; max-width: 500px; font-size: clamp(36px,7.5vw,49px); line-height: 1.07; }
  .home-hero__intro { margin-top: 20px; font-size: 15px; line-height: 1.75; }
  .home-hero__actions { margin-top: 23px; gap: 10px 20px; }
  .home-hero__next-step { font-size: 11px; margin-top: 12px; }
  .home-hero__local { margin-top: 20px; padding-top: 14px; font-size: 11px; }
  .home-hero__offer { width: 100%; padding-inline: 20px; }
}
@media (max-width: 380px) {
  .home-hero__content { padding-inline: 16px; }
  .home-hero__offer { padding-inline: 16px; }
}
</style>