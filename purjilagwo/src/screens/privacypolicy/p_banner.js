import { Box ,Typography } from '@mui/material'
import React from 'react'
const P_Banner = () => {
return (
<>
<Box className='banner' sx={{ display: { xs: 'none', sm: 'block' }}}>
<Box sx={{display:"flex",mb:10}}>
<Box>
<Box sx={{ marginLeft: "557px", color: "white", position: "relative", marginTop: "147px" }}>
<Typography sx={{ marginLeft: "86px" }}  > 
<span>DATE :15 JULY 2024
CONTACT US
</span>  
</Typography>
<Typography sx={{fontWeight: 600,fontSize: { xs: "22px", lg: "65px" ,marginLeft:"-360px"}}}> 
PRIVACY POLICY SIWANDOCTOR
</Typography>
<Typography sx={{ marginLeft: "86px" }}  > 
<span>"JOIN THE BEST BE THE BEST"
</span>  
</Typography>
</Box>
<img src="../../images/banner_f.png" alt="" style={{ height: "100%"  , marginTop:"-316px", }} />       
</Box>
</Box>
</Box>
<Box className='banner1' sx={{ display: { xs: 'block', sm: 'none' }}}> 
<Box   sx={{display:"flex",mb:10}}>
<Box >
                    <Box sx={{ marginLeft: "84px", color: "white", position: "absolute", marginTop: "50px" }}>
                        < Typography sx={{ marginLeft: "48px" }}  > 
 DATE :15 JULY 2024
 
</Typography>
<Typography sx={{fontWeight: 600,fontSize: { xs: "16px", lg: "65px" } ,marginRight:"80px"}}> 
PRIVACY POLICY SIWANDOCTOR 
                        </Typography>
                     < Typography sx={{ marginLeft: "28px" }}  > 
"JOIN THE BEST BE THE BEST"
 
</Typography>
                    
                    </Box>
                
<img src="../../images/contact/banner_contact_us_mobile_view.png" alt=""   style={{ height: "100%"  , width:"430px" }} />       
</Box>
</Box>
</Box>
</>
)
}

export default P_Banner