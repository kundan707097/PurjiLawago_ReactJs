import React, { Suspense } from 'react';
import '../App.css';
import { Route, Routes } from 'react-router-dom'; // Note the updated imports

import Header from '../components/Header';
import Footer from './components/Footer';
import { routes } from '../Routes/RoutesConfig';

function Routing() {
  return (
    <div className="App">
        <Header />
        <Routes>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Routes>
        </Suspense>
          
        </Routes>
        <Footer />
    </div>
  );
}

export default Routing;
