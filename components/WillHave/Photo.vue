<script lang="ts" setup>
  const props = defineProps(["title", "description", "image"])
</script>

<template>
  <div class="group relative bg-primary rounded-lg">
    <img :src="props.image" class="opacity-80 rounded-lg">
    <div class="absolute w-full h-30 bottom-0 z-10 backdrop-blur-sm rounded-b-lg hidden group-hover:block">
      <div>
        <p class="pl-2 text-left font-bold text-4xl text-white">{{ props.title }}</p>
        <p class="px-2 pb-4 font-bold text-xl text-white">
          {{ props.description }}
        </p>
      </div>
    </div>
    <div class="absolute w-full h-20 bottom-0 z-10 backdrop-blur-sm rounded-b-lg group-hover:hidden">
      <p class="pl-2 text-left font-bold text-4xl">{{ props.title }}</p>
    </div>
  </div>
</template>