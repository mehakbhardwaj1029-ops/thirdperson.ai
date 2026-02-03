import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import ParticlesBackground from "../Background/ParticlesBackground";
import SparkRainParticles from "../SparkRainParticles";
import Navbar from "../Navbar/Navbar";

const PageLayout = ({ children }) => {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08,
      wheelMultiplier: 1,
      smoothWheel: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  return (
    <>
      <Navbar />
      <SparkRainParticles />

      <main className="scroll-container">
        {children}
      </main>
    </>
  );
};

export default PageLayout;
