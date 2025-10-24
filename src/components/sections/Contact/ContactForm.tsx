'use client';

import React, { useState, useRef } from 'react';
import { ContactData } from '@data/contact';
import FormField from '@ui/FormField';
import ButtonPrimary from '@ui/ButtonPrimary';

const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!formRef.current) return;

    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        alert('¡Gracias! Tu mensaje ha sido enviado con éxito.');
        formRef.current.reset();
      } else {
        alert(`Error al enviar el mensaje: ${result.message}`);
      }
    } catch (error) {
      console.error('Error de red/servidor:', error);
      alert('Ocurrió un error inesperado. Intenta de nuevo más tarde.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <h4 className="text-xl font-bold text-primary mb-8">
        Envíame un email
      </h4>
      <form onSubmit={handleSubmit} className="space-y-4" ref={formRef}>
        <FormField label="Tu Email*" name="email" />
        <FormField label="Asunto (Ej: Propuesto de Proyecto)" name="subject" />
        <FormField label="Tu Mensaje*" name="message" isTextArea />

        <ButtonPrimary
          as='button'
          type='submit'
          disabled={isSubmitting}
          className='!items-end'
        >
          {isSubmitting ? 'Enviando...' : ContactData.ctaLabel}
        </ButtonPrimary>
      </form>
    </>
  );
};

export default ContactForm;
