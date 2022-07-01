import React, {useState, useEffect} from 'react'
import {Card, Button, Nav, Header, Body, Title, Text, Link, Item} from 'react-bootstrap'
// http://127.0.0.1:8000/


function UpcomingEvents() {

    const [Users, fetchUsers] = useState([])

    const getData = () => {
        fetch('http://localhost:8000/events',{mode:'cors'})
        .then((res) => res.json())
        .then((res) => {
          console.log(res)
          fetchUsers(res)
        })
    }

    useEffect(() => {
      getData()
    }, [])
  return (
    <>
    
    <div className="mydiv">
    <h4>UpcomingEvents</h4>
    <div className="mydiv">
      <Card>
        <Card.Header>
          <Nav variant="tabs" defaultActiveKey="#first">
            <Nav.Item>
              <Nav.Link href="#first">Title & Description</Nav.Link>
            </Nav.Item>
          </Nav>
        </Card.Header>
        <Card.Body>
          <Card.Title>SpaceX Launch</Card.Title>
          <Card.Text>
            Company Launch Event<br/>
            Nairobi | <b>Haile Selassie Avenue</b><br/>
            9th July, 9:00 am<br/>
          </Card.Text>
          <Button variant="primary">Register for the event</Button>
        </Card.Body>
      </Card>
      </div>
      <div className="mydiv">
        <Card>
          <Card.Header>
            <Nav variant="tabs" defaultActiveKey="#first">
              <Nav.Item>
                <Nav.Link href="#first">Title & Description</Nav.Link>
              </Nav.Item>
            </Nav>
          </Card.Header>
          <Card.Body>
            <Card.Title>SpaceX Launch</Card.Title>
            <Card.Text>
              Company Launch Event<br/>
              Nairobi | <b>Haile Selassie Avenue</b><br/>
              9th July, 9:00 am<br/>
            </Card.Text>
            <Button variant="primary">Register for the event</Button>
          </Card.Body>
        </Card>
        </div>
      </div>
    </>

  )
}

export default UpcomingEvents