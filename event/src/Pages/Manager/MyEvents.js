import React from 'react'
import {Card, Button, Nav, Header, Body, Title, Text, Link, Item} from 'react-bootstrap'

function MyEvents() {
  return (
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
          <Button variant="primary">View Rsvps</Button>
        </Card.Body>
      </Card>
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
          <Button variant="primary">View Rsvps</Button>
        </Card.Body>
      </Card>
    </div>
  )
}

export default MyEvents
