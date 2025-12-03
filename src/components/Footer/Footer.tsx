import React from 'react';
import { SPALinks, pagesLinks } from "@data/navigation";
import { ContactData } from '@data/contact';
import Navigation from '@components/Footer/Navigation';
import InfoCard from '@ui/InfoCard';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="flex items-center justify-between px-6 py-2 backdrop-blur-md sticky top-0 z-50 border-b w-full mx-auto border-t border-accent/40 bg-secondary/30 pt-10 pb-6"
    >
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-accent/30 text-center md:text-start">

          {/* --- Columna 1: Identidad y Atribución --- */}
          <div className="space-y-3 md:col-span-1">
            <h3 className="text-lg font-bold text-text">Patricio Pittana</h3>

            <p className="text-sm text-text/60">
              Desarrollador Fullstack.
            </p>

            {/* Aviso de Copyright y Atribución */}
            <p className="text-xs text-text/40 pt-2">
              © {currentYear} CodeByPittana.dev. Algunos elementos están inspirados en la comunidad.
            </p>
          </div>

          {/* --- Columna 2: Navegación --- */}
          <div className="space-y-2">
            <h3 className="text-lg font-bold text-text">Navegación</h3>
            <div className='flex flex-row space-x-20 justify-evenly md:justify-start text-start'>
              <Navigation links={SPALinks} ulClassName="space-y-2" />
              <Navigation links={pagesLinks} ulClassName="space-y-2" />
            </div>

          </div>

          {/* --- Columna 3: Contacto y Tech Stack --- */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-text">Conéctate</h3>

            {/* Íconos de Redes Sociales */}
            <div className="flex space-x-4 justify-center md:justify-start">
              <InfoCard data={ContactData.socialLinks} />
            </div>

            {/* Crédito Tecnológico */}
            <div className="text-xs text-text/50 pt-2">
              Construido con Next.js, React.js, Tailwind CSS y Framer Motion.
            </div>
          </div>
        </div>

        {/* --- Fila Inferior (Base) --- */}
        <div className="mt-4 text-center text-xs text-text/40">
          Desarrollado con paciencia desde Argentina 🇦🇷
        </div>

      </div>
    </footer>
  );
}
