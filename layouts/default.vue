<script lang="ts" setup>
  const router = useRouter();

  const toSchedule = () => {
    router.push('/schedule')
  }

  const toSubscription = () => {
    window.location.href = 'https://www.sympla.com.br/vii-encomp---encontro-norte-capixaba-de-computacao__2696886';
  }

  const emit = defineEmits(['to-faq', 'to-home'])
  function emitScrollToSection(section: string) {
    if (section === 'faq') {
      emit('to-faq');
    }
    if (section === 'home') {
      emit('to-home');
    }
  }
</script>

<template>
  <div class="relative w-full">
    <NuxtLink to="https://rifei.com.br/vii-encomp" external>
      <Marquee/>
    </NuxtLink>
    <div class="sticky top-4 z-20 p-4 lg:px-6">
      <HeaderDesktop 
        @navigate-to-faq="emitScrollToSection('faq')"
        @navigate-to-home="emitScrollToSection('home')"
        @navigate-to-schedule="toSchedule"
        @navigate-to-speakers="emitScrollToSection('speakers')"
        @navigate-to-inscription="toSubscription"
      />
      <HeaderMobile 
        @navigate-to-faq="emitScrollToSection('faq')"
        @navigate-to-home="emitScrollToSection('home')"
        @navigate-to-schedule="toSchedule"
        @navigate-to-speakers="emitScrollToSection('speakers')"
        @navigate-to-inscription="toSubscription"
      />
    </div>
    <main class="relative w-full">
      <slot />
    </main>
    <footer class="mt-60">
      <img src="/logo_big.png">
    </footer>
  </div>
</template>
