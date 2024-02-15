import React from 'react'
import { Box, Typography } from '@mui/material'

const VideoCalling = () => {
    return (
        <Box sx={{ display: "flex", position: "relative", }}>

            {/* Left Box */}
            <Box sx={{ width: { xs: "100%", lg: "50%" }, position: "relative" }}>
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: {xs:"end", lg:"start"} }}>

                    <Typography sx={{ color: "#1C4188", fontSize: {xs:"22px", lg:"70px"}, fontWeight: 900, lineHeight: {xs:1, lg:1.2}, px:{xs:2, lg: 8}, }}>DOCTOR</Typography>
                    
                    <Box sx={{ height:{xs:"2rem", lg: "3rem"}, }}>
                        <img src="../../images/HomeVector/VideoCalling/Videoicon.svg" alt="" height={"100%"} />
                    </Box>

                    <Box sx={{ position: "absolute", top: {xs: "-3rem", lg:"-6rem"}, right:{xs: "-3rem", lg: "-6rem"}, height: {xs:"8rem", lg:"15rem"} }} >
                        <img src="../../images/HomeVector/VideoCalling/image69.svg" alt="" height={"100%"} />
                    </Box>

                </Box>

                <Typography sx={{ color: "#1C4188", fontSize: {xs:"22px", lg:"70px"},fontWeight: 900, lineHeight: {xs:1, lg:1.2}, px:{xs:2, lg: 8} }}>AND PATIENT</Typography>

                <Typography sx={{ color: "white", fontSize: {xs:"20px", lg:"70px"}, fontWeight: 700, lineHeight: 1, py: {xs: 2, lg:6}, pl: {xs: 2, lg: 8}, pr: 4, bgcolor: "#42A5F5", borderBottomRightRadius: {xs:"10px",  lg: "30px"} }}>VIDEO CALLING</Typography>

                <Typography sx={{color:"#1C4188", fontSize: {xs: "15px", lg:"22px"}, textAlign: "right", mt:2}}>Coming Soon....</Typography>

            </Box>

            {/* Right side image */}

            <Box sx={{ width: { xs: "100%", lg: "50%" }, display: "flex", justifyContent: "right", pr: {xs:2, lg:8 }}}>

                <Box sx={{ height:{xs:"10rem", lg: "30rem"}, position: "relative" }}>
                    <img src="../../images/HomeVector/VideoCalling/Hero.svg" alt="" height={"100%"} />
                </Box>
                <Box sx={{ height: {xs:"5rem", lg:"13rem"}, position: "absolute", top: {xs: "6rem", lg:"18rem"}, right: {xs:"8rem", lg:"28rem"} }}>
                    <img src="../../images/HomeVector/VideoCalling/CallImage.svg" alt="" height={"100%"} />
                </Box>

                <Box sx={{ height: {xs: "5rem", lg:"13rem"}, position: "absolute", top: {xs: "-2rem", lg:"-4rem"}, right: {xs: 0, lg:"1rem"} }}>
                    <img src="../../images/HomeVector/VideoCalling/BestCounselling.svg" alt="" height={"100%"} />
                </Box>
            </Box>
        </Box>
    )
}

export default VideoCalling