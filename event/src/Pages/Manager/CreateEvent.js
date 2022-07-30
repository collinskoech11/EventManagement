import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {Form, Button} from 'react-bootstrap'

function CreateEvent() {
  let navigate = useNavigate()
  const [title, setTitle] = useState("")
  const [Venue, setVenue] = useState("")
  const [category, setCategory] = useState("")
  const [description, setDescription] = useState("")
  const [type, setType] = useState("")
  const [created_at, setCreated_at] = useState("")
  const [date, setDate] = useState("")
  const [banner, setBanner] = useState()
  const [time_created, setTime_created] = useState("")

  function handleImageChange(e) {
    setBanner(URL.createObjectURL(e.target.files[0]));
  }
  let handleSubmit = async (e) => {
  
    e.preventDefault();
    try{
        let res =  await fetch("http://localhost:8000/events/new",{
          method: "POST",
          headers: {
            'Content-Type': 'multipart/form-data',
            'accept':'multipart/form-data'
          },
          body: JSON.stringify({
              title: title,
              Venue: Venue,
              category: category,
              description: description,
              type: type,
              created_at: created_at,
              date: date,
              time_created: time_created,
              banner: banner,
          }),
        });
        let resJson = await res.json();
        console.log(resJson)
        if (res.status === 200){
          setTitle("")
          setVenue("")
          setCategory("")
          setDescription("")
          setType("")
          setCreated_at("")
          setDate("")
          setBanner()
          setTime_created("")
        }
        let path = '/Pages/User/Success'
        navigate(path)
    } catch(err){
        console.log(err)
    }
  }
  return (
    <div className="mydiv">
      <Form>
        <Form.Group className="mb-3">

          <Form.Label>Event title</Form.Label>
          <Form.Control type="text" placeholder="Cocktail Party" onChange={(e) => setTitle(e.target.value)}/>
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Event Venue</Form.Label>
          <Form.Control type="text" placeholder="Nairobi" onChange={(e) => setVenue(e.target.value)} />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Event Category</Form.Label>
          <Form.Control type="text" placeholder="Friendly Meet Up" onChange={(e) => setCategory(e.target.value)}/>
          <Form.Text className="text-muted">
           DEscribe what goes on at the event
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Event Description</Form.Label>
          <Form.Control type="text" placeholder="Friendly Meet Up" onChange={(e) => setDescription(e.target.value)}/>
          <Form.Text className="text-muted">
           Whats the Big Idea
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Event Type</Form.Label>
          <Form.Control type="text" placeholder="Virtual or Physical" onChange={(e) => setType(e.target.value)} />
          <Form.Text className="text-muted">
          Whats the Big Idea
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Event Date</Form.Label>
          <Form.Control type="text" placeholder="2022-12-12" onChange={(e) => setDate(e.target.value)}/>
          <Form.Text className="text-muted"> 
          When is it happening
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Event Banner</Form.Label>
          <Form.Control type="file" placeholder="Event Poster" onChange={handleImageChange}  accept="image/jpg, image/png, image/gif, image/jpeg"/>
         {<img src={banner} alt="banner for the event"/>}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Created At</Form.Label>
          <Form.Control type="text" placeholder="2022-12-12" onChange={(e) => setCreated_at(e.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3">
        <Form.Label>Time</Form.Label>
        <Form.Control type="text" placeholder="2022-12-12" onChange={(e) => setTime_created(e.target.value)}/>
      </Form.Group>




        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Get future notifications" />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={handleSubmit}>
          Submit
        </Button>
      </Form>
    </div>
  )
}

export default CreateEvent