import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

const Header = () => {
  return (
    <>
      <Navbar expand="lg">
        <Container>
          <Navbar.Brand href="/">
            <img 
              alt="Logo"
              src="https://ninegap.com/media/ninegap.png"
              height="50px"
              className="d-inline-block align-top"
              style={{margin:"10px 0px 0px 10px"}}
            />
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
