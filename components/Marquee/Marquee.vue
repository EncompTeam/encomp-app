<script lang="ts" setup>
import { MonitorIcon } from 'lucide-vue-next'
</script>

<template>
  <MarqueeItem>
    <template #items>
      <MarqueePart>
        <MonitorIcon :size="70" class="drop-shadow-glow" />
        Marquee Item 1
      </MarqueePart>
      <MarqueePart>•</MarqueePart>
      <MarqueePart>
        <MonitorIcon :size="70" class="drop-shadow-glow" />
        Marquee Item 2
      </MarqueePart>
      <MarqueePart>•</MarqueePart>
      <MarqueePart>
        <MonitorIcon :size="70" class="drop-shadow-glow" />
        Marquee Item 3
      </MarqueePart>
      <MarqueePart>•</MarqueePart>
    </template>
    <template #loop>
      <MarqueePart>
        <MonitorIcon :size="70" class="drop-shadow-glow" />
        Marquee Item 1
      </MarqueePart>
      <MarqueePart>•</MarqueePart>
      <MarqueePart>
        <MonitorIcon :size="70" class="drop-shadow-glow" />
        Marquee Item 2
      </MarqueePart>
      <MarqueePart>•</MarqueePart>
      <MarqueePart>
        <MonitorIcon :size="70" class="drop-shadow-glow" />
        Marquee Item 3
      </MarqueePart>
      <MarqueePart>•</MarqueePart>
    </template>
  </MarqueeItem>
</template>
