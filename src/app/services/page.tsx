// app/services/page.tsx

import React from 'react';
import { Metadata } from 'next';
import { pricingPlans, faqs } from '@data/servicesData';
import PricingCard from '@components/Services/PricingCard';
import FAQItem from '@components/Services/FAQItem';

export const metadata: Metadata = {
  title: "Servicios y Precios | Patricio Pittana",
  description: "Planes de desarrollo Fullstack: Starter, Pro y Growth. Descubre la solución que mejor se adapta a tu proyecto.",
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-12 pb-20">

      <header className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-white">
          Inicia tu Proyecto <span className="text-primary-500">Hoy</span>
        </h1>
        <p className="text-xl text-text/70 max-w-3xl mx-auto">
          Planes flexibles de desarrollo web Fullstack y consultoría, diseñados para escalar desde la idea inicial hasta el crecimiento continuo.
        </p>
      </header>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-20 md:gap-8 justify-center items-center">
          {pricingPlans.map((plan) => (
            <PricingCard key={plan.id} {...plan} />
          ))}
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">
          Preguntas <span className="text-primary-500">Frecuentes</span>
        </h2>
        <div className="bg-secondary/40 backdrop-blur-sm rounded-2xl p-6 md:p-10 space-y-2 border border-accent/40">
          {faqs.map((faq) => (
            <FAQItem key={faq.id} faq={faq} />
          ))}
        </div>
      </section>

    </div>
  );
}
