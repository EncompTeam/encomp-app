<script lang="ts" setup>
import { CalendarIcon, MapPinIcon, PartyPopperIcon } from 'lucide-vue-next'

function toSubscription() {
  window.open('https://www.sympla.com.br/vii-encomp---encontro-norte-capixaba-de-computacao__2696886', '_blank')
}
</script>

<template>
  <div class="relative flex w-full flex-col items-center gap-6">
    <h1 class="from-background font-titles inline-block text-balance bg-gradient-to-tr to-white bg-clip-text text-center text-5xl font-medium uppercase text-transparent lg:text-7xl">
      Encontro Norte Capixaba de Computação
    </h1>
    <div class="flex w-full flex-col items-center justify-center gap-2 lg:flex-row">
      <Badge variant="secondary" class="flex items-center gap-2 p-2 uppercase">
        <CalendarIcon :size="20" />
        06, 07 e 08 de Novembro de 2024
      </Badge>
      <Badge variant="secondary" class="flex items-center gap-2 p-2 uppercase">
        <MapPinIcon :size="20" /> São Mateus, ES
      </Badge>
    </div>
    <Button size="lg" class="flex w-full items-center justify-center gap-2 text-lg leading-none lg:w-auto" @click="toSubscription">
      Garanta seu assento <PartyPopperIcon :size="24" />
    </Button>
    <div class="[mask-image:radial-gradient(farthest-side_at_50%_45%,red_50%,transparent 90%)] pointer-events-none absolute -top-32 z-10 flex h-screen w-full overflow-hidden lg:-top-44">
      <div class="animate-spotlight bg-spotlight absolute left-1/2 top-3 h-72 w-24 origin-[50%_0] translate-x-1/2 rotate-[20deg] rounded-full opacity-65 blur-lg lg:top-0 lg:h-[400px] lg:w-52" style="--duration: 4s; --rotate: 20deg; --scale: 1" />
      <div class="animate-spotlight bg-spotlight absolute left-1/2 top-3 h-72 w-24 origin-[50%_0] translate-x-1/2 scale-110 rounded-full opacity-65 blur-lg lg:top-0 lg:h-[400px] lg:w-52" style="--duration: 6s; --rotate: 0deg; --scale: 1.02" />
      <div class="animate-spotlight bg-spotlight absolute left-1/2 top-3 h-72 w-24 origin-[50%_0] rotate-[-20deg] rounded-full opacity-65 blur-lg lg:top-0 lg:h-[400px] lg:w-52" style="--duration: 5s; --rotate: -20deg; --scale: 1" />
    </div>
  </div>
</template>
