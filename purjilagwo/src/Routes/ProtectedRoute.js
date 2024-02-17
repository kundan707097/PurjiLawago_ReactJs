import React from "react";
import { Navigate } from "react-router-dom";
import Header from "../components/Header";

export const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  return <>{token ?
    (
      <>
        <Header />
        {children}
      </>
    )
    :
    <Navigate to="*" />
  }</>;
};

export const PublicRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  return <>{token ? (
    <Navigate to="*" />
  ) : (
    <>
      <Header />
      {children}
    </>
  )}</>;
};

export const CommonRoute = ({ children }) => (
  <>
    <Header />
    {children}
  </>
);