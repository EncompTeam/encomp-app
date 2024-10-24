<script lang="ts" setup>
import { MoveRight, User } from 'lucide-vue-next'

const props = defineProps(['start', 'end', 'title', 'extra', 'speaker', 'position', 'photo', 'showArrow'])
</script>

<template>
  <div class="mb-3 max-w-md rounded-md border border-gray-500 px-3 py-4 md:border-2">
    <div class="mb-2 inline-flex">
      <div class="flex flex-col justify-center">
        <p>{{ props.start }}</p>
        <p>às {{ props.end }}</p>
      </div>
      <div class="ml-5 flex-1 flex-col items-center justify-center">
        <div class="flex justify-between">
          <p class="text-sm">
            {{ props.extra }}
          </p>
          <MoveRight v-if="showArrow" />
        </div>
        <p class="text-left text-lg md:text-xl">
          {{ props.title }}
        </p>
      </div>
    </div>
    <Separator class="bg-gray-400" />
    <div class="mt-2 inline-flex items-center">
      <Avatar class="bg-primary" size="sm">
        <AvatarImage v-if="props.photo" :src="props?.photo" />
        <AvatarImage v-else src="/logo_circle.png" />
        <AvatarFallback>
          <img src="/logo_circle.png">
        </AvatarFallback>
      </Avatar>
      <div class="ml-4">
        <p class="text-xl font-bold">
          {{ props.speaker }}
        </p>
        <p class="text-tertiary-300">
          {{ props.position }}
        </p>
      </div>
    </div>
  </div>
</template>
