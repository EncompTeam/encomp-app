<script lang="ts" setup>
const props = defineProps(['day'])

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}
</script>

<template>
  <div class="sticky top-2 z-40 mb-4 flex min-h-14 max-w-5xl items-center rounded-sm bg-tertiary pl-5 md:mb-0 md:min-h-20 md:rounded-b-none">
    <div class="flex-1">
      <p class="text-title text-2xl md:text-5xl">
        {{ props.day }} de Novembro
      </p>
    </div>
    <div class="inline-flex lg:hidden">
      <Button variant="link" class="text-white" @click="scrollToTop">
        Voltar ao topo
      </Button>
    </div>
  </div>
  <div class="sticky top-20 z-40 mb-5 hidden max-w-5xl md:block">
    <div class="flex min-h-10 w-full items-center rounded-bl-sm bg-tertiary-500 pl-10">
      <div class="flex w-full items-end justify-end">
        <Button variant="link" class="text-md font-bold text-white" @click="scrollToTop">
          Voltar ao topo
        </Button>
      </div>
    </div>
  </div>
</template>
