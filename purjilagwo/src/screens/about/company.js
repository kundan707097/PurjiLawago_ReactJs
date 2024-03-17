import { Box } from "@mui/material";
import React from "react";
import Typography from "@mui/material/Typography";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
// import Box from '@mui/material/Box';
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import './about.css'
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 4,
  },
};
const Company = () => {
  return (
    <div style={{marginTop:"200px" }}>
      <Box  className='bgimg' >
           <Box sx={{display:{xs:"none",sm:'block'}}}>
           <Typography sx={{ fontSize: "60px",  color:" #42a5f5",
    textAlign:"center"
  }} > 
         245+
        </Typography>
        <Typography   sx={{ fontSize: "60px",
    fontWeight: "800", textAlign:"center",color:"rgb(131, 239, 197)"
  }}>
          BARND OUR PARTNER
        </Typography>
          </Box>
       
        <Box sx={{display:{xs:"block",sm:'none'}}}>
           <Typography sx={{ fontSize: "60px",
    fontWeight: "800", textAlign:"center",color:"#42a5f5"
  }} > 
         245+
        </Typography>
        <Typography   sx={{ fontSize: "33px",
    fontWeight: "800", textAlign:"center",color:"rgb(131, 239, 197)"
  }}>
          BARND OUR PARTNER
        </Typography>
</Box>

        

        <Carousel responsive={responsive}>
          <box className="imgSpace1">
            <img src="../images/about/c1.png" alt="img" />
          </box>
          <box className="imgSpace1">
            <img src="../images/about/c2.png" alt="img" />
          </box>
          <box className="imgSpace1">
            <img src="../images/about/c3.png" alt="img" />
          </box>
          <box className="imgSpace1">
            <img src="../images/about/c4.png" alt="img" />
          </box>
          <box className="imgSpace1">
            <img src="../images/about/c5.png" alt="img" />
          </box>
          <box className="imgSpace1">
            <img src="../images/about/c6.png" alt="img" />
          </box>
          <box className="imgSpace1">
            <img src="../images/about/c7.png" alt="img" />
          </box>
          <box className="imgSpace1">
            <img src="../images/about/c8.png" alt="img" />
          </box>
          <box className="imgSpace1">
            <img src="../images/about/c9.png" alt="img" />
          </box>
        </Carousel>
      </Box>
    </div>
    
  );
};

export default Company;
