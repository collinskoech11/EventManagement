import {Form, Group, Label, Control, Check, Button} from 'react-bootstrap'

import React from 'react'

function UserCreation() {
  return (
    <div className="mydiv">
      <Form>
        <Form.Group className="mb-3">

          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="johndoe" />
          <Form.Text className="text-muted">
            Your username here
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>email</Form.Label>
          <Form.Control type="email" placeholder="johndoe@gmail.com" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Role</Form.Label>
          <Form.Control type="text" placeholder="Manager or Attendee" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Company</Form.Label>
          <Form.Control type="text" placeholder="Microsoft" />

        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Location</Form.Label>
          <Form.Control type="text" placeholder="Virtual or Physical" />
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Get future notifications" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default UserCreation
