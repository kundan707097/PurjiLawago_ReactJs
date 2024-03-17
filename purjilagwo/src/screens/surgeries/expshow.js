import { Box } from '@mui/material';
import React from 'react';
import img from '../../assets/image/Expart Care Sevice idea mob.png'

const expshow = () => {
  return (
    <div>
      <Box sx={{ display: { xs: 'none', sm: 'block' } }} className='hytfgh'>
      <img src={img} alt='img'/>
      </Box>
    </div>
  );
}

export default expshow;
