import React from "react";
import Box from "@mui/material/Box";
import img from "../../assets/image/How to get a doctor.png";
import imherf from '../../assets/image/Howmob.png'

const HowD = () => {
  return (
    <div>
      <Box className="howd" sx={{ py: 5,  display: { xs: 'none', sm: 'block' } }}>
        <img src={img} alt="img" />
      </Box>
      <Box className='werdrf' sx={{ display: { xs: 'block', sm: 'none' } }}>
      <img src={imherf} alt="img"/>
      </Box>
    </div>
  );
};

export default HowD;
