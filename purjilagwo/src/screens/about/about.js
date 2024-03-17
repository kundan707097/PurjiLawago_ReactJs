import React from 'react'
import {Box ,Typography,Grid} from "@mui/material"
import A_counter1 from './a_counter1'; 
import Contact_us_input from '../contact/contact_us_input';
import InfoBanner from '../homeScreen/InfoBanner';
import LiveCounter from '../../components/LiveCounter';
import Footer from '../../components/Footer';
import Banner from './banner';
import "./about.css";
import Cards from './cards';
import Company from './company';
import Ourmission from './ourmission';
import Ourdoctor from './ourdoctor';
const About = () => {
  return (
    <>
      <Banner/>
      <InfoBanner />
      <A_counter1 />
      <Cards />
      <Company /> 
      <Ourdoctor />
      <Ourmission />
      <Contact_us_input />
      <Box sx={{marginTop:"20px"}} >

      </Box>
      <LiveCounter />
        <Footer/>
    </>
  )
}

export default About