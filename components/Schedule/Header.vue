<script lang="ts" setup>
  const props = defineProps(["day"])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
</script>

<template>
  <div class="sticky top-2 z-40 flex items-center min-h-14 md:min-h-20 max-w-4xl pl-5 bg-tertiary rounded-sm md:rounded-b-none mb-4 md:mb-0">
    <div class="flex-1">
      <p class="text-2xl md:text-5xl text-title">{{ props.day }} de Novembro</p>
    </div>
    <div class="inline-flex lg:hidden">
      <Button @click="scrollToTop" variant="link" class="text-white">Voltar ao topo</Button>
    </div>
  </div>
  <div class="sticky top-20 z-40 hidden md:block max-w-4xl mb-5">
    <div class="flex w-full min-h-10 bg-tertiary-500 rounded-bl-sm pl-10 items-center">
      <div class="w-full flex items-end justify-end">
        <Button @click="scrollToTop" variant="link" class="text-white text-md font-bold">Voltar ao topo</Button>
      </div>
    </div>
  </div>
</template>