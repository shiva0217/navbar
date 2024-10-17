import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import '../App.css'; // Custom CSS file for extra styling
import logo from '../images/logo2.png'

const CustomNavbar = () => {
  return (
    <div className="header-wrapper">
      {/* First row with the logo and title */}
      <div className="top-bar d-flex align-items-center justify-content-between px-3 py-2">
        <div className="d-flex align-items-center">
          {/* Placeholder for the logo */}
          <img
            src= {logo}
            alt="Elevance Health Logo"
            className="logo"
          /> 
          &nbsp;&nbsp;&nbsp;<div style ={{paddingTop: "10px", marginLeft:"10px", marginRight:"10px", borderLeft:"2px solid #767676" , height: "90px"}}></div>
          <span className="site-title">Renewal Processing System</span>
        </div>
        <div className="user-info">
          Welcome <strong>AF16263</strong> | <a href="#logout">Logout</a>
        </div>
      </div>

      {/* Second row with the blue navigation bar */}
      <Navbar className="nav-bar" expand="lg">
        <Container className="p-0">
          <Nav className="mr-auto nav-links">
            <Nav.Link href="#StartRenewal">Start Renewal</Nav.Link> 
            <Nav.Link href="#ShowDifferences">Show Differences</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default CustomNavbar;
