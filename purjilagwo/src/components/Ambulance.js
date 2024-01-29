import React from 'react'
import {  Typography, Button, } from '@mui/material';

const Ambulance = () => {
  return (
    <Button variant='contained' color='error' sx={{position: "fixed", top: {xs: "60vh", md: "66vh"}, right: "1rem", width: "2rem", height: "10rem", backgroundColor: "#42A5F5", zIndex: 999, borderTopLeftRadius: "12px", borderBottomLeftRadius: "12px",borderRadius: "12px",  }}>
        <Typography sx={{transform: "rotate(-90deg)", color: "white"}}>Ambulance</Typography>
    </Button>
  )
}

export default Ambulance