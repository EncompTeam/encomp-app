<script lang="ts" setup>
  import { MapPin } from 'lucide-vue-next'
</script>

<template>
  <div>
    <div class="flex flex-col items-center">
      <div class="inline-flex gap-3 items-center">
        <MapPin size="28" class="text-primary" />
        <p class="text-center text-primary text-2xl">O LOCAL</p>
      </div>
      <div class="bg-gradient-to-r from-white to-gray-600 bg-clip-text">
        <p class="font-title text-4xl text-transparent text-center">Centro Universitário Norte do Espírito Santo</p>
      </div>
      <p class="mx-5 mb-5 md:mx-96 mt-5 text-xl text-center">
        Localizado em São Mateus, o CEUNES é um ambiente de aprendizado dedicado à formação de profissionais qualificados desde 1991. Com cursos de graduação e pós-graduação, o CEUNES promove a troca de ideias e o desenvolvimento de projetos, contribuindo para o Norte Capixaba, Sul da Bahia e Leste de Minas Gerais. Atendendo cerca de 3,5 milhões de habitantes, o CEUNES trabalha para reduzir desigualdades na oferta de vagas no Ensino Superior público com qualidade
      </p>
    </div>
    <div class="flex flex-col md:flex-row justify-center">
      <div class="flex flex-col items-center mx-4 md:ml-0 mb-4 md:mb-0">
        <div class="mb-4 relative">
          <img src="/campus/ceunes-biblioteca.jpg" class="h-60 w-96 grayscale rounded-xl">
          <div class="absolute inset-0 bg-primary opacity-50 rounded-xl"></div>
        </div>
        <div class="relative">
          <img src="/campus/ceunes-ru.jpg" class="h-60 w-96 grayscale rounded-xl">
          <div class="absolute inset-0 bg-primary opacity-50 rounded-xl"></div>
        </div>
      </div>
      <div class="flex flex-col items-center mx-4 md:ml-0 mb-4 md:mb-0">
        <div class="mb-4 relative">
          <img src="/campus/ceunes-auditorio.jpg" class="h-60 w-96 grayscale rounded-xl">
          <div class="absolute inset-0 bg-primary opacity-50 rounded-xl"></div>
        </div>
        <div class="relative">
          <img src="/campus/ceunes-labs.jpg" class="h-60 w-96 grayscale rounded-xl">
          <div class="absolute inset-0 bg-primary opacity-50 rounded-xl"></div>
        </div>
      </div>
      <div class="flex flex-col justify-end mx-4 md:mx-0">
        <div class="relative">
          <img src="/campus/ceunes-aereo.png" class="h-60 w-96 grayscale rounded-xl">
          <div class="absolute inset-0 bg-primary opacity-50 rounded-xl"></div>
        </div>
      </div>
    </div>
  </div>
</template>