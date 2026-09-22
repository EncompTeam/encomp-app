<script lang="ts" setup>
const props = defineProps(['title', 'description', 'image'])
</script>

<template>
  <div class="group relative overflow-hidden rounded-xl border border-primary/25 bg-primary/10 transition duration-300 hover:-translate-y-1 hover:border-primary/70 hover:shadow-[0_18px_40px_-18px_hsl(var(--primary)/0.8)]">
    <img
      :src="props.image"
      class="h-60 w-full object-cover opacity-70 grayscale transition duration-500 group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0"
    >
    <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent" />
    <div class="absolute inset-x-0 bottom-0 p-4">
      <p class="text-left font-titles text-3xl font-bold text-white drop-shadow lg:text-4xl">
        {{ props.title }}
      </p>
      <p
        class="max-h-0 overflow-hidden text-sm font-medium text-white/0 transition-all duration-300 group-hover:mt-2 group-hover:max-h-32 group-hover:text-white/85 lg:text-base"
      >
        {{ props.description }}
      </p>
    </div>
  </div>
</template>
