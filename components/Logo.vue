<script lang="ts" setup>
const props = withDefaults(defineProps<{
  size?: string
}>(), {
  size: '150',
})
</script>

<template>
  <img :width="props.size" src="../public/encomp-logo-large.svg" alt="Logo do ENCOMP em branco com alguns detalhes em verde">
</template>
