# Encomp app

Site do **Encontro Norte Capixaba de Computação (ENCOMP)** – evento de tecnologia realizado por alunos de Ciência e Engenharia da Computação da UFES – Campus São Mateus (CEUNES).

## Informações sobre o app

- Engine: Node 18 ou superior
- Framework: Nuxt 3 (SSR) + Tailwind CSS + shadcn-vue/radix-vue

## Desenvolvimento local

```bash
npm install
npm run dev        # http://localhost:3000
```

Outros scripts:

| Script             | Descrição                         |
| ------------------ | --------------------------------- |
| `npm run dev`      | Servidor de desenvolvimento (HMR) |
| `npm run build`    | Build de produção (`.output`)     |
| `npm run preview`  | Preview do build de produção      |
| `npm run generate` | Build estático (sem servidor)     |

## Docker

A imagem é construída em etapas (multi-stage): instalação das dependências → build do Nuxt → imagem final enxuta apenas com o `.output`.

### Produção

```bash
# opcional: copie e ajuste as variáveis
cp .env.example .env

docker compose up -d --build
# site em http://localhost:3000
```

Somente com Docker (sem compose):

```bash
docker build -t encomp-app .
docker run -d --name encomp-app -p 3000:3000 -e SITE_URL=http://localhost:3000 encomp-app
```

### Desenvolvimento (hot reload)

```bash
docker compose --profile dev up dev
```

O código é montado por volume (`- .:/app`) e o `node_modules` fica em um volume nomeado, evitando conflitos entre SO.

### Comandos úteis

```bash
docker compose logs -f app     # logs
docker compose ps              # status + healthcheck
docker compose down            # parar
docker image prune -f          # limpar imagens órfãs
```

### Variáveis de ambiente

| Variável   | Descrição                                         | Padrão                  |
| ---------- | ------------------------------------------------- | ----------------------- |
| `SITE_URL` | URL pública usada pelo `@nuxtjs/seo` (OG/sitemap) | `http://localhost:3000` |
| `PORT`     | Porta publicada pelo `docker compose`             | `3000`                  |

> Observação: o `@nuxt/fonts`/`@nuxtjs/seo` baixa fontes e gera imagens no momento do **build**, então a etapa `docker build` precisa de acesso à internet.
