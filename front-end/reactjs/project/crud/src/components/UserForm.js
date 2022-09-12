import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

export default class UserForm extends Component {
  render() {
    return (
      <div>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Your Name" />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control type="text" placeholder="Your Phone" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}
