<script setup lang="ts">
import { Languages, MapPin } from '@lucide/vue'

const steps = [
  { title: 'Знакомимся с вашей ситуацией', text: 'Расскажите, что беспокоит, и пришлите снимок. Если его нет — подскажем, где сделать.', x: 25, y: 20 },
  { title: 'План и стоимость — заранее', text: 'По снимку подготовим предварительный план, сроки и ориентировочный бюджет.', x: 61.105, y: 24.4215 },
  { title: 'Готовимся к поездке', text: 'Согласуем дату и расскажем, какие документы и вещи взять с собой.', x: 86.6674, y: 42.5842 },
  { title: 'Встречаем и сопровождаем', text: 'Представитель поможет добраться из Благовещенска до клиники в Хэйхэ.', x: 76, y: 72.5 },
  { title: 'Проходите лечение', text: 'Врач уточнит план после диагностики. Рядом — русскоязычное сопровождение.', x: 48, y: 72.5 },
  { title: 'Домой, оставаясь на связи', text: 'После возвращения вы можете обратиться к координатору с вопросами.', x: 20, y: 72.5 },
]

// An editorial journey diagram, deliberately not a navigable street map.
// Follow the supplied reference: east along the Russian bank, cross on the
// right of Bolshoy Heihe island, then travel west along the Chinese bank.
const route = 'M 360 160 C 460 160 560 180 677 180 S 890 198 994 210 C 1100 224 1210 281 1240 310 Q 1255 326 1245 350 L 1155 540 Q 1136 580 1094 580 H 691 H 288'
const mapElement = ref<HTMLElement | null>(null)
const isVisible = ref(false)
let observer: IntersectionObserver | undefined

onMounted(() => {
  if (!mapElement.value || !('IntersectionObserver' in window)) return
  observer = new IntersectionObserver(([entry]) => {
    if (entry?.isIntersecting) {
      isVisible.value = true
      observer?.disconnect()
    }
  }, { threshold: 0.15 })
  observer.observe(mapElement.value)
})
onBeforeUnmount(() => observer?.disconnect())
</script>

