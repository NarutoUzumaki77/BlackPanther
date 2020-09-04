import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

const NavBar = ({ user }) => {
  const name = "   " + user.profile.firstName + " " + user.profile.lastName;
  return (
    <Navbar className="bg-nav" expand="sm" style={{ marginBottom: "10px" }}>
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
              Pending
            </NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/devices/assigned">
              Assigned Devices
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            {" "}
            <Nav className="mr-auto">
              <NavDropdown title={name} id="basic-nav-dropdown">
                <NavDropdown.Item as={Link} to="/" disabled>
                  Edit Profile
                </NavDropdown.Item>
                <NavDropdown.Item to="/action/3.2" disabled>
                  Edit Password
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/logout">Log Out</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Text>
        </Navbar.Collapse>
        <i className="fa fa-user" aria-hidden="true" style={{ fontSize: "25px"}}></i>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
