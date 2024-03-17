import React from "react";
import { Box, Typography } from "@mui/material";
import timg from "../../assets/image/OUR TREATMENT.png";
import t1 from "../../assets/image/t1.png";
import t2 from "../../assets/image/t2.png";
import t3 from "../../assets/image/t3.png";
import mobimg from '../../assets/image/ourTremob.png'
const Treatment = () => {
  return (
    <div>
      <Box sx={{ display: { xs: "none", sm: "block" } }}>
        <Box style={{ width: "100%", marginTop: "20px" }}>
          <Box className="tmig">
            <img src={timg} alt="img" />
          </Box>
          <Box className="tcont">
            <Box className="imgdiv1">
              <img src={t1} alt="img" />
              <img src={t2} alt="img" style={{ marginTop: "48px" }} />
            </Box>
            <Box className="imgdiv2">
              <img src={t3} alt="img" />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box className='mobileT' sx={{ display: { xs: 'block', sm: 'none' } }}>
      <img src={mobimg} alt="img"/>
      </Box>
    </div>
  );
};

export default Treatment;
