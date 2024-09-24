<script lang="ts" setup>

</script>

<template>
  <div class="flex w-full select-none gap-[var(--gap)] overflow-hidden py-6">
    <div class="flex min-w-full shrink-0 animate-marquee justify-around gap-[var(--gap)]">
      <slot name="items" />
    </div>
    <ul aria-hidden="true" class="flex min-w-full shrink-0 animate-marquee justify-around gap-[var(--gap)]">
      <slot name="loop" />
    </ul>
  </div>
</template>
