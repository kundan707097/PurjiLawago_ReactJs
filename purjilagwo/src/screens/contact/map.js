import { Box } from '@mui/material'
import React from 'react'

const Map = () => {
  return (
    <>
    <Box sx={{pt:10,display:{xs:'none' ,sm:'block'}}}>
    <img  src="../images/contact/Our_map.png" alt="" style={{ height: "100%"  , marginTop:"-16px",height: "916px",width: "1543px" }} />

      </Box>
      
      <Box sx={{pt:10,display:{xs:'block' ,sm:'none'}}}>
    <img  className='map'  src="../images/contact/Our_map.png" alt=""  />

    </Box>
    </>
  )
}

export default Map