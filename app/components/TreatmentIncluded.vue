<script setup lang="ts">
import { ArrowLeftRight, UsersRound } from '@lucide/vue'

const included = [
  { image: '/images/included-tickets-v1.png', title: 'Билеты туда и обратно', route: true, text: 'Благовещенск — Хэйхэ' },
  { image: '/images/included-transfers-v2.png', title: 'Все трансферы', text: 'По маршруту поездки.' },
  { image: '/images/included-guide-v2.png', title: 'Гид и экскурсии', text: 'Сопровождение на русском и экскурсии.' },
  { image: '/images/included-stay-v1.png', title: 'Проживание и питание', text: 'Двухместный номер и полноценное питание.' },
]
</script>

<template>
  <section class="treatment-included" aria-labelledby="included-heading">
    <div class="treatment-included__inner">
      <div class="treatment-included__header">
        <div>
          <p class="treatment-included__eyebrow">Поездка без лишних забот</p>
          <h2 id="included-heading">В стоимость лечения <span>включено</span></h2>
        </div>
        <p class="treatment-included__intro">Мы организуем поездку и берём бытовые вопросы на себя. Вы можете сосредоточиться на лечении.</p>
      </div>
      <ul class="treatment-included__grid">
        <li v-for="item in included" :key="item.image" class="treatment-included__card">
          <div class="treatment-included__visual" aria-hidden="true">
            <NuxtImg :src="item.image" alt="" width="1536" height="1024" sizes="50vw md:50vw lg:25vw" format="webp" quality="85" loading="lazy" decoding="async" />
          </div>
          <div class="treatment-included__copy">
            <h3>{{ item.title }}</h3>
            <p v-if="item.route" class="treatment-included__route">
              <span class="sr-only">Благовещенск — Хэйхэ, туда и обратно</span>
              <span aria-hidden="true">Благовещенск</span>
              <span class="treatment-included__destination" aria-hidden="true"><ArrowLeftRight :size="15" :stroke-width="1.6" />Хэйхэ</span>
            </p>
            <p v-else>{{ item.text }}</p>
          </div>
        </li>
      </ul>
      <div class="treatment-included__companion">
        <div class="treatment-included__companion-heading">
          <span aria-hidden="true"><UsersRound :size="25" :stroke-width="1.6" /></span>
          <h3>Для вас и близкого человека</h3>
        </div>
        <p>Проживание в двухместном номере и полноценное питание включены <strong>для пациента и одного сопровождающего</strong> — друга или родственника.</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.treatment-included { padding: 72px 48px 64px; background: var(--color-paper); }
.treatment-included__inner { max-width: 1440px; margin-inline: auto; }
.treatment-included__header { display: grid; grid-template-columns: minmax(0,1fr) 350px; align-items: end; gap: 32px; margin-bottom: 32px; }
.treatment-included__eyebrow { color: var(--color-muted); font-size: 14px; font-weight: 500; line-height: 1.5; }
.treatment-included h2 { max-width: 820px; margin-top: 16px; color: var(--color-ink); font-size: clamp(38px,4vw,56px); line-height: 1.06; font-weight: 500; letter-spacing: -.045em; text-wrap: balance; }
.treatment-included h2 span { color: var(--color-brand-dark); }
.treatment-included__intro { padding-bottom: 3px; color: var(--color-muted); font-size: 15px; line-height: 1.8; }
.treatment-included__grid { display: grid; grid-template-columns: repeat(4,minmax(0,1fr)); gap: 20px; padding: 0; margin: 0; list-style: none; }
.treatment-included__card { min-width: 0; overflow: hidden; border: 1px solid rgba(10,17,40,.08); border-radius: 24px; background: #fff; }
.treatment-included__visual { aspect-ratio: 3 / 2; overflow: hidden; }
.treatment-included__visual img { display: block; width: 100%; height: 100%; object-fit: contain; }
.treatment-included__copy { padding: 20px 24px 26px; }
.treatment-included__copy h3 { min-height: 2.6em; color: var(--color-ink); font-size: 22px; line-height: 1.3; font-weight: 500; letter-spacing: -.035em; }
.treatment-included__copy p { margin-top: 12px; color: var(--color-muted); font-size: 14px; line-height: 1.7; text-wrap: pretty; }
.treatment-included__route { display: flex; flex-wrap: wrap; align-items: center; gap: 2px 7px; }
.treatment-included__route > span { white-space: nowrap; }
.treatment-included__destination { display: inline-flex; align-items: center; gap: 7px; }
.treatment-included__destination svg { flex-shrink: 0; }
.treatment-included__companion { display: grid; grid-template-columns: minmax(0,.85fr) minmax(0,1.15fr); align-items: center; gap: 24px 40px; margin-top: 20px; padding: 24px 28px; border: 1px solid var(--color-brand-border); border-radius: 24px; background: var(--color-brand-soft); }
.treatment-included__companion-heading { display: flex; align-items: center; gap: 16px; }
.treatment-included__companion-heading > span { display: grid; flex: 0 0 48px; width: 48px; height: 48px; place-items: center; border-radius: 15px; background: #fff; color: var(--color-brand-dark); }
.treatment-included__companion h3 { color: var(--color-ink); font-size: 21px; font-weight: 500; line-height: 1.3; letter-spacing: -.025em; }
.treatment-included__companion p { color: var(--color-muted); font-size: 14px; line-height: 1.7; }
.treatment-included__companion strong { color: var(--color-ink); font-weight: 500; }
@media (min-width: 1360px) {
  .treatment-included__copy h3 { min-height: 0; }
}
@media (max-width: 1100px) {
  .treatment-included { padding-inline: 32px; }
  .treatment-included__header { grid-template-columns: 1fr; gap: 20px; }
  .treatment-included__intro { max-width: 560px; }
  .treatment-included__grid { grid-template-columns: repeat(2,minmax(0,1fr)); }
  .treatment-included__copy h3 { min-height: 0; }
  .treatment-included__companion { grid-template-columns: 1fr; gap: 16px; }
}
@media (max-width: 700px) {
  .treatment-included { padding: 44px 20px 40px; }
  .treatment-included__header { gap: 16px; margin-bottom: 24px; }
  .treatment-included__eyebrow { font-size: 12px; }
  .treatment-included h2 { margin-top: 12px; font-size: 36px; }
  .treatment-included__intro { font-size: 14px; line-height: 1.7; }
  .treatment-included__grid { gap: 12px; }
  .treatment-included__card { border-radius: 20px; }
  .treatment-included__copy { padding: 14px 14px 18px; }
  .treatment-included__copy h3 { min-height: 2.8em; font-size: 16px; line-height: 1.4; letter-spacing: -.025em; }
  .treatment-included__copy p { margin-top: 8px; font-size: 13px; line-height: 1.6; }
  .treatment-included__companion { gap: 14px; margin-top: 16px; padding: 20px; border-radius: 22px; }
  .treatment-included__companion-heading { gap: 12px; }
  .treatment-included__companion h3 { font-size: 19px; }
  .treatment-included__companion p { font-size: 13px; }
}
@media (max-width: 380px) {
  .treatment-included { padding-inline: 16px; }
  .treatment-included__copy { padding-inline: 12px; }
  .treatment-included__copy h3 { font-size: 15px; }
}
@media (max-width: 340px) {
  .treatment-included__grid { grid-template-columns: 1fr; }
  .treatment-included__copy h3 { min-height: 0; }
}
</style>