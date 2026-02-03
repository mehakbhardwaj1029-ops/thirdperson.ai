import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const SparkRainParticles = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        fpsLimit: 60,

        particles: {
          // 🔑 REQUIRED
          number: {
            value: 140, // total particles (sharp + blurred)
          },

          shape: {
            type: "circle",
          },

          position: {
            x: 50,
            y: 0,
          },

          // 🔹 GROUPS
          groups: {
            sharp: {
              number: { value: 140 },
              opacity: { value: { min: 0.9, max: 1 } },
              size: { value: { min: 1.2, max: 1.8 } },
              shadow: { enable: false },  
              move: { speed: { min: 0.4, max: 1.3 } },
            },

            blurred: {
              number: { value: 30 },
              opacity: { value: { min: 0.15, max: 0.4 } },
              size: { value: { min: 2.5, max: 4.5 } },
              shadow: {
                enable: false,
                color: "#ffffff",
                blur: 14,
              },
              move: { speed: { min: 0.1, max: 0.5 } },
            },
          },

          // 🔹 COMMON BEHAVIOR
          color: { value: "#ffffff" },

          move: {
            enable: true,
            direction: "bottom",
            outModes: { default: "out" },
          },
        },

        detectRetina: true,
      }}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
      }}
    />
  );
};

export default SparkRainParticles;
