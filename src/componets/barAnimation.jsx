// BarAnimation.jsx
import React from "react";
import "./barAnimation.css";

const BarAnimation = () => {
  // Heights and widths of the bars as per the image
  const barHeights = [
    100, 60, 80, 120, 50, 90, 60, 100, 40, 80,
    50, 100, 50, 70, 120, 50, 120, 70, 40, 110,
    100, 60, 80, 120, 50, 90, 60, 100, 40, 80,
    50, 100, 50, 70, 120, 50, 120, 70, 40, 110,
  ];
  
  const barWidths = [
    2, 1, 1.4, 2, 3, 2.5, 1.2, 1.5, 1, 3,
    0.5, 1, 2.1, 1.1, 2.1, 1, 3, 1.1, 2.2, 2.5,
    2, 1, 1.4, 2, 3, 2.5, 1.2, 1.5, 1, 3,
    0.5, 1, 2.1, 1.1, 2.1, 1, 3, 1.1, 2.2, 2.5
  ];
  
  const colors = ["#6D6D6D", "#999999", "#333333"];

  return (
    <div className="bar-container">
      {barHeights.map((height, index) => (
        <div
          key={index}
          className="bar"
          style={{
            height: `${height}px`,
            width: `${barWidths[index]}%`,
            backgroundColor: colors[index % colors.length],
            animationDelay: `${index * 0.1}s`
          }}
        ></div>
      ))}
    </div>
  );
};

export default BarAnimation;
