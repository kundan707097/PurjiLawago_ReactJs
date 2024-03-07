import { Box, Typography } from '@mui/material'
import React from 'react'

const EmergencyCallBanner = () => {
    return (
        <Box sx={{ bgcolor: "#42A5F5", p: 5, my: 5, display: "flex", justifyContent: "center", alignItems: "center", flexDirection: {xs:"column", lg:"row"} }}>

            <Box sx={{ width: {xs:"20rem", lg:"24rem"}, mr:{xs:0, lg:5} }}>
                <img src="../images/EmergencyBooking/Layer1.svg" alt="" height={"100%"} width={"100%"} />
            </Box>

            <Box sx={{ml:{xs:0, lg:5}}}>
                <Box sx={{display: "flex", alignItems: "end", mb:3, mt:{xs:3, lg:0}}}>
                    <Box sx={{height: {xs:"2rem", lg:"4rem"}}}>
                        <img src="../images/EmergencyBooking/image217.svg" alt="" height={"100%"}/>
                    </Box>
                    <Typography sx={{ fontWeight: 900, color: "#64EBB6", fontSize: {xs: "40px", lg:"80px"}, lineHeight:0.8 }}>15437</Typography>

                </Box>

                <Typography sx={{ fontWeight: 700, color: "white", fontSize: {xs:"30px", lg:"40px"}, }}>Calling Emergency</Typography>
                <Typography sx={{ fontWeight: 700, color: "white", fontSize: {xs:"30px", lg:"40px"}, mb: 3, lineHeight: 0.8 }}>For Doctor</Typography>


            </Box>
        </Box>
    )
}

export default EmergencyCallBanner