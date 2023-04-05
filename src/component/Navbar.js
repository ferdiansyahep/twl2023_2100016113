import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';


const NavScrollExample = () => {

  return (
    <Navbar bg="light" expand="lg">
      <div class="container px-4 px-lg-5">
              <a class="navbar-brand" href="#page-top">Manguts</a>
              <button class="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
              <div class="collapse navbar-collapse" id="navbarResponsive">
                  <ul class="navbar-nav ms-auto my-2 my-lg-0 ">
                      <li className='nav-item active m-1'><NavLink to="/about">About</NavLink></li>
                      <li className='nav-item active m-1'><NavLink to="/Services">Services</NavLink></li>
                      <li className='nav-item active m-1'><NavLink to="/Services">Portofolio</NavLink></li>

                      <li className='nav-item active m-1'><NavLink to="/Services">Contact </NavLink></li>
                  </ul>
              </div>
          </div>
    </Navbar>
  );
}

export default NavScrollExample;