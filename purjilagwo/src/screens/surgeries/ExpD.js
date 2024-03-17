import React from "react";
import Box from "@mui/material/Box";
import img from "../../assets/image/exp.png";
import imgMob from "../../assets/image/eximg.png";
const ExpD = () => {
  return (
    <div>
      <Box
        className="howd"
        sx={{ py: 5, display: { xs: "none", sm: "block" } }}
      >
        <img src={img} alt="img" />
      </Box>
      <Box className="hgftryu" sx={{ display: { xs: "block", sm: "none" } }}>
        <img src={imgMob} alt="img" />
      </Box>
    </div>
  );
};

export default ExpD;
