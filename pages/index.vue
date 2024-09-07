<script lang="ts" setup>
const today = ref(new Date())

onMounted(() => {
  setInterval(() => {
    today.value = new Date()
  }, 1000)
})
</script>

<template>
  <div class="flex size-full items-center justify-center bg-red-100 text-center">
    <h1 class="text-5xl font-bold">
      App Start
      <p class="mt-5">
        {{ today.toLocaleString() }}
      </p>
    </h1>
  </div>
</template>
