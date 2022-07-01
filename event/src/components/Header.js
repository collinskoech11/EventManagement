import React from 'react'
import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap'

function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/Pages/User/UpcomingEvents">Event Management</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/Pages/Onboarding/UserCreation">Register</Nav.Link>
            <Nav.Link href="/Pages/Onboarding/ListUsers">Our Users</Nav.Link>
            <Nav.Link href="/Pages/User/UpcomingEvents">Upcoming Events</Nav.Link>
            <Nav.Link href="/Pages/User/SubmitRsvp">Submit an RSVP</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="/Pages/Manager/CreateEvent">Create Event</NavDropdown.Item>
              <NavDropdown.Item href="/Pages/Manager/MyEvents">My Events</NavDropdown.Item>
              <NavDropdown.Item href="/Pages/Manager/ViewRsvps">View Rsvps</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/Pages/User/Success">Success</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header