import React, { useState } from "react";
import "./WhenToCome.css";

const sections = [
  {
    title: "When Relationships Feel Confusing",
    colorClass: "rose",
    points: [
      "Breaks down conversations from both perspectives",
      "Highlights emotional gaps and misunderstandings",
      "Offers calm, neutral insight into relationship dynamics",
    ],
  },
  {
    title: "When You Feel Stuck Within Yourself",
    colorClass: "amber",
    points: [
      "Untangles overlapping thoughts and emotions",
      "Identifies recurring patterns over time",
      "Helps you regain clarity and direction",
    ],
  },
  {
    title: "When You Feel Alone",
    colorClass: "teal",
    points: [
      "A safe space to talk freely, without being judged or interrupted",
      "Listens patiently and responds with understanding",
      "Helps you feel heard when no one else is available",
    ],
  },
];

const WhenToCome = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="when-wrapper">
      <h2 className="main-heading">When Should You Come to Us</h2>

      <div className="cards">
        {sections.map((section, index) => (
          <div
            key={index}
            className={`glass-card ${section.colorClass} ${
              openIndex === index ? "open" : ""
            }`}
            onClick={() =>
              setOpenIndex(openIndex === index ? null : index)
            }
          >
            <div className="card-header">
              <h3>{section.title}</h3>
              <span className="chevron">
                {openIndex === index ? "−" : "+"}
              </span>
            </div>

            <div className="dropdown">
              <ul>
                {section.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhenToCome;
