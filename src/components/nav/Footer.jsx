import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="wrapper sticky-footer">
      <Container
        fluid
        className="bg-dark text-white text-center  justify-content-center "
      >
        <footer>
          <div className="text-light">
            <p>@rshubhankar</p>
          </div>
        </footer>
      </Container>
    </div>
  );
};

export default Footer;
