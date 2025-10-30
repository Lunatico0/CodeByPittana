"use client"

import { CVData, CvSection } from '@lib/cvData';
import RoomRoundedIcon from '@mui/icons-material/RoomRounded';
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import PhoneCallbackRoundedIcon from '@mui/icons-material/PhoneCallbackRounded';
import LinkRoundedIcon from '@mui/icons-material/LinkRounded';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ProfileImage from '@/src/components/sections/Hero/ProfileImage';
import ReactMarkdown from "react-markdown";
import { markdownComponents } from "@lib/markdownComponents";

// Interfaces (Mantenemos la definición de tipos consistente)

interface RenderedCVData extends Omit<CVData, 'summary' | 'sections' | 'sidebar'> {
  summary: string[];
  sections: CvSection[];
  sidebar: {
    titles: { stack: string, education: string, methodologies: string };
    stack: string[];
    education: { title: string; subtitle: string }[];
    methodologies: string[];
  };
  lang: 'es' | 'en';
  layout: 'visual' | 'harvard';
}

interface CvRendererProps {
  data: RenderedCVData;
}

// 1. SidebarSection: Aplicar Markdown a Títulos y Educación
const SidebarSection: React.FC<{ data: CvRendererProps['data'] }> = ({ data }) => (
  <aside className="w-full lg:w-1/3 bg-tertiary/30 p-6 text-secondary flex flex-col gap-6">
    <div className="flex flex-col items-center">
      {/* IMAGEN DEL CV */}
      <div className='size-52 -mt-6 mb-24'>
        <ProfileImage />
      </div>
      <h1 className="text-2xl font-bold">
        Patricio Ángel Pittana
      </h1>
      <p className="text-lg font-semibold text-tertiary/80">
        Full Stack & Systems Developer
      </p>
    </div>

    {/* CONTACTO - MANTENIDO COMO TEXTO SIMPLE (SIN MD) */}
    <h2 className="text-lg font-bold border-b border-primary/30 pb-1 uppercase">
      {data.lang === 'es' ? 'Contacto' : 'Contact'}
    </h2>
    <ul className="space-y-2 text-sm">
      <li>
        <RoomRoundedIcon className="inline mr-2" />
        {data.contact.location}
      </li>
      <li>
        <EmailRoundedIcon className="inline mr-2" />
        <a href={`mailto:${data.contact.email}`}>
          Email
        </a>
      </li>
      {/* <li>
        <PhoneCallbackRoundedIcon className="inline mr-2" />
        {data.contact.phone}
      </li> */}
      <li>
        <LinkRoundedIcon className="inline mr-2" />
        <a href={`https://${data.contact.portfolio}`} target="_blank" rel="noopener noreferrer">
          {data.contact.portfolio}
        </a>
      </li>
      <li>
        <GitHubIcon className="inline mr-2" />
        <a href={`https://${data.contact.github}`} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </li>
      <li>
        <LinkedInIcon className="inline mr-2" />
        <a href={`https://${data.contact.linkedin}`} target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </li>
    </ul>

    {/* STACK TECNOLÓGICO - APLICAMOS MD AL TÍTULO */}
    <h2 className="text-lg font-bold border-b border-primary/30 pb-1 uppercase">
      <ReactMarkdown components={markdownComponents} unwrapDisallowed={true}>{data.sidebar.titles.stack}</ReactMarkdown>
    </h2>
    <ul className="list-disc list-outside space-y-1 text-sm">
      {data.sidebar.stack.map((item, i) => (
        <li key={i}>
          {/* Si Stack necesita MD, descomentar y usar components */}
          {item}
        </li>
      ))}
    </ul>

    {/* EDUCACIÓN - APLICAMOS MD AL TÍTULO */}
    <h2 className="text-lg font-bold border-b border-primary/30 pb-1 uppercase">
      <ReactMarkdown components={markdownComponents} unwrapDisallowed={true}>{data.sidebar.titles.education}</ReactMarkdown>
    </h2>
    <ul className="space-y-2 text-sm">
      {data.sidebar.education.map((item, i) => (
        <li key={i}>
          <strong>
            {/* Aplicamos MD solo al título de la educación (si es necesario) */}
            {item.title}
          </strong><br />
          <span className="text-tertiary/70 text-xs">
            {/* Aplicamos MD al subtítulo de la educación */}
            <ReactMarkdown components={markdownComponents} unwrapDisallowed={true}>{item.subtitle}</ReactMarkdown>
          </span>
        </li>
      ))}
    </ul>

    {/* METODOLOGÍAS - APLICAMOS MD AL TÍTULO */}
    <h2 className="text-lg font-bold border-b border-primary/30 pb-1 uppercase">
      <ReactMarkdown components={markdownComponents} unwrapDisallowed={true}>{data.sidebar.titles.methodologies}</ReactMarkdown>
    </h2>
    <ul className="list-disc list-outside space-y-1 text-sm">
      {data.sidebar.methodologies.map((item, i) => (
        <li key={i}>
          {/* Aplicamos MD a cada metodología */}
          <ReactMarkdown components={markdownComponents} unwrapDisallowed={true}>{item}</ReactMarkdown>
        </li>
      ))}
    </ul>

  </aside>
);


