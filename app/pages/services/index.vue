<script setup lang="ts">
import { priceCategories } from '~/data/prices'
usePageSeo('Цены на лечение зубов в Хэйхэ — ГидМед', 'Прайс стоматологии Жуйкан в Хэйхэ: лечение зубов, имплантация, протезирование и коронки. Стоимость услуг и предварительный расчёт перед поездкой в Китай.', '/services')
const route = useRoute()
const router = useRouter()
const selected = computed(() => priceCategories.find(item => item.id === route.query.category) ?? priceCategories[0])
async function select(id: string) {
  await router.replace({ query: { ...route.query, category: id } })
}
async function navigateTabs(event: KeyboardEvent, index: number) {
  const keys = ['ArrowLeft', 'ArrowRight', 'Home', 'End']
  if (!keys.includes(event.key)) return
  event.preventDefault()
  const count = priceCategories.length
  const next = event.key === 'Home' ? 0 : event.key === 'End' ? count - 1 : (index + (event.key === 'ArrowRight' ? 1 : -1) + count) % count
  const category = priceCategories[next]!
  await select(category.id)
  document.getElementById('tab-' + category.id)?.focus({ preventScroll: true })
  document.getElementById('tab-' + category.id)?.scrollIntoView({ block: 'nearest', inline: 'nearest' })
}
</script>

<template>
  <main>
    <section class="px-5 pb-8 pt-12 md:px-8 md:pt-20 lg:px-12">
      <div class="mx-auto max-w-[1440px]">
        <p class="text-sm font-medium text-brand-dark">Услуги и цены</p>
        <div class="mt-5 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <h1 class="max-w-[800px] text-[clamp(2.5rem,5vw,4.5rem)] font-medium leading-[1.04] tracking-[-.045em]">Цены на лечение зубов <span class="text-brand-dark">в Хэйхэ</span></h1>
        </div>

        <div role="tablist" aria-label="Категории стоматологических услуг" class="price-tabs mt-10 flex gap-2 overflow-x-auto border-b border-ink/10 pb-4 pt-1 md:mt-14">
          <button v-for="(category, index) in priceCategories" :id="'tab-' + category.id" :key="category.id" type="button" role="tab" :aria-selected="selected.id === category.id" :aria-controls="'panel-' + category.id" :tabindex="selected.id === category.id ? 0 : -1"
            class="shrink-0 rounded-xl px-5 py-3.5 text-sm font-medium transition-colors"
            :class="selected.id === category.id ? 'bg-brand text-white' : 'text-[#59657b] hover:bg-[#e8eefc] hover:text-brand-dark'"
            @click="select(category.id)" @keydown="navigateTabs($event, index)">{{ category.title }}</button>
        </div>

        <section v-for="category in priceCategories" v-show="selected.id === category.id" :id="'panel-' + category.id" :key="category.id" role="tabpanel" :aria-labelledby="'tab-' + category.id" tabindex="0" class="pt-8 md:pt-10">
          <div class="mb-6 flex flex-wrap items-end justify-between gap-3">
            <div><h2 class="text-2xl font-medium tracking-[-.035em] md:text-3xl">{{ category.title }}</h2><p class="mt-2 text-sm leading-6 text-[#657086]">{{ category.description }}</p></div>
          </div>
          <table class="w-full table-fixed border-collapse text-left">
            <caption class="sr-only">Цены: {{ category.title }}</caption>
            <thead><tr class="border-b border-ink/15 text-[11px] uppercase tracking-[.1em] text-[#657086]">
              <th scope="col" class="hidden w-16 py-4 pl-5 font-medium md:table-cell">№</th>
              <th scope="col" class="py-4 pr-4 font-medium">Услуга</th>
              <th scope="col" class="w-[120px] py-4 text-right font-medium sm:w-[180px] md:pr-5">Стоимость</th>
            </tr></thead>
            <tbody>
              <tr v-for="(item, index) in category.items" :key="item[0]" class="border-b border-ink/10 transition-colors hover:bg-[#edf1fa]">
                <td class="hidden py-6 pl-5 text-sm tabular-nums text-ink/40 md:table-cell">{{ String(index + 1).padStart(2, '0') }}</td>
                <th scope="row" class="py-5 pr-4 text-[15px] font-medium leading-6 tracking-[-.02em] md:py-7 md:text-xl">{{ item[0] }}</th>
                <td class="whitespace-nowrap py-5 text-right text-[15px] font-medium tabular-nums text-brand-dark md:py-7 md:pr-5 md:text-xl">{{ item[1] }}</td>
              </tr>
            </tbody>
          </table>
          <p v-if="category.id === 'implant'" class="mt-4 text-xs leading-5 text-[#657086]">Стоимость Straumann уточняется: в разделах исходного прайса указаны разные суммы — 50 000 и 60 000 ₽. Состав услуги также необходимо согласовать с клиникой.</p>
        </section>

        <p class="mt-7 max-w-[740px] text-xs leading-5 text-[#657086]">Цены приведены по опубликованному прайсу клиники и не являются публичной офертой. Уточните актуальную стоимость и состав услуг перед поездкой. Пометка «от» обозначает начальную стоимость, а не окончательный бюджет лечения.</p>
      </div>
    </section>
    <RequestSection />
  </main>
</template>

<style scoped>
.price-tabs { scrollbar-width: thin; scrollbar-color: #c7d1ed transparent; }
</style>
