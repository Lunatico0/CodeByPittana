"use client";

import React, { useState } from 'react';
// Asegúrate de la ruta correcta
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import { AnimatePresence, motion } from 'framer-motion';
import type { FAQItem } from '@typings/services';
import ReactMarkdown from "react-markdown";
import { markdownComponents } from "@lib/markdownComponents";

interface FAQItemProps {
  faq: FAQItem;
}

export default function FAQItem({ faq }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-text/10 py-4">
      <button
        className="flex justify-between items-center w-full text-left font-semibold text-lg text-text hover:text-primary-500 transition-colors duration-200 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        {faq.question}
        <ExpandMoreRoundedIcon
          className={`w-6 h-6 ml-4 transition-transform duration-300 ${isOpen ? 'transform rotate-180 text-primary-500' : ''
            }`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className='text-sm'
          >
            <ReactMarkdown components={markdownComponents}>
              {faq.answer}
            </ReactMarkdown>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
