<script lang="ts" setup>
</script>

<template>
  <div id="faq" class="mx-auto flex w-full max-w-screen-xl flex-col items-center gap-8 px-3">
    <p class="text-primary text-2xl font-bold md:text-3xl">
      PERGUNTAS FREQUENTES
    </p>
    <div class="w-full lg:w-3/4">
      <Accordion class="w-full" type="single" collapsible>
        <AccordionItem value="question1" class="border-primary mb-5 rounded-xl border-2">
          <AccordionTrigger class="px-4">
            <p class="text-xl">
              Haverá transmissão online das atividades?
            </p>
          </AccordionTrigger>
          <AccordionContent class="ml-4 text-xl">
            Pellentesque scelerisque nisi orci, luctus rutrum augue sollicitudin fringilla. In tristique ipsum sed sem mattis fringilla. Maecenas ut ullamcorper nulla. Maecenas vulputate eleifend elementum. Sed vehicula sed lacus in efficitur.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="question2" class="border-primary mb-5 rounded-xl border-2">
          <AccordionTrigger class="px-4">
            <p class="text-xl">
              Há alguma parceria com empresas ou oportunidades de networking?
            </p>
          </AccordionTrigger>
        </AccordionItem>
        <AccordionItem value="question3" class="border-primary mb-5 rounded-xl border-2">
          <AccordionTrigger class="px-4">
            <p class="text-xl">
              Posso cancelar minha inscrição? Há reembolso?
            </p>
          </AccordionTrigger>
        </AccordionItem>
        <AccordionItem value="question4" class="border-primary mb-5 rounded-xl border-2">
          <AccordionTrigger class="px-4">
            <p class="text-xl">
              Preciso levar meu próprio equipamento para os minicursos?
            </p>
          </AccordionTrigger>
        </AccordionItem>
        <AccordionItem value="question5" class="border-primary mb-5 rounded-xl border-2">
          <AccordionTrigger class="px-4">
            <p class="text-xl">
              Qual é o nível de dificuldade dos minicursos? Preciso ter algum conhecimento prévio?
            </p>
          </AccordionTrigger>
        </AccordionItem>
      </Accordion>
    </div>
  </div>
</template>
