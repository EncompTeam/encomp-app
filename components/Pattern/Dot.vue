<script lang="ts" setup>
const props = withDefaults(defineProps<{
  width?: string | number
  height?: string | number
  x?: string | number
  y?: string | number
  cx?: string | number
  cy?: string | number
  cr?: string | number
}>(), {
  width: 10,
  height: 10,
  x: 0,
  y: 0,
  cx: 1,
  cy: 1,
  cr: 1,
})

const id = useId()
</script>

<template>
  <svg class="pointer-events-none absolute inset-0 size-full fill-neutral-400/50">
    <defs>
      <pattern
        :id="id"
        :x="props.x"
        :y="props.y"
        :width="props.width"
        :height="props.height"
        patternUnits="userSpaceOnUse"
        patternContentUnits="userSpaceOnUse"
      >
        <circle id="pattern-circle" :cx="props.cx" :cy="props.cy" :r="props.cr" />
      </pattern>
    </defs>

    <rect width="100%" height="100%" :stroke-width="0" :fill="`url(#${id})`" />
  </svg>
</template>
