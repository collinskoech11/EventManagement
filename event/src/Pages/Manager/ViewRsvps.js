import React, {useState, useEffect} from 'react'
import {Card, Button, Nav} from 'react-bootstrap'
// http://127.0.0.1:8000/

function ViewRsvps() {
  const [Events, fetchEvents] = useState([])

  const getData = () => {
      fetch('http://localhost:8000/rsvps',{mode:'cors'})
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        fetchEvents(res)
      })
  }

  useEffect(() => {
    getData()
  }, [])
  return (
    <>
    
    <div className="mydiv">
    <h4>View Rsvps</h4>

    {Events.map((item,i) => {
      return (
        <div className="mydiv" key={i}>
        <Card>
          <Card.Header>
            <Nav variant="tabs" defaultActiveKey="#first">
              <Nav.Item>
                <Nav.Link href="#first">Atendee Information</Nav.Link>
              </Nav.Item>
            </Nav>
          </Card.Header>
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>
              {item.email}<br/>
              {item.event} | <b>{item.Company}</b><br/>
              {item.created_at}<br/>
            </Card.Text>
            <Button variant="primary">Register for the event</Button>
          </Card.Body>
        </Card>
        </div>
      );
    })}
      </div>
    </>
  )
}

export default ViewRsvps