import React from 'react';

export default function About(props) {
  const slidingTextStyle = {
    overflow: 'hidden',
    animation: 'slide 10s linear infinite'
  };

  const keyframes = `
    @keyframes slide {
      0% {
        transform: translateX(0%);
      }
      100% {
        transform: translateX(-100%);
      }
    }
  `;

  return (
    <div>
      <style>{keyframes}</style>
      <div style={slidingTextStyle}>
        <h1>Under Construction</h1>
        <p className="scrolling-text">
          This website is currently under construction.
          We apologize for any inconvenience caused.
          Please check back soon for updates.
        </p>
      </div>
    </div>
  );
}
