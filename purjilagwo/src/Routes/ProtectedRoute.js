import React from "react";
import { Navigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import NavBar from "../components/Navbar"
 
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
      {/* <NavBar /> */}
      {children}
      <Footer />
    </>
  )}</>;
};

export const CommonRoute = ({ children }) => (
  <>
    <Header />
    {/* <NavBar /> */}
    {children}
    <Footer />
  </>
);