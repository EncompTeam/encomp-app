<script lang="ts" setup>
import { MoveRight, User } from 'lucide-vue-next'

const props = defineProps(['start', 'end', 'title', 'extra', 'speaker', 'position', 'photo', 'showArrow', 'description', 'showDescription'])

// function replaceWithBr() {
// }
</script>

<template>
  <div class="flex size-full flex-col justify-between rounded-md border border-gray-500 px-3 py-1 md:border-2">
    <div class="mb-2">
      <div class="flex flex-row justify-between">
        <p>{{ props.extra }}</p>
        <div class="inline-flex">
          <Popover v-if="showDescription">
            <PopoverTrigger>
              <p class="lg:text-md mr-20 text-sm text-primary hover:underline">
                Mais Informações
              </p>
            </PopoverTrigger>
            <PopoverContent side="left" :side-offset="-200" class="border-primary bg-gray-900">
              <div>
                <p class="text-balance text-justify">
                  {{ props.description }}
                </p>
              </div>
            </PopoverContent>
          </Popover>
          <MoveRight v-if="showArrow" title="Arraste para o lado" />
        </div>
      </div>
      <div class="flex min-h-full flex-row items-center">
        <div class="flex min-w-16 flex-col">
          <p>{{ props.start }}</p>
          <p>às {{ props.end }}</p>
        </div>
        <p class="ml-4 text-xl font-bold">
          {{ props.title }}
        </p>
      </div>
    </div>
    <div>
      <Separator class="my-3 bg-gray-400" />
      <div class="mt-2 inline-flex items-center">
        <Avatar class="bg-primary" size="sm">
          <AvatarImage v-if="props.photo" :src="props?.photo" />
          <AvatarImage v-else src="/logo_circle.png" />
          <AvatarFallback>
            <img src="/logo_circle.png">
          </AvatarFallback>
        </Avatar>
        <div class="ml-4">
          <p class="text-md font-bold lg:text-xl">
            {{ props.speaker }}
          </p>
          <p class="text-sm text-tertiary-300 lg:text-lg">
            {{ props.position }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
