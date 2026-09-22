<script setup lang="ts">
import { X, FileCheck2 } from '@lucide/vue'

const isOpen = useContactModal()
const dialog = ref<HTMLDialogElement>()
const route = useRoute()
let previousOverflow = ''
let scrollLocked = false
let trigger: HTMLElement | null = null

const unlockScroll = () => {
  if (!scrollLocked) return
  document.body.style.overflow = previousOverflow
  document.documentElement.style.removeProperty('--modal-scrollbar-gap')
  scrollLocked = false
}
const close = () => { isOpen.value = false }
const trapFocus = (event: KeyboardEvent) => {
  if (event.key !== 'Tab') return
  const elements = Array.from(dialog.value?.querySelectorAll<HTMLElement>('button:not([disabled]), a[href], [tabindex="0"]') ?? [])
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
watch(() => route.fullPath, close)
watch(isOpen, async (open) => {
  await nextTick()
  if (open && dialog.value && !dialog.value.open) {
    trigger = document.activeElement instanceof HTMLElement ? document.activeElement : null
    previousOverflow = document.body.style.overflow
    document.documentElement.style.setProperty('--modal-scrollbar-gap', `${window.innerWidth - document.documentElement.clientWidth}px`)
    document.body.style.overflow = 'hidden'
    scrollLocked = true
    dialog.value.showModal()
  } else if (!open) {
    dialog.value?.close()
    unlockScroll()
    if (trigger?.isConnected) trigger.focus({ preventScroll: true })
  }
})
onBeforeUnmount(unlockScroll)
</script>

<template>
  <Teleport to="body">
    <dialog ref="dialog" class="contact-modal" aria-labelledby="contact-modal-title" aria-describedby="contact-modal-description" @keydown="trapFocus" @cancel.prevent="close" @close="close" @click="($event.target === dialog) && close()">
      <div class="relative isolate overflow-hidden rounded-[inherit] bg-paper">
        <NuxtImg src="/images/contact-illustration-v2.png" alt="" width="1680" height="945" format="webp" class="pointer-events-none absolute right-0 top-0 -z-10 h-[330px] w-full object-cover object-right opacity-35 sm:h-full sm:w-[75%] sm:opacity-80" />
        <div class="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(245,247,251,1)_0%,rgba(245,247,251,.96)_44%,rgba(245,247,251,.45)_100%)]" />
        <button type="button" autofocus aria-label="Закрыть окно" class="absolute right-4 top-4 grid size-11 place-items-center rounded-full border border-ink/10 bg-white/90 text-ink transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand" @click="close"><X aria-hidden="true" class="size-5" /></button>
        <div class="p-6 pt-16 sm:p-10 sm:pt-14 lg:p-12">
          <p class="text-sm font-medium text-brand-dark">На связи · на русском языке</p>
          <h2 id="contact-modal-title" class="mt-4 max-w-[520px] text-[32px] font-medium leading-[1.08] tracking-[-.04em] sm:text-[44px]">Обсудите лечение<br>с координатором</h2>
          <p id="contact-modal-description" class="mt-5 max-w-[470px] text-base leading-7 text-[#59657b]">Позвоните или напишите нам. Подскажем, какой снимок нужен, как его передать и с чего начать подготовку к поездке.</p>
          <div class="mt-7"><ContactChannels compact inline /></div>
          <p class="mt-5 flex items-center gap-2 text-xs leading-5 text-[#59657b]"><FileCheck2 aria-hidden="true" class="size-4 shrink-0 text-brand" />Без предоплаты и обязательств</p>
        </div>
      </div>
    </dialog>
  </Teleport>
</template>

<style scoped>
.contact-modal { margin: auto; padding: 0; border: 1px solid #ffffffaa; border-radius: 32px; width: min(880px, calc(100vw - 32px)); max-height: calc(100dvh - 32px); overflow-y: auto; overscroll-behavior: contain; color: #0a1128; background: #f5f7fb; box-shadow: 0 32px 100px #0a112830; }
.contact-modal::backdrop { background: #0a112866; backdrop-filter: blur(8px); }
@media (max-width: 639px) { .contact-modal { border-radius: 24px; } }
</style>
