import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';


export default function ProcedurePage() {

  return (
    <Row xs={1} md={3} className="g-4">
     
        <Col>
          <Card> 
          <Card.Img variant="top" src={require("../images/face.jpg")}/>
          <Card.Body>
              <Card.Title style={{ textAlign: 'center', color: 'purple' }}> Classic Facial</Card.Title>
              <Card.Text> A classic facial involves the basic steps of skincare namely cleansing, steaming, exfoliation and a face mask. It focuses on hydrating, rejuvenating and maintaining skin hygiene through the removal of blackheads and whiteheads.</Card.Text>
              </Card.Body>
          </Card> 
          </Col>
          <Col>
          <Card> 
          <Card.Img variant="top" src={require("../images/facial.jpg")}/>
          <Card.Body>
              <Card.Title style={{ textAlign: 'center', color: 'purple' }}>Microcurrent Facial</Card.Title>
              <Card.Text> A microcurrent facial device is used to stimulate cell renewal and collagen production with low-volt electrical waves. </Card.Text>
              </Card.Body>
          </Card>
          </Col>
          <Col>
          <Card> 
          <Card.Img variant="top" src={require("../images/eye.jpg")} />
          <Card.Body>
              <Card.Title style={{ textAlign: 'center', color: 'purple' }}>Collagen Wave Facial</Card.Title>
              <Card.Text> A collagen wave facial has the ability to contour your features in just one sitting. Radiofrequency waves used in this non-invasive facial target tissues in the deeper layers of your skin.</Card.Text>
              </Card.Body>
          </Card>
        </Col>
      
      </Row>
  );
}

