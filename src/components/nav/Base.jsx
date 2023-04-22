import { Container } from "react-bootstrap";
import Footer from "./Footer";

import { TypeAnimation } from "react-type-animation";

const Base = ({ data, children }) => {
  let MyStyle = {
    height: "200px",
  };

  return (
    <div
      style={{
        backgroundColor: "#c2c2d6",
      }}
    >
      <Container
        fluid
        className="bg-dark text-white pg-5 text-center d-flex align-items-center justify-content-center"
        style={MyStyle}
      >
        <TypeAnimation
          sequence={[
            `Hello there 🙋‍♂️`, // Types 'One'
            2000, // Waits 1s
            "Am Rabiroshan Shubhankar 🧑‍💻", // Deletes 'One' and types 'Two'
            3000, // Waits 2s
            `You are in ${data} 😎`, // Types 'Three' without deleting 'Two'
            2000,
            () => {
              console.log("Sequence completed"); // Place optional callbacks anywhere in the array
            },
          ]}
          wrapper="span"
          cursor={true}
          repeat={Infinity}
          style={{ fontSize: "2em", display: "inline-block" }}
        />
      </Container>

      {children}
      <Footer />
    </div>
  );
};

export default Base;
