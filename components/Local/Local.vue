<script lang="ts" setup>
import { MapPin } from 'lucide-vue-next'
</script>

<template>
  <div class="mx-auto flex w-full max-w-screen-xl flex-col items-center">
    <div class="flex flex-col items-center">
      <div class="inline-flex items-center gap-3">
        <MapPin :size="28" class="text-primary" />
        <p class="text-center text-2xl text-primary">
          O LOCAL
        </p>
      </div>
      <div class="w-full lg:w-2/3">
        <p class="font-title text-balance bg-gradient-to-r from-white to-gray-600 to-100% bg-clip-text text-center text-4xl text-transparent">
          Centro Universitário Norte do Espírito Santo
        </p>
      </div>
      <p class="m-5 mx-10 w-96 text-balance text-center text-xl lg:w-3/4">
        Localizado em São Mateus, o CEUNES é um ambiente de aprendizado dedicado à formação de profissionais qualificados desde 1991. Com cursos de graduação e pós-graduação, o CEUNES promove a troca de ideias e o desenvolvimento de projetos, contribuindo para o Norte Capixaba, Sul da Bahia e Leste de Minas Gerais. Atendendo cerca de 3,5 milhões de habitantes, o CEUNES trabalha para reduzir desigualdades na oferta de vagas no Ensino Superior público com qualidade
      </p>
    </div>
    <div class="flex flex-col justify-center md:flex-row">
      <div class="mx-4 mb-4 flex flex-col items-center md:mb-0 md:ml-0">
        <div class="relative mb-4">
          <img src="/campus/ceunes-biblioteca.jpg" class="h-60 w-96 rounded-xl grayscale">
          <div class="absolute inset-0 rounded-xl bg-primary opacity-50" />
        </div>
        <div class="relative">
          <img src="/campus/ceunes-ru.jpg" class="h-60 w-96 rounded-xl grayscale">
          <div class="absolute inset-0 rounded-xl bg-primary opacity-50" />
        </div>
      </div>
      <div class="mx-4 mb-4 flex flex-col items-center md:mb-0 md:ml-0">
        <div class="relative mb-4">
          <img src="/campus/ceunes-auditorio.jpg" class="h-60 w-96 rounded-xl grayscale">
          <div class="absolute inset-0 rounded-xl bg-primary opacity-50" />
        </div>
        <div class="relative">
          <img src="/campus/ceunes-labs.jpg" class="h-60 w-96 rounded-xl grayscale">
          <div class="absolute inset-0 rounded-xl bg-primary opacity-50" />
        </div>
      </div>
      <div class="mx-4 flex flex-col justify-end md:mx-0">
        <div class="relative mb-4">
          <img src="/campus/ceunes-aereo.png" class="h-60 w-96 rounded-xl grayscale">
          <div class="absolute inset-0 rounded-xl bg-primary opacity-50" />
        </div>
        <div class="relative">
          <img src="/campus/ceunes-rampa.jpg" class="h-60 w-96 rounded-xl grayscale">
          <div class="absolute inset-0 rounded-xl bg-primary opacity-50" />
        </div>
      </div>
    </div>
  </div>
</template>
