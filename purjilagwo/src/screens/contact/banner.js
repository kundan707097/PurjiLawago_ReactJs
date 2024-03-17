import { Box ,Typography } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import React from 'react'

const Banner = () => {
  return (
    <>
      <Box className='banner' sx={{ display: { xs: 'none', sm: 'block' }}}>

      
    <Box sx={{display:"flex",mb:10}}>
       <Box >
          <Box sx={{ marginLeft: "515px", color: "white", position: "relative", marginTop: "172px" }}><Typography sx={{ marginLeft: "86px" }}  > 
                  <span>HOME 
</span> <img style={{ height: "20px",width: "20px" }}src='../../images/contact/arrow_back.png'></img>  <span> CONTACT US
</span>  
                     </Typography>
    <Typography sx={{fontWeight: 600,fontSize: { xs: "22px", lg: "65px" }}}> 
    CONTACT US   
                     </Typography></Box>
       
    <img src="../../images/contact/about_us.png" alt=""   style={{ height: "100%"  , marginTop:"-293px", }} />       
      </Box>
    </Box>

</Box>

      <Box className='banner1' sx={{ display: { xs: 'block', sm: 'none' }}}> 
    <Box   sx={{display:"flex",mb:10}}>
       <Box >
          <Box sx={{ marginLeft: "84px", color: "white", position: "absolute", marginTop: "50px" }}><Typography sx={{ marginLeft: "48px" }}  > 
                  <span>HOME 
              </span>
              <img style={{ height: "20px", width: "20px" }}
                src='../../images/contact/arrow_back.png'></img> 
             <span> CONTACT US
</span>  
                     </Typography>
    <Typography sx={{fontWeight: 600,fontSize: { xs: "22px", lg: "65px" } ,marginLeft:"59px"}}> 
    CONTACT US   
              </Typography></Box>
            
       
    <img src="../../images/contact/banner_contact_us_mobile_view.png" alt=""   style={{ height: "100%"  , width:"430px" }} />       
      </Box>
    </Box>

</Box>



    </>
  )
}

export default Banner