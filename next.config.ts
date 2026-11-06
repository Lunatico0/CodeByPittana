import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    viewTransition: true,
  },
  // TireOps pasó de proyecto privado (/projects/tireops) a su repo público controlCubiertas.
  async redirects() {
    return [
      {
        source: "/projects/tireops",
        destination: "/projects/controlCubiertas",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
