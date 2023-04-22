import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import my_logo from "../../asserts/my_logo1.png";
import { NavLink } from "react-router-dom";
import cv from "../../asserts/CV_V2023.pdf";

const MyNavbar = () => {
  // uder this all methods
  //function to download cv
  const downloadCV = () => {
    const url = cv;

    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "My CV.pdf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          <img
            src={my_logo}
            width="40"
            height="40"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Brand as={NavLink} to="/">
          rshubhankar
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* This is for servieces  */}
            {/* <Nav.Link as={NavLink} to="/services">
              Services
            </Nav.Link> */}

            {/* <NavDropdown title="Categories" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Smart Tv</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Smart Phone
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Laptop</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Monitors</NavDropdown.Item>
            </NavDropdown> */}
            <Nav.Link as={NavLink} to="/about">
              About
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact">
              Contact
            </Nav.Link>
          </Nav>
          <Nav>
            {/* <Nav.Link as={NavLink} to="/cart">
              Cart( 23 )
            </Nav.Link> */}

            <>
              <Nav.Link as={NavLink} to="/#"></Nav.Link>
              <Nav.Link onClick={downloadCV}>Downolad CV</Nav.Link>
            </>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