<template>
  <section id="process" class="journey" aria-labelledby="journey-title">
    <div class="journey__inner">
      <header class="journey__header">
        <div>
          <p class="journey__eyebrow"><span aria-hidden="true">◇</span> Понятный маршрут</p>
          <h2 id="journey-title">От первого сообщения<br>до <span>возвращения домой</span></h2>
        </div>
      </header>

      <div ref="mapElement" class="journey-map" :class="{ 'is-visible': isVisible }">
        <svg class="journey-map__drawing" viewBox="120 0 1440 800" preserveAspectRatio="none" aria-hidden="true">
          <defs>
            <pattern id="journey-blocks" width="170" height="120" patternUnits="userSpaceOnUse" patternTransform="rotate(10)">
              <rect x="8" y="8" width="96" height="52" rx="5" fill="#e9edf0" />
              <rect x="113" y="8" width="49" height="52" rx="4" fill="#e9edf0" />
              <rect x="8" y="69" width="57" height="43" rx="4" fill="#e9edf0" />
              <rect x="74" y="69" width="88" height="43" rx="5" fill="#e9edf0" />
            </pattern>
            <linearGradient id="journey-fade" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stop-color="white" stop-opacity=".4" />
              <stop offset=".5" stop-color="white" />
              <stop offset="1" stop-color="white" stop-opacity=".25" />
            </linearGradient>
            <mask id="journey-streets-mask"><rect width="1560" height="800" fill="url(#journey-fade)" /></mask>
            <linearGradient id="journey-water" x1="0" y1="0" x2="1" y2=".6">
              <stop stop-color="#e0eaf0" /><stop offset=".5" stop-color="#dce7f2" /><stop offset="1" stop-color="#e5edf6" />
            </linearGradient>
          </defs>
          <rect width="1560" height="800" fill="url(#journey-blocks)" mask="url(#journey-streets-mask)" />
          <g fill="none" stroke="#fff" stroke-width="13" opacity=".8">
            <path d="M-50 30 730 160 1500 310 M-50 485 550 655 1500 780 M300-50 180 850 M1090-50 900 850" />
          </g>
          <g fill="#e1e9e1" opacity=".55">
            <path d="m40 318 160-46 33 78-162 32Z" /><path d="m1110 40 150-44 33 78-163 42Z" />
            <path d="m970 707 170-45 27 87-169 44Z" /><path d="m55 652 167-46 25 78-162 42Z" />
          </g>
          <path d="M-60 135 C150 222 340 281 550 302 C800 326 965 374 1150 448 C1320 516 1450 583 1560 642 L1560 784 C1350 738 1270 614 1130 571 C1030 539 957 511 870 538 C811 558 772 553 739 496 C700 432 650 420 543 405 C292 378 130 317-60 254Z" fill="url(#journey-water)" stroke="#d4e1eb" stroke-width="1.5" />
          <!-- Long island and its narrow southern channel, as in the reference. -->
          <path d="M310 332 C450 330 608 348 728 373 C842 397 928 440 1018 475 L996 508 C941 483 903 481 858 496 C803 516 791 512 767 465 C737 414 668 393 545 379 C439 366 350 355 310 332Z" fill="#f4f6f5" stroke="#cedae2" stroke-width="2" />
          <path d="M335 338 C447 339 530 348 600 360 L588 377 C464 367 380 353 335 338Z" fill="#dfe9df" />
          <path d="M201 395 C426 448 554 422 714 485 L747 534 C593 469 414 474 193 420Z" fill="#e1e9e1" opacity=".8" />
          <path d="M647 391 630 438" stroke="#fdfefe" stroke-width="10" />
          <path d="M647 391 630 438" stroke="#cbd5de" stroke-width="2" />
          <g fill="none" stroke="#f7fafc" stroke-width="1.5" opacity=".7">
            <path d="M-40 160 C160 250 340 300 553 324 S975 400 1156 470 S1390 587 1480 632" />
            <path d="M-40 233 C160 315 340 371 548 391" />
          </g>
          <text x="200" y="285" fill="#708da7" font-size="15" letter-spacing="10" transform="rotate(15 200 285)">АМУР</text>
          <text x="754" y="418" fill="#84918f" font-size="12" letter-spacing="2" transform="rotate(16 754 418)">о. Большой Хэйхэ</text>
          <g fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path :d="route" stroke="white" stroke-width="14" />
            <path :d="route" stroke="#b9c6f3" stroke-width="3" />
            <path :d="route" class="journey-map__route" pathLength="1" stroke="#4d6bff" stroke-width="3.5" />
          </g>
          <g fill="none" stroke="#4d6bff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M-4-4 2 0-4 4" transform="translate(600 177.392) rotate(3.635)" />
            <path d="M-4-4 2 0-4 4" transform="translate(1210 423.889) rotate(115.346)" />
            <path d="M-4-4 2 0-4 4" transform="translate(899 580) rotate(180)" />
            <path d="M-4-4 2 0-4 4" transform="translate(497 580) rotate(180)" />
          </g>
        </svg>

        <div class="journey-map__city journey-map__city--start">
          <p>РОССИЯ <span>· ДО ПОЕЗДКИ</span></p>
          <div><MapPin :size="19" aria-hidden="true" /> Благовещенск</div>
          <small>Представительство · ул. Ленина, 120</small>
        </div>
        <div class="journey-map__city journey-map__city--end">
          <p>КИТАЙ <span>· ЛЕЧЕНИЕ И ЗАБОТА</span></p>
          <div><MapPin :size="19" aria-hidden="true" /> Хэйхэ</div>
        </div>

        <ol class="journey-map__steps" aria-label="Этапы поездки и лечения">
          <li v-for="(step, index) in steps" :key="step.title" class="journey-map__step" :style="{ '--x': `${step.x}%`, '--y': `${step.y}%` }">
            <div v-if="index === 3" class="journey-map__crossing" aria-hidden="true">
              <svg viewBox="0 0 400 190" preserveAspectRatio="none">
                <path d="M-20 8C110 30 238 48 420 110V195C251 132 98 113-20 75Z" fill="#e0eaf3" />
                <path d="M85 75C177 79 260 106 312 139L288 153C230 123 153 119 85 75Z" fill="#f5f7f8" stroke="#cedae2" />
                <path d="M95 79 171 90 201 105 138 95Z" fill="#dfe9df" />
                <text x="238" y="83" fill="#708da7" font-size="12" letter-spacing="7" transform="rotate(15 238 83)">АМУР</text>
              </svg>
              <div class="journey-map__city"><p>КИТАЙ · ЛЕЧЕНИЕ И ЗАБОТА</p><div><MapPin :size="19" /> Хэйхэ</div></div>
            </div>
            <span class="journey-map__number" :class="{ 'journey-map__number--end': index === steps.length - 1 }" aria-hidden="true">{{ String(index + 1).padStart(2, '0') }}</span>
            <div class="journey-map__copy"><h3>{{ step.title }}</h3><p>{{ step.text }}</p></div>
          </li>
        </ol>
        <div class="journey-map__note"><span aria-hidden="true" />Схема этапов, не навигационная карта</div>
      </div>

      <footer class="journey__footer">
        <div class="journey__support"><span class="journey__support-icon"><Languages :size="22" aria-hidden="true" /></span><p>Вам не нужно разбираться во всём самостоятельно.<span>Русскоязычный координатор — до, во время и после поездки.</span></p></div>
      </footer>
    </div>
  </section>
