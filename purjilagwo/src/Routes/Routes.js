import React, { Suspense } from 'react';
import '../App.css';
import { Route, Routes,useLocation  } from 'react-router-dom'; 
import Header from '../components/Header';
import Footer from '../components/Footer';
import { routevalues } from '../Routes/RoutesConfig';

function Routing() {
  const location = useLocation();
  const currentRoute = routevalues.find((route) => location.pathname === route.path);
  console.log('Current Route:', currentRoute);

  return (
    <div className="App">
        {currentRoute && currentRoute.showHeader && <Header />}
        <Routes>
        {routevalues.map((route, index) => (
          <Route key={index} path={route.path} element={
            <Suspense fallback={<div>Loading...</div>}>
              {route.element}
            </Suspense>
          } />
        ))}
          
        </Routes>
        {currentRoute && currentRoute.showFooter && <Footer />}

    </div>
  );
}

export default Routing;
