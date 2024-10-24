<script lang="ts" setup>
import { Computer, Flag, MicVocal, Search, Users } from 'lucide-vue-next'
import SmallCard from '../SmallCard.vue'
</script>

<template>
  <div class="mx-auto flex w-full flex-col items-center lg:max-w-screen-xl">
    <div class="mb-5 hidden md:block">
      <img src="/es-map.gif" class="max-w-52">
    </div>
    <div class="inline-flex items-center justify-center gap-3">
      <Search :size="28" class="text-primary" />
      <p class="font-title text-2xl text-primary">
        O ENCOMP
      </p>
    </div>
    <div class="w-full lg:w-2/3">
      <p class="font-title text-balance bg-gradient-to-r from-white to-gray-600 to-100% bg-clip-text text-center text-4xl text-transparent">
        Capixaba da gema e do norte!
      </p>
    </div>
    <div class="w-full px-3 lg:w-3/4">
      <p class="mt-2 text-balance text-center font-sans text-xl">
        O ENCOMP é um evento inovador criado por alunos da Universidade Federal do Espírito Santo, campus de São Mateus, com o objetivo de promover conhecimento e networking na área da computação. Nesta 7ª edição, reunimos uma programação rica e diversificada, incluindo palestras, minicursos e uma variedade de atividades que vão inspirar e capacitar nossos participantes
      </p>
    </div>
    <div class="mt-5 hidden lg:inline-flex">
      <SmallCard class="mx-5">
        <Flag class="text-tertiary" />
        <p class="pl-2">
          6 Edições
        </p>
      </SmallCard>
      <SmallCard class="mx-5">
        <Users class="text-tertiary" />
        <p class="pl-2">
          743 Participantes Impactados
        </p>
      </SmallCard>
      <SmallCard class="mx-5">
        <MicVocal class="text-tertiary" />
        <p class="pl-2">
          56 Palestras Apresentadas
        </p>
      </SmallCard>
      <SmallCard class="mx-5">
        <Computer class="text-tertiary" />
        <p class="pl-2">
          33 Minicursos Lecionados
        </p>
      </SmallCard>
    </div>
  </div>
</template>
