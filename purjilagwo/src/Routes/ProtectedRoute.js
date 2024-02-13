import React from "react";
import { Navigate } from "react-router-dom";
import Call from "../components/Call";
import Ambulance from "../components/Ambulance";
import Header from "../components/Header";
 
export const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  return <>{token ? <>{children}</> : <Navigate to="*" />}</>;
};

export const PublicRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  return <>{token ? (
    <Navigate to="*" />
  ) : (
    <>
      <Header />
      {children}
      {/* <Ambulance /> */}
      {/* <Call /> */}
      {/* <Footer /> */}
    </>
  )}</>;
};

export const CommonRoute = ({ children }) => (
  <>
    <Header />
    {children}
    {/* <Ambulance /> */}
    {/* <Call /> */}
    {/* <Footer /> */}
  </>
);