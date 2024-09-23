<script lang="ts" setup>
const today = ref(new Date())

onMounted(() => {
  setInterval(() => {
    today.value = new Date()
  }, 1000)
})
</script>

<template>
  <div class="flex size-full items-center justify-center bg-[#0D0D0D] text-center">
    <h1 class="text-5xl font-bold">
      App Start
      <p class="mt-5">
        {{ today.toLocaleString() }}
      </p>
    </h1>

    <button class="w-36 rounded-3xl bg-[#14CFA8] p-3 text-lg font-bold text-[#0D0D0D]">
      Clicar
    </button>

    <ClientOnly>
      <AsciiMap />
    </ClientOnly>
  </div>
</template>
