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
          <Form.Control type="text" placeholder="Nairobi" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Event Category</Form.Label>
          <Form.Control type="text" placeholder="Friendly Meet Up" />
          <Form.Text className="text-muted">
           DEscribe what goes on at the event
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Event Description</Form.Label>
          <Form.Control type="text" placeholder="Friendly Meet Up" />
          <Form.Text className="text-muted">
           Whats the Big Idea
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Event Type</Form.Label>
          <Form.Control type="text" placeholder="Virtual or Physical" />
          <Form.Text className="text-muted">
          Whats the Big Idea
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Event Date</Form.Label>
          <Form.Control type="date" placeholder="Friendly Meet Up" />
          <Form.Text className="text-muted"> 
          When is it happening
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
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

export default CreateEvent