<script lang="ts" setup>
function openPDF() {
  window.open('/maratona_regulamento.pdf', '_blank')
}

function copyPix() {
  navigator.clipboard.writeText('00020126580014BR.GOV.BCB.PIX01366112b300-1c4a-4d25-83a7-7e4007e57e2d5204000053039865802BR5901N6001C62180514MARATONAENCOMP630448A9')
}
</script>

<template>
  <MainContent class="mb-60 mt-14 lg:mb-80">
    <div class="lg:mx-44">
      <h1 class="text-2xl font-bold lg:text-3xl">
        Inscrições para a Maratona de Programação do ENCOMP
      </h1>
      <p class="mt-2">
        Você é apaixonado por programação? Quer testar suas habilidades em um ambiente desafiador e colaborativo? Então não perca a oportunidade de participar da
        <span class="font-bold">Maratona de Programação do ENCOMP!</span>
        O ENCOMP, em colaboração com a <NuxtLink to="https://mapcom.ufes.br/" external target="_blank" class="inline-flex font-bold text-blue-500 hover:underline">
          MapCom
        </NuxtLink>
        , Maratona de Programação de Computadores, oferecida pelos Centros Acadêmicos de Ciência e Engenharia da Computação do CEUNES, irão realizar esta maratona as vésperas do evento e convidam você a participar!
      </p>

      <p class="mt-5">
        A maratona ocorrerá no dia <span class="font-bold">05/11</span>, véspera da abertura do evento, das <span class="font-bold">13:00 às 17:30</span>. Com o warm-up ocorrendo no mesmo dia, de <span class="font-bold">09:00 às 11:00</span>.
      </p>
      <p class="mt-5 font-bold text-primary">
        Teremos coffee break ;)
      </p>
      <h2 class="mt-5 text-xl font-bold">
        Regras Básicas
      </h2>
      <p>• Equipes compostas de 3 alunos regulamente matriculados em uma instituição de ensino superior ou médio.</p>
      <p>• É vedada a utilização de qualquer dispositivo eletroeletrônico.</p>
      <p>• Os participantes podem levar qualquer material impresso.</p>
      <p class="mt-5">
        Consulte o <Button class="p-0 text-tertiary-300" variant="link" @click.prevent="openPDF">
          Regulamento Completo
        </Button>
      </p>

      <h2 class="mt-5 text-xl font-bold">
        Inscrições
      </h2>
      <p>• A inscrição consta com um valor apenas, e garante a participação de toda a equipe. Possuindo duas categorias de inscrição, onde se paga <span class="font-bold text-primary">R$45,00</span> caso a equipe seja composta por alunos veteranos, ou <span class="font-bold text-primary">R$30,00</span> se for composta por alunos calouros.</p>
      <p>• A incrição deve ser feita através do formulário abaixo e, ao final deste, há um campo para anexar o comprovante de pagamento.</p>

      <h2 class="mt-5 text-xl font-bold text-yellow-500">
        Premiação
      </h2>
      <p>A premiação do time vencedor irá ocorrer na abertura do ENCOMP, dia 06/11 às 13h, no auditório.</p>
    </div>
    <div class="mt-5 flex flex-col items-center justify-center lg:mx-44">
      <img src="/qrcode-marathon.png" class="mt-2 max-w-44" @click="copyPix">
      <p class="text-center">
        Escaneie o QR-Code para pagar ou interaja com ele para copiar a chave Pix
      </p>
    </div>
    <NuxtLink
      to="https://forms.gle/yu5qCwh9NQywqxU1A" external target="_blank"
      class="mt-14 flex justify-center text-2xl font-bold text-tertiary hover:underline lg:text-4xl"
    >
      Formulário de Inscrição
    </NuxtLink>
  </MainContent>
</template>
xl
