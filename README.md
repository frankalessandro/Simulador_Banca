<div align="center">

# Simulador Banca – ClarBank

Aplicación full‑stack para simular la apertura y operación de productos bancarios con flujos por rol (Director, Asesor, Cajero y Cliente), formularios multi‑paso, autorización de cuentas, y un panel para clientes.

</div>

---

## Índice

1. [Visión General](#visión-general)
2. [Arquitectura](#arquitectura)
3. [Funcionalidades](#funcionalidades)
4. [Stack Tecnológico](#stack-tecnológico)
5. [Estructura del Proyecto](#estructura-del-proyecto)
6. [Instalación y Ejecución](#instalación-y-ejecución)
7. [Variables de Entorno](#variables-de-entorno)
8. [API (Backend)](#api-backend)
9. [Patrones y Buenas Prácticas](#patrones-y-buenas-prácticas)
10. [Calidad y Estilo](#calidad-y-estilo)
11. [Despliegue](#despliegue)
12. [Roadmap Breve](#roadmap-breve)

---

## Visión General

ClarBank es un simulador bancario que permite:

- Gestión de usuarios del equipo (Director, Asesor, Cajero) y autenticación de clientes.
- Apertura de cuentas mediante formularios guiados y multi‑paso para persona natural.
- Flujo de autorización/denegación de solicitudes por parte de Dirección.
- Módulo de caja para consultas y operaciones sobre cuentas (consignaciones, retiros).
- Tablero de cliente con información de saldo y producto.

La app ilustra prácticas modernas en React (estado global con contexto, hooks de efecto/memoización, formularios con validación) y un backend Express que expone endpoints REST contra PostgreSQL. La documentación de API se sirve con Swagger UI.

## Arquitectura

- Frontend: React + Vite (SPA), UI con TailwindCSS y Flowbite React.
- Backend: Node.js + Express, conexión a PostgreSQL (`pg`).
- Documentación: OpenAPI (Swagger UI) montado en `/api-docs`.
- Configuración: Variables de entorno en `.env` (backend) y `VITE_*` (frontend).

## Funcionalidades

### Autenticación y Sesión

- Inicio de sesión por nombre de usuario y contraseña.
- Persistencia de sesión con cookies, gestionadas desde un `AuthContext` (login, logout, lectura de rol y datos de usuario).
- Renderizado condicional por rol para habilitar menús y vistas específicas.

### Gestión de Cuentas (Director/Asesor)

- Bandeja de “Pendientes” para revisar solicitudes de apertura.
- Autorización/denegación con feedback visual (toasts) y actualización de estado.
- Historial y reportes base (componentes presentes para extensión futura).

### Gestión de Usuarios Internos (Director)

- Listado de usuarios con rol y estado.
- Creación/edición mediante modales y eliminación con feedback.
- Roles soportados en UI: Director (1), Asesor (2), Cajero (3), Cliente (4).

### Módulo de Caja (Cajero)

- Consulta por número de cuenta para validar titular y saldo.
- Consignación y retiro usando endpoints del backend, con confirmación visual.

### Tablero de Cliente

- Vista de bienvenida con identificación, producto y saldo disponible.
- Enmascaramiento de número de cuenta y estructura de actividad reciente (demo).

### Formularios Multi‑Paso (Apertura de Cuenta – Persona Natural)

- Construidos con `react-hook-form`: validaciones, manejo de errores y progresión por secciones (personal, contacto, económica, financiera, tributaria, operaciones).
- Envío final al backend para persistencia y creación de entidades relacionadas (cliente, usuario, detalle de producto).

## Stack Tecnológico

- React 18, React Router, React Context
- Vite 5, TailwindCSS 3, Flowbite React
- React Hook Form, React Toastify
- Node.js >= 22 (mantenido vía `.nvmrc` / `.node-version`)
- Express 4, CORS, Swagger UI, `pg` (PostgreSQL)

## Estructura del Proyecto

```
Backend/               # API Express + OpenAPI
  app.js               # App y middlewares (CORS, JSON, Swagger UI)
  routes/              # Rutas Express
  controllers/         # Controladores por recurso
  config/db.js         # Configuración PostgreSQL vía env
  swagger.yaml         # Esquema OpenAPI

Front/                 # SPA React + Vite
  src/
    context/           # AuthContext (sesión con cookies)
    Components/        # UI modular por dominio (Dashboard, Landing, etc.)
    Pages/             # Páginas (Login, DashboardMenu, LandingPage)
    hooks/             # Hooks utilitarios (p.ej. `useLoad`)
    config.js          # `API_BASE` (VITE_API_BASE || localhost)

Documentación/         # Manuales técnicos y referencias
```

## Instalación y Ejecución

Requisitos:

- Node.js >= 22 (definido en `engines`).
- PostgreSQL accesible y variables de entorno configuradas.

Gestor de versiones (opcional):

- Linux/macOS: `nvm use` (raíz, `Backend/` o `Front/`).
- Windows: `nvm install 22 && nvm use 22`.

Backend:

```bash
cd Backend
npm install
npm start           # Servidor en http://localhost:3000 (Swagger en /api-docs)
```

Frontend (nuevo terminal):

```bash
cd Front
npm install
npm run dev         # Vite dev server con HMR
```

Build y preview (frontend):

```bash
npm run build
npm run preview
```

## Variables de Entorno

Backend (`Backend/.env`):

- `PORT` (opcional, por defecto `3000`)
- `DB_HOST`, `DB_USER`, `DB_PASSWORD`, `DB_NAME`, `DB_PORT`

Frontend (`Front/.env`):

- `VITE_API_BASE` (URL del backend; por defecto `http://localhost:3000`)

## API (Backend)

Base URL por defecto: `http://localhost:3000`

Rutas principales expuestas en `routes/dataRoutes.js`:

- POST `/Login` — Autenticación por nombre y contraseña.
- GET `/user` — Listar usuarios.
- GET `/getclienteP` — Solicitudes pendientes de apertura.
- GET `/getclienteA` — Solicitudes autorizadas.
- GET `/getclienteD` — Solicitudes denegadas.
- POST `/AddUser` — Crear usuario interno.
- PUT `/UpdateUser/:id` — Actualizar usuario interno.
- DELETE `/user/:userId` — Eliminar usuario.
- POST `/AddFormData/:id` — Registrar formulario de apertura (Persona Natural) y enlazar entidades.
- PUT `/Estado/:id` — Cambiar estado de cliente (p.ej. Autorizar/Denegar).
- PUT `/EstadoD/:id` — Cambiar estado con motivo.
- GET `/getDetalle` — Listar detalle de productos.
- GET `/getcliente/:userName` — Datos del cliente por documento (para dashboard cliente).
- GET `/getBusqueda` — Búsqueda de clientes (consulta avanzada).
- GET `/getInfoCliente/:accountNumberInt` — Datos por número de cuenta (caja).
- PUT `/UpdateCliente/:id` — Actualizar saldo del cliente (operación de caja).

Swagger UI: `GET /api-docs` (el `swagger.yaml` es base y puede ampliarse para cubrir todas las rutas anteriores).

Tablas usadas (extracto de consultas): `usuarios`, `cliente`, `FormPersonNatural`, `DetalleProducto`, `producto`, `tipoproducto`.

## Patrones y Buenas Prácticas

- Estado global con `React Context` para sesión y datos del usuario (APIs de login/logout, cookies, rol). Hooks (`useEffect`, `useMemo`, `useCallback`) para sincronizar cookies, optimizar renders y manejar UI responsiva (sidebar, menús).
- Formularios con `react-hook-form` para un flujo multi‑paso robusto, validaciones por campo y envío final empaquetado al backend.
- Renderizado por rol: el Dashboard alterna contenido para Director/Asesor/Cajero/Cliente asegurando rutas y acciones coherentes al perfil.
- Feedback de UI consistente con `react-toastify` (éxito/errores) y componentes accesibles de `flowbite-react`.
- Acceso a API centralizado mediante `API_BASE` y `fetch`; CORS habilitado en backend.

## Calidad y Estilo

- Linting frontend: `npm run lint` en `Front/` (ESLint, React plugins).
- Convenciones:
  - JS/JSX con 2 espacios, comillas simples y punto y coma.
  - `camelCase` para funciones/variables; `PascalCase` para componentes y páginas; rutas como `dataRoutes.js`, `dataController.js`.
- Commits: Conventional Commits (feat, fix, docs, refactor) con scope y mensaje imperativo.

## Despliegue

- El frontend puede buildarse con Vite y publicarse en cualquier hosting estático.
- El backend es un servicio Node.js + Express que requiere acceso a PostgreSQL y variables de entorno seguras.
- CORS: abierto en desarrollo; restringir orígenes en producción.

## Roadmap Breve

- Extender `swagger.yaml` para cubrir todas las rutas y modelos.
- Hash de contraseñas y políticas de autenticación más estrictas.
- Tests: Jest + Supertest en backend; React Testing Library en frontend.
- Endpoints de caja específicos (depósito/retiro) con auditoría y límites.

---

### Requisitos de Node.js

- Node.js >= 22 (definido en `engines` y `.nvmrc`).
- Archivos en repo: `.nvmrc`, `.node-version` en la raíz y `.nvmrc` en `Backend/` y `Front/`.

