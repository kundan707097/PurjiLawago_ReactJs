import { Box ,Typography} from '@mui/material'
import React from 'react'

const Contact_us_input = () => {
  return (
      <>
      <Box  className='desktop-input' sx={{ display: { xs: 'none', sm: 'block' } }}>
      
        <Box class="container" style={{  marginTop:"100px"}}>
              
          
   <Box  sx={{marginLeft:"30px",marginBottom:"30px"}}>
                 <Typography sx={{ fontSize: "60px", fontWeight: "800" }}> <span style={{ color: "#42a5f5" }}>CONTACT </span> <span style={{ color: "#83efc5" }}>US</span></Typography>
              <img src='../images/contact/Line27.png'>                  
              </img>
              </Box>       
          <Box  sx={{marginRight:"50px" }}>
                  {/* {this is div 1} */}
                  <Box sx={{ display: 'flex', width: "50%" }}>
                      
                   <input style={{
                    border: "2px solid #83efc5",
                    color: "#42A5F5",
                    width: "80%",
                      marginLeft: "5px",
                      borderRadius: "7px",
                    height:"50px"
                  }}
                  
                  type="text"
                  placeholder="First Name"
                  list="locationList"></input> <input style={{
                    border: "2px solid #83efc5",
                    color: "#42A5F5",
                    width: "80%",
                      marginLeft: "5px",
                    borderRadius: "7px",
                    height:"50px"
                  }}
                  
                  type="text"
                  placeholder="Last Name"
                      list="locationList"></input>              
                </Box>
        <Box sx={{display:"flex" ,width:"50%" ,marginTop:"20px"}}>
                       <input style={{
                    border: "2px solid #83efc5",
                    color: "#42A5F5",
                    width: "80%",
                      marginLeft: "5px",
                      borderRadius: "7px",
                    height:"50px"
                  }}
                  
                  type="text"
                  placeholder="First Name"
                  list="locationList"></input> <input style={{
                    border: "2px solid #83efc5",
                    color: "#42A5F5",
                    width: "80%",
                      marginLeft: "5px",
                    borderRadius: "7px",
                    height:"50px"
                  }}
                  
                  type="text"
                  placeholder="Last Name"
                  list="locationList"></input>
              </Box>
              <Box sx={{display:"flex" ,width:"50%" ,marginTop:"20px"}}>
                      
                  
        <textarea type="text" placeholder="First Name" list="locationList" style={{ border: "2px solid rgb(131, 239, 197)",color:" rgb(66, 165, 245)",width: "100%",marginLeft: "5px",borderRadius:"7px", height:"214px" }}></textarea>
              
          </Box>
          <Box component={"button"} sx={{
                        textAlign:"center",  backgroundColor: "#42a5f5", width: "30%", border: "1px solid #F5F5F5",color:"white",marginTop:"20px",paddingRight:"20px",paddingLeft:"20px",paddingTop:"20px",paddingBottom:"20px",borderRadius:"10px"
                      }}  > SUBMIT   </Box>
          </Box>
          <Box sx={{ float:"right",    position: "relative", 
    width: "686px"   ,  marginTop: "-444px" ,marginRight:"15px"}}>
              <Box sx={{ marginLeft:"137px"}}>
                  <Typography sx={{marginBottom: "16px" ,textAlign:"justify"}}>Whether you're seeking information on specific medical conditions, treatments, or general health and wellness tips, we aim to be your go-to resource. Our mission is to empower individuals to take control of their health by providing accessible, understandable, and actionable information.</Typography>
                 
                  <Box>
                      <span>
                      <img src="../images/contact/distance.png" style={{ width: "22px" }}>
                      
                  </img>
                     <span style={{ fontWeight:"600", fontSize:"20px", color:"#1c4188"}}> &nbsp; Head Office : Bashakhi Siwan, Bihar(841226)</span> 
                  </span> 
                 </Box>
                 
                   <Box sx={{marginTop:"7px"}}>
                      <span>
                      <img src="../images/contact/distance.png" style={{ width: "22px" }}>
                      
                  </img>
                     <span style={{ fontWeight:"600", fontSize:"20px", color:"#1c4188"}}> &nbsp; Office  New Your: 2758  Washington USA(841226)</span> 
                  </span> 
                 </Box>
                    <Box sx={{marginTop:"7px"}}>
                      <span>
                      <img src="../images/contact/distance.png" style={{ width: "22px" }}>
                      
                  </img>
                     <span style={{ fontWeight:"600", fontSize:"20px", color:"#1c4188"}}> &nbsp; Medicine Factory : 2358 Shores Blvd USA(841226)</span> 
                  </span> 
                 </Box>
            <Box sx={{ display:"flex" ,justifyContent:"space-evenly", marginTop:"40px"}}>
              <img src="../images/contact/facebook.png">

              </img>
                  <img src="../images/contact/pinert.png">

              </img>
                  <img src="../images/contact/instagram.png">

              </img>
                  <img src="../images/contact/tiwtter.png">

              </img>

                  </Box>
              </Box>  
              </Box>
              </Box>
      
      </Box> 
      
      
      
      
<Box className='mobile-input' sx={{ marginTop: "20px", display: { xs: 'block', sm: 'none' } }}>

<Box  sx={{marginLeft:"38px",marginBottom:"30px"}}>
<Typography sx={{ fontSize: "34px", fontWeight: "800" }}> <span style={{ color: "#42a5f5" }}>CONTACT </span> <span style={{ color: "#83efc5" }}>US</span></Typography>
<img className='bottomline'    src='../images/contact/Line27.png'>                  
</img>
</Box>
<Box sx={{ float:"right", marginBottom:"20px"  , position: "relative", 
width: "686px"   ,  marginTop: "-14px" ,marginRight:"15px"}}>
<Box sx={{ marginLeft:"137px"}}>
<Typography sx={{marginBottom: "16px" ,textAlign:"justify",marginLeft:"169px",marginRight:"20px"}}>Whether you're seeking information on specific medical conditions, treatments, or general health and wellness tips, we aim to be your go-to resource. Our mission is to empower individuals to take control of their health by providing accessible, understandable, and actionable information.</Typography>

<Box sx={{marginLeft:"169px",marginRight:"20px"}}> 
<span>
<img src="../images/contact/distance.png" style={{ width: "22px" }}>

</img>
<span style={{ fontWeight:"600", fontSize:"14px", color:"#1c4188" ,}}> &nbsp; Head Office : Bashakhi Siwan, Bihar(841226)</span> 
</span> 
</Box>
<Box sx={{marginLeft:"169px",marginRight:"20px",marginTop:"7px"}}> 

<span>
<img src="../images/contact/distance.png" style={{ width: "22px" }}>

</img>
<span style={{ fontWeight:"600", fontSize:"14px", color:"#1c4188",}}> &nbsp; Office  New Your: 2758  Washington USA(841226)</span> 
</span> 
</Box>
<Box sx={{marginLeft:"169px",marginRight:"20px",marginTop:"7px"}}> 
<span>
<img src="../images/contact/distance.png" style={{ width: "22px" }}>

</img>
<span style={{ fontWeight:"600", fontSize:"14px", color:"#1c4188",}}> &nbsp; Medicine Factory : 2358 Shores Blvd USA(841226)</span> 
</span> 
</Box>

</Box>  
</Box>
<Box class="container" style={{  marginTop:"100px"}}>


<Box  sx={{marginLeft:"20px",marginRight:"20px" }}>
{/* {this is div 1} */}
<Box sx={{ display: 'flex', width: "100%" }}>

<input style={{
border: "2px solid #83efc5",
color: "#42A5F5",
width: "80%",
marginLeft: "5px",
borderRadius: "7px",
height:"50px"
}}

type="text"
placeholder="First Name"
list="locationList"></input> <input style={{
border: "2px solid #83efc5",
color: "#42A5F5",
width: "80%",
marginLeft: "5px",
borderRadius: "7px",
height:"50px"
}}

type="text"
placeholder="Last Name"
list="locationList"></input>              
</Box>
<Box sx={{display:"flex" ,width:"100%" ,marginTop:"20px"}}>
<input style={{
border: "2px solid #83efc5",
color: "#42A5F5",
width: "80%",
marginLeft: "5px",
borderRadius: "7px",
height:"50px"
}}

type="text"
placeholder="First Name"
list="locationList"></input> <input style={{
border: "2px solid #83efc5",
color: "#42A5F5",
width: "80%",
marginLeft: "5px",
borderRadius: "7px",
height:"50px"
}}

type="text"
placeholder="Last Name"
list="locationList"></input>
</Box>
<Box sx={{display:"flex" ,width:"100%" ,marginTop:"20px"}}>


<textarea type="text" placeholder="First Name" list="locationList" style={{ border: "2px solid rgb(131, 239, 197)",color:" rgb(66, 165, 245)",width: "100%",marginLeft: "5px",borderRadius:"7px", height:"214px" }}></textarea>

</Box>
<Box component={"button"} sx={{
textAlign:"center",  backgroundColor: "#42a5f5", width: "30%", border: "1px solid #F5F5F5",color:"white",marginTop:"20px",paddingRight:"20px",paddingLeft:"20px",paddingTop:"20px",paddingBottom:"20px",borderRadius:"10px"
}}  > SUBMIT   </Box>
</Box>

</Box>
<Box sx={{ display:"flex" ,justifyContent:"space-evenly", marginTop:"40px"}}>
<img className="social_media" src="../images/contact/facebook.png">

</img>
<img  className="social_media" src="../images/contact/pinert.png" >

</img>
<img className="social_media"  src="../images/contact/instagram.png">

</img>
<img className="social_media"  src="../images/contact/tiwtter.png">

</img>

</Box> 
</Box> 

    </>
  )
}

export default Contact_us_input