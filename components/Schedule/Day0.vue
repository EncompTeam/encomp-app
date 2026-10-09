:
<template>
  <div class="mb-96">
    <ScheduleHeader day="11" />
    <ScheduleEventSimple
      start="07:30"
      end="8:00"
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
              teacher="Thae"
              position=""
              photo="/teachers/kethlen_correia.png"
              description="No minicurso de introdução em UI/UX, serão explorados conceitos essenciais que fundamentam a criação de interfaces  e experiências do usuário. Abordaremos a importância do design na construção de produtos digitais, além dos princípios que garantem uma interface atraente e funcional.<br><br>Os participantes também terão a oportunidade de conhecer ferramentas e recursos populares do mercado, como Figma, que facilitam o processo de design. Para finalizar, um exercício prático permitirá que cada um aplique o que aprendeu, criando sua própria interface e recebendo feedback."
              extra="Minicurso"
              :show-description="true"
            />
          </CarouselItem>
          <CarouselItem class="basis-1/2 pl-2">
            <ScheduleEventCourse
              start="08:00"
              end="10:00"
              title="Oficina de Fundamento ao Github"
              teacher="Eduardo Cicuti"
              photo="/teachers/andre_bessa.png"
              position=""
              description="- Apresentação dos conceitos fundamentais de Minimal API.<br>- Demonstração da construção de uma API do zero utilizando C# e .NET.<br>- Aprendizado da integração com banco de dados (InMemory ou SQL Server).<br>- Implementação das operações CRUD (Create, Read, Update, Delete).<br><br><u>REQUISITOS:</u><br><b>Necessário:</b> Conhecimentos básicos da linguagem C#.<br><b>Desejável:</b> Conhecer o paradigma Orientado à Objetos e sabr operações básicas em bancos de dados relacionais.<br><br>Os inscritos <b>PRECISARÃO LEVAR A PRÓPRIA MÁQUINA</b> para participar do minicurso.<br><b>Requisitos mínimos:</b> i5 de 10ª geração (ou equivalente), 8GB de RAM (ou superior).\n<br><b>Requisitos recomendados:</b> i5 de 11ª geração (ou equivalente), 16 GB de RAM (ou superior).<br><br><i> Em último caso, os computadores do laboratório estarão preparados com os softwares necessários, mas não garantimos um bom desempenho."
              extra="Minicurso"
              :show-description="true"
            />
          </CarouselItem>
          <CarouselItem class="basis-1/2 pl-2">
            <ScheduleEventCourse
              start="08:00"
              end="10:00"
              title="Oficina de Análise de Dados"
              teacher="Iasmyn"
              photo="/speakers/beatriz_duarte.png"
              position="Engenheira de Sofware no Nubank"
              description="Vamos explorar as habilidades e <i>soft skills</i> essenciais que vão te destacar no mercado e como trablhar e aplicar elas no seu dia a dia!"
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
              teacher="Thae"
              position=""
              photo="/teachers/kethlen_correia.png"
              description="No minicurso de introdução em UI/UX, serão explorados conceitos essenciais que fundamentam a criação de interfaces  e experiências do usuário. Abordaremos a importância do design na construção de produtos digitais, além dos princípios que garantem uma interface atraente e funcional.<br><br>Os participantes também terão a oportunidade de conhecer ferramentas e recursos populares do mercado, como Figma, que facilitam o processo de design. Para finalizar, um exercício prático permitirá que cada um aplique o que aprendeu, criando sua própria interface e recebendo feedback."
              extra="Minicurso"
              :show-description="true"
            />
          </CarouselItem>
          <CarouselItem>
            <ScheduleEventCourse
              start="08:00"
              end="10:00"
              title="Oficina de Fundamento ao Github"
              teacher="Eduardo Cicuti"
              photo="/teachers/andre_bessa.png"
              extra="Minicurso"
              description="- Apresentação dos conceitos fundamentais de Minimal API.<br>- Demonstração da construção de uma API do zero utilizando C# e .NET.<br>- Aprendizado da integração com banco de dados (InMemory ou SQL Server).<br>- Implementação das operações CRUD (Create, Read, Update, Delete).<br><br><u>REQUISITOS:</u><br><b>Necessário:</b> Conhecimentos básicos da linguagem C#.<br><b>Desejável:</b> Conhecer o paradigma Orientado à Objetos e sabr operações básicas em bancos de dados relacionais.<br><br>Os inscritos <b>PRECISARÃO LEVAR A PRÓPRIA MÁQUINA</b> para participar do minicurso.<br><b>Requisitos mínimos:</b> i5 de 10ª geração (ou equivalente), 8GB de RAM (ou superior).\n<br><b>Requisitos recomendados:</b> i5 de 11ª geração (ou equivalente), 16 GB de RAM (ou superior).<br><br><i> Em último caso, os computadores do laboratório estarão preparados com os softwares necessários, mas não garantimos um bom desempenho."
              :show-description="true"
              position=""
            />
          </CarouselItem>
          <CarouselItem>
            <ScheduleEventCourse
              start="08:00"
              end="10:00"
              title="Oficina de Análise de Dados"
              teacher="Iasmyn"
              photo="/speakers/beatriz_duarte.png"
              position="Engenheira de Sofware no Nubank"
              description="Vamos explorar as habilidades e <i>soft skills</i> essenciais que vão te destacar no mercado e como trablhar e aplicar elas no seu dia a dia!"
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
              start="08:00"
              end="10:00"
              title="Oficina de Desenvolvimento Backend"
              teacher="Thae"
              position=""
              photo="/teachers/kethlen_correia.png"
              description="No minicurso de introdução em UI/UX, serão explorados conceitos essenciais que fundamentam a criação de interfaces  e experiências do usuário. Abordaremos a importância do design na construção de produtos digitais, além dos princípios que garantem uma interface atraente e funcional.<br><br>Os participantes também terão a oportunidade de conhecer ferramentas e recursos populares do mercado, como Figma, que facilitam o processo de design. Para finalizar, um exercício prático permitirá que cada um aplique o que aprendeu, criando sua própria interface e recebendo feedback."
              extra="Minicurso"
              :show-description="true"
            />
          </CarouselItem>
          <CarouselItem class="basis-1/2 pl-2">
            <ScheduleEventCourse
              start="08:00"
              end="10:00"
              title="Oficina de Fundamento ao Github"
              teacher="Eduardo Cicuti"
              photo="/teachers/andre_bessa.png"
              position=""
              description="- Apresentação dos conceitos fundamentais de Minimal API.<br>- Demonstração da construção de uma API do zero utilizando C# e .NET.<br>- Aprendizado da integração com banco de dados (InMemory ou SQL Server).<br>- Implementação das operações CRUD (Create, Read, Update, Delete).<br><br><u>REQUISITOS:</u><br><b>Necessário:</b> Conhecimentos básicos da linguagem C#.<br><b>Desejável:</b> Conhecer o paradigma Orientado à Objetos e sabr operações básicas em bancos de dados relacionais.<br><br>Os inscritos <b>PRECISARÃO LEVAR A PRÓPRIA MÁQUINA</b> para participar do minicurso.<br><b>Requisitos mínimos:</b> i5 de 10ª geração (ou equivalente), 8GB de RAM (ou superior).\n<br><b>Requisitos recomendados:</b> i5 de 11ª geração (ou equivalente), 16 GB de RAM (ou superior).<br><br><i> Em último caso, os computadores do laboratório estarão preparados com os softwares necessários, mas não garantimos um bom desempenho."
              extra="Minicurso"
              :show-description="true"
            />
          </CarouselItem>
          <CarouselItem class="basis-1/2 pl-2">
            <ScheduleEventCourse
              start="08:00"
              end="10:00"
              title="Oficina de Análise de Dados"
              teacher="Iasmyn"
              photo="/speakers/beatriz_duarte.png"
              position="Engenheira de Sofware no Nubank"
              description="Vamos explorar as habilidades e <i>soft skills</i> essenciais que vão te destacar no mercado e como trablhar e aplicar elas no seu dia a dia!"
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
              teacher="Thae"
              position=""
              photo="/teachers/kethlen_correia.png"
              description="No minicurso de introdução em UI/UX, serão explorados conceitos essenciais que fundamentam a criação de interfaces  e experiências do usuário. Abordaremos a importância do design na construção de produtos digitais, além dos princípios que garantem uma interface atraente e funcional.<br><br>Os participantes também terão a oportunidade de conhecer ferramentas e recursos populares do mercado, como Figma, que facilitam o processo de design. Para finalizar, um exercício prático permitirá que cada um aplique o que aprendeu, criando sua própria interface e recebendo feedback."
              extra="Minicurso"
              :show-description="true"
            />
          </CarouselItem>
          <CarouselItem>
            <ScheduleEventCourse
              start="08:00"
              end="10:00"
              title="Oficina de Fundamento ao Github"
              teacher="Eduardo Cicuti"
              photo="/teachers/andre_bessa.png"
              extra="Minicurso"
              description="- Apresentação dos conceitos fundamentais de Minimal API.<br>- Demonstração da construção de uma API do zero utilizando C# e .NET.<br>- Aprendizado da integração com banco de dados (InMemory ou SQL Server).<br>- Implementação das operações CRUD (Create, Read, Update, Delete).<br><br><u>REQUISITOS:</u><br><b>Necessário:</b> Conhecimentos básicos da linguagem C#.<br><b>Desejável:</b> Conhecer o paradigma Orientado à Objetos e sabr operações básicas em bancos de dados relacionais.<br><br>Os inscritos <b>PRECISARÃO LEVAR A PRÓPRIA MÁQUINA</b> para participar do minicurso.<br><b>Requisitos mínimos:</b> i5 de 10ª geração (ou equivalente), 8GB de RAM (ou superior).\n<br><b>Requisitos recomendados:</b> i5 de 11ª geração (ou equivalente), 16 GB de RAM (ou superior).<br><br><i> Em último caso, os computadores do laboratório estarão preparados com os softwares necessários, mas não garantimos um bom desempenho."
              :show-description="true"
              position=""
            />
          </CarouselItem>
          <CarouselItem>
            <ScheduleEventCourse
              start="08:00"
              end="10:00"
              title="Oficina de Análise de Dados"
              teacher="Iasmyn"
              photo="/speakers/beatriz_duarte.png"
              position="Engenheira de Sofware no Nubank"
              description="Vamos explorar as habilidades e <i>soft skills</i> essenciais que vão te destacar no mercado e como trablhar e aplicar elas no seu dia a dia!"
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
      start="12:00"
      end="12:30"
      class="my-3"
      title="Intervalo de Almoço"
    />

    <ScheduleEventSimple start="12:30" end="13:00" title="Credenciamento" />

    <ScheduleEventSimple start="13:00" end="13:15" title="Abertura do Evento" />

    <ScheduleEventTalk
      start="13:15"
      end="14:05"
      title="IA Pedro"
      speaker=""
      position=""
      photo=""
    />
  </div>
</template>
