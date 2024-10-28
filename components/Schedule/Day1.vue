<template>
  <div class="relative">
    <ScheduleHeader day="06" />
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
              title="Introdução a UI/UX"
              speaker="Curioso para saber quem vai ministrar?"
              position="Nos siga no instragram @encompceunes para ficar por dentro das novidades"
              description="No minicurso de introdução em UI/UX, serão explorados conceitos essenciais que fundamentam a criação de interfaces  e experiências do usuário. Abordaremos a importância do design na construção de produtos digitais, além dos princípios que garantem uma interface atraente e funcional.<br><br>Os participantes também terão a oportunidade de conhecer ferramentas e recursos populares do mercado, como Figma, que facilitam o processo de design. Para finalizar, um exercício prático permitirá que cada um aplique o que aprendeu, criando sua própria interface e recebendo feedback."
              extra="Minicurso"
            />
          </CarouselItem>
          <CarouselItem class="basis-1/2 pl-2">
            <ScheduleEventCourse
              start="08:00" end="10:00"
              title="Oficina de Introdução ao Desenvolvimento de uma API REST com Minimal API e .NET"
              speaker="Curioso para saber quem vai ministrar?"
              position="Nos siga no instragram @encompceunes para ficar por dentro das novidades"
              description="- Apresentação dos conceitos fundamentais de Minimal API.<br>- Demonstração da construção de uma API do zero utilizando C# e .NET.<br>- Aprendizado da integração com banco de dados (InMemory ou SQL Server).<br>- Implementação das operações CRUD (Create, Read, Update, Delete).<br><br><u>REQUISITOS:</u><br><b>Necessário:</b> Conhecimentos básicos da linguagem C#.<br><b>Desejável:</b> Conhecer o paradigma Orientado à Objetos e sabr operações básicas em bancos de dados relacionais.<br><br>Os inscritos <b>PRECISARÃO LEVAR A PRÓPRIA MÁQUINA</b> para participar do minicurso.<br><b>Requisitos mínimos:</b> i5 de 10ª geração (ou equivalente), 8GB de RAM (ou superior).\n<br><b>Requisitos recomendados:</b> i5 de 11ª geração (ou equivalente), 16 GB de RAM (ou superior).<br><br><i> Em último caso, os computadores do laboratório estarão preparados com os softwares necessários, mas não garantimos um bom desempenho."
              extra="Minicurso"
              :show-description="true"
              :show-arrow="true"
            />
          </CarouselItem>
          <CarouselItem class="basis-1/2 pl-2">
            <ScheduleEventCourse
              start="08:00" end="10:00"
              title="Além do Código: Habilidades Essenciais que uma Pessoa Profissional De Técnologia Precisa Para Se Destacar No Mercado"
              speaker="Curioso para saber quem vai ministrar?"
              position="Nos siga no instragram @encompceunes para ficar por dentro das novidades"
              description="Vamos explorar as habilidades e <i>soft skills</i> essenciais que vão te destacar no mercado e como trablhar e aplicar elas no seu dia a dia!"
              extra="Minicurso"
              :show-description="true"
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
              title="Introdução a UI/UX"
              speaker="Curioso para saber quem vai ministrar?"
              position="Nos siga no instragram @encompceunes para ficar por dentro das novidades"
              description="No minicurso de introdução em UI/UX, serão explorados conceitos essenciais que fundamentam a criação de interfaces  e experiências do usuário. Abordaremos a importância do design na construção de produtos digitais, além dos princípios que garantem uma interface atraente e funcional.<br><br>Os participantes também terão a oportunidade de conhecer ferramentas e recursos populares do mercado, como Figma, que facilitam o processo de design. Para finalizar, um exercício prático permitirá que cada um aplique o que aprendeu, criando sua própria interface e recebendo feedback."
              extra="Minicurso"
              :show-description="true"
              :show-arrow="true"
            />
          </CarouselItem>
          <CarouselItem>
            <ScheduleEventCourse
              start="08:00" end="10:00"
              title="Oficina de Introdução ao Desenvolvimento de uma API REST com Minimal API e .NET"
              extra="Minicurso"
              description="- Apresentação dos conceitos fundamentais de Minimal API.<br>- Demonstração da construção de uma API do zero utilizando C# e .NET.<br>- Aprendizado da integração com banco de dados (InMemory ou SQL Server).<br>- Implementação das operações CRUD (Create, Read, Update, Delete).<br><br><u>REQUISITOS:</u><br><b>Necessário:</b> Conhecimentos básicos da linguagem C#.<br><b>Desejável:</b> Conhecer o paradigma Orientado à Objetos e sabr operações básicas em bancos de dados relacionais.<br><br>Os inscritos <b>PRECISARÃO LEVAR A PRÓPRIA MÁQUINA</b> para participar do minicurso.<br><b>Requisitos mínimos:</b> i5 de 10ª geração (ou equivalente), 8GB de RAM (ou superior).\n<br><b>Requisitos recomendados:</b> i5 de 11ª geração (ou equivalente), 16 GB de RAM (ou superior).<br><br><i> Em último caso, os computadores do laboratório estarão preparados com os softwares necessários, mas não garantimos um bom desempenho."
              :show-description="true"
              speaker="Curioso para saber quem vai ministrar?"
              position="Nos siga no instragram @encompceunes para ficar por dentro das novidades"
              :show-arrow="true"
            />
          </CarouselItem>
          <CarouselItem>
            <ScheduleEventCourse
              start="08:00" end="10:00"
              title="Além do Código: Habilidades Essenciais que uma Pessoa Profissional De Técnologia Precisa Para Se Destacar No Mercado"
              speaker="Curioso para saber quem vai ministrar?"
              position="Nos siga no instragram @encompceunes para ficar por dentro das novidades"
              description="Vamos explorar as habilidades e <i>soft skills</i> essenciais que vão te destacar no mercado e como trablhar e aplicar elas no seu dia a dia!"
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
              start="10:30" end="12:00"
              title="Introdução a UI/UX"
              extra="Minicurso"
              speaker="Continuação pós Coffee Break"
              position=""
            />
          </CarouselItem>
          <CarouselItem class="basis-1/2 px-2">
            <ScheduleEventCourse
              start="10:30" end="12:00"
              title="Oficina de Introdução ao Desenvolvimento de uma API REST com Minimal API e .NET"
              extra="Minicurso"
              speaker="Continuação pós Coffee Break"
              position=""
              :show-arrow="true"
            />
          </CarouselItem>
          <CarouselItem class="basis-1/2 pl-2">
            <ScheduleEventCourse
              start="10:30" end="12:00"
              title="Além do Código: Habilidades Essenciais que uma Pessoa Profissional De Técnologia Precisa Para Se Destacar No Mercado"
              extra="Minicurso"
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
              start="10:30" end="12:00"
              title="Introdução a UI/UX"
              extra="Minicurso"
              speaker="Continuação pós Coffee Break"
              position=""
              :show-arrow="true"
            />
          </CarouselItem>
          <CarouselItem>
            <ScheduleEventCourse
              start="10:30" end="12:00"
              title="Oficina de Introdução ao Desenvolvimento de uma API REST com Minimal API e .NET"
              extra="Minicurso"
              speaker="Continuação pós Coffee Break"
              position=""
              :show-arrow="true"
            />
          </CarouselItem>
          <CarouselItem>
            <ScheduleEventCourse
              start="10:30" end="12:00"
              title="Além do Código: Habilidades Essenciais que uma Pessoa Profissional De Técnologia Precisa Para Se Destacar No Mercado"
              extra="Minicurso"
              speaker="Continuação pós Coffee Break"
              position=""
            />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
    <ScheduleBreak start="12:00" end="12:30" class="my-3" title="Intervalo para Almoço" />
    <ScheduleEventSimple
      start="12:30" end="13:00"
      title="Credênciamento | Palestras"
      extra="Auditório"
    />
    <ScheduleEventSimple start="13:00" end="13:15" title="Abertura" />
    <ScheduleEventTalk
      start="13:15" end="14:05"
      title="Dos Blogs à Engenharia de Software: Como Transformei Minha Carreira na Técnologia"
      speaker="Beatriz Duarte"
      description="Vou contar um pouco sobre minha trajetória até me tornar Engenheira de Software, erros e acertos que cometi ao longo desses mais de 10 anos desde que escrevi minhas primeiras linhas de código, além de conselhos para quem quiser seguir na área de desenvolvimento de software"
      :show-description="true"
      position="Engenheira de Software no Nubank"
      photo="/speakers/beatriz_duarte.png"
    />
    <ScheduleEventSimple start="14:05" end="14:25" title="Momento Alura" color="text-blue-500" />
    <ScheduleEventTalk
      start="14:30" end="16:30"
      title="Mesa Redonda: Bate Papo com Professores"
      speaker="Professores do Departamento de Computação e Eletrônica"
      description="Um bate papo com professores dos cursos de Ciência e Engenharia da Computação, com trocas de experiências e a abertura de um momento ideal para quem pretende cursar o ensino superior na UFES tirar dúvidas e conhecer mais do ambiente acadêmico"
      photo=""
    />
    <ScheduleEventTalk
      start="16:40" end="17:30"
      title="Como se Tornar Indispensável na Era da Inteligência Artificial"
      speaker="Patrick Bonometti"
      description="Iremos explorar o impacto transformador da Inteligência Artificial no mercado de trabalho contemporâneo. Discutiremos como essa nova era está redefinindo funções e habilidades, e como você pode se adaptar e prosperar nesse ambiente em constante mudança"
      :show-description="true"
      position="Fundador da IA Valley"
      photo="/speakers/patrick_bonometti.png"
    />
  </div>
  <ScheduleEventSimple start="17:30" end="17:40" title="Avisos e Sorteios" />
  <ScheduleBreak start="17:40" end="18:00" title="Coffee Break | Encerramento" />
  <div class="my-32 min-h-20" />
</template>
