<script lang="ts" setup>
</script>

<template>
  <MainContent class="relative flex size-full flex-col items-center justify-between gap-8 py-11 lg:flex-row lg:py-20">
    <Hero />
    <PatternDot cx="1" cr="1" cy="10" width="30" height="30" class="-z-10  [mask-image:radial-gradient(350px_circle_at_center,white,transparent)] lg:[mask-image:radial-gradient(650px_circle_at_center,white,transparent)]" />
  </MainContent>
  <div class="px-40 pt-40">
    <div class="inline-block text-center">
      <div class="flex justify-center">
        <img src="/ES_map_resized.gif" class="max-w-52">
      </div>
      <div>
        <p class="font-sans">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </div>
      <div>
        <InfoCard />
      </div>
    </div>
    <div>

    </div>
  </div>
</template>
