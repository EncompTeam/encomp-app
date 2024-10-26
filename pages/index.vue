<script lang="ts" setup>
defineOgImage({
  component: 'Main',
})

useSeoMeta({
  title: 'Encontro Norte Capixaba de Computação (ENCOMP)',
  description: 'O Encontro Norte Capixaba de Computação ou ENCOMP é um evento de tecnologia realizado por alunos de Ciência e Engenharia da Computação da UFES - Campus São Mateus.',
  ogTitle: 'Encontro Norte Capixaba de Computação (ENCOMP)',
  ogDescription: 'O Encontro Norte Capixaba de Computação ou ENCOMP é um evento de tecnologia realizado por alunos de Ciência e Engenharia da Computação da UFES - Campus São Mateus.',
})
</script>

<template>
  <div>
    <MainContent class="relative flex size-full flex-col items-center justify-between gap-8 py-11 lg:flex-row lg:py-20">
      <Hero id="home" />
      <PatternDot cx="1" cr="1" cy="10" width="30" height="30" class="-z-10  [mask-image:radial-gradient(350px_circle_at_center,white,transparent)] lg:[mask-image:radial-gradient(650px_circle_at_center,white,transparent)]" />
    </MainContent>
    <div>
      <Sponsors class="hidden lg:flex" />
      <About class="mt-32" />
      <WillHave class="mt-32" />
      <Speakers class="mt-32" />
      <Local class="mt-32" />
      <FAQ class="mt-44" />
      <Sponsors class="flex lg:hidden" />
    </div>
  </div>
</template>
