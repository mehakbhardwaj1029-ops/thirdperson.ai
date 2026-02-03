import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      init={particlesInit}
      options={{
        fullScreen: { enable: true }, // 🔥 MUST be true
        fpsLimit: 60,

        particles: {
          number: {
            value: 200,
            density: { enable: true, area: 800 },
          },
          color: {
            value: ["#ff4d4d", "#ffd700", "#ffffff"],
          },
          opacity: { value: 0.6 },
          size: { value: { min: 1, max: 3 } },
          move: {
            enable: true,
            speed: { min: 0.4, max: 1.2 },
            direction: "bottom",
            outModes: "out",
          },
        },

        detectRetina: true,
      }}
      style={{
        position: "fixed",        // 🔥 CRITICAL
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",    // 🔥 FIX SCROLL
      }}
    />
  );
};

export default ParticlesBackground;
