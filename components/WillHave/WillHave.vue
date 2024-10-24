<script lang="ts" setup>
import { BadgeHelp, Coffee, Handshake, Star } from 'lucide-vue-next'
</script>

<template>
  <div class="flex flex-col items-center">
    <div class="inline-flex items-center gap-3">
      <BadgeHelp :size="28" class="text-primary" />
      <p class="font-title text-primary text-2xl">
        O QUE VAI TER?
      </p>
    </div>
    <div class="w-full lg:w-2/3">
      <p class="font-title text-balance bg-gradient-to-r from-white to-gray-600 to-100% bg-clip-text text-center text-4xl text-transparent">
        Uma seleção de atividades abordando temas atuais e de revelância na técnologia
      </p>
    </div>
    <div class="mx-10 mt-2 flex flex-col gap-5 py-8 md:flex-row">
      <WillHavePhoto
        image="/activities/cursos.png"
        title="Minicursos"
        description="Ponha a mão na massa em minicursos práticos em áreas de destaque da tecnologia"
      />
      <WillHavePhoto
        image="/activities/palestras.png"
        title="Palestras"
        description="Participe de palestras em assuntos de grande relevância com convidados experiêntes"
      />
      <WillHavePhoto
        image="/activities/estandes.png"
        title="Estandes"
        description="Conheça projetos interessantes e de potencial"
      />
    </div>
    <div class="mt-5 hidden gap-10 md:inline-flex">
      <SmallCard>
        <Coffee class="text-tertiary" />
        <p class="pl-2">
          Coffee Break
        </p>
      </SmallCard>
      <SmallCard>
        <Handshake class="text-tertiary" />
        <p class="pl-2">
          Networking
        </p>
      </SmallCard>
      <SmallCard>
        <Star class="text-tertiary" />
        <p class="pl-2">
          Sorteios
        </p>
      </SmallCard>
    </div>
  </div>
</template>
