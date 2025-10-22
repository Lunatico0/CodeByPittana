"use client";

import React from "react";

type Props = {
  title: string;
  description: string;
  Icon?: React.ElementType;
};

export default function AboutPillar({ title, description, Icon }: Props) {
  return (
    <div className="flex items-start gap-4 p-4 rounded-xl bg-secondary/30 border border-secondary/60">
      {Icon ? (
        <div className="w-10 h-10 aspect-square flex items-center justify-center rounded-full bg-primary/10 text-primary">
          <Icon sx={{fontSize:"1em"}} />
        </div>
      ) : (
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/6 text-primary text-sm font-semibold">
          {title[0]}
        </div>
      )}
      <div>
        <h4 className="font-semibold text-white text-sm md:text-base">{title}</h4>
        <p className="text-text/70 text-sm">{description}</p>
      </div>
    </div>
  );
}
