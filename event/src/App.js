import { Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header'
import Home from './Pages/Home';
import EventDetail from './Pages/EventDetail'
import CreateEvent from './Pages/Manager/CreateEvent';
import MyEvents from './Pages/Manager/MyEvents';
import ViewRsvps from './Pages/Manager/ViewRsvps';
import SubmitRsvp from './Pages/User/SubmitRsvp';
import Success from './Pages/User/Success';
import UpcomingEvents from './Pages/User/UpcomingEvents'
import UserCreation from './Pages/Onboarding/UserCreation'
import ListUsers from './Pages/Onboarding/ListUsers';


function App() {
  return (
    <>
    <Header/>
    <div className="pusher"></div>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
          <Route path="/Pages/EventDetail" pathname="EventDetail" element={<EventDetail/>}/>
          <Route path="/Pages/Manager/CreateEvent" pathname="CreateEvent" element={<CreateEvent/>}/>
          <Route path="/Pages/Manager/MyEvents" pathname="MyEvents" element={<MyEvents/>}/>
          <Route path="/Pages/Manager/ViewRsvps" pathname="ViewRsvps" element={<ViewRsvps/>}/>
          <Route path="/Pages/User/SubmitRsvp" pathname="SubmitRsvp" element={<SubmitRsvp/>}/>
          <Route path="/Pages/User/Success" pathname="Success" element={<Success/>}/>
          <Route path="/Pages/User/UpcomingEvents" pathname="UpcomingEvents" element={<UpcomingEvents/>}/>
          <Route path="/Pages/Onboarding/UserCreation" pathname="UserCreation" element={<UserCreation/>}/>
          <Route path="/Pages/Onboarding/ListUsers"  pathname="ListUsers"element={<ListUsers/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
