import React, { useEffect } from "react";
import "./StarsBackground.css";

const StarsBackground = () => {
  useEffect(() => {
    console.log("Starsbackground");

    const numStars = 300;
    const starsContainer = document.getElementById("stars");

    if (!starsContainer) {
      console.error("stars not found");
      return;
    }
    starsContainer.innerHTML = "";

    for (let i = 0; i < numStars; i++) {
      let star = document.createElement("div");
      star.className = "star";
      let x = Math.random() * window.innerWidth;
      let y = Math.random() * window.innerHeight;
      let duration = Math.random() * 5 + 5;
      star.style.left = `${x}px`;
      star.style.top = `${y}px`;
      star.style.animationDuration = `${duration}s`;
      starsContainer.appendChild(star);
    }
  }, []);

  return (
    <div className="stars-wrapper">
      <div id="stars"></div>
    </div>
  );
};

export default StarsBackground;
