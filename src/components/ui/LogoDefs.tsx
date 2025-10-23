import { LogoDefsProps } from '@typings/logoDefs'

const LogoDefs: React.FC<LogoDefsProps> = ({
  neonColors,
  bodyGradient,
  fillGradient,
}) => {
  return (
    <defs>
      {/* 🌈 Gradiente exterior (neón) - ID: a */}
      <linearGradient id="a" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={neonColors[0]} />
        <stop offset="50%" stopColor={neonColors[1]} />
        <stop offset="100%" stopColor={neonColors[2]} />
      </linearGradient>

      {/* ✨ Gradiente del borde de la P - ID: b */}
      <linearGradient id="b" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={bodyGradient[0]} />
        <stop offset="50%" stopColor={bodyGradient[1]} />
        <stop offset="100%" stopColor={bodyGradient[2]} />
      </linearGradient>

      {/* 🌑 Gradiente del relleno interno - ID: c */}
      <linearGradient id="c" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor={fillGradient[0]} />
        <stop offset="30%" stopColor={fillGradient[1]} />
        <stop offset="60%" stopColor={fillGradient[2]} />
        <stop offset="100%" stopColor={fillGradient[3]} />
      </linearGradient>

      <linearGradient id="d" gradientTransform="rotate(70)">
        <stop offset="10%" stopColor="#fff" />
        <stop offset="90%" stopColor="#000" />
      </linearGradient>

      <linearGradient
        id="gold-highlight"
        gradientTransform="rotate(30)" y1="0%" y2="30%">
        <stop offset="0%" stopColor="transparent" />
        <stop offset="75%" stopColor="#a07d00" />
        <stop offset="100%" stopColor="#ffc700" />
      </linearGradient>

      {/* 💡 Filtro de glow - ID: neon-glow */}
      <filter id="neon-glow" x="-50%" y="-50%" width="200%" height="200%">
        <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="glow1" />
        <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="glow2" />
        <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="glow3" />
        <feMerge>
          <feMergeNode in="glow1" />
          <feMergeNode in="glow2" />
          <feMergeNode in="glow3" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
  );
};

export default LogoDefs;