</template>

<style scoped>
.journey { padding: 64px 48px 70px; scroll-margin-top: 80px; }
.journey__inner { max-width: 1440px; margin: auto; }
.journey__header { display: flex; align-items: flex-end; justify-content: space-between; gap: 40px; }
.journey__eyebrow { display: flex; align-items: center; gap: 10px; margin-bottom: 20px; color: #626c7d; font-size: 15px; }
.journey__eyebrow span { color: var(--color-brand); }
.journey h2 { font-size: clamp(38px, 4.3vw, 64px); font-weight: 500; line-height: 1.06; letter-spacing: -.055em; }
.journey h2 span { color: var(--color-brand-dark); }
.journey-map { position: relative; height: clamp(740px, 55.55vw, 800px); margin-top: 44px; overflow: hidden; border: 1px solid #e0e5ec; border-radius: 28px; background: #f5f7f8; }
.journey-map__drawing { position: absolute; width: 100%; height: 100%; inset: 0; }
.journey-map__route { stroke-dasharray: 1; stroke-dashoffset: 0; }
.is-visible .journey-map__route { animation: journey-draw 2.4s cubic-bezier(.25,.1,.25,1) both; }
@keyframes journey-draw { from { stroke-dashoffset: 1; } to { stroke-dashoffset: 0; } }
.journey-map__city { position: absolute; }
/* Match the SVG camera's 120 / 1440 horizontal offset. */
.journey-map__city--start { left: 3%; top: 4%; }
.journey-map__city--end { left: 3%; top: 56%; }
.journey-map__city p { color: #5d7083; font-size: 10px; font-weight: 600; letter-spacing: .13em; }
.journey-map__city p span { font-weight: 400; }
.journey-map__city div { display: flex; align-items: center; gap: 7px; margin-top: 8px; font-size: clamp(21px, 2.1vw, 29px); font-weight: 500; letter-spacing: -.04em; }
.journey-map__city svg { color: var(--color-brand); }
.journey-map__city small { display: block; margin: 7px 0 0 26px; font-size: 12px; color: #626c7d; }
.journey-map__steps { list-style: none; margin: 0; padding: 0; }
.journey-map__step { position: absolute; left: calc(var(--x) - 8.333333%); top: var(--y); width: 18.5%; }
.journey-map__number { position: absolute; top: -18px; left: -18px; display: grid; place-items: center; width: 36px; height: 36px; border: 1.5px solid var(--color-brand); border-radius: 50%; background: #f8faff; color: var(--color-brand-dark); font-size: 11px; font-weight: 600; box-shadow: 0 0 0 7px #f5f7f880; }
.journey-map__number--end { background: var(--color-brand); color: white; box-shadow: 0 0 0 7px #4d6bff15, 0 0 0 15px #4d6bff08; }
.journey-map__copy { position: relative; margin: 37px 0 0 -18px; border-radius: 12px; background: #f5f7f8e8; box-shadow: 0 0 22px 16px #f5f7f8e8; }
.journey-map__copy h3 { max-width: 235px; font-size: clamp(17px, 1.45vw, 21px); font-weight: 600; line-height: 1.3; letter-spacing: -.035em; text-wrap: balance; }
.journey-map__copy p { margin-top: 11px; color: #586577; font-size: 14px; line-height: 1.75; }
.journey-map__note { position: absolute; right: 32px; bottom: 27px; display: flex; align-items: center; gap: 9px; color: #667386; font-size: 11px; }
.journey-map__note span { width: 20px; height: 2px; background: var(--color-brand); }
.journey-map__crossing { display: none; }
.journey__footer { display: flex; align-items: center; justify-content: space-between; gap: 28px; padding: 28px 0 0; }
.journey__support { display: flex; align-items: center; gap: 16px; }
.journey__support-icon { display: grid; place-items: center; flex-shrink: 0; width: 48px; height: 48px; background: #e9edfa; border-radius: 50%; color: var(--color-brand-dark); }
.journey__support p { font-size: 14px; font-weight: 500; line-height: 1.7; }
.journey__support p span { display: block; color: #626c7d; font-size: 13px; font-weight: 400; }
@media (min-width: 901px) {
  .journey-map__step:nth-child(-n + 3) .journey-map__copy { margin-top: 48px; box-shadow: 0 8px 18px 8px #f5f7f8e8; }
  .journey-map__step:nth-child(2) .journey-map__copy { width: 100%; margin-top: 56px; margin-left: -35%; box-shadow: 0 8px 14px 4px #f5f7f8e8; }
  .journey-map__step:nth-child(3) .journey-map__copy { position: absolute; top: 0; left: 34px; width: calc(100% - 18px); margin: 0; transform: translateY(-50%); box-shadow: 8px 0 18px 8px #f5f7f8e8; }
}
@media (min-width: 901px) and (max-width: 1150px) {
  .journey { padding-inline: 32px; }
  .journey__header { gap: 24px; }
  .journey-map__copy p { font-size: 13px; }
  .journey-map__city p { font-size: 9px; }
}
@media (max-width: 900px) {
  .journey { padding: 32px 24px 64px; }
  .journey__header { display: block; }
  .journey h2 { font-size: clamp(34px, 6.8vw, 52px); }
  .journey-map { height: auto; margin-top: 32px; padding: 32px 28px 65px; border-radius: 22px; background-color: #f5f7f8; background-image: linear-gradient(105deg, transparent 48%, #e7ecef80 49%, #e7ecef80 50%, transparent 51%), linear-gradient(15deg, transparent 48%, #e7ecef80 49%, #e7ecef80 50%, transparent 51%); background-size: 100px 100px; }
  .journey-map__drawing { display: none; }
  .journey-map__city--start { position: relative; left: auto; top: auto; margin: 0 0 40px 0; }
  .journey-map__city--start div { font-size: 26px; }
  .journey-map__city--end { display: none; }
  .journey-map__crossing { display: block; position: absolute; top: -175px; left: 54px; right: 0; height: 150px; }
  .journey-map__crossing > svg { position: absolute; top: -30px; left: -90px; width: calc(100% + 130px); height: 110px; }
  .journey-map__crossing .journey-map__city { top: 90px; }
  .journey-map__crossing .journey-map__city div { font-size: 25px; }
  .journey-map__steps { position: relative; }
  .journey-map__step { position: relative; left: auto; top: auto; width: auto; min-height: 145px; padding: 0 0 32px 54px; }
  .journey-map__step:not(:last-child)::before { content: ''; position: absolute; z-index: 1; top: 0; bottom: 0; left: 14px; width: 2px; background: var(--color-brand); box-shadow: 0 0 0 5px #fff8; }
  .journey-map__step:nth-child(3)::before { bottom: -175px; }
  .journey-map__step:nth-child(4) { margin-top: 175px; }
  .journey-map__step:last-child { min-height: 0; padding-bottom: 0; }
  .journey-map__number { left: -3px; top: 0; }
  .journey-map__number { z-index: 2; }
  .journey-map__copy { margin: 0; padding-top: 3px; box-shadow: 0 0 15px 8px #f5f7f8e8; }
  .journey-map__copy h3 { max-width: none; font-size: 19px; text-wrap: initial; }
  .journey-map__copy p { max-width: 470px; font-size: 14px; margin-top: 8px; }
  .journey-map__note { right: 20px; bottom: 25px; font-size: 10px; }
  .journey__footer { align-items: flex-start; flex-direction: column; gap: 22px; }
}
@media (max-width: 380px) {
  .journey { padding-inline: 16px; }
  .journey h2 { font-size: 32px; }
  .journey-map { padding-inline: 20px; }
  .journey-map__step { padding-left: 48px; }
  .journey-map__copy h3 { font-size: 17px; }
  .journey-map__copy p { font-size: 13px; }
  .journey-map__crossing { left: 48px; }
}
@media (prefers-reduced-motion: reduce) {
  .is-visible .journey-map__route { animation: none; }
}
</style>
