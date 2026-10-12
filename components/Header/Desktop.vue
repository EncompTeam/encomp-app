<script lang="ts" setup>
import { PartyPopperIcon } from 'lucide-vue-next'

const emit = defineEmits<{
  (e: 'navigate-to-home'): void
  (e: 'navigate-to-schedule'): void
  (e: 'navigate-to-guests'): void
  (e: 'navigate-to-faq'): void
  (e: 'navigate-to-inscription'): void
}>()
</script>

<template>
  <header
    class="mx-auto hidden h-20 w-full max-w-screen-xl items-center justify-between gap-4 rounded-full border border-primary/20 bg-background/70 bg-clip-padding p-4 shadow-[0_10px_40px_-24px_hsl(var(--primary)/0.7)] backdrop-blur-xl backdrop-filter lg:flex"
  >
    <div class="flex flex-1 items-center">
      <Button
        variant="link"
        class="transition-transform duration-300 hover:scale-105"
        @click="() => emit('navigate-to-home')"
      >
        <Logo />
      </Button>
    </div>
    <nav class="flex flex-1 items-center justify-center">
      <ul class="flex items-center gap-3">
        <li>
          <Button
            class="relative text-lg text-foreground transition-colors after:absolute after:inset-x-4 after:-bottom-1 after:h-0.5 after:origin-left after:scale-x-0 after:bg-primary after:transition-transform hover:text-primary hover:after:scale-x-100"
            variant="link"
            @click="() => emit('navigate-to-home')"
          >
            Home
          </Button>
        </li>
        <li>
          <Button
            class="relative text-lg text-foreground transition-colors after:absolute after:inset-x-4 after:-bottom-1 after:h-0.5 after:origin-left after:scale-x-0 after:bg-primary after:transition-transform hover:text-primary hover:after:scale-x-100"
            variant="link"
            @click="() => emit('navigate-to-guests')"
          >
            Convidados
          </Button>
        </li>
        <li>
          <Button
            class="relative text-lg text-foreground transition-colors after:absolute after:inset-x-4 after:-bottom-1 after:h-0.5 after:origin-left after:scale-x-0 after:bg-primary after:transition-transform hover:text-primary hover:after:scale-x-100"
            variant="link"
            @click="() => emit('navigate-to-schedule')"
          >
            Programação
          </Button>
        </li>
        <li>
          <Button
            class="relative text-lg text-foreground transition-colors after:absolute after:inset-x-4 after:-bottom-1 after:h-0.5 after:origin-left after:scale-x-0 after:bg-primary after:transition-transform hover:text-primary hover:after:scale-x-100"
            variant="link"
            @click="() => emit('navigate-to-faq')"
          >
            FAQ
          </Button>
        </li>
      </ul>
    </nav>
    <div class="flex flex-1 justify-end">
      <Button
        size="lg"
        class="glow-primary flex w-auto items-center gap-2 text-lg transition-transform duration-300 hover:scale-105"
        variant="secondary"
        @click="() => emit('navigate-to-inscription')"
      >
        Inscreva-se <PartyPopperIcon :size="24" />
      </Button>
    </div>
  </header>
</template>
