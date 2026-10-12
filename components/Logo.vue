<script lang="ts" setup>
const props = withDefaults(
  defineProps<{
    size?: string;
  }>(),
  {
    size: "150",
  },
);
</script>

<template>
  <img
    :width="props.size"
    src="../public/8EncompVetorizado_1.svg"
    alt="Logo do VIII ENCOMP em branco com alguns detalhes em verde"
  />
</template>
