<script lang="ts" setup>
const props = withDefaults(defineProps<{
  size?: string
}>(), {
  size: '150',
})
</script>

<template>
  <img :width="props.size" src="../public/encomp7-logo-large.png" alt="Logo do VII ENCOMP em branco com alguns detalhes em verde">
</template>
