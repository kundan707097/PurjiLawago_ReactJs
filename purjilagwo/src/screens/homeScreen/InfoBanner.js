import React from 'react'
import { Box, Typography } from '@mui/material'
import { Stethoscope } from '@carbon/icons-react';
import MedicationIcon from '@mui/icons-material/Medication';
import MinorCrashIcon from '@mui/icons-material/MinorCrash';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';

const InfoBanner = () => {
  return (
    <>
    <Box sx={{ backgroundColor: "#42A5F5", padding: "20px", display: "flex", justifyContent: "space-evenly", flexDirection: { xs :"column" ,sm: "row"}}}>
                <Box sx={{ margin: "10px", color: "white", textAlign: "center" }}>
                    <HealthAndSafetyIcon style={{ backgroundColor: "white", padding: "10px", borderRadius: "100px", color: "black", fontSize: "50px" }} />
                    <Typography sx={{ my: "10px", fontWeight: 600 }}>Best Treatment</Typography>
                    <Typography sx={{ fontSize: "13px" }}>Experience the Pinnacle of Care.</Typography>
                    <Typography sx={{ fontSize: "13px" }}>Discover the Best Treament Options.</Typography>
                </Box>
                <Box sx={{ margin: "10px", color: "white", textAlign: "center" }}>
                    <MinorCrashIcon style={{ backgroundColor: "white", padding: "10px", fontSize: "50px", borderRadius: "100px", color: "black" }} />
                    <Typography sx={{ my: "10px", fontWeight: 600 }}>Emergency Help</Typography>
                    <Typography sx={{ fontSize: "13px" }}>Urgent Help, Right When You Need it.</Typography>
                    <Typography sx={{ fontSize: "13px" }}>27-7 Emergency Assistance.</Typography>
                </Box>
                <Box sx={{ margin: "10px", color: "white", textAlign: "center" }}>
                    <Stethoscope size={50} style={{ backgroundColor: "white", padding: "10px", borderRadius: "100px", color: "black" }} />
                    <Typography sx={{ my: "10px", fontWeight: 600 }}>Qualified Doctors</Typography>
                    <Typography sx={{ fontSize: "13px" }}>Expertise You Can Trust.</Typography>
                    <Typography sx={{ fontSize: "13px" }}>Meet Our Qualified Doctors Today.</Typography>
                </Box>
                <Box sx={{ margin: "10px", color: "white", textAlign: "center" }}>
                    <MedicationIcon style={{ backgroundColor: "white", borderRadius: "100px", color: "black", fontSize: "50px", padding: "10px" }} />
                    <Typography sx={{ my: "10px", fontWeight: 600 }}>Top Medical Staff</Typography>
                    <Typography sx={{ fontSize: "13px" }}>Discover Our Dedicated Medical Team.</Typography>
                    <Typography sx={{ fontSize: "13px" }}>Your Wellness Journey Begins Now.</Typography>
                </Box>


            </Box>
    </>
  )
}

export default InfoBanner