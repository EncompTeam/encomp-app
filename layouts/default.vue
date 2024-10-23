<script lang="ts" setup>
  import { Mail, Instagram } from 'lucide-vue-next'
  const router = useRouter();

  const toSchedule = () => {
    router.push('/schedule')
  }

  const toSubscription = () => {
    window.location.href = 'https://www.sympla.com.br/vii-encomp---encontro-norte-capixaba-de-computacao__2696886';
  }

  // const emit = defineEmits(['to-faq', 'to-home'])
  // function emitScrollToSection(section: string) {
  //   if (section === 'faq') {
  //     emit('to-faq');
  //   }
  //   if (section === 'home') {
  //     emit('to-home');
  //   }
  // }
</script>

<template>
  <div class="relative w-full">
    <NuxtLink to="https://rifei.com.br/vii-encomp" external>
      <Marquee/>
    </NuxtLink>
    <div class="sticky top-4 z-20 p-4 lg:px-6">
      <HeaderDesktop 
        @navigate-to-faq=""
        @navigate-to-home=""
        @navigate-to-schedule="toSchedule"
        @navigate-to-speakers=""
        @navigate-to-inscription="toSubscription"
      />
      <HeaderMobile 
        @navigate-to-faq=""
        @navigate-to-home=""
        @navigate-to-schedule="toSchedule"
        @navigate-to-speakers=""
        @navigate-to-inscription="toSubscription"
      />
    </div>
    <main class="relative w-full">
      <slot />
    </main>
    <footer class="mt-52 md:mx-60">
      <div class="flex flex-col md:flex-row bg-primary-500 min-h-60 rounded-t-xl justify-center lg:justify-between">
        <div class="">
          <img src="/logo_big.png" class="max-h-60">
        </div>
        <div class="px-10 py-10 flex flex-col gap-5 justify-center md:justify-end items-end underline">
          <div class="flex flex-row gap-2 items-center">
            <p class="text-xl">encomp.ceunes@gmail.com</p>
            <Mail/>
          </div>
          <NuxtLink to="https://www.instagram.com/encompceunes/" external
            class="flex flex-row gap-2 items-center">
            <p class="text-xl">Instagram</p>
            <Instagram/>
          </NuxtLink>
        </div>
      </div>
    </footer>
  </div>
</template>
