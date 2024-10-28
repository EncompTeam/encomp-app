<script lang="ts" setup>
const props = defineProps(['start', 'end', 'title'])
</script>

<template>
  <div class="relative max-h-16 max-w-5xl overflow-hidden rounded-md border border-gray-500">
    <img src="/food.jpg" class="min-h-16 w-full rounded-md opacity-15 grayscale">
    <div class="absolute inset-0 z-10 inline-flex">
      <div class="ml-3 flex flex-col justify-center">
        <p>{{ props.start }}</p>
        <p>às {{ props.end }}</p>
      </div>
      <div class="ml-5 flex items-center justify-center">
        <p class="text-left text-lg font-bold md:text-xl">
          {{ props.title }}
        </p>
      </div>
    </div>
  </div>
</template>
