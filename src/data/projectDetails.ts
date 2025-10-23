import { ExtraProjectDetails } from '@typings/projectDetails';

export const extraProjectDetails: ExtraProjectDetails = {
  "controlCubiertas": {
    image: "/images/controlCubiertas.png",
    shortDescription: "Sistema de Gestión de Activos (SGA) para flotas con foco en optimización de cubiertas y migración a Windows App (Electron.js).",
    longDescription: `
## El Desafío
Una importante empresa de transporte y logística enfrentaba costes operativos considerables debido a la gestión ineficiente y la falta de control predictivo sobre el **activo más crítico de su flota: las cubiertas (neumáticos)**. Se necesitaba una solución que optimizara su uso, minimizara el desgaste prematuro y extendiera su vida útil.

## La Solución: Un Sistema de Gestión de Activos (SGA) Especializado

Desarrollé un **Sistema de Gestión de Activos (SGA)** integral, diseñado específicamente para el ciclo de vida de cada neumático. La aplicación va más allá del inventario, proporcionando herramientas de **optimización de costes y mantenimiento predictivo**.

### Migración y Rendimiento
El proyecto se concibió inicialmente como una *web app*, pero se migró estratégicamente a una **aplicación de escritorio Windows (utilizando Electron.js)**. Esta decisión garantizó un rendimiento más robusto, estabilidad y acceso sin conexión, vital para entornos operativos como depósitos y centros de gestión de flota.

### Funcionalidades Clave
* **Control Detallado del Activo:** Seguimiento individualizado de cada neumático, registrando su ubicación y estado actual en tiempo real.
* **Historial Predictivo:** Registro automatizado de fechas de montaje y desmontaje, tiempos de vida activa y kilometraje, permitiendo el **análisis del desgaste** y la planificación de mantenimiento.
* **Gestión de Recapados:** Control preciso de la duración y rendimiento de cada ciclo de recapado, maximizando el uso del activo antes de su descarte final.
* **Alertas de Vencimiento:** Monitoreo de fechas límite y tiempos de vida útil restantes para asegurar reemplazos oportunos y evitar fallos costosos.

---

## Valor Agregado
Este proyecto demostró la capacidad de transformar un problema logístico complejo en una solución de *software* robusta y enfocada en la **optimización financiera y operativa**. La exitosa migración a una **Windows App con Electron.js** evidencia la habilidad para seleccionar e implementar la mejor arquitectura tecnológica para las necesidades específicas del cliente.
  `,
    technologies: [
      "Electron.js",
      "Web App",
      "Windows App",
      "Node.js",
      "MongoDB",
      "TailwindCSS",
      "Logistics Management"
    ],
  },
  "Canela-Cakes-menu": {
    image: "/images/Canela.png",
    shortDescription: "Menú Virtual (SPA) con UX avanzada y Herramienta Open Source de Generación de Códigos QR Personalizados.",
    longDescription: `
## El Desafío
Digitalizar la carta de una cafetería para reducir costes de impresión y facilitar las actualizaciones, a la vez que se ofrecía una experiencia de cliente fluida y se incorporaba un elemento de *branding* personalizado (QR dentro de un diseño de taza).

## La Solución: Una Experiencia de Usuario Superior y Desarrollo de una Herramienta Propia

### 1. Menú Virtual (Single Page Application - SPA)
Desarrollé una carta virtual accesible vía QR con un enfoque intenso en la experiencia de usuario (UX):

* **Navegación Inteligente:** Implementación de un \`scrollview\` que sincroniza dinámicamente el desplazamiento entre secciones con el \`select\` de navegación superior. Esto permite al usuario tanto el descubrimiento mediante *scroll* como la navegación rápida.
* **Utilidad Adicional:** Incorporación de un botón flotante que permite a los clientes **copiar la clave WiFi con un solo click** o compartirla mediante un Código QR.

### 2. Herramienta de QR Personalizado (*Open Source*)
Debido a que las soluciones comerciales de QR con estilo son costosas y a menudo incluyen rastreadores, desarrollé mi propia aplicación para crear Códigos QR estilizados.

* **Personalización Completa:** Permite aplicar colores, formas, marcos y textos personalizados para satisfacer requisitos de *branding*.
* **Valor para la Comunidad:** Esta aplicación fue liberada como código abierto, ofreciendo una solución de *branding* libre y sin rastreo.

---

## Valor Agregado
Este proyecto demuestra una profunda comprensión de UX en SPAs y la habilidad para desarrollar herramientas complementarias de nivel empresarial para satisfacer requisitos de *branding* específicos de un cliente.
    `,
    technologies: [
      "React.js",
      "CSS",
      "HTML",
      "Tailwind CSS",
      "API QR Code Generator",
      "UI/UX Design"
    ],
  },
  "discordBot-Musicologo": {
    image: "/images/discordBot.png",
    shortDescription: "Bot de Discord modular y escalable para gestión de comunidades y entretenimiento, construido con Node.js y Discord.js.",
    longDescription: `
## El Desafío
Crear un Bot de Discord robusto y escalable para la gestión de comunidades, que ofreciera entretenimiento (música) y herramientas de administración, utilizando la arquitectura moderna de Discord.js.

## La Solución: Bot Multifuncional con Arquitectura Modular

Desarrollé un Bot utilizando **Node.js** y **Discord.js**, implementando una estructura de código limpia y modular que facilita el mantenimiento y la expansión de comandos.

### Arquitectura Técnica Avanzada
* **Carga de Comandos Dinámica:** Implementación de un sistema recursivo para la **carga automática de comandos (slash commands)** desde múltiples subdirectorios, garantizando la escalabilidad del proyecto.
* **Integración y Despliegue (REST API):** Uso de la librería **@discordjs/rest** para el registro global de comandos en cada servidor, garantizando la compatibilidad y la eficiencia.
* **Manejo de Eventos Complejo:** Lógica robusta para la gestión de interacciones ('interactionCreate), diferenciando entre comandos *slash* y eventos de botones ('isButton') para funcionalidades interactivas (como la gestión de la cola de música).

### Funcionalidades
* **Reproductor de Música:** Sistema de cola funcional que consume APIs de audio externas, manejando la reproducción y los controles de manera asíncrona.
* **Gestión de Tickets:** Módulo para la creación y manejo de *tickets* de soporte, facilitando la organización del staff.
* **Comandos Personalizables:** Respuestas configurables para comandos comunes.

---

## Valor Agregado
Este proyecto demuestra un dominio avanzado de **Node.js, programación asíncrona y la gestión de APIs de eventos en tiempo real**. El diseño modular y la solución elegante para la carga de comandos con **ES Modules** reflejan una comprensión profunda de las mejores prácticas de desarrollo de *backend*.`,
    technologies: [
      "Node.js",
      "Discord.js",
      "API REST",
      "Asynchronous Logic",
      "Command Handler",
      "API Integration"
    ],
  },
  "Artemisa": {
    image: "/images/artemisa-dashboard.png",
    shortDescription: "Sistema Integral E-commerce y ERP ligero. Plataforma Full-Stack (React/Node.js) con gestión de inventario, presupuestos en tiempo real y conversión de divisa (USD/ARS).",
    longDescription: `
## El Desafío
Crear una plataforma de ventas de alto impacto para el lanzamiento inicial de un local de revestimientos de PVC, acompañada de un sistema de gestión interna (ERP ligero) que garantizara el control total sobre el inventario, ventas y finanzas en un entorno de divisa volátil.

## La Solución: E-commerce de Alto Impacto + Windows App de Gestión

Desarrollé una solución *Full-Stack* con dos componentes principales: el *E-commerce público* y un *Panel de Administración* convertido a aplicación de escritorio.

### I. Backend y Gestión de Lógica de Negocio
* **Base de Datos (MongoDB):** Estructura relacional completa con colecciones clave (products, carts, purchases, users, ventas) para un seguimiento detallado del ciclo de vida del producto y del cliente.
* **Flujo de Divisa Dólar/Peso (AR$):** Integración crítica con la **API de Banco Nación** para la cotización del dólar. El valor se obtiene y se **cachea cada 8 horas** para garantizar la estabilidad de los precios y la resiliencia del sistema ante caídas de la API.
* **Seguridad:** Autenticación robusta (JWT y Login con Google) con un sistema de roles flexible para el administrador único, pero con capacidad de elevar el rol de otros usuarios si es necesario.

### II. Sistema de Gestión (Windows App con Electron.js)
El panel de control fue encapsulado en una **aplicación de escritorio Windows (Electron.js)** para proporcionar un entorno de trabajo estable y dedicado al personal de la empresa.
* **Presupuestador Avanzado:** Herramienta clave que permite la creación de un "pseudo-carrito" para presupuestos en vivo, mostrando el precio final en AR$ calculado con el dólar del momento.
* **Control de Ventas y Stock:** Al marcar un presupuesto como VENDIDO, el sistema **descuenta automáticamente los productos del inventario** y registra la transacción en el historial ('ventas').
* **Manejo de Presupuestos (Manual/Digital):** Los presupuestos no concretados se imprimen por duplicado para la persistencia manual. Una vez concretados, se recrean y guardan en la DB para el **manejo histórico de ventas**.
* **Histórico con Filtros:** La aplicación de escritorio incluye un histórico de ventas con filtros avanzados por fecha, comprador y producto.

---

## Valor Agregado
Este proyecto demostró la habilidad para crear **soluciones empresariales que perduran** (el sistema de gestión sigue siendo el centro de operaciones) y la capacidad de utilizar **arquitecturas híbridas (Web App + Electron)** para ofrecer la mejor experiencia y eficiencia al cliente.
    `,
    technologies: [
      "Node.js",
      "React.js",
      "Electron.js",
      "Postman",
      "MongoDB",
      "JWT Authentication",
      "Tailwind CSS",
      "API Integration",
      "Inventory Management",
    ],
  },
};
