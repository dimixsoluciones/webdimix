# 🔌 Dimix Soluciones - Web de Servicios Eléctricos

> Sitio web profesional para empresa de instalaciones eléctricas en Madrid. Construido con Astro, Tailwind CSS v4 y diseño industrial moderno.

---

## 📋 Tabla de Contenidos

- [Descripción del Proyecto](#-descripción-del-proyecto)
- [Stack Tecnológico](#-stack-tecnológico)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Sistema de Diseño](#-sistema-de-diseño)
- [Instalación](#-instalación)
- [Configuración](#️-configuración)
- [Datos y Contenido](#-datos-y-contenido)
- [Componentes Principales](#-componentes-principales)
- [Rutas y Páginas](#-rutas-y-páginas)
- [Integración de Servicios](#-integración-de-servicios)
- [Assets y Multimedia](#-assets-y-multimedia)
- [Deploy](#-deploy)
- [Convenciones de Código](#-convenciones-de-código)
- [Troubleshooting](#-troubleshooting)
- [TODOs](#-todos)

---

## 🎯 Descripción del Proyecto

**Dimix Soluciones** es una web corporativa diseñada para una empresa de electricistas en Madrid. El sitio ofrece:

- **Catálogo de servicios** detallado con páginas individuales
- **Portfolio de proyectos** realizados
- **Sistema de contacto** con formulario integrado (Formspree)
- **Diseño responsive** optimizado para móviles
- **SEO optimizado** para búsquedas locales
- **Secciones legales** completas (privacidad, cookies, aviso legal)

### Características Clave

- ✅ Diseño industrial moderno con paleta dark
- ✅ Navegación intuitiva por servicios
- ✅ Sistema de rutas dinámicas para proyectos y servicios
- ✅ Formulario de contacto sin redirección
- ✅ Iconografía profesional con Tabler Icons
- ✅ Rendimiento optimizado (Astro)

---

## 🚀 Stack Tecnológico

### Framework Principal
- **Astro 5.x** - Framework híbrido para sitios estáticos y dinámicos
  - Isla architecture para componentes interactivos
  - SSG (Static Site Generation) por defecto
  - Rutas basadas en sistema de archivos

### Estilos
- **Tailwind CSS v4** - Framework CSS utility-first
  - Configuración con `@theme` directivas
  - Utilidades custom definidas con `@utility`
  - Variables CSS para colores y tipografías

### Iconos
- **Astro Icon** - Integración de iconos SVG
  - Colección: Tabler Icons (`tabler:icon-name`)
  - Optimización automática de SVG

### Formularios
- **Formspree** - Servicio de formularios serverless
  - Envío sin backend propio
  - Validación HTML5
  - Respuesta AJAX sin redirección

### Tipografías
- **Google Fonts**
  - **Inter** - Cuerpo de texto (sans-serif)
  - **Poppins** - Títulos y display (sans-serif)

---

## 📁 Estructura del Proyecto

```
dimix-soluciones/
│
├── src/
│   ├── pages/
│   │   ├── index.astro                 # Home principal
│   │   ├── 404.astro                   # Página de error
│   │   ├── empresa.astro               # Quiénes somos
│   │   ├── contact.astro               # Formulario de contacto
│   │   │
│   │   ├── legal/
│   │   │   ├── aviso-legal.astro       # Aviso legal
│   │   │   ├── privacidad.astro        # Política de privacidad
│   │   │   └── cookies.astro           # Política de cookies
│   │   │
│   │   ├── por-que-elegirnos/
│   │   │   ├── respuesta-rapida.astro
│   │   │   ├── seguridad-rebt.astro
│   │   │   ├── certificaciones.astro
│   │   │   └── precios-transparentes.astro
│   │   │
│   │   ├── servicios/
│   │   │   ├── index.astro             # Listado de servicios
│   │   │   └── [slug].astro            # Página dinámica de servicio
│   │   │
│   │   └── proyectos/
│   │       ├── index.astro             # Galería de proyectos
│   │       └── [id].astro              # Detalle de proyecto
│   │
│   ├── layouts/
│   │   └── Layout.astro                # Layout base con Header/Footer
│   │
│   ├── data/
│   │   ├── services.ts                 # Array de servicios
│   │   └── projects.ts                 # Array de proyectos
│   │
│   ├── styles/
│   │   └── global.css                  # Estilos globales + Tailwind v4
│   │
│   └── components/                     # (A crear según necesidades)
│       ├── ContactForm.astro
│       ├── AboutSection.astro
│       └── FAQ.astro
|       |--
|
│
├── public/
│   ├── img/
│   │   ├── projects/                   # Imágenes de proyectos
│   │   ├── instalaciones-electricas.webp
│   │   ├── reformas-electricas.webp
│   │   ├── quienes-somos.webp
│   │   └── ...
│   └── favicon.svg
│
├── astro.config.mjs                    # Configuración de Astro
├── tailwind.config.mjs                 # Configuración de Tailwind
├── tsconfig.json                       # TypeScript config
└── package.json
```

### Páginas Dinámicas

**Servicios**: `/servicios/[slug].astro`
- Genera páginas individuales para cada servicio
- Lee datos de `src/data/services.ts`
- Slug: `instalaciones/electricas`, `mantenimiento/cuadros-electricos`, etc.

**Proyectos**: `/proyectos/[id].astro`
- Genera páginas de detalle de proyectos
- Lee datos de `src/data/projects.ts`
- ID: `reforma-integral-pozuelo`, `nave-industrial-coslada`, etc.

---

## 🎨 Sistema de Diseño

### Paleta de Colores

```css
/* Definido en global.css */

--color-accent: #E57200;           /* Naranja industrial */
--color-accent-hover: #CC6500;     /* Hover más oscuro */

--color-dark-bg: #111827;          /* Fondo principal */
--color-dark-card: #1F2937;        /* Tarjetas y cajas */
--color-dark-border: #374151;      /* Bordes sutiles */

--color-text-white: #F9FAFB;       /* Texto claro */
--color-text-muted: #9CA3AF;       /* Texto secundario */
```

### Utilidades Tailwind Custom

Debido a Tailwind v4, se definen utilidades personalizadas con `@utility`:

```css
@utility bg-accent { background-color: var(--color-accent); }
@utility bg-dark-bg { background-color: var(--color-dark-bg); }
@utility text-accent { color: var(--color-accent); }
@utility border-accent { border-color: var(--color-accent); }
@utility font-display { font-family: var(--font-display); }
```

**Uso en componentes:**
```html
<button class="bg-accent hover:bg-accent-hover text-white">
  Botón Primario
</button>
```

### Tipografías

- **Inter**: Cuerpo de texto, párrafos, formularios
- **Poppins**: Títulos (h1-h6), textos destacados

```html
<h1 class="font-display text-5xl">Título Principal</h1>
<p class="font-sans text-lg">Texto de párrafo</p>
```

### Espaciado y Layout

- **Container**: `max-w-7xl mx-auto px-8 lg:px-20`
- **Secciones**: `py-24` (96px vertical padding)
- **Gap entre elementos**: `gap-8`, `gap-16`, `gap-24`

---

## 🛠️ Instalación

### Prerrequisitos

- **Node.js 18+** (recomendado 20.x LTS)
- **npm**, **pnpm** o **yarn**

### Pasos de Instalación

```bash
# 1. Clonar el repositorio
git clone <repository-url>
cd dimix-soluciones

# 2. Instalar dependencias
npm install
# o
pnpm install

# 3. Iniciar servidor de desarrollo
npm run dev
# o
pnpm dev

# El sitio estará disponible en http://localhost:4321
```

### Scripts Disponibles

```json
{
  "dev": "astro dev",           // Servidor de desarrollo
  "build": "astro build",       // Build para producción
  "preview": "astro preview",   // Preview del build local
  "astro": "astro"              // CLI de Astro
}
```

---

## ⚙️ Configuración

### 1. Formspree (Formulario de Contacto)

El formulario está configurado para usar **Formspree** como backend serverless.

**Archivo**: `src/pages/contact.astro` (o componente de contacto)

```javascript
// Buscar esta línea en el script del formulario:
const FORMSPREE_ID = "TU_ID_DE_FORMSPREE";
```

**Pasos para configurar:**

1. Crear cuenta en [formspree.io](https://formspree.io)
2. Crear un nuevo formulario
3. Copiar el ID del formulario (formato: `xxxxxxxxxxx`)
4. Reemplazar `TU_ID_DE_FORMSPREE` con tu ID real
5. El formulario enviará a: `https://formspree.io/f/TU_ID_DE_FORMSPREE`

**Características del formulario:**
- ✅ Envío AJAX sin redirección
- ✅ Mensaje de éxito visual (botón verde)
- ✅ Validación HTML5 en campos requeridos
- ✅ Estados de loading y error

### 2. Google Fonts

Las fuentes se cargan desde Google Fonts CDN. Añadir en `<head>` del Layout:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Poppins:wght@600;700;800&display=swap" rel="stylesheet">
```

### 3. Iconos Tabler

Instalación de `astro-icon`:

```bash
npm install astro-icon
```

En `astro.config.mjs`:

```javascript
import { defineConfig } from 'astro/config';
import icon from 'astro-icon';

export default defineConfig({
  integrations: [icon()],
});
```

**Uso en componentes:**

```astro
---
import { Icon } from 'astro-icon/components';
---

<Icon name="tabler:phone" class="text-2xl" />
<Icon name="tabler:mail" />
<Icon name="tabler:chevron-down" />
```

---

## 📊 Datos y Contenido

### Servicios (`src/data/services.ts`)

Array de objetos con la siguiente estructura:

```typescript
export const services = [
  {
    slug: 'instalaciones/electricas',        // URL única
    title: 'Instalaciones Eléctricas',       // Título principal
    subtitle: 'Reformas y Obra Nueva',       // Subtítulo
    icon: 'tabler:home',                     // Icono de Tabler
    image: '/img/instalaciones-electricas.webp',  // Imagen destacada
    description: '...',                       // Descripción corta
    features: [...],                          // Array de características
    commonProblems: [                         // Problemas comunes que resuelve
      { title: '...', desc: '...' }
    ],
    process: [                                // Proceso paso a paso
      { step: '01', title: '...', desc: '...' }
    ],
    note?: {                                  // Nota opcional
      icon: 'tabler:info-circle',
      text: '...'
    }
  }
];
```

**Categorías de servicios:**
- **Instalaciones**: Eléctricas, Reformas, Climatización, CCTV
- **Mantenimiento**: Cuadros Eléctricos
- **Renovables**: Fotovoltaicas

### Proyectos (`src/data/projects.ts`)

Array de objetos con portfolio de trabajos realizados:

```typescript
export const projects = [
  {
    id: 'reforma-integral-pozuelo',          // ID única para URL
    title: 'Reforma Integral Villa de Lujo', // Título del proyecto
    category: 'Residencial',                  // Categoría
    location: 'Pozuelo, Madrid',             // Ubicación
    image: '/img/projects/reforma-pozuelo.webp',  // Imagen principal
    description: '...',                       // Descripción breve
    challenge: '...',                         // Reto del proyecto
    solution: '...',                          // Solución implementada
    specs: [...]                              // Array de especificaciones
  }
];
```

**Categorías de proyectos:**
- Residencial
- Industrial
- Renovables

---

## 🧩 Componentes Principales

### 1. ContactForm (Formulario de Contacto)

**Ubicación**: Página `contact.astro` o como componente separado

**Campos del formulario:**
- Nombre (required)
- Teléfono (required)
- Email (required)
- Servicio deseado (select)
- Presupuesto aproximado (select)
- Mensaje (textarea, required)

**Funcionalidad:**
- Envío AJAX con Formspree
- Validación HTML5
- Estados: Normal → Loading → Success → Reset
- Sin redirección de página

### 2. AboutSection (Sección Quiénes Somos)

**Características:**
- Imagen con efecto grayscale hover
- Badge flotante con años de experiencia
- Lista de características con iconos
- Estadísticas al final (certificaciones, trabajos, disponibilidad)

### 3. FAQ (Preguntas Frecuentes)

**Implementación:**
- Elementos `<details>` nativos de HTML
- Animación con CSS transitions
- Estados open/closed con estilos condicionales
- Iconos que rotan al expandir

```astro
<details class="group">
  <summary>
    <h3>Pregunta</h3>
    <Icon name="tabler:chevron-down" class="group-open:rotate-180" />
  </summary>
  <div>Respuesta</div>
</details>
```

---

## 🗺️ Rutas y Páginas

### Páginas Estáticas

| Ruta | Archivo | Descripción |
|------|---------|-------------|
| `/` | `index.astro` | Home con hero, servicios destacados, CTA |
| `/empresa` | `empresa.astro` | Quiénes somos, equipo, valores |
| `/contact` | `contact.astro` | Formulario de contacto |
| `/404` | `404.astro` | Página de error 404 |

### Sección Legal

| Ruta | Archivo | Descripción |
|------|---------|-------------|
| `/legal/aviso-legal` | `aviso-legal.astro` | Datos legales de la empresa |
| `/legal/privacidad` | `privacidad.astro` | RGPD y tratamiento de datos |
| `/legal/cookies` | `cookies.astro` | Política de cookies |

### Sección "Por Qué Elegirnos"

| Ruta | Archivo | Contenido |
|------|---------|-----------|
| `/por-que-elegirnos/respuesta-rapida` | `respuesta-rapida.astro` | Urgencias 24h |
| `/por-que-elegirnos/seguridad-rebt` | `seguridad-rebt.astro` | Cumplimiento normativo |
| `/por-que-elegirnos/certificaciones` | `certificaciones.astro` | Instaladores autorizados |
| `/por-que-elegirnos/precios-transparentes` | `precios-transparentes.astro` | Sin sorpresas |

### Páginas Dinámicas

**Servicios**:
- Listado: `/servicios`
- Detalle: `/servicios/[slug]` (ej: `/servicios/instalaciones/electricas`)

**Proyectos**:
- Galería: `/proyectos`
- Detalle: `/proyectos/[id]` (ej: `/proyectos/reforma-integral-pozuelo`)

---

## 🔗 Integración de Servicios

### Formspree

**Endpoint**: `https://formspree.io/f/{YOUR_FORM_ID}`

**Configuración**:
```javascript
const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
  method: 'POST',
  body: formData,
  headers: {
    'Accept': 'application/json'
  }
});
```

**Respuestas:**
- `200 OK`: Formulario enviado correctamente
- `400/500`: Error en el servidor o validación

### WhatsApp Link

En botones de CTA y FAQs:

```html
<a href="https://wa.me/34624731030">
  Preguntar ahora
</a>
```

Formato: `https://wa.me/{código_país}{número_sin_espacios}`

### Llamada Telefónica

```html
<a href="tel:+34624731030">
  624 731 030
</a>
```

### Email

```html
<a href="mailto:dimixsoluciones@gmail.com">
  dimixsoluciones@gmail.com
</a>
```

---

## 🖼️ Assets y Multimedia

### Estructura de Imágenes

```
public/img/
├── projects/
│   ├── reforma-pozuelo.webp
│   ├── nave-coslada.webp
│   └── solar-majadahonda.webp
│
├── instalaciones-electricas.webp
├── reformas-electricas.webp
├── instalaciones-climatizacion.webp
├── cctv-antenas.webp
├── cuadros-electricos.webp
├── instalaciones-fotovoltaicas.webp
└── quienes-somos.webp
```

### Formato de Imágenes

- **Formato**: WebP (mejor compresión y calidad)
- **Resolución recomendada**:
  - Hero/destacadas: 1920x1080px
  - Tarjetas de servicio: 800x600px
  - Proyectos: 1200x800px
- **Optimización**: Usar herramientas como Squoosh, TinyPNG o Sharp

### Atributos de Imagen Recomendados

```html
<img 
  src="/img/ejemplo.webp" 
  alt="Descripción detallada"
  width="800"
  height="600"
  loading="lazy"
  decoding="async"
/>
```

### ⚠️ IMPORTANTE: Imágenes Faltantes

**Actualmente faltan las siguientes imágenes** (crear antes de deploy):

1. **Proyectos**:
   - `/img/projects/reforma-pozuelo.webp`
   - `/img/projects/nave-coslada.webp`
   - `/img/projects/solar-majadahonda.webp`

2. **Servicios**:
   - `/img/instalaciones-electricas.webp`
   - `/img/reformas-electricas.webp`
   - `/img/instalaciones-climatizacion.webp`
   - `/img/cctv-antenas.webp`
   - `/img/cuadros-electricos.webp`
   - `/img/instalaciones-fotovoltaicas.webp`

3. **Sección Empresa**:
   - `/img/quienes-somos.webp`

**Placeholder temporal**: Usar servicios como Unsplash, Pexels o generar con IA hasta tener fotos reales.

---

## 🚢 Deploy

### Opciones de Hosting Recomendadas

#### 1. Vercel (Recomendado)

```bash
# 1. Instalar Vercel CLI
npm i -g vercel

# 2. Login
vercel login

# 3. Deploy
vercel --prod
```

**Configuración automática**:
- Detección automática de Astro
- Build: `npm run build`
- Output: `dist/`

#### 2. Netlify

```bash
# 1. Instalar Netlify CLI
npm i -g netlify-cli

# 2. Login
netlify login

# 3. Deploy
netlify deploy --prod
```

**Archivo `netlify.toml`**:
```toml
[build]
  command = "npm run build"
  publish = "dist"
```

#### 3. Cloudflare Pages

- Conectar repositorio GitHub
- Framework: Astro
- Build command: `npm run build`
- Output directory: `dist`

### Variables de Entorno

**Producción**:
```env
FORMSPREE_ID=tu_id_real_de_formspree
```

**Nota**: En el código actual, el ID está hardcodeado. Para mayor seguridad, considerar usar:

```javascript
const FORMSPREE_ID = import.meta.env.PUBLIC_FORMSPREE_ID;
```

---

## 📝 Convenciones de Código

### Estructura de Componentes Astro

```astro
---
// 1. Imports
import { Icon } from 'astro-icon/components';

// 2. Props (si es componente)
interface Props {
  title: string;
}

// 3. Lógica TypeScript
const { title } = Astro.props;
const data = await fetchData();
---

<!-- 4. HTML Template -->
<section class="...">
  <!-- contenido -->
</section>

<!-- 5. Scripts (si es necesario) -->
<script>
  // JavaScript del lado del cliente
</script>

<!-- 6. Estilos (si es necesario) -->
<style>
  /* CSS scoped al componente */
</style>
```

### Clases Tailwind

**Orden recomendado**:
1. Layout: `flex`, `grid`, `container`
2. Sizing: `w-full`, `h-screen`, `max-w-7xl`
3. Spacing: `px-8`, `py-24`, `gap-4`
4. Typography: `text-xl`, `font-bold`, `uppercase`
5. Colors: `bg-accent`, `text-white`, `border-gray-700`
6. Effects: `shadow-lg`, `rounded-2xl`, `transition-all`
7. States: `hover:bg-accent-hover`, `focus:outline-none`

### Nomenclatura

- **Archivos**: kebab-case (`aviso-legal.astro`)
- **Componentes**: PascalCase (`ContactForm.astro`)
- **Variables**: camelCase (`formStatus`, `isLoading`)
- **Constantes**: UPPER_SNAKE_CASE (`FORMSPREE_ID`)

### TypeScript

Usar tipos explícitos en datos:

```typescript
interface Service {
  slug: string;
  title: string;
  subtitle: string;
  icon: string;
  image: string;
  description: string;
  features: string[];
  // ...
}

export const services: Service[] = [...]
```

---

## 🐛 Troubleshooting

### Problema: Iconos no se muestran

**Causa**: `astro-icon` no instalado o mal configurado

**Solución**:
```bash
npm install astro-icon
```

Verificar en `astro.config.mjs`:
```javascript
import icon from 'astro-icon';

export default defineConfig({
  integrations: [icon()],
});
```

### Problema: Formulario no envía

**Causa**: FORMSPREE_ID no configurado o incorrecto

**Solución**:
1. Verificar que `FORMSPREE_ID` tiene un valor válido
2. Comprobar en DevTools > Network el error específico
3. Validar que la cuenta de Formspree esté activa

### Problema: Estilos Tailwind no aplican

**Causa**: Tailwind v4 requiere sintaxis específica

**Solución**:
1. Asegurar que `global.css` está importado en Layout
2. Verificar que utilidades custom estén definidas con `@utility`
3. Limpiar caché: `rm -rf .astro && npm run dev`

### Problema: Rutas dinámicas no funcionan

**Causa**: `getStaticPaths()` no implementado

**Solución en `[slug].astro`**:
```astro
---
import { services } from '../../data/services';

export function getStaticPaths() {
  return services.map(service => ({
    params: { slug: service.slug },
    props: { service }
  }));
}
---
```

### Problema: Imágenes no cargan

**Causa**: Rutas incorrectas o imágenes no existen

**Solución**:
1. Verificar que las imágenes estén en `public/img/`
2. Usar rutas absolutas desde `/`: `/img/ejemplo.webp`
3. Comprobar que los nombres de archivo coincidan (case-sensitive)

---

## 📌 TODOs

### Prioridad Alta

- [ ] **Configurar Formspree ID** en formulario de contacto
- [ ] **Añadir todas las imágenes** faltantes (ver sección Assets)
- [ ] **Configurar Google Fonts** en Layout.astro
- [ ] **Añadir favicon** real en `public/`
- [ ] **Revisar enlaces internos** en toda la web

### Prioridad Media

- [ ] Implementar componente de **Header/Navbar** responsivo
- [ ] Crear componente de **Footer** con enlaces legales
- [ ] Añadir **breadcrumbs** en páginas de detalle
- [ ] Implementar **sistema de búsqueda** de servicios
- [ ] Añadir **testimonios** de clientes reales
- [ ] Crear página de **blog** o artículos técnicos

### Prioridad Baja

- [ ] Añadir **animaciones** con View Transitions API de Astro
- [ ] Implementar **dark/light mode toggle** (opcional)
- [ ] Crear **CMS headless** con Sanity o Strapi
- [ ] Añadir **Google Analytics** o Plausible
- [ ] Implementar **PWA** con service worker
- [ ] Añadir **sitemap.xml** automático

### Mejoras de SEO

- [ ] Metatags Open Graph completos
- [ ] Schema.org markup para LocalBusiness
- [ ] Optimizar imágenes (WebP + lazy loading)
- [ ] Implementar preconnect para recursos externos
- [ ] Añadir robots.txt

---

## 📞 Información de Contacto

**Cliente**: Dimix Soluciones  
**Teléfono**: +34 624 731 030  
**Email**: dimixsoluciones@gmail.com  
**Ubicación**: Comunidad de Madrid, España

---

## 📄 Licencia

Este proyecto es propiedad de Dimix Soluciones. Todos los derechos reservados.

---

## 🤝 Contribución

Si eres el desarrollador asignado:

1. Crear rama feature: `git checkout -b feature/nueva-funcionalidad`
2. Hacer commits descriptivos: `git commit -m "feat: añadir sistema de búsqueda"`
3. Push y crear PR: `git push origin feature/nueva-funcionalidad`
4. Esperar revisión antes de mergear a `main`

---

## 📚 Recursos Útiles

- [Documentación de Astro](https://docs.astro.build)
- [Tailwind CSS v4 Docs](https://tailwindcss.com/docs)
- [Tabler Icons](https://tabler.io/icons)
- [Formspree Docs](https://help.formspree.io/)
- [WebP Converter](https://squoosh.app/)

---

**Última actualización**: Marzo 2026  
**Versión**: 1.0.0  
**Mantenedor**: [Tu Nombre / Equipo]