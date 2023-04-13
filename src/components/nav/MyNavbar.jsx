import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import my_logo from "../../asserts/my_logo1.png";
import { NavLink } from "react-router-dom";

const MyNavbar = () => {
  // uder this all methods
  //function to download cv
  const downloadCV = () => {
    const url =
      "https://doc-10-5g-docs.googleusercontent.com/docs/securesc/rp0d3j0urgkg1nsfc75v0767n86cn68r/9cv1ie7e311i1fnmlksietal6m5smn0m/1681416525000/12354902163927569137/12354902163927569137/1nloQgj8zRJr7xSr5BZpq7HzNR8vkootV?e=download&ax=ALy03A5-kx98r15LETl4y7MG0z9_ZqnLy-vuiUX4SNP_VFcbYCnt3IU039y7R5F_Or4eiKpMSFVVnsfk0xBGBHCyhg7BiWPGEJfOLRwrqleP1toT2ADuk-z56Ph1_AZKAGwqxSdQ0NjVHXxEG6QjSs8YcAtcaW9wmeB62qTA3yjJRZwvGVMfdbDy9D2lUgsplMrPRMjiqoXW0JRHbNS7ZJll_u-ilR6UINFq8AXF211-M9bg0Je0eCGdBLwihH9LUHwJjxaDDgn7ZzCprLZi3SsWi0FLEKoTdNPDAyFtrhj8ApqpowgPOqUBCKg0etPf2kMRizogpMzXcRo93MCUxg9dBFxlf2CsWcvpMOrR0eGNQWtjRbkEGJmSVTULlilCLcFKA3pY_rOaWBESIdgG4CHSCsng74FoMz8FUjfTEEijsZeR-nCSQqn0Oe64iqeBEgR-k2C50PM2Y2EM-OvAeT3FVwtpf2ZU633g9Q3xxqAkeFVOedY2VRczCkZ--3OzUfARzvpYWA32f99O9Vatzt3TUakfKtV3eVuBkdrUcytr3fZwZJcVt5ZzQFHbM4T6iHiSQNNbrJ83bABZODhkHEbh-QpWMWywrZEvMUOYtaZHj_376u15Us02bgecJmwtUn5gWHujv-0nCJtxuBNQL0GIRB7eaqiEZSZQJARni6CwBAR7aKhG4qlhppJXK0M3hy0QImNXI_LVqxFe60oMdIUZe12I-hldtF5kBgUGXWjAQZpvTUgYA665_mXuC9JafOemTI4dgSriKkrdwTZXVSeTqShlMyuZKybk_vWIiqJra1LNKO7qDA9zWN5fWqryk1MdPYIZMQH6dG-z-VJgr6zQ8J49uO_WF6_uyGoXVQSF6OD_GesMGHjcnaISW6YQw-k&uuid=b05011b4-7fab-4bbe-8091-acacd43c4675&authuser=0&nonce=srmobakeb9gnk&user=12354902163927569137&hash=8us96fag0tnhojrd2i6aaj31oiqc06ss";
    // const url =
    //   "https://drive.google.com/file/d/1nloQgj8zRJr7xSr5BZpq7HzNR8vkootV/view?usp=share_link";
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
