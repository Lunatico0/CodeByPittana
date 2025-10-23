import React from "react";
import ButtonBase from "./ButtonBase";
import type { ButtonBaseProps } from "@typings/buttonBase";

export default function ButtonPrimary({ className, ...props }: ButtonBaseProps) {
  return (
    <ButtonBase
      {...props}
      className={`bg-gradient-to-r from-primary to-accent text-bgDark shadow-lg shadow-primary/30 hover:opacity-90 ${className}`}
    />
  );
}
