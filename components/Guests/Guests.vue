<script lang="ts" setup>
import { MicVocal } from 'lucide-vue-next'
</script>

<template>
  <div id="guests" class="mx-auto flex w-full max-w-screen-xl flex-col items-center">
    <div class="inline-flex items-center gap-3">
      <MicVocal :size="28" class="text-primary" />
      <p class="font-title text-2xl text-primary">
        QUEM VAI?
      </p>
    </div>
    <div class="w-full lg:w-2/3">
      <p class="font-title text-balance bg-gradient-to-r from-white to-gray-600 to-100% bg-clip-text text-center text-4xl text-transparent">
        Convidamos palestrantes de diversas áreas com muita experiência para passar e ministrantes prontos pra te ensinar com a mão na massa!
      </p>
    </div>
    <div class="flex max-w-screen-xl flex-wrap items-center justify-center gap-6 py-8">
      <GuestsCard
        role="Palestrante"
        image="/speakers/patrick_bonometti.png"
        name="Patrick Bonometti"
        position="Fundador da IA Valley"
        description="Autor do livro físico “Inteligência Artificial para Negócios: Aplicações Simples que Podem reduzir custos, aumentar eficiência e aumentar lucro” e fundador da IA Valley, uma startup especializada em desenvolvimento de produtos com IA.
        Vencedor do Chipp Hackathon, competição internacional de construção de soluções com IA."
        :show-description="true"
      />

      <GuestsCard
        role="Palestrante / Ministrante"
        image="/speakers/beatriz_duarte.png"
        name="Beatriz Duarte"
        position="Engenheira de Software no Nubank"
        description="Formada em Engenharia da Computação e pós graduada em Arquitetura de Software, trabalha com desenvolvimento a mais de 5 anos e atualmente é Engenheira de Software na Nubank e criadora de conteúdo sobre tecnologia e programação nas redes sociais com o objetivo de incentivar mulheres na TI"
        :show-description="true"
      />

      <GuestsCard
        role="Palestrante"
        image="/speakers/luiz_fantin.png"
        name="Luiz Fantin"
        position="Senior Backend Developer na Compass.UOL"
        description="Engenheiro da Computação formado pelo CEUNES, atualmente é Senior Backend Developer na Compass.UOL. Possui uma sólida experiência em desenvolvimento backend, em especial, Laravel e Node.js. Em sua trajetória, tem contribuído com projetos inovadores, no setor bancário e no agronegócio"
        :show-description="true"
      />

      <GuestsCard
        role="Palestrante"
        image="/speakers/cloves_alves.png"
        name="Cloves Alves Junior"
        position="Analista de Dados na Soma Urbanismo"
        description="Formado em Análise e Desenvolvimento de Sistemas, com especialização em Ciência de Dados e Inteligência Artificial. Hoje trabalha como analista de dados na Soma Urbanismo, onde lidera o Observatório de Dados, um projeto estratégico focado em converter dados em insights valiosos para orientar decisões corporativas"
        :show-description="true"
      />

      <GuestsCard
        role="Palestrante"
        image="/speakers/ramon_pezzin.png"
        name="Ramon Pezzin Ton"
        position="Produtor Técnico na Shed of Ideas"
        description="Ramon Pezzin Ton é formado em Ciência da Computação pela UFES (CEUNES) e técnico em mineração pelo IFES de Nova Venécia. Com 4 anos de experiência em desenvolvimento de jogos, após 3 anos como programador, hoje atua como Produtor Técnico na Shed of Ideas, "
        :show-description="true"
      />

      <GuestsCard
        role="Palestrante / Ministrante"
        image="/speakers/herick_lima.png"
        name="Erick Lima"
        position="Membro do Núcleo Espírito Santense de Computação Musical (NESCoM)"
        description="Erick Lima tem 28 anos e é aluno do curso de Ciência da Computação. Além de pesquisador no Núcleo Espírito-Santense de Computação Musical, trabalha como desenvolvedor Android na UpCities Govtech. Tem interesse nas áreas de computação musical, programação criativa e sistemas embarcados."
        :show-description="true"
      />

      <GuestsCard
        role="Palestrante"
        image="/speakers/lucas_rios.png"
        name="Lucas Rios"
        position="Presidente Executivo da Federação Juniores"
        description=""
        :show-description="false"
      />

      <GuestsCard
        role="Ministrante"
        image="/teachers/felicio_almeida.png"
        name="Felício Almeida"
        position="Do Zero ao CRUD!"
        description=""
        :show-description="false"
      />

      <GuestsCard
        role="Ministrante"
        image="/teachers/kethlen_correia.png"
        name="Kethlen Correia"
        position="Introdução à UI/UX"
        description=""
        :show-description="false"
      />

      <GuestsCard
        role="Ministrante"
        image="/teachers/nicolas_walcker.png"
        name="Nicolas Walcker"
        position="Frontend é mais que HTML, CSS e JavaScript"
        description=""
        :show-description="false"
      />

      <GuestsCard
        role="Ministrante"
        image="/teachers/nicole_leite.png"
        name="Nicole Leite"
        position="Análise e Visualização de Dados com Python"
        description=""
        :show-description="false"
      />

      <GuestsCard
        role="Ministrante"
        image="/teachers/iasmin_marques.png"
        name="Iasmin Marques"
        position="Análise e Visualização de Dados com Python"
        description=""
        :show-description="false"
      />

      <GuestsCard
        role="Ministrante"
        image="/teachers/andre_bessa.png"
        name="André Bessa"
        position="Desenvolvimento de uma API REST com Minimal API e .NET"
        description=""
        :show-description="false"
      />

      <GuestsCard
        role="Ministrante"
        image="/teachers/bernardo_wutke.png"
        name="EM BREVE"
        position="Fique ligado nas nossas redes sociais para saber as novidades"
        description=""
        :show-description="false"
      />
    </div>
  </div>
</template>
