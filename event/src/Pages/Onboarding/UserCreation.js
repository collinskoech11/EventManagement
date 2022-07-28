import {Form, Group, Label, Control, Check, Button} from 'react-bootstrap'
import {useNavigate} from 'react-router-dom';
import React, {useState, useEffect} from 'react';

function UserCreation() {
  let navigate = useNavigate()
        const [username, setUsername]= useState("");
        const [email, setEmail]= useState("");
        const [role, setRole]= useState("");
        const [Company, setCompany]= useState("");
        const [password, setPassword]= useState("");
        const [location, setLocation]= useState("");

  let handleSubmit = async (e) => {
    e.preventDefault();
    try{
        let res =  await fetch("http://localhost:8000/appusers/new",{
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
            'accept':'application/json'
          },
          body: JSON.stringify({
            username: username,
            email: email,
            role: role,
            Company: Company,
            password: password,
            location: location,
          }),
        });
        let resJson = await res.json();
        if (res.status == 200){
          setUsername("")
          setEmail("")
          setRole("")
          setCompany("")
          setPassword("")
          setLocation("")
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

          <Form.Label>Username</Form.Label>
          <Form.Control type="text" placeholder="johndoe" onChange={(e) => setUsername(e.target.value)} />
          <Form.Text className="text-muted">
            Your username here
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>email</Form.Label>
          <Form.Control type="email" placeholder="johndoe@gmail.com" onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Role</Form.Label>
          <Form.Control type="text" placeholder="Manager or Attendee" onChange={(e) => setRole(e.target.value)} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Company</Form.Label>
          <Form.Control type="text" placeholder="Microsoft" onChange={(e) => setCompany(e.target.value)} />

        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Location</Form.Label>
          <Form.Control type="text" placeholder="Virtual or Physical" onChange={(e) => setPassword(e.target.value)} />
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Get future notifications" onChange={(e) => setLocation(e.target.value)} />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default UserCreation
