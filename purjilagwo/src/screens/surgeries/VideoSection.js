import { Box } from '@mui/material';
import React from 'react';
import img from '../../assets/image/videoimgmobile.png'

const VideoSection = () => {
  return (
    <div>
      <Box classNmae='htfdcvbn' sx={{ display: { xs: 'block', sm: 'none' } }}>
      <img src={img} alt='img'/>
      </Box>
    </div>
  );
}

export default VideoSection;
