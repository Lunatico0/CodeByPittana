"use client";

import { Plan } from '@typings/services';
import ButtonPrimary from '@ui/ButtonPrimary';
import ButtonSecondary from '@ui/ButtonSecondary';
import CheckCircleOutlineRoundedIcon from '@mui/icons-material/CheckCircleOutlineRounded';
import React from 'react';
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';

export default function PricingCard({ name, price, isRecommended, ctaText, features, ctaLink }: Plan) {

  const getStyle = () => {
    if (isRecommended) {
      return {
        card: 'border-2 border-primary shadow-xl shadow-primary/20 bg-secondary/70 h-[110%]',
        button: 'bg-primary text-Text hover:bg-primary',
        priceColor: 'text-primary',
      };
    }
    return {
      card: 'border border-text/20 bg-secondary/50 h-full',
      button: 'bg-text/10 text-text hover:bg-text/20',
      priceColor: 'text-text/80',
    };
  };

  const styles = getStyle();
  const ButtonComponent = isRecommended ? ButtonPrimary : ButtonSecondary;

  return (
    <div className={`relative p-6 rounded-2xl flex flex-col transition-all duration-300 ${styles.card}`}>
      {isRecommended && (
        <div className="absolute top-0 left-1/2 -translate-1/2 flex items-center px-4 py-1.5 rounded-full bg-primary text-Text text-sm font-semibold text-nowrap">
          <TrendingUpRoundedIcon className="w-4 h-4 mr-1 fill-Text" />
          Más Popular
        </div>
      )}

      <h2 className="text-3xl font-bold mb-2">{name}</h2>

      <div className="text-4xl font-extrabold my-4">
        <h3 className="text-2xl font-bold text-text">
          Desde <span className={`text-5xl ${styles.priceColor} font-josefin`}>
            {price}
          </span>
          <span className="text-lg text-text/60 ml-1">USD</span>
          <p className="text-sm text-text/50 mt-1">
            Pago único por el proyecto.
          </p>
        </h3>

      </div>

      <div className="flex-grow my-6 space-y-3">
        {features?.map((feature) => (
          <div key={feature.id} className="flex items-center">
            <CheckCircleOutlineRoundedIcon className="w-5 h-5 text-primary flex-shrink-0 my-auto" />
            <p className="text-text/90 text-sm pt-1">{feature.name}</p>
          </div>
        ))}
      </div>

      <ButtonComponent
        as='link'
        href={ctaLink}
      >
        {ctaText}
      </ButtonComponent>
    </div >
  );
}
