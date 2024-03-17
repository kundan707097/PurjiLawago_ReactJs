import React from "react";
// import w1img from "../../assets/image/why1.png";
import w2img from "../../assets/image/whychooseus.png";
import { Box } from "@mui/material";
import mymob from "../../assets/image/whyMob.png";

const WhySection = () => {
  return (
    <div>
      <Box
        className="imgwhy"
        sx={{ width: "100%", py: 5, display: { xs: "none", sm: "block" } }}
      >
        <img src={w2img} alt="img" />
      </Box>
      <Box className="whiy" sx={{ display: { xs: "block", sm: "none", } }}>
        <img src={mymob} alt="img" />
      </Box>
    </div>
  );
};

export default WhySection;
