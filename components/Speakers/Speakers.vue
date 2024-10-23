<script lang="ts" setup>
  import { MicVocal } from 'lucide-vue-next'
</script>

<template>
  <div class="flex flex-col items-center">
    <div class="inline-flex items-center gap-3">
      <MicVocal size="28" class="text-primary" />
      <p class="font-title text-2xl text-primary">QUEM VAI?</p>
    </div>
    <div class="w-fit h-52 md:h-24 md:mx-96 bg-gradient-to-r from-white to-gray-600 bg-clip-text to-100%">
      <p class="font-title text-4xl text-transparent text-center">Palestrantes convidados de diversas áreas com muita experiência para passar</p>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-4 gap-4 justify-items-center">

      <SpeakersCard 
        image="/speakers/patrick_bonometti.png" 
        name="Patrick Bonometti"
        role="Fundador da IA Valley"
        description="Sou formada em Engenharia da Computação e pós graduada em Arquitetura de Software, trabalho com desenvolvimento a mais de 5 anos e atualmente sou Engenheira de Software na Nubank e criadora de conteúdo sobre tecnologia e programação nas redes sociais com o objetivo de incentivar mulheres na TI"
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
