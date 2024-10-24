<template>
  <div>
    <ScheduleHeader day="07" />
    <ScheduleEventSimple
      start="07:30" end="08:00"
      title="Credênciamento | Minicursos"
    />
    <!-- Courses line display for large screens -->
    <div class="hidden flex-row md:flex md:gap-2">
      <ScheduleEventCourse
        start="08:00" end="10:00"
        title="EM BREVE MAIS INFORMAÇÕES"
        extra="Minicurso"
        speaker="Fique ligado!"
        position="Nos siga no instragram para ficar por dentro das novidades @encompceunes"
      />
      <ScheduleEventCourse
        start="08:00" end="10:00"
        title="EM BREVE MAIS INFORMAÇÕES"
        extra="Minicurso"
        speaker="Fique ligado!"
        position="Nos siga no instragram para ficar por dentro das novidades @encompceunes"
      />
    </div>
    <!-- Courses line carousel display for small screens -->
    <div class="lg:hidden">
      <Carousel>
        <CarouselContent>
          <CarouselItem>
            <ScheduleEventCourse
              start="08:00" end="10:00"
              title="EM BREVE MAIS INFORMAÇÕES"
              extra="Minicurso"
              speaker="Fique ligado!"
              position="Nos siga no instragram para ficar por dentro das novidades @encompceunes"
              :show-arrow="true"
            />
          </CarouselItem>
          <CarouselItem>
            <ScheduleEventCourse
              start="08:00" end="10:00"
              title="EM BREVE MAIS INFORMAÇÕES"
              extra="Minicurso"
              speaker="Fique ligado!"
              position="Nos siga no instragram para ficar por dentro das novidades @encompceunes"
            />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
    <ScheduleBreak start="10:00" end="10:30" title="Coffee Break" class="my-3" />
    <!-- Courses line display for large screens -->
    <div class="hidden flex-row md:flex md:gap-2">
      <ScheduleEventCourse
        start="10:30" end="12:30"
        title="EM BREVE MAIS INFORMAÇÕES"
        extra="Minicurso"
        speaker="Fique ligado!"
        position="Nos siga no instragram para ficar por dentro das novidades @encompceunes"
      />
      <ScheduleEventCourse
        start="10:30" end="12:30"
        title="EM BREVE MAIS INFORMAÇÕES"
        extra="Minicurso"
        speaker="Fique ligado!"
        position="Nos siga no instragram para ficar por dentro das novidades @encompceunes"
      />
    </div>
    <!-- Courses line carousel display for small screens -->
    <div class="lg:hidden">
      <Carousel>
        <CarouselContent>
          <CarouselItem>
            <ScheduleEventCourse
              start="10:30" end="12:30"
              title="EM BREVE MAIS INFORMAÇÕES"
              extra="Minicurso"
              speaker="Fique ligado!"
              position="Nos siga no instragram para ficar por dentro das novidades @encompceunes"
              :show-arrow="true"
            />
          </CarouselItem>
          <CarouselItem>
            <ScheduleEventCourse
              start="10:30" end="12:30"
              title="EM BREVE MAIS INFORMAÇÕES"
              extra="Minicurso"
              speaker="Fique ligado!"
              position="Nos siga no instragram para ficar por dentro das novidades @encompceunes"
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
      position="Nos siga no instragram para ficar por dentro das novidades @encompceunes"
      photo=""
      extra="Palestra"
    />
    <ScheduleEventTalk
      start="14:50" end="15:40"
      title="EM BREVE MAIS INFORMAÇÕES"
      speaker="Fique ligado!"
      position="Nos siga no instragram para ficar por dentro das novidades @encompceunes"
      photo=""
      extra="Palestra"
    />
    <ScheduleEventSimple start="15:40" end="16:00" title="Intervalo" />
    <ScheduleEventTalk
      start="16:00" end="17:20"
      title="ESTANDES"
      speaker="Convidados Diversos"
      position=""
      photo=""
    />
  </div>
  <ScheduleBreak start="17:20" end="18:00" title="Coffee Break | Encerramento" />
  <div class="mb-32 min-h-20" />
</template>
