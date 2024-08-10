import React, { useRef } from 'react';
import { Button, Form, Col, Container, Row } from 'react-bootstrap';
import './App.css';
import emailjs from '@emailjs/browser';
function Contact() {
        const form = useRef();
      
        const sendEmail = (e) => {
          e.preventDefault();
      
          emailjs
            .sendForm('service_378dczm', 'template_ou5g6y9', form.current, {
              publicKey: 'dwcZMfGL5ktJh102T',
            })
            .then(
              () => {
                console.log('SUCCESS!');
                alert('Your message has been sent successfully!');
                form.current.reset(); 
              },
              (error) => {
                console.log('FAILED...', error.text);
              },
            );
        };
  return (
    <Container className="p-3">
      <div className="container-fluid bg-info-subtle text-dark">
        <Row className="align-items-center justify-content-between">
          <Col md={6} className="mb-4 p-5 text-center">
            <h1>Contact Us</h1>
            <img
              src="https://msinuk.in/wp-content/uploads/elementor/thumbs/Contact-Us-phndoyj3w0tnpiw789cdr0mvhstunn3gej0usu4564.png"
              className="img-fluid rounded mx-auto d-block"
              alt="Contact Us"
            />
          </Col>
          <Col md={6} className="mb-4 p-5">
            <Form ref={form} onSubmit={sendEmail}>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control  name="user_name" type="text" placeholder="Enter your name" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control name="user_email" type="email" placeholder="name@example.com" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" name="message" placeholder="Enter your message here.." rows={4} />
              </Form.Group>
              <Button variant="primary" type="submit" id="button-addon2">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default Contact;
