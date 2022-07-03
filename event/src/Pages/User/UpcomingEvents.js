import React, {useState, useEffect} from 'react'
import {Card, Button, Nav} from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'
// http://127.0.0.1:8000/


function UpcomingEvents() {

    const [Events, fetchEvents] = useState([])
    const [book, setBook] = useState()

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
     const handleClick = (event, x) => {
      setBook((event.currentTarget.id));
      console.log(event.currentTarget.id)
      let path = '/Pages/EventDetail'
      navigate(path, {state:{x:event.currentTarget.id}})
        // { component: <Navigate to="/Pages/EventDetail"/>}
      // redirects to /Pages/EventDetail
    }
    const handleSubmit = (event, x) => {
      setBook(event.currentTarget.id)
      console.log(x)
      let path = '/Pages/User/SubmitRsvp'
      navigate(path)
      navigate(path, {state:{x:event.currentTarget.id}})
      // redirects to /Pages/User/SubmitRsvp
    }
  return (
    <>
    
    <div className="mydiv">
    <h4>Upcoming Events</h4>

    {Events.map((item,i) => {
      let x = i + 1;
      return (
        <div className="mydiv" key={x}>
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
              <Button variant="primary" id={x} onClick={handleClick}>View Event Details</Button><br/><br/>
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