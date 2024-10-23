<script lang="ts" setup>
import SpeakersCard from './SpeakersCard.vue';
</script>

<template>
  <MainContent class="flex flex-col lg:flex-row h-full items-center justify-center">
    <h1 class="text-center font-title text-4xl font-bold text-primary lg:rotate-[270deg]">
      Palestrantes
    </h1>
    <div class="flex  lg:justify-start flex-wrap [&>div]:mx-5 [&>div]:mt-5 mt-5 ">

      <SpeakersCard 
      image="/speakers-img/Beatriz Duarte.png" 
      name="Beatriz Duarte"
      role="Engenheira de Software no Nubank"
      description="Sou formada em Engenharia da Computação e pós graduada em Arquitetura de Software, trabalho com desenvolvimento a mais de 5 anos e atualmente sou Engenheira de Software na Nubank e criadora de conteúdo sobre tecnologia e programação nas redes sociais com o objetivo de incentivar mulheres na TI"
      />

    
      <SpeakersCard 
      image="/speakers-img/Cloves Alves Junior.png" 
      name="Cloves Alves Junior"
      role="Analista de Dados na Soma Urbanismo"
      description="Profissional da área de tecnologia, formado em Análise e Desenvolvimento de Sistemas, com especialização em Ciência de Dados e Inteligência Artificial. Com ampla experiência como professor de informática e atuação em suporte técnico, hoje trabalha como analista de dados na Soma Urbanismo, onde lidera o Observatório de Dados, um projeto estratégico focado em converter dados em insights valiosos para orientar decisões corporativas."
      />
     
      <SpeakersCard 
      image="/speakers-img/Luiz Fantin.png" 
      name="Luiz Fantin"
      role="Senior Developer na Compass.OUL"
      />
      
      <SpeakersCard 
      name="Patrick Bonometti"
      role="Co-fundador da Decorando AI"
      description="Autor do livro físico “Inteligência Artificial para Negócios: Aplicações Simples que Podem reduzir custos, aumentar eficiência e aumentar lucro” e fundador da IA Valley, uma startup especializada em Desenvolvimento de produtos com IA.
            Vencedor do Chipp Hackathon, competição internacional de construção de soluções com IA."
      />
      
      <SpeakersCard 
      image="/speakers-img/Ramon Pezzin Ton.png" 
      name="Ramon Pezzin Ton"
      role="Produtor Técnico na Shed of Ideas"
      description="Meu nome é Ramon Pezzin Ton, sou formado em Ciência da Computação pela UFES, no campus CEUNES. Trabalho há quatro anos na área de desenvolvimento de jogos na empresa Shed of Ideas, onde atualmente ocupo o cargo de Produtor Técnico."
      />
    

    </div>
  </MainContent>
</template>
