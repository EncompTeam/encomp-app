<script lang="ts" setup>
import { FacebookIcon, MenuIcon, PartyPopperIcon } from 'lucide-vue-next'

const emit = defineEmits<{
  (e: 'navigate-to-home'): void
  (e: 'navigate-to-schedule'): void
  (e: 'navigate-to-speakers'): void
  (e: 'navigate-to-faq'): void
  (e: 'navigate-to-inscription'): void
  (e: 'navigate-to-marathon'): void
}>()
</script>

<template>
  <header class="mx-auto flex h-14 w-full items-center justify-between rounded-full border border-gray-100/15 bg-background/25 bg-clip-padding p-4 backdrop-blur-sm backdrop-filter lg:hidden">
    <Logo size="130" />
    <Sheet>
      <SheetTrigger as-child>
        <Button variant="secondary" size="icon">
          <MenuIcon />
        </Button>
      </SheetTrigger>
      <SheetContent v-bind="$attrs" class="flex w-full flex-col">
        <SheetHeader class="items-start">
          <SheetTitle>
            <Logo size="130" />
          </SheetTitle>
        </SheetHeader>
        <nav class="w-full flex-1 py-9" aria-label="menu">
          <ul class="flex flex-col items-center gap-3">
            <li class="w-full">
              <Button class="w-full text-lg text-foreground" variant="link" @click="() => emit('navigate-to-home')">
                Home
              </Button>
            </li>
            <li class="w-full">
              <Button class="w-full text-lg text-foreground" variant="link" @click="() => emit('navigate-to-speakers')">
                Palestrantes
              </Button>
            </li>
            <li class="w-full">
              <Button class="w-full text-lg text-foreground" variant="link" @click="() => emit('navigate-to-schedule')">
                Programação
              </Button>
            </li>
            <li>
              <Button class="text-lg text-foreground" variant="link" @click="() => emit('navigate-to-marathon')">
                Maratona de Programação
              </Button>
            </li>
            <li class="w-full">
              <Button class="w-full text-lg text-foreground" variant="link" @click="() => emit('navigate-to-faq')">
                FAQ
              </Button>
            </li>
            <li class="w-full py-6">
              <Button size="lg" class="flex w-full items-center gap-2 text-lg" variant="secondary" @click="() => emit('navigate-to-inscription')">
                Inscreva-se <PartyPopperIcon />
              </Button>
            </li>
          </ul>
        </nav>
        <SheetFooter class="flex w-full items-center gap-4">
          <nav class="w-full" aria-label="menu-social">
            <ul class="flex w-full items-center justify-center gap-4">
              <li>
                <Button variant="ghost" size="icon">
                  <FacebookIcon />
                </Button>
              </li>
            </ul>
          </nav>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  </header>
</template>
