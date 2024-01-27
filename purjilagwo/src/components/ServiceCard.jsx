import { Avatar, Box, Button, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

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
        window.location.href = `/doctorlistbyId/${groupId}`
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
        <Link to={props.link} style={{ width: "100%", textAlign: "center", mt: "10px" }}>
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

// export const ServiceCard = (props) => {
//   return (
//     <Box
//       sx={{
//         width: "20rem",
//         border: "1px solid #E5EAF2",
//         borderRadius: "12px",
//         m: "2rem",
//         p: "2rem",
//         boxShadow: "0px 4px 6px rgba(0,0,0, 0.05)",
//       }}
//     >
//       <Box
//         sx={{
//           width: "100%",
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "ce",
//         }}
//       >
//         <Avatar
//           alt="Remy Sharp"
//           src={props.imgsrc}
//           sx={{ width: 80, height: 80, border: "1px solid blue", mx: "auto" }}
//         />
//         <Typography
//           sx={{
//             fontWeight: 600,
//             fontSize: "15px",
//             textAlign: "center",
//             mt: "15px",
//           }}
//         >
//           {props.department}
//         </Typography>

//         <Link
//           to={props.link}
//           style={{ marginLeft: "auto", marginRight: "auto" }}
//         >
//           <Button
//             variant="contained"
//             sx={{ background: "#42A5F5", borderRadius: "12px", mt: "10px" }}
            
//           >
//             Consult Now
//           </Button>
//         </Link>
//       </Box>
//     </Box>
//   );
// };
