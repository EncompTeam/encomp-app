# syntax=docker/dockerfile:1

# ------------------------------------------------------------
# Etapa 1: dependências (cacheada separadamente)
# ------------------------------------------------------------
FROM node:20-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

# ------------------------------------------------------------
# Etapa 2: build do Nuxt (SSR -> .output)
# ------------------------------------------------------------
FROM node:20-alpine AS build
WORKDIR /app

# URL pública usada pelo @nuxtjs/seo durante o build (OG/sitemap)
ARG SITE_URL=http://localhost:3000

ENV NUXT_TELEMETRY_DISABLED=1 \
    NITRO_PRESET=node-server \
    SITE_URL=$SITE_URL

COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

# ------------------------------------------------------------
# Etapa 3: imagem final enxuta (apenas o .output)
# ------------------------------------------------------------
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production \
    NUXT_TELEMETRY_DISABLED=1 \
    HOST=0.0.0.0 \
    PORT=3000

RUN addgroup -S nodejs && adduser -S nuxt -G nodejs

COPY --from=build --chown=nuxt:nodejs /app/.output ./.output

USER nuxt
EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=5s --start-period=20s --retries=3 \
  CMD wget -qO- http://127.0.0.1:3000/ >/dev/null 2>&1 || exit 1

CMD ["node", ".output/server/index.mjs"]
