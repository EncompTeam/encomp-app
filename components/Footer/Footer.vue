<script lang="ts" setup>
import { ArrowUpIcon, InstagramIcon, LinkedinIcon } from 'lucide-vue-next'

const emits = defineEmits<{
  (e: 'navigate-to-instagram'): void
  (e: 'navigate-to-linkedin'): void
  (e: 'navigate-to-email'): void
}>()

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
</script>

<template>
  <footer class="relative mt-11 w-full overflow-hidden rounded-t-3xl border border-primary/20 bg-gradient-to-b from-card/40 to-background px-4 pb-14 pt-4">
    <div class="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent" />
    <div class="bg-glow-warm pointer-events-none absolute -left-16 -top-16 size-56 rounded-full opacity-30 blur-2xl" />
    <div class="bg-glow-cool pointer-events-none absolute -right-16 -top-16 size-56 rounded-full opacity-30 blur-2xl" />

    <div class="relative mx-auto flex size-full max-w-screen-xl flex-col items-center justify-between gap-4 lg:flex-row">
      <div class="flex flex-col items-center lg:items-start">
        <Logo />
        <p class="font-medium text-muted-foreground">
          06, 07 e 08 de Novembro de 2024
        </p>
      </div>

      <Button variant="ghost" class="text-muted-foreground transition-colors hover:text-primary" @click="() => emits('navigate-to-email')">
        encomp.ceunes@gmail.com
      </Button>

      <div class="flex items-center gap-3">
        <Button size="icon" variant="secondary" class="border-primary/30 bg-primary/10 text-primary transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/20" @click="() => emits('navigate-to-instagram')">
          <InstagramIcon />
        </Button>
        <Button size="icon" variant="secondary" class="border-tertiary/40 bg-tertiary/10 text-tertiary-300 transition-all duration-300 hover:-translate-y-0.5 hover:bg-tertiary/20" @click="() => emits('navigate-to-linkedin')">
          <LinkedinIcon />
        </Button>
        <Button size="icon" variant="ghost" class="text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:text-primary" aria-label="Voltar ao topo" @click="scrollToTop">
          <ArrowUpIcon />
        </Button>
      </div>
    </div>
  </footer>
</template>
