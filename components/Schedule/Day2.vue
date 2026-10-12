<template>
  <div>
    <ScheduleHeader day="13" />
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
              title="Oficina de Introdução ao UI/UX"
              teacher="Kethlen Correia"
              position="Introdução ao universo de UI/UX Design"
              photo="/teachers/Keth.png"
              description="O minicurso será uma introdução ao universo de UI/UX Design, abordando conceitos fundamentais do design, sua história e evolução, as etapas e os processos envolvidos na criação de soluções digitais, além de uma visão geral do mercado de trabalho e das possibilidades de atuação na área. Também falarei sobre como utilizar a inteligência artificial como ferramenta de apoio na criação e construção de experiências digitais. Para finalizar, teremos uma atividade prática para aplicar os conceitos apresentados e proporcionar um primeiro contato com a área."
              extra="Minicurso"
              :show-description="true"
            />
          </CarouselItem>
          <CarouselItem class="basis-1/2 pl-2">
            <ScheduleEventCourse
              start="08:00"
              end="10:00"
              title="Oficina de Desenvolvimento Android"
              teacher="Erik Lima"
              position="Kotlin, Jetpack Compose, Navigation e Retrofit"
              photo="/teachers/Erik.png"
              description="Neste minicurso você aprenderá a desenvolver um aplicativo Android nativo completo utilizando a linguagem Kotlin e as principais ferramentas do mercado como Jetpack Compose, Navigation e Retrofit"
              extra="Minicurso"
              :show-description="true"
            />
          </CarouselItem>
          <CarouselItem class="basis-1/2 pl-2">
            <ScheduleEventCourse
              start="08:00"
              end="10:00"
              title="Oficina de Segurança da Informação"
              teacher="Murylo Dias"
              position=""
              photo="/teachers/Murylo.png"
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
              title="Oficina de Introdução ao UI/UX"
              teacher="Kethlen Correia"
              position="Introdução ao universo de UI/UX Design"
              photo="/teachers/Keth.png"
              description="O minicurso será uma introdução ao universo de UI/UX Design, abordando conceitos fundamentais do design, sua história e evolução, as etapas e os processos envolvidos na criação de soluções digitais, além de uma visão geral do mercado de trabalho e das possibilidades de atuação na área. Também falarei sobre como utilizar a inteligência artificial como ferramenta de apoio na criação e construção de experiências digitais. Para finalizar, teremos uma atividade prática para aplicar os conceitos apresentados e proporcionar um primeiro contato com a área."
              extra="Minicurso"
              :show-description="true"
            />
          </CarouselItem>
          <CarouselItem>
            <ScheduleEventCourse
              start="08:00"
              end="10:00"
              title="Oficina de Desenvolvimento Android"
              teacher="Erik Lima"
              position="Kotlin, Jetpack Compose, Navigation e Retrofit"
              photo="/teachers/Erik.png"
              description="Neste minicurso você aprenderá a desenvolver um aplicativo Android nativo completo utilizando a linguagem Kotlin e as principais ferramentas do mercado como Jetpack Compose, Navigation e Retrofit"
              extra="Minicurso"
              :show-description="true"
            />
          </CarouselItem>
          <CarouselItem>
            <ScheduleEventCourse
              start="08:00"
              end="10:00"
              title="Oficina de Segurança da Informação"
              teacher="Murylo Dias"
              position=""
              photo="/teachers/Murylo.png"
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
              end="12:30"
              title="Oficina de Introdução ao UI/UX"
              teacher="Kethlen Correia"
              position="Introdução ao universo de UI/UX Design"
              photo="/teachers/Keth.png"
              extra="Continuação"
            />
          </CarouselItem>
          <CarouselItem class="basis-1/2 pl-2">
            <ScheduleEventCourse
              start="10:30"
              end="12:30"
              title="Oficina de Desenvolvimento Android"
              teacher="Erik Lima"
              position="Kotlin, Jetpack Compose, Navigation e Retrofit"
              photo="/teachers/Erik.png"
              extra="Continuação"
            />
          </CarouselItem>
          <CarouselItem class="basis-1/2 pl-2">
            <ScheduleEventCourse
              start="10:30"
              end="12:30"
              title="Oficina de Segurança da Informação"
              teacher="Murylo Dias"
              photo="/teachers/Murylo.png"
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
              end="12:30"
              title="Oficina de Introdução ao UI/UX"
              teacher="Kethlen Correia"
              position="Introdução ao universo de UI/UX Design"
              photo="/teachers/Keth.png"
              extra="Continuação"
            />
          </CarouselItem>
          <CarouselItem>
            <ScheduleEventCourse
              start="10:30"
              end="12:30"
              title="Oficina de Desenvolvimento Android"
              teacher="Erik Lima"
              position="Kotlin, Jetpack Compose, Navigation e Retrofit"
              photo="/teachers/Erik.png"
              extra="Continuação"
            />
          </CarouselItem>
          <CarouselItem>
            <ScheduleEventCourse
              start="10:30"
              end="12:30"
              title="Oficina de Segurança da Informação"
              teacher="Murylo Dias"
              photo="/teachers/Murylo.png"
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
      title="Privacidade e Segurança na Era da IA"
      speaker="Rodolfo Villaça"
      position=""
      photo="/speakers/Rodolfo.png"
      extra="Auditório"
      :show-description="false"
    />

    <ScheduleEventSimple
      start="14:50"
      end="15:10"
      title="Intervalo"
      extra="Caso haja sorteios, este horário será utilizado"
    />

    <ScheduleEventTalk
      start="15:10"
      end="16:00"
      title="Empreender na Computação"
      speaker="Diego Bayerl"
      position=""
      photo="/speakers/Diego.png"
      extra="Auditório"
      :show-description="false"
    />

    <ScheduleEventSimple
      start="16:00"
      end="16:10"
      title="Intervalo"
      extra="Caso haja sorteios, este horário será utilizado"
    />

    <ScheduleEventSimple
      start="16:10"
      end="17:00"
      title="Palestra a definir"
      extra="Auditório"
    />

    <ScheduleEventSimple start="17:00" end="17:20" title="Avisos e Sorteios" />

    <ScheduleBreak start="17:20" end="18:00" class="my-3" title="Coffee Break | Encerramento" />
  </div>
</template>
