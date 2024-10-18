import {React,useState} from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
// import StartRenewal from '../pages/StartRenewal';
import '../App.css'; // Custom CSS file for extra styling
import logo from '../images/logo2.png'

const CustomNavbar = () => {
  const [activeTab, setActiveLink] = useState("#ShowDifferences"); // Set default active link

  const handleSetActive = (tabName) => {
    setActiveLink(tabName);  // Update the active link when clicked
  };
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
                  <Nav className="mr-auto nav-link">
                  <NavLink
              exact to ="./StartRenewal"
              className={`btn ${activeTab === "#StartRenewal" ? "btn-primary active" : ""} mx-2`}
              onClick={() => handleSetActive("#StartRenewal")}
            >
              Start Renewal
            </NavLink>
            <NavLink 
              to="./ShowDifferences"
              className={`btn ${activeTab === "#ShowDifferences" ? "btn-primary active" : ""} mx-2`}
              onClick={() => handleSetActive("#ShowDifferences")}
            >
              Show Differences
            </NavLink> 
            </Nav>
        
      </Navbar>
    </div>
  );
};

export default CustomNavbar;
