import React from 'react';
import { Container } from 'react-bootstrap';

function Footer() {
  return (
    <footer className="bg-dark text-light py-3">
      <Container className="d-flex justify-content-between align-items-center">
        <div>
          <p>&copy; 2023 My Website</p>
        </div>
        <div>
          <p>@ferdiansyahep😀</p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
