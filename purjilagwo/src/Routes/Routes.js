import React, { Suspense } from 'react';
import '../App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import { routevalues } from './PublicRoute';
import { privateRoutes } from '../Routes/PrivateRoutes';
import commonroutes from './CommonRoute';
import {ProtectedRoute ,PublicRoute,CommonRoute} from '../Routes/ProtectedRoute';
import NotFound from '../screens/proxy/NotFound';

function Routing() {
  const location = useLocation();
  const currentRoute = routevalues.find((route) => location.pathname === route.path);
  console.log('Current Route:', currentRoute);

  return (
    <div className="App">
      <Routes>
      <Route path="*" element={<NotFound />} />
      {routevalues.map((route, index) => (
          <Route key={index} path={route.path} element={
            <Suspense fallback={<div>Loading...</div>}>
              <PublicRoute>
              {route.element}
              </PublicRoute>
            </Suspense>
          } />
        ))}
         {commonroutes.map((route, index) => (
          <Route key={index} path={route.path} element={
            <Suspense fallback={<div>Loading...</div>}>
              <CommonRoute>
              {route.element}
              </CommonRoute>
            </Suspense>
          } />
        ))}
        {privateRoutes.map((route, index) => (
          <Route key={index} path={route.path} element={
            <Suspense fallback={<div>Loading...</div>}>
            <ProtectedRoute>
              {route.element}
            </ProtectedRoute>
          </Suspense>
          } />
        ))}  
      </Routes>

    </div>
  );
}

export default Routing;
