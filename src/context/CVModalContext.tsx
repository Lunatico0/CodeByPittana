"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import CVDownloadModal from "@ui/CVDownloadModal";

interface CVModalContextType {
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const CVModalContext = createContext<CVModalContextType | undefined>(undefined);

export const CVModalProvider = ({ children }: { children: ReactNode }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <CVModalContext.Provider value={{ isModalOpen, openModal, closeModal }}>
      {children}
      <CVDownloadModal isOpen={isModalOpen} onClose={closeModal} />
    </CVModalContext.Provider>
  );
};

export const useCVModal = () => {
  const context = useContext(CVModalContext);
  if (!context) {
    throw new Error("useCVModal debe usarse dentro de un CVModalProvider");
  }
  return context;
};
