import React from "react";
import { Link } from "react-router-dom";
import { Avatar, Box, Button, Typography } from "@mui/material";

import svg1 from "../../src/assets/vectors/image 43.svg";

const ServiceCard = (props) => {
  // Handle the click event
  const handleCardClick = async () => {
    debugger;
    try {
      // Extract the groupId from the link (assuming link is of the form "/doctorsgroup/:groupId")
      const groupId = props.groupId;

      // const response = await fetch(`https://localhost:44324/DoctorsGroup/groupId?groupId=${groupId}`);
      // const apiData = await response.json();

      // Check if response has data
      if (groupId) {
        // Navigate to DoctorsList page with the fetched data
        window.location.href = `/doctorlistbyId/${groupId}`;
      }
    } catch (error) {
      console.error("Error fetching data from API:", error);
    }
  };

  return (
    <Box
      sx={{
        width: "20rem",
        border: "1px solid #E5EAF2",
        borderRadius: "12px",
        m: "2rem",
        p: "2rem",
        boxShadow: "0px 4px 6px rgba(0,0,0, 0.05)",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center", // Center the content horizontally
        }}
      >
        <Avatar
          alt="Remy Sharp"
          src={props.imgsrc}
          sx={{ width: 80, height: 80, border: "1px solid blue" }}
        />
        <Typography
          sx={{
            fontWeight: 600,
            fontSize: "15px",
            textAlign: "center",
            mt: "15px",
          }}
        >
          {props.department}
        </Typography>

        {/* Pass the handleCardClick function to onClick */}
        <Link
          to={props.link}
          style={{ width: "100%", textAlign: "center", mt: "10px" }}
        >
          <Button
            variant="contained"
            sx={{ background: "#42A5F5", borderRadius: "12px" }}
            onClick={handleCardClick}
          >
            Book Your Appointment
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default ServiceCard;

export const SpecialitiesCard = (props) => {
  return (
    <>
      <Box
        sx={{
          width: {xs: "150px", lg: "auto"},
          border: "2px solid white",
          background: "#DBEEFC",
          py: 3,
          px: 4,
          borderRadius: "10px",
          mx:"auto"
        }}
      >
        {/* <Avatar
          alt="Remy Sharp"
          src={svg1}
          sx={{ width: 90, height: 90, mx: "auto", background: "white" }}
        /> */}
        <Box
          sx={{
            backgroundColor: "white",
            borderRadius: "100px",
            width: 90,
            height: 90,
            mx: "auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={props.imgsrc ? props.imgsrc : svg1} alt="" />
        </Box>

        <Typography
          sx={{
            color: "#1C4188",
            fontSize: "18px",
            fontWeight: 500,
            textAlign: "center",
            mt: 5,
          }}
        >
          {props.department ? props.department : "Cardiology"}
        </Typography>
        <Typography
          sx={{
            color: "#8E999A",
            fontSize: "14px",
            fontWeight: 500,
            textAlign: "center",
            mt: 1,
          }}
        >
          123+ Doctors
        </Typography>

        <Link
          to={`/doctorlistbyId/${props.groupId}`}
          style={{ color: "#00B69B" }}
        >
          <Box
            sx={{
              p: "8px 24px",
              border: "1px solid #00B69B",
              borderRadius: "10px",
              textAlign: "center",
              mt: 2,
              "&:hover": {
                backgroundColor: "#00B69B",
                color: "white",
              },
              transitionDuration: "100ms",
            }}
          >
            Book Now
          </Box>
        </Link>
      </Box>
    </>
  );
};
