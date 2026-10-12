<template>
  <div>
    <ScheduleHeader day="12" />
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
              title="Oficina de Desenvolvimento Frontend"
              teacher="Thae Morais"
              position="Do Código à Interface: desenvolvendo aplicações web com HTML, CSS e JavaScript"
              photo="/teachers/Thae.png"
              description="Já imaginou transformar dados de uma API em uma aplicação web interativa e funcional? Neste minicurso prático, você vai explorar os fundamentos do desenvolvimento frontend utilizando HTML, CSS e JavaScript puro, aprendendo a estruturar páginas, estilizá-las e adicionar interatividade às interfaces. Na prática, você desenvolverá um projeto, aprenderá a conectar sua aplicação a uma API REST, implementando funcionalidades de cadastro, consulta, edição e exclusão de dados. Ao final, você terá uma visão prática de como as principais tecnologias do frontend trabalham juntas para dar vida a aplicações web."
              extra="Minicurso"
              :show-description="true"
            />
          </CarouselItem>
          <CarouselItem class="basis-1/2 pl-2">
            <ScheduleEventCourse
              start="08:00"
              end="10:00"
              title="Oficina de Linux"
              teacher="Geraldo Padua"
              position=""
              photo="/teachers/Geraldo.png"
              extra="Minicurso"
            />
          </CarouselItem>
          <CarouselItem class="basis-1/2 pl-2">
            <ScheduleEventCourse
              start="08:00"
              end="10:00"
              title="Oficina a definir"
              teacher="Em breve"
              position="Fique ligado nas nossas redes sociais para saber as novidades"
              photo="/logo_circle.png"
              extra="Minicurso"
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
              title="Oficina de Desenvolvimento Frontend"
              teacher="Thae Morais"
              position="Do Código à Interface: desenvolvendo aplicações web com HTML, CSS e JavaScript"
              photo="/teachers/Thae.png"
              description="Já imaginou transformar dados de uma API em uma aplicação web interativa e funcional? Neste minicurso prático, você vai explorar os fundamentos do desenvolvimento frontend utilizando HTML, CSS e JavaScript puro, aprendendo a estruturar páginas, estilizá-las e adicionar interatividade às interfaces. Na prática, você desenvolverá um projeto, aprenderá a conectar sua aplicação a uma API REST, implementando funcionalidades de cadastro, consulta, edição e exclusão de dados. Ao final, você terá uma visão prática de como as principais tecnologias do frontend trabalham juntas para dar vida a aplicações web."
              extra="Minicurso"
              :show-description="true"
            />
          </CarouselItem>
          <CarouselItem>
            <ScheduleEventCourse
              start="08:00"
              end="10:00"
              title="Oficina de Linux"
              teacher="Geraldo Padua"
              position=""
              photo="/teachers/Geraldo.png"
              extra="Minicurso"
            />
          </CarouselItem>
          <CarouselItem>
            <ScheduleEventCourse
              start="08:00"
              end="10:00"
              title="Oficina a definir"
              teacher="Em breve"
              position="Fique ligado nas nossas redes sociais para saber as novidades"
              photo="/logo_circle.png"
              extra="Minicurso"
            />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
      <p class="mt-1 flex w-full justify-center pt-1 text-xs text-white opacity-50">
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
              title="Oficina de Desenvolvimento Frontend"
              teacher="Thae Morais"
              position="Do Código à Interface: desenvolvendo aplicações web com HTML, CSS e JavaScript"
              photo="/teachers/Thae.png"
              extra="Continuação"
            />
          </CarouselItem>
          <CarouselItem class="basis-1/2 pl-2">
            <ScheduleEventCourse
              start="10:30"
              end="12:00"
              title="Oficina de Linux"
              teacher="Geraldo Padua"
              photo="/teachers/Geraldo.png"
              extra="Continuação"
            />
          </CarouselItem>
          <CarouselItem class="basis-1/2 pl-2">
            <ScheduleEventCourse
              start="10:30"
              end="12:00"
              title="Oficina a definir"
              teacher="Em breve"
              photo="/logo_circle.png"
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
              title="Oficina de Desenvolvimento Frontend"
              teacher="Thae Morais"
              position="Do Código à Interface: desenvolvendo aplicações web com HTML, CSS e JavaScript"
              photo="/teachers/Thae.png"
              extra="Continuação"
            />
          </CarouselItem>
          <CarouselItem>
            <ScheduleEventCourse
              start="10:30"
              end="12:00"
              title="Oficina de Linux"
              teacher="Geraldo Padua"
              photo="/teachers/Geraldo.png"
              extra="Continuação"
            />
          </CarouselItem>
          <CarouselItem>
            <ScheduleEventCourse
              start="10:30"
              end="12:00"
              title="Oficina a definir"
              teacher="Em breve"
              photo="/logo_circle.png"
              extra="Continuação"
            />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
      <p class="mt-1 flex w-full justify-center pt-1 text-xs text-white opacity-50">
        Arraste para os lados e veja mais da programação
      </p>
    </div>

    <ScheduleBreak
      start="12:30"
      end="13:30"
      class="my-3"
      title="Intervalo de Almoço"
    />

    <ScheduleEventSimple start="13:30" end="14:00" title="Credenciamento" extra="Auditório" />

    <ScheduleEventTalk
      start="14:00"
      end="14:50"
      title="Computação em Nuvem e Mercado de Trabalho: por onde começar?"
      speaker="Julio Niko"
      position=""
      photo="/speakers/Julio.png"
      extra="Auditório"
      :show-description="false"
    />

    <ScheduleEventTalk
      start="14:50"
      end="15:40"
      title="Como a IA e a realidade virtual estão mudando o ensino e a reabilitação"
      speaker="Alan Helal"
      position=""
      photo="/speakers/Alan.png"
      extra="Auditório"
      :show-description="false"
    />

    <ScheduleEventSimple
      start="15:40"
      end="16:00"
      title="Intervalo + Avisos"
      extra="Caso haja sorteios, este horário será utilizado"
    />

    <ScheduleEventTalk
      start="16:00"
      end="17:20"
      title="Computação Musical"
      speaker="Erik Lima"
      position=""
      photo="/teachers/Erik.png"
      extra="Auditório"
      :show-description="false"
    />

    <ScheduleBreak start="17:20" end="18:00" class="my-3" title="Coffee Break | Encerramento" />
  </div>
</template>
