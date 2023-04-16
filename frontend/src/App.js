import React from 'react';
import logo from './logo.svg';
import homepage from './homepage.png'
import { NewTrip } from './Create_trip/newTrip';
import Scehduler from './S_comp/Scheduler';
import { DashB } from './Dashboard/dshb.js';
import SideBar from './S_comp/Sidebar';
// import { groupsData } from './groupsData.js';
// import "react-bootstrap/dist/react-bootstrap.min.js";
{/* <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"></link> */}
function App() {
  const user = 1;
  return (    
    // Scehduler() 
    // <Scehduler /> 
    // <DashB username="Himani Panwar" groupsData={groupsData}/>
    <DashB username="Himani Panwar" />
    // <NewTrip />
    // <SideBar />
);
}

export default App;