<script lang="ts" setup>
import { MoveRight, User } from 'lucide-vue-next'

const props = withDefaults(defineProps<{
  start?: string
  end?: string
  title?: string
  description?: string
  teacher?: string
  position?: string
  photo?: string
  photo2?: string
  extra?: string
  showDescription?: boolean
  showArrow?: boolean
  showBio?: boolean
  twoPhotos?: boolean
}>(), {
  photo: '/logo_circle.png',
  photo2: '/logo_circle.png',
  position: '',
  description: 'Nada aqui ainda!',
  extra: ' ',
  showDescription: false,
  showArrow: false,
  showBio: false,
  twoPhotos: false,
})
</script>

<template>
  <div class="flex size-full flex-col justify-between rounded-md border border-gray-500 px-3 py-1 md:border-2">
    <div class="mb-2">
      <div class="flex flex-row justify-between">
        <p>{{ props.extra }}</p>
        <div class="inline-flex">
          <Popover v-if="showDescription">
            <PopoverTrigger>
              <p v-if="showArrow" class="lg:text-md mr-20 text-sm text-primary hover:underline">
                Mais Informações
              </p>
              <p v-else class="lg:text-md mr-5 text-sm text-primary hover:underline">
                Mais Informações
              </p>
            </PopoverTrigger>
            <PopoverContent v-if="showArrow" side="left" :side-offset="-200" class="min-w-[350px] border-primary bg-gray-900 lg:min-w-[450px]">
              <div>
                <div class="text-balance text-sm lg:text-lg" v-html="props.description" />
              </div>
            </PopoverContent>
            <PopoverContent v-else side="left" :side-offset="-150" class="min-w-[350px] border-primary bg-gray-900 lg:min-w-[450px]">
              <div>
                <div class="text-balance text-sm lg:text-lg" v-html="props.description" />
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
          <AvatarImage :src="props?.photo" />
          <AvatarFallback>
            <img src="/logo_circle.png">
          </AvatarFallback>
        </Avatar>
        <Avatar v-if="twoPhotos" class="ml-2 bg-primary" size="sm">
          <AvatarImage :src="props?.photo2" />
          <AvatarFallback>
            <img src="/logo_circle.png">
          </AvatarFallback>
        </Avatar>
        <div class="ml-4">
          <p class="text-md font-bold lg:text-xl">
            {{ props.teacher }}
          </p>
          <p class="text-sm text-tertiary-300 lg:text-lg">
            {{ props.position }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
