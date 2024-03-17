import { Box, Typography, Grid } from '@mui/material'
import React from 'react'
const Cards = () => {
return (
    <>
        
        <Box  className='deskt'   sx={{ display: { xs: 'none', sm: 'block' } }}>

    
<Box sx={{display:"flex", marginLeft:"220px",}}>
<Box className="cards_coalss1">
<img src='../images/about/image1.png' style={{ marginLeft:"37px"}}>
</img>
<Typography sx={{textAlign:"center",marginTop:"10px"}}>
<Typography sx={{color:"#1C4188",fontWeight:"bold",fontSize:"21px"}}>EASY
</Typography> <Typography sx={{color:"#1C4188",fontWeight:"bold",fontSize:"21px"}}>ARPARTMENT
</Typography>
</Typography>
<img src='../images/about/easy.png'  style={{position: "absolute", marginTop: "31px",                            marginLeft: "-17px", height:"104px",borderRadius:"10px"  }}>
</img>
</Box>
<Box className="cards_coalss1">
<img src='../images/about/image1.png' style={{ marginLeft:"20px"}}>
</img>
<Typography sx={{textAlign:"center",marginTop:"10px"}}>
<Typography sx={{color:"#1C4188",fontWeight:"bold",fontSize:"21px"}}>VIDEO
</Typography> <Typography sx={{color:"#1C4188",fontWeight:"bold",fontSize:"21px"}}>CONSOLING
</Typography>
</Typography>
<img src='../images/about/camera.png'  style={{position: "absolute", marginTop: "31px",                            marginLeft: "-17px", height:"104px",borderRadius:"10px"  }}>
</img>
            </Box>
            <Box className="cards_coalss1">
<img src='../images/about/image1.png' style={{ marginLeft:"20px"}}>
</img>
<Typography sx={{textAlign:"center",marginTop:"10px"}}>
<Typography sx={{color:"#1C4188",fontWeight:"bold",fontSize:"21px"}}>SAFE
</Typography> <Typography sx={{color:"#1C4188",fontWeight:"bold",fontSize:"21px"}}>PAYMENT
</Typography>
</Typography>
<img src='../images/about/email.png'  style={{position: "absolute", marginTop: "31px",                            marginLeft: "-34px", height:"104px",borderRadius:"10px"  }}>
</img>
            </Box>
            <Box className="cards_coalss1">
<img src='../images/about/image1.png' style={{ marginLeft:"20px"}}>
</img>
<Typography sx={{textAlign:"center",marginTop:"10px"}}>
<Typography sx={{color:"#1C4188",fontWeight:"bold",fontSize:"21px"}}>EMERGENCY
</Typography> <Typography sx={{color:"#1C4188",fontWeight:"bold",fontSize:"21px"}}>SERVICE
</Typography>
</Typography>
<img src='../images/about/light.png'  style={{position: "absolute", marginTop: "31px",                            marginLeft: "-28px", height:"104px",borderRadius:"10px"  }}>
</img>
</Box>
</Box>

       </Box>     
<Box  className='mobile'   sx={{ display: { xs: 'block', sm: 'none' } }}>

    
                     <Box>
                            <Box  sx={{ display: "flex", }}>
                                 
<Box className="cards_coalss1">
<img src='../images/about/image1.png' style={{ marginLeft:"37px"}}>
</img>
<Typography sx={{textAlign:"center",marginTop:"10px"}}>
<Typography sx={{color:"#1C4188",fontWeight:"bold",fontSize:"21px"}}>EASY
</Typography> <Typography sx={{color:"#1C4188",fontWeight:"bold",fontSize:"21px"}}>ARPARTMENT
</Typography>
</Typography>
<img src='../images/about/easy.png'  style={{position: "absolute", marginTop: "31px",                            marginLeft: "-17px", height:"104px",borderRadius:"10px"  }}>
</img>
</Box>
<Box className="cards_coalss1">
<img src='../images/about/image1.png' style={{ marginLeft:"20px"}}>
</img>
<Typography sx={{textAlign:"center",marginTop:"10px"}}>
<Typography sx={{color:"#1C4188",fontWeight:"bold",fontSize:"21px"}}>VIDEO
</Typography> <Typography sx={{color:"#1C4188",fontWeight:"bold",fontSize:"21px"}}>CONSOLING
</Typography>
</Typography>
<img src='../images/about/camera.png'  style={{position: "absolute", marginTop: "31px",                            marginLeft: "-17px", height:"104px",borderRadius:"10px"  }}>
</img>
                                   </Box>
                                   </Box> 
                           <Box  sx={{ display: "flex", marginTop:"60px"}}>
                             
            <Box className="cards_coalss1" sx={{paddingRight:"45px",paddingLeft:"45px"}}>
<img src='../images/about/image1.png' style={{ marginLeft:"20px"}}>
</img>
<Typography sx={{textAlign:"center",marginTop:"10px"}}>
<Typography sx={{color:"#1C4188",fontWeight:"bold",fontSize:"21px"}}>SAFE
</Typography> <Typography sx={{color:"#1C4188",fontWeight:"bold",fontSize:"21px"}}>PAYMENT
</Typography>
</Typography>
<img src='../images/about/email.png'  style={{position: "absolute", marginTop: "31px",                            marginLeft: "-34px", height:"104px",borderRadius:"10px"  }}>
</img>
            </Box>
            <Box className="cards_coalss1">
<img src='../images/about/image1.png' style={{ marginLeft:"20px"}}>
</img>
<Typography sx={{textAlign:"center",marginTop:"10px"}}>
<Typography sx={{color:"#1C4188",fontWeight:"bold",fontSize:"21px"}}>EMERGENCY
</Typography> <Typography sx={{color:"#1C4188",fontWeight:"bold",fontSize:"21px"}}>SERVICE
</Typography>
</Typography>
<img src='../images/about/light.png'  style={{position: "absolute", marginTop: "31px",                            marginLeft: "-28px", height:"104px",borderRadius:"10px"  }}>
</img>
                                   </Box>
                                     </Box> 
</Box>

       </Box>     
</>
)
}
export default Cards