import React from "react";
import { Card, ListGroup } from "react-bootstrap";

import { animated } from "react-spring";
const TechExp = ({
  handleClick,
  animation,
  handleMouseLeave,
  handleMouseEnter,
  buttonStyle,
  buttonCenter,
}) => {
  return (
    <>
      <animated.div style={animation}>
        <Card className="my-3 shadow" style={{ backgroundColor: "#bfbfbf" }}>
          <Card.Header>My Technical Experience🧑‍💻</Card.Header>
          <Card.Body>
            <ListGroup className="mb-4">
              <ListGroup.Item style={{ backgroundColor: "#d9d9d9" }}>
                Having 3+ years of experience in the IT Industry Developing
                Java/J2EE applications
              </ListGroup.Item>
              <ListGroup.Item style={{ backgroundColor: "#d9d9d9" }}>
                Having 3+ years of technical expertise in Developing Java
                frameworks like Hibernate and Spring, Restful Web Service, JPA,
                and ReactJS.
              </ListGroup.Item>
              <ListGroup.Item style={{ backgroundColor: "#d9d9d9" }}>
                Having 3+ years of technical expertise in developing
                applications using Spring Boot and Microservices.
              </ListGroup.Item>

              <ListGroup.Item style={{ backgroundColor: "#d9d9d9" }}>
                Possess good working experience in GIT, Jira, ADO(Azure DevOps),
                Jenkins, SonarQube, Coverity, and Pivotal Cloud Foundry (PCF).
              </ListGroup.Item>

              <ListGroup.Item style={{ backgroundColor: "#d9d9d9" }}>
                Having Proficient knowledge in SQL, and MySQL server creating
                tables.
              </ListGroup.Item>

              <ListGroup.Item style={{ backgroundColor: "#d9d9d9" }}>
                Ability to work effectively both as an individual and as part of
                a team.
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
  );
};

export default TechExp;
