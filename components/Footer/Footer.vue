<script lang="ts" setup>
import { InstagramIcon, LinkedinIcon } from 'lucide-vue-next'

const emits = defineEmits<{
  (e: 'navigate-to-instagram'): void
  (e: 'navigate-to-linkedin'): void
  (e: 'navigate-to-email'): void
}>()
</script>

<template>
  <footer class="mt-11 w-full rounded-t-3xl border border-gray-500/15 bg-gray-600/5 px-4 pb-14 pt-4">
    <div class="mx-auto flex size-full max-w-screen-xl flex-col items-center justify-between gap-4 lg:flex-row">
      <div class="flex flex-col items-center lg:items-start">
        <Logo />
        <p class="font-medium">
          06, 07 e 08 de Novembro de 2024
        </p>
      </div>
      <Button variant="ghost" @click="() => emits('navigate-to-email')">
        encomp.ceunes@gmail.com
      </Button>
      <div class="flex items-center gap-3">
        <Button size="icon" variant="secondary" @click="() => emits('navigate-to-instagram')">
          <InstagramIcon />
        </Button>
        <Button size="icon" variant="secondary" @click="() => emits('navigate-to-linkedin')">
          <LinkedinIcon />
        </Button>
      </div>
    </div>
  </footer>
</template>
