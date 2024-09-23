<script setup lang="ts">
const { asciiImage, loadImage } = useImageToAscii()

async function convertImage() {
  try {
    // Substitua pelo caminho da sua imagem no diretório de assets
    const imageUrl = '/es_image.png'
    await loadImage(imageUrl)
  }
  catch (error) {
    console.error('Erro ao carregar a imagem:', error)
  }
}

onMounted(() => {
  convertImage()
})
</script>

<template>
  <div>
    <div v-if="asciiImage">
      <pre class="w-full bg-gradient-to-b from-red-700 to-red-200 bg-clip-text text-xs font-thin text-transparent">{{ asciiImage }}</pre>
    </div>
  </div>
</template>
