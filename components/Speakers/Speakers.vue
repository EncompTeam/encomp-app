<script lang="ts" setup>
import { MicVocal } from 'lucide-vue-next'
</script>

<template>
  <div id="speakers" class="mx-auto flex w-full max-w-screen-xl flex-col items-center">
    <div class="inline-flex items-center gap-3">
      <MicVocal :size="28" class="text-primary" />
      <p class="font-title text-2xl text-primary">
        QUEM VAI?
      </p>
    </div>
    <div class="w-full lg:w-2/3">
      <p class="font-title text-balance bg-gradient-to-r from-white to-gray-600 to-100% bg-clip-text text-center text-4xl text-transparent">
        Palestrantes convidados de diversas áreas, com muita experiência para passar
      </p>
    </div>
    <div class="flex max-w-screen-xl flex-wrap items-center justify-center gap-6 py-8">
      <SpeakersCard
        image="/speakers/patrick_bonometti.png"
        name="Patrick Bonometti"
        role="Fundador da IA Valley"
        description="Autor do livro físico “Inteligência Artificial para Negócios: Aplicações Simples que Podem reduzir custos, aumentar eficiência e aumentar lucro” e fundador da IA Valley, uma startup especializada em desenvolvimento de produtos com IA.
        Vencedor do Chipp Hackathon, competição internacional de construção de soluções com IA."
        :show-description="true"
      />

      <SpeakersCard
        image="/speakers/beatriz_duarte.png"
        name="Beatriz Duarte"
        role="Engenheira de Software no Nubank"
        description="Formada em Engenharia da Computação e pós graduada em Arquitetura de Software, trabalha com desenvolvimento a mais de 5 anos e atualmente é Engenheira de Software na Nubank e criadora de conteúdo sobre tecnologia e programação nas redes sociais com o objetivo de incentivar mulheres na TI"
        :show-description="true"
      />

      <SpeakersCard
        image="/questionmark.png"
        name="EM BREVE"
        role="Fique ligado nas nossas redes sociais para saber as novidades"
        description=""
        :show-description="false"
      />

      <SpeakersCard
        image="/questionmark.png"
        name="EM BREVE"
        role="Fique ligado nas nossas redes sociais para saber as novidades"
        description=""
        :show-description="false"
      />

      <SpeakersCard
        image="/questionmark.png"
        name="EM BREVE"
        role="Fique ligado nas nossas redes sociais para saber as novidades"
        description=""
        :show-description="false"
      />

      <SpeakersCard
        image="/questionmark.png"
        name="EM BREVE"
        role="Fique ligado nas nossas redes sociais para saber as novidades"
        description=""
        :show-description="false"
      />

      <SpeakersCard
        image="/questionmark.png"
        name="EM BREVE"
        role="Fique ligado nas nossas redes sociais para saber as novidades"
        description=""
        :show-description="false"
      />
    </div>
  </div>
</template>
