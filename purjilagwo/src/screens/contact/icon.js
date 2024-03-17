import { Box ,Typography} from '@mui/material'
import React from 'react'
const Icon = () => {
return (
<>
<Box classname='desktop-contact' sx={{display: { xs: 'none', sm: 'block' } }}>


<Box class="container-xxl">   
<Box sx={{ display: "flex", justifyContent:"space-around"}}>                  

<Box sx={{justifyContent:"center"}}>
<img src="../images/contact/email.png" style={{height:"90px"} }>                     
</img> 
<Typography sx={{color:"#1c4188" , marginTop:"5px", marginLeft:"-30px" }}>
Purjilagwo@gmail.com
</Typography>
<img src="../images/contact/bottomline.png"    style={{height:"15px"} }>
</img> 
</Box>
<Box>
<img src="../images/contact/call.png" style={{height:"90px"} }>                  
</img> 
<Typography sx={{color:"#1c4188", marginTop:"5px", marginLeft:"-15px"  }}>
+895646456454
</Typography>
<img src="../images/contact/bottomline.png"
style={{height:"15px"} }>
</img> 
</Box>     
<Box>
<img src="../images/contact/time.png"  style={{height:"90px"} }>

</img>
<Typography sx={{color:"#1c4188" ,marginTop:"5px", marginLeft:"10px"  }}>
8Am 10 PM
</Typography>
<img src="../images/contact/bottomline.png"
style={{height:"15px"} }>
</img> 
</Box>

<Box>
<img src="../images/contact/location.png" style={{height:"90px"} }>

</img>  
<Typography sx={{color:"#1c4188" , marginTop:"5px", marginLeft:"-30px"  }}>
Bashakhi Siwan, Bihar,
</Typography> 
<img src="../images/contact/bottomline.png"
style={{height:"15px"} }>
</img> 
</Box>          
</Box>

</Box> 
</Box>  


            
<Box  classname="mobile_icon"   sx={{display:  { xs: 'block', sm: 'none' }}}>

<Box class="container-sm">   
<Box sx={{display:"flex" ,justifyContent:"space-evenly"}}>                  

<Box sx={{justifyContent:"center"}}>
<img src="../images/contact/email.png" style={{height:"90px"} }>                     
</img> 
<Typography sx={{color:"#1c4188" , marginTop:"5px", marginLeft:"-30px" }}>
Purjilagwo@gmail.com
</Typography>
<img src="../images/contact/bottomline.png"    style={{height:"15px"} }>
</img> 
</Box>
<Box>
<img src="../images/contact/call.png" style={{height:"90px"} }>                  
</img> 
<Typography sx={{color:"#1c4188", marginTop:"5px", marginLeft:"-15px"  }}>
+895646456454
</Typography>
<img src="../images/contact/bottomline.png"
style={{height:"15px"} }>
</img> 
</Box> 
</Box>
<Box sx={{display:"flex",justifyContent:"space-evenly",marginTop:"20px"}}>


<Box>
<img src="../images/contact/time.png"  style={{height:"90px"} }>

</img>
<Typography sx={{color:"#1c4188" ,marginTop:"5px", marginLeft:"10px",  }}>
8Am 10 PM
</Typography>
<img src="../images/contact/bottomline.png"
style={{height:"15px"} }>
</img> 
</Box>

<Box>
<img src="../images/contact/location.png" style={{height:"90px"} }>

</img>  
<Typography sx={{color:"#1c4188" , marginTop:"5px", marginLeft:"-30px"  }}>
Bashakhi Siwan, Bihar   
</Typography> 
<img src="../images/contact/bottomline.png"
style={{height:"15px"} }>
</img> 
</Box>      

</Box>
</Box>   
</Box>


</>
)
}

export default Icon