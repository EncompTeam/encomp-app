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
              title="Frontend é mais que HTML, CSS e JavaScript"
              description="Neste minicurso, vamos construir desde o ambiente para o desenvolvimento utilizando ESLint e o Prettier, passar por estilizações com o TailwindCSS e DaisyUI, implementar funcionalidades e dar vida a nossa aplicação com JavaScript e requisições HTTP com o axios e por fim aprender sobre ferramentas de build, bundlers, gerenciadores de pacotes e muito mais.<br><br><u>REQUISITOS:</u><br><b>Necessário:</b> Ter uma conta no GitHub<br><b>Desejável:</b> Conhecimento prévio em HTML e CSS."
              teacher="Nicolas Walcker"
              photo="/teachers/nicolas_walcker.png"
              photo2=""
              position=""
              extra="Minicurso"
              :show-description="true"
            />
          </CarouselItem>
          <CarouselItem class="basis-1/2 pl-2">
            <ScheduleEventCourse
              start="08:00" end="10:00"
              title="Desenvolvimento Android Nativo"
              extra="Minicurso"
              description="Os participantes do curso verão os tópicos:<br>- Introdução ao Android Studio (IDE, Gradle, Emulador, etc);<br>- Introdução à linguagem de programação Kotlin;<br>- Como criar um projeto no Android Studio;<br>- Construção de UIs com Jetpack Compose;<br>- Consumo de APIs REST;<br>- Utilização de padrões de design como MVVM;<br>- Noções de serialização e deserialização de dados JSON no Android.O minicurso de Desenvolvimento Android Nativo apresentará conceitos chave para a criação de uma aplicação para o sistema operacional para dispositivos móveis mais utilizado do mundo.<br><br><u>REQUISITOS:</u><br>Os inscritos <b>PRECISARÃO LEVAR A PRÓPRIA MÁQUINA</b> para participar do minicurso.<br><b>Requisitos mínimos:</b> i5 de 10ª geração (ou equivalente), 8GB de RAM (ou superior).\n<br><b>Requisitos recomendados:</b> i5 de 11ª geração (ou equivalente), 16 GB de RAM (ou superior).<br><br><i> Em último caso, os computadores do laboratório estarão preparados com os softwares necessários, mas não garantimos um bom desempenho."
              :show-description="true"
              teacher="Erick Lima"
              position=""
              photo="/speakers/herick_lima.png"
              photo2=""
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
              start="08:00" end="10:00"
              title="Frontend é mais que HTML, CSS e JavaScript"
              description="Neste minicurso, vamos construir desde o ambiente para o desenvolvimento utilizando ESLint e o Prettier, passar por estilizações com o TailwindCSS e DaisyUI, implementar funcionalidades e dar vida a nossa aplicação com JavaScript e requisições HTTP com o axios e por fim aprender sobre ferramentas de build, bundlers, gerenciadores de pacotes e muito mais.<br><br><u>REQUISITOS:</u><br><b>Necessário:</b> Ter uma conta no GitHub<br><b>Desejável:</b> Conhecimento prévio em HTML e CSS."
              teacher="Nicolas Walcker"
              position=""
              photo="/teachers/nicolas_walcker.png"
              photo2=""
              extra="Minicurso"
              :show-description="true"
            />
          </CarouselItem>
          <CarouselItem>
            <ScheduleEventCourse
              start="08:00" end="10:00"
              title="Desenvolvimento Android Nativo"
              extra="Minicurso"
              description="Os participantes do curso verão os tópicos:<br>- Introdução ao Android Studio (IDE, Gradle, Emulador, etc);<br>- Introdução à linguagem de programação Kotlin;<br>- Como criar um projeto no Android Studio;<br>- Construção de UIs com Jetpack Compose;<br>- Consumo de APIs REST;<br>- Utilização de padrões de design como MVVM;<br>- Noções de serialização e deserialização de dados JSON no Android.O minicurso de Desenvolvimento Android Nativo apresentará conceitos chave para a criação de uma aplicação para o sistema operacional para dispositivos móveis mais utilizado do mundo.<br><br><u>REQUISITOS:</u><br>Os inscritos <b>PRECISARÃO LEVAR A PRÓPRIA MÁQUINA</b> para participar do minicurso.<br><b>Requisitos mínimos:</b> i5 de 10ª geração (ou equivalente), 8GB de RAM (ou superior).\n<br><b>Requisitos recomendados:</b> i5 de 11ª geração (ou equivalente), 16 GB de RAM (ou superior).<br><br><i> Em último caso, os computadores do laboratório estarão preparados com os softwares necessários, mas não garantimos um bom desempenho."
              :show-description="true"
              teacher="Erick Lima"
              position=""
              photo="/speakers/herick_lima.png"
              photo2=""
            />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
      <p class="flex w-full justify-center pt-1 text-xs text-white opacity-50">
        Arraste para os lados e veja mais da programação
      </p>
    </div>
    <ScheduleBreak start="10:00" end="10:30" class="my-3" title="Coffee Break" />
    <!-- Courses line display for large screens -->
    <div class="hidden flex-row md:flex md:gap-2">
      <Carousel class="max-w-5xl">
        <CarouselContent>
          <CarouselItem class="basis-1/2">
            <ScheduleEventCourse
              start="10:30" end="12:30"
              title="Frontend é mais que HTML, CSS e JavaScript"
              extra="Minicurso"
              teacher="Continuação pós Coffee Break"
              position=""
              photo="/teachers/nicolas_walcker.png"
              photo2=""
            />
          </CarouselItem>
          <CarouselItem class="basis-1/2 pl-2">
            <ScheduleEventCourse
              start="10:30" end="12:30"
              title="Desenvolvimento Android Nativo"
              extra="Minicurso"
              description="Os inscritos PRECISARÃO LEVAR A PRÓPRIA MÁQUINA para participar do minicurso. Requisitos mínimos: i5 de 10ª geração (ou equivalente), 8GB de RAM (ou superior). Requisitos recomendados: i5 de 11ª geração (ou equivalente), 16 GB de RAM (ou superior). Os computadores dos laboratórios estarão preparados com os softwares necessários, mas não garantimos um bom desempenho."
              teacher="Continuação pós Coffee Break"
              position=""
              photo="/speakers/herick_lima.png"
              photo2=""
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
              start="10:30" end="12:30"
              title="Frontend é mais que HTML, CSS e JavaScript"
              extra="Minicurso"
              teacher="Continuação pós Coffee Break"
              position=""
              photo="/teachers/nicolas_walcker.png"
              photo2=""
            />
          </CarouselItem>
          <CarouselItem>
            <ScheduleEventCourse
              start="10:30" end="12:30"
              title="Desenvolvimento Android Nativo"
              extra="Minicurso"
              description="Os inscritos PRECISARÃO LEVAR A PRÓPRIA MÁQUINA para participar do minicurso. Requisitos mínimos: i5 de 10ª geração (ou equivalente), 8GB de RAM (ou superior). Requisitos recomendados: i5 de 11ª geração (ou equivalente), 16 GB de RAM (ou superior). Os computadores dos laboratórios estarão preparados com os softwares necessários, mas não garantimos um bom desempenho."
              teacher="Continuação pós Coffee Break"
              position=""
              photo="/speakers/herick_lima.png"
              photo2=""
            />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
      <p class="flex w-full justify-center pt-1 text-xs text-white opacity-50">
        Arraste para os lados e veja mais da programação
      </p>
    </div>
    <ScheduleBreak start="12:30" end="13:30" title="Intervalo para Almoço" class="my-3" />
    <ScheduleEventSimple
      start="13:30" end="14:00"
      title="Credênciamento | Palestras"
      extra="Auditório"
    />
    <ScheduleEventTalk
      start="14:00" end="14:50"
      title="Impacto do Movimento Empresa Júnior na Formação Empreeendedora"
      speaker="Lucas Rios"
      position="Presidente Executivo da Federação de Empresas Juniores do ES"
      photo="/speakers/lucas_rios.png"
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
