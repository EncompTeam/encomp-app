<script lang="ts" setup>
import { PartyPopperIcon } from 'lucide-vue-next'

const emit = defineEmits<{
  (e: 'navigate-to-home'): void
  (e: 'navigate-to-schedule'): void
  (e: 'navigate-to-speakers'): void
  (e: 'navigate-to-faq'): void
  (e: 'navigate-to-inscription'): void
}>()
</script>

<template>
  <header class="mx-auto hidden h-20 w-full max-w-screen-xl items-center justify-between gap-4 rounded-full border border-gray-100/15 bg-background bg-opacity-20 bg-clip-padding p-4 backdrop-blur-lg backdrop-filter lg:flex">
    <div class="flex flex-1 items-center">
      <Button variant="link">
        <Logo />
      </Button>
    </div>
    <nav class="flex flex-1 items-center justify-center">
      <ul class="flex items-center gap-3">
        <li>
          <Button class="text-lg text-foreground" variant="link" @click="() => emit('navigate-to-home')">
            Home
          </Button>
        </li>
        <li>
          <Button class="text-lg text-foreground" variant="link" @click="() => emit('navigate-to-speakers')">
            Palestrantes
          </Button>
        </li>
        <li>
          <Button class="text-lg text-foreground" variant="link" @click="() => emit('navigate-to-schedule')">
            Programação
          </Button>
        </li>
        <li>
          <Button class="text-lg text-foreground" variant="link" @click="() => emit('navigate-to-faq')">
            FAQ
          </Button>
        </li>
      </ul>
    </nav>
    <div class="flex flex-1 justify-end">
      <Button size="lg" class="flex w-auto items-center gap-2 text-lg" variant="secondary" @click="() => emit('navigate-to-inscription')">
        Inscreva-se <PartyPopperIcon :size="24" />
      </Button>
    </div>
  </header>
</template>
