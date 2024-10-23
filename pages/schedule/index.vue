<script lang="ts" setup>   
  definePageMeta({
    layout: 'empty'
  });

  const activeDay = ref('');
  activeDay.value = 'day1'

  function showDayX(component: string) {
    activeDay.value = component;
  }
 </script>

<template>
  <div class="mt-10 lg:ml-30 mx-5 md:ml-44">
    <div class="mb-20">
      <p class="font-bold text-3xl md:text-5xl mb-5">PROGRAMAÇÃO</p>
      <p class="max-w-sm md:max-w-md text-xl">A 7º edição do ENCOMP vai ocorrer nos dias 06, 07 e 08 de novembro, confira nossa programação</p>
      <div class="flex mt-4 gap-3">
        <Button
          @click="showDayX('day1')"
          variant="default"
          class="bg-tertiary text-white">06/11</Button>
          <Button
          @click="showDayX('day2')"
          variant="default"
          class="bg-tertiary text-white">07/11</Button>
          <Button
          @click="showDayX('day3')"
          variant="default"
          class="bg-tertiary text-white">08/11</Button>
      </div>
    </div>
    <div>
      <ScheduleDay1 class="mt-10" v-if="activeDay === 'day1'"/>
      <ScheduleDay2 class="mt-10" v-if="activeDay === 'day2'"/>
      <ScheduleDay3 class="mt-10" v-if="activeDay === 'day3'"/>
    </div>
  </div>
</template>