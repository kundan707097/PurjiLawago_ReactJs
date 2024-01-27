import React from "react";
import { Navigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Call from "../components/Call";
import Ambulance from "../components/Ambulance";
 
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
      {/* <DrawerAppBar /> */}
      {children}
      <Ambulance />
      <Call />
      <Footer />
    </>
  )}</>;
};

export const CommonRoute = ({ children }) => (
  <>
    <Header />
    {/* <DrawerAppBar /> */}
    {children}
    <Ambulance />
    <Call />
    <Footer />
  </>
);