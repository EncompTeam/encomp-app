<script lang="ts" setup>
const props = defineProps<{
  image? : string,
  name? : string,
  role? : string,
  description? : string,
  showDescription?: boolean
}>()
</script>

<template>
  <Popover :open-delay=200 :close-delay=0>
    <PopoverTrigger>
      <div class="bg-primary rounded-t-lg max-w-60 min-h-60 flex items-end">
        <img :src="props.image" class="h-60">
      </div>
      <div class="bg-gray-900 w-60 min-h-20 rounded-b-lg px-4 py-2">
        <p class="text-xl font-bold text-left">{{ props.name }}</p>
        <p class="text-sm text-tertiary-300 text-left">{{ props.role }}</p>
      </div>
    </PopoverTrigger>
    <PopoverContent v-if="props.showDescription" side="left" :avoid-collisions="false" class="bg-gray-900 hidden lg:block">
      <div class="bg-gray-900 rounde-lg">
        <p class="font-bold text-lg">{{ props.name }}</p>
        <p class="text-tertiary-300">{{ props.role }}</p>
        <p class="mt-5">{{ props.description }}</p>
      </div>
    </PopoverContent>
    <PopoverContent v-if="props.showDescription" side="top" :avoid-collisions="false" class="bg-gray-900 lg:hidden">
      <div class="bg-gray-900 rounde-lg">
        <p class="font-bold text-lg">{{ props.name }}</p>
        <p class="text-tertiary-300">{{ props.role }}</p>
        <p class="mt-5">{{ props.description }}</p>
      </div>
    </PopoverContent>
  </Popover>
</template>