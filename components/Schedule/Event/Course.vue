<script lang="ts" setup>
import { User, MoveRight } from 'lucide-vue-next'
  const props = defineProps(["start", "end", "title", "extra", "speaker", "position", "photo", "showArrow"])
</script>

<template>
  <div class="border md:border-2 border-gray-500 rounded-md max-w-md py-4 px-3 mb-3">
    <div class="inline-flex mb-2">
      <div class="flex flex-col justify-center">
        <p>{{ props.start }}</p>
        <p>às {{ props.end }}</p>
      </div>
      <div class="ml-5 flex-1 flex-col justify-center items-center">
        <div class="flex justify-between">
          <p class="text-sm">{{ props.extra }}</p>
          <MoveRight v-if="showArrow"/>
        </div>
        <p class="text-lg md:text-xl text-left">{{ props.title }}</p>
      </div>
    </div>
    <Separator class="bg-gray-400"/>
    <div class="mt-2 inline-flex items-center">
      <Avatar class="bg-primary" size="sm">
        <AvatarImage :src="props.photo" />
        <AvatarFallback>
          <img src="/logo_circle.png">
        </AvatarFallback>
      </Avatar>
      <div class="ml-4">
        <p class="text-xl font-bold">{{ props.speaker }}</p>
        <p class="text-tertiary-300">{{ props.position }}</p>
      </div>
    </div>
  </div>
</template>