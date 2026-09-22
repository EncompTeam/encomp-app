<script lang="ts" setup>
import { BadgeHelp, Coffee, Handshake, Star } from 'lucide-vue-next'
</script>

<template>
  <div class="flex flex-col items-center">
    <div class="section-eyebrow">
      <BadgeHelp :size="24" />
      O que vai ter?
    </div>
    <div class="w-full lg:w-2/3">
      <p class="section-title mt-4">
        Uma seleção de atividades abordando temas atuais e de relevância na tecnologia
      </p>
    </div>
    <div class="mx-10 mt-2 flex flex-col gap-5 py-8 md:flex-row">
      <div class="flex flex-col">
        <WillHavePhoto
          class="mb-4"
          image="/activities/cursos.png"
          title="Minicursos"
          description="Ponha a mão na massa em minicursos práticos em áreas de destaque da tecnologia"
        />

        <WillHavePhoto
          image="/activities/palestras.png"
          title="Palestras"
          description="Participe de palestras em assuntos de grande relevância com convidados experientes"
        />
      </div>
      <div class="flex flex-col">
        <WillHavePhoto
          class="mb-4"
          image="/activities/estandes.png"
          title="Estandes"
          description="Conheça projetos interessantes e de potencial"
        />
        <WillHavePhoto
          image="/activities/mapcom.jpg"
          title="Maratona de Programação"
          description="Maratona de programação realizada em parceria com a MapCom"
        />
      </div>
    </div>
    <div class="mt-5 hidden flex-wrap justify-center gap-3 md:flex lg:gap-10">
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
