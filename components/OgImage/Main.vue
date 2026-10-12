<script lang="ts" setup></script>

<template>
  <div class="relative h-screen w-screen bg-[#061310] p-8">
    <div
      class="relative flex size-full items-start justify-center gap-5 uppercase"
    >
      <h1 class="text-7xl text-gray-500">
        Encontro Norte Capixaba de Computação
      </h1>
      <p class="font-[Satoshi] text-4xl font-medium uppercase text-gray-400">
        11, 12 e 13 de Novembro de 2026
      </p>
      <div class="flex items-start gap-4">
        <span
          class="rounded-full border border-gray-400/75 px-4 font-[Satoshi] text-2xl uppercase text-gray-300"
          >Networking</span
        >
        <span
          class="rounded-full border border-gray-400/75 px-4 font-[Satoshi] text-2xl uppercase text-gray-300"
          >Palestras</span
        >
        <span
          class="rounded-full border border-gray-400/75 px-4 font-[Satoshi] text-2xl uppercase text-gray-300"
          >Minicursos</span
        >
      </div>
    </div>
    <Logo class="absolute bottom-3 right-3 opacity-5 grayscale" width="400px" />
  </div>
</template>
