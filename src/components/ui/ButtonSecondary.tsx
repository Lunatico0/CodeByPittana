import React from "react";
import ButtonBase from "./ButtonBase";
import type { ButtonBaseProps } from "@typings/buttonBase";

export default function ButtonSecondary({ className, ...props }: ButtonBaseProps) {
  return (
    <ButtonBase
      {...props}
      className={`bg-secondary border border-primary text-primary hover:bg-primary/10 ${className}`}
    />
  );
}
