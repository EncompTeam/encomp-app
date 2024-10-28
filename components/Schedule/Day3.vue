<template>
  <div>
    <ScheduleHeader day="08" />
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
              title="Minicurso - Frontend é mais que HTML, CSS e JavaScript"
              extra="Minicurso"
              speaker="Curioso para saber quem vai ministrar?"
              position="Nos siga no instragram @encompceunes para ficar por dentro das novidades"
            />
          </CarouselItem>
          <CarouselItem class="basis-1/2 pl-2">
            <ScheduleEventCourse
              start="08:00" end="10:00"
              title="Minicurso - Desenvolvimento Android Nativo"
              extra="Minicurso"
              description="Os inscritos PRECISARÃO LEVAR A PRÓPRIA MÁQUINA para participar do minicurso. Requisitos mínimos: i5 de 10ª geração (ou equivalente), 8GB de RAM (ou superior). Requisitos recomendados: i5 de 11ª geração (ou equivalente), 16 GB de RAM (ou superior). Os computadores dos laboratórios estarão preparados com os softwares necessários, mas não garantimos um bom desempenho."
              :show-description="true"
              speaker="Curioso para saber quem vai ministrar?"
              position="Nos siga no instragram @encompceunes para ficar por dentro das novidades"
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
              title="Minicurso - Frontend é mais que HTML, CSS e JavaScript"
              extra="Minicurso"
              speaker="Curioso para saber quem vai ministrar?"
              position="Nos siga no instragram @encompceunes para ficar por dentro das novidades"
              :show-arrow="true"
            />
          </CarouselItem>
          <CarouselItem>
            <ScheduleEventCourse
              start="08:00" end="10:00"
              title="Minicurso - Desenvolvimento Android Nativo"
              extra="Minicurso"
              description="Os inscritos PRECISARÃO LEVAR A PRÓPRIA MÁQUINA para participar do minicurso. Requisitos mínimos: i5 de 10ª geração (ou equivalente), 8GB de RAM (ou superior). Requisitos recomendados: i5 de 11ª geração (ou equivalente), 16 GB de RAM (ou superior). Os computadores dos laboratórios estarão preparados com os softwares necessários, mas não garantimos um bom desempenho."
              :show-description="true"
              speaker="Curioso para saber quem vai ministrar?"
              position="Nos siga no instragram @encompceunes para ficar por dentro das novidades"
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
              title="Minicurso - Frontend é mais que HTML, CSS e JavaScript"
              extra="Minicurso"
              speaker="Continuação pós Coffee Break"
              position=""
            />
          </CarouselItem>
          <CarouselItem class="basis-1/2 pl-2">
            <ScheduleEventCourse
              start="10:30" end="12:30"
              title="Minicurso - Desenvolvimento Android Nativo"
              extra="Minicurso"
              description="Os inscritos PRECISARÃO LEVAR A PRÓPRIA MÁQUINA para participar do minicurso. Requisitos mínimos: i5 de 10ª geração (ou equivalente), 8GB de RAM (ou superior). Requisitos recomendados: i5 de 11ª geração (ou equivalente), 16 GB de RAM (ou superior). Os computadores dos laboratórios estarão preparados com os softwares necessários, mas não garantimos um bom desempenho."
              speaker="Continuação pós Coffee Break"
              position=""
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
              title="Minicurso - Frontend é mais que HTML, CSS e JavaScript"
              extra="Minicurso"
              speaker="Continuação pós Coffee Break"
              position=""
            />
          </CarouselItem>
          <CarouselItem>
            <ScheduleEventCourse
              start="10:30" end="12:30"
              title="Minicurso - Desenvolvimento Android Nativo"
              extra="Minicurso"
              description="Os inscritos PRECISARÃO LEVAR A PRÓPRIA MÁQUINA para participar do minicurso. Requisitos mínimos: i5 de 10ª geração (ou equivalente), 8GB de RAM (ou superior). Requisitos recomendados: i5 de 11ª geração (ou equivalente), 16 GB de RAM (ou superior). Os computadores dos laboratórios estarão preparados com os softwares necessários, mas não garantimos um bom desempenho."
              speaker="Continuação pós Coffee Break"
              position=""
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
      title="EM BREVE MAIS INFORMAÇÕES"
      speaker="Fique ligado!"
      position="Nos siga no instragram @encompceunes para ficar por dentro das novidades"
      photo=""
      extra="Palestra"
    />
    <ScheduleEventTalk
      start="15:10" end="16:00"
      title="Zero2Hero - Backend Developer"
      description="A palestra &quot;Zero2Hero - Backend Developer&quot; oferece uma jornada completa para quem deseja iniciar na área de backend. Luiz apresentará os tópicos essenciais para transformar um iniciante em um desenvolvedor backend de sucesso, passando por conceitos fundamentais, boas práticas e as tecnologias mais relevantes do mercado. Ideal para quem quer sair do zero e se tornar um herói no desenvolvimento backend, dominando as principais ferramentas e arquiteturas."
      :show-description="true"
      speaker="Luiz Fantin"
      position="Senior Backend Developer na Compass.UOL"
      photo="/speakers/luiz_fantin.png"
      extra="Palestra"
    />
    <ScheduleEventTalk
      start="16:10" end="17:00"
      title="Nos Bastidores do Desenvolvimento de Jogos"
      speaker="Ramon Pezzin Ton"
      position="Produtor Técnico na Shed of Ideas"
      description="Vamos explorar áreas de atuação, fluxo de trabalho, engines e os primeiros passos para desenvolver um jogo. Venha se inspirar e descobrir como transformar sua paixão em profissão!"
      :show-description="true"
      photo="/speakers/ramon_pezzin.png"
      extra="Palestra"
    />
    <ScheduleEventSimple start="17:00" end="17:20" title="Avisos e Sorteios" />
  </div>
  <ScheduleBreak start="17:20" end="18:00" title="Coffee Break | Encerramento" />
  <div class="my-32 min-h-20" />
</template>
