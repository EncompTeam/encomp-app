<script lang="ts" setup>
  const props = defineProps(["day"])
</script>

<template>
  <div class="flex items-center min-h-14 md:min-h-20 max-w-4xl pl-5 bg-tertiary rounded-sm md:rounded-b-none mb-4 md:mb-0">
    <div class="flex-1">
      <p class="text-2xl md:text-5xl text-title">{{ props.day }} de Novembro</p>
    </div>
    <div class="inline-flex lg:hidden">
      <Button variant="link" class="text-white">Voltar ao topo</Button>
    </div>
  </div>
  <div class="hidden md:block max-w-4xl mb-5">
    <div class="flex w-full min-h-10 bg-tertiary-500 rounded-bl-sm pl-10 items-center">
      <div class="w-full flex items-end justify-end">
        <Button variant="link" class="text-white text-md font-bold">Voltar ao topo</Button>
      </div>
    </div>
  </div>
</template>