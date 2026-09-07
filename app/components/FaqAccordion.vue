<script setup lang="ts">
const props = withDefaults(defineProps<{
  items: Array<{ q: string, a: string }>
  initialOpen?: number[]
}>(), {
  initialOpen: () => [0, 1, 2],
})

const accordionId = useId()
const openedItems = ref(new Set(props.initialOpen))

const isOpen = (index: number) => openedItems.value.has(index)

const toggle = (index: number) => {
  const next = new Set(openedItems.value)
  next.has(index) ? next.delete(index) : next.add(index)
  openedItems.value = next
}
</script>

<template>
  <div class="faq-accordion grid gap-[18px]">
    <article
      v-for="(item, index) in items"
      :key="item.q"
      class="faq-card cursor-pointer rounded-[18px] bg-white px-6 py-5"
      @click="toggle(index)"
    >
      <h3>
        <button
          :id="`${accordionId}-trigger-${index}`"
          type="button"
          class="faq-trigger flex w-full touch-manipulation items-center justify-between gap-6 py-0.5 text-left text-[17px] font-medium leading-[1.2] tracking-[-.02em] text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand md:text-xl"
          :aria-expanded="isOpen(index)"
          :aria-controls="`${accordionId}-panel-${index}`"
          @click.stop="toggle(index)"
        >
          <span class="text-pretty">{{ item.q }}</span>
          <span class="faq-mark" :class="{ 'faq-mark--open': isOpen(index) }" aria-hidden="true" />
        </button>
      </h3>

      <div
        :id="`${accordionId}-panel-${index}`"
        class="faq-panel"
        :class="{ 'faq-panel--open': isOpen(index) }"
        role="region"
        :aria-labelledby="`${accordionId}-trigger-${index}`"
        :aria-hidden="!isOpen(index)"
        :inert="!isOpen(index)"
      >
        <div class="min-h-0 overflow-hidden">
          <p class="max-w-none pb-1 pr-8 pt-3 text-[14px] font-medium leading-[1.4] text-ink/60 md:text-[14.5px]">
            {{ item.a }}
          </p>
        </div>
      </div>
    </article>
  </div>
</template>

<style scoped>
.faq-accordion {
  overflow-anchor: none;
}

.faq-card {
  overflow: clip;
  will-change: transform;
}

.faq-mark {
  position: relative;
  width: 18px;
  height: 18px;
  flex: 0 0 18px;
  color: #1b3bd6;
}

.faq-mark::before,
.faq-mark::after {
  position: absolute;
  top: calc(50% - 1px);
  left: 3px;
  width: 12px;
  height: 2px;
  border-radius: 2px;
  background: currentColor;
  content: "";
}

.faq-mark::after {
  transform: rotate(90deg) scaleX(1);
  transition: transform .3s cubic-bezier(.22, 1, .36, 1);
}

.faq-mark--open::after {
  transform: rotate(90deg) scaleX(0);
}

.faq-panel {
  display: grid;
  grid-template-rows: 0fr;
  opacity: 0;
  transform: translateY(-4px);
  transition:
    grid-template-rows .38s cubic-bezier(.22, 1, .36, 1),
    opacity .2s ease,
    transform .38s cubic-bezier(.22, 1, .36, 1);
}

.faq-panel--open {
  grid-template-rows: 1fr;
  opacity: 1;
  transform: translateY(0);
}

@media (prefers-reduced-motion: reduce) {
  .faq-panel,
  .faq-trigger,
  .faq-mark::after {
    transition-duration: .01ms;
  }
}
</style>
