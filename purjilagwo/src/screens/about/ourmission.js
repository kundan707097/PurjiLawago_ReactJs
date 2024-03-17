import { Box, Typography, Grid } from '@mui/material'
import React from 'react'
const Ourmission = () => {
return (
    <>
        <Box className='dest'   sx={{ display: { xs: 'none', sm: 'block' } }}>
   <Box sx={{display:"flex" ,marginTop:"200px"}}>
            <Box sx={{width:"50%",background:"#cfe8fb",padding:"42px"}}>
                <Typography sx={{fontSize:'36px', color:"#0e8ff7",lineHeight:"1"}}>
                    OUR
                    </Typography>
                    <Typography sx={{fontSize:'66px',color:"#ff8e00",lineHeight:"1"}}>
                 
                    MISSION
                </Typography>
                <img src='../images/about/leftbg.png' style={{width:"200px",float:"left",marginLeft:"-40px"}}>

                </img>
                <Typography  className='fontcolor' sx={{marginRight:"781px",position:"absolute",zIndex:"100",marginTop:"50px"}} >
                    To revolutionize healthcare by providing accessible, accurate, and personalized medical information to empower individuals in making informed decisions about their health. To revolutionize healthcare by providing accessible, accurate, and personalized medical information to empower individuals in making informed decisions about their health.
                </Typography>
            </Box>
                <Box sx={{width:"50%",background:"#d7feef",padding:"42px"}}>
                 <Typography sx={{fontSize:'36px', color:"#0e8ff7",lineHeight:"1"}}>
                    OUR
                    </Typography>
                    <Typography sx={{fontSize:'66px',color:"#ff8e00",lineHeight:"1"}}>
                 
                    VISION
                </Typography>
                 <img src='../images/about/rightbg.png ' style={{float:"right",width:"44%",position:'relative'}}>

                </img>
                   <Typography  className='fontcolor' sx={{position:"absolute",marginRight:"138px",marginTop:"50px"}}  >
                   We envision a world where everyone has the knowledge and resources they need to take control of their health and well-being. Through innovative technologies and a commitment to excellence, we aim to be the leading source of trusted medical information, improving health outcomes and transforming lives globally.
                </Typography>
            </Box>
</Box>
        </Box>
     <Box className='mpobile'   sx={{ display: { xs: 'block', sm: 'none' } }}>
   <Box sx={{display:"block" ,marginTop:"20px"}}>
            <Box sx={{background:"#cfe8fb",paddingTop:"45px",paddingLeft:"33px",paddingBottom:"110px"}}>
                <Typography sx={{fontSize:'36px', color:"#0e8ff7",lineHeight:"1"}}>
                    OUR
                    </Typography>
                    <Typography sx={{fontSize:'66px',color:"#ff8e00",lineHeight:"1"}}>
                 
                    MISSION
                </Typography>
                <img src='../images/about/leftbg.png' style={{width:"156px",float:"left",marginLeft:"-40px",marginTop:"-101px"}}>

                </img>
                <Typography  className='fontcolor' sx={{position:"absolute", marginLeft:"20px",zIndex:"100",marginTop:"5px",textAlign:"justify",marginLeft:"1px ,!important",marginRight:"20px"}} >
                    To revolutionize healthcare by providing accessible, accurate, and personalized medical information to empower individuals in making informed decisions about their health. To revolutionize healthcare by providing accessible, accurate, and personalized medical information to empower individuals in making informed decisions about their health.
                </Typography>
            </Box>
                <Box sx={{background:"#d7feef",paddingTop:"45px",paddingLeft:"33px",paddingBottom:"189px"}}>
                 <Typography sx={{fontSize:'25px', color:"#0e8ff7",lineHeight:"1"}}>
                    OUR
                    </Typography>
                    <Typography sx={{fontSize:'40px',color:"#ff8e00",lineHeight:"1"}}>
                 
                    VISION
                </Typography>
                 <img src='../images/about/rightbg.png ' style={{float:"right",width:"44%",position:'relative'}}>

                </img>
                   <Typography  className='fontcolor' sx={{position:"absolute",marginTop:"5px",marginLeft:"6px",textAlign:"justify",marginRight:"20px"}}  >
                   We envision a world where everyone has the knowledge and resources they need to take control of their health and well-being. Through innovative technologies and a commitment to excellence, we aim to be the leading source of trusted medical information, improving health outcomes and transforming lives globally.
                </Typography>
            </Box>
</Box>
        </Box>
</>
)
}
export default Ourmission