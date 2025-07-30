"use client";

import { useCallback, ReactNode } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

interface Props {
  children?: ReactNode;
}

export default function ParticlesBackground({ children }: Props) {
  const particlesInit = useCallback(async (engine: any) => {
    await loadFull(engine);
  }, []);

  return (
    <div className="relative w-full h-full">
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="absolute inset-0 w-full h-full"
        options={{
          fullScreen: { enable: false },
          background: { color: { value: "#000000" } },
          fpsLimit: 60,
          particles: {
            number: { value: 80, density: { enable: true, area: 800 } },
            color: { value: "#ffffff" },
            shape: { type: "circle" },
            opacity: { value: 0.5 },
            size: { value: { min: 1, max: 3 } },
            move: {
              enable: true,
              speed: 1,
              direction: "none",
              outModes: "bounce",
            },
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
              resize: true,
            },
            modes: { repulse: { distance: 100, duration: 0.4 } },
          },
          detectRetina: true,
        }}
      />
      <div className="relative z-10 w-full h-full flex items-center justify-center">
        {children}
      </div>
    </div>
  );
}