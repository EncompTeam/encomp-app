<script lang="ts" setup>
import { CalendarIcon, MapPinIcon, PartyPopperIcon } from 'lucide-vue-next'

function toSubscription() {
  window.open('https://www.sympla.com.br/vii-encomp---encontro-norte-capixaba-de-computacao__2696886', '_blank')
}
</script>

<template>
  <div class="relative flex w-full flex-col items-center gap-6">
    <p class="section-eyebrow">
      VII Edição · CEUNES / UFES
    </p>

    <h1 class="inline-block text-balance bg-gradient-to-br from-foreground via-primary to-tertiary-300 bg-clip-text text-center font-titles text-5xl font-medium uppercase text-transparent drop-shadow-glow lg:text-7xl">
      Encontro Norte Capixaba de Computação
    </h1>

    <div class="flex w-full flex-col items-center justify-center gap-2 lg:flex-row">
      <Badge variant="secondary" class="flex items-center gap-2 border-primary/30 bg-primary/10 p-2 uppercase tracking-wide backdrop-blur transition-colors hover:border-primary/60">
        <CalendarIcon :size="20" class="text-primary" />
        05, 06, 07 e 08 de Novembro de 2024
      </Badge>
      <Badge variant="secondary" class="flex items-center gap-2 border-tertiary/40 bg-tertiary/10 p-2 uppercase tracking-wide backdrop-blur transition-colors hover:border-tertiary">
        <MapPinIcon :size="20" class="text-tertiary-300" /> São Mateus, ES
      </Badge>
    </div>

    <Button size="lg" class="glow-primary flex w-full items-center justify-center gap-2 text-lg leading-none transition-transform duration-300 hover:scale-[1.03] lg:w-auto" @click="toSubscription">
      Garanta sua participação <PartyPopperIcon :size="24" />
    </Button>

    <div class="pointer-events-none absolute -top-28 z-10 flex h-screen w-full overflow-hidden [mask-image:radial-gradient(farthest-side_at_50%_45%,red_50%,transparent_90%)] lg:-top-44">
      <div class="absolute left-1/2 top-3 h-72 w-24 origin-[50%_0] translate-x-1/2 rotate-[20deg] animate-spotlight rounded-full bg-spotlight opacity-65 blur-lg lg:top-0 lg:h-[400px] lg:w-52" style="--duration: 4s; --rotate: 20deg; --scale: 1" />
      <div class="absolute left-1/2 top-3 h-72 w-24 origin-[50%_0] translate-x-1/2 scale-110 animate-spotlight rounded-full bg-spotlight opacity-65 blur-lg lg:top-0 lg:h-[400px] lg:w-52" style="--duration: 6s; --rotate: 0deg; --scale: 1.02" />
      <div class="absolute left-1/2 top-3 h-72 w-24 origin-[50%_0] rotate-[-20deg] animate-spotlight rounded-full bg-spotlight opacity-65 blur-lg lg:top-0 lg:h-[400px] lg:w-52" style="--duration: 5s; --rotate: -20deg; --scale: 1" />
    </div>
  </div>
</template>
