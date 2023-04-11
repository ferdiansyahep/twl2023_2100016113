import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';

const Contactme = () => {
  return (
    <div className="bg-light py-5">
      <Container>
        <h1 className="text-center my-5">Contact Me</h1>
        <Row className="justify-content-center">
          <Col md={8}>
            <Form>
              <Form.Group controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>
              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>
              <Form.Group controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Enter your message" />
              </Form.Group>
              <Button variant="primary mt-3" type="submit">Submit</Button>
            </Form>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col md={4} className="text-center">
            <FaMapMarkerAlt size={40} className="mb-3" />
            <h3>Address</h3>
            <p>Jl. Sudirman No. 123, Jakarta</p>
          </Col>
          <Col md={4} className="text-center">
            <FaEnvelope size={40} className="mb-3" />
            <h3>Email</h3>
            <p>ferdiansyah2100016113@webmail.uad.ac.id</p>
          </Col>
          <Col md={4} className="text-center">
            <FaPhone size={40} className="mb-3" />
            <h3>Phone</h3>
            <p>+62 851 5681 5476</p>
          </Col>
        </Row>
      </Container>
      <footer className="mt-5">
        <p className="text-center">Copyright ©
          {new Date().getFullYear()} MyWebsite. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Contactme;