FROM node:22-alpine AS build
WORKDIR /app

COPY Front/package*.json ./
RUN npm ci

COPY Front/. .

# Permite configurar la URL del backend en build time
ARG VITE_API_BASE
ENV VITE_API_BASE=${VITE_API_BASE}

RUN npm run build

FROM nginx:alpine AS serve

# Copiamos una configuración de Nginx que soporte SPA (fallback a index.html)
COPY Front/nginx.conf /etc/nginx/conf.d/default.conf

# Servimos el build de Vite
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

