<template>
  <div>
    <ScheduleHeader day="11" />
    <ScheduleEventSimple
      start="07:30"
      end="08:00"
      title="Credenciamento | Minicursos"
    />

    <!-- Courses line display for large screens -->
    <div class="hidden flex-row md:flex md:gap-2">
      <Carousel class="max-w-5xl">
        <CarouselContent>
          <CarouselItem class="basis-1/2">
            <ScheduleEventCourse
              start="08:00"
              end="10:00"
              title="Oficina de Desenvolvimento Backend"
              teacher="Thae Morais"
              position="Do zero à API: construindo um backend com Node.js"
              photo="/teachers/Thae.png"
              description="Como uma aplicação armazena, organiza e disponibiliza informações? Neste minicurso prático, você vai descobrir como funciona o backend de uma aplicação web e construir sua própria API REST utilizando Node.js e Express. Ao longo da atividade, vamos desenvolver as principais operações de um CRUD - criar, consultar, atualizar e excluir dados -, compreender o funcionamento das rotas HTTP e testar os resultados na prática. Ao final, você terá uma API funcional e os conhecimentos essenciais para dar os primeiros passos no desenvolvimento backend."
              extra="Minicurso"
              :show-description="true"
            />
          </CarouselItem>
          <CarouselItem class="basis-1/2 pl-2">
            <ScheduleEventCourse
              start="08:00"
              end="10:00"
              title="Oficina de Fundamentos ao Github"
              teacher="Eduardo Cicutti"
              position=""
              photo="/teachers/Eduardo.png"
              description="Trata-se de um treinamento prático e rápido que ensina iniciantes a hospedar, versionar e compartilhar códigos na nuvem, através do Github. O aluno aprende a criar repositórios e a usar os comandos essenciais (add, commit, push e pull) para salvar projetos e montar um portfólio digital, além de entender a base da colaboração em equipe para programar simultaneamente no mesmo código de forma segura."
              extra="Minicurso"
              :show-description="true"
            />
          </CarouselItem>
          <CarouselItem class="basis-1/2 pl-2">
            <ScheduleEventCourse
              start="08:00"
              end="10:00"
              title="Oficina de Análise de Dados"
              teacher="Iasmin Marques"
              position="Análise e visualização de dados com Python"
              photo="/teachers/Iasmin.png"
              description="Este minicurso foi desenvolvido para quem deseja dominar as ferramentas para análise e visualização de dados, utilizando a linguagem Python. Ao longo do minicurso, os participantes aprenderão a manipular e transformar dados com a biblioteca Pandas, criar gráficos interativos e visualizações com Matplotlib e Plotly, além de explorar o Google Colab como plataforma colaborativa para rodar e compartilhar projetos na nuvem. O curso também abordará técnicas de análise de dados, desde a exploração até a extração de insights para a tomada de decisões estratégicas"
              extra="Minicurso"
              :show-description="true"
            />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>

    <!-- Courses line carousel display for small screens -->
    <div class="lg:hidden">
      <Carousel>
        <CarouselContent>
          <CarouselItem>
            <ScheduleEventCourse
              start="08:00"
              end="10:00"
              title="Oficina de Desenvolvimento Backend"
              teacher="Thae Morais"
              position="Do zero à API: construindo um backend com Node.js"
              photo="/teachers/Thae.png"
              description="Como uma aplicação armazena, organiza e disponibiliza informações? Neste minicurso prático, você vai descobrir como funciona o backend de uma aplicação web e construir sua própria API REST utilizando Node.js e Express. Ao longo da atividade, vamos desenvolver as principais operações de um CRUD - criar, consultar, atualizar e excluir dados -, compreender o funcionamento das rotas HTTP e testar os resultados na prática. Ao final, você terá uma API funcional e os conhecimentos essenciais para dar os primeiros passos no desenvolvimento backend."
              extra="Minicurso"
              :show-description="true"
            />
          </CarouselItem>
          <CarouselItem>
            <ScheduleEventCourse
              start="08:00"
              end="10:00"
              title="Oficina de Fundamentos ao Github"
              teacher="Eduardo Cicutti"
              position=""
              photo="/teachers/Eduardo.png"
              description="Trata-se de um treinamento prático e rápido que ensina iniciantes a hospedar, versionar e compartilhar códigos na nuvem, através do Github. O aluno aprende a criar repositórios e a usar os comandos essenciais (add, commit, push e pull) para salvar projetos e montar um portfólio digital, além de entender a base da colaboração em equipe para programar simultaneamente no mesmo código de forma segura."
              extra="Minicurso"
              :show-description="true"
            />
          </CarouselItem>
          <CarouselItem>
            <ScheduleEventCourse
              start="08:00"
              end="10:00"
              title="Oficina de Análise de Dados"
              teacher="Iasmin Marques"
              position="Análise e visualização de dados com Python"
              photo="/teachers/Iasmin.png"
              description="Este minicurso foi desenvolvido para quem deseja dominar as ferramentas para análise e visualização de dados, utilizando a linguagem Python. Ao longo do minicurso, os participantes aprenderão a manipular e transformar dados com a biblioteca Pandas, criar gráficos interativos e visualizações com Matplotlib e Plotly, além de explorar o Google Colab como plataforma colaborativa para rodar e compartilhar projetos na nuvem. O curso também abordará técnicas de análise de dados, desde a exploração até a extração de insights para a tomada de decisões estratégicas"
              extra="Minicurso"
              :show-description="true"
            />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
      <p
        class="mt-1 flex w-full justify-center pt-1 text-xs text-white opacity-50"
      >
        Arraste para os lados e veja mais da programação
      </p>
    </div>

    <ScheduleBreak
      start="10:00"
      end="10:30"
      class="my-3"
      title="Coffee Break"
    />

    <!-- Courses line display for large screens -->
    <div class="hidden flex-row md:flex md:gap-2">
      <Carousel class="max-w-5xl">
        <CarouselContent>
          <CarouselItem class="basis-1/2">
            <ScheduleEventCourse
              start="10:30"
              end="12:00"
              title="Oficina de Desenvolvimento Backend"
              teacher="Thae Morais"
              position="Do zero à API: construindo um backend com Node.js"
              photo="/teachers/Thae.png"
              extra="Continuação"
            />
          </CarouselItem>
          <CarouselItem class="basis-1/2 pl-2">
            <ScheduleEventCourse
              start="10:30"
              end="12:00"
              title="Oficina de Fundamentos ao Github"
              teacher="Eduardo Cicutti"
              photo="/teachers/Eduardo.png"
              extra="Continuação"
            />
          </CarouselItem>
          <CarouselItem class="basis-1/2 pl-2">
            <ScheduleEventCourse
              start="10:30"
              end="12:00"
              title="Oficina de Análise de Dados"
              teacher="Iasmin Marques"
              position="Análise e visualização de dados com Python"
              photo="/teachers/Iasmin.png"
              extra="Continuação"
            />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>

    <!-- Courses line carousel display for small screens -->
    <div class="lg:hidden">
      <Carousel>
        <CarouselContent>
          <CarouselItem>
            <ScheduleEventCourse
              start="10:30"
              end="12:00"
              title="Oficina de Desenvolvimento Backend"
              teacher="Thae Morais"
              position="Do zero à API: construindo um backend com Node.js"
              photo="/teachers/Thae.png"
              extra="Continuação"
            />
          </CarouselItem>
          <CarouselItem>
            <ScheduleEventCourse
              start="10:30"
              end="12:00"
              title="Oficina de Fundamentos ao Github"
              teacher="Eduardo Cicutti"
              photo="/teachers/Eduardo.png"
              extra="Continuação"
            />
          </CarouselItem>
          <CarouselItem>
            <ScheduleEventCourse
              start="10:30"
              end="12:00"
              title="Oficina de Análise de Dados"
              teacher="Iasmin Marques"
              position="Análise e visualização de dados com Python"
              photo="/teachers/Iasmin.png"
              extra="Continuação"
            />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
      <p
        class="mt-1 flex w-full justify-center pt-1 text-xs text-white opacity-50"
      >
        Arraste para os lados e veja mais da programação
      </p>
    </div>

    <ScheduleBreak
      start="12:00"
      end="12:30"
      class="my-3"
      title="Intervalo de Almoço"
    />

    <ScheduleEventSimple
      start="12:30"
      end="13:00"
      title="Credenciamento"
      extra="Auditório"
    />

    <ScheduleEventSimple
      start="13:00"
      end="13:15"
      title="Abertura"
      extra="Auditório"
    />

    <ScheduleEventTalk
      start="13:15"
      end="14:05"
      title="Palestra 1 — IA"
      speaker="Pedro Henrique Vieira"
      position=""
      photo="/speakers/Pedro.png"
      extra="Auditório"
      :show-description="false"
    />

    <ScheduleEventSimple
      start="14:05"
      end="14:15"
      title="Intervalo"
      extra="Caso haja sorteios, este horário será utilizado"
    />

    <ScheduleEventTalk
      start="14:15"
      end="16:30"
      title="Mesa Redonda"
      speaker=""
      position=""
      photo=""
      extra="Auditório"
      :show-description="false"
    />

    <ScheduleEventSimple
      start="16:30"
      end="16:40"
      title="Intervalo"
      extra="Caso haja sorteios, este horário será utilizado"
    />

    <ScheduleEventTalk
      start="16:40"
      end="17:30"
      photo=""
      title="Como fizemos um drone enxergar sozinho: IA aplicada, contada pelos acertos e pelos erros"
      speaker=""
      position=""
      extra="Auditório"
      :show-description="false"
    />

    <ScheduleEventSimple start="17:30" end="17:40" title="Avisos e Sorteios" />

    <ScheduleBreak
      start="17:40"
      end="18:00"
      class="my-3"
      title="Coffee Break | Encerramento"
    />
  </div>
</template>
