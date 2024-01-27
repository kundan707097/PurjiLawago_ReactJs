import React from 'react'

import {Box, CircularProgress } from '@mui/material';


const Loading = () => {
  return (
    <Box sx={{ display: 'flex', width: "100%", justifyContent: "center", height: "90vh", alignItems: "center" }}>
    <CircularProgress />
  </Box>
  )
}

export default Loading