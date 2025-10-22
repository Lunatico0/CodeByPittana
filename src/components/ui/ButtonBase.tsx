"use client";

import React from "react";
import Link from "next/link";
import clsx from "clsx";

type ButtonBaseProps = {
  as?: "button" | "a" | "link";
  href?: string;
  children: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
};

// 🔹 Estilo base compartido entre todos los botones
const baseStyles = `
  inline-flex items-center justify-center
  px-6 py-3 rounded-xl font-bold transition-all
  active:translate-y-0.5 focus:outline-none focus:ring-0
`;

export default function ButtonBase({
  as = "button",
  href,
  children,
  className,
  onClick,
  type = "button",
  disabled = false,
}: ButtonBaseProps) {
  const classes = `${baseStyles} ${className} ${disabled ?? 'opacity-70 cursor-not-allowed'}`

  if (as === "link" && href) {
    return (
      <Link href={href} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  if (as === "a" && href) {
    return (
      <a href={href} className={classes} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} disabled={disabled} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
