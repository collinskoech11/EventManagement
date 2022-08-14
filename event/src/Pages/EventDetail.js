import React, {useEffect, useState} from 'react'
import {Carousel, Row, Col, Button, } from 'react-bootstrap'

import {useLocation} from "react-router-dom"
function EventDetail() {
  const [Event, fetchEvent] = useState([]);
  const location = useLocation();
  // const [book] = useState(1);
  console.log(location.state.x)

 useEffect(() =>{
  const getData = () => {
    fetch(`http://localhost:8000/event/detail/${location.state.x}`, {mode: 'cors'})
    .then((res) => res.json())
    .then((res) => {
      console.log(res)
      fetchEvent(res)
    })
   }
  getData()
 },[location.state.x])
 let uri = `https://res.cloudinary.com/deqngnkr5/${Event.banner}`
  console.log(`EventBanner uri${Event.banner}`)
  return (
    <div className="detail">
      <Carousel variant="light">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://source.unsplash.com/600x100/?Event"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://source.unsplash.com/600x100/?Meetup"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://source.unsplash.com/600x100/?Party"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Row className="item">
        <Col className="info"><img src={uri} alt="event Banner"/></Col>
      </Row>
      <Row className="item">
      <Col className="info">
        <h2>{Event.title}</h2>
        <br />
        <br />
        <Row className="buttonRow">
          <Col style={{ textAlign: "left" }}>
            <h5>Event Type:</h5>
            <p>{Event.type}</p>
          </Col>
          <Col style={{ textAlign: "right" }}>
            <h5>Venue</h5>
            <p>{Event.Venue}</p>
          </Col>
        </Row>
        <Row className="buttonRow">
          <Col style={{ textAlign: "left" }}>
            <h5>Time</h5>
            <p>{Event.time_created}</p>
            
          </Col>
          <Col style={{ textAlign: "right" }}>
            <h5>Date</h5>
            <p>{Event.date}</p>
          </Col>
        </Row>
        <Row className="buttonRow">
          <h5>Description</h5>
          <p>{Event.description}</p>
        </Row>
        <a href="/Pages/User/SubmitRsvp">   
          <Button id="buy" variant="primary">
            Register 
          </Button>
        </a>
      </Col>
    </Row>
    </div>
  )
}

export default EventDetail
