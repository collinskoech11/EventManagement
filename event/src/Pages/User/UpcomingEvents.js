import React, {useState, useEffect} from 'react'
import {Card, Button, Nav} from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'
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

    let navigate = useNavigate()
     const handleClick = (event) => {
      let path = '/Pages/EventDetail'
      navigate(path, {state:{x:event.currentTarget.id}})
    }

    const handleSubmit = (event, x) => {
      console.log(x)
      let path = '/Pages/User/SubmitRsvp'
      navigate(path, {state:{x:event.currentTarget.id}})
    }
  return (
    <>
    
    <div className="mydiv">
    <h4>Upcoming Events</h4>

    {Events.map((item,i) => {
      // let x = item.id;
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
              <Button variant="primary" id={item.id} onClick={handleClick}>View Event Details</Button><br/><br/>
              <Button onClick={handleSubmit} variant="primary">Register for the event</Button>
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