# Despliegue con Docker y Docker Compose

Este documento explica cómo levantar ClarBank en local con Docker y cómo preparar un despliegue básico.

## Requisitos

- Docker Desktop instalado (Windows/macOS/Linux)
- Docker Compose v2 (incluido en Docker Desktop moderno)

## Estructura incluida

- `Backend/Dockerfile`: imagen del API Express.
- `Front/Dockerfile`: build de Vite + Nginx para servir el SPA.
- `Front/nginx.conf`: fallback a `index.html` para soportar rutas del SPA.
- `docker-compose.yml`: orquesta `postgres`, `backend` y `front`.

## Variables de entorno

En Compose ya se definen variables por defecto. Si necesitas personalizarlas, edita `docker-compose.yml`:

- Base de datos (servicio `postgres`): `POSTGRES_USER`, `POSTGRES_PASSWORD`, `POSTGRES_DB`.
- Backend: `DB_HOST`, `DB_PORT`, `DB_USER`, `DB_PASSWORD`, `DB_NAME`, `PORT`.
- Front (build-arg): `VITE_API_BASE` (URL pública del backend vista por el navegador).

Para entorno local, `VITE_API_BASE` debe ser `http://localhost:3000` (por defecto ya está así).

## Levantar en local

1. Abre una terminal en la raíz del repo.
2. Ejecuta: `docker compose up --build`
3. Accede a:
   - Frontend: `http://localhost:5173`
   - Backend API: `http://localhost:3000`
   - Swagger: `http://localhost:3000/api-docs`

Para parar: `Ctrl+C` y luego `docker compose down`. Para borrar datos de PostgreSQL: `docker volume rm simulador_banca_db_data` (verifica el nombre exacto con `docker volume ls`).

## Datos iniciales

Si `Backend/Script-1.sql` contiene la creación de tablas/datos, se aplica automáticamente al primer arranque de `postgres` (se monta como `init.sql`). Si necesitas re-ejecutarlo, borra el volumen `db_data` para forzar la inicialización.

## Cambiar la URL del API en frontend

En local ya apunta a `http://localhost:3000`. Para producción, cambia el build-arg en `docker-compose.yml`:

```yaml
front:
  build:
    args:
      VITE_API_BASE: https://api.tu-dominio.com
```

O pasa `--build-arg VITE_API_BASE=...` si construyes manualmente la imagen.

## Despliegue (opción simple con un VPS)

1. Provisiona una VM (Ubuntu 22.04) en tu proveedor (AWS Lightsail, DigitalOcean, etc.).
2. Instala Docker y Docker Compose.
3. Copia el repositorio a la VM (scp/git).
4. Ajusta `VITE_API_BASE` en `docker-compose.yml` a la URL pública que usarás.
5. Ejecuta `docker compose up -d --build`.
6. Abre puertos 80 (frontend) y 3000 (backend) en el firewall del proveedor.

Recomendado: colocar Nginx (host) como reverse proxy con HTTPS (Let’s Encrypt) y rutas:

- `https://app.tu-dominio.com` → `front:80`
- `https://api.tu-dominio.com` → `backend:3000`

## Despliegue (Docker Hub + ECS/Cloud Run)

1. Construye y sube imágenes:
   - Backend: `docker build -f Backend/Dockerfile -t <tuuser>/clarbank-backend:latest . && docker push <tuuser>/clarbank-backend:latest`
   - Front: `docker build -f Front/Dockerfile --build-arg VITE_API_BASE=https://api.tu-dominio.com -t <tuuser>/clarbank-front:latest . && docker push <tuuser>/clarbank-front:latest`
2. En AWS ECS Fargate o GCP Cloud Run, crea servicios desde esas imágenes.
3. Usa RDS (AWS) o Cloud SQL (GCP) para PostgreSQL gestionado.

## Uso básico de la app

1. Crear usuario interno (Director/Asesor/Cajero) vía API (`/AddUser`) o UI si está conectada.
2. Login en `http://localhost:5173/Login`.
3. Flujos por rol:
   - Asesor: Formulario multi-paso para apertura de cuenta.
   - Director: Bandeja de pendientes y autorización/denegación.
   - Cajero: Consulta por número de cuenta y actualización de saldo.
   - Cliente: Dashboard con saldo y producto.

## Troubleshooting

- Backend no conecta a DB: espera a que `postgres` esté healthy o reinicia `backend` (`docker compose restart backend`).
- Rutas del front rompen al refrescar: se usa `nginx.conf` con `try_files` para SPA; asegúrate de que está cargado.
- CORS: backend permite `origin: '*'` en desarrollo. En producción restringe orígenes en `Backend/app.js`.

