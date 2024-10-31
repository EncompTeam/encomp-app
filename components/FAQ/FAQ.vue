<script lang="ts" setup>
</script>

<template>
  <div id="faq" class="mx-auto flex w-full max-w-screen-xl flex-col items-center gap-8 px-3">
    <p class="text-2xl font-bold text-primary md:text-3xl">
      PERGUNTAS FREQUENTES
    </p>
    <div class="w-full lg:w-3/4">
      <Accordion class="w-full text-balance" type="single" collapsible>
        <AccordionItem value="question1" class="mb-5 rounded-xl border-2 border-primary">
          <AccordionTrigger class="px-4">
            <p class="text-xl">
              Quem pode participar?
            </p>
          </AccordionTrigger>
          <AccordionContent class="ml-4 text-xl">
            Todos são bem-vindos! Para participar, basta realizar a inscrição pelo link presente no Site!
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="question2" class="mb-5 rounded-xl border-2 border-primary">
          <AccordionTrigger class="px-4">
            <p class="text-xl">
              Receberei certificado?
            </p>
          </AccordionTrigger>
          <AccordionContent class="ml-4 text-xl">
            O certificado será disponibilizado para todos que estiverem regularmente inscritos no evento.<br>
            Os certificados referentes às palestra e aos minicursos concederão horas relativas às atividades frequentadas pelo respectivo congressista.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="question3" class="mb-5 rounded-xl border-2 border-primary">
          <AccordionTrigger class="px-4">
            <p class="text-xl">
              Posso me inscrever em mais de um minicurso?
            </p>
          </AccordionTrigger>
          <AccordionContent class="ml-4 text-xl">
            Muita atenção aqui! Existem minicursos que acontecem simultaneamente, então não há como fazer todos. É possível participar de até 1 (UM) minicurso por dia de evento.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="question4" class="mb-5 rounded-xl border-2 border-primary">
          <AccordionTrigger class="px-4">
            <p class="text-xl">
              Haverá transmissão online das atividades?
            </p>
          </AccordionTrigger>
          <AccordionContent class="ml-4 text-xl">
            Não haverá transmissão online dos minicursos, palestras e demais atividades. Todas acontecerão exclusivamente de modo presencial!
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="question5" class="mb-5 rounded-xl border-2 border-primary">
          <AccordionTrigger class="px-4">
            <p class="text-xl">
              Há alguma parceria com empresas ou oportunidades de networking?
            </p>
          </AccordionTrigger>
          <AccordionContent class="ml-4 text-xl">
            Sim, todos os parceiros estão expostos na página inicial do site! Sinta-se livre para realizar networking com os congressistas, palestrantes e ministrantes de minicurso que desejar!
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="question6" class="mb-5 rounded-xl border-2 border-primary">
          <AccordionTrigger class="px-4">
            <p class="text-xl">
              Posso cancelar minha inscrição? Há reembolso?
            </p>
          </AccordionTrigger>
          <AccordionContent class="ml-4 text-xl">
            Sim, é possível realizar ambos procedimentos pelo Sympla (plataforma utilizada para a compra dos ingressos).<br>
            Observação: É necessário seguir as diretrizes descritas na página do evento.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="question7" class="mb-5 rounded-xl border-2 border-primary">
          <AccordionTrigger class="px-4">
            <p class="text-xl">
              Preciso levar meu próprio equipamento para os minicursos?
            </p>
          </AccordionTrigger>
          <AccordionContent class="ml-4 text-xl">
            Majoritariamente, não. Os minicursos acontecerão em laboratórios do campus que terão máquinas preparadas para uso. Em caso excepcional, estará explicitado na descrição do minicurso a necessidade de levar equipamento próprio.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="question8" class="mb-5 rounded-xl border-2 border-primary">
          <AccordionTrigger class="px-4">
            <p class="text-xl">
              Qual é o nível de dificuldade dos minicursos? Preciso ter algum conhecimento prévio?
            </p>
          </AccordionTrigger>
          <AccordionContent class="ml-4 text-xl">
            Os minicursos são majoritariamente introdutórios. A maioria dos pré-requisitos são  desejáveis (não-obrigatórios). É possível conferir os mesmos nas descrições dos minicursos na página da programação.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="question9" class="mb-5 rounded-xl border-2 border-primary">
          <AccordionTrigger class="px-4">
            <p class="text-xl">
              Como posso entrar em contato com a organização do evento?
            </p>
          </AccordionTrigger>
          <AccordionContent class="ml-4 text-xl">
            É possível entrar em contato com nossa equipe através do Instragram <div class="inline-flex text-tertiary-500">
              @encompceunes
            </div> ou pelo E-mail <div class="inline-flex text-tertiary-500">
              encomp.ceunes@gmail.com
            </div>.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  </div>
</template>
