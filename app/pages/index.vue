<script setup lang="ts">
import { ArrowRight, BadgeCheck, CircleCheck, Clock3, FileCheck2, Languages, MapPin, Plane, ShieldCheck, Sparkles } from '@lucide/vue'
import { faqs, journeySteps, services, testimonials } from '~/data/content'

useSeoMeta({
  title: 'Стоматология в Хэйхэ — лечение зубов в Китае | Жуйкан',
  description: 'Лечение, имплантация и протезирование зубов в клинике Жуйкан в Хэйхэ. Предварительный расчёт по снимку и сопровождение из Благовещенска.',
  ogTitle: 'Стоматология Жуйкан в Хэйхэ',
  ogDescription: 'Узнайте план лечения, сроки и стоимость до поездки в Китай.',
  ogType: 'website',
})

useSchemaOrg([
  defineOrganization({ name: 'Стоматологическая клиника Жуйкан', description: 'Стоматологическое лечение в Хэйхэ с сопровождением из Благовещенска.' }),
  defineWebPage({ name: 'Стоматология Жуйкан в Хэйхэ', description: 'Лечение и протезирование зубов в Китае с предварительным расчётом по снимку.' }),
])

const advantages = [
  { icon: FileCheck2, title: 'Стоимость до поездки', text: 'Получаете предварительный план и ориентировочный бюджет по снимку.' },
  { icon: Languages, title: 'На русском языке', text: 'Координатор помогает с коммуникацией и остаётся на связи.' },
  { icon: MapPin, title: 'Представитель в России', text: 'Личный контакт и офис в Благовещенске до и после лечения.' },
  { icon: ShieldCheck, title: 'Документы и гарантии', text: 'Условия лечения согласуются заранее и фиксируются документально.' },
]
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
              <span>Стоматология в Хэйхэ · Китай</span>
            </div>

            <h1 class="mt-8 max-w-[720px] text-balance text-[clamp(2.75rem,5vw,4.75rem)] font-medium leading-[.98] tracking-[-.055em] text-ink sm:mt-10">
              Лечение зубов в Китае <span class="text-brand-dark">с понятным планом</span> до поездки
            </h1>

            <p class="mt-6 max-w-[610px] text-base leading-7 text-ink/62 sm:text-lg sm:leading-8">
              Отправьте панорамный снимок или КТ. Врач предварительно оценит ситуацию, а координатор сообщит возможный план, сроки и стоимость.
            </p>

            <ul class="mt-7 flex max-w-[700px] flex-col gap-3 text-sm font-medium text-ink/74 sm:flex-row sm:flex-wrap sm:gap-x-7 sm:gap-y-3">
              <li class="flex items-start gap-2.5"><CircleCheck class="mt-0.5 size-[18px] shrink-0 text-brand" />Расчёт по снимку</li>
              <li class="flex items-start gap-2.5"><CircleCheck class="mt-0.5 size-[18px] shrink-0 text-brand" />Координатор на русском</li>
              <li class="flex items-start gap-2.5"><CircleCheck class="mt-0.5 size-[18px] shrink-0 text-brand" />Помощь с поездкой</li>
            </ul>

            <div class="mt-8 flex flex-col items-start gap-3 sm:flex-row">
              <AuraButton href="#calculation">Рассчитать стоимость</AuraButton>
              <AuraButton to="/how-it-works" variant="secondary">Как проходит поездка</AuraButton>
            </div>
          </div>
        </div>

        <div class="mt-10 flex max-w-[740px] flex-wrap gap-x-7 gap-y-2 border-t border-ink/10 pt-5 text-[13px] font-medium text-ink/52 sm:text-sm">
          <span>Представительство в Благовещенске</span>
          <span>Документы и гарантии</span>
          <span>Поддержка после лечения</span>
        </div>
      </div>
    </section>

    <section class="px-5 py-10 md:px-8 lg:px-12 lg:py-16" aria-label="Преимущества">
      <div class="mx-auto grid max-w-[1440px] gap-px overflow-hidden rounded-[2rem] border border-ink/8 bg-ink/8 sm:grid-cols-2 lg:grid-cols-4">
        <article v-for="item in advantages" :key="item.title" class="bg-paper p-6 md:p-8"><component :is="item.icon" class="size-6 text-brand" /><h2 class="mt-6 text-lg font-bold tracking-[-0.02em]">{{ item.title }}</h2><p class="mt-2 text-sm leading-6 text-ink/55">{{ item.text }}</p></article>
      </div>
    </section>

    <section id="process" class="px-5 py-20 md:px-8 lg:px-12 lg:py-30">
      <div class="mx-auto max-w-[1440px]">
        <div class="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between"><SectionHeading eyebrow="Понятный маршрут" title="От первого сообщения до возвращения домой" text="Мы убрали неизвестность из поездки: каждый этап заранее понятен, а рядом остаётся русскоязычный координатор." /><NuxtLink to="/how-it-works" class="inline-flex items-center gap-2 font-bold text-brand">Подробно о поездке <ArrowRight class="size-4" /></NuxtLink></div>
        <div class="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          <article v-for="step in journeySteps" :key="step.number" class="group relative min-h-64 overflow-hidden rounded-[1.75rem] border border-ink/8 bg-white p-7"><span class="text-6xl font-semibold tracking-[-0.08em] text-brand/12 transition group-hover:text-brand/20">{{ step.number }}</span><h3 class="mt-10 text-xl font-bold tracking-[-0.03em]">{{ step.title }}</h3><p class="mt-3 leading-7 text-ink/55">{{ step.text }}</p></article>
        </div>
      </div>
    </section>

    <section class="bg-paper px-5 py-20 md:px-8 lg:px-12 lg:py-30">
      <div class="mx-auto max-w-[1440px]">
        <div class="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div class="max-w-[780px]">
            <p class="flex items-center gap-2.5 text-base font-medium text-ink/38"><span class="text-sm text-brand" aria-hidden="true">◇</span>Направления лечения</p>
            <h2 class="mt-5 text-balance text-[clamp(3rem,5vw,4.5rem)] font-medium leading-[1] tracking-[-.05em] text-ink">Всё необходимое <span class="text-brand-dark">в одной клинике</span></h2>
          </div>
          <div class="max-w-[390px] lg:pb-1">
            <p class="text-base leading-7 text-ink/52">Выберите направление, чтобы узнать о подготовке, этапах, сроках и предварительной стоимости лечения.</p>
            <NuxtLink to="/services" class="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-dark hover:text-brand">Все услуги <ArrowRight class="size-4" /></NuxtLink>
          </div>
        </div>
        <div class="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3"><ServiceCard v-for="(service, index) in services" :key="service.slug" :service="service" :index="index" /></div>
      </div>
    </section>

    <section id="calculation" class="bg-[linear-gradient(to_bottom,#f5f7fb_0%,#f3f4f7_18%,#f3f4f7_82%,#f5f7fb_100%)] px-5 py-20 md:px-8 lg:px-12 lg:py-30">
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

    <section class="bg-paper px-5 py-20 md:px-8 lg:px-12 lg:py-30">
      <div class="mx-auto max-w-[1440px]">
        <div class="mb-12 max-w-2xl md:mb-14">
          <p class="text-base font-medium text-ink/38">Стоимость</p>
          <h2 class="mt-4 text-balance text-5xl font-medium leading-[.98] tracking-[-0.055em] text-ink md:text-7xl">
            Лечение с понятной <span class="text-brand-dark">стоимостью</span>
          </h2>
        </div>

        <div class="grid gap-5">
          <NuxtLink
            v-for="(service, index) in services.slice(0, 5)"
            :key="service.slug"
            :to="`/services/${service.slug}`"
            class="group grid min-h-[100px] items-center gap-4 overflow-hidden rounded-2xl border border-ink/8 px-5 py-5 transition duration-300 hover:border-transparent hover:bg-[#e8eefc] md:grid-cols-[40px_minmax(220px,1fr)_minmax(200px,280px)_118px_48px_48px] md:gap-6 md:px-5 md:py-[26px] lg:gap-8"
          >
            <span class="text-lg font-medium text-ink/38">{{ String(index + 1).padStart(2, '0') }}</span>
            <h3 class="text-2xl font-semibold tracking-[-0.035em] text-ink md:text-3xl">{{ service.title }}</h3>
            <p class="hidden text-sm leading-5 text-ink/60 md:block">{{ service.short }}</p>
            <div class="col-start-2 md:col-start-auto">
              <p class="text-[10px] font-medium uppercase tracking-[.04em] text-ink/38">От</p>
              <p class="mt-0.5 text-xl font-medium leading-6 tracking-[-.025em] text-brand-dark">{{ service.price.replace(/^от\s*/i, '') }}</p>
            </div>
            <span class="hidden size-12 overflow-hidden rounded-2xl bg-white opacity-0 transition duration-300 group-hover:opacity-100 md:block">
              <NuxtImg src="/images/dental-hero.png" alt="" class="size-full scale-110 object-cover transition duration-500 group-hover:scale-100" width="96" height="96" format="webp" quality="75" />
            </span>
            <span class="col-start-3 row-span-2 row-start-1 grid size-12 place-items-center justify-self-end rounded-2xl border border-ink/8 text-ink transition duration-300 group-hover:border-brand group-hover:bg-brand group-hover:text-white md:col-start-auto md:row-span-1 md:row-start-auto">
              <ArrowRight class="size-4 -rotate-45 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </NuxtLink>
        </div>

        <div class="mt-10 flex justify-center">
          <AuraButton to="/prices" variant="secondary">Все направления и цены</AuraButton>
        </div>
      </div>
    </section>

    <section class="px-5 pb-20 md:px-8 lg:px-12 lg:pb-30">
      <div class="mx-auto grid max-w-[1440px] overflow-hidden rounded-[2.5rem] bg-[#e8eefc] lg:grid-cols-2">
        <div class="p-7 md:p-12 lg:p-16"><SectionHeading eyebrow="Безопасность" title="Доверие строится на документах, а не обещаниях" text="До поездки пациент понимает, кто отвечает за сопровождение, какие документы выдаются и как действуют гарантийные условия." /><div class="mt-10 grid gap-5"><div v-for="item in ['Лицензия клиники и перевод документов', 'Согласованный план лечения', 'Документы после проведённых процедур', 'Связь с представителем после возвращения']" :key="item" class="flex items-center gap-3 font-semibold"><CircleCheck class="size-5 shrink-0 text-brand" />{{ item }}</div></div><NuxtLink to="/clinic" class="mt-9 inline-flex items-center gap-2 font-bold text-brand">О клинике и гарантиях <ArrowRight class="size-4" /></NuxtLink></div>
        <div class="grid min-h-[460px] content-between bg-brand p-7 text-white md:p-12 lg:p-16"><div class="flex items-center justify-between"><ShieldCheck class="size-12" /><span class="rounded-full border border-white/20 px-4 py-2 text-xs font-bold uppercase tracking-[.16em]">Проверяемые факты</span></div><blockquote class="text-3xl font-semibold leading-tight tracking-[-0.04em] md:text-4xl">«Вы заранее знаете порядок лечения, ориентировочную стоимость и к кому обратиться с вопросом»</blockquote><p class="text-sm text-white/55">Список и изображения документов будут заменены на подтверждённые материалы клиники перед публикацией.</p></div>
      </div>
    </section>

    <section class="bg-[linear-gradient(to_bottom,#f5f7fb_0%,#f3f4f7_18%,#f3f4f7_82%,#f5f7fb_100%)] px-5 py-20 md:px-8 lg:px-12 lg:py-30">
      <div class="mx-auto max-w-[1440px]"><div class="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between"><SectionHeading eyebrow="Пациенты о поездке" title="Реальные истории важнее рекламных обещаний" text="Ниже показан формат отзывов. Перед публикацией демонстрационные тексты заменяются подтверждёнными отзывами пациентов." /><NuxtLink to="/reviews" class="inline-flex items-center gap-2 font-bold text-brand">Все отзывы <ArrowRight class="size-4" /></NuxtLink></div><div class="mt-12 grid gap-4 lg:grid-cols-3"><figure v-for="testimonial in testimonials" :key="testimonial.name" class="flex min-h-80 flex-col rounded-[1.75rem] bg-white p-7 md:p-8"><div class="flex gap-1 text-accent" aria-label="5 из 5"><Sparkles v-for="n in 5" :key="n" class="size-4" /></div><blockquote class="mt-8 text-lg leading-8 text-ink/75">«{{ testimonial.quote }}»</blockquote><figcaption class="mt-auto pt-8"><p class="font-bold">{{ testimonial.name }}, {{ testimonial.city }}</p><p class="mt-1 text-sm text-ink/42">{{ testimonial.treatment }} · пример оформления</p></figcaption></figure></div></div>
    </section>

    <section class="px-5 py-20 md:px-8 lg:px-12 lg:py-30">
      <div class="mx-auto grid max-w-[1440px] gap-12 lg:grid-cols-[.75fr_1.25fr]"><div><SectionHeading eyebrow="Представительство" title="Рядом ещё до поездки" text="В Благовещенске можно обсудить лечение, передать снимок и задать вопросы о дороге в Хэйхэ." /><div class="mt-8 flex items-start gap-3 text-ink/65"><MapPin class="mt-1 size-5 shrink-0 text-accent" /><p><strong class="block text-ink">Турбюро Профсоюзы</strong>г. Благовещенск, ул. Ленина, 120, офис 8</p></div><NuxtLink to="/contacts" class="mt-7 inline-flex items-center gap-2 font-bold text-brand">Адрес и режим работы <ArrowRight class="size-4" /></NuxtLink></div><div class="grid min-h-[420px] overflow-hidden rounded-[2rem] bg-ink text-white sm:grid-cols-2"><div class="flex flex-col justify-between p-7 md:p-10"><Plane class="size-10 text-[#9aabff]" /><div><p class="text-5xl font-semibold tracking-[-0.06em]">Рядом</p><p class="mt-3 leading-7 text-white/55">Представитель помогает пройти путь из Благовещенска в Хэйхэ и обратно.</p></div></div><div class="relative min-h-64 bg-[radial-gradient(circle_at_30%_30%,#4d6bff_0,transparent_42%),linear-gradient(145deg,#1b3bd6,#0a1128)]"><div class="absolute left-[18%] top-[24%] size-4 rounded-full border-4 border-white bg-accent shadow-[0_0_0_10px_rgba(255,255,255,.1)]" /><div class="absolute bottom-[22%] right-[20%] size-4 rounded-full border-4 border-white bg-[#9aabff] shadow-[0_0_0_10px_rgba(255,255,255,.1)]" /><svg class="absolute inset-0 size-full" viewBox="0 0 400 400" fill="none" aria-hidden="true"><path d="M90 110C165 140 185 275 305 300" stroke="white" stroke-opacity=".7" stroke-width="2" stroke-dasharray="8 9" /></svg><span class="absolute left-[12%] top-[13%] text-sm font-bold">Благовещенск</span><span class="absolute bottom-[12%] right-[14%] text-sm font-bold">Хэйхэ</span></div></div></div>
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

    <section class="px-5 py-10 md:px-8 lg:px-12 lg:py-16">
      <div class="relative mx-auto max-w-[1440px] overflow-hidden rounded-[2.5rem] border border-ink/8 bg-paper">
        <NuxtImg src="/images/contact-illustration-v2.png" alt="Смартфон и символы связи с координатором" class="cta-illustration absolute inset-y-0 right-0 h-full w-[72%] object-contain object-right sm:w-[64%] lg:w-[60%]" width="1680" height="945" format="webp" quality="91" loading="lazy" />
        <div class="absolute inset-0 bg-[linear-gradient(90deg,rgba(245,247,251,.99)_0%,rgba(245,247,251,.96)_49%,rgba(245,247,251,.5)_70%,rgba(245,247,251,.06)_100%)]" />
        <div class="relative max-w-[870px] p-7 md:p-10 lg:p-12 xl:p-14">
          <p class="text-[15px] font-medium tracking-[-.01em] text-brand-dark">Следующий шаг</p>
          <h2 class="mt-4 max-w-[720px] text-balance text-3xl font-medium leading-[1.02] tracking-[-0.045em] text-ink md:text-5xl">Обсудите лечение с координатором</h2>
          <p class="mt-5 max-w-[620px] text-base leading-7 text-ink/58">Позвоните или напишите — подскажем, какой снимок нужен, как его передать и чего ожидать дальше.</p>
          <div class="mt-7 max-w-[760px]"><ContactChannels compact inline /></div>
          <div class="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-xs text-ink/45"><span class="flex items-center gap-2"><Clock3 class="size-4 text-brand" />Ответ координатора</span><span class="flex items-center gap-2"><FileCheck2 class="size-4 text-brand" />Без предоплаты и обязательств</span></div>
        </div>
      </div>
    </section>
  </main>
</template>
