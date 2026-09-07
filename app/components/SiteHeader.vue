<script setup lang="ts">
import { Menu, X } from '@lucide/vue'

const route = useRoute()
const isOpen = ref(false)

watch(() => route.fullPath, () => { isOpen.value = false })

const navigation = [
  { label: 'Услуги', to: '/services' },
  { label: 'Цены', to: '/prices' },
  { label: 'Как всё проходит', to: '/how-it-works' },
  { label: 'Клиника', to: '/clinic' },
  { label: 'Врачи', to: '/doctors' },
  { label: 'Контакты', to: '/contacts' },
]
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-ink/8 bg-paper/90 backdrop-blur-xl">
    <div class="mx-auto flex h-20 max-w-[1536px] items-center justify-between px-5 md:px-8 lg:px-12">
      <LogoMark />

      <nav class="hidden items-center gap-7 lg:flex" aria-label="Основная навигация">
        <NuxtLink
          v-for="item in navigation"
          :key="item.to"
          :to="item.to"
          class="text-sm font-semibold text-ink/68 transition-colors hover:text-brand"
          active-class="!text-brand"
        >
          {{ item.label }}
        </NuxtLink>
      </nav>

      <div class="hidden items-center gap-4 sm:flex">
        <span class="hidden text-right xl:block">
          <span class="block text-[11px] uppercase tracking-[0.16em] text-ink/42">Представительство</span>
          <span class="mt-0.5 block text-sm font-semibold">Благовещенск</span>
        </span>
        <AuraButton to="/#calculation">Получить расчёт</AuraButton>
      </div>

      <button
        class="grid size-11 place-items-center rounded-xl border border-ink/12 lg:hidden"
        type="button"
        :aria-expanded="isOpen"
        aria-label="Открыть меню"
        @click="isOpen = !isOpen"
      >
        <X v-if="isOpen" class="size-5" />
        <Menu v-else class="size-5" />
      </button>
    </div>

    <Transition name="menu">
      <nav v-if="isOpen" class="border-t border-ink/8 bg-paper px-5 py-6 lg:hidden" aria-label="Мобильная навигация">
        <div class="mx-auto grid max-w-[1536px] gap-1">
          <NuxtLink v-for="item in navigation" :key="item.to" :to="item.to" class="rounded-2xl px-4 py-3 text-lg font-semibold hover:bg-mist">
            {{ item.label }}
          </NuxtLink>
          <AuraButton to="/#calculation" class="mt-3 w-full justify-between">Получить расчёт</AuraButton>
        </div>
      </nav>
    </Transition>
  </header>
</template>

<style scoped>
.menu-enter-active,
.menu-leave-active { transition: opacity .2s ease, transform .2s ease; }
.menu-enter-from,
.menu-leave-to { opacity: 0; transform: translateY(-8px); }
</style>
