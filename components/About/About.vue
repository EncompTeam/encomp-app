<script lang="ts" setup>
  import { Users, MicVocal, Computer, Search, Flag } from 'lucide-vue-next'
import SmallCard from '../SmallCard.vue';
</script>

<template>
  <div class="flex flex-col items-center">
    <div class="hidden md:block mb-5">
      <img src="/es-map.gif" class="max-w-52">
    </div>
    <div class="inline-flex items-center gap-3 justify-center">
      <Search size="28" class="text-primary"/>
      <p class="font-title text-2xl text-primary">O ENCOMP</p>
    </div>
    <div class="w-fit h-24 md:h-14 bg-gradient-to-r from-white to-gray-600 bg-clip-text to-100%">
      <p class="font-title text-4xl text-transparent text-center mx-16">Capixaba da gema e do norte!</p>
    </div>
    <div class="mx-5 md:mx-96">
      <p class="font-sans text-xl text-center">
        O ENCOMP é um evento inovador criado por alunos da Universidade Federal do Espírito Santo, campus de São Mateus, com o objetivo de promover conhecimento e networking na área da computação. Nesta 7ª edição, reunimos uma programação rica e diversificada, incluindo palestras, minicursos e uma variedade de atividades que vão inspirar e capacitar nossos participantes
      </p>
    </div>
    <div class="hidden lg:inline-flex mt-5">
      <SmallCard class="mx-5">
        <Flag class="text-tertiary"/>
        <p class="pl-2">6 Edições</p>
      </SmallCard>
      <SmallCard class="mx-5">
        <Users class="text-tertiary"/>
        <p class="pl-2">743 Participantes Impactados</p>
      </SmallCard>
      <SmallCard class="mx-5">
        <MicVocal class="text-tertiary"/>
        <p class="pl-2">56 Palestras Apresentadas</p>
      </SmallCard>
      <SmallCard class="mx-5">
        <Computer class="text-tertiary"/>
        <p class="pl-2">33 Minicursos Lecionados</p>
      </SmallCard>
    </div>
  </div>
</template>