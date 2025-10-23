import type { ExperienceProps } from "@typings/experience";

export const ExperienceData: ExperienceProps = {
  work: [
    {
      role: "Desarrollador Full-Stack Independiente & Consultor de Soluciones Digitales",
      company: "Freelance | Remoto (Paraná, Entre Ríos)",
      period: "Diciembre 2024 - Presente",
      description: [
        "Diseño, arquitectura y desarrollo integral de soluciones Full-Stack (MERN/PERN), priorizando la **eficiencia operativa y la optimización de costes** para clientes B2B y B2C.",
        "Implementación de **Sistemas de Gestión de Activos (SGA)** y módulos de presupuestos/ventas, con integración de **APIs de cotización de divisas (USD/ARS)** en tiempo real.",
        "Liderazgo en la **migración estratégica** de aplicaciones web a **entornos de escritorio Windows (Electron.js)** para asegurar la estabilidad, rendimiento y acceso offline del personal administrativo (ej. controlCubiertas).",
        "Optimización de *performance* mediante técnicas como **caching de datos** de API y uso estratégico de *localStorage*, superando satisfactoriamente *tests* de rendimiento.",
        "Gestión del ciclo de vida del producto: desde la validación de la **necesidad real del cliente (MVP)** en la fase inicial, hasta el *deployment* y las actualizaciones diarias en entornos de desarrollo (Vercel/GitHub)."
      ]
    }
  ],
  education: [
    {
      title: "Desarrollador Full-Stack (Certificado)",
      institution: "CoderHouse | Online",
      period: "Octubre 2023 - Enero 2025",
      description:
        "Certificación intensiva en Full-Stack Development. Especialización en Backend (Node.js/Express, Autenticación JWT, MongoDB), Frontend (React.js, JavaScript, Tailwind CSS) y Despliegue. **Proyecto final enfocado en la arquitectura de E-commerce y bases de datos**."
    },
    {
      title: "Ingeniería Electrónica (Incompleta, 3er Año)",
      institution: "UTN (Universidad Tecnologica Nacional)",
      period: "2018 - 2023",
      description:
        "Estudios avanzados en electrónica, lógica y matemáticas. Aportando una **sólida base en lógica algorítmica y resolución de problemas complejos**."
    },
    {
      title: "Bachiller en Ciencias Económicas",
      institution: "San Miguel (Hermanos Maristas)",
      period: "2004 - 2017",
      description:
        "Formación que proporciona una base fundamental en economía y gestión, facilitando la comprensión de la **lógica financiera y empresarial** detrás de las soluciones de *software*."
    }
  ]
};
