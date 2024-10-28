<template>
  <div>
    <ScheduleHeader day="07" />
    <ScheduleEventSimple
      start="07:30" end="08:00"
      title="Credênciamento | Minicursos"
    />
    <!-- Courses line display for large screens -->
    <div class="hidden flex-row md:flex md:gap-2">
      <Carousel class="max-w-5xl">
        <CarouselContent>
          <CarouselItem class="basis-1/2">
            <ScheduleEventCourse
              start="08:00" end="10:00"
              title="Análise e Visualização de Dados com Python"
              description="Este curso foi desenvolvido para quem deseja dominar as ferramentas para análise e visualização de dados, utilizando a linguagem Python.<br><br>Ao longo do minicurso, os participantes aprenderão a manipular e transformar dados com a biblioteca Pandas, criar gráficos interativos e visualizações com Matplotlib e Plotly, além de explorar o Google Colab como plataforma colaborativa para rodar e compartilhar projetos na nuvem.<br><br>O curso também abordará técnicas de análise de dados, desde a exploração até a extração de insights para a tomada de decisões estratégicas."
              teacher="Curioso para saber quem vai ministrar?"
              position="Nos siga no instragram @encompceunes para ficar por dentro das novidades"
              extra="Minicurso"
              :show-description="true"
            />
          </CarouselItem>
          <CarouselItem class="basis-1/2 pl-2">
            <ScheduleEventCourse
              start="08:00" end="10:00"
              title="Do Zero ao CRUD! (Backend)"
              teacher="Curioso para saber quem vai ministrar?"
              position="Nos siga no instragram @encompceunes para ficar por dentro das novidades"
              description="Neste minicurso prático, você terá o primeiro contato com aplicações backend utilizando a linguagem PHP.<br><br>Serão ensinados desde os comandos fundamentais até um sistema que permite cadastrar, visualizar, atualizar e excluir informações (CRUD) e conexão com banco de dados para criar sua API, utilizando ferramentas como MySQL, Postman/Insomnia, extensões agradáveis ao uso do PHP e boas práticas de programação.<br><br><u>REQUISITOS:</u><br><b>Necessário:</b> Possuir uma conta no GitHub.<br><b>Desejável:</b> Já ter tido contato com lógica de programação."
              extra="Minicurso"
              :show-description="true"
              :show-arrow="true"
            />
          </CarouselItem>
          <CarouselItem class="basis-1/2 pl-2">
            <ScheduleEventCourse
              start="08:00" end="10:00"
              title="Introdução à Plataforma Arduino"
              teacher="Curioso para saber quem vai ministrar?"
              position="Nos siga no instragram @encompceunes para ficar por dentro das novidades"
              description="Neste minicurso, você será introduzido à plataforma Arduino, aprendendo os conceitos básicos de eletrônica e programação voltados para projetos práticos.<br><br>Os participantes terão a oportunidade de construir um teclado utilizando push buttons e uma tela LCD, onde será exibida a nota musical correspondente à tecla pressionada.<br><br>Abordaremos a programação em C++ para microcontroladores, utilizando bibliotecas essenciais do Arduino e técnicas de leitura de botões, controle de um buzzer para emitir sons, e interação com uma tela LCD via protocolo I2C.<br><br><u>REQUISITOS:</u><br><b>Necessário:</b> Noções básicas de programação estruturada e da linguagem C++. <br><b>Diferencial:</b> Noções básicas em eletrônica e gostar de música :)<br><br>Caso o aluno queira utilizar o próprio computador, instalar previamente a bilioteca LCD2C"
              :show-description="true"
              extra="Minicurso"
            />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
    <!-- Courses line carousel display for small screens -->
    <div class="lg:hidden">
      <Carousel>
        <CarouselContent>
          <CarouselItem>
            <ScheduleEventCourse
              start="08:00" end="10:00"
              title="Análise e Visualização de Dados com Python"
              description="Este curso foi desenvolvido para quem deseja dominar as ferramentas para análise e visualização de dados, utilizando a linguagem Python.<br><br>Ao longo do minicurso, os participantes aprenderão a manipular e transformar dados com a biblioteca Pandas, criar gráficos interativos e visualizações com Matplotlib e Plotly, além de explorar o Google Colab como plataforma colaborativa para rodar e compartilhar projetos na nuvem.<br><br>O curso também abordará técnicas de análise de dados, desde a exploração até a extração de insights para a tomada de decisões estratégicas."
              teacher="Curioso para saber quem vai ministrar?"
              position="Nos siga no instragram @encompceunes para ficar por dentro das novidades"
              extra="Minicurso"
              :show-description="true"
              :show-arrow="true"
            />
          </CarouselItem>
          <CarouselItem>
            <ScheduleEventCourse
              start="08:00" end="10:00"
              title="Do Zero ao CRUD! (Backend)"
              description="Neste minicurso prático, você terá o primeiro contato com aplicações backend utilizando a linguagem PHP.<br><br>Serão ensinados desde os comandos fundamentais até um sistema que permite cadastrar, visualizar, atualizar e excluir informações (CRUD) e conexão com banco de dados para criar sua API, utilizando ferramentas como MySQL, Postman/Insomnia, extensões agradáveis ao uso do PHP e boas práticas de programação.<br><br><u>REQUISITOS:</u><br><b>Necessário:</b> Possuir uma conta no GitHub.<br><b>Desejável:</b> Já ter tido contato com lógica de programação."
              teacher="Curioso para saber quem vai ministrar?"
              position="Nos siga no instragram @encompceunes para ficar por dentro das novidades"
              extra="Minicurso"
              :show-description="true"
              :show-arrow="true"
            />
          </CarouselItem>
          <CarouselItem>
            <ScheduleEventCourse
              start="08:00" end="10:00"
              title="Introdução à Plataforma Arduino"
              teacher="Curioso para saber quem vai ministrar?"
              position="Nos siga no instragram @encompceunes para ficar por dentro das novidades"
              description="Neste minicurso, você será introduzido à plataforma Arduino, aprendendo os conceitos básicos de eletrônica e programação voltados para projetos práticos.<br><br>Os participantes terão a oportunidade de construir um teclado utilizando push buttons e uma tela LCD, onde será exibida a nota musical correspondente à tecla pressionada.<br><br>Abordaremos a programação em C++ para microcontroladores, utilizando bibliotecas essenciais do Arduino e técnicas de leitura de botões, controle de um buzzer para emitir sons, e interação com uma tela LCD via protocolo I2C.<br><br><u>REQUISITOS:</u><br><b>Necessário:</b> Noções básicas de programação estruturada e da linguagem C++. <br><b>Diferencial:</b> Noções básicas em eletrônica e gostar de música :)<br><br>Caso o aluno queira utilizar o próprio computador, instalar previamente a bilioteca LCD2C"
              extra="Minicurso"
              :show-description="true"
            />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
    <ScheduleBreak start="10:00" end="10:30" class="my-3" title="Coffee Break" />
    <!-- Courses line display for large screens -->
    <div class="hidden flex-row md:flex md:gap-2">
      <Carousel class="max-w-5xl">
        <CarouselContent>
          <CarouselItem class="basis-1/2">
            <ScheduleEventCourse
              start="10:30" end="12:30"
              title="Análise e Visualização de Dados com Python"
              teacher="Continuação pós Coffee Break"
              extra="Minicurso"
            />
          </CarouselItem>
          <CarouselItem class="basis-1/2 pl-2">
            <ScheduleEventCourse
              start="10:30" end="12:30"
              title="Do Zero ao CRUD! (Backend)"
              extra="Minicurso"
              teacher="Continuação pós Coffee Break"
              :show-arrow="true"
            />
          </CarouselItem>
          <CarouselItem class="basis-1/2 pl-2">
            <ScheduleEventCourse
              start="10:30" end="12:30"
              title="Introdução à Plataforma Arduino"
              description="Caso o aluno deseje levar o próprio computador, deve instalar previamente a bilioteca LCD2C"
              extra="Minicurso"
              teacher="Continuação pós Coffee Break"
            />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
    <!-- Courses line carousel display for small screens -->
    <div class="lg:hidden">
      <Carousel>
        <CarouselContent>
          <CarouselItem>
            <ScheduleEventCourse
              start="10:30" end="12:30"
              title="Análise e Visualização de Dados com Python"
              teacher="Continuação pós Coffee Break"
              extra="Minicurso"
              :show-arrow="true"
            />
          </CarouselItem>
          <CarouselItem>
            <ScheduleEventCourse
              start="10:30" end="12:30"
              title="Do Zero ao CRUD! (Backend)"
              extra="Minicurso"
              teacher="Continuação pós Coffee Break"
              :show-arrow="true"
            />
          </CarouselItem>
          <CarouselItem>
            <ScheduleEventCourse
              start="10:30" end="12:30"
              title="Introdução à Plataforma Arduino"
              description="Caso o aluno deseje levar o próprio computador, deve instalar previamente a bilioteca LCD2C"
              extra="Minicurso"
              teacher="Continuação pós Coffee Break"
            />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
    <ScheduleBreak start="12:30" end="13:30" title="Intervalo para Almoço" class="my-3" />
    <ScheduleEventSimple
      start="13:00" end="14:00"
      title="Credênciamento | Palestras"
      extra="Auditório"
    />
    <ScheduleEventTalk
      start="14:00" end="14:50"
      title="Ciência de Dados: Transformando Dados em Decisões Estratégicas"
      description="Vou abordar como os dados se tornaram um ativo valioso para as organizações e como a ciência de dados é fundamental para prever cenários futuros e auxiliar na tomada de decisões estratégicas. Falar um pouco sobre a importância de uma cultura organizacional orientada a dados, onde a tecnologia é um meio e não um fim, e o papel multidisciplinar do profissional de ciência de dados como promotor dessa cultura, e também sobre as perspectivas para a área nos próximos anos."
      :show-description="true"
      speaker="Cloves Alves Junior"
      position="Analista de Dados na Soma Urbanismo"
      photo="/speakers/cloves_alves.png"
      extra="Palestra"
    />
    <ScheduleEventTalk
      start="14:50" end="15:40"
      title="Livecoding & Algoraves: Performances Musicais Ao Vivo"
      description="Apresentarei alguns de meus projetos nas áreas de computação musical e programação criativa como o framework RoboMus para uma orquestra de robôs musicais, além de umcontexto geral sobre softwares e linguagens de programação musical, o nascimento e a cultura das raves algorítmicas (Algoraves), bem como nomes de relevância na comunidade. Farei também uma demonstração de livecoding com Sonic Pi"
      speaker="Herick Lima"
      position="Membro do Núcleo Espírito Santense de Computação Musical (NESCoM)"
      photo="/speakers/herick_lima.png"
      extra="Palestra"
    />
    <ScheduleEventSimple start="15:40" end="16:00" title="Intervalo" />
    <ScheduleEventTalk
      start="16:00" end="17:20"
      title="ESTANDES"
      speaker="Convidados Diversos"
      description="Momento reservado para a exposição de estandes com grupos convidados e patrocinadores, onde serão apresentandos projetos e produtos interessantes"
      extra="Local: Quadra"
      photo=""
    />
  </div>
  <ScheduleBreak start="17:20" end="18:00" title="Coffee Break | Encerramento" />
  <div class="mb-32 min-h-20" />
</template>
