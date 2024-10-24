<script lang="ts" setup>
import { User } from 'lucide-vue-next'

const props = defineProps(['start', 'end', 'title', 'description', 'showDescription', 'extra', 'speaker', 'position', 'photo'])
</script>

<template>
  <div class="mb-3 max-w-4xl rounded-md border border-gray-500 px-3 py-2 md:border-2">
    <div class="mb-2">
      <div class="flex justify-between">
        <p>{{ props.extra }}</p>
        <Popover>
          <PopoverTrigger>
            <p class="text-xs text-primary md:text-sm">
              Mais Informações
            </p>
          </PopoverTrigger>
          <PopoverContent v-if="showDescription" side="left" :side-offset="-30" class="border-primary bg-gray-900">
            <div>
              <p>{{ props.description }}</p>
            </div>
          </PopoverContent>
        </Popover>
      </div>
      <div class="flex items-start justify-start">
        <div class="item flex w-20 flex-col justify-center">
          <p>{{ props.start }}</p>
          <p>às {{ props.end }}</p>
        </div>
        <div class="flex-1 items-start justify-start text-left">
          <p class="font-bold md:text-xl">
            {{ props.title }}
          </p>
        </div>
      </div>
    </div>
    <Separator class="bg-gray-400" />
    <div class="mt-2 inline-flex items-center">
      <Avatar class="bg-primary" size="sm">
        <AvatarImage :src="props.photo" />
        <AvatarFallback>
          <img src="/logo_circle.png">
        </AvatarFallback>
      </Avatar>
      <div class="ml-4">
        <p class="font-bold">
          {{ props.speaker }}
        </p>
        <p class="text-sm text-tertiary-300">
          {{ props.position }}
        </p>
      </div>
    </div>
  </div>
</template>
