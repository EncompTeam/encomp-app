<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { ArrowRight } from 'lucide-vue-next'
import { useCarousel } from './useCarousel'
import type { WithClassAsProps } from './interface'

const props = defineProps<WithClassAsProps>()

const { orientation, canScrollNext, scrollNext } = useCarousel()
</script>

<template>
  <Button
    :disabled="!canScrollNext"
    :class="cn(
      'touch-manipulation absolute h-14 w-10 rounded-full p-0 bg-tertiary-500 hover:bg-tertiary-300',
      orientation === 'horizontal'
        ? 'right-2 top-6 -translate-y-1/2 lg:-right-12 lg:top-1/2'
        : '-bottom-12 left-1/2 -translate-x-1/2 rotate-90',
      props.class,
    )"
    variant="outline"
    @click="scrollNext"
  >
    <slot>
      <ArrowRight class="size-4 text-current" />
      <span class="sr-only">Next Slide</span>
    </slot>
  </Button>
</template>
