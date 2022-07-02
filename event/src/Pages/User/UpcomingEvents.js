import React, {useState, useEffect} from 'react'
import {Card, Button, Nav} from 'react-bootstrap'
// http://127.0.0.1:8000/


function UpcomingEvents() {

    const [Events, fetchEvents] = useState([])

    const getData = () => {
        fetch('http://localhost:8000/events',{mode:'cors'})
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
    <h4>Upcoming Events</h4>

    {Events.map((item,i) => {
      return (
        <div className="mydiv" key={i}>
        <Card>
          <Card.Header>
            <Nav variant="tabs" defaultActiveKey="#first">
              <Nav.Item>
                <Nav.Link href="#first">Title & Description</Nav.Link>
              </Nav.Item>
            </Nav>
          </Card.Header>
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>
              {item.description}<br/>
              {item.type} | <b>{item.Venue}</b><br/>
              {item.date}<br/>
            </Card.Text>
           <a href="/Pages/EventDetail"> <Button variant="primary">View Event Details</Button></a><br/><br/>
           <a href="/Pages/User/SubmitRsvp"> <Button variant="primary">Register for the event</Button></a>
          </Card.Body>
        </Card>
        </div>
      );
    })}
      </div>
    </>

  )
}

export default UpcomingEvents