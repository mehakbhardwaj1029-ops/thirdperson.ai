import React from "react";
import "./FeaturedCards.css";
import { useNavigate } from "react-router-dom";

const data = [
  {
    icon: "🧠",
    title: "MBTI Analysis",
    desc: "Understand how your mind moves through the world.",
    bg: "rgba(188, 100, 68, 0.26)",
    route: "/mbti-analysis",
  },
  {
    icon: "❤️",
    title: "Me Date",
    desc: "Spend time with yourself.",
    bg: "rgba(219, 70, 70, 0.3)   ",
    route: "/me-date",
  },
  {
    icon: "💔",
    title: "Post Breakup Mood Swings",
    desc: "For the days that feel heavy without a reason.",
    bg: "rgba(0, 255, 255, 0.12)",
    route: "/post-breakup",
  },
  {
    icon: "✨",
    title: "Work on yourself",
    desc: "Self introspection is the solution to everything.",
    bg: "#559ca284   ",
    route: "self-introspection",
  },
  {
    icon: "❓",
    title: "Confused About your relationship",
    desc: "Going through a rough phase in your relationship.",
    bg: "rgba(180, 160, 255, 0.12)",
    route: "relationship-confusion",
  },
  { 
    icon: "🚩",
    title: "Are these signs of a red flag",
    desc: "Do not let your present confusions about your partner your future regret.",
    bg: "rgba(255, 0, 0, 0.18)",
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
