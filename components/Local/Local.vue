<script lang="ts" setup>
import { MapPin } from 'lucide-vue-next'

const gallery = [
  { src: '/campus/ceunes-biblioteca.jpg', alt: 'Biblioteca do CEUNES' },
  { src: '/campus/ceunes-ru.jpg', alt: 'Restaurante Universitário do CEUNES' },
  { src: '/campus/ceunes-auditorio.jpg', alt: 'Auditório do CEUNES' },
  { src: '/campus/ceunes-labs.jpg', alt: 'Laboratórios do CEUNES' },
  { src: '/campus/ceunes-aereo.png', alt: 'Vista aérea do CEUNES' },
  { src: '/campus/ceunes-rampa.jpg', alt: 'Rampa de acesso do CEUNES' },
]
</script>

<template>
  <div class="mx-auto flex w-full max-w-screen-xl flex-col items-center">
    <div class="flex flex-col items-center">
      <div class="section-eyebrow">
        <MapPin :size="24" />
        O local
      </div>
      <div class="w-full lg:w-2/3">
        <p class="section-title mt-4">
          Centro Universitário Norte do Espírito Santo
        </p>
      </div>
      <p class="my-5 w-full text-balance px-3 text-center text-xl leading-relaxed text-muted-foreground lg:w-3/4">
        Localizado em São Mateus, o CEUNES é um ambiente de aprendizado dedicado à formação de profissionais qualificados desde 1991. Com cursos de graduação e pós-graduação, o CEUNES promove a troca de ideias e o desenvolvimento de projetos, contribuindo para o Norte Capixaba, Sul da Bahia e Leste de Minas Gerais. Atendendo cerca de 3,5 milhões de habitantes, o CEUNES trabalha para reduzir desigualdades na oferta de vagas no Ensino Superior público com qualidade
      </p>
    </div>
    <div class="grid grid-cols-1 gap-4 px-4 sm:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="photo in gallery"
        :key="photo.src"
        class="group relative overflow-hidden rounded-xl border border-primary/25 transition duration-300 hover:-translate-y-1 hover:border-primary/70 hover:shadow-[0_18px_40px_-18px_hsl(var(--primary)/0.8)]"
      >
        <img :src="photo.src" :alt="photo.alt" class="h-60 w-full object-cover grayscale transition duration-500 group-hover:scale-105 group-hover:grayscale-0">
        <div class="absolute inset-0 bg-primary/45 transition duration-500 group-hover:opacity-0" />
        <div class="absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-black/80 to-transparent p-3 text-sm font-medium text-white opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          {{ photo.alt }}
        </div>
      </div>
    </div>
  </div>
</template>
