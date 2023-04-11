import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import img from './assets/img/about.jpg';


function Aboutus() {
  return (
    <div className="about-container">

    <Container>
      <Row>
        <Col min-vh-100 md={6}>
          <Image src={img} rounded fluid />
        </Col>
        <Col md={6}>
          <h2>About Us</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget tristique arcu, non pellentesque sem. Integer posuere quam vel euismod luctus. Vivamus maximus fringilla odio, id semper ipsum elementum eu. Aliquam commodo leo et ipsum malesuada tincidunt.</p>
          <p>Praesent congue libero eu ex sagittis aliquam. Suspendisse eget lobortis felis. Sed tempus semper nisl in dapibus. Vestibulum eget sagittis leo, vel efficitur lorem. Donec lobortis nibh elit, sed accumsan magna facilisis vel. In ultricies mi ut dolor commodo, a bibendum nulla tincidunt.</p>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default Aboutus;
