<script lang="ts" setup>
const props = defineProps<{
  image? : string,
  name? : string,
  role? : string,
  description? : string,
}>()
</script>

<template>
<div class="relative w-[193px] h-[277px] group">
        <img :src="props.image" alt="" class="object-cover w-full h-full rounded">
        <div class="bg-black absolute bottom-0 w-full z-10 p-2 rounded-b max-h-[70%] group-hover:overflow-y-scroll scrollbar-thin scrollbar-thumb-rounded-lg scrollbar-thumb-primary scrollbar-track-black scrollbar-corner-black ">
          <h1 class="font-bold text-2xl">{{ props.name }}</h1>
          <p class="group-hover:text-primary">{{ props.role }}</p>
          <p class="hidden group-hover:block">{{ props.description }}</p>
        </div>  
      </div>

</template>