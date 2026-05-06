# Daily

Una app diaria para Fran y Lucca. Todos los días una nueva tarjeta de:

- **Would You Rather** — preguntas para abrir debate
- **Micro Challenge** — una mini misión simple para los dos
- **Weird Fact** — un dato raro con un hook que invita a discutir

Más una sección de calendario para volver a ver lo de cualquier día.

---

## Stack

- Next.js 15 (App Router)
- React 19
- TypeScript
- CSS Modules
- localStorage para guardar respuestas (sin backend)

---

## Correr en local

```bash
npm install
npm run dev
```

Abrir [http://localhost:3000](http://localhost:3000).

---

## Deploy a Vercel

### 1. Subir a GitHub

```bash
git init
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/<tu-usuario>/<repo>.git
git push -u origin main
```

### 2. Conectar a Vercel

1. Entrar a [vercel.com](https://vercel.com) y loguearse con GitHub.
2. **New Project** → seleccionar el repo.
3. Vercel detecta Next.js automáticamente. No hay que configurar nada.
4. **Deploy**.

Listo. En 1-2 minutos está live.

### 3. (Opcional) Dominio custom

En **Settings → Domains** de Vercel se puede agregar uno propio.

---

## Cómo agregar más días

Todo el contenido vive en un solo archivo: **`lib/content.ts`**.

Cada día tiene esta forma:

```ts
{
  date: "2026-07-24",
  wyr: {
    a: "Opción A",
    b: "Opción B",
  },
  challenge: "Una mini misión simple.",
  fact: {
    text: "El dato curioso, contado en 2-4 oraciones con contexto.",
    hook: "La pregunta que abre el debate entre los dos.",
  },
},
```

Agregar tantos objetos como días quieras al array `content`. La fecha en
formato `YYYY-MM-DD`. La app levanta el contenido del día actual
automáticamente.

El contenido inicial cubre del **5 de mayo al 23 de julio de 2026** (80 días).

---

## Estructura

```
app/
  layout.tsx         layout raíz, fuentes, metadata
  page.tsx           home (3 cards del día)
  page.module.css
  globals.css        variables de color y reset
  icon.svg           favicon
  calendar/
    page.tsx         calendario navegable
    page.module.css

lib/
  content.ts         todos los días + helpers
```

---

## Estética

- **Bg**: azul oscuro `#0a1929`
- **Texto**: crema `#f5ecd9`
- **Acento**: dorado suave `#c9a961`
- **Tipografía display**: Cormorant Garamond (italic para fechas y hooks)
- **Tipografía body**: Inter (light/regular)
- Sin emojis. Numeración romana en las cards.

---

## Notas

- Las respuestas (WYR + checks de challenge) se guardan en `localStorage` por
  navegador. No hay sync entre dispositivos.
- Si más adelante quieren ver las respuestas del otro o agregar fotos a los
  challenges, hace falta backend (se podría agregar Neon + Prisma como en
  Newro).
