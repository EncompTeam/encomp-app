<script lang="ts" setup>
const router = useRouter()

function toSchedule() {
  router.push('/schedule')
}
function handleNavigateToFaq() {
  router.push({ path: '/', hash: '#faq' })
}
function handleNavigateToGuests() {
  router.push({ path: '/', hash: '#guests' })
}

function handleNavigateToHome() {
  router.push('/')
}

function handleNavigateToInstagram() {
  window.open('https://www.instagram.com/encompceunes/', '_blank')
}

function handleNavigateToLinkedin() {
  window.open('https://www.linkedin.com/company/encomp-ceunes/', '_blank')
}

function handleNavigateToEmail() {
  window.open('mailto:encomp.ceunes@gmail.com', '_blank')
}

function toSubscription() {
  window.open(
    'https://lets.events/e/viii-encomp/tickets?eventId=viii-encomp',
    '_blank',
  )
}
</script>

<template>
  <div class="relative w-full">
    <!-- <NuxtLink to="https://rifei.com.br/vii-encomp" external>
      <Marquee />
    </NuxtLink> -->
    <div class="relative z-20 p-4 lg:px-6">
      <HeaderDesktop
        @navigate-to-faq="handleNavigateToFaq"
        @navigate-to-home="handleNavigateToHome"
        @navigate-to-schedule="toSchedule"
        @navigate-to-guests="handleNavigateToGuests"
        @navigate-to-inscription="toSubscription"
      />
      <HeaderMobile
        @navigate-to-faq="handleNavigateToFaq"
        @navigate-to-home="handleNavigateToHome"
        @navigate-to-schedule="toSchedule"
        @navigate-to-guests="handleNavigateToGuests"
        @navigate-to-inscription="toSubscription"
      />
    </div>
    <main class="relative w-full">
      <slot />
    </main>
    <Footer
      @navigate-to-email="handleNavigateToEmail"
      @navigate-to-instagram="handleNavigateToInstagram"
      @navigate-to-linkedin="handleNavigateToLinkedin"
    />
  </div>
</template>
