<script setup lang="ts">
const settingsOpen = useAnalyticsSettings()
const consent = useCookie<string | null>('gidmed-analytics-v1', {
  default: () => null, maxAge: 60 * 60 * 24 * 180, sameSite: 'lax', path: '/',
})
const ready = ref(false)
const config = useRuntimeConfig()
const route = useRoute()
const counterId = Number(config.public.metricaId)
const configured = Number.isSafeInteger(counterId) && counterId > 0
const visible = computed(() => ready.value && (settingsOpen.value || !['accepted', 'declined'].includes(consent.value ?? '')))
type Metrica = ((...args: unknown[]) => void) & { a?: unknown[][]; l?: number }
const analyticsWindow = () => window as Window & { ym?: Metrica }
let started = false

function start() {
  if (!configured || started || consent.value !== 'accepted') return
  started = true
  const w = analyticsWindow()
  const queue: Metrica = (...args) => { (queue.a ??= []).push(args) }
  queue.l = Date.now()
  w.ym = w.ym || queue
  const script = document.createElement('script')
  script.src = 'https://mc.yandex.ru/metrika/tag.js'
  script.async = true
  document.head.append(script)
  // Manual page views avoid collecting query strings (which can contain private data).
  w.ym(counterId, 'init', { defer: true, webvisor: false, clickmap: false, trackLinks: false, accurateTrackBounce: false })
  hit()
}
function hit() {
  if (started && consent.value === 'accepted') analyticsWindow().ym?.(counterId, 'hit', location.origin + route.path)
}
function choose(value: 'accepted' | 'declined') {
  consent.value = value
  settingsOpen.value = false
  if (value === 'accepted') start()
  else if (started) {
    analyticsWindow().ym?.(counterId, 'destruct')
    // Reload unloads the SDK as well, including if it was still downloading.
    window.location.reload()
  }
}
onMounted(() => { ready.value = true; start() })
watch(() => route.path, () => nextTick(hit))
</script>

<template>
  <aside v-if="visible" aria-label="Использование cookie" class="fixed bottom-4 left-4 z-[60] w-fit max-w-[calc(100vw-32px)] max-h-[calc(100dvh-32px)] overflow-auto rounded-2xl border border-ink/10 bg-white/95 p-3 text-ink shadow-[0_8px_32px_#0a112812] backdrop-blur-xl sm:bottom-6 sm:left-6 sm:max-w-[640px]">
    <div class="flex items-center gap-4">
      <p class="min-w-0 flex-1 pl-1 text-[13px] leading-5 text-[#59657b]">
        <template v-if="consent === 'accepted'">Аналитические <NuxtLink to="/privacy" class="text-brand-dark">cookie</NuxtLink> разрешены.</template>
        <template v-else>Используем <NuxtLink to="/privacy" class="text-brand-dark">куки</NuxtLink>, это делает удобнее вашу работу с сайтом</template>
      </p>
      <button type="button" class="min-h-11 shrink-0 rounded-xl bg-brand px-4 py-2.5 text-[13px] font-medium text-white hover:bg-brand-dark" @click="choose(consent === 'accepted' ? 'declined' : 'accepted')">{{ consent === 'accepted' ? 'Отключить' : 'Принять' }}</button>
    </div>
  </aside>
</template>
