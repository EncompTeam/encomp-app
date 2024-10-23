<script lang="ts" setup>
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: 'smooth'});
  }
</script>

<template>
  <MainContent class="relative flex size-full flex-col items-center justify-between gap-8 py-11 lg:flex-row lg:py-20">
    <Hero id="home"/>
    <PatternDot cx="1" cr="1" cy="10" width="30" height="30" class="-z-10  [mask-image:radial-gradient(350px_circle_at_center,white,transparent)] lg:[mask-image:radial-gradient(650px_circle_at_center,white,transparent)]" />
  
  </MainContent>
  <div>
    <Sponsors class="hidden lg:flex"/>
    <About class="mt-32"/>
    <WillHave class="mt-32"/>
    <Speakers class="mt-32"/>
    <Local class="mt-32"/>
    <FAQ id="faq" class="mt-44"/>
    <Sponsors class="flex lg:hidden"/>
  </div>
</template>
