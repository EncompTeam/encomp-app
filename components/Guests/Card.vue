<script lang="ts" setup>
import { PopoverAnchor } from 'radix-vue'

const props = defineProps<{
  image?: string
  name?: string
  position?: string
  description?: string
  role?: string
  showDescription?: boolean
}>()
</script>

<template>
  <div class="relative">
    <Popover>
      <PopoverTrigger as-child>
        <button class="relative z-20">
          <Badge class="absolute right-3 top-2" variant="secondary">
            {{ props.role }}
          </Badge>
          <div class="flex min-h-72 max-w-60 items-end rounded-t-lg bg-primary">
            <img :src="props.image" class="h-60">
          </div>
          <div class="min-h-20 w-60 rounded-b-lg bg-gray-900 px-4 py-2">
            <p class="text-left text-xl font-bold">
              {{ props.name }}
            </p>
            <p class="mt-1 text-left text-sm text-tertiary-300">
              {{ props.position }}
            </p>
          </div>
        </button>
      </PopoverTrigger>
      <PopoverAnchor class="absolute -inset-3 z-10 h-0" />
      <PopoverContent v-if="props.showDescription" class="hidden bg-gray-900 lg:block">
        <div class="rounde-lg bg-gray-900">
          <p class="text-lg font-bold">
            {{ props.name }}
          </p>
          <p class="text-tertiary-300">
            {{ props.position }}
          </p>
          <p class="mt-5">
            {{ props.description }}
          </p>
        </div>
      </PopoverContent>
      <PopoverContent v-if="props.showDescription" class="bg-gray-900 lg:hidden">
        <div class="rounde-lg bg-gray-900">
          <p class="text-lg font-bold">
            {{ props.name }}
          </p>
          <p class="text-tertiary-300">
            {{ props.position }}
          </p>
          <p class="mt-5">
            {{ props.description }}
          </p>
        </div>
      </PopoverContent>
    </Popover>
  </div>
</template>
