"use client";

import { AnimatePresence, motion } from "framer-motion";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

interface ModalBaseProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

export default function ModalBase({ isOpen, onClose, title, children }: ModalBaseProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="bg-bgDark text-text p-6 rounded-lg shadow-2xl max-w-2xl w-auto border border-accent/20"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            {title && (
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-text">{title}</h3>
                <button onClick={onClose} className="text-tertiary hover:text-text transition-colors">
                  <CloseRoundedIcon />
                </button>
              </div>
            )}

            <div className="max-h-[70vh] overflow-y-auto">{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
