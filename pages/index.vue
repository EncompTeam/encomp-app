<script lang="ts" setup>
</script>

<template>
  <MainContent class="relative flex flex-col items-center justify-between gap-8 bg-[url('/lp-hero-wpp.svg')] bg-cover bg-center bg-no-repeat py-11 lg:flex-row lg:py-32">
    <div class="relative flex w-full flex-col items-center gap-6 ">
      <h1 class="inline-block text-balance bg-gradient-to-tr from-background to-white bg-clip-text text-center font-titles text-4xl font-medium uppercase text-transparent lg:text-7xl">
        Encontro Norte Capixaba de Computação
      </h1>
      <div class="flex w-full flex-col items-center justify-center gap-2 lg:flex-row">
        <Badge variant="secondary" class="flex items-center gap-2 p-2 uppercase">
          <IconCalendar stroke-width="1.2" :size="20" />
          09, 10 e 11 de Novembro de 2024
        </Badge>
        <Badge variant="secondary" class="flex items-center gap-2 p-2 uppercase">
          <IconMapPin stroke-width="1.2" :size="20" /> São Mateus, ES
        </Badge>
      </div>
      <Button size="lg" class="flex w-full items-center justify-center gap-2 text-lg leading-none lg:w-auto">
        Garanta seu assento <IconPartyPopper />
      </Button>
      <div class="[mask-image: radial-gradient(farthest-side at 50% 0,red 50%,transparent 90%)] pointer-events-none absolute -top-32 z-10 flex w-full lg:-top-44">
        <div class="absolute left-1/2 top-3 h-72 w-24 origin-[50%_0] translate-x-1/2 rotate-[20deg] animate-spotlight rounded-full bg-spotlight opacity-65 blur-lg lg:top-0 lg:h-[400px] lg:w-52" style="--duration: 4s; --rotate: 20deg; --scale: 1" />
        <div class="absolute left-1/2 top-3 h-72 w-24 origin-[50%_0] translate-x-1/2 scale-110 animate-spotlight rounded-full bg-spotlight opacity-65 blur-lg lg:top-0 lg:h-[400px] lg:w-52" style="--duration: 6s; --rotate: 0deg; --scale: 1.02" />
        <div class="absolute left-1/2 top-3 h-72 w-24 origin-[50%_0] rotate-[-20deg] animate-spotlight rounded-full bg-spotlight opacity-65 blur-lg lg:top-0 lg:h-[400px] lg:w-52" style="--duration: 5s; --rotate: -20deg; --scale: 1" />
      </div>
    </div>
  </MainContent>
</template>
