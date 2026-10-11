<script lang="ts" setup>
import { MicVocal } from 'lucide-vue-next'
</script>

<template>
  <div id="guests" class="mx-auto flex w-full max-w-screen-xl flex-col items-center">
    <div class="section-eyebrow">
      <MicVocal :size="24" />
      Quem vai?
    </div>
    <div class="w-full lg:w-2/3">
      <p class="section-title mt-4">
        Convidamos palestrantes de diversas áreas com muita experiência para passar e ministrantes prontos pra te ensinar com a mão na massa!
      </p>
    </div>
    <div class="flex max-w-screen-xl flex-wrap items-center justify-center gap-6 py-8">
      <GuestsCard
        role="Palestrante"
        image="/speakers/Alan.png"
        name="Alan Helal"
        position=""
        description=""
        :show-description="false"
      />

      <GuestsCard
        role="Palestrante "
        image="/speakers/Diego.png"
        name="Diego Bayerl"
        position=""
        description=""
        :show-description="false"
      />

      <GuestsCard
        role="Palestrante"
        image="/speakers/Julio.png"
        name="Julio Niko"
        position=""
        description=""
        :show-description="false"
      />

      <GuestsCard
        role="Palestrante"
        image="/speakers/Pedro.png"
        name="Pedro Henrique Vieira"
        position=""
        description=""
        :show-description="false"
      />

      <GuestsCard
        role="Palestrante"
        image="/speakers/Rodolfo.png"
        name="Rodolfo Vilança"
        position=""
        description=""
        :show-description="false"
      />

      <GuestsCard
        role="Ministrante"
        image="/teachers/Eduardo.png"
        name="Eduardo Cicutti"
        position=""
        description=""
        :show-description="false"
      />

      <GuestsCard
        role="Ministrante"
        image="/teachers/Erik.png"
        name="Erik Lima"
        position=""
        description=""
        :show-description="false"
      />

      <GuestsCard
        role="Ministrante"
        image="/teachers/Geraldo.png"
        name="Geraldo Padua"
        position=""
        description=""
        :show-description="false"
      />

      <GuestsCard
        role="Ministrante"
        image="/teachers/Iasmin.png"
        name="Iasmin Marques"
        position=""
        description=""
        :show-description="false"
      />

      <GuestsCard
        role="Ministrante"
        image="/teachers/Keth.png"
        name="Kethlen Correia"
        position=""
        description=""
        :show-description="false"
      />

      <GuestsCard
        role="Ministrante"
        image="/teachers/Thae.png"
        name="Thae Morais"
        position=""
        description=""
        :show-description="false"
      />

      <GuestsCard
        role="Ministrante"
        image=""
        name="EM BREVE"
        position="Fique ligado nas nossas redes sociais para saber as novidades"
        description=""
        :show-description="false"
      />
    </div>
  </div>
</template>
