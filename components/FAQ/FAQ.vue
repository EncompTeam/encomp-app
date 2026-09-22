<script lang="ts" setup>
import { CircleHelp } from 'lucide-vue-next'

const questions = [
  {
    value: 'question1',
    question: 'Quem pode participar?',
    answer: 'Todos são bem-vindos! Para participar, basta realizar a inscrição pelo link presente no Site!',
  },
  {
    value: 'question2',
    question: 'Receberei certificado?',
    answer: 'O certificado será disponibilizado para todos que estiverem regularmente inscritos no evento.<br>Os certificados referentes às palestra e aos minicursos concederão horas relativas às atividades frequentadas pelo respectivo congressista.',
  },
  {
    value: 'question3',
    question: 'Posso me inscrever em mais de um minicurso?',
    answer: 'Muita atenção aqui! Existem minicursos que acontecem simultaneamente, então não há como fazer todos. É possível participar de até 1 (UM) minicurso por dia de evento.',
  },
  {
    value: 'question4',
    question: 'Haverá transmissão online das atividades?',
    answer: 'Não haverá transmissão online dos minicursos, palestras e demais atividades. Todas acontecerão exclusivamente de modo presencial!',
  },
  {
    value: 'question5',
    question: 'Há alguma parceria com empresas ou oportunidades de networking?',
    answer: 'Sim, todos os parceiros estão expostos na página inicial do site! Sinta-se livre para realizar networking com os congressistas, palestrantes e ministrantes de minicurso que desejar!',
  },
  {
    value: 'question6',
    question: 'Posso cancelar minha inscrição? Há reembolso?',
    answer: 'Sim, é possível realizar ambos procedimentos pelo Sympla (plataforma utilizada para a compra dos ingressos).<br>Observação: É necessário seguir as diretrizes descritas na página do evento.',
  },
  {
    value: 'question7',
    question: 'Preciso levar meu próprio equipamento para os minicursos?',
    answer: 'Majoritariamente, não. Os minicursos acontecerão em laboratórios do campus que terão máquinas preparadas para uso. Em caso excepcional, estará explicitado na descrição do minicurso a necessidade de levar equipamento próprio.',
  },
  {
    value: 'question8',
    question: 'Qual é o nível de dificuldade dos minicursos? Preciso ter algum conhecimento prévio?',
    answer: 'Os minicursos são majoritariamente introdutórios. A maioria dos pré-requisitos são desejáveis (não-obrigatórios). É possível conferir os mesmos nas descrições dos minicursos na página da programação.',
  },
  {
    value: 'question9',
    question: 'Como posso entrar em contato com a organização do evento?',
    answer: 'É possível entrar em contato com nossa equipe através do Instagram <span class="font-semibold text-tertiary-300">@encompceunes</span> ou pelo E-mail <span class="font-semibold text-tertiary-300">encomp.ceunes@gmail.com</span>.',
  },
]
</script>

<template>
  <div id="faq" class="mx-auto flex w-full max-w-screen-xl flex-col items-center gap-8 px-3">
    <div class="section-eyebrow">
      <CircleHelp :size="24" />
      Perguntas frequentes
    </div>
    <div class="w-full lg:w-3/4">
      <Accordion class="w-full text-balance" type="single" collapsible>
        <AccordionItem
          v-for="item in questions"
          :key="item.value"
          :value="item.value"
          class="mb-5 overflow-hidden rounded-xl border-2 border-primary/40 bg-card/50 backdrop-blur transition-colors duration-300 hover:border-primary"
        >
          <AccordionTrigger class="px-4 py-5 text-left transition-colors hover:text-primary">
            <p class="text-xl">
              {{ item.question }}
            </p>
          </AccordionTrigger>
          <AccordionContent class="ml-4 text-xl leading-relaxed text-muted-foreground">
            <!-- eslint-disable-next-line vue/no-v-html -->
            <span v-html="item.answer" />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  </div>
</template>
