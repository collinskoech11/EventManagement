import React, {useState} from 'react'
import {Carousel, Row, Col, Button, } from 'react-bootstrap'

function EventDetail() {
  const [color, setColor] = useState("#80CED7");
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
      <Col className="info">
        <h2>Cocktail Party</h2>
        <br />
        <br />
        <p>Description</p>
        <Row className="buttonRow">
          <Col>
            <p>Available Colors:</p>
            <Button id="blue" onClick={() => setColor("#80CED7")}></Button>
            <Button id="flax" onClick={() => setColor("#E9D985")}></Button>
            <Button id="red" onClick={() => setColor("#BF211E")}></Button>
          </Col>
          <Col style={{ textAlign: "right" }}>
            <p>Price: 1000</p>
            <a href="/Pages/User/SubmitRsvp">
              <Button id="buy" variant="primary">
                Register 
              </Button>
            </a>
          </Col>
        </Row>
      </Col>
    </Row>
    </div>
  )
}

export default EventDetail
