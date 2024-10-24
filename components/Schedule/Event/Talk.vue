<script lang="ts" setup>
import { User } from 'lucide-vue-next'
  const props = defineProps(["start", "end", "title", "description", "showDescription", "extra", "speaker", "position", "photo"])
</script>

<template>
  <div class="border md:border-2 border-gray-500 rounded-md max-w-4xl pt-2 pb-2 px-3 mb-3">
    <div class="mb-2">
      <div class="flex justify-between">
        <p>{{ props.extra }}</p>
        <Popover>
          <PopoverTrigger>
            <p class="text-xs md:text-sm text-primary">Mais Informações</p>
          </PopoverTrigger>
          <PopoverContent v-if="showDescription" side="left" :side-offset="-30" class="bg-gray-900 border-primary">
            <div>
              <p>{{ props.description }}</p>
            </div>
          </PopoverContent>
        </Popover>
      </div>
      <div class="flex justify-start items-start">
        <div class="flex flex-col w-20 justify-center item">
          <p>{{ props.start }}</p>
          <p>às {{ props.end }}</p>
        </div>
        <div class="flex-1 justify-start items-start text-left">
          <p class="font-bold md:text-xl">{{ props.title }}</p>
        </div>
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
        <p class="font-bold">{{ props.speaker }}</p>
        <p class="text-tertiary-300 text-sm">{{ props.position }}</p>
      </div>
    </div>
  </div>
</template>