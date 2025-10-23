import type { ExperienceProps } from "@typings/experience";

export const ExperienceData: ExperienceProps = {
  work: [
    {
      role: "Desarrollador Full Stack",
      company: "Tech Solutions Inc. | Remoto",
      period: "2022 - Presente",
      description: [
        "Desarrollo y mantenimiento de aplicaciones web con React, Node.js y PostgreSQL.",
        "Optimización de consultas y rendimiento del backend en un 30%.",
        "Trabajo en equipo ágil con enfoque iterativo."
      ]
    },
    {
      role: "Desarrollador Frontend",
      company: "Web Wizards | Madrid, España",
      period: "2019 - 2022",
      description: [
        "Diseño e implementación de interfaces reactivas con Vue.js y SCSS.",
        "Integración de APIs y documentación técnica.",
        "Colaboración con diseñadores UX/UI para prototipos funcionales."
      ]
    }
  ],
  education: [
    {
      title: "Grado en Ingeniería Informática",
      institution: "Universidad Politécnica de Madrid",
      period: "2014 - 2018",
      description:
        "Proyecto final centrado en machine learning y análisis de datos."
    },
    {
      title: "Bachillerato Tecnológico",
      institution: "I.E.S. San Juan Bautista",
      period: "2010 - 2014"
    }
  ]
};
