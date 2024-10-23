<script lang="ts" setup>
</script>

<template>
  <div id="faq">
    <div class="mb-10 ml-10 md:ml-20">
      <p class="text-primary text-2xl md:text-3xl font-bold">PERGUNTAS FREQUENTES</p>
    </div>
    <div class="mx-4 md:ml-10 md:mr-0 max-w-4xl">
      <Accordion type="single" collapsible>
        <AccordionItem value="question1" class="mb-5 border-primary border-2 rounded-xl">
          <AccordionTrigger class="px-4">
            <p class="text-xl">Haverá transmissão online das atividades?</p>
          </AccordionTrigger>
          <AccordionContent class="ml-4 text-xl">
            Pellentesque scelerisque nisi orci, luctus rutrum augue sollicitudin fringilla. In tristique ipsum sed sem mattis fringilla. Maecenas ut ullamcorper nulla. Maecenas vulputate eleifend elementum. Sed vehicula sed lacus in efficitur.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="question2" class="mb-5 border-primary border-2 rounded-xl">
          <AccordionTrigger class="px-4">
            <p class="text-xl">Há alguma parceria com empresas ou oportunidades de networking?</p>
          </AccordionTrigger>
        </AccordionItem>
        <AccordionItem value="question3" class="mb-5 border-primary border-2 rounded-xl">
          <AccordionTrigger class="px-4">
            <p class="text-xl">Posso cancelar minha inscrição? Há reembolso?</p>
          </AccordionTrigger>
        </AccordionItem>
        <AccordionItem value="question4" class="mb-5 border-primary border-2 rounded-xl">
          <AccordionTrigger class="px-4">
            <p class="text-xl">Preciso levar meu próprio equipamento para os minicursos?</p>
          </AccordionTrigger>
        </AccordionItem>
        <AccordionItem value="question5" class="mb-5 border-primary border-2 rounded-xl">
          <AccordionTrigger class="px-4">
            <p class="text-xl">Qual é o nível de dificuldade dos minicursos? Preciso ter algum conhecimento prévio?</p>
          </AccordionTrigger>
        </AccordionItem>
      </Accordion>
    </div>
  </div>
</template>