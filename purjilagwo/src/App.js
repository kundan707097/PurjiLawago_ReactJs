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


import React ,{Suspense}from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom'; // Note the updated imports
import Header from './components/Header';
import Footer from './components/Footer';
import { routevalues } from './Routes/PublicRoute'; 
import Routing from './Routes/Routes';

function App() {
  return (
    <div className="App">
      <Routing/>
    </div>
  );
}

export default App;


