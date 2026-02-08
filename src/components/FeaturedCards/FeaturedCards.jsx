import React from "react";
import "./FeaturedCards.css";
import { useNavigate } from "react-router-dom";

const data = [
  {
    icon: "🌿",
    title: "MBTI Analysis",
    desc: "Calm, grounded experiences inspired by nature.",
    bg: "rgba(255, 255, 255, 0.08)",
    route: "/mbti-analysis",
  },
  {
    icon: "🍂",
    title: "Me Date",
    desc: "Organic moments designed to slow you down.",
    bg: "rgba(173, 216, 230, 0.15)   ",
    route: "/me-date",
  },
  {
    icon: "🌱",
    title: "Post Breakup Mood Swings",
    desc: "Gentle growth through mindful interactions.",
    bg: "rgba(0, 255, 255, 0.12)",
    route: "/post-breakup",
  },
  {
    icon: "🌳",
    title: "Work on yourself",
    desc: "Deep connection with serene environments.",
    bg: "#559ca2e2   ",
    route: "self-introspection",
  },
  {
    icon: "🍃",
    title: "Confused About your relationship",
    desc: "A space to breathe, pause, and feel present.",
    bg: "rgba(180, 160, 255, 0.12)",
    route: "relationship-confusion",
  },
  { 
    icon: "🌾",
    title: "Are these signs of a red flag",
    desc: "Soft, balanced experiences shaped by nature.",
    bg: "rgba(0, 140, 255, 0.18)",
    route: "/red-flags",
  },
];

const FeaturedCards = () => {

const navigate = useNavigate();

  return (
    <section className="features">
      <div className="card-grid">
        {data.map((item, index) => (
          <div
            className="feature-card"
            key={index}
            style={{ "--card-color": item.bg }}
            onClick={()=>navigate(item.route)}
          >
            <div className="icon-wrap">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedCards;
