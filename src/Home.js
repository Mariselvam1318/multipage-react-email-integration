import React from 'react'
import { Button, Col, Container,Row} from 'react-bootstrap'
import './App.css'
import home from './images/home.png'
function Home() {
  return (
    <Container className="p-3">
      <div className="container-fluid  bg-info-subtle text-dark">
        <Row className="align-items-center justify-content-between">
          <Col md={6} className="mb-4 p-5 ">
            <h1>Explore the Globe</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
              Obcaecati, at corporis dolores voluptatibus temporibus similique 
              iure perspiciatis repudiandae molestias, distinctio aut pariatur 
              cumque esse aspernatur! Deleniti ab nisi excepturi dicta! Lorem 
              ipsum dolor sit amet consectetur adipisicing elit. Iusto ipsam magni
               dicta minima consequuntur saepe eos ab quisquam, molestiae aperiam quia.
              Minima corporis vel ducimus repudiandae unde error asperiores voluptatum.
            </p>
            <Button variant="primary" id="button-addon2">
              Get Started
            </Button>
          </Col>
          <Col md={6} className="mb-4 p-5">
            <img
              src={home}
              className="img-fluid rounded mx-auto d-block"
              alt="Organic Spices"
            />
          </Col>
        </Row>
      </div>
    </Container>
  )
}

export default Home