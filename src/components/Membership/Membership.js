import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import discount from "../../images/discount.png";

const Membership = () => {
  return (
    <div className="container">
      <h2 className="my-3 text-primary">Be A Valuable Member</h2>
      <div className="row my-5">
        <div className="col-md-6">
          <img className="img-fluid rounded mt-md-5" src={discount} alt="" />
        </div>
        <div className="col-md-6">
          <h4 className="text-primary mb-5 mt-3">
            Fill the form to become a member
          </h4>
          <div className="d-flex justify-content-center">
            <Form className="border rounded px-5 py-4 bg-light">
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Phone</Form.Label>
                  <Form.Control type="phone" placeholder="Number" />
                </Form.Group>
              </Row>

              <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Address</Form.Label>
                <Form.Control placeholder="1234 Main St" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formGridAddress2">
                <Form.Label>Address 2</Form.Label>
                <Form.Control placeholder="Apartment, studio, or floor" />
              </Form.Group>

              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>City</Form.Label>
                  <Form.Control />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>State</Form.Label>
                  <Form.Select defaultValue="Choose...">
                    <option>Choose...</option>
                    <option>...</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                  <Form.Label>Zip</Form.Label>
                  <Form.Control />
                </Form.Group>
              </Row>

              <Form.Group
                className="mb-3 d-flex justify-content-center"
                id="formGridCheckbox"
              >
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Membership;
