'use client';

import { ContactData } from '@data/contact';
import { useSearchParams } from 'next/navigation';
import ButtonPrimary from '@ui/ButtonPrimary';
import FormField from '@ui/FormField';
import React, { useState, useRef } from 'react';
import toast from 'react-hot-toast';

const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);
  const searchParams = useSearchParams();
  const sourcePlan = searchParams.get('plan') || 'general';
  const isPlanSpecific = sourcePlan !== 'general';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!formRef.current) return;

    const formData = new FormData(formRef.current);
    const data = Object.fromEntries(formData.entries());

    try {
      const dataWithPlan = { ...data, source_plan: sourcePlan };
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataWithPlan),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success('¡Mensaje enviado! Me pondré en contacto contigo pronto.', {
          duration: 6000
        });
        formRef.current.reset();
      } else {
        toast.error(`Error al enviar el mensaje: ${result.message || 'Intenta de nuevo más tarde.'}`);
      }
    } catch (error) {
      console.error('Error de red/servidor:', error);
      toast.error('Ocurrió un error inesperado. Revisa tu conexión.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className='h-full flex flex-col justify-evenly'>
      <h4 className="text-2xl font-bold text-primary mb-8">
        Envíame un email
      </h4>

      {isPlanSpecific && (
        <div className="p-4 mb-6 rounded-lg bg-accent/20 border border-primary/50 text-text">
          <p className="font-semibold">
            Estás consultando por el Plan: <span className="text-primary capitalize">{sourcePlan}</span>
          </p>
          <p className="text-sm text-text/80">
            Por favor, proporciona detalles clave en tu mensaje para iniciar la cotización.
          </p>
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-4" ref={formRef}>
        {isPlanSpecific && (<FormField label="Tu Nombre Completo*" name="name" />)}
        <FormField label="Tu Email*" name="email" />
        <FormField
          label="Asunto (Ej: Propuesta de Proyecto)"
          name="subject"
          defaultValue={isPlanSpecific ? `Consulta por Plan ${sourcePlan}` : ''}
        />
        <FormField label="Tu Mensaje*" name="message" isTextArea />

        <ButtonPrimary
          as='button'
          type='submit'
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Enviando...' : ContactData.ctaLabel}
        </ButtonPrimary>
      </form>
    </div>
  );
};

export default ContactForm;
