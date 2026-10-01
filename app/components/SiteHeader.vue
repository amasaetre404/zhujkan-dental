<script setup lang="ts">
import { ArrowUpRight, Menu, Phone, X } from '@lucide/vue'
import { contacts } from '~/data/contacts'

const route = useRoute()
const isOpen = ref(false)

const mobileMenu = ref<HTMLDialogElement>()
const menuTrigger = ref<HTMLButtonElement>()
const contactModal = useContactModal()
let previousOverflow = ''
let previousPadding = ''
let previousPosition = ''
let previousTop = ''
let previousWidth = ''
let savedScrollY = 0
let restoreScroll = true
let scrollLocked = false
let motion: Animation | undefined
let closing: Promise<void> | undefined

const unlockScroll = () => {
  if (!scrollLocked) return
  document.body.style.overflow = previousOverflow
  document.body.style.paddingRight = previousPadding
  document.body.style.position = previousPosition
  document.body.style.top = previousTop
  document.body.style.width = previousWidth
  if (restoreScroll) window.scrollTo({ top: savedScrollY, behavior: 'instant' })
  scrollLocked = false
}
const openMenu = () => {
  if (isOpen.value || closing || !mobileMenu.value) return
  previousOverflow = document.body.style.overflow
  previousPadding = document.body.style.paddingRight
  previousPosition = document.body.style.position
  previousTop = document.body.style.top
  previousWidth = document.body.style.width
  savedScrollY = window.scrollY
  restoreScroll = true
  const gap = window.innerWidth - document.documentElement.clientWidth
  if (gap > 0) document.body.style.paddingRight = `${parseFloat(getComputedStyle(document.body).paddingRight) + gap}px`
  document.body.style.overflow = 'hidden'
  document.body.style.position = 'fixed'
  document.body.style.top = `${-savedScrollY}px`
  document.body.style.width = '100%'
  scrollLocked = true
  isOpen.value = true
  mobileMenu.value.style.width = `${window.innerWidth}px`
  mobileMenu.value.showModal()
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    motion = mobileMenu.value.animate([{ transform: 'translateX(100%)' }, { transform: 'translateX(0)' }], { duration: 260, easing: 'cubic-bezier(.22,1,.36,1)' })
  }
}
const closeMenu = (): Promise<void> => {
  if (closing) return closing
  if (!isOpen.value) return Promise.resolve()
  closing = (async () => {
    await Promise.resolve()
    motion?.cancel()
    if (mobileMenu.value && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      motion = mobileMenu.value.animate([{ transform: 'translateX(0)' }, { transform: 'translateX(100%)' }], { duration: 180, easing: 'ease-in' })
      await motion.finished.catch(() => {})
    }
    mobileMenu.value?.close()
    isOpen.value = false
    unlockScroll()
    menuTrigger.value?.focus({ preventScroll: true })
    closing = undefined
  })()
  return closing
}
const openContact = async () => {
  await closeMenu()
  contactModal.value = true
}
const trapMenuFocus = (event: KeyboardEvent) => {
  if (event.key !== 'Tab') return
  const elements = Array.from(mobileMenu.value?.querySelectorAll<HTMLElement>('a[href], button:not([disabled])') ?? [])
  const first = elements[0]
  const last = elements.at(-1)
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault()
    last?.focus()
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault()
    first?.focus()
  }
}
const handleResize = () => {
  if (isOpen.value && mobileMenu.value) mobileMenu.value.style.width = `${window.innerWidth}px`
  if (window.innerWidth >= 1024) void closeMenu()
}
watch(() => route.fullPath, () => { restoreScroll = false; void closeMenu() })
onMounted(() => window.addEventListener('resize', handleResize))
onBeforeUnmount(() => {
  restoreScroll = false
  window.removeEventListener('resize', handleResize)
  motion?.cancel()
  mobileMenu.value?.close()
  unlockScroll()
})

