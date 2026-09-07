<script setup lang="ts">
import { ArrowRight } from '@lucide/vue'

const props = withDefaults(defineProps<{
  to?: string
  href?: string
  type?: 'button' | 'submit'
  variant?: 'primary' | 'secondary'
}>(), {
  type: 'button',
  variant: 'primary',
})

const element = computed(() => props.to ? resolveComponent('NuxtLink') : props.href ? 'a' : 'button')
const isHovered = ref(false)

const setHovered = (value: boolean) => {
  isHovered.value = value
}
</script>

<template>
  <component
    :is="element"
    :to="to"
    :href="href"
    :type="!to && !href ? type : undefined"
    class="aura-button"
    :class="[`aura-button--${variant}`, { 'is-hovered': isHovered }]"
    @pointerenter="setHovered(true)"
    @pointerleave="setHovered(false)"
    @focusin="setHovered(true)"
    @focusout="setHovered(false)"
  >
    <span class="aura-button__pill">
      <span class="aura-button__flood" aria-hidden="true" />
      <span class="aura-button__label"><slot /></span>
      <span class="aura-button__arrow"><ArrowRight class="size-[15px]" /></span>
    </span>
  </component>
</template>

<style scoped>
.aura-button {
  --aura-spring: cubic-bezier(.34, 1.56, .64, 1);
  --aura-fill-duration: 1.3s;
  display: inline-flex;
  min-width: max-content;
  height: 50px;
  align-content: center;
  align-items: center;
  justify-content: center;
  padding: 0;
  border: 0;
  border-radius: 16px;
  font-family: "Satoshi", "Onest", "Segoe UI", sans-serif;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: -.02em;
  line-height: 1.3;
  position: relative;
  text-decoration: none;
  transform: none;
  transition:
    background-color 1.4s var(--aura-spring),
    box-shadow 1.4s var(--aura-spring);
}

.aura-button::after {
  position: absolute;
  z-index: 3;
  inset: 0;
  width: 100%;
  height: 100%;
  border: 2px solid var(--aura-frame-border);
  border-radius: inherit;
  box-sizing: border-box;
  content: "";
  pointer-events: none;
  transition: border-color 1.4s var(--aura-spring);
}

.aura-button__pill {
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  gap: 10px;
  overflow: clip;
  padding: 5px 5px 5px 15px;
  border-radius: 16px;
  text-decoration: none;
  will-change: transform;
}

.aura-button__flood {
  position: absolute;
  top: 24px;
  right: 21px;
  bottom: 23px;
  left: calc(100% - 24px);
  border-radius: 50%;
  transform: scale(0);
  transform-origin: center;
  transition:
    inset var(--aura-fill-duration) var(--aura-spring),
    width var(--aura-fill-duration) var(--aura-spring),
    height var(--aura-fill-duration) var(--aura-spring),
    transform var(--aura-fill-duration) var(--aura-spring),
    background-color .4s cubic-bezier(.25, .46, .45, .94);
  will-change: inset, width, height, transform;
}

.aura-button__label,
.aura-button__arrow {
  position: relative;
  z-index: 1;
}

.aura-button__label {
  white-space: nowrap;
  transition: color 1.4s var(--aura-spring);
}

.aura-button__arrow {
  display: grid;
  width: 40px;
  height: 40px;
  flex: 0 0 40px;
  place-items: center;
  border-radius: 11px;
  transition:
    color .4s cubic-bezier(.25, .46, .45, .94),
    background-color .4s cubic-bezier(.25, .46, .45, .94);
}

.aura-button--primary.is-hovered .aura-button__flood {
  inset: -209px -128px -201px -158px;
  transform: scale(1);
}

.aura-button--primary {
  --aura-frame-border: rgba(255, 255, 255, .25);
  background: rgba(77, 107, 255, .4);
  color: #fff;
  box-shadow: none;
}

.aura-button--primary .aura-button__pill {
  background: #4d6bff;
}

.aura-button--primary .aura-button__flood {
  background: #fff;
}

.aura-button--primary .aura-button__arrow {
  background: rgba(255, 255, 255, .25);
  color: #fff;
}

.aura-button--primary.is-hovered {
  --aura-frame-border: rgba(10, 17, 40, .12);
  background: rgba(255, 255, 255, .73);
  color: #0a1128;
  box-shadow: 0 18px 34px -18px rgba(14, 31, 122, .28);
}

.aura-button--primary.is-hovered .aura-button__arrow {
  background: #f3f4f7;
  color: #0a1128;
}

.aura-button--secondary {
  --aura-fill-duration: 1.08s;
  --aura-frame-border: rgba(10, 17, 40, .12);
  background: rgba(255, 255, 255, .73);
  color: rgba(10, 17, 40, .6);
}

.aura-button--secondary .aura-button__pill {
  background: #fff;
}

.aura-button--secondary .aura-button__flood {
  top: 5px;
  right: 5px;
  bottom: 5px;
  left: calc(100% - 45px);
  background: #f3f4f7;
  transform: scale(1);
}

.aura-button--secondary .aura-button__arrow {
  background: transparent;
  color: #0a1128;
}

.aura-button--secondary.is-hovered {
  --aura-frame-border: rgba(255, 255, 255, .25);
  background: rgba(77, 107, 255, .4);
  color: #fff;
}

.aura-button--secondary.is-hovered .aura-button__flood {
  top: -210px;
  right: -210px;
  bottom: -200px;
  left: calc(100% - 250px);
  background: #4d6bff;
}

.aura-button--secondary.is-hovered .aura-button__arrow {
  background: transparent;
  color: #fff;
}

@media (prefers-reduced-motion: reduce) {
  .aura-button,
  .aura-button__flood,
  .aura-button__label,
  .aura-button__arrow,
  .aura-button::after {
    transition-duration: .01ms;
  }
}
</style>
