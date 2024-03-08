import { Box, Typography } from '@mui/material'
import React from 'react'

const TreatmentWay = () => {
    return (
        <Box sx={{ my: 3 }}>
            <Typography sx={{ fontSize: { xs: "27px", lg: "60px" }, fontWeight: 400, fontFamily: "Plaster", color: "#64EBB6", textAlign: "center", mx: 3 }}>OUR TREATMENT WAU</Typography>
            
            <Box sx={{ mx: 15, display: { xs: "none", lg: "block" } }}>
                <Box sx={{ display: "flex", justifyContent: "space-around", my: 5, alignItems: "end" }}>
                    <Box>
                        <img src="../images/EmergencyBooking/group1.svg" alt="" />
                    </Box>
                    <Box>
                        <img src="../images/EmergencyBooking/group2.svg" alt="" />
                    </Box>
                    <Box>
                        <img src="../images/EmergencyBooking/group3.svg" alt="" />
                    </Box>
                    <Box>
                        <img src="../images/EmergencyBooking/group4.svg" alt="" />
                    </Box>
                    <Box>
                        <img src="../images/EmergencyBooking/group5.svg" alt="" />
                    </Box>
                </Box>

                <Box sx={{ display: "flex", justifyContent: "space-around", my: 5, alignItems: "end" }}>
                    <Box>
                        <img src="../images/EmergencyBooking/group6.svg" alt="" />
                    </Box>
                    <Box>
                        <img src="../images/EmergencyBooking/group7.svg" alt="" />
                    </Box>
                    <Box>
                        <img src="../images/EmergencyBooking/group8.svg" alt="" />
                    </Box>
                </Box>

            </Box>

            <Box sx={{ display: { xs: "block", lg: "none" } }}>


                <Box sx={{ display: "flex", justifyContent: "space-around", mt: 3 }}>
                    <Box sx={{ height: "7rem" }}>
                        <img src="../images/EmergencyBooking/group1.svg" alt="" height={"100%"} />
                    </Box>
                    <Box sx={{ height: "7rem" }}>
                        
                        <img src="../images/EmergencyBooking/group2.svg" alt="" height={"100%"} />
                    </Box>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-around", mt: 3 }}>
                    <Box sx={{ height: "7rem" }}>
                        <img src="../images/EmergencyBooking/group3.svg" alt="" height={"100%"} />
                    </Box>
                    <Box sx={{ height: "7rem" }}>
                        <img src="../images/EmergencyBooking/group8.svg" alt="" height={"100%"} />
                    </Box>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-around", mt: 3 }}>
                    <Box sx={{ height: "7rem" }}>
                        <img src="../images/EmergencyBooking/group5.svg" alt="" height={"100%"} />
                    </Box>
                    <Box sx={{ height: "7rem" }}>
                        <img src="../images/EmergencyBooking/group6.svg" alt="" height={"100%"} />
                    </Box>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-around", mt: 3 }}>
                    <Box sx={{ height: "7rem" }}>
                        <img src="../images/EmergencyBooking/group7.svg" alt="" height={"100%"} />
                    </Box>
                    <Box sx={{ height: "7rem" }}>
                        <img src="../images/EmergencyBooking/group4.svg" alt="" height={"100%"} />
                    </Box>
                </Box>

            </Box>


        </Box>
    )
}

export default TreatmentWay