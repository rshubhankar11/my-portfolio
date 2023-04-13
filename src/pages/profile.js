import React, { useState } from "react";
import { Button, Card, Col, Container, ListGroup, Row } from "react-bootstrap";
import Base from "../components/nav/Base";
import { useSpring, animated } from "react-spring";

const Profile = () => {
  // animation for page
  const [show, setShow] = useState(false);

  const animation = useSpring({
    transform: show ? "scale(1)" : "scale(0)",
  });

  const animationTwo = useSpring({
    transform: !show ? "scale(1)" : "scale(0)",
  });

  const handleClick = () => {
    setShow(!show);
  };

  // animation for button
  const buttonCenter = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  const [isHovered, setIsHovered] = useState(false);

  const buttonStyle = useSpring({
    background: isHovered
      ? "linear-gradient(to right, #f2f2f2, #808080)"
      : "#808080",
    color: isHovered ? "white" : "black",
    padding: isHovered ? "18px 36px" : "14px 32px",
    borderRadius: isHovered ? "40px" : "20px",
  });

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <Base>
      <Container fluid>
        <Row>
          <Col>
            {show ? (
              <>
                <animated.div style={animation}>
                  <Card
                    className="my-3 shadow"
                    style={{ backgroundColor: "#bfbfbf" }}
                  >
                    <Card.Header>My Technical Experience🧑‍💻</Card.Header>
                    <Card.Body>
                      <ListGroup className="mb-4">
                        <ListGroup.Item style={{ backgroundColor: "#d9d9d9" }}>
                          Having 3+ years of experience in the IT Industry
                          Developing Java/J2EE applications
                        </ListGroup.Item>
                        <ListGroup.Item style={{ backgroundColor: "#d9d9d9" }}>
                          Having 3+ years of technical expertise in Developing
                          Java frameworks like Hibernate and Spring, Restful Web
                          Service, JPA, and ReactJS.
                        </ListGroup.Item>
                        <ListGroup.Item style={{ backgroundColor: "#d9d9d9" }}>
                          Having 3+ years of technical expertise in developing
                          applications using Spring Boot and Microservices.
                        </ListGroup.Item>

                        <ListGroup.Item style={{ backgroundColor: "#d9d9d9" }}>
                          Possess good working experience in GIT, Jira,
                          ADO(Azure DevOps), Jenkins, SonarQube, Coverity, and
                          Pivotal Cloud Foundry (PCF).
                        </ListGroup.Item>

                        <ListGroup.Item style={{ backgroundColor: "#d9d9d9" }}>
                          Having Proficient knowledge in SQL, and MySQL server
                          creating tables.
                        </ListGroup.Item>

                        <ListGroup.Item style={{ backgroundColor: "#d9d9d9" }}>
                          Ability to work effectively both as an individual and
                          as part of a team.
                        </ListGroup.Item>

                        <ListGroup.Item style={{ backgroundColor: "#d9d9d9" }}>
                          Strong Interpersonal and Communication Skills
                        </ListGroup.Item>

                        <ListGroup.Item style={{ backgroundColor: "#d9d9d9" }}>
                          Quick learner and apply new technologies.
                        </ListGroup.Item>
                      </ListGroup>
                      <div style={buttonCenter}>
                        <animated.button
                          style={buttonStyle}
                          onMouseEnter={handleMouseEnter}
                          onMouseLeave={handleMouseLeave}
                          onClick={handleClick}
                        >
                          Back to Profile 😎
                        </animated.button>
                      </div>
                    </Card.Body>
                  </Card>
                </animated.div>
              </>
            ) : (
              <>
                <animated.div style={animationTwo}>
                  <Card
                    className="my-3 shadow"
                    style={{ backgroundColor: "#bfbfbf" }}
                  >
                    <Card.Header>Hello there 🙋‍♂️</Card.Header>
                    <Card.Body>
                      <Card.Body>
                        <Card.Text>
                          I am B Rabiroshan Shubhankar,I have over 3+ years of
                          experience as an application developer, specializing
                          in designing large-scale applications within the IT
                          industry. My proficiency in web-based technologies,
                          such as JSP, Spring, Spring Boot, Microservices,
                          Hibernate, and Restful Web Service, is exceptional.
                          Additionally, I have Servlet, exposure to developing
                          web applications using J2SE, J2EE, HTML, and ReactJS,
                          which showcases my versatile skillset.
                        </Card.Text>
                        <Card.Text>
                          My proven track record of quickly learning new skills
                          and technologies enables me to adapt to diverse
                          projects and requirements. As a result, I am a
                          valuable asset to any team. My expertise in web-based
                          technologies allows me to develop efficient and
                          reliable applications, ensuring high-quality results
                          for clients.
                        </Card.Text>
                        <Card.Text>
                          As a first-party developer, I am dedicated to
                          providing tailored solutions that meet clients' unique
                          needs. With extensive experience in designing
                          large-scale applications, I am well-equipped to handle
                          complex projects, delivering reliable and scalable
                          solutions that exceed expectations.
                        </Card.Text>
                        <div style={buttonCenter}>
                          <animated.button
                            style={buttonStyle}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            onClick={handleClick}
                          >
                            👉 Check out my Tech exp.
                          </animated.button>
                        </div>
                      </Card.Body>
                    </Card.Body>
                  </Card>
                </animated.div>
              </>
            )}
          </Col>
        </Row>
      </Container>
    </Base>
  );
};

export default Profile;
