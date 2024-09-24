<script lang="ts" setup>

</script>

<template>
  <MarqueeItem>
    <template #items>
      <MarqueePart><IconMonitor :size="60" class="drop-shadow-glow" /> Marquee Item 1</MarqueePart>
      <MarqueePart>•</MarqueePart>
      <MarqueePart><IconMonitor :size="60" class="drop-shadow-glow" /> Marquee Item 2</MarqueePart>
      <MarqueePart>•</MarqueePart>
      <MarqueePart><IconMonitor :size="60" class="drop-shadow-glow" /> Marquee Item 3</MarqueePart>
      <MarqueePart>•</MarqueePart>
    </template>
    <template #loop>
      <MarqueePart><IconMonitor :size="60" class="drop-shadow-glow" /> Marquee Item 1</MarqueePart>
      <MarqueePart>•</MarqueePart>
      <MarqueePart><IconMonitor :size="60" class="drop-shadow-glow" /> Marquee Item 2</MarqueePart>
      <MarqueePart>•</MarqueePart>
      <MarqueePart><IconMonitor :size="60" class="drop-shadow-glow" /> Marquee Item 3</MarqueePart>
      <MarqueePart>•</MarqueePart>
    </template>
  </MarqueeItem>
</template>
