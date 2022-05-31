import { Route, Routes } from "react-router-dom";
import "../style.css";
import HomePagina from "./homepagina";
import CV from "./cv";
import Contact from "./contact";
import WieBenIk from "./wiebenik";
import Documenten from "./documenten";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { LinkContainer } from "react-router-bootstrap";

const Routing = () => {
  return (
    <Routes className="mt-4">
      <Route exact path="/cv" element={<CV />} />
      <Route exact path="/contact" element={<Contact />} />
      <Route exact path="/wiebenik" element={<WieBenIk />} />
      <Route exact path="/documenten" element={<Documenten />} />
      <Route path="/" element={<HomePagina />} />
    </Routes>
  );
};

const NavBarWithBootstrap = (props) => {
  return (
    <Navbar bg="dark" expand="lg" variant="dark">
      <LinkContainer to={"/"}>
        <Navbar.Brand>Bram Ooms</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav>
          <LinkContainer exact to="/">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/cv">
            <Nav.Link>CV</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/contact">
            <Nav.Link>Contact</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/wiebenik">
            <Nav.Link>Wie ben ik?</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/Documenten">
            <Nav.Link>Documenten</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export { Routing, NavBarWithBootstrap };
