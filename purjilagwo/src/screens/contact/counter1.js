import { Box ,Grid,Typography} from '@mui/material'
import React from 'react'
import LiveCounter from '../../components/LiveCounter'
const Counter1 = () => {
  return (
    <>
      <Box className='desk-counter' sx={{display:{  xs: 'none', sm: 'block' }}}>

      
        <Grid container sx={{ paddingTop: "151px", paddingLeft: "200px", paddingRight: "85px",paddingBottom:"226px" }} >
        <Box  sx={{background:"green",position:'absolute',top:"3400px",left:"0px",zIndex:"1" }} >
       <img src="../images/contact/capsule.png" style={{height:"700px",width:"400px",}}        >
            </img>
          
          </Box>
          <Box sx={{ background: "#42a5f5", paddingLeft:"74px",paddingTop: "137px", paddingBottom: "123px", zIndex: "10",paddingRight:"28px" }} >
            <img src='../images/contact/circile.png' style={{position:'absolute', marginLeft:"820px",height:"300px"}}></img>
            <Typography sx={{color:"white" , fontSize:"40px",fontWeight:"400",lineHeight:"35px" ,marginBottom:"20px"}}>
              “Our team any consists offfen passionate healthcare The professionals, including doctors, nurses ”  
            
          </Typography>
      <Typography sx={{color:"white",fontSize:"28px",fontWeight:"400",lineHeight:"32px",textalign:"justify" }}>
Our team consists of passionate healthcare professionals, including doctors, 
nurses, and medical researchers, who are dedicated to ensuring the integrity 
and reliability of the information we provide. With a focus on evidence-based 
practices and the latest medical research. practices and the latest medical 
researjrt
        </Typography>
        </Box>
        </Grid>
        </Box>
    </>
  )
}

export default Counter1