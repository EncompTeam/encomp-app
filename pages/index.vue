<script lang="ts" setup>
import Speakers from '~/components/Speakers/Speakers.vue';

</script>

<template>
  <MainContent class="relative flex size-full flex-col items-center justify-between gap-8 py-11 lg:py-20">
    <Hero />
    <PatternDot cx="1" cr="1" cy="10" width="30" height="30" class="-z-10  [mask-image:radial-gradient(350px_circle_at_center,white,transparent)] lg:[mask-image:radial-gradient(650px_circle_at_center,white,transparent)]" />
    <Speakers />
  </MainContent>
</template>
