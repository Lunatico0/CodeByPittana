# Code by Pittana

Portafolio personal y sitio web de servicios profesionales de Patricio Pittana, desarrollador Full Stack.

## 🚀 Descripción

CodeByPittana es una aplicación web moderna construida con Next.js 15 que sirve como:

- **Portafolio de Proyectos**: Muestra proyectos con integración de GitHub y metadata enriquecida
- **Identidad Profesional**: Presenta CV/currículum en múltiples formatos y lenguajes (ES/EN)
- **Oferta de Servicios**: Detalla servicios de desarrollo, precios y metodologías
- **Contacto con Clientes**: Formulario de contacto con integración SMTP

<cite />

## 🛠️ Stack Tecnológico

### Core
- **Framework**: Next.js 15.5.4 (App Router)
- **UI**: React 19.1.0
- **Lenguaje**: TypeScript 5.x
- **Estilos**: Tailwind CSS 4.x

### Librerías Principales
- **Animaciones**: Framer Motion 12.23.24
- **Iconos**: Material UI Icons 7.3.4
- **Formularios**: Nodemailer 7.0.10
- **Notificaciones**: react-hot-toast 2.6.0
- **Markdown**: react-markdown 10.1.0
- **Efectos**: @tsparticles 3.9.1

<cite />

## 📁 Estructura del Proyecto

```
src/
├── app/                    # Next.js App Router
│   ├── page.tsx           # Página principal
│   ├── layout.tsx         # Layout raíz
│   ├── about/             # Página "Acerca de"
│   ├── projects/          # Páginas de proyectos
│   ├── cv-online/         # Sistema de CV dinámico
│   └── api/               # API Routes
├── components/            # Componentes React
│   ├── sections/          # Secciones de página
│   ├── ui/                # Componentes UI reutilizables
│   └── seo/               # Componentes SEO
├── data/                  # Contenido estático
├── hooks/                 # Custom React hooks
├── icons/                 # Sistema de iconos
├── lib/                   # Utilidades y fetchers
├── types/                 # Definiciones TypeScript
└── context/               # React contexts
```

<cite />

## 🚦 Inicio Rápido

### Prerrequisitos

- Node.js 20+
- npm, yarn, pnpm o bun

### Instalación

```bash
# Clonar el repositorio
git clone https://github.com/Lunatico0/CodeByPittana.git

# Instalar dependencias
npm install
```

### Variables de Entorno

Crea un archivo `.env.local` con las siguientes variables:

```env
GITHUB_USERNAME=tu_usuario_github
GITHUB_TOKEN=tu_token_github
EMAIL_USER=tu_email@gmail.com
EMAIL_PASS=tu_contraseña_app
```

<cite />

### Desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### Producción

```bash
# Build
npm run build

# Iniciar servidor
npm start
```

<cite />

## ✨ Características Principales

### 1. Integración con GitHub
- Obtención en tiempo real de repositorios con caché de 15 minutos
- Enriquecimiento de proyectos con metadata personalizada
- Proyectos destacados en la página principal

### 2. Sistema de CV Multi-idioma
- Soporte para Español e Inglés
- Formatos: Visual y Harvard
- Rutas dinámicas: `/cv-online/{lang}-{layout}`
- Modal global para descarga/visualización

### 3. Formulario de Contacto
- Endpoint POST en `/api/contact`
- Envío de emails vía Nodemailer con Gmail SMTP
- Validación server-side
- Notificaciones toast para feedback

<cite />

### 4. Navegación Interactiva
- Seguimiento de sección activa con IntersectionObserver
- Smooth scrolling
- Optimización móvil/desktop

<cite />

## 🎨 Sistema de Iconos

El proyecto utiliza un sistema centralizado de iconos que mapea tecnologías a componentes visuales:

Los iconos se normalizan automáticamente (lowercase, sin espacios) para búsqueda consistente.

<cite />

## 📊 Proyectos Destacados

Los proyectos incluyen metadata enriquecida con descripciones detalladas, imágenes y tecnologías:

## 🔧 Configuración

### Path Aliases

El proyecto usa aliases TypeScript para imports limpios:

- `@data/*` → `./src/data/*`
- `@hooks/*` → `./src/hooks/*`
- `@icons` → `./src/icons/index.ts`
- `@lib/*` → `./src/lib/*`
- `@sections/*` → `./src/components/sections/*`
- `@ui/*` → `./src/components/ui/*`

<cite />

### Turbopack

El proyecto usa Turbopack para builds más rápidos:

```bash
npm run dev    # Usa --turbopack
npm run build  # Usa --turbopack
```

## 📝 Licencia

Este proyecto es privado y de uso personal.

## 👤 Autor

**Patricio Pittana**
- GitHub: [@Lunatico0](https://github.com/Lunatico0)
- LinkedIn: [Patricio Pittana](https://linkedin.com/in/patricio-pittana-2185b6177/)
- Email: pittanapatricio@gmail.com

## 🙏 Agradecimientos

Construido con Next.js 15, React 19, y Tailwind CSS 4.
<cite />
```
