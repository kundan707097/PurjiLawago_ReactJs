import { Box, Typography } from '@mui/material'
import React from 'react'

const HowGetADoctor = () => {
    return (
        <>
            <Box sx={{  display: "flex", justifyContent: "space-between", flexDirection: { xs: "column", sm: "row" }, mb: {xs: 0, lg:4 }}}>
                <Box sx={{ display: { xs: "none", lg: "initial" } }}><img src="../images/EmergencyBooking/image175.svg" alt="img" style={{ height: "16rem" }} /></Box>

                <Box sx={{width: {xs:"100%", lg: "70%",} }}>

                    <Box>
                        <Typography sx={{ color: "#64EBB666", fontSize: {xs: "24px", lg: "60px"}, textAlign: "center", fontFamily: "Plaster" }}>HOW GET A DOCTOR </Typography>
                    </Box>

                    <Box sx={{ display: { xs: "none", lg: "flex" }, mt:1 ,justifyContent: "space-evenly", }}>

                        <Box ><img src="../images/EmergencyBooking/Group1137.svg" alt="img" style={{ height: "8rem" }} /></Box>
                        <Box ><img src="../images/EmergencyBooking/Group1134.svg" alt="img" style={{ height: "8rem" }} /></Box>
                        <Box ><img src="../images/EmergencyBooking/Group1135.svg" alt="img" style={{ height: "8rem" }} /></Box>
                        <Box ><img src="../images/EmergencyBooking/Group1136.svg" alt="img" style={{ height: "8rem" }} /></Box>

                    </Box>

                </Box>

                <Box sx={{ display: { xs: "flex", lg: "none" }, mb: 6, justifyContent: "center", width: "100%", }}>
                    <Box sx={{ m: 2 }}>
                        <Box sx={{ my: 2 }} ><img src="../images/EmergencyBooking/Group1137.svg" alt="img" style={{ height: "7rem" }} /></Box>
                        <Box  sx={{ my: 2 }}><img  src="../images/EmergencyBooking/Group1135.svg" alt="img" style={{ height: "7rem" }} /></Box>

                    </Box>
                    <Box sx={{ m: 2 }}>
                        <Box sx={{ my: 2 }}><img src="../images/EmergencyBooking/Group1134.svg" alt='img' style={{ height: "7rem" }} /></Box>
                        <Box sx={{ my: 2 }} ><img src="../images/EmergencyBooking/Group1136.svg" alt="img" style={{ height: "7rem" }} /></Box>
                    </Box>

                </Box>

                <Box sx={{ display: { xs: "none", lg: "initial" } }}><img src="../images/EmergencyBooking/image174.svg" alt="" style={{ height: "16rem" }} /></Box>

            </Box>
        </>
    )
}

export default HowGetADoctor