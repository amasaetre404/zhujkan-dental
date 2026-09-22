<script setup lang="ts">
import { ChevronLeft, ChevronRight, Expand, X } from '@lucide/vue'
const props = defineProps<{ items: readonly { image: string; alt: string; caption?: string }[]; documents?: boolean }>()
const dialog = ref<HTMLDialogElement>()
const active = ref(0)
const current = computed(() => props.items[active.value])
const isOpen = ref(false)
let previousOverflow = ''
let trigger: HTMLElement | null = null
function open(index: number, event: MouseEvent) {
  if (props.documents) return
  active.value = index
  trigger = event.currentTarget as HTMLElement
  previousOverflow = document.body.style.overflow
  document.documentElement.style.setProperty('--gallery-scrollbar-gap', `${window.innerWidth - document.documentElement.clientWidth}px`)
  document.body.style.overflow = 'hidden'
  isOpen.value = true
  dialog.value?.showModal()
}
function close() { dialog.value?.close() }
function restore() {
  isOpen.value = false
  document.body.style.overflow = previousOverflow
  document.documentElement.style.removeProperty('--gallery-scrollbar-gap')
  trigger?.focus({ preventScroll: true })
}
function move(step: number) { active.value = (active.value + step + props.items.length) % props.items.length }
watch(active, async () => {
  await nextTick()
  dialog.value?.querySelector('[aria-current="true"]')?.scrollIntoView({ block: 'nearest', inline: 'nearest' })
})
onBeforeUnmount(() => {
  if (isOpen.value) {
    document.body.style.overflow = previousOverflow
    document.documentElement.style.removeProperty('--gallery-scrollbar-gap')
  }
})
</script>

<template>
  <div>
    <div v-if="documents" class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 lg:grid-cols-5">
      <div v-for="item in items" :key="item.image" class="overflow-hidden rounded-2xl border border-ink/8 bg-white p-4 md:rounded-[1.75rem] md:p-6">
        <img :src="item.image" :alt="item.alt" loading="lazy" class="aspect-[3/4] w-full object-contain" />
      </div>
    </div>
    <div v-else class="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3">
      <button v-for="(item, index) in items" :key="item.image" type="button" class="group text-left" :aria-label="'Открыть: ' + item.alt" aria-haspopup="dialog" @click="open(index, $event)">
        <div class="relative overflow-hidden rounded-2xl bg-mist md:rounded-[1.75rem]">
          <NuxtImg :src="item.image" :alt="item.alt" width="1280" height="720" format="webp" loading="lazy" class="aspect-[16/10] w-full object-cover transition-transform duration-300 motion-safe:group-hover:scale-[1.03]" />
          <span class="absolute bottom-3 right-3 grid size-8 place-items-center rounded-full bg-white/90 text-ink"><Expand class="size-4" /></span>
        </div>
        <p v-if="item.caption" class="mt-3 text-sm text-ink/60">{{ item.caption }}</p>
      </button>
    </div>
    <Teleport v-if="!documents" to="body">
      <dialog ref="dialog" aria-label="Просмотр фотографий клиники" class="clinic-lightbox" @close="restore" @click="($event.target === dialog) && close()" @keydown.left.prevent="move(-1)" @keydown.right.prevent="move(1)">
        <template v-if="isOpen && current">
          <span aria-live="polite" class="lightbox-count">{{ active + 1 }} / {{ items.length }}</span>
          <button autofocus type="button" aria-label="Закрыть" class="lightbox-control lightbox-close" @click="close"><X class="size-5" /></button>
          <nav aria-label="Миниатюры фотографий" class="lightbox-thumbnails">
            <button v-for="(item, index) in items" :key="item.image" type="button" :aria-label="'Показать: ' + item.alt" :aria-current="index === active ? 'true' : undefined" class="lightbox-thumbnail" @click="active = index">
              <NuxtImg :src="item.image" alt="" width="160" height="120" format="webp" class="size-full object-cover" />
            </button>
          </nav>
          <div class="lightbox-stage" @click.self="close">
            <img :src="current.image" :alt="current.alt" class="lightbox-image" />
          </div>
          <button v-if="items.length > 1" type="button" aria-label="Предыдущее изображение" class="lightbox-control lightbox-prev" @click="move(-1)"><ChevronLeft class="size-5" /></button>
          <button v-if="items.length > 1" type="button" aria-label="Следующее изображение" class="lightbox-control lightbox-next" @click="move(1)"><ChevronRight class="size-5" /></button>
        </template>
      </dialog>
    </Teleport>
  </div>
</template>

<style scoped>
.clinic-lightbox {
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100dvh;
  max-width: none;
  max-height: none;
  margin: 0;
  padding: 0;
  border: 0;
  overflow: hidden;
  color: white;
  background: #302f2d;
}
.clinic-lightbox::backdrop { background: rgba(0, 0, 0, .65); }
.lightbox-count { position: absolute; top: 32px; left: 28px; font-size: 13px; color: #ddd; }
.lightbox-control { position: absolute; z-index: 2; display: grid; place-items: center; width: 48px; height: 48px; border-radius: 50%; background: rgba(0, 0, 0, .35); transition: background .2s; }
.lightbox-control:hover { background: rgba(0, 0, 0, .65); }
.lightbox-close { top: 24px; right: 28px; }
.lightbox-prev { left: 144px; top: calc(50% - 24px); }
.lightbox-next { right: 28px; top: calc(50% - 24px); }
.lightbox-thumbnails { position: absolute; z-index: 2; top: 70px; bottom: 28px; left: 28px; display: flex; flex-direction: column; gap: 12px; overflow-y: auto; overflow-x: hidden; width: 84px; padding: 3px; scrollbar-width: none; overscroll-behavior: contain; }
.lightbox-thumbnails::-webkit-scrollbar { display: none; }
.lightbox-thumbnail { flex: 0 0 auto; width: 78px; height: 68px; border: 1px solid transparent; border-radius: 12px; overflow: hidden; opacity: .5; }
.lightbox-thumbnail:hover, .lightbox-thumbnail[aria-current="true"] { opacity: 1; }
.lightbox-thumbnail[aria-current="true"] { border-color: white; }
.lightbox-stage { position: absolute; inset: 80px 100px 60px 212px; display: flex; align-items: center; justify-content: center; }
.lightbox-image { display: block; max-width: 100%; max-height: 100%; width: auto; height: auto; object-fit: contain; border-radius: 14px; box-shadow: 0 20px 60px rgba(0, 0, 0, .2); }
@media (max-width: 767px) {
  .lightbox-count { top: 27px; left: 20px; }
  .lightbox-close { top: 14px; right: 14px; }
  .lightbox-stage { inset: 80px 12px 148px; }
  .lightbox-thumbnails { top: auto; bottom: 16px; left: 16px; right: 16px; width: auto; flex-direction: row; overflow-x: auto; overflow-y: hidden; }
  .lightbox-thumbnail { width: 64px; height: 52px; }
  .lightbox-prev { top: auto; bottom: 86px; left: calc(50% - 56px); }
  .lightbox-next { top: auto; bottom: 86px; right: calc(50% - 56px); }
}
</style>
