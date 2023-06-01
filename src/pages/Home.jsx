import React from 'react';
import {Card, Col, Row} from 'react-bootstrap'
import image from "../images/home.jpg"

const Home = ({ user }) => {
  return (
    <div >
       <h2 style={{ textAlign: "center" }}> Welcome Beauty Site  </h2>    
      <div style={{backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        minHeight: "70vh"}}>
     </div>    
    </div>
  );
};

export default Home;