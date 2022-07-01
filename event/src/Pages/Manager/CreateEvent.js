import React from 'react'
import {Form, Group, Label, Control, Check, Button} from 'react-bootstrap'

function CreateEvent() {
  return (
    <div className="mydiv">
      <Form>
      <Form.Group className="mb-3">
          <Form.Label>Event title</Form.Label>
          <Form.Control type="text" placeholder="Cocktail Party" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Event Venue</Form.Label>
          <Form.Control type="text" placeholder="Enter Event Venue" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default CreateEvent