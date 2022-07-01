import { Route, Routes } from 'react-router-dom';
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


function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
        <Route path="/Pages/EventDetail" element={<EventDetail/>}/>
        <Route path="/Pages/Manager/CreateEvent" element={<CreateEvent/>}/>
        <Route path="/Pages/Manager/MyEvents" element={<MyEvents/>}/>
        <Route path="/Pages/Manager/ViewRsvps" element={<ViewRsvps/>}/>
        <Route path="/Pages/User/SubmitRsvp" element={<SubmitRsvp/>}/>
        <Route path="/Pages/User/Success" element={<Success/>}/>
        <Route path="/Pages/User/UpcomingEvents" element={<UpcomingEvents/>}/>
    </Routes>
    </>
  );
}

export default App;
