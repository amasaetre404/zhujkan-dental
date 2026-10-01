<script setup lang="ts">
import { Tickets, CarFront, BedDouble, Map } from '@lucide/vue'
const included = [
  { icon: Tickets, title: 'Билеты туда и обратно', text: 'Благовещенск ↔ Хэйхэ' },
  { icon: CarFront, title: 'Все трансферы', text: 'По маршруту поездки' },
  { icon: BedDouble, title: 'Гостиница и завтраки', text: 'Проживание уже включено' },
  { icon: Map, title: 'Гид и экскурсии', text: 'Сопровождение на русском' },
]
</script>

<template>
  <div class="hero-offer-shell">
    <h2 class="hero-offer__chip" id="hero-offer-heading">Поездка «всё включено»</h2>
    <div class="hero-offer" aria-labelledby="hero-offer-heading">
    <div class="hero-offer__compensation">
      <p class="hero-offer__label">Компенсация на лечение</p>
      <p class="hero-offer__amount">20 000 <span>₽</span></p>
      <p class="hero-offer__condition">при лечении от <strong>400 000 ₽</strong></p>
    </div>
    <div class="hero-offer__trip">
      <ul>
        <li v-for="item in included" :key="item.title">
          <div class="hero-offer__icon-wrap" aria-hidden="true"><component :is="item.icon" :size="25" :stroke-width="1.6" /></div>
          <strong>{{ item.title }}</strong><span>{{ item.text }}</span>
        </li>
      </ul>
    </div>
    </div>
  </div>
</template>

<style scoped>
.hero-offer-shell { position: relative; padding-top: 18px; }
.hero-offer__chip { position: absolute; z-index: 1; top: 0; left: 50%; transform: translateX(-50%); margin: 0; padding: 8px 18px; border: 1px solid var(--color-brand-border); border-radius: 999px; background: var(--color-brand-soft); color: var(--color-brand-dark); font-size: 14px; font-weight: 500; line-height: 20px; white-space: nowrap; }
.hero-offer { display: grid; grid-template-columns: 300px minmax(0,1fr); overflow: hidden; border: 1px solid rgba(10,17,40,.08); border-radius: 24px; background: #fff; }
.hero-offer__compensation { display: flex; flex-direction: column; justify-content: center; padding: 24px 32px; background: var(--color-brand-soft); color: var(--color-ink); box-shadow: inset 0 3px 0 var(--color-brand); }
.hero-offer__label { color: var(--color-muted); font-size: 15px; font-weight: 500; line-height: 1.5; }
.hero-offer__amount { color: var(--color-brand-dark); margin-top: 14px; font-size: 54px; line-height: 1; font-weight: 500; letter-spacing: -.055em; white-space: nowrap; }
.hero-offer__amount span { font-size: .7em; }
.hero-offer__condition { margin-top: 16px; color: var(--color-muted); font-size: 14px; line-height: 1.6; }
.hero-offer__condition strong { color: var(--color-ink); font-weight: 600; white-space: nowrap; }
.hero-offer__trip { display: flex; align-items: center; min-width: 0; padding: 24px 32px; }
.hero-offer ul { width: 100%; display: grid; grid-template-columns: repeat(4,minmax(0,1fr)); gap: 24px; margin: 0; padding: 0; list-style: none; }
.hero-offer li { min-width: 0; }
.hero-offer__icon-wrap { display: grid; place-items: center; width: 44px; height: 44px; margin-bottom: 12px; border-radius: 13px; color: var(--color-brand-dark); background: var(--color-brand-soft); }
.hero-offer li strong { display: block; font-size: 16px; font-weight: 500; line-height: 1.4; }
.hero-offer li > span { display: block; margin-top: 6px; color: var(--color-muted); font-size: 13px; line-height: 1.55; }
@media (max-width: 1200px) and (min-width: 701px) {
  .hero-offer { grid-template-columns: 250px minmax(0,1fr); }
  .hero-offer__compensation, .hero-offer__trip { padding: 25px; }
  .hero-offer__amount { font-size: 48px; }
  .hero-offer ul { gap: 17px; }
}
@media (max-width: 1100px) and (min-width: 701px) {
  .hero-offer__trip { padding-block: 18px; }
  .hero-offer ul { grid-template-columns: repeat(2,minmax(0,1fr)); gap: 22px; }
}
@media (max-width: 700px) {
  .hero-offer { grid-template-columns: 1fr; border-radius: 22px; }
  .hero-offer__compensation { padding: 28px 24px 23px; }
  .hero-offer__label { font-size: 14px; }
  .hero-offer__amount { color: var(--color-brand-dark); margin-top: 10px; font-size: 46px; }
  .hero-offer__condition { margin-top: 9px; font-size: 13px; }
  .hero-offer__trip { padding: 17px 24px; }
  .hero-offer ul { grid-template-columns: repeat(2,minmax(0,1fr)); gap: 24px 18px; margin-top: 0; }
  .hero-offer li strong { min-height: 2.8em; font-size: 15px; }
  .hero-offer li > span { font-size: 12px; }
}
@media (max-width: 360px) {
  .hero-offer__compensation, .hero-offer__trip { padding-inline: 19px; }
  .hero-offer ul { column-gap: 14px; }
}
</style>