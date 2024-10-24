<script lang="ts" setup>
import { Instagram, Mail } from 'lucide-vue-next'

const router = useRouter()

function toSchedule() {
  router.push('/schedule')
}
function handleNavigateToFaq() {
  router.push({ path: '/', hash: '#faq' })
}
function handleNavigateToSpeakers() {
  router.push({ path: '/', hash: '#speakers' })
}

function handleNavigateToHome() {
  router.push('/')
}

function toSubscription() {
  window.open('https://www.sympla.com.br/vii-encomp---encontro-norte-capixaba-de-computacao__2696886', '_blank')
}
</script>

<template>
  <div class="relative w-full">
    <NuxtLink to="https://rifei.com.br/vii-encomp" external>
      <Marquee />
    </NuxtLink>
    <div class=" z-20 p-4 lg:px-6">
      <HeaderDesktop
        @navigate-to-faq="handleNavigateToFaq"
        @navigate-to-home="handleNavigateToHome"
        @navigate-to-schedule="toSchedule"
        @navigate-to-speakers="handleNavigateToSpeakers"
        @navigate-to-inscription="toSubscription"
      />
      <HeaderMobile
        @navigate-to-faq="handleNavigateToFaq"
        @navigate-to-home="handleNavigateToHome"
        @navigate-to-schedule="toSchedule"
        @navigate-to-speakers="handleNavigateToSpeakers"
        @navigate-to-inscription="toSubscription"
      />
    </div>
    <main class="relative w-full">
      <slot />
    </main>
    <footer class="mt-52 md:mx-60">
      <div class="flex min-h-60 flex-col justify-center rounded-t-xl bg-primary-500 md:flex-row lg:justify-between">
        <div class="">
          <img src="/logo_big.png" alt="Logo do encomp grande" lass="max-h-60">
        </div>
        <div class="flex flex-col items-end justify-center gap-5 p-10 underline md:justify-end">
          <div class="flex flex-row items-center gap-2">
            <p class="text-xl">
              encomp.ceunes@gmail.com
            </p>
            <Mail />
          </div>
          <NuxtLink
            to="https://www.instagram.com/encompceunes/" external
            class="flex flex-row items-center gap-2"
          >
            <p class="text-xl">
              Instagram
            </p>
            <Instagram />
          </NuxtLink>
        </div>
      </div>
    </footer>
  </div>
</template>
