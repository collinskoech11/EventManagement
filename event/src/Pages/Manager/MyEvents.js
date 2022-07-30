import React, {useState, useEffect} from 'react'
import {Card, Button, Nav} from 'react-bootstrap'
import {useNavigate} from 'react-router-dom'
// http://127.0.0.1:8000/

function MyEvents() {
  const [Events, fetchEvents] = useState([])

  const getData = () => {
      fetch('http://localhost:8000/events',{mode:'cors'})
      .then((res) => res.json())
      .then((res) => {
        console.log(res)
        fetchEvents(res)
      })
  }
  let navigate = useNavigate()
  const handleClick = (event, x) => {
    let path = '/Pages/Manager/ViewRsvps'
    navigate(path, {state:{x:event.currentTarget.id}})
      // { component: <Navigate to="/Pages/EventDetail"/>}
    // redirects to /Pages/EventDetail
 }
  useEffect(() => {
    getData()
  }, [])
  return (
    <div className="mydiv">
    <h4>My Events</h4>

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
            <Button variant="primary" onClick={handleClick}>Event Details</Button>
          </Card.Body>
        </Card>
        </div>
      );
    })}
      </div>
  )
}

export default MyEvents
