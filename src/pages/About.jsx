import React from 'react';

export default function About(props) {
  const slidingTextStyle = {
    overflow: 'hidden',
    animation: 'slide 10s linear infinite'
  };

  return (
    <>
      <h1>Welcome to About</h1>
      <div style={slidingTextStyle}>
        <p>
        <h1>Under Construction</h1>
<p>This website is currently under construction. 
  We apologize for any inconvenience caused.
   Please check back soon for updates.</p>
        </p>
      </div>
    </>
  );
}
