import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import './App.css'; // Ensure your CSS file is imported

function Services() {
  return (
    <Container className="p-3">
      <h1 className='text-center mb-4'>Our Services</h1>
      <Row className="justify-content-center">
        <Col md={4} className="mb-4">
          <Card className="card-hover">
            <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmWx_Ml80Bk6b1XRwcFBdShjMJjl6eJdzwZCi1wsGttwioDhmzhe5NyZO5_uM9fITvhfg&usqp=CAU" alt="Service 1" />
            <Card.Body>
              <Card.Title>Personalized Travel Planning</Card.Title>
              <Card.Text>
                Explore our personalized travel planning service for unique experiences and customized itineraries.
              </Card.Text>
              <Button variant="primary">Learn More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card className="card-hover">
            <Card.Img variant="top" src="https://www.mensjournal.com/.image/t_share/MTk2MTM3NDU2NTM2NzI0OTk3/1380-eiffel-tower.jpg" alt="Service 2" />
            <Card.Body>
              <Card.Title>Exclusive Tours</Card.Title>
              <Card.Text>
                Discover our exclusive tours designed to cater to your specific travel interests and needs.
              </Card.Text>
              <Button variant="primary">Learn More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card className="card-hover">
            <Card.Img variant="top" src="https://img.freepik.com/premium-photo/nova-delhi-india-lotus-temple-lotus-temple-known-its-unique-architecture-generative-ia_209190-53876.jpg" alt="Service 3" />
            <Card.Body>
              <Card.Title>Adventure Packages</Card.Title>
              <Card.Text>
                Explore our adventure packages for an unforgettable travel experience.
              </Card.Text>
              <Button variant="primary">Learn More</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Services;