const navigation = [
  { label: 'Услуги и цены', to: '/services' },
  { label: 'Клиника и врачи', to: '/clinic' },
  { label: 'Вопросы и ответы', to: '/faq' },
  { label: 'Контакты', to: '/contacts' },
]
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-ink/8 bg-paper/90 backdrop-blur-xl">
    <a href="#main-content" class="skip-link">Перейти к содержимому</a>
    <div class="mx-auto flex h-20 max-w-[1536px] items-center justify-between px-5 md:px-8 lg:px-12">
      <LogoMark />

      <nav class="hidden items-center gap-7 lg:flex" aria-label="Основная навигация">
        <NuxtLink
          v-for="item in navigation"
          :key="item.to"
          :to="item.to"
          class="text-sm font-semibold text-ink/68 transition-colors hover:text-brand-dark"
          active-class="!text-brand-dark"
        >
          {{ item.label }}
        </NuxtLink>
      </nav>

      <div class="hidden items-center gap-4 sm:flex">
        <div class="hidden flex-col gap-1 xl:flex">
          <a :href="contacts.phoneHref" class="inline-flex min-h-11 items-center gap-2 whitespace-nowrap text-sm font-semibold text-ink transition-colors hover:text-brand-dark"><Phone aria-hidden="true" class="size-4 text-brand" />{{ contacts.phone }}</a>
        </div>
        <AuraButton contact>Связаться</AuraButton>
      </div>

      <button
        class="grid size-11 place-items-center rounded-xl border border-ink/12 lg:hidden"
        type="button"
        :aria-expanded="isOpen"
        ref="menuTrigger"
        aria-label="Открыть меню"
        aria-haspopup="dialog"
        aria-controls="mobile-menu"
        @click="openMenu"
      >
        <X aria-hidden="true" v-if="isOpen" class="size-5" />
        <Menu aria-hidden="true" v-else class="size-5" />
      </button>
    </div>

  </header>
    <ClientOnly>
    <Teleport to="body">
      <dialog ref="mobileMenu" id="mobile-menu" class="mobile-menu" aria-label="Меню сайта" @cancel.prevent="closeMenu" @keydown="trapMenuFocus">
        <div class="mobile-menu__header">
          <LogoMark @click="closeMenu" />
          <button type="button" autofocus class="mobile-menu__close" aria-label="Закрыть меню" @click="closeMenu"><X aria-hidden="true" :size="22" /></button>
        </div>
        <div class="mobile-menu__body">
          <p class="mobile-menu__eyebrow">Лечение в Хэйхэ с сопровождением</p>
          <nav aria-label="Мобильная навигация" class="mobile-menu__links">
            <NuxtLink v-for="item in navigation" :key="item.to" :to="item.to" class="mobile-menu__link" :aria-current="route.path === item.to ? 'page' : undefined" @click="closeMenu">
              <span>{{ item.label }}</span><ArrowUpRight aria-hidden="true" :size="22" />
            </NuxtLink>
          </nav>
          <div class="mobile-menu__contact">
            <p>Поможем спланировать лечение и поездку</p>
            <a :href="contacts.phoneHref" class="mobile-menu__phone"><Phone aria-hidden="true" :size="19" />{{ contacts.phone }}</a>
            <AuraButton class="mobile-menu__cta" aria-haspopup="dialog" @click="openContact">Связаться с координатором</AuraButton>
          </div>
        </div>
      </dialog>
    </Teleport>
    </ClientOnly>
</template>

<style scoped>
.mobile-menu { position: fixed; inset: 0; width: 100vw; max-width: none; height: 100dvh; max-height: none; margin: 0; padding: 0; border: 0; background: var(--color-paper); color: var(--color-ink); overflow-y: auto; overscroll-behavior: contain; }
.mobile-menu::backdrop { background: rgba(10,17,40,.25); }
.mobile-menu[open] { display: flex; flex-direction: column; }
.mobile-menu__header { display: flex; align-items: center; justify-content: space-between; flex-shrink: 0; min-height: 80px; padding: max(12px,env(safe-area-inset-top)) 20px 12px; border-bottom: 1px solid rgba(10,17,40,.08); }
.mobile-menu__close { display: grid; place-items: center; flex-shrink: 0; width: 44px; height: 44px; border: 1px solid rgba(10,17,40,.12); border-radius: 12px; }
.mobile-menu__body { display: flex; flex-direction: column; flex: 1; padding: 32px 24px max(24px,env(safe-area-inset-bottom)); }
.mobile-menu__eyebrow { color: #59657b; font-size: 12px; line-height: 1.6; }
.mobile-menu__links { display: grid; margin-top: 20px; margin-bottom: 36px; }
.mobile-menu__link { display: flex; align-items: center; justify-content: space-between; gap: 16px; min-height: 72px; padding-block: 18px; border-bottom: 1px solid rgba(10,17,40,.09); font-size: clamp(23px,5.6vw,30px); font-weight: 500; line-height: 1.25; letter-spacing: -.03em; }
.mobile-menu__link svg { flex-shrink: 0; color: var(--color-brand-dark); }
.mobile-menu__link[aria-current="page"] { color: var(--color-brand-dark); }
.mobile-menu__contact { display: grid; gap: 18px; margin-top: auto; padding-top: 20px; }
.mobile-menu__contact > p { max-width: 280px; color: #59657b; font-size: 14px; line-height: 1.6; }
.mobile-menu__phone { display: inline-flex; align-items: center; gap: 10px; min-height: 44px; color: var(--color-brand-dark); font-size: 19px; font-weight: 500; white-space: nowrap; }
.mobile-menu__cta { width: 100%; }
.mobile-menu__cta :deep(.aura-button__pill) { width: 100%; justify-content: space-between; }
.mobile-menu :is(a,button):focus-visible { outline: 2px solid var(--color-brand-dark); outline-offset: 4px; }
@media (min-width: 640px) { .mobile-menu__header { padding-inline: 32px; } .mobile-menu__body { padding-inline: 48px; } }
@media (max-height: 650px) { .mobile-menu__body { padding-top: 20px; } .mobile-menu__link { min-height: 60px; padding-block: 14px; } .mobile-menu__links { margin-bottom: 16px; } .mobile-menu__contact { gap: 12px; } }
@media (max-width: 360px) { .mobile-menu__body { padding-inline: 20px; } .mobile-menu__cta { font-size: 14px; } }
</style>