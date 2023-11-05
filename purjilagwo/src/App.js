// import React, { } from 'react';
// import './App.css';

// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Header from './components/Header';
// import Home from './components/Home';
// import Footer from './components/Footer';
// import Login from "./components/Login";

// function App() {
//   return (
//     <div className="App">
//       <Header/>
//       <Home/>
//       <Footer/>
//     </div>
//   );
// }

// export default App;


import React from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom'; // Note the updated imports

import Header from './components/Header';
import Home from './screens/homeScreen/Home';
import Footer from './components/Footer';
import Login from './screens/loginScreen/Login';
import DoctorDetails from './screens/doctorInformationScreen/DoctorsDetails';
import DoctorList from './screens/doctorInformationScreen/DoctorList';
import HomeDashboard from './screens/dashBoardScreens/HomeDashboard';

function App() {
  return (
    <div className="App">
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/doctorsdetails/:id" element={<DoctorDetails />} /> 
          <Route path="/doctorlist/:location" element={<DoctorList />} />
          <Route path="/homeDashhboard" element={<HomeDashboard />} />
          
        </Routes>
        <Footer />

    </div>
  );
}

export default App;


