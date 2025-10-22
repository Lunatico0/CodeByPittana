import React from "react";
import ButtonBase from "./ButtonBase";

type Props = React.ComponentProps<typeof ButtonBase>;

export default function ButtonSecondary({ className, ...props }: Props) {
  return (
    <ButtonBase
      {...props}
      className={`bg-secondary border border-primary text-primary hover:bg-primary/10 ${className}`}
    />
  );
}
