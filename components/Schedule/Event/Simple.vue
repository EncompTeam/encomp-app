<script lang="ts" setup>
const props = defineProps(['start', 'end', 'title', 'extra', 'color'])
</script>

<template>
  <div class="mb-3 max-w-5xl rounded-md border border-gray-500 px-3 py-4 md:border-2">
    <div class="left-0 top-0 inline-flex">
      <div class="flex w-20 flex-col justify-start">
        <p>{{ props.start }}</p>
        <p>às {{ props.end }}</p>
      </div>
      <div class="items-left ml-5 flex flex-col justify-center">
        <p class="text-sm">
          {{ props.extra }}
        </p>
        <p class="text-left text-lg md:text-xl" :class="props.color">
          {{ props.title }}
        </p>
      </div>
    </div>
  </div>
</template>
