"use client";

import { useState } from "react";
import ButtonPrimary from "@ui/ButtonPrimary";
import ButtonSecondary from "@ui/ButtonSecondary";

const cvOptions = [
  { lang: "Español", layout: "Sidebar (Visual)", fileName: "/downloads/cv/patricio_pittana_cv(ES)-visual.pdf", onlineLink: "/cv-online/es-visual" },
  { lang: "English", layout: "Sidebar (Visual)", fileName: "/downloads/cv/patricio_pittana_cv(EN)-visual.pdf", onlineLink: "/cv-online/en-visual" },
  { lang: "Español", layout: "Harvard (Simple)", fileName: "/downloads/cv/patricio_pittana_cv(ES)-harvard.pdf", onlineLink: "/cv-online/es-harvard" },
  { lang: "English", layout: "Harvard (Simple)", fileName: "/downloads/cv/patricio_pittana_cv(EN)-harvard.pdf", onlineLink: "/cv-online/en-harvard" },
];

export default function CVContent() {
  const [selectedLang, setSelectedLang] = useState<"Español" | "English">("Español");
  const [selectedLayout, setSelectedLayout] = useState<"Sidebar (Visual)" | "Harvard (Simple)">("Sidebar (Visual)");

  const selectedOption = cvOptions.find(opt => opt.lang === selectedLang && opt.layout === selectedLayout);

  const handleDownload = () => {
    if (!selectedOption) return;
    const link = document.createElement("a");
    link.href = selectedOption.fileName;
    link.download = selectedOption.fileName.split("/").pop() || "cv.pdf";
    link.click();
  };

  const handleViewOnline = () => {
    if (!selectedOption) return;
    window.open(selectedOption.onlineLink, "_blank");
  };

  return (
    <>
      {/* Idioma */}
      <div className="mb-6">
        <p className="text-sm text-text/80 mb-2">Seleccione el idioma:</p>
        <div className="flex gap-4">
          {["Español", "English"].map(lang => (
            <button
              key={lang}
              onClick={() => setSelectedLang(lang as any)}
              className={`flex items-center gap-2 p-2 rounded-lg transition-colors ${selectedLang === lang ? "bg-accent/20 text-accent font-semibold" : "bg-secondary/50 text-text/80 hover:bg-secondary"
                }`}
            >
              <span className={`w-3 h-3 rounded-full border-2 ${selectedLang === lang ? "border-accent bg-accent" : "border-secondary"}`} />
              {lang}
            </button>
          ))}
        </div>
      </div>

      {/* Layout */}
      <div className="mb-8">
        <p className="text-sm text-text/80 mb-2">Seleccione el formato:</p>
        <div className="flex flex-col gap-2">
          {["Sidebar (Visual)", "Harvard (Simple)"].map(layout => (
            <button
              key={layout}
              onClick={() => setSelectedLayout(layout as any)}
              className={`flex justify-start items-center gap-2 p-2 rounded-lg transition-colors text-sm ${selectedLayout === layout ? "bg-accent/20 text-accent font-semibold" : "bg-secondary/50 text-text/80 hover:bg-secondary"
                }`}
            >
              <span className={`w-3 h-3 rounded-full border-2 ${selectedLayout === layout ? "border-accent bg-accent" : "border-secondary"}`} />
              {layout}
            </button>
          ))}
        </div>
      </div>

      {/* Acciones */}
      <div className="flex justify-between gap-4 text-nowrap">
        <ButtonPrimary onClick={handleDownload} className="flex-1 bg-accent hover:bg-accent/80">
          Descargar (.pdf)
        </ButtonPrimary>
        <ButtonSecondary onClick={handleViewOnline} className="flex-1 bg-secondary hover:bg-secondary border-none text-text">
          Ver Online
        </ButtonSecondary>
      </div>
    </>
  );
}