// 2. MainContent: Aplicar Markdown a Resumen y Secciones
const MainContent: React.FC<{ data: CvRendererProps['data'] }> = ({ data }) => (
  <div className={`w-full ${data.layout === 'visual' ? 'lg:w-2/3' : ''} p-6 space-y-8`}>

    {/* RESUMEN PROFESIONAL - APLICAMOS MARKDOWN */}
    <div>
      <h2 className="text-2xl font-bold border-b-2 border-accent pb-1 uppercase mb-4">
        {data.lang === 'es' ? 'Resumen Profesional' : 'Professional Summary'}
      </h2>
      {data.summary.map((p, i) => (
        <div key={i} className="mb-3 text-text/85">
          {/* Usamos div para permitir que ReactMarkdown genere el <p> o el formato */}
          <ReactMarkdown components={markdownComponents}>{p}</ReactMarkdown>
        </div>
      ))}
    </div>

    {/* SECCIONES - Aplicamos Markdown a Título, Descripción y Bullets */}
    {data.sections.map((section, idx) => (
      <div key={idx}>
        {/* TÍTULO DE SECCIÓN - APLICAMOS MARKDOWN */}
        <h2 className="text-2xl font-bold border-b-2 border-accent pb-1 uppercase mb-4">
          <ReactMarkdown components={markdownComponents} unwrapDisallowed={true}>{section.title}</ReactMarkdown>
        </h2>
        {section.items.map((item, itemIdx) => (
          <div key={itemIdx} className="mb-6">
            {/* TÍTULO DEL ITEM - APLICAMOS MARKDOWN */}
            <h3 className="text-xl font-semibold text-text">
              <ReactMarkdown components={markdownComponents} unwrapDisallowed={true}>{item.title}</ReactMarkdown>
            </h3>
            {/* META - Mantenemos texto simple */}
            {item.meta && <p className="text-sm text-muted italic -mt-3 mb-2">{item.meta}</p>}

            {/* DESCRIPCIÓN - APLICAMOS MARKDOWN */}
            {item.description && (
              <div className="text-text/85 mb-2">
                <ReactMarkdown components={markdownComponents}>{item.description}</ReactMarkdown>
              </div>
            )}

            {/* BULLETS - Aplicamos Markdown DENTRO del <li> */}
            {item.bullets && (
              <ul className="list-disc list-inside space-y-1 text-text/85 ml-4">
                {item.bullets.map((bullet, bulletIdx) => (
                  <li key={bulletIdx}>
                    <ReactMarkdown
                      components={markdownComponents}
                      unwrapDisallowed={true} // Evita envolver el contenido en <p> extra
                      allowedElements={['strong', 'em']} // Solo permite negritas y cursivas dentro del LI
                    >
                      {bullet}
                    </ReactMarkdown>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    ))}

  </div>
);


const CvRenderer: React.FC<CvRendererProps> = ({ data }) => {
  const isVisual = data.layout === 'visual';
  const headerText = "Patricio Ángel Pittana";

  return (
    // Contenedor principal para simular el papel o documento
    <div className="max-w-4xl mx-auto rounded-lg shadow-xl overflow-hidden bg-secondary/30">
      {/* Estilo Harvard: Header simple */}
      {!isVisual && (
        <header className="bg-tertiary/20 text-text p-6 text-center">
          <h1 className="text-3xl font-bold">{headerText}</h1>
          <p className="text-lg">Full Stack & Systems Developer</p>
          <div className="flex gap-2 justify-center items-center text-xs mt-2 text-text/80 border-t border-text/20 pt-2">
            <a href={`mailto:${data.contact.email}`}>
              Email
            </a> |
            <a href={`https://${data.contact.portfolio}`} target="_blank" rel="noopener noreferrer">
              {data.contact.portfolio}
            </a> |
            <a href={`https://${data.contact.github}`} target="_blank" rel="noopener noreferrer">
              GitHub
            </a> |
            <a href={`https://${data.contact.linkedin}`} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </div>
        </header>
      )}

      {/* Estilo Visual: Layout de dos columnas */}
      <div className={`flex flex-col ${isVisual ? 'lg:flex-row' : ''}`}>
        {isVisual && <SidebarSection data={data} />}
        <MainContent data={data} />
      </div>
    </div>
  );
};

export default CvRenderer;
