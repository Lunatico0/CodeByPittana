"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { ModalBase, CertificatesContent, CVContent } from "@ui/modals";

type ModalType = "cv" | "certificates" | null;

interface ModalContextValue {
  openModal: (type: ModalType) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextValue | undefined>(undefined);

export function GlobalModalProvider({ children }: { children: ReactNode }) {
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  const openModal = (type: ModalType) => setActiveModal(type);
  const closeModal = () => setActiveModal(null);

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}

      {activeModal === "certificates" && (
        <ModalBase
          isOpen={true}
          onClose={closeModal}
          title="Certificados de Programación"
        >
          <CertificatesContent />
        </ModalBase>
      )}

      {activeModal === "cv" && (
        <ModalBase
          isOpen={true}
          onClose={closeModal}
          title="Currículum Vitae"
        >
          <CVContent />
        </ModalBase>
      )}
    </ModalContext.Provider>
  );
}

export const useGlobalModal = () => {
  const context = useContext(ModalContext);
  if (!context)
    throw new Error("useGlobalModal debe usarse dentro de GlobalModalProvider");
  return context;
};
