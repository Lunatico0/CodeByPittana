import { FC } from "react";
import { techIcons } from "@icons/techIcons";
import { TechPillProps } from '@typings/techPill'

const TechPill: FC<TechPillProps> = ({ name, value }) => {
  const key = name.toLowerCase().replace(/\s+/g, "").replace(/\.+/g, "").replace(/\/+/g, "");
  const Icon = techIcons[key];

  return (
    <div
      className="flex items-center gap-2 px-3 py-1 rounded-xl border border-primary/20 bg-primary/10 text-primary text-sm font-medium transition-all duration-300 hover:bg-primary/20 hover:border-primary/40 hover:shadow-[0_0_8px_rgba(158,153,255,0.3)]"
    >
      {Icon && Icon}
      <span>{name}</span>
      {value && <span className="opacity-70 text-xs">({value}%)</span>}
    </div>
  );
};

export default TechPill;
