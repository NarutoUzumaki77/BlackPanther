import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";

const NavBar = ({ user }) => {
  return (
    <Navbar className="bg-nav" expand="lg" style={{ marginBottom: "15px" }}>
      <Link to="/">
        <Navbar.Brand>Wakanda</Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavDropdown title="Device" id="basic-nav-dropdown">
            <NavDropdown.Item as={Link} to="/devices">
              All Devices
            </NavDropdown.Item>
            <NavDropdown.Item to="/action/3.2">
              Assigned Device
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as:{" "}
            <a href="#login">
              {user.profile.firstName} {user.profile.lastName}
            </a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
