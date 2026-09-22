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
        <button class="group relative z-20 w-60 overflow-hidden rounded-xl border border-primary/20 bg-background/60 text-left backdrop-blur transition duration-300 hover:-translate-y-1.5 hover:border-primary/70 hover:shadow-[0_18px_40px_-18px_hsl(var(--primary)/0.8)]">
          <Badge class="absolute right-3 top-2 z-10 border-primary/40 bg-background/80 text-primary backdrop-blur" variant="secondary">
            {{ props.role }}
          </Badge>
          <div class="flex min-h-72 items-end bg-gradient-to-b from-primary/45 via-primary/10 to-tertiary/45">
            <img :src="props.image" class="h-60 w-full object-cover transition duration-500 group-hover:scale-[1.04]">
          </div>
          <div class="min-h-20 px-4 py-2">
            <p class="text-left text-xl font-bold transition-colors group-hover:text-primary">
              {{ props.name }}
            </p>
            <p class="mt-1 text-left text-sm text-tertiary-300">
              {{ props.position }}
            </p>
          </div>
        </button>
      </PopoverTrigger>
      <PopoverAnchor class="absolute -inset-3 z-10 h-0" />
      <PopoverContent v-if="props.showDescription" class="hidden border-primary/30 bg-popover/95 backdrop-blur-xl lg:block">
        <div>
          <p class="text-lg font-bold text-primary">
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
      <PopoverContent v-if="props.showDescription" class="border-primary/30 bg-popover/95 backdrop-blur-xl lg:hidden">
        <div>
          <p class="text-lg font-bold text-primary">
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
