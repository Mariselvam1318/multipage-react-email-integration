import React from 'react'
import { Button, Col, Container,Row} from 'react-bootstrap'
function About() {
  return (
    <Container className="p-3">
    <div className="container-fluid bg-info-subtle text-dark">
      <Row className="align-items-center justify-content-between">
        <Col md={6} className="mb-4 p-5">
          <h1>About Us</h1>
          <p>
            Welcome Traveller, your gateway to unforgettable travel experiences! With years of expertise in the travel industry, we specialize in creating tailored journeys that cater to your every desire. From serene beach getaways to adventurous expeditions, we offer a range of travel packages to suit all tastes and budgets.
          </p>
          <p>
            Our mission is to make your travel dreams a reality. Our team of passionate travel experts is dedicated to providing exceptional service, personalized recommendations, and seamless travel arrangements. Whether you’re exploring new cultures, relaxing on pristine shores, or embarking on thrilling adventures, we’re here to ensure every detail of your trip is taken care of.
          </p>
          <Button variant="primary" id="button-addon2">
            Discover More
          </Button>
        </Col>
        <Col md={6} className="mb-4 p-5">
          <img
            src="https://media.istockphoto.com/id/1286378180/vector/website-information-concept.jpg?s=612x612&w=0&k=20&c=6v9Hcbp0zp5itIPIywobPQF13YsHIQ4j_srF5VbQusY="
            className="img-fluid rounded mx-auto d-block"
            alt="Travel Experiences"
          />
        </Col>
      </Row>
    </div>
  </Container>
  )
}

export default About