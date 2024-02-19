import React from 'react';
import { Box, Typography } from '@mui/material';
import icon from "../../assets/dashboard/icon.png";
import Upcomming_icon from "../../assets/dashboard/Upcomming icon.png";
import bed_icon from "../../assets/dashboard/Bed icon.png";
import book_icon from "../../assets/dashboard/book icon.png";
import Cancel_icon from "../../assets/dashboard/Cancel Icon.png";
import group_265 from "../../assets/dashboard/Group 265.png";
// import Upcomming_icon from "../../assets/dashboard/Upcomming icon.png";
// import Upcomming_icon from "../../assets/dashboard/Upcomming icon.png";




const HomeDashboard = () => {
  return (
    <Box >
      <Box display="flex" justifyContent="space-between">
        <Box  sx={{border: "1px solid", borderRadius: 1, p:1, borderColor: "#f3efef"}}>
          <Typography >
            Total Number of patient
            <img style={{"padding": "10px"}} src={icon} alt="Logo" className="" />
          </Typography>
          <Typography >4500</Typography>
          <Typography >Last month successful 140 patients</Typography>
        </Box>
        <Box sx={{border: "1px solid", borderRadius: 1, p:1, borderColor: "#f3efef"}}>
          <Typography >
            Total Upcoming Apartment
            <img style={{"padding": "10px"}} src={Upcomming_icon} alt="Logo" className="" />
          </Typography>
          <Typography >1147</Typography>
          <Typography >Last Month Positive 217 Reviews</Typography>
        </Box>
        <Box sx={{border: "1px solid", borderRadius: 1,  borderColor: "#f3efef"}}>
          <Typography  >
            My Last Month Treatment
            <img  src={group_265} alt="Logo" className="" />
          </Typography>
          <Typography >
            <img style={{"padding": "10px"}} src={bed_icon} alt="Logo" className="" />
            <img style={{"padding": "10px"}} src={book_icon} alt="Logo" className="" />
            <img style={{"padding": "10px"}} src={Cancel_icon} alt="Logo" className="" />
          </Typography>
          <Typography >50</Typography>
        </Box>
      </Box>
      <Box mt={3}>
        <Typography variant="h5" gutterBottom>
          Recent Orders
        </Typography>
        <Box>
          {/* Render recent orders here */}
          {/* Example: */}
          <Typography variant="body1">Order #1234 - $50</Typography>
          <Typography variant="body1">Order #1235 - $30</Typography>
          <Typography variant="body1">Order #1236 - $20</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default HomeDashboard;
