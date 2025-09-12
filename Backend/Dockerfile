FROM node:22-alpine AS base

WORKDIR /app

# Instalar dependencias
COPY Backend/package*.json ./
RUN npm ci --omit=dev

# Copiar el resto del backend
COPY Backend/. .

ENV NODE_ENV=production
EXPOSE 3000

CMD ["node", "app.js"]

