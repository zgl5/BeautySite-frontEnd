import React, { useEffect, useState } from 'react';
import { Card, Col, Row} from 'react-bootstrap';

const baseURL = `https://beautysite-backend.onrender.com/procedure`
//const baseURL = `http://localhost:3001/procedure`

export default function ProcedurePage(props) {
  const [procedure, setProcedure] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(baseURL);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        console.log('Fetched data:', data);
        setProcedure(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <Row xs={1} md={2} className="g-4">
      {procedure.map((item) => (
        <Col key={item.type}>
          <Card> 
          <Card.Img variant="top" src={item.img} />
          <Card.Body>
              <Card.Title>{item.type}</Card.Title>
              <Card.Text> {item.description}{item.price}</Card.Text>
             
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

