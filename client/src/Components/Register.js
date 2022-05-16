import React from 'react'
import { Form, Button } from "react-bootstrap";

function Register() {
  return (
    <div>
          <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="First name" placeholder="Enter First name" />
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control type="Last name" placeholder="Enter last name" />
                
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                      We'll never share your email with anyone else.
                  </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              
              <Button variant="primary" type="submit">
                  Submit
              </Button>
          </Form>
    </div>
  )
}

export default Register