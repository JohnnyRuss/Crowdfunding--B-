import React from "react";
import Container from "react-bootstrap/Container";
import NavBar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Image from "react-bootstrap/Image";

interface NavigationType {
  navRoutes: string[];
}

const Navigation: React.FC<NavigationType> = ({ navRoutes }) => {
  return (
    <NavBar expand="md" className="bg-none position-relative">
      <Container fluid="lg">
        <NavBar.Brand>
          <Image src="/assets/logo.svg" />
        </NavBar.Brand>
        <NavBar.Toggle aria-controls="main-nav" className="bg-white"/>
        <NavBar.Collapse id="main-nav" className="bg-nav bg-sm-none pos-fx pos-sm-unset start-1rem end-1rem top-5rem  rounded-small shadow-large p-1rem position-sm-relative start-sm-0 end-sm-0 top-sm-0 rounded-sm-0 shadow-sm-none p-sm-0 z-20">
          <Nav className="ms-auto text-app-black text-sm-app-white text-capitalize">
            {navRoutes.map((route) => (
              <Nav.Link key={route} href={`#${route}`}>
                {route}
              </Nav.Link>
            ))}
          </Nav>
        </NavBar.Collapse>
      </Container>
    </NavBar>
  );
};

export default Navigation;
