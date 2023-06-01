import React from 'react';

export default function About(props) {
  const slidingTextStyle = {
    overflow: 'hidden',
    animation: 'slide 10s linear infinite'
  };

  return (
   <div style={slidingTextStyle}>
        
        <h1>Under Construction</h1>
<p>This website is currently under construction. 
  We apologize for any inconvenience caused.
   Please check back soon for updates.</p>
      
      </div>
 
  );
}
