import { Box, Typography, Grid } from '@mui/material'
import React from 'react'
const Banner = () => {
  return (
    <>
      
      <Box className='desk'    sx={{ display: { xs: 'none', sm: 'block' } }}>
            <Box sx={{display:"flex", }} >
        <Box className="textbanner"   > 

 <Box  >
                 <Typography sx={{ fontSize: "60px", fontWeight: "800" }}> <span style={{ color: "#42a5f5" }}>About  Us </span></Typography>
                            
            <Typography sx={{ fontSize: "60px", fontWeight: "800" ,color: "#64EBB6"}}>
              SIWAN DOCTOR
              </Typography>
          </Box>  
          

          <Typography>
        Welcome to our medical information platform, dedicated to providing reliable and comprehensive healthcare knowledge to empower individuals in managing their well-being. At our core, we are committed to delivering accurate, up-to-date medical information to foster informed decision-making and promote healthier lifestyles.
          </Typography>  

          <Typography sx={{color:"#42A5F5"}}>
            “Join the best Be the best”  “Join us be the best”
          </Typography>
          <Typography>
            Welcome to our medical information platform, dedicated to providing reliable and comprehensive healthcare knowledge to empower individuals in managing their well-being. At our core, we are committed to delivering accurate, up-to-date medical information to foster informed decision-making and promote healthier lifestyles.
          </Typography>          
          <Typography>
            Thank you for trusting us with your healthcare needs. Together, let's embark on a journey towards better health and well-being.
          </Typography>
        </Box>
        <Box  sx={{ width: "50%" }}>  
          <Box sx={{position:'absolute'}}>
  <img src="../images/about/doctor1.png" style={{height:"344px",width:"449px",marginLeft:"-136px",marginTop:"146px"}}></img>
          </Box>
               <img src="../images/about/banner.png"  style={{height:"693px",width:"450px",}}></img>
          </Box>
        </Box>
</Box>
<Box className='mobile'   sx={{ display: { xs: 'block', sm: 'none' } }}>
            <Box sx={{display:"block", }} >
        <Box className="textbanner"   > 

 <Box sx={{textAlign:'center'}} >
                 <Typography sx={{ fontSize: "60px", fontWeight: "800" }}> <span style={{ color: "#42a5f5" }}>About  Us </span></Typography>
                            
            <Typography sx={{ color: "#64EBB6",fontSize: "44px", fontWeight: "800" }}>
                SIWAN DOCTOR
              </Typography>
          </Box>        

          <Typography>
        Welcome to our medical information platform, dedicated to providing reliable and comprehensive healthcare knowledge to empower individuals in managing their well-being. At our core, we are committed to delivering accurate, up-to-date medical information to foster informed decision-making and promote healthier lifestyles.
          </Typography>  

          <Typography sx={{color:"#42A5F5"}}>
            “Join the best Be the best”  “Join us be the best”
          </Typography>
          <Typography>
            Welcome to our medical information platform, dedicated to providing reliable and comprehensive healthcare knowledge to empower individuals in managing their well-being. At our core, we are committed to delivering accurate, up-to-date medical information to foster informed decision-making and promote healthier lifestyles.
          </Typography>          
          <Typography>
            Thank you for trusting us with your healthcare needs. Together, let's embark on a journey towards better health and well-being.
          </Typography>
        </Box>
        <Box  sx={{ width: "50%" }}>  
          <Box sx={{position:'absolute'}}>
  <img src="../images/about/doctor1.png" style={{width:"324px",marginLeft:"50px",marginTop:"-6px"}}></img>
          </Box>
               <img src="../images/about/verticalimge.png"  style={{marginTop:"82px"}}></img>
          </Box>
        </Box>
</Box>
    </>
  )
}
export default Banner