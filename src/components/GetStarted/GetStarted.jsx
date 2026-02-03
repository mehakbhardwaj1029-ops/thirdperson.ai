import React from "react";
import { FaWhatsapp, FaInstagram, FaSnapchatGhost, FaTelegramPlane } from "react-icons/fa";
import "./GetStarted.css";

const platforms = [
  { name: "WhatsApp", icon: <FaWhatsapp />, color: "#25D366" },
  { name: "Instagram", icon: <FaInstagram />, color: "#E1306C" },
  { name: "Snapchat", icon: <FaSnapchatGhost />, color: "#FFFC00" },
  { name: "Telegram", icon: <FaTelegramPlane />, color: "#0088cc" },
];

const GetStarted = () => {
  return (
    <section className="get-started-wrapper">
      <h2 className="gs-heading">
        Upload your chat from any platform and discover
        <span> key insights for free in seconds</span>
      </h2>

      <div className="platforms">
        {platforms.map((platform, index) => (
          <div key={index} className="platform-icon" style={{ color: platform.color }}>
            {platform.icon}
            <p>{platform.name}</p>
          </div>
        ))}
      </div>

      <button className="gs-button">Get Started</button>
    </section>
  );
};

export default GetStarted;
