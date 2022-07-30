import React, {useState, useEffect} from 'react'
import {Card,  Nav} from 'react-bootstrap'
// http://127.0.0.1:8000/



function ListUsers() {
  const [Users, fetchUsers] = useState([])

  const getData = () => {
      fetch('http://localhost:8000/appusers',{mode:'cors'})
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
    <h4>Users</h4>

    {Users.map((item,i) => {
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
            <Card.Title>{item.username}</Card.Title>
            <Card.Text>
              {item.email}<br/>
              {item.role} | <b>{item.location}</b><br/>
              {item.Company}<br/>
            </Card.Text>
           
          </Card.Body>
        </Card>
        </div>
      );
    })}
      </div>
    </>
  )
}

export default ListUsers