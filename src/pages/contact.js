import React from "react";
import my_logo from "../asserts/my_logo1.png";
import Base from "../components/nav/Base";
import {
  Alert,
  Button,
  Card,
  Col,
  Container,
  Form,
  Row,
  Spinner,
} from "react-bootstrap";
const Contact = () => {
  const contactForm = () => {
    return (
      <div>
        <Container>
          <Row>
            <Col sm={{ span: 8, offset: 2 }}>
              <Card
                className="my-3 shadow"
                style={{
                  position: "relative",
                  top: -60,
                }}
              >
                <Card.Body>
                  <div>
                    <Container className="text-center">
                      <img src={my_logo} alt="my logo" width={60} height={60} />
                    </Container>
                    <h3 className="text-center mt-2 text-muted">
                      PLEASE ENTER YOUR DETAIL MESSAGE
                    </h3>
                  </div>
                  <Alert
                    // onClose={() => {
                    //   setMyError({
                    //     isError: false,
                    //     errorData: null,
                    //   });
                    // }}
                    dismissible
                    variant="danger"
                    // show={myError.isError}
                  >
                    {/* {myError?.errorData?.response?.data?.message} */}danger
                  </Alert>
                  <Form>
                    <Form.Group className="mb-3" controlId="formPassword">
                      <Form.Label>Enter your name </Form.Label>
                      <Form.Control
                        type="userName"
                        placeholder="Enter your name "
                        // onChange={(event) => {
                        //   handleChange(event, "password");
                        // }}
                        // value={data.password}
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formName">
                      <Form.Label>Enter Email</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter here"
                        // onChange={(event) => {
                        //   handleChange(event, "email");
                        // }}
                        // value={data.email}
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formPassword">
                      <Form.Label>Enter Phone Number</Form.Label>
                      <Form.Control
                        type="number"
                        placeholder="Enter Phone Number "
                        // onChange={(event) => {
                        //   handleChange(event, "password");
                        // }}
                        // value={data.password}
                      />
                    </Form.Group>
                    <Form.Group className="md-3">
                      <Form.Label>Message</Form.Label>
                      <Form.Control
                        as={"textarea"}
                        rows={"6"}
                        placeholder="Write message in details"
                        // onChange={(event) => {
                        //   handleChange(event, "about");
                        // }}
                        // value={data.about}
                        // isInvalid={myError?.errorData?.response?.data?.about}
                      ></Form.Control>
                    </Form.Group>

                    <Container className="text-center">
                      <Button variant="success" size="sm" type="submit">
                        <Spinner
                          as="span"
                          animation="border"
                          size="sm"
                          role="status"
                          aria-hidden="true"
                        />
                        \<span>Submit</span>
                      </Button>
                      <Button
                        className="ms-2"
                        variant="danger"
                        size="sm"
                        // onClick={clearData}
                      >
                        Reset
                      </Button>
                    </Container>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    );
  };
  return <Base data={"Contacts"}>{contactForm()}</Base>;
};

export default Contact;
