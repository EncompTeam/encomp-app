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
        image="/speakers/luiz_fantin.png"
        name="Luiz Fantin"
        role="Senior Backend Developer na Compass.UOL"
        description="Engenheiro da Computação formado pelo CEUNES, atualmente é Senior Backend Developer na Compass.UOL. Possui uma sólida experiência em desenvolvimento backend, em especial, Laravel e Node.js. Em sua trajetória, tem contribuído com projetos inovadores, no setor bancário e no agronegócio"
        :show-description="true"
      />

      <SpeakersCard
        image="/speakers/cloves_alves.png"
        name="Cloves Alves Junior"
        role="Analista de Dados na Soma Urbanismo"
        description="Formado em Análise e Desenvolvimento de Sistemas, com especialização em Ciência de Dados e Inteligência Artificial. Hoje trabalha como analista de dados na Soma Urbanismo, onde lidera o Observatório de Dados, um projeto estratégico focado em converter dados em insights valiosos para orientar decisões corporativas"
        :show-description="true"
      />

      <SpeakersCard
        image="/speakers/ramon_pezzin.png"
        name="Ramon Pezzin Ton"
        role="Produtor Técnico na Shed of Ideas"
        description="Ramon Pezzin Ton é formado em Ciência da Computação pela UFES (CEUNES) e técnico em mineração pelo IFES de Nova Venécia. Com 4 anos de experiência em desenvolvimento de jogos, após 3 anos como programador, hoje atua como Produtor Técnico na Shed of Ideas, "
        :show-description="true"
      />

      <SpeakersCard
        image="/speakers/herick_lima.png"
        name="Erick Lima"
        role="Membro do Núcleo Espírito Santense de Computação Musical (NESCoM)"
        description="Erick Lima tem 28 anos e é aluno do curso de Ciência da Computação. Além de pesquisador no Núcleo Espírito-Santense de Computação Musical, trabalha como desenvolvedor Android na UpCities Govtech. Tem interesse nas áreas de computação musical, programação criativa e sistemas embarcados."
        :show-description="true"
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
