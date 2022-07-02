import React from 'react'
import {Form, Group, Label, Control, Check, Button} from 'react-bootstrap'


function SubmitRsvp() {
  let handleSubmit = async (e) => {
    e.preventDefault();
    try{
        let res =  await fetch("http://localhost:8000/rsvp/new",{
          method: "POST",
          body: JSON.stringify({

          }),
        });
        let resJson = await res.json();
        if (res.status == 200){

        }
    } catch(err){
        console.log(err)
    }
  }
  return (
    <div className="mydiv">
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Your Name</Form.Label>
          <Form.Control type="text" placeholder="John Doe" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="elonmusk@tesla.com" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Event Name</Form.Label>
          <Form.Control type="text" placeholder="Friendly Meet Up" />
          <Form.Text className="text-muted">
           Describe what goes on at the event
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Your Company Name</Form.Label>
          <Form.Control type="text" placeholder="Tesla" />
          <Form.Text className="text-muted">
          Whats the Big Idea
          </Form.Text>
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

export default SubmitRsvp
