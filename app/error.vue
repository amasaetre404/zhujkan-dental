<script setup lang="ts">
defineProps<{ error: { statusCode?: number; statusMessage?: string } }>()
</script>

<template>
  <NuxtLayout><main class="grid min-h-[70vh] place-items-center px-5 text-center"><div><p class="text-8xl font-semibold tracking-[-.08em] text-brand/20">{{ error.statusCode || 404 }}</p><h1 class="mt-4 text-4xl font-bold">Страница не найдена</h1><p class="mt-4 text-ink/50">Возможно, адрес изменился или в нём есть ошибка.</p><AuraButton to="/" class="mt-8">Вернуться на главную</AuraButton></div></main></NuxtLayout>
</template>
