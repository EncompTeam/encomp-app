<script lang="ts" setup>
import { User } from 'lucide-vue-next'

const props = withDefaults(
  defineProps<{
    start?: string
    end?: string
    title?: string
    description?: string
    showDescription?: boolean
    extra?: string
    speaker?: string
    position?: string
    photo: string
  }>(),
  { showDescription: true, description: 'Não há nada aqui ainda!', photo: '/logo_circle.png' },
)
</script>

<template>
  <div class="mb-3 max-w-5xl rounded-md border border-gray-500 px-3 py-2 md:border-2">
    <div>
      <div class="flex justify-between">
        <p class="pl-20 text-xs text-tertiary lg:text-lg">
          {{ props.extra }}
        </p>
        <Popover>
          <PopoverTrigger>
            <p class="text-xs text-primary hover:underline md:text-lg">
              Mais Informações
            </p>
          </PopoverTrigger>
          <PopoverContent v-if="showDescription" side="left" :side-offset="-30" class="border-primary bg-gray-900">
            <div>
              <p class="text-justify">
                {{ props.description }}
              </p>
            </div>
          </PopoverContent>
        </Popover>
      </div>
      <div class="flex items-start justify-start">
        <div class="flex w-20 flex-col justify-start">
          <p>{{ props.start }}</p>
          <p>às {{ props.end }}</p>
        </div>
        <div class="flex-1 items-center justify-start text-left">
          <p class="font-bold md:text-2xl">
            {{ props.title }}
          </p>
        </div>
      </div>
    </div>
    <Separator class="my-3 bg-gray-400" />
    <div class="mt-2 inline-flex items-center">
      <Avatar class="bg-primary" size="sm">
        <AvatarImage :src="props.photo" />
        <AvatarFallback>
          <img src="/logo_circle.png">
        </AvatarFallback>
      </Avatar>
      <div class="ml-4">
        <p class="font-bold lg:text-xl">
          {{ props.speaker }}
        </p>
        <p class="text-sm text-tertiary-300">
          {{ props.position }}
        </p>
      </div>
    </div>
  </div>
</template>
