import { Box ,Typography} from '@mui/material'
import React from 'react'

const Privacy = () => {
  return (
    <>
      <Box class="container" >
        {/* this is for desktop */}
      <Box sx={{ display: { xs: 'none', sm: 'block' } }} >
          <Typography sx={{ fontSize: "60px", fontWeight: "800" }}> <span style={{ color: "#42a5f5" }}>PRIVACY </span> <span style={{ color: "#83efc5" }}>POLICY</span></Typography>
          </Box>

        {/* this is for  mobile */}

     
        <Box sx={{ display: { xs: 'block', sm: 'none' }, marginLeft:"20px" ,marginTop:"20px" }} >
          <Typography sx={{ fontSize: "25px", fontWeight: "800" }}> <span style={{ color: "#42a5f5" }}>PRIVACY </span> <span style={{ color: "#83efc5" }}>POLICY</span></Typography>
          </Box>
        <Typography sx={{ mt: { xs: 2, lg: 0 }, padding: "20px", color: "black" }}> At [Your Company Name], we prioritize the security and confidentiality of your personal information. We collect limited data, including your contact details and browsing behavior, solely to enhance your experience with our services. Rest assured, we never share or sell your information to third parties without your explicit consent, except as required by law. Your privacy rights are paramount to us; you can access, update, or delete your data at any time. If you have any questions or concerns regarding our privacy practices, please reach out to us at contact@example.com. Read More</Typography>
        
      </Box>
      
    </>
  )
}

export default Privacy