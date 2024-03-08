import { Box, Typography } from '@mui/material'
import React from 'react'

const DoctorService = () => {
    return (
        <Box sx={{ my: {xs: 5, lg: 15}, display: "flex", justifyContent: "center", flexDirection:{xs:"column", lg: "row"} }}>
            <Box sx={{ ml: {xs:0, lg:15,} }}>
                <Box sx={{ width: {xs: "100%", lg:"24rem"} }}>
                    <img src="../images/EmergencyBooking/img.svg" alt="" height={"100%"} width={"100%"} />
                </Box>
                <Typography sx={{ fontWeight: 600, color: "#1C4188", fontSize: "40px", display:{xs: "none", lg: "block"} }}>Experience</Typography>

            </Box>
            <Box sx={{ ml: {xs: 0, lg:4} }}>
                <Box sx={{ mr: {xs: 0, lg:15, }, mt:{xs: 3, lg:0}}}>
                    <Typography sx={{ fontWeight: 700, color: "#1C4188", fontSize: "40px", textAlign: {xs:"center", lg: "left"} }}>Our Emergency</Typography>
                    <Typography sx={{ fontWeight: 700, color: "#64EBB6", fontSize: "40px", mb: 3, lineHeight: 0.8, textAlign: {xs:"center", lg: "left"} }}>Doctor Services</Typography>
                    <Box sx={{ display: "flex", width: "100%", alignItems: "center", mb: 2, ml:{xs:1, lg:0}  }}>
                        <Box sx={{ p: {xs:1, lg:2}, bgcolor: "#42A5F5", borderRadius: "4px", mr: 2, height: "10px" }} />
                        <Typography sx={{ color: "#1C4188", fontSize: {xs:"18px", lg:"30px"}, fontWeight: 500, }}>Regular Medical Check-ups and Monitoring</Typography>
                    </Box>
                    <Box sx={{ display: "flex", width: "100%", alignItems: "center", mb: 2, ml:{xs:1, lg:0} }}>
                        <Box sx={{ p: {xs:1, lg:2},  bgcolor: "#42A5F5", borderRadius: "4px", mr: 2, height: "10px" }} />
                        <Typography sx={{ color: "#1C4188", fontSize: {xs:"18px", lg:"30px"}, fontWeight: 500, }}>Emphasize Balanced Diet for Maternal and Fetal Health</Typography>
                    </Box>
                    <Box sx={{ display: "flex", width: "100%", alignItems: "center", mb: 2, ml:{xs:1, lg:0} }}>
                        <Box sx={{ p: {xs:1, lg:2}, bgcolor: "#42A5F5", borderRadius: "4px", mr: 2, height: "10px" }} />
                        <Typography sx={{ color: "#1C4188", fontSize: {xs:"18px", lg:"30px"}, fontWeight: 500, }}>Vitamins and Minerals for Optimal Development</Typography>
                    </Box>
                    <Box sx={{ display: "flex", width: "100%", alignItems: "center", mb: 2, ml:{xs:1, lg:0} }}>
                        <Box sx={{ p: {xs:1, lg:2},  bgcolor: "#42A5F5", borderRadius: "4px", mr: 2, height: "10px" }} />
                        <Typography sx={{ color: "#1C4188", fontSize: {xs:"18px", lg:"30px"},fontWeight: 500, }}>Tailored Activities to Enhance Physical Well-being</Typography>
                    </Box>
                    <Box sx={{ display: "flex", width: "100%", alignItems: "center", mb: 2, ml:{xs:1, lg:0} }}>
                        <Box sx={{p: {xs:1, lg:2},  bgcolor: "#42A5F5", borderRadius: "4px", mr: 2, height: "10px" }} />
                        <Typography sx={{ color: "#1C4188", fontSize: {xs:"18px", lg:"30px"}, fontWeight: 500, }}>Promote Emotional Stability During Pregnancy</Typography>
                    </Box>

                </Box>

                <Box sx={{display:{xs: "none", lg:"block"} , width: "80%", mt:3 ,p: 3, borderRadius: "25px",   background: "linear-gradient(90deg, rgba(100, 235, 182, 0.6) 0%, rgba(245, 21, 102, 0.6) 100%)" }} />
            </Box>

        </Box>
    )
}

export default DoctorService