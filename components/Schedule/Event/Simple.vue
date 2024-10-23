<script lang="ts" setup>
  const props = defineProps(["start", "end", "title", "extra", "color"])
</script>

<template>
  <div class="border md:border-2 border-gray-500 rounded-md max-w-4xl py-4 px-3 mb-3">
    <div class="top-0 left-0 inline-flex">
      <div class="flex flex-col justify-center">
        <p>{{ props.start }}</p>
        <p>às {{  props.end }}</p>
      </div>
      <div class="ml-5 flex flex-col justify-center items-left">
        <p class="text-sm">{{ props.extra }}</p>
        <p class="text-lg md:text-xl text-left" :class="props.color">{{ props.title }}</p>
      </div>
    </div>
  </div>
</template>