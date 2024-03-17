import React from "react";
import img1 from "../../assets/image/Hero_Section_f.png";
import img2 from "../../assets/image/ser1.png";
import { Box, Typography } from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import CopyrightIcon from "@mui/icons-material/Copyright";
import SavedSearchIcon from "@mui/icons-material/SavedSearch";
import "./surgeries.css";
import SerCar from "./SerCar";
import LiveCounter from "../../components/LiveCounter";
import Footer from "../../components/Footer";
import Treatment from "./treatment";
import WhySection from "./WhySection";
import Doctors from "../doctorInformationScreen/DoctorList";
import SearchBtn from "./searchbtn";
import SerText from "./SerText";
import SerImg from "./SerImg";
import HowD from "./HowD";
import ExpD from "./ExpD";
import OurD from "./OurD";
import mobileimg from '../../assets/image/mobileView.png'
import VideoSection from "./VideoSection";
import Appointment_section from "./appointment_section";


const surgeries = () => {
  return (
    <div >
      <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
        <Box className="bg">
          <img src={img1} alt="img" />
        </Box>
        <div className="upper_img">
          <img src={img2} alt="img" />
        </div>
        <Box class="cont_div">
          <Box className="cont">
            <PhoneIcon className="phoneicon" />
            <span> 9977885566</span>
          </Box>
          <Box class="gmailDiv">
            <Typography>Coder@gmail.com</Typography>
          </Box>
        </Box>
        <Box className="cont_div1">
          <SearchBtn />
        </Box>
      </Box>
      <Box className='jhgfd' sx={{ display: { xs: 'block', sm: 'none' } }}>
      <img src={mobileimg} alt="img"/>
      </Box>
      <Box>
        <SerCar />
      </Box>
      <Box>
        <Treatment />
      </Box>
      <Box>
        <WhySection />
        <SerText />
        <SerImg />
        <HowD />
      <Appointment_section/>
        <ExpD />
        <OurD />
        <VideoSection/>
      </Box>

      <LiveCounter />
      <Footer />
    </div>
  );
};

export default surgeries;
