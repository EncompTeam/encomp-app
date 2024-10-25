<script lang="ts" setup>
const props = defineProps(['title', 'description', 'image'])
</script>

<template>
  <div class="group relative rounded-lg bg-primary">
    <img :src="props.image" class="max-h-60 w-full rounded-lg opacity-50 grayscale">
    <div class="h-30 absolute bottom-0 z-10 hidden w-full rounded-b-lg backdrop-blur-sm group-hover:block">
      <div>
        <p class="pl-2 text-left text-4xl font-bold text-white">
          {{ props.title }}
        </p>
        <p class="px-2 pb-4 text-xl font-bold text-white">
          {{ props.description }}
        </p>
      </div>
    </div>
    <div class="absolute bottom-0 z-10 h-20 w-full rounded-b-lg backdrop-blur-sm group-hover:hidden">
      <p class="pl-2 text-left text-4xl font-bold">
        {{ props.title }}
      </p>
    </div>
  </div>
</template>
