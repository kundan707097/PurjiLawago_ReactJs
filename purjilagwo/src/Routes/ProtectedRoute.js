import React from "react";
import { Navigate } from "react-router-dom";
import Call from "../components/Call";
import Ambulance from "../components/Ambulance";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import LeftMenu from "../components/LeftMenu";
import BreadCrums from "../components/BreadCrums";

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
 
export const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem('token');
  return <>{token ? (
    <Box sx={{  }}>
    <Header/>
    <BreadCrums/>
      <Grid container spacing={1} sx={{ '&, [class^=MuiDataGrid]': { boxShadow: 'none' } }}>
        <Grid item xs={2}>
          <Item><LeftMenu /></Item>
        </Grid>
        <Grid item xs={8}>
          <Item>{children}</Item>
        </Grid>
        <Grid item xs={2}>
          <Item>Doctor Info</Item>
        </Grid>
        {/* <Ambulance /> */}
        {/* <Call /> */}
        {/* <Footer /> */}
      </Grid>
    </Box>
    ) : (<Navigate to="*" />)}</>;
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