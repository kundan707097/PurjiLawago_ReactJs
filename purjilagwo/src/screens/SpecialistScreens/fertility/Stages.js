import { Box, Typography } from '@mui/material'
import React from 'react'

const Stages = () => {
    const displayData = [
        {
            label: "First Trimester",
            week: "(Weeks 1-12)",
            img: "../images/Fertility/img5.svg"
        },
        {
            label: "Second Trimester",
            week: "(Weeks 13-26)",
            img: "../images/Fertility/img6.svg"
        },
        {
            label: "Third Trimester",
            week: " (Weeks 27-40)",
            img: "../images/Fertility/img7.svg"
        },
        {
            label: "Labor",
            week: "and Delivery",
            img: "../images/Fertility/img8.svg"
        },
    ]
    return (
        <Box sx={{ display: "flex", justifyContent: "space-between", flexDirection: { xs: "column", sm: "row" }, py: { xs: 0, lg: 4 }, bgcolor: "#F0F6FF", my: 10 }}>

            <Box sx={{ width: { xs: "100%", lg: "70%", }, mx: "auto" }}>

                <Box>
                    <Typography sx={{ color: "#64EBB666", fontSize: { xs: "40px", lg: "60px" }, textAlign: "center", fontFamily: "Plaster" }}>Stages Of Pregnancy</Typography>
                </Box>

                <Box sx={{ display: "flex", justifyContent: "space-between",  mx: { xs: 6, lg: 15 }, flexDirection: { xs: "column", lg: "row" }, mt:6}}>
                    {displayData.map((items, index) => {
                        return (
                            <Box sx={{ width: { xs: "100%", lg: "20%" }, mb: { xs: 6, lg: 0 }, bgcolor: "#F0F6FF", }}>

                                <Box sx={{ bgcolor: "#FFFFFF", width: "11rem", borderRadius: "500px", px: 5, pt: 3, mx: "auto", }}>
                                    <img src={items.img} alt="" width={"100%"} />
                                </Box>

                                <Box sx={{ p: 2, }}>
                                    <Typography sx={{ fontWeight: 600, fontSize: "16px", color: "#1C4188", textAlign: "center" }}>{items.label}</Typography>
                                    <Typography sx={{ fontWeight: 600, fontSize: "16px", color: "#1C4188", textAlign: "center" }}>{items.week}</Typography>
                                </Box>
                            </Box>
                        )
                    })}

                </Box>

            </Box>

            {/* <Box sx={{ display: { xs: "flex", lg: "none" }, mb: 6, justifyContent: "center", width: "100%", }}>
                <Box sx={{ m: 2 }}>
                    <Box sx={{ my: 2 }} ><img src="../images/EmergencyBooking/Group1137.svg" alt="img" style={{ height: "7rem" }} /></Box>
                    <Box sx={{ my: 2 }}><img src="../images/EmergencyBooking/Group1135.svg" alt="img" style={{ height: "7rem" }} /></Box>

                </Box>
                <Box sx={{ m: 2 }}>
                    <Box sx={{ my: 2 }}><img src="../images/EmergencyBooking/Group1134.svg" alt='img' style={{ height: "7rem" }} /></Box>
                    <Box sx={{ my: 2 }} ><img src="../images/EmergencyBooking/Group1136.svg" alt="img" style={{ height: "7rem" }} /></Box>
                </Box>

            </Box> */}


        </Box>
    )
}

export default Stages