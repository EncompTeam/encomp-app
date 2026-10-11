```vue
<script lang="ts" setup>
import { PopoverAnchor } from 'radix-vue'

const props = defineProps<{
  image?: string
  name?: string
  position?: string
  description?: string
  role?: string
  showDescription?: boolean
}>()
</script>

<template>
  <div class="relative">
    <Popover>
      <PopoverTrigger as-child>
        <button
          class="group relative z-20 w-60 overflow-hidden rounded-2xl border border-primary/15 bg-background/80 text-left shadow-sm backdrop-blur-md transition-all duration-300 ease-out hover:-translate-y-1 hover:border-primary/45 hover:shadow-[0_12px_32px_-16px_hsl(var(--primary)/0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
        >
          <!-- Badge de função -->
          <Badge
            class="absolute right-3 top-3 z-20 border border-primary/20 bg-background/85 text-primary shadow-sm backdrop-blur-md"
            variant="secondary"
          >
            {{ props.role }}
          </Badge>

          <!-- Imagem -->
          <div
            class="relative flex min-h-72 items-end overflow-hidden bg-gradient-to-b from-primary/30 via-primary/15 to-tertiary/30"
          >
            <img
              v-if="props.image"
              :src="props.image"
              :alt="props.name ? `Foto de ${props.name}` : 'Foto de perfil'"
              loading="lazy"
              class="h-60 w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
            >

            <!-- Camada sutil para integrar a imagem ao card -->
            <div
              class="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/45 via-transparent to-primary/5 opacity-70 transition-opacity duration-300 group-hover:opacity-100"
            />

            <!-- Brilho sutil no hover -->
            <div
              class="pointer-events-none absolute inset-0 bg-primary/[0.03] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />
          </div>

          <!-- Informações -->
          <div class="relative min-h-20 border-t border-primary/10 bg-background/80 px-4 py-3">
            <p
              class="text-left text-lg font-bold tracking-tight transition-colors duration-300 group-hover:text-primary"
            >
              {{ props.name }}
            </p>

            <p class="mt-1 text-left text-sm text-tertiary-300">
              {{ props.position }}
            </p>

            <!-- Indicador discreto de interação -->
            <div
              class="absolute bottom-0 left-4 h-0.5 w-0 rounded-full bg-primary/70 transition-all duration-300 group-hover:w-10"
            />
          </div>
        </button>
      </PopoverTrigger>

      <PopoverAnchor class="absolute -inset-3 z-10 h-0" />

      <PopoverContent
        v-if="props.showDescription"
        class="hidden max-w-xs rounded-xl border border-primary/20 bg-popover/95 shadow-xl backdrop-blur-xl lg:block"
      >
        <div class="p-1">
          <p class="text-lg font-bold text-primary">
            {{ props.name }}
          </p>

          <p class="text-sm text-tertiary-300">
            {{ props.position }}
          </p>

          <p class="mt-4 text-sm leading-relaxed text-popover-foreground">
            {{ props.description }}
          </p>
        </div>
      </PopoverContent>

      <PopoverContent
        v-if="props.showDescription"
        class="max-w-xs rounded-xl border border-primary/20 bg-popover/95 shadow-xl backdrop-blur-xl lg:hidden"
      >
        <div class="p-1">
          <p class="text-lg font-bold text-primary">
            {{ props.name }}
          </p>

          <p class="text-sm text-tertiary-300">
            {{ props.position }}
          </p>

          <p class="mt-4 text-sm leading-relaxed text-popover-foreground">
            {{ props.description }}
          </p>
        </div>
      </PopoverContent>
    </Popover>
  </div>
</template>
```
