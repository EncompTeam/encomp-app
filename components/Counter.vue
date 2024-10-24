<script lang="ts" setup>
  const props = defineProps(["initial", "final", "speed"])
  const counter = ref(props.initial)

  onMounted(() => {
    setInterval(() => {
      if (counter.value < props.final) {
        counter.value++
      }
    }, props.speed);
  })
</script>

<template>
  <p>{{  counter }}</p>
</template>