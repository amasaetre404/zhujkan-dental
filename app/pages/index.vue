<script setup lang="ts">
import CoordinatorCta from '~/components/CoordinatorCta.vue'
import JourneyMap from '~/components/JourneyMap.vue'
import CareAdvantages from '~/components/CareAdvantages.vue'
import { ArrowRight, BadgeCheck, CircleCheck, Clock3, FileCheck2, Sparkles } from '@lucide/vue'
import { faqs, services, testimonials } from '~/data/content'

// Keep the first CTA available for reuse, but show only the final CTA for now.
const showSnapshotCta = false

usePageSeo('Лечение и протезирование зубов в Хэйхэ — ГидМед', 'Лечение и протезирование зубов в клинике Жуйкан в Хэйхэ. Предварительный расчёт по снимку, помощь с поездкой и сопровождение на русском языке.', '/')

useSchemaOrg([
  defineOrganization({ name: 'ГидМед — Турбюро Профсоюзы', description: 'Стоматологическое лечение в Хэйхэ с сопровождением из Благовещенска.' }),
  defineWebPage({ name: 'ГидМед — лечение в Хэйхэ с сопровождением', description: 'Лечение и протезирование зубов в Китае с предварительным расчётом по снимку.' }),
])

</script>

<template>
  <main>
    <section class="relative min-h-[calc(100svh-80px)] overflow-hidden bg-[#edf2f7]">
      <div class="absolute inset-0">
        <NuxtImg
          src="/images/hero-doctor-clinic-v5.png"
          alt="Врач в современном стоматологическом кабинете — иллюстративное изображение"
          class="size-full object-cover object-[61%_center] sm:object-[58%_center] lg:object-center"
          width="1680"
          height="944"
          preload
          format="png"
          quality="100"
        />
      </div>
      <div class="absolute inset-0 bg-[linear-gradient(90deg,rgba(242,246,250,.9)_0%,rgba(242,246,250,.82)_48%,rgba(242,246,250,.2)_78%,rgba(242,246,250,0)_100%)] lg:hidden" />
      <div class="absolute inset-0 hidden bg-[linear-gradient(90deg,rgba(242,246,250,.88)_0%,rgba(242,246,250,.76)_27%,rgba(242,246,250,.38)_41%,rgba(242,246,250,.08)_51%,rgba(242,246,250,0)_59%)] lg:block" />
      <div class="absolute inset-x-0 bottom-0 h-48 bg-[linear-gradient(to_bottom,rgba(245,247,251,0)_0%,rgba(245,247,251,0)_40%,rgba(245,247,251,.14)_55%,rgba(245,247,251,.68)_82%,#f5f7fb_100%)] sm:h-56" />

      <div class="relative z-10 mx-auto flex min-h-[calc(100svh-80px)] max-w-[1536px] flex-col justify-between px-5 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-12">
        <div class="flex flex-1 items-center py-5 sm:py-7 lg:py-9">
          <div class="max-w-[740px]">
            <div class="flex items-center gap-2.5 text-[13px] font-medium text-ink/48 sm:text-sm">
              <span class="size-1.5 rotate-45 border border-brand" aria-hidden="true" />
              <span>Клиника «Жуйкан» · Китай</span>
            </div>

            <h1 class="mt-8 max-w-[720px] text-balance text-[clamp(2.75rem,5vw,4.75rem)] font-medium leading-[.98] tracking-[-.055em] text-ink sm:mt-10">
              Лечение и протезирование зубов <span class="text-brand-dark">в Хэйхэ</span>
            </h1>

            <p class="mt-6 max-w-[610px] text-base leading-7 text-ink/62 sm:text-lg sm:leading-8">
              Поможем организовать поездку и лечение с сопровождением на русском языке.
            </p>

            <ul class="mt-7 flex max-w-[700px] flex-col gap-3 text-sm font-medium text-ink/74 sm:flex-row sm:flex-wrap sm:gap-x-7 sm:gap-y-3">
              <li class="flex items-start gap-2.5"><CircleCheck class="mt-0.5 size-[18px] shrink-0 text-brand" />Предварительный расчёт по снимку</li>
              <li class="flex items-start gap-2.5"><CircleCheck class="mt-0.5 size-[18px] shrink-0 text-brand" />Помощь с поездкой</li>
              <li class="flex items-start gap-2.5"><CircleCheck class="mt-0.5 size-[18px] shrink-0 text-brand" />Офис в Благовещенске</li>
            </ul>

            <div class="mt-8 flex flex-col items-start gap-3 sm:flex-row">
              <AuraButton contact>Узнать стоимость</AuraButton>
              <AuraButton to="/services" variant="secondary">Услуги и цены</AuraButton>
            </div>
          </div>
        </div>

      </div>
    </section>

    <section class="bg-paper px-5 pt-8 pb-20 md:px-8 md:pt-16 lg:px-12 lg:pb-30">
      <div class="mx-auto max-w-[1440px]">
        <div class="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div class="max-w-[780px]">
            <p class="flex items-center gap-2.5 text-base font-medium text-ink/38"><span class="text-sm text-brand" aria-hidden="true">◇</span>Услуги</p>
            <h2 class="mt-5 text-balance text-[clamp(3rem,5vw,4.5rem)] font-medium leading-[1] tracking-[-.05em] text-ink">Всё необходимое <span class="text-brand-dark">в одной клинике</span></h2>
          </div>
          <div class="max-w-[390px] lg:pb-1">
            <p class="text-base leading-7 text-ink/52">Выберите услугу, чтобы узнать о подготовке, этапах, сроках и предварительной стоимости лечения.</p>
          </div>
        </div>
        <div class="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3"><ServiceCard v-for="(service, index) in services" :key="service.slug" :service="service" :index="index" /></div>
        <div class="mt-10 flex justify-center"><AuraButton to="/services" variant="secondary">Все услуги и цены</AuraButton></div>
      </div>
    </section>

    <JourneyMap />

    <section v-if="showSnapshotCta" id="snapshot-calculation" class="bg-[linear-gradient(to_bottom,#f5f7fb_0%,#f3f4f7_18%,#f3f4f7_82%,#f5f7fb_100%)] px-5 py-20 md:px-8 lg:px-12 lg:py-30">
      <div class="mx-auto max-w-[1440px]">
        <div class="relative overflow-hidden rounded-[2.5rem] border border-ink/8 bg-paper">
          <NuxtImg src="/images/calculation-illustration-v2.png" alt="Панорамный снимок, смартфон и модель зуба" class="cta-illustration absolute inset-y-0 right-0 htoken_budgetfull w-[72%] object-contain object-right sm:w-[64%] lg:w-[60%]" width="1680" height="945" format="webp" quality="91" loading="lazy" />
          <div class="absolute inset-0 bg-[linear-gradient(90deg,rgba(245,247,251,.99)_0%,rgba(245,247,251,.96)_48%,rgba(245,247,251,.52)_68%,rgba(245,247,251,.08)_100%)] sm:bg-[linear-gradient(90deg,rgba(245,247,251,.98)_0%,rgba(245,247,251,.94)_48%,rgba(245,247,251,.22)_72%,rgba(245,247,251,.04)_100%)]" />
          <div class="relative max-w-[850px] p-7 md:p-10 lg:p-12 xl:p-14">
            <p class="text-[15px] font-medium tracking-[-.01em] text-brand-dark">Расчёт по снимку</p>
            <h2 class="mt-4 max-w-[720px] text-balance text-3xl font-medium leading-[1.02] tracking-[-.045em] text-ink md:text-5xl">Получите предварительный план до поездки</h2>
            <p class="mt-5 max-w-[620px] text-base leading-7 text-ink/58">Свяжитесь с координатором и передайте панорамный снимок или КТ. Врач оценит ситуацию, возможные сроки и бюджет.</p>
            <div class="mt-7 max-w-[760px]"><ContactChannels compact inline /></div>
            <p class="mt-5 flex items-start gap-2 text-xs leading-5 text-ink/42"><BadgeCheck class="mt-0.5 size-4 shrink-0 text-brand" />Финальный план лечения подтверждается после очной диагностики.</p>
          </div>
        </div>
      </div>
    </section>

    <CareAdvantages />

    <section class="bg-paper px-5 py-20 md:px-8 lg:px-12 lg:py-30">
      <div class="mx-auto max-w-[1440px]">
        <div class="mb-12 max-w-2xl md:mb-14">
          <p class="text-base font-medium text-ink/38">Стоимость</p>
          <h2 class="mt-4 text-balance text-5xl font-medium leading-[.98] tracking-[-0.055em] text-ink md:text-7xl">
            Лечение с понятной <span class="text-brand-dark">стоимостью</span>
          </h2>
        </div>

        <div class="grid gap-5">
          <article
            v-for="(service, index) in services.slice(0, 5)"
            :key="service.slug"
            class="grid min-h-[100px] grid-cols-[28px_minmax(0,1fr)] items-center gap-x-4 gap-y-3 rounded-2xl border border-ink/8 px-5 py-5 md:grid-cols-[40px_minmax(0,1fr)_minmax(0,1fr)_118px] md:gap-6 md:py-[26px] lg:gap-8"
          >
            <span class="text-lg font-medium text-ink/38">{{ String(index + 1).padStart(2, '0') }}</span>
            <h3 class="text-2xl font-semibold tracking-[-0.035em] text-ink md:text-3xl">{{ service.title }}</h3>
            <p class="hidden text-sm leading-5 text-ink/60 md:block">{{ service.short }}</p>
            <div class="col-start-2 flex items-baseline gap-1.5 md:col-start-auto md:block">
              <p class="text-[10px] font-medium uppercase tracking-[.04em] text-ink/38">От</p>
              <p class="whitespace-nowrap text-xl font-medium leading-6 tracking-[-.025em] text-brand-dark md:mt-0.5">{{ service.price.replace(/^от\s*/i, '') }}</p>
            </div>
          </article>
        </div>

        <div class="mt-10 flex justify-center">
          <AuraButton to="/services" variant="secondary">Все услуги и цены</AuraButton>
        </div>
      </div>
    </section>

    <section id="trust" class="scroll-mt-24 px-5 pb-20 md:px-8 lg:px-12 lg:pb-30">
      <div class="mx-auto grid max-w-[1440px] overflow-hidden rounded-[2.5rem] bg-[#e8eefc] lg:grid-cols-2">
        <div class="p-7 md:p-12 lg:p-16"><SectionHeading eyebrow="Безопасность" title="Доверие строится на документах, а не обещаниях" text="До поездки пациент понимает, кто отвечает за сопровождение, какие документы выдаются и как действуют гарантийные условия." /><div class="mt-10 grid gap-5"><div v-for="item in ['Лицензия клиники и перевод документов', 'Согласованный план лечения', 'Документы после проведённых процедур', 'Связь с представителем после возвращения']" :key="item" class="flex items-center gap-3 font-semibold"><CircleCheck class="size-5 shrink-0 text-brand" />{{ item }}</div></div><NuxtLink to="/clinic" class="mt-9 inline-flex items-center gap-2 font-bold text-brand">О клинике и гарантиях <ArrowRight class="size-4" /></NuxtLink></div>
        <figure class="relative m-0 min-h-[440px] overflow-hidden bg-[#dce5ed] sm:min-h-[540px] lg:min-h-0">
          <NuxtImg
            src="/images/trust-consultation-v1.png"
            alt="Врач обсуждает с пациенткой план лечения за столом — иллюстративная сцена"
            class="absolute inset-0 size-full object-cover object-[50%_40%]"
            width="1122"
            height="1402"
            sizes="100vw lg:50vw xl:720px"
            format="webp"
            quality="90"
            loading="lazy"
            decoding="async"
          />
          <div class="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(10,17,40,.78),rgba(10,17,40,.16)_25%,transparent_48%)]" />
          <figcaption class="absolute inset-x-0 bottom-0 p-7 text-white md:p-10 lg:p-12">
            <p class="max-w-[400px] text-2xl font-medium leading-tight tracking-[-.035em] md:text-3xl">План лечения<br>обсуждаем вместе</p>
            <p class="mt-4 text-xs leading-5 text-white/75">Иллюстративное изображение</p>
          </figcaption>
        </figure>
      </div>
    </section>

    <section class="bg-[linear-gradient(to_bottom,#f5f7fb_0%,#f3f4f7_18%,#f3f4f7_82%,#f5f7fb_100%)] px-5 py-20 md:px-8 lg:px-12 lg:py-30">
      <div class="mx-auto max-w-[1440px]"><div class="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between"><SectionHeading eyebrow="Пациенты о поездке" title="Реальные истории важнее рекламных обещаний" /></div><div class="mt-12 grid gap-4 lg:grid-cols-3"><figure v-for="testimonial in testimonials" :key="testimonial.name" class="flex min-h-80 flex-col rounded-[1.75rem] bg-white p-7 md:p-8"><div class="flex gap-1 text-accent" aria-label="5 из 5"><Sparkles v-for="n in 5" :key="n" class="size-4" /></div><blockquote class="mt-8 text-lg leading-8 text-ink/75">«{{ testimonial.quote }}»</blockquote><figcaption class="mt-auto pt-8"><p class="font-bold">{{ testimonial.name }}, {{ testimonial.city }}</p><p class="mt-1 text-sm text-ink/42">{{ testimonial.treatment }}</p></figcaption></figure></div></div>
    </section>


    <section class="bg-paper px-5 pb-[72px] pt-20 md:px-6 md:pb-24 lg:pt-30">
      <div class="mx-auto flex max-w-[1440px] flex-col gap-10">
        <div class="flex items-center gap-2.5 text-xl font-medium text-ink/32">
          <span class="text-sm text-brand" aria-hidden="true">◇</span>
          <span>FAQ</span>
        </div>

        <div class="flex flex-col gap-10 md:gap-14">
          <div class="flex flex-col items-start gap-5 md:flex-row md:items-end md:justify-between md:gap-12">
            <h2 class="max-w-[860px] text-balance text-[clamp(3rem,5vw,4rem)] font-medium leading-[1.05] tracking-[-.02em] text-ink">
              <span class="md:whitespace-nowrap"><span class="text-brand-dark">Вопросы</span>, которые задают</span><br class="hidden md:block" />
              <span class="md:whitespace-nowrap">перед поездкой</span>
            </h2>
            <p class="w-full max-w-[300px] text-[13px] leading-[1.4] text-ink/42">
              Короткие ответы о лечении, ценах и поездке. Если вашего вопроса здесь нет — координатор поможет.
            </p>
          </div>

          <FaqAccordion :items="faqs.slice(0, 6)" />
        </div>
      </div>
    </section>

    <CoordinatorCta />
  </main>
</template>
