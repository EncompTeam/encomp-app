# Pendências da 8ª edição (2026)

> Levantamento feito em **12/10/2026** comparando o conteúdo do site com a nova edição:
> **8ª edição — 11, 12 e 13 de novembro de 2026** (quarta, quinta e sexta), CEUNES/UFES — São Mateus/ES.
>
> Este arquivo é só um roteiro do que ainda cita a edição antiga (VII / 2024). Nada aqui foi aplicado.

## 1. Conteúdo desatualizado (corrigir)

- `components/About/About.vue:22` — "Nesta **7ª edição**, reunimos…" → "Nesta **8ª edição**, reunimos…".
- `components/Logo.vue:10` — o `alt` ainda diz "Logo do **VII** ENCOMP…", mas o componente já usa o SVG novo `8EncompVetorizado_1.svg`. → "Logo do **VIII** ENCOMP…".
- `components/OgImage/Main.vue:11` — ainda mostra "**06, 07 e 08 de Novembro de 2024**" → "**11, 12 e 13 de Novembro de 2026**". É a imagem de compartilhamento (Open Graph), aparece em links do site.

### Revisar (pode estar defasado)

- `components/About/About.vue:29` — "**7 Edições**". Se a conta inclui a edição atual, passa a ser **8 Edições**.
- `components/About/About.vue:35`, `:41`, `:47` — números acumulados ("814 Participantes Impactados", "65 Palestras Apresentadas", "42 Minicursos Lecionados"). Confirmar se entram os números desta edição.

> Já atualizados (OK): `components/Hero/Hero.vue` ("VIII Edição" + "11, 12 e 13 de Novembro de 2026"), `components/Footer/Footer.vue` (mesmas datas) e `pages/schedule.vue` ("8ª edição", dias 11/11, 12/11 e 13/11).

## 2. Links e funcionalidades quebradas

- **Menu mobile — "Maratona de Programação"**: `components/Header/Mobile.vue:10` e `:47-48` ainda exibem o item e emitem `navigate-to-marathon`, mas a página `pages/marathon.vue` foi removida e o `layouts/default.vue` não trata mais esse evento. Resultado: **link morto no menu mobile**. Decidir entre remover o item ou recriar a página da maratona.
- **Marquee (rifa)**: `layouts/default.vue:42-44` mantém a Marquee comentada (`rifei.com.br/vii-encomp`, rifa do monitor gamer), desativada no commit `85e0b97`. Confirmar se a rifa não volta em 2026.

## 3. Arquivos órfãos (provavelmente podem sair)

Sem nenhuma referência no código após as mudanças:

- `public/encomp7-logo-large.png` (logo antigo da VII)
- `public/encomp-logo-large.svg` (logo antigo)
- `public/logo_big.png`
- `public/questionmark.png`
- `public/maratona_regulamento.pdf` (maratona removida)
- `public/qrcode-maratona.png` (maratona removida)
- `components/Marquee/*` (`Marquee.vue`, `Item.vue`, `Part.vue`) + `public/display.png`, usados apenas pela Marquee comentada

> Sugestão: remover junto com a decisão sobre o item da maratona, para não quebrar nada.

## 4. Pendências de conteúdo da programação

Itens que dependem de informação que não estava nos CSVs nem no `textos-convidados.txt`:

- **11/11 — Palestra 1**: só temos "IA Pedro". Ficou **"Palestra 1 — IA"** (palestrante Pedro Henrique Vieira). Falta o título real.
- **11/11 — Palestra 2 (16:40)**: "Drone IFES". Usei o título do txt, mas **falta o palestrante**.
- **11/11 — Mesa Redonda**: **sem participantes** informados.
- **12/11 — Minicurso 3**: **"ainda a definir"** (card provisório "Oficina a definir / Em breve").
- **12/11 — "Computação em Nuvem - Ybatinga"**: associei ao texto "…por onde começar? – Julio Nico" e ao convidado **Julio Niko**. Confirmar.
- **13/11 — Palestra 3**: **sem título nem palestrante** (ficou "Palestra a definir").
- **Nomes divergentes**: **Eduardo Cicuti × Cicutti** (usei _Cicutti_) e **Rodolfo Vilança × Silva Villaca × Villaça** (usei _Villaça_).
- **Coluna "Local" dos minicursos**: está desalinhada nas planilhas e o card não tem campo de sala. Hoje aparece só "Minicurso"/"Auditório".

## 5. Sem ação necessária

- `nuxt.config.ts:3` — `compatibilityDate: '2024-04-03'` é data técnica de compatibilidade do Nuxt, não é a data do evento.
- `layouts/empty.vue` — apenas formatação.
