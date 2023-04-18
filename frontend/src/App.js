import React from 'react';
import logo from './logo.svg';
import homepage from './homepage.png'
import { NewTrip } from './Create_trip/newTrip';
import Scehduler from './Scheduler/Scheduler';
import { DashB } from './Dashboard/dshb.js';
import SideBar from './Scheduler/Sidebar';
import { useState } from 'react';
import { ChatPage } from './Chat/General_chat';
import { BrowserRouter } from 'react-router-dom';
import { browserHistory, Router, Route, Routes } from 'react-router';
// import { groupsData } from './groupsData.js';
// import "react-bootstrap/dist/react-bootstrap.min.js";
{/* <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"></link> */ }
function App() {
  const user = 2;
  const trip = 0;

  // console.log(trip);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DashB user={user} />} />
        <Route path="/scheduler" element={<Scehduler trip={trip} user={user} />} />
        <Route path="/newtrip" element={<NewTrip />} />
        <Route path="/chat" element={<ChatPage />} />
        {/* <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
      </Routes>
    </BrowserRouter>
    // Scehduler() 
    // <Scehduler user={3} trip={2}/> 
    // <DashB username="Himani Panwar" groupsData={groupsData}/>
    // <DashB username="Himani Panwar" />
    // <NewTrip />
    // <SideBar />
    // <ChatPage />

  );
}

export default App;