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
  <HoverCard :open-delay="200" :close-delay="0">
    <HoverCardTrigger as-child>
      <button>
        <div class="bg-primary flex min-h-60 max-w-60 items-end rounded-t-lg">
          <img :src="props.image" class="h-60">
        </div>
        <div class="min-h-20 w-60 rounded-b-lg bg-gray-900 px-4 py-2">
          <p class="text-xl font-bold">
            {{ props.name }}
          </p>
          <p class="text-tertiary-300 text-sm">
            {{ props.role }}
          </p>
        </div>
      </button>
    </HoverCardTrigger>
    <HoverCardContent v-if="props.showDescription" side="right" :avoid-collisions="false" class="bg-gray-900">
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
    </HoverCardContent>
  </HoverCard>
</template>
