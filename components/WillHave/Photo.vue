<script lang="ts" setup>
  const props = defineProps(["title", "description", "image"])
</script>

<template>
  <div class="group relative bg-primary rounded-lg">
    <img :src="props.image" class="opacity-80 rounded-lg">
    <div class="absolute w-full h-24 bottom-0 z-10 backdrop-blur-sm rounded-b-lg hidden group-hover:block">
      <div>
        <p class="pl-2 text-left font-bold text-3xl drop-shadow-xl text-white">{{ props.title }}</p>
        <p class="font-bold drop-shadow-xl">
          {{ props.description }}
        </p>
      </div>
    </div>
    <div class="absolute w-full h-14 bottom-0 z-10 backdrop-blur-sm rounded-b-lg group-hover:hidden">
      <p class="pl-2 text-left font-bold text-3xl">{{ props.title }}</p>
    </div>
  </div>
</template>