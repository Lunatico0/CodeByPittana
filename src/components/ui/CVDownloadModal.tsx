"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ButtonPrimary from './ButtonPrimary';
import ButtonSecondary from './ButtonSecondary';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

interface CVDownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const cvOptions = [
  {
    lang: 'Español',
    layout: 'Sidebar (Visual)',
    fileName: '/downloads/cv/patricio_pittana_cv(ES)-visual.pdf',
    onlineLink: '/cv-online/es-visual',
  },
  {
    lang: 'English',
    layout: 'Sidebar (Visual)',
    fileName: '/downloads/cv/patricio_pittana_cv(EN)-visual.pdf',
    onlineLink: '/cv-online/en-visual',
  },
  {
    lang: 'Español',
    layout: 'Harvard (Simple)',
    fileName: '/downloads/cv/patricio_pittana_cv(ES)-harvard.pdf',
    onlineLink: '/cv-online/es-harvard',
  },
  {
    lang: 'English',
    layout: 'Harvard (Simple)',
    fileName: '/downloads/cv/patricio_pittana_cv(EN)-harvard.pdf',
    onlineLink: '/cv-online/en-harvard',
  },
];

const CVDownloadModal: React.FC<CVDownloadModalProps> = ({ isOpen, onClose }) => {
  const [selectedLang, setSelectedLang] = useState<'Español' | 'English'>('Español');
  const [selectedLayout, setSelectedLayout] = useState<'Sidebar (Visual)' | 'Harvard (Simple)'>('Sidebar (Visual)');

  const selectedOption = cvOptions.find(
    (opt) => opt.lang === selectedLang && opt.layout === selectedLayout
  );

  const handleDownload = () => {
    if (selectedOption) {
      const link = document.createElement('a');
      link.href = selectedOption.fileName;
      link.setAttribute('download', selectedOption.fileName.split('/').pop() || 'patricio_pittana_cv.pdf');
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      onClose();
    }
  };

  const handleViewOnline = () => {
    if (selectedOption) {
      window.open(selectedOption.onlineLink, '_blank');
      onClose();
    }
  };


  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose} // Cierra al hacer clic fuera
        >
          <motion.div
            className="bg-bgDark text-text p-6 rounded-lg shadow-2xl max-w-sm w-full border border-accent/20"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-text">Descargar CV</h3>
              <button onClick={onClose} className="text-tertiary hover:text-text transition-colors">
                <CloseRoundedIcon />
              </button>
            </div>

            {/* --- SELECCIÓN DE IDIOMA --- */}
            <div className="mb-6">
              <p className="text-sm text-text/80 mb-2">Seleccione el idioma:</p>
              <div className="flex gap-4">
                {['Español', 'English'].map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setSelectedLang(lang as 'Español' | 'English')}
                    className={`flex items-center gap-2 p-2 rounded-lg transition-colors ${
                      selectedLang === lang ? 'bg-accent/20 text-accent font-semibold' : 'bg-secondary/50 text-text/80 hover:bg-secondary'
                    }`}
                  >
                    <span className={`w-3 h-3 rounded-full border-2 ${selectedLang === lang ? 'border-accent bg-accent' : 'border-secondary bg-transparent'}`}></span>
                    {lang}
                  </button>
                ))}
              </div>
            </div>

            {/* --- SELECCIÓN DE FORMATO (Layout) --- */}
            <div className="mb-8">
              <p className="text-sm text-text/80 mb-2">Seleccione el formato:</p>
              <div className="flex flex-col gap-2">
                {['Sidebar (Visual)', 'Harvard (Simple)'].map((layout) => (
                  <button
                    key={layout}
                    onClick={() => setSelectedLayout(layout as 'Sidebar (Visual)' | 'Harvard (Simple)')}
                    className={`flex justify-start items-center gap-2 p-2 rounded-lg transition-colors text-sm ${
                      selectedLayout === layout ? 'bg-accent/20 text-accent font-semibold border-accent' : 'bg-secondary/50 text-text/80 hover:bg-secondary border-transparent'
                    }`}
                  >
                    <span className={`w-3 h-3 rounded-full border-2 ${selectedLayout === layout ? 'border-accent bg-accent' : 'border-secondary bg-transparent'}`}></span>
                    {layout}
                  </button>
                ))}
              </div>
            </div>


            {/* --- ACCIONES --- */}
            <div className="flex justify-between gap-4 text-nowrap">
              <ButtonPrimary onClick={handleDownload} className="flex-1 bg-accent hover:bg-accent/80 transition-colors">
                Descargar (.pdf)
              </ButtonPrimary>
              <ButtonSecondary onClick={handleViewOnline} className="flex-1 bg-secondary hover:bg-secondary transition-colors border-none text-text">
                Ver Online
              </ButtonSecondary>
            </div>

             <p className="text-xs text-text/60 mt-4 text-center">
                Descargando: {selectedOption?.fileName.split('/').pop()}
            </p>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CVDownloadModal;
