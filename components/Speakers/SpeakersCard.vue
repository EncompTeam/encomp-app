<script lang="ts" setup>
const props = defineProps<{
  image?: string
  name?: string
  role?: string
  description?: string
  showDescription?: boolean
}>()
</script>

<template>
  <Popover :open-delay="200" :close-delay="0">
    <PopoverTrigger>
      <div class="flex min-h-60 max-w-60 items-end rounded-t-lg bg-primary">
        <img :src="props.image" class="h-60">
      </div>
      <div class="min-h-20 w-60 rounded-b-lg bg-gray-900 px-4 py-2">
        <p class="text-left text-xl font-bold">
          {{ props.name }}
        </p>
        <p class="text-left text-sm text-tertiary-300">
          {{ props.role }}
        </p>
      </div>
    </PopoverTrigger>
    <PopoverContent v-if="props.showDescription" side="left" :avoid-collisions="false" class="hidden bg-gray-900 lg:block">
      <div class="rounde-lg bg-gray-900">
        <p class="text-lg font-bold">
          {{ props.name }}
        </p>
        <p class="text-tertiary-300">
          {{ props.role }}
        </p>
        <p class="mt-5">
          {{ props.description }}
        </p>
      </div>
    </PopoverContent>
    <PopoverContent v-if="props.showDescription" side="top" :avoid-collisions="false" class="bg-gray-900 lg:hidden">
      <div class="rounde-lg bg-gray-900">
        <p class="text-lg font-bold">
          {{ props.name }}
        </p>
        <p class="text-tertiary-300">
          {{ props.role }}
        </p>
        <p class="mt-5">
          {{ props.description }}
        </p>
      </div>
    </PopoverContent>
  </Popover>
</template>
