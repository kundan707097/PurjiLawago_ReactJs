import { Box } from "@mui/material";
import React from "react";
import Typography from "@mui/material/Typography";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import img1 from "../../assets/image/Dental Care.png";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
// import Box from '@mui/material/Box';
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

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
const SerCar = () => {
  return (
    <div>
      <Box className="bgimg1">
        <Typography className="heed" variant="h2" gutterBottom>
          SPECIALITIES APARTMENT
        </Typography>

        <Carousel responsive={responsive}>
          <box className="imgSpace">
            <img src={img1} alt="img" />
          </box>
          <box className="imgSpace">
            <img src={img1} alt="img" />
          </box>
          <box className="imgSpace">
            <img src={img1} alt="img" />
          </box>
          <box className="imgSpace">
            <img src={img1} alt="img" />
          </box>
          <box className="imgSpace">
            <img src={img1} alt="img" />
          </box>
          <box className="imgSpace">
            <img src={img1} alt="img" />
          </box>
          <box className="imgSpace">
            <img src={img1} alt="img" />
          </box>
          <box className="imgSpace">
            <img src={img1} alt="img" />
          </box>
        </Carousel>
      </Box>
    </div>
  );
};

export default SerCar;
