<script setup lang="ts">
const advantages = [
  {
    image: '/images/benefit-estimate-v1.png',
    title: 'Стоимость до поездки',
    text: 'Предварительный план и ориентировочный бюджет — по вашему снимку.',
  },
  {
    image: '/images/benefit-language-v1.png',
    title: 'На русском языке',
    text: 'Координатор помогает общаться с клиникой и остаётся на связи.',
  },
  {
    image: '/images/benefit-office-v1.png',
    title: 'Представитель в России',
    text: 'Личный контакт и офис в Благовещенске — до и после лечения.',
  },
  {
    image: '/images/benefit-documents-v1.png',
    title: 'Документы и гарантии',
    text: 'Условия лечения согласуем заранее и зафиксируем в документах.',
  },
]
</script>

<template>
  <section id="advantages" class="care-advantages" aria-label="Преимущества">
    <ul class="care-advantages__grid">
      <li v-for="item in advantages" :key="item.image" class="care-advantages__item">
        <div class="care-advantages__visual" aria-hidden="true">
          <NuxtImg
            :src="item.image"
            alt=""
            width="768"
            height="512"
            sizes="100px sm:280px md:360px lg:340px"
            format="webp"
            quality="85"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div class="care-advantages__copy">
          <h2>{{ item.title }}</h2>
          <p>{{ item.text }}</p>
        </div>
      </li>
    </ul>
  </section>
</template>

<style scoped>
.care-advantages { padding: 80px 48px 0; scroll-margin-top: 100px; }
.care-advantages__grid { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 18px; max-width: 1440px; margin: 0 auto; padding: 0; list-style: none; }
.care-advantages__item { min-width: 0; overflow: hidden; padding-top: 12px; border: 1px solid #e3e7ef; border-radius: 26px; background: #fff; box-shadow: 0 6px 24px -16px rgba(10, 17, 40, .12); }
.care-advantages__visual { display: grid; place-items: center; height: 210px; overflow: hidden; }
.care-advantages__visual img { display: block; width: auto; max-width: 100%; height: auto; max-height: 100%; object-fit: contain; filter: brightness(1.055) saturate(.88); mix-blend-mode: multiply; mask-image: radial-gradient(ellipse at 50% 48%, #000 36%, rgba(0, 0, 0, .85) 55%, transparent 74%); }
.care-advantages__copy { min-height: 156px; margin-top: 4px; padding: 4px 24px 28px; }
.care-advantages h2 { color: var(--color-ink); font-size: clamp(18px, 1.45vw, 21px); line-height: 1.3; letter-spacing: -.035em; font-weight: 600; text-wrap: balance; }
.care-advantages p { max-width: 290px; margin-top: 12px; color: #626c7d; font-size: 14px; line-height: 1.75; }
@media (min-width: 701px) and (max-width: 1100px) {
  .care-advantages { padding-inline: 32px; }
  .care-advantages__grid { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .care-advantages__copy { min-height: 142px; }
  .care-advantages h2 { font-size: 21px; }
}
@media (max-width: 700px) {
  .care-advantages { padding: 40px 20px 0; }
  .care-advantages__grid { grid-template-columns: 1fr; gap: 12px; }
  .care-advantages__item { display: grid; grid-template-columns: 90px minmax(0, 1fr); align-items: center; gap: 12px; padding: 22px 16px; border-radius: 22px; }
  .care-advantages__visual { height: 110px; }
  .care-advantages__copy { min-height: 0; padding: 0; margin: 0; }
  .care-advantages h2 { font-size: 19px; text-wrap: initial; }
  .care-advantages p { margin-top: 8px; font-size: 14px; line-height: 1.65; }
}
@media (max-width: 380px) {
  .care-advantages { padding-inline: 16px; }
  .care-advantages__item { grid-template-columns: 72px minmax(0, 1fr); gap: 10px; padding-inline: 12px; }
  .care-advantages h2 { font-size: 17px; }
  .care-advantages p { font-size: 13px; }
}
</style>
