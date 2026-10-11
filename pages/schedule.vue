<script lang="ts" setup>
definePageMeta({
  layout: "default",
});

const activeDay = ref("day0");

function showDayX(component: string) {
  activeDay.value = component;
}

defineOgImage({
  component: "Main",
});

useSeoMeta({
  title: "Encontro Norte Capixaba de Computação (ENCOMP)",
  description:
    "O Encontro Norte Capixaba de Computação ou ENCOMP é um evento de tecnologia realizado por alunos de Ciência e Engenharia da Computação da UFES - Campus São Mateus.",
  ogTitle: "Encontro Norte Capixaba de Computação (ENCOMP)",
  ogDescription:
    "O Encontro Norte Capixaba de Computação ou ENCOMP é um evento de tecnologia realizado por alunos de Ciência e Engenharia da Computação da UFES - Campus São Mateus.",
});
</script>

<template>
  <div class="lg:ml-30 mx-5 mt-10 md:ml-44">
    <div class="mb-20">
      <div class="section-eyebrow mb-5 w-fit">Programação</div>
      <p class="max-w-sm text-xl md:max-w-lg">
        A 8º edição do ENCOMP vai ocorrer nos dias 11, 12 e 13 de novembro,
        confira nossa programação
      </p>
      <div class="mt-4 flex flex-wrap gap-3">
        <Button
          variant="default"
          class="border-2 border-transparent text-lg transition-all duration-300"
          :class="
            activeDay === 'day0'
              ? 'glow-tertiary bg-tertiary text-white'
              : 'border-tertiary/50 bg-tertiary/10 text-tertiary-300 hover:bg-tertiary/20 hover:text-white'
          "
          @click="showDayX('day0')"
        >
          11/11
        </Button>

        <Button
          variant="default"
          class="border-2 border-transparent text-lg transition-all duration-300"
          :class="
            activeDay === 'day1'
              ? 'glow-tertiary bg-tertiary text-white'
              : 'border-tertiary/50 bg-tertiary/10 text-tertiary-300 hover:bg-tertiary/20 hover:text-white'
          "
          @click="showDayX('day1')"
        >
          06/11
        </Button>
        <Button
          variant="default"
          class="border-2 border-transparent text-lg transition-all duration-300"
          :class="
            activeDay === 'day2'
              ? 'glow-tertiary bg-tertiary text-white'
              : 'border-tertiary/50 bg-tertiary/10 text-tertiary-300 hover:bg-tertiary/20 hover:text-white'
          "
          @click="showDayX('day2')"
        >
          07/11
        </Button>
      </div>
    </div>
    <div>
      <ScheduleDay0 v-if="activeDay === 'day0'" />
      <ScheduleDay1 v-if="activeDay === 'day1'" />
      <ScheduleDay2 v-if="activeDay === 'day2'" />
    </div>
  </div>
</template>
