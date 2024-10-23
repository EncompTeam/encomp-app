<template>
  <div>
    <ScheduleHeader day="08" class="mt-20"/>
    <ScheduleEventSimple 
      start="07:30" end="08:00"
      title="Credênciamento | Minicursos"
    />
    <!-- Courses line display for large screens -->
    <div class="hidden md:flex flex-row md:gap-2">
      <ScheduleEventCourse
        class="flex-1"
        start="08:00" end="10:00"
        title="EM BREVE MAIS INFORMAÇÕES"
        extra="Minicurso"
        speaker="Fique ligado!"
        position="Nos siga no instragram para ficar por dentro das novidades @encompceunes"
      />
      <ScheduleEventCourse
        class="flex-1"
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
              :showArrow="true"
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
    <ScheduleBreak start="10:00" end="10:30" title="Coffee Break" class="mb-3"/>
    <!-- Courses line display for large screens -->
    <div class="hidden md:flex flex-row md:gap-2">
      <ScheduleEventCourse 
        class="flex-1"
        start="10:30" end="12:30"
        title="EM BREVE MAIS INFORMAÇÕES"
        extra="Minicurso"
        speaker="Fique ligado!"
        position="Nos siga no instragram para ficar por dentro das novidades @encompceunes"
        />
      <ScheduleEventCourse 
        class="flex-1"
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
              :showArrow="true"
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
    <ScheduleBreak start="12:30" end="13:30" title="Intervalo para Almoço" class="mb-3"/>
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
      start="15:10" end="16:00"
      title="EM BREVE MAIS INFORMAÇÕES"
      speaker="Fique ligado!"
      position="Nos siga no instragram para ficar por dentro das novidades @encompceunes"
      photo=""
      extra="Palestra"
    />
    <ScheduleEventTalk
      start="16:10" end="17:00"
      title="EM BREVE MAIS INFORMAÇÕES"
      speaker="Fique ligado!"
      position="Nos siga no instragram para ficar por dentro das novidades @encompceunes"
      photo=""
      extra="Palestra"
    />
    <ScheduleEventSimple start="17:00" end="17:20" title="Avisos e Sorteios"/>
  </div>
  <ScheduleBreak start="17:20" end="18:00" title="Coffee Break | Encerramento" />
  <div class="mb-32 min-h-20"></div>
</template>