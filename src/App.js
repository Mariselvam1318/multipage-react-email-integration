import React from 'react'
import { Col, Container, Image, Nav, Navbar} from 'react-bootstrap'
import './App.css'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home.js'
import About from './About.js'
import Services from './Services.js';
import Contact from './contact.js'
function App() {
  return (
     <Router>
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
      <Navbar.Brand>
        <Col xs={6} md={4}>
          <Image src="https://img.freepik.com/free-vector/detailed-travel-logo_23-2148627268.jpg" roundedCircle className="navbar-logo"/>
        </Col>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto navhead">
        <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/about">About Us</Nav.Link>
              <Nav.Link as={Link} to="/services">Services</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  <Container className="p-3">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Container>
    </Router>
  )
}

export default App