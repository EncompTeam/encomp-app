<script lang="ts" setup>
  import { Coffee, Handshake, Star, BadgeHelp} from 'lucide-vue-next'
</script>

<template>
  <div class="flex flex-col items-center">
    <div class="inline-flex items-center gap-3">
      <BadgeHelp size="28" class="text-primary" />
      <p class="font-title text-2xl text-primary">O QUE VAI TER?</p>
    </div>
    <div class="w-fit h-52 md:h-24 md:mx-96 bg-gradient-to-r from-white to-gray-600 bg-clip-text to-100%">
      <p class="font-title text-4xl text-transparent text-center">Uma seleção de atividades abordando temas atuais e de revelância na técnologia</p>
    </div>
    <div class="flex flex-col md:flex-row gap-5 mx-10 mt-2">
      <WillHavePhoto image="/activities/cursos.png"
      title="Minicursos"
      description="Ponha a mão na massa em minicursos práticos em áreas de destaque da tecnologia"
      />
      <WillHavePhoto image="/activities/palestras.png"
      title="Palestras"
      description="Participe de palestras em assuntos de grande relevância com convidados experiêntes"
      />
      <WillHavePhoto image="/activities/estandes.png"
      title="Estandes"
      description="Conheça projetos interessantes e de potencial"
      />
    </div>
    <div class="hidden md:inline-flex gap-10 mt-5">
      <SmallCard>
        <Coffee class="text-tertiary"/>
        <p class="pl-2">Coffee Break</p>
      </SmallCard>
      <SmallCard>
        <Handshake class="text-tertiary"/>
        <p class="pl-2">Networking</p>
      </SmallCard>
      <SmallCard>
        <Star class="text-tertiary"/>
        <p class="pl-2">Sorteios</p>
      </SmallCard>
    </div>
  </div>
</template>