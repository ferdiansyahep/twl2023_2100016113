import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const AboutPage = () => {
  return (
    <Container className='justyfi-content-center'>
        <Col sm={12} md={6}>
          <h2>About Us</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce bibendum lorem eu mauris ultrices faucibus. Sed auctor nunc sed ex laoreet, id commodo sapien faucibus. Maecenas eu ex sed justo feugiat dignissim vel non velit. Duis non ex vel lorem bibendum mollis. </p>
          <p>Proin ultrices velit vel turpis porttitor, non mollis dolor tincidunt. Duis vitae mauris vel nunc semper tincidunt id at massa. Ut nec urna a ipsum euismod dictum. Praesent consequat sapien eget mi vehicula malesuada. Nulla facilisi.</p>
        </Col>
    </Container>
  );
};

export default AboutPage;
