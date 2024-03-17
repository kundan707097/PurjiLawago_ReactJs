import React from 'react';
import Box from "@mui/material/Box";
import img from "../../assets/image/ourD.png";
const OurD = () => {
  return (
    <div>
    <Box className="howd" sx={{ py: 5 }}>
    <img src={img} alt="img" />
  </Box>
    </div>
  );
}

export default OurD;
