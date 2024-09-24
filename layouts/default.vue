<script lang="ts" setup>
</script>

<template>
  <div class="relative w-full">
    <Marquee />
    <div class="sticky top-4 p-4 lg:px-6">
      <HeaderDesktop />
      <HeaderMobile @navigate-to-faq="console.log('faq')" />
    </div>
    <main class="w-full">
      <slot />
    </main>
  </div>
</template>
