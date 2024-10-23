<script lang="ts" setup>
  const props = defineProps(["start", "end", "title"])
</script>


<template>
  <div class="relative border border-gray-500 rounded-md max-w-4xl max-h-16 overflow-hidden">
    <img src="/food.jpg" class="rounded-md w-full grayscale opacity-15 min-h-16">
    <div class="absolute inset-0 inline-flex z-10">
      <div class="flex flex-col justify-center ml-3">
        <p>{{ props.start }}</p>
        <p>às {{  props.end }}</p>
      </div>
      <div class="ml-5 flex justify-center items-center">
        <p class="text-lg md:text-xl text-left font-bold">{{ props.title }}</p>
      </div>
    </div>
  </div>
</template>