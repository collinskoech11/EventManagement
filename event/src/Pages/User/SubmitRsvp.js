import React, {useState} from 'react'
import {Form,  Button} from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'

function SubmitRsvp() {
  let navigate = useNavigate();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [event, setEvent] = useState();
  const [Company, setCompany] = useState();
  const [created_at, setCreated_at] = useState();
  let handleSubmit = async (e) => {
    e.preventDefault();
    try{
        let res =  await fetch("http://localhost:8000/rsvp/new",{
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
            'accept':'application/json'
          },
          body: JSON.stringify({
            name:name,
            email:email,
            event: event,
            Company: Company,
            created_at: created_at,
          }),
        });
        let resJson = await res.json();
        console.log(resJson)
        if (res.status === 200){
            setName("")
            setEmail("")
            setEvent("")
            setCompany("")
            setCreated_at("")
        }
        let path = '/Pages/User/Success'
        navigate(path)
    } catch(err){
        console.log(err)
    }
  }
  return (
    <div className="mydiv">
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Your Name</Form.Label>
          <Form.Control type="text" placeholder="John Doe"  onChange={(e) => setName(e.target.value)} />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="elonmusk@tesla.com"  onChange={(e) => setEmail(e.target.value)}/>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Event Name</Form.Label>
          <Form.Control type="text" placeholder="Friendly Meet Up"  onChange={(e) => setEvent(e.target.value)} />
          <Form.Text className="text-muted">
           Describe what goes on at the event
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Your Company Name</Form.Label>
          <Form.Control type="text" placeholder="Tesla"  onChange={(e) => setCompany(e.target.value)}/>
          <Form.Text className="text-muted">
          Whats the Big Idea
          </Form.Text>
        </Form.Group>


        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Get future notifications" />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default SubmitRsvp
