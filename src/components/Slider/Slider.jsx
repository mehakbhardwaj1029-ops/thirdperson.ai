import React, { useEffect, useState, useRef } from 'react'
import gsap from "gsap";
import "./Slider.css";

const labels = ["homie", "partner", "friend", "stranger", "neutral"];
const gradients = [
  "linear-gradient(160deg,   #f46c7a, #c73943, #5a1025)",
  "linear-gradient(160deg,   #f08c5a, #b4532d, #5a2a10)",
  "linear-gradient(160deg, #7fa1f7, #4a63c7, #1f2b5a)",
  "linear-gradient(160deg,   #4cc3a1, #1e8b73, #0b3d35)",
  "linear-gradient(160deg,   #9b9b9b, #555555, #1f1f1f)"
];

const Slider = () => {
  const boxesRef = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  // 🔹 Animate boxes whenever active index changes
  useEffect(() => {
    boxesRef.current.forEach((box, index) => {
      if (!box) return;

      const distance = index - activeIndex;

      if (distance === 0) {
        gsap.to(box, {
          scale: 1.2,
          y: -20,
          x: 0,
          opacity: 1,
          zIndex: 2,
          duration: 0.5,
          boxShadow: "0 30px 60px rgba(0,0,0,0.45)",
          ease: "power3.out",
        });
      } else {
        gsap.to(box, {
          scale: 1,
          y: 0,
          x: distance * 20,
          opacity: 0.6,
          zIndex: 1,
          duration: 0.5,
          ease: "power3.out",
        });
      }
    });
  }, [activeIndex]);

  // 🔹 AUTO SLIDE (no hover interruption)
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % labels.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  // 🔹 PREVIOUS BUTTON STILL WORKS
  const prevSlide = () => {
    setActiveIndex((prev) =>
      prev === 0 ? labels.length - 1 : prev - 1
    );
  };

  return (
    <div className="slider">      
      <div className="slides">
        {labels.map((label, i) => (
          <div
            key={i}
            className="box"
            ref={(el) => (boxesRef.current[i] = el)}
            style={{ background: gradients[i] }}
          >
            {label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
